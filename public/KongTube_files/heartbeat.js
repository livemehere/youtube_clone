(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var k6=function(a,b){if(!Number.isFinite(a))return String(a);a=String(a);var c=a.indexOf(".");-1===c&&(c=a.length);var d="-"===a[0]?"-":"";d&&(a=a.substring(1));return d+(0,g.iSa)("0",Math.max(0,b-c))+a},gXa=function(){return{G:"svg",
W:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},V:[{G:"path",W:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},hXa=function(){return{G:"svg",
W:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},V:[{G:"path",W:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},m6=function(a){"number"===typeof a?(this.date=iXa(a,0,1),l6(this,1)):g.Oa(a)?(this.date=iXa(a.getFullYear(),a.getMonth(),a.getDate()),l6(this,a.getDate())):(this.date=new Date(g.Ta()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),l6(this,a))},iXa=function(a,b,c){b=new Date(a,b,c);
0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b},l6=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},n6=function(a,b){g.aN.call(this,a,{G:"div",
L:"ytp-reminder-menu",W:{role:"menu",tabindex:"-1"},V:[{G:"div",L:"ytp-reminder-menu-contents",V:[{G:"div",L:"ytp-reminder-menu-items"}]}]},100,!0);this.i=b;this.B=[];this.menuPopupRenderer=void 0;this.items=this.Fa("ytp-reminder-menu-items");this.hide()},kXa=function(a){var b=jXa(a),c=0,d={};
for(c=0;c<b.length;d={cC:d.cC},c++){var e=a.B[c];e||(e=new g.V({G:"div",L:"ytp-reminder-menu-item",W:{role:"menuitem",tabindex:"0"},V:[{G:"div",L:"ytp-reminder-menu-item-icon",va:"{{icon}}"},{G:"div",L:"ytp-reminder-menu-item-label",va:"{{text}}"}]}),d.cC=c,e.Ra("click",function(l){return function(){var m=l.cC;a.Fb();m=jXa(a)[m];a.ea("reminderMenuItemClicked",m.serviceEndpoint||m.command)}}(d)),e.Ea(a.items),a.B[c]=e);
var f=b[c],h=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":h=gXa();break;case "NOTIFICATIONS_NONE":h=hXa();break;case "NOTIFICATIONS_ACTIVE":h=g.gK()}f=f.text?g.Qy(f.text):"";e.update({icon:h,text:f})}for(;c<a.B.length;)a.B.pop().dispose();0===c?a.Fb():a.md(a.i)},jXa=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},o6=function(a){g.V.call(this,{G:"div",
V:[{G:"button",Ia:["ytp-offline-slate-button","ytp-button"],V:[{G:"div",L:"ytp-offline-slate-button-icon",va:"{{icon}}"},{G:"div",L:"ytp-offline-slate-button-text",va:"{{text}}"}]}]});this.I=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.u=void 0;this.C=this.i=null;(this.D=this.Fa("ytp-offline-slate-button"))&&this.T(this.D,"click",this.J);this.hide()},lXa=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=b.toggleButtonRenderer:
b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&c.upcomingEventReminderButtonRenderer?a.upcomingEventReminderButtonRenderer=c.upcomingEventReminderButtonRenderer:c&&c.upcomingEventReminderButtonRenderer||(a.upcomingEventReminderButtonRenderer=null);p6(a)},p6=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.Qy(b.toggledText):"";a.update({text:c,icon:q6(b.toggledIcon)})}else c=b.defaultText?g.Qy(b.defaultText):"",a.update({text:c,icon:q6(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=mXa(a))?(c=b.text?g.Qy(b.text):"",a.update({text:c,icon:q6(b.icon)}),a.show()):a.hide():a.hide()},oXa=function(a,b,c){a.C||(a.C=new g.hx(a.I.U().dh));
var d={context:g.mv(a.C.config_||g.nv())};g.Hx()&&(d.context.clientScreenNonce=g.Hx());d.params=c;g.ov(a.C,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.u&&(a.upcomingEventReminderButtonRenderer.currentState=a.u,a.u=void 0)},
onError:function(){nXa(a)},
onTimeout:function(){nXa(a)}})},nXa=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,p6(a)):a.upcomingEventReminderButtonRenderer&&(a.u=void 0,p6(a))},q6=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return gXa();case "NOTIFICATIONS_NONE":return hXa();case "NOTIFICATIONS_ACTIVE":return g.gK();default:return null}},mXa=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.u||a.upcomingEventReminderButtonRenderer.currentState;a=g.q(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=c.value.upcomingEventReminderButtonStateRenderer)&&c.state===b&&c.button&&c.button.buttonRenderer)return c.button.buttonRenderer;return null},r6=function(a){g.V.call(this,{G:"div",
L:"ytp-offline-slate",V:[{G:"div",L:"ytp-offline-slate-background"},{G:"div",L:"ytp-offline-slate-bar",V:[{G:"span",L:"ytp-offline-slate-icon",V:[{G:"svg",W:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{G:"path",W:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{G:"circle",W:{cx:"12",cy:"12",r:"3"}}]}]},{G:"span",L:"ytp-offline-slate-messages",V:[{G:"div",L:"ytp-offline-slate-main-text",W:{"aria-label":"{{label}}"},va:"{{mainText}}"},{G:"div",L:"ytp-offline-slate-subtitle-text",va:"{{subtitleText}}"}]},{G:"span",L:"ytp-offline-slate-buttons"}]},{G:"button",Ia:["ytp-offline-slate-close-button","ytp-button"],V:[g.bK()]},{G:"button",Ia:["ytp-offline-slate-open-button","ytp-button"],V:[g.aK()]},{G:"div",L:"ytp-offline-slate-trailer-chip",va:"Trailer"}]});var b=
this;this.api=a;this.i=this.u=null;this.background=this.Fa("ytp-offline-slate-background");this.B=this.Fa("ytp-offline-slate-bar");this.D=new g.L(function(){g.N(b.B,"ytp-offline-slate-bar-fade")},15E3);
this.J=!1;this.C=new g.L(function(){g.N(b.element,"ytp-offline-slate-collapsed")},15E3);
g.J(this,this.C);g.J(this,this.D);this.countdownTimer=new g.L(this.vP,1E3,this);this.T(a,"presentingplayerstatechange",this.yP);this.T(a,"livestatedata",this.La);a=this.Fa("ytp-offline-slate-close-button");this.T(a,"click",function(){g.N(b.element,"ytp-offline-slate-collapsed")});
a=this.Fa("ytp-offline-slate-open-button");this.T(a,"click",function(){g.pr(b.element,"ytp-offline-slate-collapsed")});
this.hide();a=this.getVideoData();a.getPlayerResponse()&&(a=a.getPlayerResponse().playabilityStatus)&&this.La(a);a=8===this.api.getPresentingPlayerType()&&!this.getVideoData().qj;var c=8===this.api.getPresentingPlayerType();g.O(this.element,"ytp-offline-slate-premiere-trailer",a);g.O(this.element,"ytp-offline-slate-hide-background",c)},s6=function(a,b,c){var d,e,f,h;
if(b){var l=null!=b.subtitleText?g.Qy(b.subtitleText):"";c=c?c:null!=b.mainText?g.Qy(b.mainText):"";b=null!==(h=null===(f=null===(e=null===(d=b.mainText)||void 0===d?void 0:d.accessibility)||void 0===e?void 0:e.accessibilityData)||void 0===f?void 0:f.label)&&void 0!==h?h:c;a.update({mainText:c,subtitleText:l,label:b});g.O(a.element,"ytp-offline-slate-single-text-line",!l);g.O(a.B,"ytp-offline-slate-bar-hidden",!c&&!l)}},t6=function(a,b){var c=(0,g.R)();
this.trigger=a;this.i=b;this.B=c},v6=function(a){g.rM.call(this,a);
var b=this;this.K=!1;this.S=0;this.D=!1;this.u=new g.L(function(){var e=b.player.U(),f=b.getVideoData();if(u6(b))if(pXa(b)){var h;null!==(h=b.heartbeatParams)&&void 0!==h&&h.url&&(e=g.oj(b.heartbeatParams.url,{request_id:g.qna()}),f.Na&&(e=g.oj(e,{vvt:f.Na}),f.mdxEnvironment&&(e=g.oj(e,{mdx_environment:f.mdxEnvironment}))),f.oauthToken&&(e=g.oj(e,{access_token:f.oauthToken})),qXa(b,f,e))}else rXa(b),sXa(b,e,f)},0);
this.i=this.heartbeatParams=null;this.C=!1;this.J=new g.Ki(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.Z=new g.hx(void 0);this.X=this.attestationResponse=void 0;this.utcOffsetMinutes=-(new m6).date.getTimezoneOffset();this.B=new g.pC(this);g.J(this,this.u);g.J(this,this.B);rXa(this);tXa(this);this.B.T(a,"heartbeatparams",this.ex);this.B.T(a,"presentingplayerstatechange",this.GR);this.B.T(a,"videoplayerreset",this.HR);this.B.T(a,g.Ly("heartbeat"),this.onCueRangeEnter);this.C&&this.i&&
uXa(this,this.i);var c=new g.Jy(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),d=new g.Jy(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});a.Od([c,d]);vXa(this)},vXa=function(a){var b=a.getVideoData();
if(b.kh){var c=b.botguardData;c&&g.JL(c,a.player.U(),g.ML(b.ya||""))}},rXa=function(a){var b=a.getVideoData();
if(b.kh&&(b=new g.iza(b),g.GL.isInitialized()||3<=a.sequenceNumber)){var c=null;if(b.videoData.ya){var d=g.jza(b);if(d){c={};var e={};d=d.split("&");d=g.q(d);for(var f=d.next();!f.done;f=d.next())f=f.value.split("="),2===f.length&&(e[f[0]]=f[1]);e.r1a&&(c.webResponse=e.r1a);e.r1c&&(c.error=wXa[Number(e.r1c)]);c.challenge=b.videoData.ya}}a.attestationResponse=c||void 0}},pXa=function(a){var b=a.getVideoData();
if(!g.EF(a.getVideoData())||b.qI)return!1;if(b.useInnertubeDrmService()&&b.S){a="playready"===b.S.flavor&&b.N("html5_innertube_heartbeats_for_playready");var c="widevine"===b.S.flavor&&b.N("html5_innertube_heartbeats_for_widevine");b=g.hD(b.S)&&b.N("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},w6=function(a){if(pXa(a))return!!a.heartbeatParams;
var b=a.player.U(),c=a.getVideoData();return b.N("html5_heartbeat_wait_for_drm_killswitch")||!g.EF(a.getVideoData())||!c.useInnertubeDrmService()||c.Yg||c.IG?!!c.heartbeatToken:!1},x6=function(a,b){if(!a.u.isActive()&&a.K){var c=a.getVideoData();
if(w6(a)||c.isLivePlayback){if(void 0===b)if(a.D){var d;b=a.C?7500:(null===(d=a.heartbeatParams)||void 0===d?0:d.interval)?1E3*a.heartbeatParams.interval:a.getVideoData().iI||6E4}else b=1E3;a.u.start(b)}}},qXa=function(a,b,c){b.nk&&(c=g.oj(c,{internalipoverride:b.nk}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.xb&&(d.kpt=b.xb);c=g.oj(c,d);g.Jt(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.u.isActive()&&u6(a)){a.J.reset();a.sequenceNumber++;e=e.responseText;var f=xXa(e);if(f){a.player.Qa("onHeartbeat",f);var h="ok"===f.status?f.stop_heartbeat?2:0:"stop"===f.status?1:"live_stream_offline"===f.status?0:-1}else h=(h=e.match(yXa))?"0"===h[1]?0:1:-1;zXa(a,f,e,h)}},
onError:function(e){u6(a)&&y6(a,!0,"net-"+e.status)},
onTimeout:function(){u6(a)&&y6(a,!0,"timeout")},
withCredentials:!0})},u6=function(a){var b=a.getVideoData();
return 3===a.player.getPresentingPlayerType()||g.U(a.player.Bb(a.getPlayerType()),4)?!1:w6(a)||b.isLivePlayback?!0:(z6(a),!1)},sXa=function(a,b,c){var d,e,f,h={videoId:c.videoId,
sequenceNumber:a.sequenceNumber,heartbeatServerData:null!==(d=a.ma)&&void 0!==d?d:c.heartbeatServerData};a.X=a.attestationResponse;c.kh&&(h.attestationResponse=a.X);var l=g.oM(c),m=null!==(e=l.client)&&void 0!==e?e:{};m.utcOffsetMinutes=a.utcOffsetMinutes;h.context=l;h.cpn=c.clientPlaybackNonce;if(l="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)m.timeZone=l;m={heartbeatChecks:[]};if(l=c.getPlayerResponse())c.heartbeatToken&&(h.heartbeatToken=c.heartbeatToken),
(l=l.playabilityStatus)&&(l=l.liveStreamability)&&l.liveStreamabilityRenderer&&m.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&m.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");if(g.sE(b)){m.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED");var n=AXa(a);l={};null!==n&&(l.clientPlayerPositionUtcMillis=n);n=null===(f=a.player.vb())||void 0===f?void 0:g.FM(f);n=(null===n||void 0===n?void 0:n.freePreviewWatchedDuration)||0;0<n&&(l.freePreviewWatchedDuration={seconds:""+
n});m.unpluggedParams=l}h.heartbeatRequestParams=m;b.N("enable_linear_player_handling")&&c.isLivePlayback&&(b=AXa(a),null!==b&&(h.playbackState||(h.playbackState={}),h.playbackState.playbackPosition={utcTimeMillis:b}));b={timeout:3E4,onSuccess:function(p){var r;if(!a.u.isActive()&&u6(a)){var t=a.getVideoData(),v=t.kh&&null==a.X;t.kh=!(null===(r=p.heartbeatAttestationConfig)||void 0===r||!r.requiresAttestation)||v;r=p.playabilityStatus;t=JSON.stringify(r)||"{}";p.authenticationMismatch&&a.player.Da("authshear",
{});v=-1;var x=p.playabilityStatus;x&&(a.player.Qa("onHeartbeat",x),"OK"===x.status?v=p.stopHeartbeat?2:0:"UNPLAYABLE"===x.status?v=1:"LIVE_STREAM_OFFLINE"===x.status&&(v=0));a.sequenceNumber&&-1===v||a.J.reset();a.sequenceNumber++;p.heartbeatServerData&&(a.ma=p.heartbeatServerData);zXa(a,r,t,v)}},
onError:function(p){u6(a)&&y6(a,!0,"net-"+p.status)},
onTimeout:function(){u6(a)&&y6(a,!0,"timeout")}};
g.VF(c)&&(b.YJ="Bearer "+g.VF(c));g.ov(a.Z,"player/heartbeat",h,b)},zXa=function(a,b,c,d){-1===d?(b="decode "+g.Gc(c),y6(a,!1,b)):2===d?(z6(a),a.D=!0):(a.S=0,a.u.stop(),1===d?(a.D=!1,a.player.Nf("heartbeat.stop",a.De(c)),g.Ev("heartbeatActionPlayerHalted",BXa(b))):(a.D=!0,c=0,a.C&&b&&(c=uXa(a,b),a.player.ea("livestatedata",b)),c?x6(a,c):x6(a)))},uXa=function(a,b){var c,d,e=b.liveStreamability&&b.liveStreamability.liveStreamabilityRenderer,f=!(!e||!(e.switchStreamsImmediately||e.transitionTiming&&
"STREAM_TRANSITION_TIMING_IMMEDIATELY"===e.transitionTiming)),h=CXa(e),l=a.getVideoData(),m=a.player.Bb(a.getPlayerType()),n=m.Jc()&&!g.JF(l)&&!a.player.isAtLiveHead(a.getPlayerType());
if(2<=l.U().S){var p=(null===(c=a.player.xd())||void 0===c?void 0:c.Mb())||{};p.status=b.status||"";p.dvr=""+ +n;p["switch"]=""+ +f;p.ended=""+ +!(!e||!e.displayEndscreen);a.player.Da("heartbeat",p)}if(n&&!f)return h;f=e&&e.streamTransitionEndpoint&&e.streamTransitionEndpoint.watchEndpoint;if("STREAM_TRANSITION_TIMING_AT_STREAM_END"===(e&&e.transitionTiming))a.getVideoData().wM=f;else{if(n=f)(n=f&&f.videoId)?(a.player.hk(n,void 0,void 0,!0,!0,f),a.sA("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",
b),n=!0):n=!1;if(n)return h}if("OK"===b.status.toUpperCase()){f=e&&e.broadcastId;n=a.i&&a.i.liveStreamability&&a.i.liveStreamability.liveStreamabilityRenderer&&a.i.liveStreamability.liveStreamabilityRenderer.broadcastId;p=f!==n&&(null!=f||a.player.N("web_player_heartbeat_undefined_killswitch"));if(!l.hlsvp&&!l.qb||p)return e={video_id:l.videoId},l.lC&&(e.is_live_destination="1"),a.player.N("web_player_heartbeat_request_watch_next")||(e.disable_watch_next=!0,e.raw_watch_next_response=l.watchNextResponse),
e.autonav_state=l.autonavState,e.oauth_token=l.oauthToken,e.force_gvi=l.dh,e.Gi=l.Gi,8===a.player.getPresentingPlayerType()&&a.player.Uo(8),m=void 0,l.hlsvp||l.qb?p&&(m=new t6("broadcastIdChanged",n+","+f),a.sA("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",b)):(f&&(m=new t6("formatsReceived",""+f)),a.sA("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",b)),a.player.loadVideoByPlayerVars(e,void 0,void 0,
void 0,m),h;a.player.Wd("heartbeat",a.getPlayerType())}e&&e.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.J=!0,a.ub&&a.api.Vt()):g.fJ(m)&&(l=(null===(d=a.player.xd())||void 0===d?void 0:d.Mb())||{},a.player.Da("hbse",l,!0),a.player.Vt(),a.player.Qa("onLiveMediaEnded",b)));return h},CXa=function(a){var b=0;
a&&a.pollDelayMs&&(a=Number(a.pollDelayMs))&&(b=a);return b},y6=function(a,b,c){if(!a.u.isActive()){a.u.stop();
a.S++;var d=a.getVideoData();if(d.kI||b&&!g.EF(a.getVideoData())&&!w6(a)&&d.isLivePlayback)var e=!1;else{var f;(null===(e=a.heartbeatParams)||void 0===e?0:e.Dx)?f=a.heartbeatParams.Dx:f=d.jI||5;e=a.S>=f}e?(b?(b="heartbeat.net",e={enforcedPolicyToHaltOnNetworkFailure:!0}):(b="heartbeat.servererror",e=BXa()),g.Ev("heartbeatActionPlayerHalted",e),(e=a.getVideoData())&&e.isLivePlayback?a.player.Nf(b,"Video playback interrupted. Please try again.",c):a.player.Nf(b,"Sorry, there was an error licensing this video.",
c)):(x6(a,a.J.getValue()),g.Li(a.J))}},BXa=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},z6=function(a){a.S=0;
a.u.stop();a.D=!1;a.sequenceNumber=0},tXa=function(a){var b,c=a.getVideoData(),d=a.player.U();
if(c.isLivePlayback)if(g.pD(d.u)){a.C=!0;a.K=!0;if(!g.hE(d)||g.sE(d))a.offlineSlate=new r6(a.player),g.J(a,a.offlineSlate),g.dM(a.player,a.offlineSlate.element,4);(c=c.getPlayerResponse())&&c.playabilityStatus&&(a.i=c.playabilityStatus);if("UNPLAYABLE"!==(null===(b=a.i)||void 0===b?void 0:b.status)||a.player.N("stop_heartbeat_on_unplayable_live_videos_killswitch"))a.i?(c=CXa(a.i.liveStreamability&&a.i.liveStreamability.liveStreamabilityRenderer))?x6(a,c):x6(a,7500):x6(a,1E3)}else a.player.Nf("html5.unsupportedlive",
"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");else!d.N("html5_release_post_live_heartbeat_killswitch")&&g.ac(c.Aa,"heartbeat")&&a.player.Wd("heartbeat",a.getPlayerType())},AXa=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(1E3*a):null},xXa=function(a){try{var b=JSON.parse(a);
return null!=b?b:void 0}catch(c){}},wXa=["ATTESTATION_ERROR_UNKNOWN",
"ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"],DXa={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),
SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),
SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5},A6=DXa;A6=DXa;g.k=m6.prototype;g.k.ZK=A6.FIRSTDAYOFWEEK;g.k.aL=A6.FIRSTWEEKCUTOFFDAY;g.k.clone=function(){var a=new m6(this.date);a.ZK=this.ZK;a.aL=this.aL;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.add=function(a){if(a.u||a.i){var b=this.getMonth()+a.i+12*a.u,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(c=this.getFullYear(),b=0<=c&&99>=c?-1900:0,a=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),
this.date.setFullYear(a.getFullYear()+b),this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),l6(this,a.getDate()))};
g.k.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.k.toString=function(){var a=this.getFullYear(),b=0>a?"-":1E4<=a?"+":"";return[b+k6(Math.abs(a),b?6:4),k6(this.getMonth()+1,2),k6(this.getDate(),2)].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};g.w(n6,g.aN);n6.prototype.hide=function(){this.i&&this.i.removeAttribute("aria-haspopup");g.aN.prototype.hide.call(this)};
n6.prototype.show=function(){this.i&&this.i.setAttribute("aria-haspopup","true");g.aN.prototype.show.call(this)};
n6.prototype.xa=function(){g.Ce(this.B);g.aN.prototype.xa.call(this)};g.w(o6,g.V);
o6.prototype.J=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.B(a.toggledServiceEndpoint):this.B(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;p6(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.i&&this.i.ub)this.i.Fb();else{var b=mXa(this);b&&this.B(b.serviceEndpoint||b.command);b=g.q(b&&b.command&&b.command.commandExecutorCommand&&b.command.commandExecutorCommand.commands||[]);for(var c=b.next();!c.done;c=b.next())if((c=c.value)&&c.openPopupAction&&
c.openPopupAction.popup&&c.openPopupAction.popup.menuPopupRenderer){a=c.openPopupAction.popup.menuPopupRenderer;break}this.i||(this.i=new n6(this.I,this.D),this.i.Ea(this.element),g.J(this,this.i),this.i.subscribe("reminderMenuItemClicked",this.B,this));b=this.i;b.menuPopupRenderer=a;kXa(b)}};
o6.prototype.B=function(a){if(a&&(a.addUpcomingEventReminderEndpoint||a.removeUpcomingEventReminderEndpoint)){if(a.addUpcomingEventReminderEndpoint){var b=a.addUpcomingEventReminderEndpoint;var c="notification/add_upcoming_event_reminder"}else a.removeUpcomingEventReminderEndpoint&&(b=a.removeUpcomingEventReminderEndpoint,c="notification/remove_upcoming_event_reminder");if(c&&b&&b.params)for(oXa(this,c,b.params),a=g.q(b.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&b.updateUpcomingEventReminderButtonStateCommand){this.u=
b.updateUpcomingEventReminderButtonStateCommand.state;p6(this);break}}};g.w(r6,g.V);g.k=r6.prototype;g.k.getPlayerType=function(){if(8===this.api.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.La=function(a){var b,c,d=null===(c=null===(b=null===a||void 0===a?void 0:a.liveStreamability)||void 0===b?void 0:b.liveStreamabilityRenderer)||void 0===c?void 0:c.offlineSlate;if(d){this.u=a;d=d.liveStreamOfflineSlateRenderer;d.canShowCountdown?this.vP():s6(this,d);var e,f,h,l,m=null===(l=null===(h=null===(f=null===(e=null===a||void 0===a?void 0:a.liveStreamability)||void 0===e?void 0:e.liveStreamabilityRenderer)||void 0===f?void 0:f.offlineSlate)||void 0===h?void 0:h.liveStreamOfflineSlateRenderer)||
void 0===l?void 0:l.thumbnail;if(m){e=0;f=null;m=m.thumbnails;for(h=0;h<m.length;h++)m[h].width>e&&(e=m[h].width||0,f=m[h].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";d.actionButtons||d.reminderButton?(this.i||(this.i=new o6(this.api),this.i.Ea(this.Fa("ytp-offline-slate-buttons")),g.J(this,this.i)),lXa(this.i,d.actionButtons&&d.actionButtons[0],d.reminderButton)):this.i&&lXa(this.i,null,null);this.u=a}else this.u=null;this.yP()};
g.k.yP=function(a){if(8===this.api.getPresentingPlayerType())var b=!0;else{var c=this.api.Bb(),d=this.getVideoData();b=d.isLivePlayback&&(g.fJ(c)||g.U(c,2)||g.U(c,64));var e=2===d.autonavState&&g.U(c,2);c=c.Jc()&&!g.JF(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.u?this.ub?(null===a||void 0===a?0:g.SG(a,2))&&!this.getVideoData().qj&&(g.pr(this.element,"ytp-offline-slate-collapsed"),this.C.stop(),g.pr(this.B,"ytp-offline-slate-bar-fade"),this.D.start()):(this.show(),this.C.start(),this.api.ea("offlineslatestatechange"),
this.J&&this.api.Vt()):this.ub&&(this.hide(),this.api.ea("offlineslatestatechange"))};
g.k.vP=function(){var a,b,c,d,e=null===(d=null===(c=null===(b=null===(a=this.u)||void 0===a?void 0:a.liveStreamability)||void 0===b?void 0:b.liveStreamabilityRenderer)||void 0===c?void 0:c.offlineSlate)||void 0===d?void 0:d.liveStreamOfflineSlateRenderer;if(e){var f=Math.floor(g.Ta()/1E3),h=e.canShowCountdown&&Number(e.scheduledStartTime);!h||h<=f?(s6(this,e),this.countdownTimer.stop()):(f=g.XK(h-f),s6(this,e,f),g.hr(this.countdownTimer))}};
g.k.xa=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.V.prototype.xa.call(this)};t6.prototype.u=function(a){return this.trigger&&a.trigger?this.trigger===a.trigger&&this.i===a.i:!1};
t6.prototype.isExpired=function(){return 6E4<(0,g.R)()-this.B};
t6.prototype.toString=function(){return"heartbeat:"+this.trigger+":"+this.i};g.w(v6,g.rM);g.k=v6.prototype;g.k.xa=function(){z6(this);this.player.gf("heartbeat");g.rM.prototype.xa.call(this)};
g.k.onCueRangeEnter=function(){this.K=!0;x6(this,2E3)};
g.k.ex=function(a){this.heartbeatParams=a;x6(this,2E3)};
g.k.GR=function(a){var b;8===this.player.getPresentingPlayerType()||"UNPLAYABLE"===(null===(b=this.i)||void 0===b?void 0:b.status)&&!this.player.N("stop_heartbeat_on_unplayable_live_videos_killswitch")||(g.U(a.state,2)||g.U(a.state,64)?(z6(this),this.C&&(this.K=!0,x6(this,1E3))):(g.U(a.state,1)||g.U(a.state,8))&&x6(this,2E3))};
g.k.HR=function(){3!==this.player.getPresentingPlayerType()&&x6(this,2E3)};
g.k.getPlayerType=function(){if(8===this.player.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.aj=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.sA=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.Ev("heartbeatActionPlayerTransitioned",a)};
g.k.De=function(a){var b="LICENSE",c=xXa(a);if(c)return c.reason||g.VM[b]||"";(a=a.match(yXa))&&(a=Number(a[1]))&&(b=g.$va(a));return g.VM[b]||""};
g.k.Ew=function(){return!!this.offlineSlate&&this.offlineSlate.ub};
var yXa=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.qM("heartbeat",v6);})(_yt_player);
