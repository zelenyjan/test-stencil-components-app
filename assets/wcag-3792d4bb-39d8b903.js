import{a}from"./gov.log-af905420-9e1fc599.js";import{s}from"./string.utils-f268fc6b-a0e9075c.js";import{d as n}from"./win-9c8460bb-918db7b8.js";const d=(e,t,r)=>{(e===void 0||String(e).length===0)&&a(`[${r}]: The (${t}) attribute is important for correct accessibility.`)},c=(e,t,r)=>{if(typeof e>"u"||e===void 0)return!0;if(String(e).length===0)return a(`[${r}]: Attribute (${t}) is defined with an empty value.`),!1;let l=[];const i=s(e);return Array.isArray(i)&&(l=i.filter(function(o){return o.trim().length>0})),!!l.filter(o=>n().getElementById(o)!==null).length},b=(e,t,r)=>n().querySelector(`[for=${e}]`)===null&&n().getElementById(t)===null?(a(`[${r}]: The form element has no defined wcag-label or wcag-labelled-by attribute.`),!1):!0,m=(e,t,r)=>typeof e=="string"&&e.length>0||typeof t=="string"&&t.length>0&&n().getElementById(t)?!0:(a(`[${r}]: The element has no defined wcag-label or wcag-labelled-by attribute.`),!1);export{c as a,b,d as c,m as v};