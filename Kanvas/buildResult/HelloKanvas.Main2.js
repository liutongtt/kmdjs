﻿!function(){var t=!1,i=/xyz/.test(function(){})?/\b_super\b/:/.*/,n=function(){};n.extend=function(e){function n(){!t&&this.ctor&&this.ctor.apply(this,arguments)}var l,s,a,o=this.prototype;t=!0,l=new this,t=!1;for(a in e)"statics"!=a&&(l[a]="function"==typeof e[a]&&"function"==typeof o[a]&&i.test(e[a])?function(e,t){return function(){var n,i=this._super;return this._super=o[e],n=t.apply(this,arguments),this._super=i,n}}(a,e[a]):e[a]);for(s in this)this.hasOwnProperty(s)&&"extend"!=s&&(n[s]=this[s]);if(n.prototype=l,e.statics)for(a in e.statics)e.statics.hasOwnProperty(a)&&(n[a]=e.statics[a],"ctor"==a&&n[a]());return n.prototype.constructor=n,n.extend=arguments.callee,n.implement=function(e){for(var t in e)l[t]=e[t]},n},function(){var e={},t={};t.Main=n.extend({ctor:function(){var t=new e.Stage("#ourCanvas");t.scalable();var i=new e.Shape;i.beginPath(),i.moveTo(51,150),i.lineTo(701,150),i.lineTo(375,568),i.closePath(),i.fillStyle("#bcc2c4"),i.fill(),i.strokeStyle("#046ab4"),i.lineWidth(13),i.stroke(),i.beginPath(),i.moveTo(132,375),i.bezierCurveTo(288,277,480,284,619,377),i.lineTo(696,299),i.lineTo(644,185),i.lineTo(623,171),i.lineTo(631,156),i.lineTo(603,95),i.lineTo(528,68),i.lineTo(507,84),i.lineTo(504,92),i.bezierCurveTo(464,82,440,80,386,77),i.lineTo(372,92),i.lineTo(372,76),i.bezierCurveTo(315,79,289,83,248,93),i.lineTo(242,82),i.lineTo(207,66),i.lineTo(202,76),i.lineTo(201,75),i.lineTo(149,95),i.lineTo(56,299),i.closePath(),i.fillStyle("#046ab4"),i.fill(),i.beginPath(),i.moveTo(156,104),i.lineTo(188,91),i.lineTo(156,165),i.lineTo(192,137),i.lineTo(212,79),i.lineTo(235,90),i.lineTo(217,150),i.lineTo(185,181),i.lineTo(200,207),i.lineTo(183,264),i.lineTo(141,280),i.lineTo(166,211),i.lineTo(160,203),i.lineTo(136,226),i.lineTo(108,296),i.lineTo(83,310),i.lineTo(69,297),i.closePath(),i.fillStyle("#f4862c"),i.fill(),i.beginPath(),i.moveTo(244,105),i.lineTo(273,97),i.lineTo(283,140),i.lineTo(291,95),i.lineTo(316,91),i.lineTo(299,236),i.lineTo(266,241),i.lineTo(272,200),i.lineTo(261,145),i.lineTo(239,247),i.lineTo(203,257),i.closePath(),i.fillStyle("#f4862c"),i.fill(),i.beginPath(),i.moveTo(332,89),i.lineTo(359,87),i.lineTo(354,231),i.lineTo(319,233),i.closePath(),i.fillStyle("#f4862c"),i.fill(),i.beginPath(),i.moveTo(391,88),i.lineTo(426,90),i.lineTo(429,114),i.lineTo(403,114),i.lineTo(408,202),i.lineTo(439,204),i.lineTo(443,235),i.lineTo(392,232),i.lineTo(374,213),i.lineTo(374,103),i.closePath(),i.fillStyle("#f4862c"),i.fill(),i.beginPath(),i.moveTo(436,92),i.lineTo(461,95),i.lineTo(473,161),i.lineTo(491,138),i.lineTo(480,98),i.lineTo(508,104),i.lineTo(518,134),i.lineTo(505,161),i.lineTo(528,180),i.lineTo(550,258),i.lineTo(513,247),i.lineTo(501,195),i.lineTo(488,185),i.lineTo(480,196),i.lineTo(488,242),i.lineTo(455,237),i.closePath(),i.fillStyle("#f4862c"),i.fill(),i.beginPath(),i.moveTo(517,89),i.lineTo(530,80),i.lineTo(595,103),i.lineTo(616,147),i.lineTo(580,137),i.lineTo(572,114),i.lineTo(549,107),i.lineTo(561,142),i.lineTo(635,191),i.lineTo(683,296),i.lineTo(668,312),i.lineTo(572,266),i.lineTo(553,203),i.lineTo(588,214),i.lineTo(599,242),i.lineTo(627,254),i.lineTo(610,210),i.lineTo(539,159),i.closePath(),i.fillStyle("#f4862c"),i.fill(),i.beginPath(),i.moveTo(86,314),i.lineTo(110,300),i.lineTo(154,351),i.lineTo(135,362),i.closePath(),i.fillStyle("#bcc2c4"),i.fill(),i.beginPath(),i.moveTo(143,285),i.lineTo(182,269),i.lineTo(214,322),i.lineTo(180,338),i.closePath(),i.fill(),i.beginPath(),i.moveTo(204,262),i.lineTo(240,252),i.lineTo(260,304),i.lineTo(256,309),i.lineTo(229,317),i.closePath(),i.fill(),i.beginPath(),i.moveTo(265,246),i.lineTo(299,241),i.lineTo(304,265),i.lineTo(277,285),i.closePath(),i.fill(),i.beginPath(),i.moveTo(320,239),i.lineTo(355,236),i.lineTo(354,247),i.lineTo(323,256),i.closePath(),i.fill(),i.beginPath(),i.moveTo(374,221),i.lineTo(387,234),i.lineTo(387,245),i.lineTo(373,245),i.closePath(),i.fill(),i.beginPath(),i.moveTo(391,236),i.lineTo(442,240),i.lineTo(440,259),i.lineTo(391,245),i.closePath(),i.fill(),i.beginPath(),i.moveTo(453,241),i.lineTo(489,249),i.lineTo(478,285),i.lineTo(449,264),i.closePath(),i.fill(),i.beginPath(),i.moveTo(512,253),i.lineTo(550,264),i.lineTo(524,319),i.lineTo(500,311),i.lineTo(493,303),i.closePath(),i.fill(),i.beginPath(),i.moveTo(570,271),i.lineTo(664,315),i.lineTo(617,364),i.lineTo(540,324),i.closePath(),i.fill(),i.beginPath(),i.arc(377,391,140,0,2*Math.PI),i.closePath(),i.fillStyle("#f4862c"),i.fill(),i.strokeStyle("#046ab4"),i.lineWidth=11,i.stroke(),i.beginPath(),i.moveTo(298,506),i.bezierCurveTo(236,396,302,272,407,254),i.strokeStyle("#046ab4"),i.lineWidth=6,i.stroke(),i.beginPath(),i.moveTo(328,258),i.bezierCurveTo(360,294,451,272,503,332),i.strokeStyle("#046ab4"),i.lineWidth=6,i.stroke(),i.beginPath(),i.moveTo(282,288),i.bezierCurveTo(391,292,481,400,488,474),i.strokeStyle("#046ab4"),i.lineWidth=6,i.stroke(),i.beginPath(),i.moveTo(242,352),i.bezierCurveTo(352,244,319,423,409,527),i.strokeStyle("#046ab4"),i.lineWidth=6,i.stroke(),i.beginPath(),i.moveTo(264,42),i.lineTo(273,39),i.lineTo(277,46),i.lineTo(279,37),i.lineTo(289,35),i.lineTo(278,81),i.lineTo(268,83),i.lineTo(272,65),i.lineTo(273,63),i.lineTo(269,58),i.lineTo(261,85),i.lineTo(251,87),i.closePath(),i.fillStyle("#046ab4"),i.fill(),i.beginPath(),i.moveTo(297,32),i.lineTo(316,29),i.lineTo(315,37),i.lineTo(304,40),i.lineTo(303,49),i.lineTo(313,48),i.lineTo(312,56),i.lineTo(301,59),i.lineTo(300,68),i.lineTo(310,67),i.lineTo(309,76),i.lineTo(287,79),i.closePath(),i.fillStyle("#046ab4"),i.fill(),i.beginPath(),i.moveTo(322,28),i.lineTo(330,27),i.lineTo(326,64),i.lineTo(332,64),i.lineTo(337,26),i.lineTo(345,25),i.lineTo(341,62),i.lineTo(347,62),i.lineTo(350,25),i.lineTo(359,24),i.lineTo(356,67),i.lineTo(350,73),i.lineTo(340,73),i.lineTo(337,70),i.lineTo(331,74),i.lineTo(320,75),i.lineTo(316,71),i.closePath(),i.fillStyle("#046ab4"),i.fill(),i.beginPath(),i.moveTo(375,24),i.lineTo(383,24),i.lineTo(383,51),i.lineTo(388,51),i.lineTo(388,24),i.lineTo(396,24),i.lineTo(397,55),i.lineTo(391,60),i.lineTo(391,72),i.lineTo(382,72),i.lineTo(382,60),i.lineTo(374,53),i.closePath(),i.fillStyle("#046ab4"),i.fill(),i.beginPath(),i.moveTo(407,25),i.lineTo(420,26),i.lineTo(425,32),i.lineTo(430,68),i.lineTo(425,74),i.lineTo(410,73),i.lineTo(405,67),i.lineTo(403,30),i.closePath(),i.fillStyle("#046ab4"),i.fill(),i.beginPath(),i.moveTo(412,35),i.lineTo(417,35),i.lineTo(420,63),i.lineTo(414,63),i.closePath(),i.fillStyle("#ffffff"),i.fill(),i.beginPath(),i.moveTo(433,28),i.lineTo(451,31),i.lineTo(457,38),i.lineTo(461,56),i.lineTo(459,58),i.lineTo(463,63),i.lineTo(465,79),i.lineTo(455,78),i.lineTo(452,64),i.lineTo(447,62),i.lineTo(449,77),i.lineTo(439,76),i.closePath(),i.fillStyle("#046ab4"),i.fill(),i.beginPath(),i.moveTo(443,39),i.lineTo(449,40),i.lineTo(451,52),i.lineTo(444,51),i.closePath(),i.fillStyle("#ffffff"),i.fill(),i.beginPath(),i.moveTo(465,35),i.lineTo(473,36),i.lineTo(478,57),i.lineTo(483,58),i.lineTo(484,56),i.lineTo(480,39),i.lineTo(488,41),i.lineTo(493,58),i.lineTo(491,61),i.lineTo(495,66),i.lineTo(501,87),i.lineTo(491,84),i.lineTo(487,70),i.lineTo(481,68),i.lineTo(484,83),i.lineTo(474,81),i.closePath(),i.fillStyle("#046ab4"),i.fill(),i.x=100,i.y=-20,t.add(i),t.update()}}),e.DisplayObject=n.extend({ctor:function(){this.alpha=this.scaleX=this.scaleY=1,this.x=this.y=this.rotation=this.regX=this.regY=this.skewX=this.skewY=0,this.visible=!0,this._matrix=new e.Matrix2D,this.events={},this.id=e.UID.get()},isVisible:function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},updateContext:function(e){var t=this._matrix.identity().appendTransform(this.x,this.y,this.scaleX,this.scaleY,this.rotation,this.skewX,this.skewY,this.regX,this.regY);e.transform(t.a,t.b,t.c,t.d,t.tx,t.ty)},on:function(t,i){["mouseover","mousemove","mouseout","touchstart","touchmove","touchend"].join("_").match(t)&&(e.Stage.checkMove=!0),this.events[t]||(this.events[t]=[]),this.events[t].push(i)},execEvent:function(e){var t=this.events[e];this._fireFns(t)},hover:function(e,t){this.on("mouseover",e),this.on("mouseout",t)},_fireFns:function(e){if(e)for(var t=0,i=e.length;i>t;t++)e[t].call(this)},clone:function(){var t=new e.DisplayObject;return this.cloneProps(t),t},cloneProps:function(e){e.visible=this.visible,e.alpha=this.alpha,e.regX=this.regX,e.regY=this.regY,e.rotation=this.rotation,e.scaleX=this.scaleX,e.scaleY=this.scaleY,e.skewX=this.skewX,e.skewY=this.skewY,e.x=this.x,e.y=this.y}}),e.Container=e.DisplayObject.extend({ctor:function(){this._super(),this.children=[]},draw:function(e){for(var t=0,i=this.children.length;i>t;t++){var n=this.children[t];n.isVisible()&&(e.save(),n.updateContext(e),n.draw(e),e.restore())}},add:function(e){var t=arguments.length;if(t>1)for(var i=0;t>i;i++){var n=arguments[i];n&&this.children.push(n)}else e&&this.children.push(e)},_getHitChild:function(e,t,i){var n=this.children.length;e.clearRect(0,0,2,2);for(var o=n-1;o>=0;o--){var l=this.children[o];if(l.x-=t,l.y-=i,e.save(),l.updateContext(e),l.draw(e),e.restore(),l.x+=t,l.y+=i,e.getImageData(0,0,1,1).data[3]>1)return l}},clone:function(){var t=new e.Container;this.cloneProps(t);for(var i=t.children=[],n=this.children.length-1;n>-1;n--){var o=this.children[n].clone();i.unshift(o)}return t}}),e.Stage=e.Container.extend({statics:{checkMove:!1},ctor:function(e){this._super(),this.canvas="string"==typeof e?document.querySelector(e):e,this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.scale=1,this.scaleCanvasOffset={x:0,y:0},this.hitCanvas=document.createElement("canvas"),this.hitCanvas.width=1,this.hitCanvas.height=1,this.hitCtx=this.hitCanvas.getContext("2d"),Function.prototype.bind=function(){var e=this,t=Array.prototype.slice.call(arguments),i=t.shift();return function(){return e.apply(i,t.concat(Array.prototype.slice.call(arguments)))}},this.canvas.addEventListener("click",this._handleClick.bind(this),!1),this.canvas.addEventListener("mousemove",this._handleMouseMove.bind(this),!1),this.canvas.addEventListener("mousedown",this._handleMouseDown.bind(this),!1),this.canvas.addEventListener("mouseup",this._handleMouseUp.bind(this),!1),this.offset=this._getXY(this.canvas),this.overObj=null},update:function(){this.ctx.clearRect(0,0,this.width,this.height),this.draw(this.ctx)},_handleClick:function(e){var t=this._getHitChild(this.hitCtx,e.pageX-this.offset[0],e.pageY-this.offset[1]);t&&t.execEvent("click")},_handleMouseMove:function(t){if(e.Stage.checkMove){var i=this._getHitChild(this.hitCtx,t.pageX-this.offset[0],t.pageY-this.offset[1]);i?this.overObj?i.id!=this.overObj.id?(this.overObj.execEvent("mouseout"),i.execEvent("mouseover"),this.overObj=i):i.execEvent("mousemove"):(this.overObj=i,i.execEvent("mouseover")):this.overObj&&(this.overObj.execEvent("mouseout"),this.overObj=null)}},scalable:function(){var t=this;e.Wheel.Hamster(this.canvas).wheel(function(e,i,n,o){var l=e.pageX-t.offset[0],s=e.pageY-t.offset[1],a=t.width*t.scale,h=t.height*t.scale,r=(l-t.scaleCanvasOffset.x)/a,c=(s-t.scaleCanvasOffset.y)/h,T=t.scaleCanvasOffset.x,f=t.scaleCanvasOffset.y;if(0>o){if(t.scale-=.1,t.scale<.1)return void(t.scale=.1);t.scaleCanvasOffset.x+=.1*t.width*r,t.scaleCanvasOffset.y+=.1*t.height*c}else t.scale+=.1,t.scaleCanvasOffset.x-=.1*t.width*r,t.scaleCanvasOffset.y-=.1*t.height*c;t.redraw(t.scaleCanvasOffset.x,t.scaleCanvasOffset.y,0>o?!0:!1,T,f),e.preventDefault()})},redraw:function(e,t,i,n,o){for(var l=i?this.scale+.1:this.scale-.1,s=0,a=this.children.length;a>s;s++){var h=this.children[s];h.x=this.scale*(h.x-n)/l+e,h.y=this.scale*(h.y-o)/l+t,h.scaleX=this.scale*h.scaleX/l,h.scaleY=this.scale*h.scaleY/l}this.update()},_handleMouseDown:function(e){var t=this._getHitChild(this.hitCtx,e.pageX-this.offset[0],e.pageY-this.offset[1]);t&&t.execEvent("mousedown")},_handleMouseUp:function(e){var t=this._getHitChild(this.hitCtx,e.pageX-this.offset[0],e.pageY-this.offset[1]);t&&t.execEvent("mouseup")},_getXY:function(e){var t=0,i=0;if(e)if(document.documentElement.getBoundingClientRect&&e.getBoundingClientRect){var n={left:0,top:0,right:0,bottom:0};try{n=e.getBoundingClientRect(),i=n.left,t=n.top}catch(o){return alert(1),[0,0]}}else for(;e.offsetParent;)t+=e.offsetTop,i+=e.offsetLeft,e=e.offsetParent;return[i+Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),t+Math.max(document.documentElement.scrollTop,document.body.scrollTop)]}}),e.Shape=e.DisplayObject.extend({ctor:function(){this._super(),this.cmds=[],this.assMethod=["fillStyle","strokeStyle","lineWidth"]},draw:function(e){for(var t=0,i=this.cmds.length;i>t;t++){var n=this.cmds[t];this.assMethod.join("-").match(new RegExp("\\b"+n[0]+"\\b","g"))?e[n[0]]=n[1][0]:e[n[0]].apply(e,Array.prototype.slice.call(n[1]))}},beginPath:function(){return this.cmds.push(["beginPath",arguments]),this},arc:function(){return this.cmds.push(["arc",arguments]),this},closePath:function(){return this.cmds.push(["closePath",arguments]),this},fillStyle:function(){return this.cmds.push(["fillStyle",arguments]),this},fill:function(){return this.cmds.push(["fill",arguments]),this},strokeStyle:function(){return this.cmds.push(["strokeStyle",arguments]),this},lineWidth:function(){return this.cmds.push(["lineWidth",arguments]),this},stroke:function(){return this.cmds.push(["stroke",arguments]),this},moveTo:function(){return this.cmds.push(["moveTo",arguments]),this},lineTo:function(){return this.cmds.push(["lineTo",arguments]),this},bezierCurveTo:function(){return this.cmds.push(["bezierCurveTo",arguments]),this},clone:function(){}}),e.Wheel=n.extend({statics:{ctor:function(){var e=function(t){return new e.Instance(t)};e.SUPPORT="wheel",e.ADD_EVENT="addEventListener",e.REMOVE_EVENT="removeEventListener",e.PREFIX="",e.READY=!1,e.Instance=function(t){return e.READY||(e.normalise.browser(),e.READY=!0),this.element=t,this.handlers=[],this},e.Instance.prototype={wheel:function(t,i){return e.event.add(this,e.SUPPORT,t,i),"DOMMouseScroll"===e.SUPPORT&&e.event.add(this,"MozMousePixelScroll",t,i),this},unwheel:function(t,i){return void 0===t&&(t=this.handlers.slice(-1)[0])&&(t=t.original),e.event.remove(this,e.SUPPORT,t,i),"DOMMouseScroll"===e.SUPPORT&&e.event.remove(this,"MozMousePixelScroll",t,i),this}},e.event={add:function(t,i,n,o){var l=n;n=function(t){t||(t=window.event);var i=e.normalise.event(t),n=e.normalise.delta(t);return i.pageX=t.pageX,i.pageY=t.pageY,l(i,n[0],n[1],n[2])},t.element[e.ADD_EVENT](e.PREFIX+i,n,o||!1),t.handlers.push({original:l,normalised:n})},remove:function(t,i,n,o){for(var a,l=n,s={},h=0,r=t.handlers.length;r>h;++h)s[t.handlers[h].original]=t.handlers[h];a=s[l],n=a.normalised,t.element[e.REMOVE_EVENT](e.PREFIX+i,n,o||!1);for(var c in t.handlers)if(t.handlers[c]==a){t.handlers.splice(c,1);break}}};var t,i;e.normalise={browser:function(){"onwheel"in document||document.documentMode>=9||(e.SUPPORT=void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"),window.addEventListener||(e.ADD_EVENT="attachEvent",e.REMOVE_EVENT="detachEvent",e.PREFIX="on")},event:function(t){var i="wheel"===e.SUPPORT?t:{originalEvent:t,target:t.target||t.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"===t.type?0:1,deltaX:0,delatZ:0,preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1},stopPropagation:function(){t.stopPropagation?t.stopPropagation():t.cancelBubble=!1}};return t.wheelDelta&&(i.deltaY=-1/40*t.wheelDelta),t.wheelDeltaX&&(i.deltaX=-1/40*t.wheelDeltaX),t.detail&&(i.deltaY=t.detail),i},delta:function(e){var h,n=0,o=0,l=0,s=0,a=0;return e.deltaY&&(l=-1*e.deltaY,n=l),e.deltaX&&(o=e.deltaX,n=-1*o),e.wheelDelta&&(n=e.wheelDelta),e.wheelDeltaY&&(l=e.wheelDeltaY),e.wheelDeltaX&&(o=-1*e.wheelDeltaX),e.detail&&(n=-1*e.detail),s=Math.abs(n),(!t||t>s)&&(t=s),a=Math.max(Math.abs(l),Math.abs(o)),(!i||i>a)&&(i=a),h=n>0?"floor":"ceil",n=Math[h](n/t),o=Math[h](o/i),l=Math[h](l/i),[n,o,l]}},this.Hamster=e}}}),e.UID=n.extend({statics:{_nextID:0,get:function(){return this._nextID++}}}),e.Matrix2D=n.extend({statics:{DEG_TO_RAD:.017453292519943295},ctor:function(e,t,i,n,o,l){return this.a=null==e?1:e,this.b=t||0,this.c=i||0,this.d=null==n?1:n,this.tx=o||0,this.ty=l||0,this},identity:function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},appendTransform:function(t,i,n,o,l,s,a,h,r){if(l%360)var c=l*e.Matrix2D.DEG_TO_RAD,T=Math.cos(c),f=Math.sin(c);else T=1,f=0;return s||a?(s*=e.Matrix2D.DEG_TO_RAD,a*=e.Matrix2D.DEG_TO_RAD,this.append(Math.cos(a),Math.sin(a),-Math.sin(s),Math.cos(s),t,i),this.append(T*n,f*n,-f*o,T*o,0,0)):this.append(T*n,f*n,-f*o,T*o,t,i),(h||r)&&(this.tx-=h*this.a+r*this.c,this.ty-=h*this.b+r*this.d),this},append:function(e,t,i,n,o,l){var s=this.a,a=this.b,h=this.c,r=this.d;return this.a=e*s+t*h,this.b=e*a+t*r,this.c=i*s+n*h,this.d=i*a+n*r,this.tx=o*s+l*h+this.tx,this.ty=o*a+l*r+this.ty,this}}),new t.Main}()}(this);