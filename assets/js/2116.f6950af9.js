"use strict";(self.webpackChunkcodingdocs=self.webpackChunkcodingdocs||[]).push([[2116],{60368:(e,t,s)=>{s.d(t,{d:()=>a});const a={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all","stage_request.header_title":"Join Stage Requests","stage_request.deny_request":"Deny request","stage_request.accept_request":"Accept request","stage_request.accept_all":"Accept all","stage_request.approval_pending":"Pending","stage_request.denied":"Denied","stage_request.request":"Join stage","stage_request.leave_stage":"Leave stage","stage_request.request_tip":"Request to join the discussion","stage_request.leave_tip":"Leave the stage","stage_request.pending_tip":"Request pending","stage_request.denied_tip":"Rejected request","stage.empty_host":"The stage is empty","stage.empty_host_summary":"To begin the webinar, please join the stage or accept a join stage request from the participants tab.","stage.empty_viewer":"Webinar has not yet been started","stage.remove_from_stage":"Remove from stage","stage.add_to_stage":"Add to stage","stage.join_title":"Joining webinar stage","stage.join_summary":"Upon joining the stage, your video & audio as shown above will be visible to all participants.","stage.join_cancel":"Cancel","stage.join_confirm":"Confirm & Join stage","setup_screen.join_in_as":"Join in as","setup_screen.joining_as":"Joining as","setup_screen.your_name":"Your name"}},52116:(e,t,s)=>{s.r(t),s.d(t,{dyte_waiting_screen:()=>n});var a=s(94196),i=s(33565);s(60368);const n=class{constructor(e){(0,a.r)(this,e),this.t=(0,i.u)()}render(){return(0,a.h)(a.H,null,(0,a.h)("slot",null,(0,a.h)("div",{class:"centered",part:"content"},(0,a.h)("dyte-logo",{config:this.config,part:"logo"}),(0,a.h)("p",null,this.t("waitlist.body_text")))))}};n.style=":host{height:100%;width:100%;font-family:var(--dyte-font-family, sans-serif);display:flex;flex-direction:column;align-items:center;justify-content:center}.centered{display:flex;flex-direction:column;align-items:center}dyte-logo{margin-bottom:var(--dyte-space-8, 32px);height:var(--dyte-space-12, 48px)}p{font-size:16px;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}"},33565:(e,t,s)=>{s.d(t,{g:()=>i,u:()=>n});var a=s(60368);const i=async e=>{if(null==e||"en"===e||""===e.trim())return a.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},a.d,await t.json()):a.d}catch(t){return a.d}},n=(e=a.d)=>t=>{var s;return null!==(s=e[t])&&void 0!==s?s:t}}}]);