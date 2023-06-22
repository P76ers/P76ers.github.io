"use strict";
exports.id = 1324;
exports.ids = [1324];
exports.modules = {

/***/ 11324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_participants: () => (/* binding */ DyteParticipants)
/* harmony export */ });
/* harmony import */ var _index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94196);
/* harmony import */ var _default_icon_pack_35359343_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67393);
/* harmony import */ var _index_a0390d0a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33565);
/* harmony import */ var _default_language_355974c8_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60368);





const dyteParticipantsCss = ".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{margin-top:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;flex-direction:column;font-family:var(--dyte-font-family, sans-serif);font-size:14px}input{font-family:var(--dyte-font-family, sans-serif)}*{box-sizing:border-box}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;height:var(--dyte-space-12, 48px);align-items:center;justify-content:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.ctr{box-sizing:border-box;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-0, 0px);overflow-y:auto;flex-grow:1;flex-basis:0}.search{position:-webkit-sticky;position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.search dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.search input{box-sizing:border-box;height:var(--dyte-space-9, 36px);width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.participants{margin-top:var(--dyte-space-4, 16px);padding:var(--dyte-space-0, 0px)}.heading-count{font-size:14px}.empty-message{margin-top:var(--dyte-space-10, 40px);margin-bottom:var(--dyte-space-10, 40px);text-align:center;font-size:14px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.waiting-participants .accept-all-button{margin-bottom:var(--dyte-space-6, 24px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.waiting-participant{display:flex;align-items:center;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.waiting-participant .participant-details{margin-right:auto;display:flex;align-items:center}.waiting-participant .participant-details dyte-avatar{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);flex-shrink:0;font-size:14px}.waiting-participant .participant-details .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1080px){.waiting-participant .participant-details .name{max-width:var(--dyte-space-40, 160px)}}.waiting-participant .waitlist-controls{display:flex}.waiting-participant .waitlist-controls dyte-button{margin-left:var(--dyte-space-2, 8px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px)}.waiting-participant .waitlist-controls dyte-icon.accept{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.waiting-participant .waitlist-controls dyte-icon.deny{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}";

