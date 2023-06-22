"use strict";
exports.id = 4311;
exports.ids = [4311];
exports.modules = {

/***/ 14311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_participant: () => (/* binding */ DyteParticipant)
/* harmony export */ });
/* harmony import */ var _index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94196);
/* harmony import */ var _default_icon_pack_35359343_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67393);
/* harmony import */ var _index_a0390d0a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33565);
/* harmony import */ var _string_133d57e8_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40348);
/* harmony import */ var _default_language_355974c8_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60368);






const dyteParticipantCss = ":host{position:relative;display:flex;height:var(--dyte-space-14, 56px);align-items:center;justify-content:space-between;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.left{display:flex;align-items:center}.left>*{margin-right:var(--dyte-space-2, 8px)}.left>*:last-child{margin-right:var(--dyte-space-0, 0px)}.right{display:flex;align-items:center;justify-content:flex-end}.right>*{margin-left:var(--dyte-space-2, 8px)}.right>*:first-child{margin-left:var(--dyte-space-0, 0px)}.name{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}dyte-avatar{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);font-size:14px}dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}dyte-icon.red{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon.more{cursor:pointer}";

const DyteParticipant = class {
  constructor(hostRef) {
    (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.pinnedListener = ({ isPinned }) => {
      this.isPinned = isPinned;
    };
    this.stageListener = ({ webinarStageStatus }) => {
      this.isOnStage = webinarStageStatus === 'ON_STAGE';
    };
    /** Icon pack */
    this.iconPack = _default_icon_pack_35359343_js__WEBPACK_IMPORTED_MODULE_1__.d;
    /** Language */
    this.t = (0,_index_a0390d0a_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.audioEnabled = false;
    this.videoEnabled = false;
    this.isPinned = false;
    this.isOnStage = false;
    this.canDisableParticipantAudio = false;
    this.canDisableParticipantVideo = false;
    this.canKickParticipant = false;
    this.canPinParticipant = false;
    this.canAllowParticipantOnStage = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.participantChanged(this.participant);
  }
  disconnectedCallback() {
    if (this.participant == null)
      return;
    this.audioUpdateListener &&
      this.participant.removeListener('audioUpdate', this.audioUpdateListener);
    this.videoUpdateListener &&
      this.participant.removeListener('videoUpdate', this.videoUpdateListener);
    this.participant.removeListener('pinned', this.pinnedListener);
    this.participant.removeListener('unpinned', this.pinnedListener);
    this.participant.removeListener('peerStartedPresenting', this.stageListener);
    this.participant.removeListener('peerStoppedPresenting', this.stageListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      const { self } = meeting;
      this.canDisableParticipantAudio = self.permissions.canAllowParticipantAudio;
      this.canDisableParticipantVideo = self.permissions.canAllowParticipantVideo;
      this.canKickParticipant = self.permissions.kickParticipant;
      this.canPinParticipant = self.permissions.pinParticipant;
      this.canAllowParticipantOnStage = self.permissions.acceptPresentRequests;
    }
  }
  participantChanged(participant) {
    if (participant != null) {
      this.audioEnabled = participant.audioEnabled;
      this.videoEnabled = participant.videoEnabled;
      this.isPinned = participant.isPinned;
      this.isOnStage = participant.webinarStageStatus === 'ON_STAGE';
      this.audioUpdateListener = ({ audioEnabled }) => {
        this.audioEnabled = audioEnabled;
      };
      this.videoUpdateListener = ({ videoEnabled }) => {
        this.videoEnabled = videoEnabled;
      };
      participant.addListener('audioUpdate', this.audioUpdateListener);
      participant.addListener('videoUpdate', this.videoUpdateListener);
      participant.addListener('pinned', this.pinnedListener);
      participant.addListener('unpinned', this.pinnedListener);
      participant.addListener('peerStartedPresenting', this.stageListener);
      participant.addListener('peerStoppedPresenting', this.stageListener);
    }
  }
  render() {
    var _a, _b;
    const showMenu = this.canDisableParticipantAudio || this.canDisableParticipantVideo || this.canKickParticipant;
    const name = (0,_string_133d57e8_js__WEBPACK_IMPORTED_MODULE_4__.f)(((_a = this.participant) === null || _a === void 0 ? void 0 : _a.name) || '');
    return ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "left" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: this.participant, size: "sm" }), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "name", title: name }, (0,_string_133d57e8_js__WEBPACK_IMPORTED_MODULE_4__.s)(name, 16), " ", ((_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.id) === this.participant.id && this.t('(you)'))), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "right" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: {
        red: !this.audioEnabled,
      }, icon: this.audioEnabled ? this.iconPack.mic_on : this.iconPack.mic_off }), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: {
        red: !this.videoEnabled,
      }, icon: this.videoEnabled ? this.iconPack.video_on : this.iconPack.video_off }), showMenu && ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu", null, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", slot: "trigger" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "more", icon: this.iconPack.more_vertical })), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-list", null, this.canPinParticipant && ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: () => {
        if (this.isPinned) {
          this.participant.unpin();
        }
        else {
          this.participant.pin();
        }
      } }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.isPinned ? this.iconPack.pin_off : this.iconPack.pin, slot: "start" }), this.isPinned ? this.t('Unpin') : this.t('Pin'))), this.canDisableParticipantAudio && ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: () => {
        var _a, _b;
        (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.participants.disableAudio((_b = this.participant) === null || _b === void 0 ? void 0 : _b.id);
      } }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.mic_off, slot: "start" }), "Mute")), this.canDisableParticipantAudio && ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: () => {
        var _a, _b;
        (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.participants.disableVideo((_b = this.participant) === null || _b === void 0 ? void 0 : _b.id);
      } }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.video_off, slot: "start" }), "Turn off Video")), this.meeting &&
      this.meeting.meta.viewType === 'WEBINAR' &&
      this.canAllowParticipantOnStage &&
      this.participant.id !== this.meeting.self.id && ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { class: this.isOnStage ? 'red' : '', onClick: async () => {
        const p = this.participant;
        if (this.isOnStage) {
          await p.removeFromStage();
        }
        else {
          await p.acceptJoinStageRequest();
        }
        this.isOnStage = !this.isOnStage;
      } }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.isOnStage ? this.iconPack.leave_stage : this.iconPack.join_stage, slot: "start" }), this.isOnStage
      ? this.t('stage.remove_from_stage')
      : this.t('stage.add_to_stage'))), this.canKickParticipant && ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { class: "red", onClick: () => {
        var _a, _b;
        (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.participants.kick((_b = this.participant) === null || _b === void 0 ? void 0 : _b.id);
      } }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss, slot: "start" }), "Kick"))))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "participant": ["participantChanged"]
  }; }
};
DyteParticipant.style = dyteParticipantCss;




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




