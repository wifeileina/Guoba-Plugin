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
    if (!input || !Array.isArray(input.groups)) return Result.error('参数错误')
    if (!['enabled', 'disabled'].includes(input.status)) return Result.error('策略值无效')
    if (!['blacklist', 'whitelist'].includes(input.mode)) return Result.error('名单模式无效')
    if (!['inherit', 'all', 'admin', 'owner', 'master'].includes(input.permission)) return Result.error('权限值无效')
    const rule = { status: input.status, mode: input.mode, groups: [...new Set(input.groups.map(Number).filter(Number.isSafeInteger))], permission: input.permission }
    await this.featurePolicyService.setRule(key, rule)
    return Result.ok({}, '保存成功')
  }

  async deleteRule(req) {
    const { key } = req.params
    await this.featurePolicyService.deleteRule(key)
    return Result.ok({}, '删除成功')
  }
}
