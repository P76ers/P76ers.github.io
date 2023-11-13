"use strict";(self.webpackChunkcodingdocs=self.webpackChunkcodingdocs||[]).push([[6076],{60368:(e,t,i)=>{i.d(t,{d:()=>s});const s={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all","stage_request.header_title":"Join Stage Requests","stage_request.deny_request":"Deny request","stage_request.accept_request":"Accept request","stage_request.accept_all":"Accept all","stage_request.approval_pending":"Pending","stage_request.denied":"Denied","stage_request.request":"Join stage","stage_request.leave_stage":"Leave stage","stage_request.request_tip":"Request to join the discussion","stage_request.leave_tip":"Leave the stage","stage_request.pending_tip":"Request pending","stage_request.denied_tip":"Rejected request","stage.empty_host":"The stage is empty","stage.empty_host_summary":"To begin the webinar, please join the stage or accept a join stage request from the participants tab.","stage.empty_viewer":"Webinar has not yet been started","stage.remove_from_stage":"Remove from stage","stage.add_to_stage":"Add to stage","stage.join_title":"Joining webinar stage","stage.join_summary":"Upon joining the stage, your video & audio as shown above will be visible to all participants.","stage.join_cancel":"Cancel","stage.join_confirm":"Confirm & Join stage","setup_screen.join_in_as":"Join in as","setup_screen.joining_as":"Joining as","setup_screen.your_name":"Your name"}},56076:(e,t,i)=>{i.r(t),i.d(t,{dyte_participants_toggle:()=>c});var s=i(94196),a=i(67393),n=i(33565),r=i(79781),o=i(76851);i(60368);const c=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.variant="button",this.iconPack=a.d,this.t=(0,n.u)(),this.participantsActive=!1,this.waitlistedParticipants=[],this.stageRequestedParticipants=[]}connectedCallback(){this.meetingChanged(this.meeting),this.statesChanged(this.states),(0,r.o)("sidebar",(()=>this.statesChanged()))}disconnectedCallback(){null!=this.meeting&&(this.waitlistedParticipantJoinedListener&&this.meeting.participants.waitlisted.removeListener("participantJoined",this.waitlistedParticipantJoinedListener),this.waitlistedParticipantLeftListener&&this.meeting.participants.waitlisted.removeListener("participantLeft",this.waitlistedParticipantLeftListener),this.peerRequestToJoinStateListener&&this.meeting.participants.removeListener("peerRequestToJoinStage",this.peerRequestToJoinStateListener),this.peerAcceptedToJoinStageListener&&this.meeting.participants.removeListener("peerAcceptedToJoinStage",this.peerAcceptedToJoinStageListener),this.peerRejectedToJoinStageListener&&this.meeting.participants.removeListener("peerRejectedToJoinStage",this.peerRejectedToJoinStageListener))}meetingChanged(e){null!=e&&(e.self.permissions.acceptWaitingRequests&&(this.waitlistedParticipants=e.participants.waitlisted.toArray(),this.waitlistedParticipantJoinedListener=e=>{this.waitlistedParticipants.some((t=>t.id===e.id))||(this.waitlistedParticipants=[...this.waitlistedParticipants,e])},this.waitlistedParticipantLeftListener=e=>{this.waitlistedParticipants=this.waitlistedParticipants.filter((t=>t.id!==e.id))},e.participants.waitlisted.addListener("participantJoined",this.waitlistedParticipantJoinedListener),e.participants.waitlisted.addListener("participantLeft",this.waitlistedParticipantLeftListener)),this.meeting.self.permissions.acceptPresentRequests&&(this.peerRequestToJoinStateListener=t=>{this.stageRequestedParticipants=this.stageRequestedParticipants.filter((e=>e.id!=t.id));const i=e.participants.joined.get(t.id);void 0!==i&&this.stageRequestedParticipants.push(i)},this.peerAcceptedToJoinStageListener=e=>{this.stageRequestedParticipants=this.stageRequestedParticipants.filter((t=>t.id!=e.id))},this.peerRejectedToJoinStageListener=e=>{this.stageRequestedParticipants=this.stageRequestedParticipants.filter((t=>t.id!=e.id))},this.stageRequestedParticipants=this.meeting.participants.joined.toArray().filter((e=>"REQUESTED_TO_JOIN_STAGE"===e.webinarStageStatus)),e.participants.addListener("peerRequestToJoinStage",this.peerRequestToJoinStateListener),e.participants.addListener("peerAcceptedToJoinStage",this.peerAcceptedToJoinStageListener),e.participants.addListener("peerRejectedToJoinStage",this.peerRejectedToJoinStageListener)))}statesChanged(e){const t=e||r.s;null!=t&&(this.participantsActive=!0===t.activeSidebar&&"participants"===t.sidebar)}toggleParticipantsTab(){const e=this.states||r.s;this.participantsActive=!((null==e?void 0:e.activeSidebar)&&"participants"===(null==e?void 0:e.sidebar)),r.s.activeSidebar=this.participantsActive,r.s.sidebar=this.participantsActive?"participants":"none",this.stateUpdate.emit({activeSidebar:this.participantsActive,sidebar:this.participantsActive?"participants":"none"})}render(){var e,t,i,a;const n=this.t("participants"),r=null===(e=this.meeting)||void 0===e?void 0:e.self.suggestedTheme,c=this.waitlistedParticipants.length+this.stageRequestedParticipants.length;if(!r||(0,o.i)(r)||(null===(a=null===(i=null===(t=r)||void 0===t?void 0:t.controlBar)||void 0===i?void 0:i.elements)||void 0===a?void 0:a.participants))return(0,s.h)(s.H,{title:n},0!==c&&!this.participantsActive&&(0,s.h)("div",{class:"waiting-participants-count",part:"waiting-participants-count"},(0,s.h)("span",null,c<=100?c:"99+")),(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,class:{active:this.participantsActive},onClick:()=>this.toggleParticipantsTab(),icon:this.iconPack.participants,label:n,variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};c.style=":host{position:relative;display:block;font-family:var(--dyte-font-family, sans-serif)}.waiting-participants-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .waiting-participants-count{right:var(--dyte-space-4, 16px);top:auto}"},33565:(e,t,i)=>{i.d(t,{g:()=>a,u:()=>n});var s=i(60368);const a=async e=>{if(null==e||"en"===e||""===e.trim())return s.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},s.d,await t.json()):s.d}catch(t){return s.d}},n=(e=s.d)=>t=>{var i;return null!==(i=e[t])&&void 0!==i?i:t}},79781:(e,t,i)=>{i.d(t,{o:()=>c,s:()=>o});var s=i(94196);const a=e=>!("isConnected"in e)||e.isConnected,n=((e,t)=>{let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,e(...s)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(a))}),2e3),r=(e,t)=>{const i=e.indexOf(t);i>=0&&(e[i]=e[e.length-1],e.length--)},{state:o,onChange:c}=((e,t)=>{const i=((e,t=((e,t)=>e!==t))=>{let i=new Map(Object.entries(null!=e?e:{}));const s={dispose:[],get:[],set:[],reset:[]},a=()=>{i=new Map(Object.entries(null!=e?e:{})),s.reset.forEach((e=>e()))},n=e=>(s.get.forEach((t=>t(e))),i.get(e)),o=(e,a)=>{const n=i.get(e);t(a,n,e)&&(i.set(e,a),s.set.forEach((t=>t(e,a,n))))},c="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>n(t),ownKeys:e=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>i.has(t),set:(e,t,i)=>(o(t,i),!0)}),p=(e,t)=>(s[e].push(t),()=>{r(s[e],t)});return{state:c,get:n,set:o,on:p,onChange:(t,i)=>{const s=p("set",((e,s)=>{e===t&&i(s)})),a=p("reset",(()=>i(e[t])));return()=>{s(),a()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(p("set",t.set)),t.get&&e.push(p("get",t.get)),t.reset&&e.push(p("reset",t.reset)),t.dispose&&e.push(p("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{s.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=i.get(e);s.set.forEach((i=>i(e,t,t)))}}})(e,t);return i.use((()=>{if("function"!=typeof s.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const i=(0,s.a)();i&&((e,t,i)=>{const s=e.get(t);s?s.includes(i)||s.push(i):e.set(t,[i])})(e,t,i)},set:t=>{const i=e.get(t);i&&e.set(t,i.filter(s.f)),n(e)},reset:()=>{e.forEach((e=>e.forEach(s.f))),n(e)}}})()),i})({})},76851:(e,t,i)=>{i.d(t,{P:()=>n,a:()=>s,c:()=>r,i:()=>a});const s=e=>"requestProduceVideo"in e,a=e=>!("controlBar"in e);var n;!function(e){e[e.Video=0]="Video",e[e.Audio=1]="Audio",e[e.ScreenShare=2]="ScreenShare"}(n||(n={}));const r=(e,t)=>{switch(e){case n.Video:return"ALLOWED"===(s(t)?t.produceVideo:t.produceVideo.allow);case n.Audio:return"ALLOWED"===(s(t),t.produceAudio);case n.ScreenShare:return"ALLOWED"===(s(t)?t.produceScreenshare:t.produceScreenshare.allow)}}}}]);