/***/ }),

/***/ 40348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ sanitizeLink),
/* harmony export */   f: () => (/* binding */ formatName),
/* harmony export */   h: () => (/* binding */ hasOnlyEmojis),
/* harmony export */   s: () => (/* binding */ shorten)
/* harmony export */ });
/**
 * Shorten a string upto a maximum length of characters and add `...` as suffix if it exceeds the maximum length
 * @param str The The string you want to shorten
 * @param maxLength Maximum length of character
 * @returns Formatted shortedned string
 */
const shorten = (str, maxLength = 20) => {
  if (str == null)
    return '';
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};
/**
 * Checks if a given string consists of only emojis.
 *
 * However this classifies a string with numbers as emoji as well.
 * Which works in our favour for now in chat as it enlarges messages with just numbers.
 * @param str String on which to perform the check on
 * @returns A Boolean value which indicates if string consists of only emojis
 */
const hasOnlyEmojis = (str) => {
  const num = /^\d+$/;
  const re = /^\p{Emoji}+$/u;
  return re.test(str) && !num.test(str);
};
const sanitizeLink = (link) => {
  // TODO: needs more work
  if (link.trim().toLowerCase().startsWith('javascript:')) {
    return 'https://dyte.io';
  }
  return link;
};
/**
 * Formats a given name and returns **Participant** for unnamed participants.
 * @param name Name of participant
 * @returns Name to use in the UI
 */
const formatName = (name) => {
  name = name.trim();
  if (name === '')
    return 'Participant';
  return name;
};




/***/ })

};
;