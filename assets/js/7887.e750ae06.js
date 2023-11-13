"use strict";(self.webpackChunkcodingdocs=self.webpackChunkcodingdocs||[]).push([[7887],{72729:(e,t,s)=>{s.d(t,{d:()=>o,e:()=>i,f:()=>r});const o=(e,t)=>{const s=t.getTime()-e.getTime();return Math.round(Math.abs(s/1e3/60))},i=(e,t)=>{const s=o(e,t);if(s<2)return"just now";if(s<60)return`${s}m ago`;const i=Math.round(s/60);if(s<90)return`about ${i}h ago`;if(i<24)return`${i}h ago`;const r=Math.round(i/24);if(r<7)return`${r}d ago`;return`${Math.round(r/7)}w ago`},r=e=>e.toDateString()+" "+e.toLocaleTimeString()},60368:(e,t,s)=>{s.d(t,{d:()=>o});const o={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all","stage_request.header_title":"Join Stage Requests","stage_request.deny_request":"Deny request","stage_request.accept_request":"Accept request","stage_request.accept_all":"Accept all","stage_request.approval_pending":"Pending","stage_request.denied":"Denied","stage_request.request":"Join stage","stage_request.leave_stage":"Leave stage","stage_request.request_tip":"Request to join the discussion","stage_request.leave_tip":"Leave the stage","stage_request.pending_tip":"Request pending","stage_request.denied_tip":"Rejected request","stage.empty_host":"The stage is empty","stage.empty_host_summary":"To begin the webinar, please join the stage or accept a join stage request from the participants tab.","stage.empty_viewer":"Webinar has not yet been started","stage.remove_from_stage":"Remove from stage","stage.add_to_stage":"Add to stage","stage.join_title":"Joining webinar stage","stage.join_summary":"Upon joining the stage, your video & audio as shown above will be visible to all participants.","stage.join_cancel":"Cancel","stage.join_confirm":"Confirm & Join stage","setup_screen.join_in_as":"Join in as","setup_screen.joining_as":"Joining as","setup_screen.your_name":"Your name"}},87887:(e,t,s)=>{s.r(t),s.d(t,{dyte_emoji_picker:()=>d,dyte_file_message:()=>g,dyte_image_message:()=>m,dyte_text_message:()=>b});var o=s(94196),i=s(33565),r=s(72729),a=s(40348),n=s(67393),c=s(39577),l=s(79781);s(60368);const d=class{constructor(e){(0,o.r)(this,e),this.emojiClicked=(0,o.c)(this,"dyteEmojiClicked",7),this.t=(0,i.u)(),this.filterVal="",this.filteredEmojis=[]}componentWillLoad(){(async()=>(await fetch("https://cdn.dyte.in/assets/emojis-data.json")).json())().then((e=>{this.emojiList=e,this.handleInputChange({value:""})}))}handleInputChange(e){this.filterVal=e.value;const t=new RegExp(`([^,]*?${this.filterVal}[^,]*):(\\d+)`,"g");this.filteredEmojis=Array.from(this.emojiList.search.matchAll(t)).map((e=>({name:e[1],emoji:this.emojiList.emojis[e[2]]})))}handleEmojiClick(e){this.emojiClicked.emit(e)}mapEmojiList(){var e;return(null===(e=this.emojiList)||void 0===e?void 0:e.length)>0?(0,o.h)("div",{id:"loader"},(0,o.h)("dyte-spinner",null)):(0,o.h)("div",{id:"emoji-grid",class:"scrollbar"},this.filteredEmojis.map((e=>(0,o.h)("dyte-button",{key:`emoji-button-${e.name}`,class:"emoji",variant:"ghost",kind:"icon",title:e.name,onClick:()=>this.handleEmojiClick(e.emoji)},e.emoji))))}render(){return(0,o.h)(o.H,null,(0,o.h)("input",{value:this.filterVal,onInput:e=>this.handleInputChange(e.target),placeholder:this.t("Search")}),this.mapEmojiList())}};d.style=".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{box-sizing:border-box;display:inline-flex;height:var(--dyte-space-64, 256px);flex-direction:column;padding:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-0, 0px);font-family:var(--dyte-font-family, sans-serif);width:auto;min-width:var(--dyte-space-20, 80px);-webkit-user-select:none;-moz-user-select:none;user-select:none;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}#emoji-grid{margin-top:var(--dyte-space-2, 8px);box-sizing:border-box;display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));padding-bottom:var(--dyte-space-12, 48px);font-family:var(--dyte-font-family, sans-serif);overflow-x:hidden;overflow-y:scroll;height:100%;grid-auto-rows:minmax(-webkit-min-content, -webkit-max-content);grid-auto-rows:minmax(min-content, max-content)}#loader{display:flex;height:100%;width:100%;align-items:center;justify-content:center}input{display:block;height:var(--dyte-space-8, 32px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);font-family:var(--dyte-font-family, sans-serif);font-size:14px;border-width:var(--dyte-border-width-none, 0);border-style:solid;border-style:none;border-color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}input::-moz-placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input::placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input{border-radius:var(--dyte-border-radius-sm, 4px);outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}input:focus{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-ring-opacity));--tw-ring-opacity:0.3}.emoji{height:var(--dyte-space-10, 40px);width:var(--dyte-space-10, 40px);font-size:20px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}";const h=({name:e,time:t,now:s})=>(0,o.h)("div",{class:"head"},(0,o.h)("div",{class:"name"},(0,a.s)((0,a.f)(e),20)),(0,o.h)("div",{class:"time",title:(0,r.f)(t)},(0,r.e)(t,s))),g=class{constructor(e){(0,o.r)(this,e),this.now=new Date,this.isContinued=!1,this.iconPack=n.d}render(){const e=(0,a.a)(this.message.link);return(0,o.h)(o.H,null,!this.isContinued&&(0,o.h)(h,{name:this.message.displayName,time:this.message.time,now:this.now}),(0,o.h)("div",{class:"body",part:"body"},(0,o.h)("div",{class:"file"},(0,o.h)("div",{class:"file-data"},(0,o.h)("div",{class:"name"},this.message.name),(0,o.h)("div",{class:"file-data-split"},(0,o.h)("div",{class:"ext"},(0,c.g)(this.message.name)),(0,o.h)("span",{class:"divider"}),(0,o.h)("div",{class:"size"},(0,c.a)(this.message.size)))),(0,o.h)("dyte-button",{variant:"secondary",kind:"icon",onClick:()=>(0,c.d)(e,{name:this.message.name,fallbackName:"file"}),part:"button"},(0,o.h)("dyte-icon",{icon:this.iconPack.download})))))}},m=class{constructor(e){(0,o.r)(this,e),this.stateUpdate=(0,o.c)(this,"dyteStateUpdate",7),this.now=new Date,this.isContinued=!1,this.iconPack=n.d,this.t=(0,i.u)(),this.status="loading"}render(){return(0,o.h)(o.H,null,!this.isContinued&&(0,o.h)(h,{name:this.message.displayName,time:this.message.time,now:this.now}),(0,o.h)("div",{class:"body",part:"body"},(0,o.h)("div",{class:{image:!0,loaded:"loaded"===this.status}},(0,o.h)("img",{src:(0,a.a)(this.message.link),onLoad:()=>{this.status="loaded"},onError:()=>{this.status="errored"},onClick:()=>{"loaded"===this.status&&(this.stateUpdate.emit({image:this.message}),l.s.image=this.message)}}),"loading"===this.status&&(0,o.h)("div",{class:"image-spinner",title:this.t("Loading image"),"aria-label":this.t("Loading image")},(0,o.h)("dyte-spinner",null)),"errored"===this.status&&(0,o.h)("div",{class:"image-errored",title:this.t("Image not found"),"aria-label":this.t("Image not found")},(0,o.h)("dyte-icon",{icon:this.iconPack.image_off})),"loaded"===this.status&&(0,o.h)("div",{class:"actions"},(0,o.h)("dyte-button",{class:"action",variant:"secondary",kind:"icon",onClick:()=>{this.stateUpdate.emit({image:this.message}),l.s.image=this.message}},(0,o.h)("dyte-icon",{icon:this.iconPack.full_screen_maximize})),(0,o.h)("dyte-button",{class:"action",variant:"secondary",kind:"icon",onClick:()=>(0,c.d)(this.message.link,{fallbackName:"image"})},(0,o.h)("dyte-icon",{icon:this.iconPack.download}))))))}};m.style=".image-spinner{cursor:wait}.image-errored{cursor:not-allowed}";const p=/(https?:\/\/[^\s]+)/,u=({message:e})=>e.split("\n").map((e=>(0,o.h)("p",null,(e=>{const t=e.split(" "),s=t.length-1;return t.map(((e,t)=>p.test(e)?(0,o.h)("span",null,(0,o.h)("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e),t!==s?" ":""):`${e}${t!==s?" ":""}`))})(e)))),b=class{constructor(e){(0,o.r)(this,e),this.now=new Date,this.isContinued=!1}render(){return(0,o.h)(o.H,null,!this.isContinued&&(0,o.h)(h,{name:this.message.displayName,time:this.message.time,now:this.now}),(0,o.h)("div",{class:"body",part:"body"},(0,o.h)("div",{class:{text:!0,emoji:(0,a.h)(this.message.message)}},(0,o.h)(u,{message:this.message.message}))))}}},39577:(e,t,s)=>{s.d(t,{a:()=>r,d:()=>a,g:()=>i});var o=s(40348);const i=e=>e.split(".").pop(),r=e=>{const t=Math.floor(Math.log(e)/Math.log(1024));return`${(e/1024**t).toFixed(2)} ${["B","kB","MB","GB","TB"][t]}`},a=async(e,t)=>{e=(0,o.a)(e);let s=null==t?void 0:t.name;const i=await fetch(e);if(!i.ok)return void window.open(e,"_blank");const r=URL.createObjectURL(await i.blob()),a=document.createElement("a");a.href=r,a.download=null!=s?s:((e,t="file")=>{const s=new URL(e),o=decodeURIComponent(s.pathname.split("/").pop());return"/"!==o?o:t})(e,null==t?void 0:t.fallbackName),a.click()}},33565:(e,t,s)=>{s.d(t,{g:()=>i,u:()=>r});var o=s(60368);const i=async e=>{if(null==e||"en"===e||""===e.trim())return o.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},o.d,await t.json()):o.d}catch(t){return o.d}},r=(e=o.d)=>t=>{var s;return null!==(s=e[t])&&void 0!==s?s:t}},79781:(e,t,s)=>{s.d(t,{o:()=>c,s:()=>n});var o=s(94196);const i=e=>!("isConnected"in e)||e.isConnected,r=((e,t)=>{let s;return(...o)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...o)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(i))}),2e3),a=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:n,onChange:c}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{let s=new Map(Object.entries(null!=e?e:{}));const o={dispose:[],get:[],set:[],reset:[]},i=()=>{s=new Map(Object.entries(null!=e?e:{})),o.reset.forEach((e=>e()))},r=e=>(o.get.forEach((t=>t(e))),s.get(e)),n=(e,i)=>{const r=s.get(e);t(i,r,e)&&(s.set(e,i),o.set.forEach((t=>t(e,i,r))))},c="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>r(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,s)=>(n(t,s),!0)}),l=(e,t)=>(o[e].push(t),()=>{a(o[e],t)});return{state:c,get:r,set:n,on:l,onChange:(t,s)=>{const o=l("set",((e,o)=>{e===t&&s(o)})),i=l("reset",(()=>s(e[t])));return()=>{o(),i()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(l("set",t.set)),t.get&&e.push(l("get",t.get)),t.reset&&e.push(l("reset",t.reset)),t.dispose&&e.push(l("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),i()},reset:i,forceUpdate:e=>{const t=s.get(e);o.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof o.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,o.a)();s&&((e,t,s)=>{const o=e.get(t);o?o.includes(s)||o.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(o.f)),r(e)},reset:()=>{e.forEach((e=>e.forEach(o.f))),r(e)}}})()),s})({})},40348:(e,t,s)=>{s.d(t,{a:()=>r,f:()=>a,h:()=>i,s:()=>o});const o=(e,t=20)=>null==e?"":e.length>t?`${e.substring(0,t)}...`:e,i=e=>/^\p{Emoji}+$/u.test(e)&&!/^\d+$/.test(e),r=e=>e.trim().toLowerCase().startsWith("javascript:")?"https://dyte.io":e,a=e=>""===(e=e.trim())?"Participant":e}}]);