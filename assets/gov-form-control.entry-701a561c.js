import{r as m,h as r,H as a,g as l}from"./index-865d434c.js";import{g as c}from"./template-10332292-dbb3a177.js";import{g as n,b as t}from"./form-669a7180-3dfc6c14.js";import{c as g,s as v}from"./string.utils-f268fc6b-a0e9075c.js";import"./sizes-6c5943b4-77be388d.js";import"./variants-2b936d58-0853e1f0.js";import"./constants-136d4cd3-0cf5de77.js";import"./constants-3df712e2-1aa85a1b.js";import"./constants-2e8258cf-6d910b0d.js";import"./constants-ebec7de8-f0e19892.js";import"./utils-c057a3fa-060e2c21.js";const f='.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-form-control__holder{display:flex;flex-direction:column;padding:0;border:none}.gov-form-control__bottom>*:last-child{margin-bottom:0}.gov-form-control[type=file] .gov-form-label[slot=top] .gov-form-label__label{margin:0rem 0rem 0.5rem}.gov-form-control[type=file] .gov-form-control__bottom{margin:0.5rem 0rem 0rem}.gov-form-control[type=input] .gov-form-label .gov-form-label__label,.gov-form-control[type=select] .gov-form-label .gov-form-label__label{margin:0rem 0rem 0.25rem}.gov-form-control[type=input] .gov-form-control__bottom,.gov-form-control[type=select] .gov-form-control__bottom{margin:0.25rem 0rem 0rem}.gov-form-control[size=xs][type=checkbox] .gov-form-control__bottom,.gov-form-control[size=xs][type=radio] .gov-form-control__bottom{margin-top:var(--gov-form-checkbox-core-xs-message-gap, 0.5rem);margin-left:calc(var(--gov-form-checkbox-core-xs-indicator-size, 1.25rem) + var(--gov-form-checkbox-core-xs-gap, 0.75rem))}.gov-form-control[size=s][type=checkbox] .gov-form-control__bottom,.gov-form-control[size=s][type=radio] .gov-form-control__bottom{margin-top:var(--gov-form-checkbox-core-s-message-gap, 0.5rem);margin-left:calc(var(--gov-form-checkbox-core-s-indicator-size, 1.375rem) + var(--gov-form-checkbox-core-s-gap, 0.75rem))}.gov-form-control[size=m][type=checkbox] .gov-form-control__bottom,.gov-form-control[size=m][type=radio] .gov-form-control__bottom{margin-top:var(--gov-form-checkbox-core-m-message-gap, 0.75rem);margin-left:calc(var(--gov-form-checkbox-core-m-indicator-size, 1.5rem) + var(--gov-form-checkbox-core-m-gap, 1rem))}.gov-form-control[size=l][type=checkbox] .gov-form-control__bottom,.gov-form-control[size=l][type=radio] .gov-form-control__bottom{margin-top:var(--gov-form-checkbox-core-l-message-gap, 0.75rem);margin-left:calc(var(--gov-form-checkbox-core-l-indicator-size, 2rem) + var(--gov-form-checkbox-core-l-gap, 1rem))}.gov-form-control[size=xs][type=switch] .gov-form-control__bottom{margin-top:var(--gov-form-switch-xs-message-gap, 0.5rem);margin-left:calc(var(--gov-form-switch-xs-indicator-height, 1.25rem) * 1.6666666667 + var(--gov-form-switch-xs-gap, 0.75rem))}.gov-form-control[size=s][type=switch] .gov-form-control__bottom{margin-top:var(--gov-form-switch-s-message-gap, 0.5rem);margin-left:calc(var(--gov-form-switch-s-indicator-height, 1.375rem) * 1.6666666667 + var(--gov-form-switch-s-gap, 0.75rem))}.gov-form-control[size=m][type=switch] .gov-form-control__bottom{margin-top:var(--gov-form-switch-m-message-gap, 0.75rem);margin-left:calc(var(--gov-form-switch-m-indicator-height, 1.5rem) * 1.6666666667 + var(--gov-form-switch-m-gap, 1rem))}.gov-form-control[size=l][type=switch] .gov-form-control__bottom{margin-top:var(--gov-form-switch-l-message-gap, 0.75rem);margin-left:calc(var(--gov-form-switch-l-indicator-height, 2rem) * 1.6666666667 + var(--gov-form-switch-l-gap, 1rem))}.gov-form-control[invalid=""] .gov-form-label[slot=top] .gov-form-label__label,.gov-form-control[invalid=true i] .gov-form-label[slot=top] .gov-form-label__label,.gov-form-control[invalid="1"] .gov-form-label[slot=top] .gov-form-label__label{color:var(--gov-form-state-color-error, var(--gov-color-error))}.gov-form-control[disabled=""] .gov-form-label__label,.gov-form-control[disabled=true i] .gov-form-label__label,.gov-form-control[disabled="1"] .gov-form-label__label{pointer-events:none}',h=class{constructor(o){m(this,o),this.gap=void 0,this.identifier=void 0,this.invalid=!1,this.disabled=!1,this.success=!1,this.fieldset=!1,this.size="m",this.h=c(this.host),this.f=n(this.h),this.controlId=g("GovFormControl")}watchInvalid(){this.passChildAttrs()}componentDidRender(){this.passChildAttrs(),this.syncControlMessages(),this.formElementDescriptionControl()}disconnectedCallback(){var o;(o=this.observer)===null||o===void 0||o.disconnect()}passChildAttrs(){const o=["gov-form-select","gov-form-input","gov-form-switch","gov-form-checkbox","gov-form-radio","gov-form-multi-select","gov-form-file","gov-form-search"];this.h.passChildAttr(o,"size",this.size),this.h.passChildAttr(o,"invalid",this.invalid),this.h.passChildAttr(o,"disabled",this.disabled),this.h.passChildAttr(o,"success",this.success),this.f.hasGroupChildren===!1&&this.h.passChildAttr([...o,"gov-form-label"],"identifier",this.identifier||this.controlId)}formElementDescriptionControl(){const o=this.host.querySelector("."+t.bottom);o&&(this.observer=new MutationObserver(function(){this.syncControlMessages()}.bind(this)),this.observer.observe(o,{childList:!0}))}syncControlMessages(){Promise.all(this.f.messageElements.map(o=>o.identifier())).then(o=>{this.f.mainElementsInControl.forEach(e=>{const s=v(e.getAttribute("wcag-described-by"));e.removeAttribute("wcag-described-by"),Array.isArray(s)&&s.forEach(i=>i.indexOf("GovFormMessage")===-1?o.push(i):null),o.length&&e.setAttribute("wcag-described-by",o.join(" "))})})}render(){const o=this.fieldset?"fieldset":"div";return r(a,{size:this.size,class:this.h.classes(t.root)},r(o,{class:t.holder},this.h.hasSlot("top")&&r("slot",{name:"top"}),r("slot",null),this.h.hasSlot("bottom")&&r("div",{class:t.bottom},r("slot",{name:"bottom"}))))}get host(){return l(this)}static get watchers(){return{invalid:["watchInvalid"]}}};h.style=f;export{h as gov_form_control};