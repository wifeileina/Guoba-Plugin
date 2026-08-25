var __async=(t,a,g)=>new Promise((r,j)=>{var f=v=>{try{s(g.next(v))}catch(e){j(e)}},x=v=>{try{s(g.throw(v))}catch(e){j(e)}},s=v=>v.done?r(v.value):Promise.resolve(v.value).then(f,x);s((g=g.apply(t,a)).next())});
import{d as defineComponent,r as ref,A as computed,E as createBaseVNode,j as createVNode,c as resolveComponent,o as openBlock,h as createBlock,i as withCtx}from"./index.js";
import{P as PageWrapper}from"./index30.js";
import{u as useGuobaStore}from"./index34.js";
import PluginsCard from"./PluginsCard.js";
const main=defineComponent({__name:"PluginConfigHome",components:{PageWrapper,PluginsCard},setup(){const store=useGuobaStore(),loading=ref(true),plugins=ref([]),configurable=computed(()=>plugins.value.filter(plugin=>plugin.hasConfig));__async(this,null,function*(){try{plugins.value=yield store.getPlugins()}catch(error){console.error(error)}finally{loading.value=false}});return{loading,configurable}},render(ctx){const Page=resolveComponent("PageWrapper"),Cards=resolveComponent("PluginsCard");return openBlock(),createBlock(Page,{title:"插件配置"},{headerContent:withCtx(()=>[createBaseVNode("div",{class:"text-secondary"},"选择需要修改的插件，点击卡片即可进入对应配置页面。")]),default:withCtx(()=>[createVNode(Cards,{plugins:ctx.configurable,loading:ctx.loading,title:"可配置插件"},null,8,["plugins","loading"])]),_:1})}});
export{main as default};
