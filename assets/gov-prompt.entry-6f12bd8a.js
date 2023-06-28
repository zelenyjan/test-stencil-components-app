import{r as l,c as s,h as o,H as d,g as r}from"./index-865d434c.js";import{c as i}from"./string.utils-f268fc6b-a0e9075c.js";import{a as t}from"./wcag-3792d4bb-39d8b903.js";import{M as a}from"./constants-ba13b28f-be674fe4.js";import{c as n}from"./win-9c8460bb-918db7b8.js";import{d as g}from"./utils-c057a3fa-060e2c21.js";import{g as m,a as c}from"./template-10332292-dbb3a177.js";import{g as h}from"./gov.log-af905420-9e1fc599.js";const v='.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-modal{display:none}.gov-modal__dialog{z-index:101;position:fixed;top:50%;left:50%;display:flex;justify-content:center;align-items:center;width:100%;max-width:var(--gov-modal-max-width, 52.5rem);height:100%;padding:0.5rem;border:none;background:transparent;transform:translate(-50%, -50%);pointer-events:none}.gov-modal__inner{position:relative;display:flex;flex-direction:column;width:100%;max-height:100%;border-radius:var(--gov-border-radius, 0.1875rem);background:var(--gov-modal-bg, var(--gov-color-neutral-white));overflow:hidden;pointer-events:auto;box-shadow:0 0 1.5rem rgba(var(--gov-color-secondary-800-rgb), 0.24)}.gov-modal__header{display:flex;gap:1rem;align-items:flex-start;padding:1.5rem 1rem;border-bottom:var(--gov-modal-border-color, 0.0625rem solid var(--gov-color-secondary-500))}.gov-modal__icon{flex:0 0 auto;padding-top:calc((var(--gov-text-3xl-font-size) * 1.5 - 1.5rem) / 2)}.gov-modal__icon>*{width:1.5rem;height:1.5rem}.gov-modal__title{font-weight:var(--gov-text-3xl-font-weight);font-size:var(--gov-text-3xl-font-size);line-height:var(--gov-text-3xl-line-height);letter-spacing:var(--gov-text-3xl-letter-spacing);margin:0}.gov-modal__close{flex:0 0 auto;margin-left:auto;padding-top:calc((var(--gov-text-3xl-font-size) * 1.5 - 2rem) / 2)}.gov-modal__content{height:100%;padding:1.5rem 1rem;color:var(--gov-modal-text-color, var(--gov-color-secondary-700));overflow:auto}.gov-modal__content>*:last-child{margin-bottom:0}.gov-modal__actions{display:flex;gap:0.5rem 1rem;flex-wrap:wrap;justify-content:flex-end;padding:1.5rem 1rem;border-top:var(--gov-modal-border-color, 0.0625rem solid var(--gov-color-secondary-500))}.gov-modal__dialog:focus .gov-modal__inner{outline:var(--gov-outline-width, 0.125rem) solid var(--gov-color-focus-base)}.gov-modal[open=""],.gov-modal[open=true i],.gov-modal[open="1"]{display:block}@media (min-width: 30em){.gov-modal__dialog{max-width:calc(var(--gov-modal-max-width, 52.5rem) + 3rem);padding:1.5rem}.gov-modal__dialog:focus{outline-offset:-1.5rem}.gov-modal__inner{box-shadow:0 0 2rem rgba(var(--gov-color-secondary-800-rgb), 0.32)}.gov-modal--prompt .gov-modal__dialog{max-width:calc(var(--gov-modal-prompt-max-width, 33.125rem) + 3rem)}}@media (min-width: 48em){.gov-modal__header{gap:1.25rem;padding:2rem 2.5rem 2rem 3rem}.gov-modal__close{padding-top:calc((var(--gov-text-3xl-font-size) * 1.5 - 2.5rem) / 2)}.gov-modal__content{padding:2rem 3rem}.gov-modal--prompt .gov-modal__header,.gov-modal--prompt .gov-modal__content,.gov-modal--prompt .gov-modal__actions{padding:1.5rem}}',p=class{constructor(e){l(this,e),this.govClose=s(this,"gov-close",7),this.open=!1,this.label=void 0,this.role="dialog",this.labelTag="h2",this.wcaglabelledBy=void 0,this.wcagDescribedBy=void 0,this.wcagCloseLabel=void 0,this.wcagCloseLabelledBy=void 0,this.modalVisible=!1,this.h=m(this.host),this.labelId=i("GovPromptLabel"),this.contentId=i("GovPromptContent")}validateLabelTag(e){e&&(["h1","h2","h3","h4","h5","h6"].includes(e)||h(`[${a.root}]: Tag ${e} is not allowed.`))}watchOpen(e){this.modalVisible=e}showModal(){this.modalVisible=!0,document.body.classList.add(a.bodyFix)}hideModal(){this.modalVisible=!1,document.body.classList.remove(a.bodyFix)}async componentWillRender(){this.modalVisible?this.showModal():this.hideModal()}async componentDidRender(){this.modalVisible=this.open,n()&&(await g(500),await this.validateWcag())}render(){const e=this.labelTag;return o(d,{class:this.h.classes(a.rootPrompt),open:this.modalVisible},o("dialog",{class:a.dialog,hidden:!this.modalVisible,tabindex:"-1",open:this.modalVisible,"aria-modal":"true","aria-hidden":c(!this.modalVisible),"aria-labelledby":this.wcaglabelledBy||this.labelId,"aria-describedby":this.wcagDescribedBy||this.contentId,role:this.role},o("div",{class:a.inner},o("div",{class:a.header},this.h.hasSlot("icon")&&o("div",{class:a.icon},o("slot",{name:"icon"})),this.label&&o(e,{class:a.title,id:this.labelId},this.label),o("gov-button",{class:a.close,variant:"primary",wcagLabel:this.wcagCloseLabel,wcagLabelledBy:this.wcagCloseLabelledBy,type:"base","on-gov-click":this.onCloseHandler.bind(this)},o("gov-icon",{name:"x-lg"}))),o("div",{class:a.content,id:this.contentId},o("slot",null)),o("div",{class:a.actions},o("slot",{name:"actions"})))),o("gov-backdrop",{visible:this.modalVisible,"wcag-label":this.wcagCloseLabel,"wcag-labelled-by":this.wcagCloseLabelledBy,"on-gov-click":this.onCloseHandler.bind(this)}))}onCloseHandler(e){e.stopPropagation(),this.hideModal(),this.govClose.emit(e)}async show(){this.showModal()}async hide(){this.hideModal()}async validateWcag(){t(this.wcaglabelledBy,"aria-labelledby",a.root),t(this.wcagDescribedBy,"aria-describedby",a.root)}get host(){return r(this)}static get watchers(){return{labelTag:["validateLabelTag"],open:["watchOpen"]}}};p.style=v;export{p as gov_prompt};