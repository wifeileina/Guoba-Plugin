import fs from 'fs'
import path from 'path'
import YAML from 'yaml'
import { Service } from '#guoba.framework'
import { _paths } from '#guoba.platform'
import PluginsLoader from '../../../../../lib/plugins/loader.js'
export default class FeaturePolicyService extends Service {
  _policy = null
  _policyPath = ''

  constructor(app) {
    super(app)
    this._policyPath = path.join(_paths.root, 'config', 'feature-policy.yaml')
    this._loadPolicy()
  }

  _loadPolicy() {
    try {
      if (!fs.existsSync(this._policyPath)) {
        this._policy = { rules: {} }
        return
      }
      const raw = fs.readFileSync(this._policyPath, 'utf8')
      const doc = YAML.parse(raw)
      this._policy = doc || { rules: {} }
      if (!this._policy.rules) {
        this._policy.rules = {}
      }
    } catch (e) {
      console.error('[FeaturePolicy] 加载策略失败', e)
      this._policy = { rules: {} }
    }
  }

  _savePolicy() {
    try {
      const dir = path.dirname(this._policyPath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      const yaml = YAML.stringify(this._policy, { lineWidth: -1, indent: 2 })
      fs.writeFileSync(this._policyPath, yaml, 'utf8')
    } catch (e) {
      console.error('[FeaturePolicy] 保存策略失败', e)
      throw e
    }
  }

  async getRules() {
    this._loadPolicy()
    return this._policy.rules
  }

  async getRule(key) {
    this._loadPolicy()
    return this._policy.rules[key] || null
  }

  async setRule(key, rule) {
    this._loadPolicy()
    this._policy.rules[key] = rule
    this._savePolicy()
  }

  async deleteRule(key) {
    this._loadPolicy()
    delete this._policy.rules[key]
    this._savePolicy()
  }

  // 插件目录是总览分组键，插件类名是目录内的功能名。
  // 同一功能类的多条正则合并显示，不把每条 rule 拆成独立功能。
  async scanAllFeatures() {
    const featureMap = new Map()
    for (const entry of PluginsLoader.priority || []) {
      const rawPluginKey = String(entry.key || entry.namespace || '').trim()
      const pluginKey = rawPluginKey.split(/[\\\\/]/)[0]
      const name = String(entry.name || entry.namespace || pluginKey || '').trim()
      if (!pluginKey || !name) continue

      const rules = Array.isArray(entry.plugin?.rule) ? entry.plugin.rule : []
      const commands = rules
        .map(rule => rule?.reg)
        .map(reg => reg instanceof RegExp ? reg.source : reg?.source || (reg ? String(reg) : ''))
        .filter(Boolean)
      const permissions = rules.map(rule => rule?.permission).filter(Boolean)
      const key = `${pluginKey}:${name}`
      const feature = featureMap.get(key) || {
        key,
        plugin: pluginKey,
        pluginName: pluginKey,
        function: name,
        name,
        commands: [],
        permissions: [],
        ruleCount: 0,
      }

      feature.ruleCount += rules.length
      feature.commands.push(...commands)
      feature.permissions.push(...permissions)
      featureMap.set(key, feature)
    }

    return [...featureMap.values()]
      .map(feature => ({
        key: feature.key,
        plugin: feature.plugin,
        pluginName: feature.pluginName,
        function: feature.function,
        name: feature.name,
        command: [...new Set(feature.commands)].join('  |  '),
        permission: [...new Set(feature.permissions)].length === 1
          ? feature.permissions[0]
          : 'all',
        ruleCount: feature.ruleCount,
      }))
      .sort(
        (a, b) =>
          a.plugin.localeCompare(b.plugin, 'zh-Hans-CN') ||
          a.name.localeCompare(b.name, 'zh-Hans-CN')
      )
  }
}