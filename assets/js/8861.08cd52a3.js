"use strict";(self.webpackChunkcodingdocs=self.webpackChunkcodingdocs||[]).push([[8861],{38861:(t,o,e)=>{e.r(o),e.d(o,{dyte_menu:()=>i,dyte_menu_item:()=>a,dyte_menu_list:()=>n});var r=e(94196),s=e(57222);const i=class{constructor(t){(0,r.r)(this,t),this.clickedThis=!1,this.placement="bottom-end",this.handleOutsideClick=()=>{this.clickedThis||(this.menuListEl.style.display="none"),this.clickedThis=!1}}componentDidLoad(){document.addEventListener("click",this.handleOutsideClick),this.update()}disconnectedCallback(){document.removeEventListener("click",this.handleOutsideClick)}update(){(0,s.c)(this.triggerEl,this.menuListEl,{placement:this.placement,middleware:[(0,s.o)(10),(0,s.f)(),(0,s.s)({padding:5})]}).then((({x:t,y:o})=>{Object.assign(this.menuListEl.style,{left:`${t}px`,top:`${o}px`})}))}render(){return(0,r.h)(r.H,null,(0,r.h)("span",{id:"trigger",ref:t=>this.triggerEl=t,onClick:()=>{this.clickedThis=!0,"block"!==this.menuListEl.style.display?(this.menuListEl.style.display="block",this.update()):this.menuListEl.style.display="none"}},(0,r.h)("slot",{name:"trigger"})),(0,r.h)("span",{part:"menu-list",id:"menu-list",ref:t=>this.menuListEl=t},(0,r.h)("slot",null)))}};i.style=":host{position:relative;display:inline-block;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}#menu-list{position:absolute;z-index:20;display:none}";const a=class{constructor(t){(0,r.r)(this,t)}render(){return(0,r.h)(r.H,null,(0,r.h)("slot",{name:"start"}),(0,r.h)("slot",null),(0,r.h)("slot",{name:"end"}))}};a.style=":host{display:flex;align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);font-family:var(--dyte-font-family, sans-serif);cursor:pointer;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;color:rgb(var(--dyte-colors-text-1000, 255 255 255));font-size:14px}::slotted([slot='start']){margin-right:var(--dyte-space-2, 8px)}::slotted([slot='end']){margin-left:var(--dyte-space-2, 8px)}:host(:hover){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}:host(.red){--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}";const n=class{constructor(t){(0,r.r)(this,t)}render(){return(0,r.h)(r.H,null,(0,r.h)("slot",null))}};n.style=":host{display:flex;width:-webkit-max-content;width:-moz-max-content;width:max-content;flex-direction:column;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);font-family:var(--dyte-font-family, sans-serif);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;border-radius:var(--dyte-border-radius-sm, 4px);--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}"}}]);