const DyteParticipants = class {
  constructor(hostRef) {
    (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Icon pack */
    this.iconPack = _default_icon_pack_35359343_js__WEBPACK_IMPORTED_MODULE_1__.d;
    /** Language */
    this.t = (0,_index_a0390d0a_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.search = '';
    this.participants = [];
    this.waitlistedParticipants = [];
    this.stageRequestedParticipants = [];
    this.updateStageRequestedParticipants = () => {
      this.stageRequestedParticipants = this.meeting.participants.joined
        .toArray()
        .filter((p) => p.webinarStageStatus === 'REQUESTED_TO_JOIN_STAGE');
    };
    this.onSearchInput = (e) => {
      this.search = e.target.value;
    };
    this.acceptWaitingRoomRequest = async (id) => {
      await this.meeting.participants.acceptWaitingRoomRequest(id);
      this.updateStageRequestedParticipants();
    };
    this.acceptStageRequest = async (id) => {
      const participant = this.meeting.participants.joined.get(id);
      if (participant !== undefined)
        await participant.acceptJoinStageRequest();
      this.updateStageRequestedParticipants();
    };
    this.rejectStageRequest = async (id) => {
      const participant = this.meeting.participants.joined.get(id);
      if (participant !== undefined)
        await participant.rejectRequestToJoinStage();
      this.updateStageRequestedParticipants();
    };
    this.acceptAllStageRequest = async () => {
      const payload = this.meeting.participants.joined
        .toArray()
        .filter((p) => p.webinarStageStatus === 'REQUESTED_TO_JOIN_STAGE')
        .map((p) => ({
        id: p.id,
        requestToJoinType: 'REQUEST_TO_PRESENT',
      }));
      await this.meeting.participants.acceptAllRequestToJoinStageRequests(payload);
      this.updateStageRequestedParticipants();
    };
    this.acceptAllWaitingRoomRequests = async () => {
      const requestPromises = this.waitlistedParticipants.map((participant) => this.meeting.participants.acceptWaitingRoomRequest(participant.id));
      await Promise.all(requestPromises);
    };
    this.rejectWaitingRoomRequest = async (id) => {
      await this.meeting.participants.rejectWaitingRoomRequest(id);
    };
    this.shouldShowWaitlist = () => {
      return (this.meeting.self.permissions.acceptWaitingRequests &&
        this.waitlistedParticipants.length !== 0);
    };
    this.shouldShowWebinarPresentRequest = () => {
      return (this.meeting.self.permissions.acceptPresentRequests &&
        this.stageRequestedParticipants.length > 0);
    };
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
    this.participantJoinedListener &&
      this.meeting.participants.joined.removeListener('participantJoined', this.participantJoinedListener);
    this.participantLeftListener &&
      this.meeting.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    this.waitlistedParticipantJoinedListener &&
      this.meeting.participants.waitlisted.removeListener('participantJoined', this.waitlistedParticipantJoinedListener);
    this.waitlistedParticipantLeftListener &&
      this.meeting.participants.waitlisted.removeListener('participantLeft', this.waitlistedParticipantLeftListener);
    this.peerRequestToJoinStateListener &&
      this.meeting.participants.removeListener('peerRequestToJoinStage', this.peerRequestToJoinStateListener);
    this.peerAcceptedToJoinStageListener &&
      this.meeting.participants.removeListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
    this.peerRejectedToJoinStageListener &&
      this.meeting.participants.removeListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
    this.peerRejectedToJoinStageListener &&
      this.meeting.participants.removeListener('removedFromStage', this.peerRejectedToJoinStageListener);
  }
  meetingChanged(meeting) {
    if (meeting == null)
      return;
    this.participants = [meeting.self, ...meeting.participants.joined.toArray()];
    this.participantJoinedListener = (participant) => {
      if (!this.participants.some((p) => p.id === participant.id)) {
        this.participants = [...this.participants, participant];
      }
    };
    this.participantLeftListener = (participant) => {
      this.participants = this.participants.filter((p) => p.id !== participant.id);
      this.stageRequestedParticipants = this.stageRequestedParticipants.filter((p) => p.id !== participant.id);
    };
    this.waitlistedParticipants = meeting.participants.waitlisted.toArray();
    this.waitlistedParticipantJoinedListener = (participant) => {
      if (!this.waitlistedParticipants.some((p) => p.id === participant.id)) {
        this.waitlistedParticipants = [...this.waitlistedParticipants, participant];
      }
    };
    this.waitlistedParticipantLeftListener = (participant) => {
      this.waitlistedParticipants = this.waitlistedParticipants.filter((p) => p.id !== participant.id);
    };
    this.peerRequestToJoinStateListener = (request) => {
      // Dedupe
      this.stageRequestedParticipants = this.stageRequestedParticipants.filter((p) => p.id != request.id);
      const participant = meeting.participants.joined.get(request.id);
      if (participant !== undefined)
        this.stageRequestedParticipants.push(participant);
    };
    this.peerAcceptedToJoinStageListener = (request) => {
      this.stageRequestedParticipants = this.stageRequestedParticipants.filter((p) => p.id != request.id);
    };
    this.peerRejectedToJoinStageListener = (request) => {
      this.stageRequestedParticipants = this.stageRequestedParticipants.filter((p) => p.id != request.id);
    };
    this.stageRequestedParticipants = this.participants.filter((p) => p.webinarStageStatus === 'REQUESTED_TO_JOIN_STAGE');
    meeting.participants.joined.addListener('participantJoined', this.participantJoinedListener);
    meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
    meeting.participants.waitlisted.addListener('participantJoined', this.waitlistedParticipantJoinedListener);
    meeting.participants.waitlisted.addListener('participantLeft', this.waitlistedParticipantLeftListener);
    meeting.participants.addListener('peerRequestToJoinStage', this.peerRequestToJoinStateListener);
    meeting.participants.addListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
    meeting.participants.addListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
    meeting.participants.addListener('removedFromStage', this.peerRejectedToJoinStageListener);
  }
  getParticipants() {
    const search = this.search.trim();
    if (search === '') {
      return this.participants;
    }
    return this.participants.filter((p) => { var _a; return ((_a = p.name) !== null && _a !== void 0 ? _a : p.id).toLowerCase().includes(search.toLowerCase()); });
  }
  render() {
    const participants = this.getParticipants();
    const showWaitlist = this.shouldShowWaitlist();
    const showPresentRequest = this.shouldShowWebinarPresentRequest();
    return ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr scrollbar", part: "container" }, showPresentRequest && ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waiting-participants" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "heading-count", part: "waitlisted-heading-count" }, this.t('stage_request.header_title'), " (", this.stageRequestedParticipants.length, ")"), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "participants", part: "waitlisted-participants" }, this.stageRequestedParticipants.map((participant) => ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "waiting-participant", key: participant.id }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-details" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: participant, size: "sm" }), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "name", title: participant.name }, participant.name)), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waitlist-controls" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('stage_request.deny_request'), variant: "secondary" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", onClick: () => this.rejectStageRequest(participant.id) }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "deny", icon: this.iconPack.dismiss }))), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('stage_request.accept_request'), variant: "secondary" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", onClick: () => this.acceptStageRequest(participant.id) }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "accept", icon: this.iconPack.checkmark })))))))), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "accept-all-button", variant: "secondary", kind: "wide", onClick: this.acceptAllStageRequest }, this.t('stage_request.accept_all')))), showWaitlist && ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waiting-participants" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "heading-count", part: "waitlisted-heading-count" }, this.t('waitlist.header_title'), " (", this.waitlistedParticipants.length, ")"), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "participants", part: "waitlisted-participants" }, this.waitlistedParticipants.map((participant) => ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "waiting-participant", key: participant.id }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-details" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: participant, size: "sm" }), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "name", title: participant.name }, participant.name)), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waitlist-controls" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('waitlist.deny_request'), variant: "secondary" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", onClick: () => this.rejectWaitingRoomRequest(participant.id) }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "deny", icon: this.iconPack.dismiss }))), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('waitlist.accept_request'), variant: "secondary" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", onClick: () => this.acceptWaitingRoomRequest(participant.id) }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "accept", icon: this.iconPack.checkmark })))))))), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "accept-all-button", variant: "secondary", kind: "wide", onClick: this.acceptAllWaitingRoomRequests }, this.t('waitlist.accept_all')))), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "heading-count", part: "heading-count" }, this.t('In Call'), " (", this.participants.length, ")"), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search", part: "search" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.search, part: "search-icon" }), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "search", autocomplete: "off", placeholder: "Search", onInput: this.onSearchInput, part: "search-input" })), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "participants", part: "participants" }, participants.map((participant) => ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-participant", { role: "listitem", key: participant.id, meeting: this.meeting, participant: participant }))), participants.length === 0 && ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "empty-message", part: "empty-message" }, this.search.length > 0
      ? this.t('Participant with specified name not found')
      : this.t('It looks like nobody is here')))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteParticipants.style = dyteParticipantsCss;




