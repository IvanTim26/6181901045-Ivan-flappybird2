System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SFX.ts"],(function(e){var t,i,n,s,a,o,r,l,p,h,u,c,d,b,f,S,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,r=e.Prefab,l=e.Label,p=e.input,h=e.Input,u=e.Collider2D,c=e.Contact2DType,d=e.instantiate,b=e.Vec3,f=e.randomRangeInt,S=e.Component},function(e){g=e.SFX}],execute:function(){var m,y,P,T,x,v,I,M,C,B,w,k,z;a._RF.push({},"9a783nime1JDKAcKUj95XbF","Background",void 0);var F=o.ccclass,D=o.property;e("Background",(m=F("Background"),y=D({type:r}),P=D({type:l}),T=D({type:l}),x=D({type:l}),v=D({type:r}),m((C=t((M=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,n(t,"prefabBase",C,s(t)),t.base=void 0,n(t,"labelScore",B,s(t)),t.score=void 0,t.currScore=0,n(t,"labelPlayTime",w,s(t)),t.playTime=0,t.playTimeTimer=0,n(t,"labelSpeedMult",k,s(t)),t.speedMult=0,n(t,"prefabPipa",z,s(t)),t.pipa=[],t.booleanStop=!1,t.isStarted=!1,t.isCollide=!1,t}i(t,e);var a=t.prototype;return a.start=function(){p.on(h.EventType.TOUCH_START,this.onInputReceived,this),this.node.parent.getChildByName("Bird").getComponent(u).on(c.BEGIN_CONTACT,this.onCollide,this),this.score=this.node.parent.getChildByName("Score"),this.score&&(this.score.active=!1),this.base=d(this.prefabBase),this.base.setParent(this.node.parent)},a.onCollide=function(){this.isCollide=!0},a.updateScore=function(e){this.currScore=e,this.labelScore.string=""+this.currScore},a.addScore=function(){this.updateScore(this.currScore+1)},a.checkPosition=function(e){return e<0},a.speedMulti=function(){var e=this.speedMult,t=""+this.formatSpeedMulti(e);this.speedMult&&(this.labelSpeedMult.string="speed: "+t)},a.formatSpeedMulti=function(e){return Math.floor(1e3*e).toFixed(0)},a.updatePlayTimeLabel=function(){this.playTime=Math.floor(this.playTimeTimer);var e=Math.floor(this.playTime/60),t=this.playTime%60,i=this.formatTimeComponent(e)+":"+this.formatTimeComponent(t);this.labelPlayTime&&(this.labelPlayTime.string=""+i)},a.formatTimeComponent=function(e){return e<10?"0"+e:""+e},a.onInputReceived=function(e){if(!this.isStarted){this.isStarted=!0;var t=d(this.prefabPipa);t.setParent(this.node.parent),t.setSiblingIndex(this.base.getSiblingIndex()-1),t.setSiblingIndex(this.score.getSiblingIndex()-1),t.setPosition(new b(288,-85,0)),this.pipa.push(t),(t=d(this.prefabPipa)).setParent(this.node.parent),t.setSiblingIndex(this.base.getSiblingIndex()-1),t.setSiblingIndex(this.score.getSiblingIndex()-1),t.setPosition(new b(418,-85,0)),this.pipa.push(t),(t=d(this.prefabPipa)).setParent(this.node.parent),t.setSiblingIndex(this.base.getSiblingIndex()-1),t.setSiblingIndex(this.score.getSiblingIndex()-1),t.setPosition(new b(548,-85,0)),this.pipa.push(t),this.base=d(this.prefabBase),this.base.setParent(this.node.parent)}this.score&&(this.score.active=!0)},a.update=function(e){var t=this;if(this.speedMult=e,this.isStarted){this.speedMult+=this.currScore/3e3,this.playTimeTimer+=e,this.updatePlayTimeLabel(),setTimeout((function(){t.speedMulti()}),1e3);var i=this.node.getPosition(),n=this.base.getPosition();n.x-=96*this.speedMult,i.x-=5*this.speedMult,n.x<=-300&&(n.x+=337),i.x<=-288&&(i.x+=288),this.base.setPosition(n),this.node.setPosition(i);for(var s=0;s<this.pipa.length;s++){var a=this.pipa[s].getPosition();a.x-=96*this.speedMult,this.checkPosition(a.x)&&!this.booleanStop&&(this.addScore(),this.booleanStop=!0,g.Instance.playSFX(2)),a.x<=-200&&(a.x+=288+f(100,300),a.y=f(-80,-30),this.booleanStop=!1),this.pipa[s].setPosition(a)}}},t}(S)).prototype,"prefabBase",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=t(M.prototype,"labelScore",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=t(M.prototype,"labelPlayTime",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(M.prototype,"labelSpeedMult",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=t(M.prototype,"prefabPipa",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=M))||I));a._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SFX.ts"],(function(t){var e,n,i,s,o,r,u,a,c;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t._decorator,s=t.input,o=t.Input,r=t.Collider2D,u=t.Contact2DType,a=t.Component},function(t){c=t.SFX}],execute:function(){var d;n._RF.push({},"a9e49MvgQhAtawqC5CjCWoX","Bird",void 0);var p=i.ccclass;t("Bird",p("Bird")(d=function(t){function n(){for(var e,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))||this).speedTurun=0,e.isStarted=!1,e.isCollide=!1,e}e(n,t);var i=n.prototype;return i.start=function(){s.on(o.EventType.TOUCH_START,this.onInputReceived,this),this.node.getComponent(r).on(u.BEGIN_CONTACT,this.onCollide,this)},i.onCollide=function(){this.isCollide=!0},i.onInputReceived=function(t){this.isStarted?this.isStarted&&(this.speedTurun=800):(this.isStarted=!0,this.speedTurun=800),c.Instance.playSFX(3),c.Instance.playSFX(4)},i.update=function(t){if(this.isStarted){var e=this.node.getPosition();this.isCollide||(e.y>100&&(c.Instance.playSFX(1),this.speedTurun=-1e3),this.speedTurun-=1900*t,e.y+=this.speedTurun*t,e.y<-170&&(e.y=-170,this.speedTurun=0)),this.node.setPosition(e)}},n}(a))||d);n._RF.pop()}}}));

