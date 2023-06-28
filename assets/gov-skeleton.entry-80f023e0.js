import{r as i,h as n,H as g,g as l}from"./index-865d434c.js";import{p as v,d as c}from"./utils-c057a3fa-060e2c21.js";import{V as d}from"./variants-2b936d58-0853e1f0.js";import{g as k}from"./template-10332292-dbb3a177.js";import{v as r}from"./props-789f7529-a031cd01.js";import{c as u}from"./win-9c8460bb-918db7b8.js";import{v as p}from"./wcag-3792d4bb-39d8b903.js";import"./gov.log-af905420-9e1fc599.js";import"./string.utils-f268fc6b-a0e9075c.js";const h=v(d,["PRIMARY","SECONDARY","SUCCESS","ERROR","WARNING"]);var a;(function(o){o.CIRCLE="circle",o.REACT="rect",o.TEXT="text"})(a||(a={}));var t;(function(o){o.PULSE="pulse",o.PROGRESS="progress",o.FALSE="false"})(t||(t={}));const e={root:"gov-skeleton",loader:"gov-skeleton__loader"},m=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-skeleton__loader{position:relative;display:inline-block;width:var(--gov-skeleton-width, 100%);height:var(--gov-skeleton-height, 20px);margin-bottom:var(--gov-skeleton-margin-bottom, 8px);border-radius:var(--gov-skeleton-border-radius, var(--gov-border-radius, 0.1875rem));outline:none;overflow:hidden;box-sizing:border-box;will-change:transform}.gov-skeleton__loader.circle{width:var(--gov-skeleton-circle-size, 60px);height:var(--gov-skeleton-circle-size, 60px);margin-bottom:var(--gov-skeleton-margin-bottom, 8px);border-radius:var(--gov-skeleton-circle-radius, 50%)}.gov-skeleton__loader.rect{border-radius:var(--gov-skeleton-rect-radius, 0)}.gov-skeleton__loader.progress{background-size:200px 100%;animation:progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite}.gov-skeleton__loader.pulse{animation:pulse 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;animation-delay:0.5s}@media (prefers-reduced-motion: reduce){.gov-skeleton__loader.pulse,.gov-skeleton__loader.progress{background-image:none;animation:none}}.gov-skeleton[variant=warning] .gov-skeleton__loader{background-color:var(--gov-skeleton-warning-background, var(--gov-color-warning-100));background-repeat:no-repeat}.gov-skeleton[variant=warning] .gov-skeleton__loader.progress{background-image:linear-gradient(90deg, var(--gov-skeleton-warning-background, var(--gov-color-warning-100)), var(--gov-skeleton-warning-foreground, var(--gov-color-warning-200)), var(--gov-skeleton-warning-background, var(--gov-color-warning-100)))}.gov-skeleton[variant=error] .gov-skeleton__loader{background-color:var(--gov-skeleton-error-background, var(--gov-color-error-100));background-repeat:no-repeat}.gov-skeleton[variant=error] .gov-skeleton__loader.progress{background-image:linear-gradient(90deg, var(--gov-skeleton-error-background, var(--gov-color-error-100)), var(--gov-skeleton-error-foreground, var(--gov-color-error-200)), var(--gov-skeleton-error-background, var(--gov-color-error-100)))}.gov-skeleton[variant=secondary] .gov-skeleton__loader{background-color:var(--gov-skeleton-secondary-background, var(--gov-color-secondary-300));background-repeat:no-repeat}.gov-skeleton[variant=secondary] .gov-skeleton__loader.progress{background-image:linear-gradient(90deg, var(--gov-skeleton-secondary-background, var(--gov-color-secondary-300)), var(--gov-skeleton-secondary-foreground, var(--gov-color-secondary-100)), var(--gov-skeleton-secondary-background, var(--gov-color-secondary-300)))}.gov-skeleton[variant=success] .gov-skeleton__loader{background-color:var(--gov-skeleton-success-background, var(--gov-color-success-100));background-repeat:no-repeat}.gov-skeleton[variant=success] .gov-skeleton__loader.progress{background-image:linear-gradient(90deg, var(--gov-skeleton-success-background, var(--gov-color-success-100)), var(--gov-skeleton-success-foreground, var(--gov-color-success-200)), var(--gov-skeleton-success-background, var(--gov-color-success-100)))}.gov-skeleton[variant=primary] .gov-skeleton__loader{background-color:var(--gov-skeleton-primary-background, var(--gov-color-primary-100));background-repeat:no-repeat}.gov-skeleton[variant=primary] .gov-skeleton__loader.progress{background-image:linear-gradient(90deg, var(--gov-skeleton-primary-background, var(--gov-color-primary-100)), var(--gov-skeleton-primary-foreground, var(--gov-color-primary-200)), var(--gov-skeleton-primary-background, var(--gov-color-primary-100)))}",b=class{constructor(o){i(this,o),this.items=[],this.variant="secondary",this.count=1,this.shape="text",this.width=null,this.height=null,this.animation="progress",this.wcagLabel=void 0,this.h=k(this.host)}validateVariant(o){r(h,o,e.root)}validateShape(o){r(a,o,e.root)}validateAnimation(o){r(t,o,e.root)}componentWillLoad(){this.validateVariant(this.variant),this.validateShape(this.shape),this.validateAnimation(this.animation),this.init()}componentWillUpdate(){this.init()}async componentDidRender(){u()&&(await c(500),await this.validateWcag())}init(){this.items.length=this.count,this.items.fill(1)}get style(){const o={width:null,height:null};return this.width&&(o.width=this.width),this.height&&(o.height=this.height),Object.assign({},o)}render(){return n(g,{class:this.h.classes(e.root),variant:this.variant},this.items.map((o,s)=>n("span",{key:s,class:{circle:this.shape==="circle",rect:this.shape==="rect",progress:this.animation==="progress",pulse:this.animation==="pulse",[e.loader]:!0},"aria-busy":"true","aria-valuemin":"0","aria-valuemax":"100","aria-valuetext":this.wcagLabel,role:"progressbar",tabindex:"0",style:this.style})))}async validateWcag(){p(this.wcagLabel,void 0,e.root)}get host(){return l(this)}static get watchers(){return{variant:["validateVariant"],shape:["validateShape"],animation:["validateAnimation"]}}};b.style=m;export{b as gov_skeleton};
