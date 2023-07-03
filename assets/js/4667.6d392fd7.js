"use strict";(self.webpackChunkcodingdocs=self.webpackChunkcodingdocs||[]).push([[4667],{72729:(e,t,a)=>{a.d(t,{d:()=>i,e:()=>s,f:()=>o});const i=(e,t)=>{const a=t.getTime()-e.getTime();return Math.round(Math.abs(a/1e3/60))},s=(e,t)=>{const a=i(e,t);if(a<2)return"just now";if(a<60)return`${a}m ago`;const s=Math.round(a/60);if(a<90)return`about ${s}h ago`;if(s<24)return`${s}h ago`;const o=Math.round(s/24);if(o<7)return`${o}d ago`;return`${Math.round(o/7)}w ago`},o=e=>e.toDateString()+" "+e.toLocaleTimeString()},60368:(e,t,a)=>{a.d(t,{d:()=>i});const i={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all","stage_request.header_title":"Join Stage Requests","stage_request.deny_request":"Deny request","stage_request.accept_request":"Accept request","stage_request.accept_all":"Accept all","stage_request.approval_pending":"Pending","stage_request.denied":"Denied","stage_request.request":"Join stage","stage_request.leave_stage":"Leave stage","stage_request.request_tip":"Request to join the discussion","stage_request.leave_tip":"Leave the stage","stage_request.pending_tip":"Request pending","stage_request.denied_tip":"Rejected request","stage.empty_host":"The stage is empty","stage.empty_host_summary":"To begin the webinar, please join the stage or accept a join stage request from the participants tab.","stage.empty_viewer":"Webinar has not yet been started","stage.remove_from_stage":"Remove from stage","stage.add_to_stage":"Add to stage","stage.join_title":"Joining webinar stage","stage.join_summary":"Upon joining the stage, your video & audio as shown above will be visible to all participants.","stage.join_cancel":"Cancel","stage.join_confirm":"Confirm & Join stage","setup_screen.join_in_as":"Join in as","setup_screen.joining_as":"Joining as","setup_screen.your_name":"Your name"}},4667:(e,t,a)=>{a.r(t),a.d(t,{dyte_chat:()=>l});var i=a(94196),s=a(67393),o=a(72729),r=a(24849),n=a(33565),c=a(58318),d=a(60804);a(60368);const l=class{constructor(e){(0,i.r)(this,e),this.iconPack=s.d,this.t=(0,n.u)(),this.chat=[],this.now=new Date,this.autoScrollEnabled=!1,this.dropzoneActivated=!1,this.canSend=!1,this.canSendTextMessage=!1,this.canSendFiles=!1,this.emojiPickerEnabled=!1,this.handleKeyDown=e=>{if("Enter"===e.key&&e.shiftKey){this.textArea.clientHeight<200&&(this.textArea.style.height=this.textArea.clientHeight+20+"px")}else"Enter"===e.key?(e.preventDefault(),this.handleSendMessage()):"Backspace"===e.key&&(this.textArea.value.endsWith("\n")?this.textArea.style.height=this.textArea.clientHeight-20+"px":""===this.textArea.value&&(this.textArea.style.height="auto"))},this.toggleEmojiPicker=()=>{this.emojiPickerEnabled=!this.emojiPickerEnabled},this.persistTextMessage=e=>{const t=e.target.value;d.g.setItem("dyte-text-message",t)},this.initialiseTextField=e=>{this.textArea=e;const t=d.g.getItem("dyte-text-message")||"";this.textArea.value=t},this.onEmojiClicked=e=>{this.textArea.value=this.textArea.value+e.detail,this.textArea.focus()},this.onPaste=e=>{const t=e.clipboardData||e.originalEvent.clipboardData;this.handleFilesDataTransfer(t.items)}}connectedCallback(){this.meetingChanged(this.meeting);const e=(0,c.g)();this.autoScrollEnabled=e.autoScroll,this.host.addEventListener("dragover",(e=>{e.preventDefault(),this.dropzoneActivated=!0})),this.host.addEventListener("dragleave",(()=>{this.dropzoneActivated=!1})),this.host.addEventListener("drop",(e=>{e.preventDefault(),this.dropzoneActivated=!1,this.handleFilesDataTransfer(e.dataTransfer.items)}))}componentDidRender(){this.autoScrollEnabled&&(0,r.s)(this.chatEl)}disconnectedCallback(){var e;this.timeout&&clearTimeout(this.timeout),"number"==typeof this.request&&cancelAnimationFrame(this.request),this.chatUpdateListener&&(null===(e=this.meeting)||void 0===e||e.chat.removeListener("chatUpdate",this.chatUpdateListener))}meetingChanged(e){if(null!=e){this.canSend=e.self.permissions.chatPublic.canSend,this.canSendTextMessage=e.self.permissions.chatPublic.text,this.canSendFiles=e.self.permissions.chatPublic.files,this.chat=e.chat.messages.map((e=>({type:"chat",message:e}))),this.chatUpdateListener=({message:e})=>{null!=e&&(this.chat=[...this.chat,{type:"chat",message:e}])};const t=()=>{this.now=new Date,this.timeout=setTimeout((()=>{null!=this.request&&(this.request=requestAnimationFrame(t))}),6e4)};this.request=requestAnimationFrame(t),e.chat.addListener("chatUpdate",this.chatUpdateListener)}}handleSendMessage(){var e;if(!this.canSend||!this.canSendTextMessage)return;const t=this.textArea.value.trim();t.length>0&&(null===(e=this.meeting)||void 0===e||e.chat.sendTextMessage(t),this.textArea.value="",this.textArea.style.height="auto",d.g.setItem("dyte-text-message",""))}uploadFile(e){const t=document.createElement("input");t.type="file","image"===e&&(t.accept="image/*"),t.onchange=t=>{const{validity:a,files:[i]}=t.target;a.valid&&this.sendFile(i,e)},t.click()}handleFilesDataTransfer(e){if(null!=e)for(const t of e)if("file"===t.kind){const e=t.getAsFile();t.type.startsWith("image/")?this.sendFile(e,"image"):this.sendFile(e,"file")}}sendFile(e,t){var a,i;this.canSend&&this.canSendFiles&&("image"===t?null===(a=this.meeting)||void 0===a||a.chat.sendImageMessage(e):null===(i=this.meeting)||void 0===i||i.chat.sendFileMessage(e))}toggleAutoScroll(e){this.autoScrollEnabled=e,(0,c.s)("auto-scroll",e)}render(){let e=null;return(0,i.h)(i.H,null,(0,i.h)("div",{id:"dropzone",class:{active:this.dropzoneActivated},part:"dropzone"},(0,i.h)("dyte-icon",{icon:this.iconPack.attach}),(0,i.h)("p",null,this.t("Drop files/images to send"))),(0,i.h)("div",{class:"chat-container scrollbar",ref:e=>this.chatEl=e,part:"container"},(0,i.h)("div",{class:"spacer",part:"spacer"}),(0,i.h)("div",{class:"chat",part:"chat"},this.chat.map((t=>{if("chat"===t.type){const{message:a}=t,s=a.userId===(null==e?void 0:e.userId)&&(0,o.d)(a.time,null==e?void 0:e.time)<2;switch(e=a,a.type){case"text":return(0,i.h)("dyte-text-message",{message:a,now:this.now,isContinued:s});case"image":return(0,i.h)("dyte-image-message",{message:a,now:this.now,isContinued:s,iconPack:this.iconPack});case"file":return(0,i.h)("dyte-file-message",{message:a,now:this.now,isContinued:s,iconPack:this.iconPack})}}})))),this.canSend&&this.canSendTextMessage&&this.emojiPickerEnabled&&(0,i.h)("dyte-emoji-picker",{t:this.t,onDyteEmojiClicked:this.onEmojiClicked,part:"emoji-picker"}),(0,i.h)("form",{class:"chat-input",part:"chat-input"},this.canSend&&this.canSendTextMessage&&(0,i.h)("textarea",{placeholder:"Message..",ref:this.initialiseTextField,onKeyDown:this.handleKeyDown,onInput:this.persistTextMessage,autoFocus:!0,onPaste:this.onPaste,part:"textarea",class:"scrollbar"}),(0,i.h)("div",{class:"chat-buttons",part:"chat-buttons"},(0,i.h)("div",{class:"left",part:"chat-buttons-left"},(0,i.h)("dyte-tooltip",{size:this.size,label:this.t(this.autoScrollEnabled?"Autoscroll enabled":"Autoscroll disabled")},(0,i.h)("dyte-button",{variant:"ghost",kind:"icon",onClick:()=>this.toggleAutoScroll(!this.autoScrollEnabled),title:this.t(this.autoScrollEnabled?"Autoscroll enabled":"Autoscroll disabled")},(0,i.h)("dyte-icon",{icon:this.autoScrollEnabled?this.iconPack.vertical_scroll:this.iconPack.vertical_scroll_disabled}))),this.canSend&&this.canSendFiles&&[(0,i.h)("dyte-tooltip",{label:this.t("Send a file"),size:this.size},(0,i.h)("dyte-button",{variant:"ghost",kind:"icon",onClick:()=>this.uploadFile("file"),title:this.t("Send a file")},(0,i.h)("dyte-icon",{icon:this.iconPack.attach}))),(0,i.h)("dyte-tooltip",{label:this.t("Send an image"),size:this.size},(0,i.h)("dyte-button",{variant:"ghost",kind:"icon",onClick:()=>this.uploadFile("image"),title:this.t("Send an image")},(0,i.h)("dyte-icon",{icon:this.iconPack.image})))],this.canSend&&this.canSendTextMessage&&(0,i.h)("dyte-tooltip",{label:this.t("Send Emoji"),size:this.size},(0,i.h)("dyte-button",{variant:"ghost",kind:"icon",class:{active:this.emojiPickerEnabled},title:this.t("Send Emoji"),onClick:this.toggleEmojiPicker},(0,i.h)("dyte-icon",{icon:this.iconPack.emoji_multiple})))),this.canSend&&this.canSendTextMessage&&(0,i.h)("div",{class:"right",part:"chat-buttons-right"},(0,i.h)("dyte-tooltip",{variant:"primary",label:this.t("Send message"),size:this.size,delay:2e3},(0,i.h)("dyte-button",{kind:"icon",onClick:()=>this.handleSendMessage(),title:this.t("Send message")},(0,i.h)("dyte-icon",{icon:this.iconPack.send})))))))}get host(){return(0,i.g)(this)}static get watchers(){return{meeting:["meetingChanged"]}}};l.style=".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;height:100%;width:100%;flex-direction:column;font-family:var(--dyte-font-family, sans-serif);font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin:var(--dyte-space-0, 0px);display:flex;height:var(--dyte-space-12, 48px);align-items:center;justify-content:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.chat-container{box-sizing:border-box;display:flex;flex-direction:column;padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);flex:1 0 0px;overflow-y:scroll}.chat-container .spacer{flex:1 1 auto}.chat-container .chat{flex:0 0 auto}.chat-input{z-index:10;box-sizing:border-box;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));border-top:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}textarea{box-sizing:border-box;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}textarea::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}textarea::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}textarea{outline:2px solid transparent;outline-offset:2px;resize:none;overflow-y:auto;border-width:var(--dyte-border-width-none, 0);border-style:none;font-family:var(--dyte-font-family, sans-serif);min-height:80px;font-size:14px}.chat-buttons{display:flex;align-items:center;justify-content:space-between;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.chat-buttons .left dyte-button{margin-right:var(--dyte-space-1, 4px)}.chat-buttons .left dyte-button dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}.chat-buttons>div{display:flex;align-items:center}.file-picker{display:none}.chat *:first-child{margin-top:var(--dyte-space-0, 0px)}.chat .head{display:flex;align-items:center}.chat .head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.chat .head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);overflow-wrap:break-word;font-size:14px;line-height:1.25rem}.chat .body .emoji{font-size:24px}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{margin-top:var(--dyte-space-4, 16px);display:block;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-3, 12px)}dyte-text-message[is-continued]{margin-top:var(--dyte-space-2, 8px)}.chat .image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.chat .image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.chat .image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.chat .image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.chat .image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.chat .image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.chat .file{display:flex;align-items:center;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.chat .file .file-data{flex:1 1 0%}.chat .file .file-data .name{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.chat .file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.chat .file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase}.chat .file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.chat .file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}#dropzone{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:10;display:none;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}#dropzone.active{display:flex;-webkit-animation:0.3s slide-up ease;animation:0.3s slide-up ease}@-webkit-keyframes slide-up{from{transform:translateY(100%)}to{transform:translateY(0%)}}@keyframes slide-up{from{transform:translateY(100%)}to{transform:translateY(0%)}}dyte-emoji-picker{z-index:0;border-top:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60));-webkit-animation:0.3s slide-up ease;animation:0.3s slide-up ease}"},60804:(e,t,a)=>{a.d(t,{g:()=>o});const i={get:(e,t,a)=>(...i)=>{try{return Reflect.get(e,t,a).apply(e,i)}catch(s){return null}}};let s;try{s=new Proxy(localStorage,i)}catch(r){s=new Proxy({},i)}const o=s},33565:(e,t,a)=>{a.d(t,{g:()=>s,u:()=>o});var i=a(60368);const s=async e=>{if(null==e||"en"===e||""===e.trim())return i.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},i.d,await t.json()):i.d}catch(t){return i.d}},o=(e=i.d)=>t=>{var a;return null!==(a=e[t])&&void 0!==a?a:t}},24849:(e,t,a)=>{a.d(t,{s:()=>i});const i=e=>{null!=e&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"})}},58318:(e,t,a)=>{a.d(t,{a:()=>r,g:()=>n,s:()=>o});var i=a(60804);const s="dyte-prefs",o=(e,t)=>{const a=JSON.parse(i.g.getItem(s)||"{}");a[e]=JSON.stringify(t),i.g.setItem("dyte-prefs",JSON.stringify(a))},r=e=>JSON.parse(i.g.getItem(s)||"{}")[e],n=()=>{const e=JSON.parse(i.g.getItem(s)||"{}");return{mirrorVideo:!e["mirror-video"]||"true"===e["mirror-video"],muteNotificationSounds:!!e["mute-notification-sounds"]&&"true"===e["mute-notification-sounds"],autoScroll:!e["auto-scroll"]||"true"===e["auto-scroll"]}}}}]);