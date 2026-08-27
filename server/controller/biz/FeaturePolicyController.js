import { autowired, Result } from '#guoba.framework'
import { ApiController } from '#guoba.platform'

export default class FeaturePolicyController extends ApiController {
  featurePolicyService = autowired('featurePolicyService')

  constructor(guobaApp) {
    super('/feature-policy', guobaApp)
  }

  registerRouters() {
    this.get('/scan', this.scanFeatures)
    this.get('/rules', this.getRules)
    this.get('/rules/:key', this.getRule)
    this.put('/rules/:key', this.setRule)
    this.delete('/rules/:key', this.deleteRule)
    this.get('/groups', this.queryGroups)
  }

  async queryGroups(req) {
    const kw = String(req.query?.kw || '').trim()
    const groupMap = Bot.getGroupMap?.() || new Map()
    const list = []
    for (const [, item] of groupMap) {
      const name = String(item.group_name ?? item.group?.group_name ?? item.name ?? '')
      if (kw && !String(item.group_id).includes(kw) && !name.includes(kw)) continue
      list.push({ group_id: item.group_id, group_name: name })
    }
    list.sort((a, b) => String(a.group_id).localeCompare(String(b.group_id)))
    return Result.ok(list.slice(0, 50))
  }

  async scanFeatures() {
    const features = await this.featurePolicyService.scanAllFeatures()
    const rules = await this.featurePolicyService.getRules()
    for (const f of features) {
      f.policy = rules[f.key] || null
    }
    return Result.ok(features)
  }

  async getRules() {
    const rules = await this.featurePolicyService.getRules()
    return Result.ok(rules)
  }

  async getRule(req) {
    const { key } = req.params
    const rule = await this.featurePolicyService.getRule(key)
    if (!rule) return Result.error('规则不存在')
    return Result.ok(rule)
  }

  async setRule(req) {
    const { key } = req.params
    const input = req.body
    if (!input || typeof input !== 'object') return Result.error('参数错误')
    if (!['enabled', 'disabled'].includes(input.status)) return Result.error('策略值无效')
    if (!['inherit', 'all', 'admin', 'owner', 'master'].includes(input.permission)) return Result.error('权限值无效')
    // 四类名单：黑名单群 / 白名单群 / 黑名单用户 / 白名单用户
    const list = arr => [...new Set((Array.isArray(arr) ? arr : []).map(Number).filter(Number.isSafeInteger))]
    const rule = { status: input.status, permission: input.permission }
    if (input.blackGroup) rule.blackGroup = list(input.blackGroup)
    if (input.whiteGroup) rule.whiteGroup = list(input.whiteGroup)
    if (input.blackUser) rule.blackUser = list(input.blackUser)
    if (input.whiteUser) rule.whiteUser = list(input.whiteUser)
    await this.featurePolicyService.setRule(key, rule)
    return Result.ok({}, '保存成功')
  }

  async deleteRule(req) {
    const { key } = req.params
    await this.featurePolicyService.deleteRule(key)
    return Result.ok({}, '删除成功')
  }
}