/***/ }),

/***/ 33565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getLangData),
/* harmony export */   u: () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var _default_language_355974c8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60368);


// Replace with cdn base path in prod
const LANG_BASE_URL = 'http://localhost:5000';
const getLangData = async (lang) => {
  if (lang == null || lang === 'en' || lang.trim() === '') {
    return _default_language_355974c8_js__WEBPACK_IMPORTED_MODULE_0__.d;
  }
  try {
    const res = await fetch(`${LANG_BASE_URL}/${lang}.json`);
    if (!res.ok) {
      return _default_language_355974c8_js__WEBPACK_IMPORTED_MODULE_0__.d;
    }
    // merge fetched language with defaultLanguage to avoid empty properties
    return Object.assign({}, _default_language_355974c8_js__WEBPACK_IMPORTED_MODULE_0__.d, await res.json());
  }
  catch (_) {
    return _default_language_355974c8_js__WEBPACK_IMPORTED_MODULE_0__.d;
  }
};
/**
 * Creates an i18n instance from a language dictionary/object.
 * @param lang The language dictionary
 * @returns A function which handles i18n
 */
const useLanguage = (lang = _default_language_355974c8_js__WEBPACK_IMPORTED_MODULE_0__.d) => {
  return (key) => {
    var _a;
    return (_a = lang[key]) !== null && _a !== void 0 ? _a : key;
  };
};




/***/ })

};
;