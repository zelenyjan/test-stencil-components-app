import{r as n,c as s,h as a}from"./index-3a8ab9d7.js";const i="input{font-size:15px;width:100%}",u=class{constructor(e){n(this,e),this.valueChange=s(this,"valueChange",7),this.type="text",this.value=void 0}inputChanged(e){const t=e.target.value;console.log(t),this.value=t,this.valueChange.emit(t)}render(){return a("input",{type:"text",value:this.value,onInput:e=>this.inputChanged(e)})}};u.style=i;export{u as green_input};
