import { d as defineComponent, ao as onMounted, x as defHttp, o as openBlock, e as createElementBlock, b as _export_sfc, j as createVNode, gd as createApp, a4 as Icon } from './index.js'

// ---- 原生功能管理页：直接用插件自带 defHttp（自动带令牌），与插件其它页面一致；无 iframe / postMessage / 手动 token ----

const _css = '' +
  '#fm-root{color:#1f2329;background:transparent;padding:4px 4px 24px;font-size:14px}' +
  '#fm-root[data-theme="dark"]{color:#d0d5dd}' +
  '#fm-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px}' +
  '#fm-big{font-size:20px;font-weight:600;line-height:1.3}' +
  '#fm-sub{color:#8a919f;font-size:13px;margin-top:4px}' +
  '#fm-btn{background:#fff;border:1px solid #d5d8de;color:#1f2329;border-radius:6px;padding:6px 14px;cursor:pointer;font-size:13px}' +
  '#fm-root[data-theme="dark"] #fm-btn{background:#2b2f36;border-color:#3a414c;color:#d0d5dd}' +
  '#fm-btn:active{transform:translateY(1px)}' +
  '.fm-tools{position:fixed;top:56px;right:16px;left:auto;z-index:10;display:flex;align-items:center;gap:8px;width:min(320px,max(220px,calc(100vw - 220px)));padding:0;flex:none}' +
  '.fm-search-wrap{position:relative;display:flex;flex:1;min-width:0}' +
  '#fm-search,#fm-dsearch{position:static;flex:1;min-width:0;width:auto;box-sizing:border-box;padding:8px 34px 8px 12px;border:1px solid #d5d8de;border-radius:8px;font-size:13px;background:#fff;color:#1f2329;outline:none;margin:0;box-shadow:0 4px 14px rgba(31,35,41,.14)}' +
  '.fm-clear-search{position:absolute;right:6px;top:50%;transform:translateY(-50%);width:24px;height:24px;padding:0;border:0;background:transparent;color:#8a919f;font-size:18px;line-height:24px;cursor:pointer;display:none}' +
  '.fm-clear-search.visible{display:block}' +
  '.fm-clear-search:hover{color:#1f2329}' +
  '#fm-root[data-theme="dark"] #fm-search,#fm-root[data-theme="dark"] #fm-dsearch{background:#2b2f36;border-color:#3a414c;color:#d0d5dd;box-shadow:0 4px 14px rgba(0,0,0,.32)}' +
  '.fm-tools #fm-btn{flex:none;box-shadow:0 4px 14px rgba(31,35,41,.14)}' +
  '#fm-root[data-theme="dark"] .fm-tools #fm-btn{box-shadow:0 4px 14px rgba(0,0,0,.32)}' +
  '#fm-overview,#fm-detail-wrap{padding-top:0}' +
  '#fm-search:focus,#fm-dsearch:focus{border-color:#4c6fff}' +
  '#fm-search::placeholder,#fm-dsearch::placeholder{color:#aab0ba}' +
  '.fm-hit{margin-top:8px;font-size:11px;color:#4c6fff;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}' +
  '#fm-root[data-theme="dark"] .fm-hit{color:#9db2ff}' +
  '.fm-row.hit{box-shadow:inset 0 0 0 2px #4c6fff;border-color:#4c6fff}' +
  '#fm-root[data-theme="dark"] .fm-row.hit{box-shadow:inset 0 0 0 2px #6f8bff;border-color:#6f8bff}' +
  '#fm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px}' +
  '.fm-card{background:#fff;border:1px solid #ebedf0;border-radius:10px;padding:14px;cursor:pointer;transition:box-shadow .15s}' +
  '#fm-root[data-theme="dark"] .fm-card{background:#2b2f36;border-color:#3a414c}' +
  '.fm-card:hover{box-shadow:0 3px 12px rgba(0,0,0,.08)}' +
  '.fm-card-head{display:flex;align-items:center;gap:10px;margin-bottom:8px}' +
  '.fm-av{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:600;color:#fff;background:transparent;font-size:15px;flex:none;overflow:hidden}' +
  '.fm-av.fm-text-avatar{background:linear-gradient(135deg,#4c6fff,#6f5bff)}' +
  '.fm-av.fm-icon-avatar .fm-icon-slot{color:#1f2329}' +
  '#fm-root[data-theme="dark"] .fm-av.fm-icon-avatar .fm-icon-slot{color:#d0d5dd}' +
  '.fm-av img{width:100%;height:100%;object-fit:cover;background:transparent}' +
  '.fm-icon-slot{width:30px;height:30px;display:flex;align-items:center;justify-content:center;background:transparent}' +
  '.fm-name{font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
  '.fm-desc{color:#8a919f;font-size:12px;min-height:32px;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}' +
  '.fm-meta{display:flex;align-items:center;justify-content:space-between;color:#8a919f;font-size:12px}' +
  '.fm-badge{background:#eef2ff;color:#4c6fff;border-radius:20px;padding:2px 10px;font-size:12px}' +
  '#fm-root[data-theme="dark"] .fm-badge{background:#343d5a;color:#9db2ff}' +
  '.fm-state{text-align:center;color:#8a919f;padding:48px 0;font-size:14px}' +
  '.fm-back{cursor:pointer;color:#4c6fff;font-size:13px;margin-bottom:12px;display:inline-block}' +
  '#fm-detail{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:12px}' +
  '.fm-row{background:#fff;border:1px solid #ebedf0;border-radius:10px;padding:12px 14px;display:flex;flex-direction:column}' +
  '#fm-root[data-theme="dark"] .fm-row{background:#2b2f36;border-color:#3a414c}' +
  '.fm-row-head{display:flex;align-items:center;gap:8px;margin-bottom:10px}' +
  '.fm-fav{width:28px;height:28px;border-radius:6px;background:#f5f6f8;display:flex;align-items:center;justify-content:center;color:#4c6fff;font-weight:600;font-size:13px;flex:none}' +
  '#fm-root[data-theme="dark"] .fm-fav{background:#3a414c}' +
  '.fm-fname{font-weight:600;font-size:13px}' +
  '.fm-fcmd{color:#8a919f;font-size:11px;margin-left:8px;flex:1;min-width:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-break:break-all}' +
  '.fm-row-controls{display:flex;flex-direction:column;gap:10px}' +
  '.fm-chip{display:flex;flex-direction:column;gap:4px}' +
  '.fm-chip label{font-size:11px;color:#8a919f}' +
  '.fm-chip select,.fm-chip input{background:#f5f6f8;border:1px solid #e3e6ec;border-radius:6px;padding:5px 8px;font-size:12px;color:inherit;outline:none}' +
  '#fm-root[data-theme="dark"] .fm-chip select,#fm-root[data-theme="dark"] .fm-chip input{background:#1e2229;border-color:#3a414c}' +
  '.fm-actions{display:flex;gap:8px;align-items:center;justify-content:flex-end}' +
  '.fm-policy-state{min-width:42px;text-align:right;font-size:11px;color:#8a919f}' +
  '.fm-policy-state.dirty{color:#f0433c}' +
  '.fm-reset{background:transparent;color:#f0433c;border:1px solid #f0433c;border-radius:6px;padding:6px 12px;cursor:pointer;font-size:12px}' +
  '.fm-reset:disabled{opacity:.5;cursor:not-allowed}' +
  '.fm-msg{font-size:12px;margin-left:6px}' +
  '.fm-plugin-policy{grid-column:1/-1;background:#f8faff;border:1px solid #dfe6ff;border-radius:10px;padding:12px 14px;margin-bottom:4px}' +
  '#fm-root[data-theme="dark"] .fm-plugin-policy{background:#232936;border-color:#3a414c}' +
  '.fm-pp-head{display:flex;align-items:center;gap:8px;margin-bottom:10px}' +
  '.fm-pp-title{font-weight:600;font-size:13px}' +
  '.fm-pp-sub{color:#8a919f;font-size:11px;flex:1;min-width:0}' +
  '.fm-pp-controls{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px}' +
  '.fm-pp-badge{margin:6px 0 10px;display:inline-block;background:#eef2ff;color:#4c6fff;border-radius:20px;padding:2px 10px;font-size:11px}' +
  '#fm-root[data-theme="dark"] .fm-pp-badge{background:#343d5a;color:#9db2ff}' +
  '.fm-save{background:#4c6fff;color:#fff;border:0;border-radius:6px;padding:6px 12px;cursor:pointer;font-size:12px}' +
  '.fm-save:disabled{opacity:.5;cursor:not-allowed}'

