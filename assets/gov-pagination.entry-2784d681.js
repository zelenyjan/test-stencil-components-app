import{a as _,d as f,b as a,H as k,g as P}from"./index-dd1e5e8a.js";import{F as S}from"./Fragment-8d8d54fb-0f1273b7.js";import{v}from"./props-789f7529-a031cd01.js";import{S as z}from"./sizes-6c5943b4-77be388d.js";import{V as x}from"./variants-2b936d58-0853e1f0.js";import{p as b,d as L}from"./utils-c057a3fa-060e2c21.js";import{g as A,p as l,t as I}from"./template-10332292-dbb3a177.js";import{c as h,v as C}from"./wcag-3792d4bb-39d8b903.js";import{c as R}from"./win-9c8460bb-918db7b8.js";import{c as V}from"./string.utils-f268fc6b-a0e9075c.js";import"./gov.log-af905420-9e1fc599.js";const H=b(z,["_S","_M"]),M=b(x,["PRIMARY","SECONDARY"]);var p;(function(e){e.BUTTON="button",e.SELECT="select"})(p||(p={}));const t={root:"gov-pagination",list:"gov-pagination__list",item:"gov-pagination__item",itemArrow:"gov-pagination__item--arrow",itemMore:"gov-pagination__item--more",itemSelect:"gov-pagination__item--select",inner:"gov-pagination__inner",arrow:"gov-pagination__arrow"};function B(e,o=1,r=10,s=10){const n=Math.ceil(e/r);o<1?o=1:o>n&&(o=n);let i,g;if(n<=s)i=1,g=n;else{const c=Math.floor(s/2),d=Math.ceil(s/2)-1;o<=c?(i=1,g=s):o+d>=n?(i=n-s+1,g=n):(i=o-c,g=o+d)}const u=(o-1)*r,y=Math.min(u+r-1,e-1),w=Array.from(Array(g+1-i).keys()).map(c=>i+c);return{totalItems:e,currentPage:o,pageSize:r,totalPages:n,startPage:i,endPage:g,startIndex:u,endIndex:y,pages:w}}const m=(e,o)=>[...Array(o+1).keys()].slice(e),E=".gov-pagination__list{margin:0;padding:0}.gov-pagination__list .gov-pagination__item{margin:0;padding:0;background:none}.gov-pagination__list .gov-pagination__item::before{display:none}.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-pagination{position:relative;display:block;width:100%}.gov-pagination__list{display:flex;align-items:center;flex-wrap:wrap;font-weight:bold;text-align:center}.gov-pagination__list .gov-pagination__item{display:flex;justify-content:center;align-items:center;margin:0;padding:0.125rem;border-radius:var(--gov-border-radius, 0.1875rem);overflow:hidden}.gov-pagination__list .gov-pagination__item--arrow{display:flex}.gov-pagination__list .gov-pagination__item--select{z-index:1;display:flex;overflow:visible;padding:0rem 1rem}.gov-pagination__arrow{margin:0}.gov-pagination__item--more .gov-form-select select{border:none;padding-right:0.75rem !important}.gov-pagination__item--more .gov-form-select .gov-icon{display:none}.gov-pagination__inner{display:flex;justify-content:center;align-items:center;align-self:stretch;width:100%;text-decoration:none}.gov-pagination__inner[wcag-current=true][type=solid][variant=primary] .element{background-color:var(--gov-button-primary-solid-hover-bg, var(--gov-color-primary-700));color:var(--gov-button-primary-solid-hover-color, var(--gov-color-neutral-white))}.gov-pagination__inner[wcag-current=true][type=outlined][variant=primary] .element{background-color:var(--gov-button-primary-outlined-hover-bg, var(--gov-color-primary-100));color:var(--gov-button-primary-outlined-hover-color, var(--gov-color-primary))}.gov-pagination__inner[wcag-current=true][type=base][variant=primary] .element{background-color:var(--gov-button-primary-base-hover-bg, var(--gov-color-primary-100));color:var(--gov-button-primary-base-hover-color, var(--gov-color-primary))}.gov-pagination__inner[wcag-current=true][type=link][variant=primary] .element{background-color:var(--gov-button-primary-link-hover-bg, transparent);color:var(--gov-button-primary-link-hover-color, var(--gov-color-primary))}.gov-pagination__inner[wcag-current=true][type=solid][variant=secondary] .element{background-color:var(--gov-button-secondary-solid-hover-bg, var(--gov-color-secondary-900));color:var(--gov-button-secondary-solid-hover-color, var(--gov-color-neutral-white))}.gov-pagination__inner[wcag-current=true][type=outlined][variant=secondary] .element{background-color:var(--gov-button-secondary-outlined-hover-bg, var(--gov-color-secondary-300));color:var(--gov-button-secondary-outlined-hover-color, var(--gov-color-secondary))}.gov-pagination__inner[wcag-current=true][type=base][variant=secondary] .element{background-color:var(--gov-button-secondary-base-hover-bg, var(--gov-color-secondary-300));color:var(--gov-button-secondary-base-hover-color, var(--gov-color-secondary))}.gov-pagination__inner[wcag-current=true][type=link][variant=secondary] .element{background-color:var(--gov-button-secondary-link-hover-bg, transparent);color:var(--gov-button-secondary-link-hover-color, var(--gov-color-secondary))}.gov-pagination__inner[wcag-current=true][type=solid][variant=error] .element{background-color:var(--gov-button-error-solid-hover-bg, var(--gov-color-error-500));color:var(--gov-button-error-solid-hover-color, var(--gov-color-neutral-white))}.gov-pagination__inner[wcag-current=true][type=outlined][variant=error] .element{background-color:var(--gov-button-error-outlined-hover-bg, var(--gov-color-error-100));color:var(--gov-button-error-outlined-hover-color, var(--gov-color-error))}.gov-pagination__inner[wcag-current=true][type=base][variant=error] .element{background-color:var(--gov-button-error-base-hover-bg, var(--gov-color-error-100));color:var(--gov-button-error-base-hover-color, var(--gov-color-error))}.gov-pagination__inner[wcag-current=true][type=link][variant=error] .element{background-color:var(--gov-button-error-link-hover-bg, transparent);color:var(--gov-button-error-link-hover-color, var(--gov-color-error))}.gov-pagination__inner[wcag-current=true][type=solid][variant=success] .element{background-color:var(--gov-button-success-solid-hover-bg, var(--gov-color-success-600));color:var(--gov-button-success-solid-hover-color, var(--gov-color-neutral-white))}.gov-pagination__inner[wcag-current=true][type=outlined][variant=success] .element{background-color:var(--gov-button-success-outlined-hover-bg, var(--gov-color-success-100));color:var(--gov-button-success-outlined-hover-color, var(--gov-color-success-500))}.gov-pagination__inner[wcag-current=true][type=base][variant=success] .element{background-color:var(--gov-button-success-base-hover-bg, var(--gov-color-success-100));color:var(--gov-button-success-base-hover-color, var(--gov-color-success-500))}.gov-pagination__inner[wcag-current=true][type=link][variant=success] .element{background-color:var(--gov-button-success-link-hover-bg, transparent);color:var(--gov-button-success-link-hover-color, var(--gov-color-success-500))}.gov-pagination__inner[wcag-current=true][type=solid][variant=warning] .element{background-color:var(--gov-button-warning-solid-hover-bg, var(--gov-color-warning-600));color:var(--gov-button-warning-solid-hover-color, var(--gov-color-neutral-white))}.gov-pagination__inner[wcag-current=true][type=outlined][variant=warning] .element{background-color:var(--gov-button-warning-outlined-hover-bg, var(--gov-color-warning-200));color:var(--gov-button-warning-outlined-hover-color, var(--gov-color-warning-500))}.gov-pagination__inner[wcag-current=true][type=base][variant=warning] .element{background-color:var(--gov-button-warning-base-hover-bg, var(--gov-color-warning-200));color:var(--gov-button-warning-base-hover-color, var(--gov-color-warning-500))}.gov-pagination__inner[wcag-current=true][type=link][variant=warning] .element{background-color:var(--gov-button-warning-link-hover-bg, transparent);color:var(--gov-button-warning-link-hover-color, var(--gov-color-warning-500))}.gov-pagination[size=s] .gov-pagination__inner{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);font-weight:inherit}.gov-pagination[size=s] .gov-pagination__inner .element{min-width:var(--gov-pagination-s-button-size, 2rem)}.gov-pagination[size=m] .gov-pagination__inner{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing);font-weight:inherit}.gov-pagination[size=m] .gov-pagination__inner .element{min-width:var(--gov-pagination-m-button-size, 2.5rem)}",W=class{constructor(e){_(this,e),this.govPage=f(this,"gov-page",7),this.type="button",this.current=1,this.total=void 0,this.inverse=void 0,this.size="m",this.variant="primary",this.pageSize=10,this.maxPages=5,this.link=void 0,this.wcagLabel=void 0,this.wcagLabelledBy=void 0,this.wcagSelectLabel="Vybrat stranu",this.wcagPageLabel="Strana",this.pagination=void 0,this.h=A(this.host),this.pageSelectId=V("GovPageSelect")}validateType(e){v(p,e,t.root)}validateSize(e){v(H,e,t.root)}validateVariant(e){v(M,e,t.root)}componentWillLoad(){this.recalculatePagination(this.current),this.validateSize(this.size),this.validateVariant(this.variant)}async componentDidRender(){R()&&(await L(500),await this.validateWcag())}recalculatePagination(e){this.pagination=B(this.total,e,this.pageSize,this.maxPages)}isActivePageClass(e,o){return this.pagination.currentPage===o?e+" is-active":e}prepareLinkUrl(e){if(this.link)return String(this.link).replace("{PAGE}",String(e))}resetSelectValue(){this.spreadSelectRef&&this.spreadSelectRef.getInstance().then(e=>{e.value="..."})}render(){const e=(o,r)=>{const s=o===-1,n=I(this.pagination.currentPage===o?!0:void 0);return a("gov-button",{href:this.prepareLinkUrl(o),variant:this.variant,size:this.size,type:"base",disabled:s,"on-gov-click":i=>this.onClickHandler(i,o),"wcag-label":o>-1?this.wcagPageLabel+" "+o:void 0,"wcag-current":n,class:t.inner},r)};return a(k,{class:this.h.classes(t.root),type:this.type,variant:this.variant,size:this.size},a("nav",{"aria-label":this.wcagLabel,"aria-labelledby":this.wcagLabelledBy},a("ul",{class:t.list},a("li",{class:l([t.item,t.itemArrow])},e(this.pagination.currentPage>1?1:-1,a("gov-icon",{class:t.arrow,name:"chevron-double-left"}))),a("li",{class:l([t.item,t.itemArrow])},e(this.pagination.startPage<this.pagination.currentPage?this.pagination.currentPage-1:-1,a("gov-icon",{class:t.arrow,name:"chevron-left"}))),this.type=="select"?a("li",{class:l([t.item,t.itemSelect])},a("span",{class:t.inner},a("span",{id:this.pageSelectId,hidden:!0},this.wcagSelectLabel),a("gov-form-select",{size:"m","wcag-labelled-by":this.pageSelectId,"on-gov-change":this.onSelectHandler.bind(this)},m(1,this.pagination.totalPages).map(o=>a("option",{value:o,selected:this.pagination.currentPage===o},o))))):a(S,null,this.pagination.pages.map(o=>a("li",{class:this.isActivePageClass(t.item,o)},e(o,o))),a("li",{class:l([t.item,t.itemMore])},a("span",{class:t.inner},a("span",{id:this.pageSelectId,hidden:!0},this.wcagSelectLabel),a("gov-form-select",{size:"m","wcag-labelled-by":this.pageSelectId,ref:o=>this.spreadSelectRef=o,"on-gov-change":this.onSelectHandler.bind(this)},a("option",{selected:!0,hidden:!0},"..."),m(1,this.pagination.totalPages).map(o=>a("option",{value:o,selected:!1},o)))))),a("li",{class:l([t.item,t.itemArrow])},e(this.pagination.totalPages>this.pagination.currentPage?this.pagination.currentPage+1:-1,a("gov-icon",{class:t.arrow,name:"chevron-right"}))),a("li",{class:l([t.item,t.itemArrow])},e(this.pagination.totalPages>this.pagination.currentPage?this.pagination.totalPages:-1,a("gov-icon",{class:t.arrow,name:"chevron-double-right"}))))))}onClickHandler(e,o){e.stopPropagation(),this.recalculatePagination(o),this.govPage.emit(Object.assign({},this.pagination))}onSelectHandler(e){e.stopPropagation();const o=e.target,r=parseInt(o.value);this.resetSelectValue(),isNaN(r)===!1&&(this.recalculatePagination(r),this.link?window.location.href=this.prepareLinkUrl(r):this.govPage.emit(Object.assign({},this.pagination)))}async validateWcag(){h(this.wcagPageLabel,"wcag-page-label",t.root),C(this.wcagLabel,this.wcagLabelledBy,t.root),this.type==="select"&&h(this.wcagSelectLabel,"wcag-select-label",t.root)}get host(){return P(this)}static get watchers(){return{type:["validateType"],size:["validateSize"],variant:["validateVariant"]}}};W.style=E;export{W as gov_pagination};