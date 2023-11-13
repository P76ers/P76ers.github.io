"use strict";(self.webpackChunkcodingdocs=self.webpackChunkcodingdocs||[]).push([[7394],{60368:(e,t,s)=>{s.d(t,{d:()=>a});const a={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all","stage_request.header_title":"Join Stage Requests","stage_request.deny_request":"Deny request","stage_request.accept_request":"Accept request","stage_request.accept_all":"Accept all","stage_request.approval_pending":"Pending","stage_request.denied":"Denied","stage_request.request":"Join stage","stage_request.leave_stage":"Leave stage","stage_request.request_tip":"Request to join the discussion","stage_request.leave_tip":"Leave the stage","stage_request.pending_tip":"Request pending","stage_request.denied_tip":"Rejected request","stage.empty_host":"The stage is empty","stage.empty_host_summary":"To begin the webinar, please join the stage or accept a join stage request from the participants tab.","stage.empty_viewer":"Webinar has not yet been started","stage.remove_from_stage":"Remove from stage","stage.add_to_stage":"Add to stage","stage.join_title":"Joining webinar stage","stage.join_summary":"Upon joining the stage, your video & audio as shown above will be visible to all participants.","stage.join_cancel":"Cancel","stage.join_confirm":"Confirm & Join stage","setup_screen.join_in_as":"Join in as","setup_screen.joining_as":"Joining as","setup_screen.your_name":"Your name"}},57394:(e,t,s)=>{s.r(t),s.d(t,{dyte_polls:()=>n});var a=s(94196),o=s(67393),i=s(33565),r=s(24849);s(60368);const n=class{constructor(e){(0,a.r)(this,e),this.iconPack=o.d,this.t=(0,i.u)(),this.create=!1}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.meeting}meetingChanged(e){this.polls=null==e?void 0:e.polls.items,e.polls.on("pollsUpdate",(e=>{this.polls=[...e.polls]})),this.onCreate=async t=>{this.create=!1,await e.polls.create(t.question,t.options,t.anonymous,t.hideVotes)},this.onVote=async(t,s)=>{await e.polls.vote(t,s)}}toggleCreateState(){this.create=!this.create}componentDidRender(){(0,r.s)(this.pollEl)}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"ctr",part:"container"},(0,a.h)("div",{class:"polls-view scrollbar",ref:e=>this.pollEl=e,part:"polls"},this.polls.map((e=>{var t;return(0,a.h)("dyte-poll",{key:e.id,poll:e,onDyteVotePoll:e=>{this.onVote(e.detail.id,e.detail.index)},self:null===(t=this.meeting)||void 0===t?void 0:t.self.id})})),this.create&&(0,a.h)("dyte-poll-form",{part:"poll-form",onDyteCreatePoll:e=>{this.onCreate(e.detail)}})),(0,a.h)("dyte-button",{kind:"wide",onClick:()=>this.toggleCreateState(),variant:this.create?"secondary":"primary",part:"button"},this.create?this.t("Cancel Poll Creation"):this.t("Create New Poll"))))}static get watchers(){return{meeting:["meetingChanged"]}}};n.style=".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{margin-top:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;flex-direction:column;font-family:var(--dyte-font-family, sans-serif);font-size:14px}*{box-sizing:border-box}.ctr{box-sizing:border-box;padding:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-0, 0px);display:flex;flex:1 1 0%;flex-direction:column}.polls-view{overflow-y:auto;flex:1 1 0%;flex-basis:0}"},33565:(e,t,s)=>{s.d(t,{g:()=>o,u:()=>i});var a=s(60368);const o=async e=>{if(null==e||"en"===e||""===e.trim())return a.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},a.d,await t.json()):a.d}catch(t){return a.d}},i=(e=a.d)=>t=>{var s;return null!==(s=e[t])&&void 0!==s?s:t}},24849:(e,t,s)=>{s.d(t,{s:()=>a});const a=e=>{null!=e&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"})}}}]);