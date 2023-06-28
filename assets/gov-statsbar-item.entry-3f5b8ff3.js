import{r as e,h as t,H as s,g as a}from"./index-865d434c.js";import{g as n}from"./template-10332292-dbb3a177.js";import{v as r}from"./props-789f7529-a031cd01.js";import{S as i,b as m}from"./constants-037c35bc-6e436e19.js";import"./variants-2b936d58-0853e1f0.js";import"./gov.log-af905420-9e1fc599.js";import"./utils-c057a3fa-060e2c21.js";const l=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-statsbar-item{position:relative;display:block;padding:1.25rem}.gov-statsbar-item__icon,.gov-statsbar-item__number{margin-bottom:1rem}.gov-statsbar-item__icon{display:block;width:2rem;height:2rem}.gov-statsbar-item__number{font-weight:var(--gov-text-5xl-font-weight);font-size:var(--gov-text-5xl-font-size);line-height:var(--gov-text-5xl-line-height);letter-spacing:var(--gov-text-5xl-letter-spacing)}.gov-statsbar-item__text{font-weight:var(--gov-text-xl-font-weight);font-size:var(--gov-text-xl-font-size);line-height:var(--gov-text-xl-line-height);letter-spacing:var(--gov-text-xl-letter-spacing);letter-spacing:0.0125em}.gov-statsbar-item__text>*:last-child{margin-bottom:0}.gov-statsbar-item[icon-position=left]{padding-left:3rem}.gov-statsbar-item[icon-position=left] .gov-statsbar-item__icon{position:absolute;top:1.5rem;left:0}@media (min-width: 30em){.gov-statsbar-item{flex:1 0 50%;max-width:50%}}@media (min-width: 48em){.gov-statsbar-item{padding:2.5rem}.gov-statsbar-item__icon{width:3rem;height:3rem}.gov-statsbar-item[icon-position=left]{padding-left:4rem}.gov-statsbar-item[icon-position=left] .gov-statsbar-item__icon{top:2.75rem}}@media (min-width: 64em){.gov-statsbar-item{flex-basis:auto;max-width:25%}}",g=class{constructor(o){e(this,o),this.iconPosition=void 0,this.h=n(this.host)}validateIconPosition(o){r(m,o,i.root)}componentWillLoad(){this.validateIconPosition(this.iconPosition)}render(){return t(s,{class:this.h.classes(i.root)},t("article",null,this.h.hasSlot("icon")&&t("span",{class:i.icon},t("slot",{name:"icon"})),t("p",{class:i.number},t("slot",null)),this.h.hasSlot("text")&&t("div",{class:i.text},t("slot",{name:"text"}))))}get host(){return a(this)}static get watchers(){return{iconPosition:["validateIconPosition"]}}};g.style=l;export{g as gov_statsbar_item};