System.register("chunks:///_virtual/Controller.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SFX.ts"],(function(e){var t,i,s,a,o,r,n,d,h,u,p;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,s=e._decorator,a=e.input,o=e.Input,r=e.Collider2D,n=e.Contact2DType,d=e.Node,h=e.director,u=e.Component},function(e){p=e.SFX}],execute:function(){var c;i._RF.push({},"bc311+ATQ9Fp4QSy35RALqk","Controller",void 0);var N=s.ccclass;e("Controller",N("Controller")(c=function(e){function i(){for(var t,i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))||this).isStarted=!1,t.restartNode=void 0,t.pauseNode=void 0,t.gameOver=void 0,t.readyNode=void 0,t.resumeNode=void 0,t}t(i,e);var s=i.prototype;return s.start=function(){a.on(o.EventType.TOUCH_START,this.onInputReceived,this),this.node.parent.getChildByName("Bird").getComponent(r).on(n.BEGIN_CONTACT,this.onCollide,this),this.readyNode=this.node.parent.getChildByName("Popup").getChildByName("Start"),this.restartNode=this.node.parent.getChildByName("Popup").getChildByName("Restart"),this.pauseNode=this.node.parent.getChildByName("Popup").getChildByName("Pause"),this.resumeNode=this.node.parent.getChildByName("Popup").getChildByName("Resume"),this.gameOver=this.node.parent.getChildByName("Popup").getChildByName("GameOver"),this.gameOver&&(this.gameOver.active=!1),this.restartNode&&(this.restartNode.active=!1,this.restartNode.on(d.EventType.TOUCH_END,this.restartGame,this)),this.pauseNode&&(this.pauseNode.active=!0,this.pauseNode.on(d.EventType.TOUCH_END,this.pauseGame,this)),this.resumeNode&&(this.resumeNode.active=!1,this.resumeNode.on(d.EventType.TOUCH_END,this.resumeGame,this))},s.restartGame=function(){this.restartNode&&(this.restartNode.active=!1,this.gameOver.active=!1,this.isStarted=!1,h.resume(),h.loadScene("scene"))},s.pauseGame=function(){this.pauseNode&&(p.Instance.playSFX(5),this.pauseNode.active=!0,this.resumeNode.active=!0,h.pause())},s.resumeGame=function(){this.resumeNode&&(p.Instance.playSFX(5),this.resumeNode.active=!1,h.resume())},s.onCollide=function(){setTimeout((function(){h.pause()}),300),this.isStarted?(this.gameOver.active=!0,this.pauseNode.active=!1):(this.isStarted=!0,this.gameOver&&(this.gameOver.active=!0,p.Instance.playSFX(0),p.Instance.playSFX(1)),this.restartNode&&(this.restartNode.active=!0))},s.onInputReceived=function(e){this.readyNode&&(this.readyNode.active=!1),(this.node.position.y<-350||this.node.position.y>350)&&(this.gameOver.active=!0)},i}(u))||c);i._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Background.ts","./Bird.ts","./Controller.ts","./SFX.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SFX.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,o,s,r,c,l,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,r=t._decorator,c=t.AudioClip,l=t.AudioSource,u=t.Component}],execute:function(){var a,p,h,y,S,f;s._RF.push({},"091bbpyBgtCsoIkqq34eQ46","SFX",void 0);var F=r.ccclass,X=r.property;t("SFX",(a=F("SFX"),p=X({type:[c]}),a(((f=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s))||this,n(e,"listSFX",S,o(e)),e.source=void 0,e}i(e,t);var s=e.prototype;return s.start=function(){e.Instance=this,this.source=this.getComponent(l),e.Instance.playBGS(6,!0)},s.playSFX=function(t){t<0||t>=this.listSFX.length||this.source.playOneShot(this.listSFX[t])},s.playBGS=function(t,e){void 0===e&&(e=!1),t<0||t>=this.listSFX.length||(this.source.stop(),this.source.clip=this.listSFX[t],this.source.loop=e,this.source.play())},s.update=function(t){},e}(u)).Instance=null,S=e((y=f).prototype,"listSFX",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),h=y))||h));s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});