function _esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  })
}

function _asArray(v) {
  if (Array.isArray(v)) return v
  if (v && typeof v === 'object' && Array.isArray(v.result)) return v.result
  return []
}

const _sfc_main = defineComponent({
  name: 'FeatureManageHome',
  setup() {
    let groups = []
    let plugins = []
    let groupOptions = []
    let mode = 'overview'
    let currentKey = null
    let search = ''
    let dsearch = ''
    let detailSearches = {}
    let iconApps = []
    let floatingObserver = null
    let routeCleanupTimer = null
    let featureRoute = ''

    function cleanupFloatingTools() {
      const tools = document.getElementById('fm-floating-tools')
      if (tools) tools.remove()
      window.removeEventListener('resize', positionTools)
      window.removeEventListener('scroll', positionTools, true)
      window.removeEventListener('hashchange', handleRouteChange)
      if (floatingObserver) {
        floatingObserver.disconnect()
        floatingObserver = null
      }
      if (routeCleanupTimer) {
        clearInterval(routeCleanupTimer)
        routeCleanupTimer = null
      }
    }

    function handleRouteChange() {
      const hash = String(window.location.hash || '')
      if (hash.indexOf('feature-manage') === -1) cleanupFloatingTools()
    }

    function restoreSearchState() {
      try {
        search = sessionStorage.getItem('fm-overview-search') || ''
        detailSearches = JSON.parse(sessionStorage.getItem('fm-detail-searches') || '{}') || {}
      } catch (e) {
        search = ''
        detailSearches = {}
      }
    }

    function persistSearchState() {
      try {
        sessionStorage.setItem('fm-overview-search', search)
        sessionStorage.setItem('fm-detail-searches', JSON.stringify(detailSearches))
      } catch (e) {}
    }

    function bindToolbarButton() {
      const btn = document.getElementById('fm-btn')
      if (!btn) return
      btn.onclick = mode === 'overview' ? load : saveCurrentDetail
    }

    function positionTools() {
      const tools = document.querySelector('#fm-floating-tools')
      if (!tools) return
      tools.style.top = '56px'
      tools.style.left = 'auto'
      tools.style.right = '16px'
    }

    function renderFloatingTools() {
      let tools = document.getElementById('fm-floating-tools')
      if (!tools) {
        tools = document.createElement('div')
        tools.id = 'fm-floating-tools'
        tools.className = 'fm-tools'
        document.body.appendChild(tools)
      }
      tools.innerHTML = mode === 'overview'
        ? '<div class="fm-search-wrap"><input id="fm-search" type="search" placeholder="搜索插件名 / 描述 / 指令..." autocomplete="off"><button class="fm-clear-search" type="button" aria-label="清空搜索" title="清空搜索">×</button></div><button id="fm-btn">刷新</button>'
        : '<div class="fm-search-wrap"><input id="fm-dsearch" type="search" placeholder="搜索本插件的指令..." autocomplete="off"><button class="fm-clear-search" type="button" aria-label="清空搜索" title="清空搜索">×</button></div><button id="fm-btn">保存</button>'
      bindToolbarButton()
      const input = document.getElementById(mode === 'overview' ? 'fm-search' : 'fm-dsearch')
      const clear = tools.querySelector('.fm-clear-search')
      const value = mode === 'overview' ? search : dsearch
      if (input) input.value = value
      if (clear) clear.classList.toggle('visible', !!value)
      if (input) input.addEventListener('input', function () {
        if (mode === 'overview') {
          search = input.value
          renderOverview()
        } else {
          dsearch = input.value
          if (currentKey) detailSearches[currentKey] = dsearch
          renderDetail(currentKey)
        }
        persistSearchState()
        if (clear) clear.classList.toggle('visible', !!input.value)
      })
      if (clear) clear.addEventListener('click', function () {
        if (mode === 'overview') {
          search = ''
          renderOverview()
        } else {
          dsearch = ''
          if (currentKey) detailSearches[currentKey] = ''
          renderDetail(currentKey)
        }
        input.value = ''
        clear.classList.remove('visible')
        persistSearchState()
        input.focus()
      })
      positionTools()
    }

    function iconFallback(g) {
      return String(g.title || g.name || '?').charAt(0).toUpperCase()
    }

    function clearIconApps() {
      iconApps.forEach(function (app) {
        try { app.unmount() } catch (e) {}
      })
      iconApps = []
    }

    function mountIcon(slot) {
      const icon = slot.getAttribute('data-icon')
      if (!icon) return
      const color = slot.getAttribute('data-color') || undefined
      const app = createApp({
        render: function () {
          return createVNode(Icon, { icon: icon, color: color, size: 30 })
        },
      })
      app.mount(slot)
      iconApps.push(app)
    }

    function fallbackAvatar(el) {
      const icon = el.getAttribute('data-icon') || 'clarity:plugin-line'
      el.className = 'fm-av fm-icon-avatar'
      el.innerHTML = '<span class="fm-icon-slot" data-icon="' + _esc(icon) + '" data-color="' + _esc(el.getAttribute('data-color') || '') + '"></span>'
      mountIcon(el.firstElementChild)
    }

    function mountPluginIcons() {
      Array.prototype.forEach.call(document.querySelectorAll('#fm-grid .fm-av img'), function (img) {
        img.addEventListener('error', function () { fallbackAvatar(img.parentElement) }, { once: true })
      })
      Array.prototype.forEach.call(document.querySelectorAll('#fm-grid .fm-icon-slot'), mountIcon)
    }

    function avHtml(g) {
      const fallback = iconFallback(g)
      const attrs = ' data-fallback="' + _esc(fallback) + '"' +
        (g.icon ? ' data-icon="' + _esc(g.icon) + '"' : '') +
        (g.iconColor ? ' data-color="' + _esc(g.iconColor) + '"' : '')
      if (g.iconPath) {
        return '<div class="fm-av fm-image-avatar"' + attrs + '><img src="' + _esc(g.iconPath) + '" alt=""></div>'
      }
      if (g.icon) {
        return '<div class="fm-av fm-icon-avatar"' + attrs + '><span class="fm-icon-slot" data-icon="' + _esc(g.icon) + '" data-color="' + _esc(g.iconColor || '') + '"></span></div>'
      }
      return '<div class="fm-av fm-icon-avatar"' + attrs + '><span class="fm-icon-slot" data-icon="clarity:plugin-line"></span></div>'
    }

    function groupCmdCount(g) {
      const count = (g.features || []).reduce(function (sum, f) {
        return sum + (Number(f.ruleCount) || 0)
      }, 0)
      return count || (g.features || []).length
    }
    function isCustomFeature(f) {
      return !!f.policy && !policyEquals(f.policy, defaultPolicy())
    }
    function isStatusQuery(q, text) {
      return q === text || q === (text === '自定义' ? 'custom' : 'unsaved')
    }
    function featureHay(f) {
      return (f.name || '') + ' ' + (f.function || '') + ' ' + (f.command || '')
    }
    function featureMatch(f, q) {
      if (isStatusQuery(q, '自定义')) return isCustomFeature(f)
      if (isStatusQuery(q, '未保存')) return !!f._dirty
      return featureHay(f).toLowerCase().indexOf(q) >= 0
    }
    function groupHay(g, q) {
      if (isStatusQuery(q, '自定义') || isStatusQuery(q, '未保存')) {
        return (g.features || []).some(function (f) { return featureMatch(f, q) })
      }
      const features = (g.features || []).map(featureHay).join(' ')
      return ((g.title || '') + ' ' + (g.name || '') + ' ' + (g.desc || '') + ' ' + (g.author || '') + ' ' + features).toLowerCase().indexOf(q) >= 0
    }
    function matchedFeatureCount(g, q) {
      return (g.features || []).filter(function (f) { return featureMatch(f, q) }).length
    }
    function renderOverview() {
      clearIconApps()
      const grid = document.getElementById('fm-grid')
      const q = search.trim().toLowerCase()
      const visible = !q ? groups : groups.filter(function (g) { return groupHay(g, q) })
      const total = visible.reduce(function (s, g) {
        return s + (q ? matchedFeatureCount(g, q) : groupCmdCount(g))
      }, 0)
      document.getElementById('fm-big').textContent = '功能管理'
      document.getElementById('fm-sub').textContent =
        q ? ('匹配 ' + visible.length + ' 个插件 / ' + total + ' 条指令')
          : ('共 ' + visible.length + ' 个插件 / ' + total + ' 条指令')
      if (!visible.length) { grid.innerHTML = '<div class="fm-state">' + (q ? '没有匹配“' + _esc(q) + '”的功能' : '暂无功能数据') + '</div>'; return }
      grid.innerHTML = visible.map(function (g) {
        const hits = q ? (g.features || []).filter(function (f) { return featureMatch(f, q) }).map(function (f) { return f.name || f.function || '' }).filter(Boolean) : []
        const hitLine = hits.length
          ? '<div class="fm-hit" title="' + _esc(hits.join('、')) + '">命中 ' + hits.length + ' 项：' + _esc(hits.slice(0, 2).join('、') + (hits.length > 2 ? '…' : '')) + '</div>'
          : ''
        const pp = g.pluginPolicy && !policyEquals(g.pluginPolicy, defaultPolicy())
        return '<div class="fm-card" data-k="' + _esc(g.plugin) + '">' +
          '<div class="fm-card-head">' + avHtml(g) +
          '<div class="fm-name" title="' + _esc(g.title || g.name) + '">' + _esc(g.title || g.name) + '</div></div>' +
          '<div class="fm-desc">' + _esc(g.desc || '暂无描述') + '</div>' +
          hitLine +
          (pp ? '<div class="fm-pp-badge">已设插件级配置</div>' : '') +
          '<div class="fm-meta"><span>' + _esc(g.author || '未知') + '</span>' +
          '<span class="fm-badge">' + groupCmdCount(g) + ' 条指令</span></div></div>'
      }).join('')
      mountPluginIcons()
      Array.prototype.forEach.call(grid.querySelectorAll('.fm-card'), function (card) {
        card.addEventListener('click', function () { openDetail(card.getAttribute('data-k')) })
      })
    }

    function defaultPolicy() {
      return { status: 'enabled', blackGroup: [], whiteGroup: [], blackUser: [], whiteUser: [], permission: 'inherit' }
    }

    function normalizePolicy(value) {
      const base = defaultPolicy()
      const src = value || {}
      const toList = function (arr) {
        return Array.isArray(arr) ? arr.map(Number).filter(Number.isSafeInteger) : []
      }
      let blackGroup = toList(src.blackGroup)
      let whiteGroup = toList(src.whiteGroup)
      // 旧字段兼容：mode + groups（单组模式）
      if (src.mode && !blackGroup.length && !whiteGroup.length) {
        const g = toList(src.groups)
        if (src.mode === 'blacklist') blackGroup = g
        else if (src.mode === 'whitelist') whiteGroup = g
      }
      return {
        status: src.status === 'disabled' ? 'disabled' : base.status,
        blackGroup,
        whiteGroup,
        blackUser: toList(src.blackUser),
        whiteUser: toList(src.whiteUser),
        permission: ['inherit', 'all', 'admin', 'owner', 'master'].includes(src.permission)
          ? src.permission
          : base.permission,
      }
    }

    function policyEquals(a, b) {
      const left = normalizePolicy(a)
      const right = normalizePolicy(b)
      return left.status === right.status &&
        left.permission === right.permission &&
        left.blackGroup.join(',') === right.blackGroup.join(',') &&
        left.whiteGroup.join(',') === right.whiteGroup.join(',') &&
        left.blackUser.join(',') === right.blackUser.join(',') &&
        left.whiteUser.join(',') === right.whiteUser.join(',')
    }

    function policyFromRow(row) {
      const toList = function (name) {
        return String(row.querySelector('[data-f="' + name + '"]').value || '')
          .split(',')
          .map(function (x) { return x.trim() })
          .filter(Boolean)
          .map(Number)
      }
      return normalizePolicy({
        status: row.querySelector('[data-f="status"]').value,
        blackGroup: toList('blackGroup'),
        whiteGroup: toList('whiteGroup'),
        blackUser: toList('blackUser'),
        whiteUser: toList('whiteUser'),
        permission: row.querySelector('[data-f="permission"]').value,
      })
    }

    function updatePolicyState(row, feature) {
      const state = row.querySelector('[data-state="policy"]')
      if (!state) return
      const dirty = !!feature._dirty
      const custom = !!feature.policy && !policyEquals(feature.policy, defaultPolicy())
      state.textContent = dirty ? '未保存' : (custom ? '自定义' : '')
      state.className = 'fm-policy-state' + (dirty ? ' dirty' : '')
    }

    function markPolicyDraft(row, feature) {
      feature._draft = policyFromRow(row)
      feature._dirty = !policyEquals(feature._draft, feature.policy || defaultPolicy())
      updatePolicyState(row, feature)
    }

    function setRowPolicy(row, policy) {
      const value = normalizePolicy(policy)
      row.querySelector('[data-f="status"]').value = value.status
      row.querySelector('[data-f="blackGroup"]').value = value.blackGroup.join(',')
      row.querySelector('[data-f="whiteGroup"]').value = value.whiteGroup.join(',')
      row.querySelector('[data-f="blackUser"]').value = value.blackUser.join(',')
      row.querySelector('[data-f="whiteUser"]').value = value.whiteUser.join(',')
      row.querySelector('[data-f="permission"]').value = value.permission
    }

    function ensureGroupDatalist() {
      let dl = document.getElementById('fm-group-datalist')
      if (!dl) {
        dl = document.createElement('datalist')
        dl.id = 'fm-group-datalist'
        document.body.appendChild(dl)
      }
      dl.innerHTML = groupOptions.map(function (it) {
        return '<option value="' + _esc(String(it.group_id)) + '">' + _esc(String(it.group_id) + ' - ' + (it.group_name || '')) + '</option>'
      }).join('')
    }

    function renderPluginPanel(g) {
      const p = normalizePolicy(g.pluginPolicy || null)
      const custom = g.pluginPolicy && !policyEquals(g.pluginPolicy, defaultPolicy())
      return '<div class="fm-plugin-policy" data-pp="1">' +
        '<div class="fm-pp-head"><span class="fm-pp-title">插件总配置</span>' +
        '<span class="fm-pp-sub">应用于本插件所有功能，单个功能配置可覆盖此配置</span>' +
        '<span class="fm-policy-state" data-state="pp">' + (g.pluginDirty ? '未保存' : (custom ? '自定义' : '')) + '</span></div>' +
        '<div class="fm-pp-controls">' +
        '<label class="fm-chip">状态<select data-p="status"><option value="enabled">启用</option><option value="disabled">停用</option></select></label>' +
        '<label class="fm-chip">黑名单群<input data-p="blackGroup" list="fm-group-datalist" placeholder="黑名单群号，输入检索选择"></label>' +
        '<label class="fm-chip">白名单群<input data-p="whiteGroup" list="fm-group-datalist" placeholder="白名单群号，输入检索选择"></label>' +
        '<label class="fm-chip">黑名单用户<input data-p="blackUser" placeholder="黑名单QQ，逗号分隔"></label>' +
        '<label class="fm-chip">白名单用户<input data-p="whiteUser" placeholder="白名单QQ，逗号分隔"></label>' +
        '<label class="fm-chip">权限<select data-p="permission"><option value="inherit">继承原权限</option><option value="all">所有人</option>' +
        '<option value="admin">群管理员</option><option value="owner">群主</option><option value="master">机器人主人</option></select></label>' +
        '<div class="fm-pp-actions"><button class="fm-save" data-act="pp-save">保存</button>' +
        '<button class="fm-reset" data-act="pp-reset">恢复默认</button>' +
        '<span class="fm-msg" data-msg="pp"></span></div>' +
        '</div></div>'
    }

    function policyFromPanel(panel) {
      const toList = function (name) {
        return String(panel.querySelector('[data-p="' + name + '"]').value || '')
          .split(',')
          .map(function (x) { return x.trim() })
          .filter(Boolean)
          .map(Number)
      }
      return normalizePolicy({
        status: panel.querySelector('[data-p="status"]').value,
        blackGroup: toList('blackGroup'),
        whiteGroup: toList('whiteGroup'),
        blackUser: toList('blackUser'),
        whiteUser: toList('whiteUser'),
        permission: panel.querySelector('[data-p="permission"]').value,
      })
    }

    function setPluginPanel(panel, policy) {
      const value = normalizePolicy(policy)
      panel.querySelector('[data-p="status"]').value = value.status
      panel.querySelector('[data-p="blackGroup"]').value = value.blackGroup.join(',')
      panel.querySelector('[data-p="whiteGroup"]').value = value.whiteGroup.join(',')
      panel.querySelector('[data-p="blackUser"]').value = value.blackUser.join(',')
      panel.querySelector('[data-p="whiteUser"]').value = value.whiteUser.join(',')
      panel.querySelector('[data-p="permission"]').value = value.permission
    }

    function markPluginDraft(g) {
      const panel = document.querySelector('#fm-detail .fm-plugin-policy')
      if (!panel) return
      g.pluginDraft = policyFromPanel(panel)
      g.pluginDirty = !policyEquals(g.pluginDraft, g.pluginPolicy || defaultPolicy())
      const state = panel.querySelector('[data-state="pp"]')
      if (state) {
        state.textContent = g.pluginDirty ? '未保存' : (g.pluginPolicy && !policyEquals(g.pluginPolicy, defaultPolicy()) ? '自定义' : '')
        state.className = 'fm-policy-state' + (g.pluginDirty ? ' dirty' : '')
      }
    }

    function savePluginPolicy(g) {
      const panel = document.querySelector('#fm-detail .fm-plugin-policy')
      if (!panel) return Promise.resolve()
      const body = policyFromPanel(panel)
      const btn = panel.querySelector('[data-act="pp-save"]')
      const msgEl = panel.querySelector('[data-msg="pp"]')
      if (btn) { btn.disabled = true; btn.textContent = '保存中…' }
      const request = policyEquals(body, defaultPolicy())
        ? defHttp.delete({ url: '/feature-policy/rules/' + encodeURIComponent(g.plugin) })
        : defHttp.put({ url: '/feature-policy/rules/' + encodeURIComponent(g.plugin), data: body })
      return request.then(function () {
        g.pluginPolicy = policyEquals(body, defaultPolicy()) ? null : body
        g.pluginDraft = null
        g.pluginDirty = false
        if (msgEl) { msgEl.textContent = '已保存'; msgEl.style.color = '#22c55e' }
        const state = panel.querySelector('[data-state="pp"]')
        if (state) { state.textContent = g.pluginPolicy ? '自定义' : ''; state.className = 'fm-policy-state' }
      }).catch(function (e) {
        if (msgEl) { msgEl.textContent = (e && e.message) || '保存失败'; msgEl.style.color = '#f0433c' }
        throw e
      }).finally(function () {
        if (btn) { btn.disabled = false; btn.textContent = '保存' }
      })
    }

    function resetPluginPolicy(g) {
      const panel = document.querySelector('#fm-detail .fm-plugin-policy')
      if (!panel) return Promise.resolve()
      setPluginPanel(panel, defaultPolicy())
      markPluginDraft(g)
      return savePluginPolicy(g)
    }

    function bindPluginPanel(g) {
      const panel = document.querySelector('#fm-detail .fm-plugin-policy')
      if (!panel) return
      setPluginPanel(panel, g.pluginDraft || g.pluginPolicy || null)
      Array.prototype.forEach.call(panel.querySelectorAll('[data-p]'), function (ctl) {
        ctl.addEventListener('input', function () { markPluginDraft(g) })
        ctl.addEventListener('change', function () { markPluginDraft(g) })
      })
      const save = panel.querySelector('[data-act="pp-save"]')
      if (save) save.addEventListener('click', function () { savePluginPolicy(g) })
      const reset = panel.querySelector('[data-act="pp-reset"]')
      if (reset) reset.addEventListener('click', function () { resetPluginPolicy(g) })
    }

    function saveCurrentDetail() {
      const g = groups.filter(function (x) { return x.plugin === currentKey })[0]
      if (!g) return Promise.resolve()
      const dirty = (g.features || []).filter(function (f) { return f._dirty })
      if (!dirty.length && !g.pluginDirty) return Promise.resolve()

      const btn = document.getElementById('fm-btn')
      if (btn) { btn.disabled = true; btn.textContent = '保存中…' }
      const rows = {}
      Array.prototype.forEach.call(document.querySelectorAll('#fm-detail .fm-row'), function (row) {
        rows[row.getAttribute('data-key')] = row
      })

      const tasks = []
      if (g.pluginDirty) tasks.push(savePluginPolicy(g))
      dirty.forEach(function (feature) {
        const body = normalizePolicy(feature._draft)
        const request = policyEquals(body, defaultPolicy())
          ? defHttp.delete({ url: '/feature-policy/rules/' + encodeURIComponent(feature.key) })
          : defHttp.put({ url: '/feature-policy/rules/' + encodeURIComponent(feature.key), data: body })
        tasks.push(request.then(function () {
          feature.policy = policyEquals(body, defaultPolicy()) ? null : body
          feature._draft = null
          feature._dirty = false
          if (rows[feature.key]) {
            updatePolicyState(rows[feature.key], feature)
            const msg = rows[feature.key].querySelector('.fm-msg')
            if (msg) { msg.textContent = ''; msg.style.color = '' }
          }
        }).catch(function (e) {
          if (rows[feature.key]) {
            const msg = rows[feature.key].querySelector('.fm-msg')
            if (msg) { msg.textContent = (e && e.message) || '保存失败'; msg.style.color = '#f0433c' }
          }
          throw e
        }))
      })
      return Promise.all(tasks).finally(function () {
        if (btn) { btn.disabled = false; btn.textContent = '保存' }
      })
    }

    function renderDetail(key) {
      const g = groups.filter(function (x) { return x.plugin === key })[0] ||
        { plugin: key, title: key, features: [] }
      document.querySelector('#fm-detail-wrap #fm-big').textContent = (g && g.title) || key
      const q = dsearch.trim().toLowerCase()
      const list = q ? g.features.filter(function (f) { return featureMatch(f, q) }) : g.features
      document.querySelector('#fm-detail-wrap #fm-sub').textContent =
        q ? ('匹配 ' + list.length + ' 条指令')
          : ('共 ' + groupCmdCount(g) + ' 条指令')
      const rows = list.map(function (f) {
        const policy = Object.assign(defaultPolicy(), f.policy || {})
        f._policy = policy
        f._groups = (policy.blackGroup || []).join(',')
        const hit = q ? ' hit' : ''
        return '<div class="fm-row' + hit + '" data-key="' + _esc(f.key) + '">' +
          '<div class="fm-row-head"><div class="fm-fav">' + _esc(String(f.name || f.function || '?').charAt(0).toUpperCase()) + '</div>' +
          '<div class="fm-fname">' + _esc(f.name || f.function) + '</div>' +
          (f.command ? '<span class="fm-fcmd" title="' + _esc(f.command) + '">' + _esc(f.command) + '</span>' : '') +
          '</div>' +
          '<div class="fm-row-controls">' +
          '<label class="fm-chip">状态<select data-f="status"><option value="enabled">启用</option><option value="disabled">停用</option></select></label>' +
          '<label class="fm-chip">黑名单群<input data-f="blackGroup" list="fm-group-datalist" placeholder="黑名单群号，输入检索选择"></label>' +
          '<label class="fm-chip">白名单群<input data-f="whiteGroup" list="fm-group-datalist" placeholder="白名单群号，输入检索选择"></label>' +
          '<label class="fm-chip">黑名单用户<input data-f="blackUser" placeholder="黑名单QQ，逗号分隔"></label>' +
          '<label class="fm-chip">白名单用户<input data-f="whiteUser" placeholder="白名单QQ，逗号分隔"></label>' +
          '<label class="fm-chip">权限<select data-f="permission"><option value="inherit">继承原权限</option><option value="all">所有人</option>' +
          '<option value="admin">群管理员</option><option value="owner">群主</option><option value="master">机器人主人</option></select></label>' +
          '<div class="fm-actions"><span class="fm-policy-state" data-state="policy"></span>' +
          '<button class="fm-reset" data-act="reset">恢复默认</button><span class="fm-msg"></span></div></div></div>'
      }).join('')
      ensureGroupDatalist()
      const body = renderPluginPanel(g) + (rows || ('<div class="fm-state">' + (q ? '本插件没有匹配的指令' : '该插件暂无功能') + '</div>'))
      document.getElementById('fm-detail').innerHTML = body
      bindPluginPanel(g)
      Array.prototype.forEach.call(document.querySelectorAll('#fm-detail .fm-row'), function (row) {
        const feature = g.features.find(function (f) { return f.key === row.getAttribute('data-key') })
        if (!feature) return
        setRowPolicy(row, feature._draft || feature._policy)
        updatePolicyState(row, feature)
        const controls = row.querySelectorAll('[data-f]')
        Array.prototype.forEach.call(controls, function (control) {
          control.addEventListener('input', function () { markPolicyDraft(row, feature) })
          control.addEventListener('change', function () { markPolicyDraft(row, feature) })
        })
        row.querySelector('[data-act="reset"]').addEventListener('click', function () {
          setRowPolicy(row, defaultPolicy())
          markPolicyDraft(row, feature)
        })
      })

      if (q) {
        const hitRows = document.querySelectorAll('#fm-detail .fm-row.hit')
        if (hitRows.length) {
          setTimeout(function () { hitRows[0].scrollIntoView({ behavior: 'smooth', block: 'center' }) }, 0)
        }
      }
    }

    function openDetail(key) {
      mode = 'detail'; currentKey = key
      document.getElementById('fm-overview').style.display = 'none'
      document.getElementById('fm-detail-wrap').style.display = 'block'
      const q = search.trim().toLowerCase()
      const g = groups.filter(function (x) { return x.plugin === key })[0]
      const matched = q && g
        ? (g.features || []).some(function (f) { return featureMatch(f, q) })
        : false
      if (matched) {
        // 当前总览筛选优先于该插件的历史详情筛选
        dsearch = search
        detailSearches[key] = dsearch
        persistSearchState()
      } else {
        dsearch = Object.prototype.hasOwnProperty.call(detailSearches, key)
          ? detailSearches[key]
          : ''
      }
      renderFloatingTools()
      renderDetail(key)
    }

    function goOverview() {
      mode = 'overview'; currentKey = null
      dsearch = ''
      document.getElementById('fm-overview').style.display = 'block'
      document.getElementById('fm-detail-wrap').style.display = 'none'
      renderOverview()
      renderFloatingTools()
    }

    function load() {
      Promise.all([
        defHttp.get({ url: '/feature-policy/scan' }).catch(function () { return [] }),
        defHttp.get({ url: '/plugin/list' }).catch(function () { return [] }),
        defHttp.get({ url: '/feature-policy/rules' }).catch(function () { return {} }),
        defHttp.get({ url: '/feature-policy/groups' }).catch(function () { return [] }),
      ]).then(function (res) {
        plugins = _asArray(res[1])
        const feats = _asArray(res[0])
        const allRules = res[2] || {}
        groupOptions = _asArray(res[3]).map(function (it) {
          return { group_id: it.group_id, group_name: it.group_name || '' }
        })
        ensureGroupDatalist()
        // 规则键不含 ":" 的视为插件级总配置
        const ppMap = {}
        Object.keys(allRules).forEach(function (k) {
          if (k.indexOf(':') === -1) ppMap[k] = allRules[k]
        })
        const pMap = {}
        function addPluginAlias(alias, plugin) {
          const key = String(alias || '').trim().toLowerCase()
          if (key) pMap[key] = plugin
        }
        plugins.forEach(function (p) {
          addPluginAlias(p.name, p)
          addPluginAlias(p.title, p)
          const title = String(p.title || '')
          const match = title.match(/\(([^()]+)\)\s*$/)
          if (match) addPluginAlias(match[1], p)
        })
        const map = {}
        feats.forEach(function (f) {
          const k = f.plugin || f.pluginName
          const g = map[k] || (map[k] = { plugin: k, name: f.pluginName || k, features: [] })
          g.features.push(f)
        })
        groups = Object.keys(map).map(function (kk) { return map[kk] })
        groups.forEach(function (g) {
          g.pluginPolicy = ppMap[g.plugin] || null
          g.pluginDraft = null
          g.pluginDirty = false
          const meta = pMap[String(g.plugin).toLowerCase()] || pMap[String(g.name).toLowerCase()]
          if (meta) {
            g.iconPath = meta.iconPath; g.desc = meta.description || ''
            g.author = Array.isArray(meta.author) ? meta.author.join(' ') : (meta.author || '')
            g.title = meta.title || g.name; g.icon = meta.icon || ''; g.iconColor = meta.iconColor || ''
          } else { g.desc = g.desc || ''; g.author = g.author || ''; g.title = g.title || g.name }
        })
        groups.sort(function (a, b) { return String(a.title || a.name).localeCompare(String(b.title || b.name)) })
        if (mode === 'overview') renderOverview()
        else renderDetail(currentKey)
      })
    }

    onMounted(function () {
      const root = document.getElementById('fm-root')
      if (!root) return
      if (!document.getElementById('fm-style')) {
        const st = document.createElement('style')
        st.id = 'fm-style'; st.textContent = _css
        document.head.appendChild(st)
      }
      try { if (localStorage.getItem('__APP__DARK__MODE__') === 'dark') root.setAttribute('data-theme', 'dark') } catch (e) {}
      restoreSearchState()
      root.innerHTML =
        '<div id="fm-overview"><div id="fm-top">' +
        '<div><div id="fm-big">功能管理</div><div id="fm-sub">加载中…</div></div></div>' +
        '<div id="fm-grid"></div></div>' +
        '<div id="fm-detail-wrap" style="display:none"><div id="fm-top">' +
        '<div><a id="fm-back" class="fm-back">‹ 返回功能管理</a>' +
        '<div id="fm-big">功能编辑</div><div id="fm-sub">&nbsp;</div></div></div>' +
        '<div id="fm-detail"></div></div>'
      document.getElementById('fm-back').addEventListener('click', goOverview)
      renderFloatingTools()
      floatingObserver = new MutationObserver(function () {
        if (!document.documentElement.contains(root)) cleanupFloatingTools()
      })
      floatingObserver.observe(document.body, { childList: true, subtree: true })
      featureRoute = String(window.location.hash || '')
      window.addEventListener('hashchange', handleRouteChange)
      routeCleanupTimer = setInterval(function () {
        if (!document.documentElement.contains(root) || String(window.location.hash || '') !== featureRoute) cleanupFloatingTools()
      }, 300)
      window.addEventListener('resize', positionTools)
      window.addEventListener('scroll', positionTools, true)
      load()
    })

    return {}
  }
})

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock('div', { id: 'fm-root', style: { padding: '8px' } }))
}

const FeatureManageHome = _export_sfc(_sfc_main, [['render', render]])
export { FeatureManageHome as default }