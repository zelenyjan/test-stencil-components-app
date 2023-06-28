import{a as i,b as o,H as e,g as t}from"./index-dd1e5e8a.js";import{g as n}from"./template-10332292-dbb3a177.js";const a={root:"gov-cookiebar",holder:"gov-cookiebar__holder",content:"gov-cookiebar__content",actions:"gov-cookiebar__actions",actionsPrimary:"gov-cookiebar__actions-primary",actionsSecondary:"gov-cookiebar__actions-secondary"},s=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-cookiebar{z-index:51;position:fixed;right:0;bottom:0;left:0;background-color:var(--gov-cookiebar-bg, var(--gov-color-neutral-white));box-shadow:var(--gov-cookiebar-box-shadow, 0 0.0625rem 2.5rem rgba(var(--gov-color-secondary-800-rgb), 0.45))}.gov-cookiebar__holder{display:block;width:100%;max-width:calc(var(--gov-container-width, 73.75rem) + 2 * var(--gov-container-padding, 2.5rem));margin-right:auto;margin-left:auto;padding-right:var(--gov-container-padding-mobile, 1.25rem);padding-left:var(--gov-container-padding-mobile, 1.25rem);padding-top:1.25rem;padding-bottom:1.25rem}@media (min-width: 48em){.gov-cookiebar__holder{padding-right:var(--gov-container-padding, 2.5rem);padding-left:var(--gov-container-padding, 2.5rem)}}.gov-cookiebar__holder>*{margin-bottom:0}.gov-cookiebar__holder>*+*{margin-top:2rem}.gov-cookiebar__content>*{margin-bottom:0}.gov-cookiebar__content>*+*{margin-top:0.75rem}.gov-cookiebar__content p{color:var(--gov-cookiebar-color, var(--gov-color-secondary-700));letter-spacing:0.0125em}.gov-cookiebar__actions,.gov-cookiebar__actions-primary,.gov-cookiebar__actions-secondary{display:flex;gap:0.625rem;flex-wrap:wrap;justify-content:space-between}@media (min-width: 48em){.gov-cookiebar__holder{padding-top:2rem;padding-bottom:2rem}.gov-cookiebar__actions,.gov-cookiebar__actions-primary,.gov-cookiebar__actions-secondary{gap:1rem}}",c=class{constructor(r){i(this,r),this.h=n(this.host)}render(){return o(e,{class:this.h.classes(a.root)},o("div",{class:a.holder},o("div",{class:a.content},o("slot",null)),(this.h.hasSlot("actions-primary")||this.h.hasSlot("actions-secondary"))&&o("div",{class:a.actions},this.h.hasSlot("actions-primary")&&o("div",{class:a.actionsPrimary},o("slot",{name:"actions-primary"})),this.h.hasSlot("actions-secondary")&&o("div",{class:a.actionsSecondary},o("slot",{name:"actions-secondary"})))))}get host(){return t(this)}};c.style=s;export{c as gov_cookiebar};