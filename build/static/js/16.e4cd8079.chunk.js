/*! For license information please see 16.e4cd8079.chunk.js.LICENSE.txt */
(this.webpackJsonppinduoduo=this.webpackJsonppinduoduo||[]).push([[16],{101:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return a}));var o=n(115);function a(t){return function(){var e,n=r(t);if(i()){var a=r(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(o.a)(this,e)}}},102:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return i}))},103:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(104);function i(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},104:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},108:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},111:function(t,e,n){"use strict";n(87),n(118)},112:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(79)),i=u(n(80)),o=u(n(81)),a=u(n(82)),s=u(n(77)),l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function u(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(){return(0,r.default)(this,e),(0,o.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,a.default)(e,t),(0,i.default)(e,[{key:"render",value:function(){var t=this.props,e=t.prefixCls,n=t.size,r=t.className,i=t.style,o=t.onClick,a=(0,s.default)(e,e+"-"+n,r);return l.createElement("div",{className:a,style:i,onClick:o})}}]),e}(l.Component);e.default=c,c.defaultProps={prefixCls:"am-whitespace",size:"md"},t.exports=e.default},115:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var i=n(108);function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(i.a)(t):e}},118:function(t,e,n){},138:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(223),o=(r=i)&&r.__esModule?r:{default:r};e.default=function(t,e,n){return e in t?(0,o.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},161:function(t,e,n){(function(e){for(var r=n(162),i="undefined"===typeof window?e:window,o=["moz","webkit"],a="AnimationFrame",s=i["request"+a],l=i["cancel"+a]||i["cancelRequest"+a],u=0;!s&&u<o.length;u++)s=i[o[u]+"Request"+a],l=i[o[u]+"Cancel"+a]||i[o[u]+"CancelRequest"+a];if(!s||!l){var c=0,d=0,p=[];s=function(t){if(0===p.length){var e=r(),n=Math.max(0,1e3/60-(e-c));c=n+e,setTimeout((function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(c)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return p.push({handle:++d,callback:t,cancelled:!1}),d},l=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return s.call(i,t)},t.exports.cancel=function(){l.apply(i,arguments)},t.exports.polyfill=function(t){t||(t=i),t.requestAnimationFrame=s,t.cancelAnimationFrame=l}}).call(this,n(18))},162:function(t,e,n){(function(e){(function(){var n,r,i,o,a,s;"undefined"!==typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!==typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-a)/1e6},r=e.hrtime,o=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),s=1e9*e.uptime(),a=o-s):Date.now?(t.exports=function(){return Date.now()-i},i=Date.now()):(t.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,n(40))},220:function(t,e,n){"use strict";n(87),n(472)},221:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=d(n(78)),i=d(n(138)),o=d(n(79)),a=d(n(80)),s=d(n(81)),l=d(n(82)),u=d(n(77)),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function d(t){return t&&t.__esModule?t:{default:t}}var p=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n},f=function(t){function e(){return(0,o.default)(this,e),(0,s.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,l.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){var t,e,n=this.props,o=n.className,a=n.prefixCls,s=n.children,l=n.text,d=n.size,f=n.overflowCount,h=n.dot,v=n.corner,g=n.hot,y=p(n,["className","prefixCls","children","text","size","overflowCount","dot","corner","hot"]);f=f,l="number"===typeof l&&l>f?f+"+":l,h&&(l="");var m=(0,u.default)((t={},(0,i.default)(t,a+"-dot",h),(0,i.default)(t,a+"-dot-large",h&&"large"===d),(0,i.default)(t,a+"-text",!h&&!v),(0,i.default)(t,a+"-corner",v),(0,i.default)(t,a+"-corner-large",v&&"large"===d),t)),S=(0,u.default)(a,o,(e={},(0,i.default)(e,a+"-not-a-wrapper",!s),(0,i.default)(e,a+"-corner-wrapper",v),(0,i.default)(e,a+"-hot",!!g),(0,i.default)(e,a+"-corner-wrapper-large",v&&"large"===d),e));return c.createElement("span",{className:S},s,(l||h)&&c.createElement("sup",(0,r.default)({className:m},y),l))}}]),e}(c.Component);e.default=f,f.defaultProps={prefixCls:"am-badge",size:"small",overflowCount:99,dot:!1,corner:!1},t.exports=e.default},222:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(78),i=n.n(r),o=n(79),a=n.n(o),s=n(80),l=n.n(s),u=n(81),c=n.n(u),d=n(82),p=n.n(d),f=n(0),h=n.n(f),v=n(77),g=n.n(v),y=function(t){function e(){a()(this,e);var t=c()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.state={active:!1},t.onTouchStart=function(e){t.triggerEvent("TouchStart",!0,e)},t.onTouchMove=function(e){t.triggerEvent("TouchMove",!1,e)},t.onTouchEnd=function(e){t.triggerEvent("TouchEnd",!1,e)},t.onTouchCancel=function(e){t.triggerEvent("TouchCancel",!1,e)},t.onMouseDown=function(e){t.triggerEvent("MouseDown",!0,e)},t.onMouseUp=function(e){t.triggerEvent("MouseUp",!1,e)},t.onMouseLeave=function(e){t.triggerEvent("MouseLeave",!1,e)},t}return p()(e,t),l()(e,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(t,e,n){var r="on"+t,i=this.props.children;i.props[r]&&i.props[r](n),e!==this.state.active&&this.setState({active:e})}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.disabled,r=t.activeClassName,o=t.activeStyle,a=n?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},s=h.a.Children.only(e);if(!n&&this.state.active){var l=s.props,u=l.style,c=l.className;return!1!==o&&(o&&(u=i()({},u,o)),c=g()(c,r)),h.a.cloneElement(s,i()({className:c,style:u},a))}return h.a.cloneElement(s,a)}}]),e}(h.a.Component),m=y;y.defaultProps={disabled:!1}},472:function(t,e,n){},473:function(t,e,n){"use strict";n(87),n(682),n(684),n(686)},474:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=h(n(138)),i=h(n(78)),o=h(n(79)),a=h(n(80)),s=h(n(81)),l=h(n(82)),u=h(n(77)),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),d=h(n(222)),p=h(n(687)),f=h(n(689));function h(t){return t&&t.__esModule?t:{default:t}}var v=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n},g=function(t){function e(){(0,o.default)(this,e);var t=(0,s.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.state={initialSlideWidth:0},t.renderCarousel=function(e,n,r){for(var i=t.props.prefixCls,o=t.props.carouselMaxRow,a=[],s=0;s<n;s++){for(var l=[],u=0;u<o;u++){var d=s*o+u;d<r?l.push(e[d]):l.push(c.createElement("div",{key:"gridline-"+d}))}a.push(c.createElement("div",{key:"pageitem-"+s,className:i+"-carousel-page"},l))}return a},t.renderItem=function(e,n,r,i){var o=t.props.prefixCls,a=null;if(i)a=i(e,n);else if(e){var s=e.icon,l=e.text;a=c.createElement("div",{className:o+"-item-inner-content column-num-"+r},c.isValidElement(s)?s:c.createElement("img",{className:o+"-icon",src:s}),c.createElement("div",{className:o+"-text"},l))}return c.createElement("div",{className:o+"-item-content"},a)},t.getRows=function(e,n){for(var r=t.props,o=r.columnNum,a=r.data,s=r.renderItem,l=r.prefixCls,u=r.onClick,p=r.activeStyle,h=r.activeClassName,v=r.itemStyle,g=[],y=100/(o=o)+"%",m=(0,i.default)({width:y},v),S=0;S<e;S++){for(var b=[],w=function(e){var r=S*o+e,i=void 0;if(r<n){var v=a&&a[r];i=c.createElement(d.default,{key:"griditem-"+r,activeClassName:h||l+"-item-active",activeStyle:p},c.createElement(f.default.Item,{className:l+"-item",onClick:function(){return u&&u(v,r)},style:m},t.renderItem(v,r,o,s)))}else i=c.createElement(f.default.Item,{key:"griditem-"+r,className:l+"-item "+l+"-null-item",style:m});b.push(i)},O=0;O<o;O++)w(O);g.push(c.createElement(f.default,{justify:"center",align:"stretch",key:"gridline-"+S},b))}return g},t}return(0,l.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){this.setState({initialSlideWidth:document.documentElement.clientWidth})}},{key:"render",value:function(){var t,e=this.props,n=e.prefixCls,o=e.className,a=e.data,s=e.hasLine,l=e.isCarousel,d=e.square,f=(e.activeStyle,e.activeClassName,v(e,["prefixCls","className","data","hasLine","isCarousel","square","activeStyle","activeClassName"])),h=f.columnNum,g=f.carouselMaxRow,y=(f.onClick,f.renderItem,v(f,["columnNum","carouselMaxRow","onClick","renderItem"])),m=this.state.initialSlideWidth;h=h,g=g;var S=a&&a.length||0,b=Math.ceil(S/h),w=void 0,O=void 0;if(l){if(m<0)return null;b%g!==0&&(b=b+g-b%g);var T=Math.ceil(b/g);w=this.getRows(b,S);var C={};T<=1&&(C={dots:!1,dragging:!1,swiping:!1}),O=c.createElement(p.default,(0,i.default)({initialSlideWidth:m},y,C),this.renderCarousel(w,T,b))}else O=w=this.getRows(b,S);var x=(0,u.default)(n,o,(t={},(0,r.default)(t,n+"-square",d),(0,r.default)(t,n+"-line",s),(0,r.default)(t,n+"-carousel",l),t));return c.createElement("div",{className:x},O)}}]),e}(c.Component);e.default=g,g.defaultProps={data:[],hasLine:!0,isCarousel:!1,columnNum:4,carouselMaxRow:2,prefixCls:"am-grid",square:!0,itemStyle:{}},t.exports=e.default},682:function(t,e,n){"use strict";n(87),n(683)},683:function(t,e,n){},684:function(t,e,n){"use strict";n(87),n(685)},685:function(t,e,n){},686:function(t,e,n){},687:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=p(n(138)),i=p(n(78)),o=p(n(79)),a=p(n(80)),s=p(n(81)),l=p(n(82)),u=p(n(77)),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),d=p(n(731));function p(t){return t&&t.__esModule?t:{default:t}}var f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n},h=function(t){function e(t){(0,o.default)(this,e);var n=(0,s.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.onChange=function(t){n.setState({selectedIndex:t},(function(){n.props.afterChange&&n.props.afterChange(t)}))},n.state={selectedIndex:n.props.selectedIndex},n}return(0,l.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){var t=this.props,e=t.infinite,n=t.selectedIndex,o=t.beforeChange,a=(t.afterChange,t.dots),s=f(t,["infinite","selectedIndex","beforeChange","afterChange","dots"]),l=s.prefixCls,p=s.dotActiveStyle,h=s.dotStyle,v=s.className,g=s.vertical,y=(0,i.default)({},s,{wrapAround:e,slideIndex:n,beforeSlide:o}),m=[];a&&(m=[{component:function(t){for(var e=t.slideCount,n=t.slidesToScroll,i=t.currentSlide,o=[],a=0;a<e;a+=n)o.push(a);var s=o.map((function(t){var e=(0,u.default)(l+"-wrap-dot",(0,r.default)({},l+"-wrap-dot-active",t===i)),n=t===i?p:h;return c.createElement("div",{className:e,key:t},c.createElement("span",{style:n}))}));return c.createElement("div",{className:l+"-wrap"},s)},position:"BottomCenter"}]);var S=(0,u.default)(l,v,(0,r.default)({},l+"-vertical",g));return c.createElement(d.default,(0,i.default)({},y,{className:S,decorators:m,afterSlide:this.onChange}))}}]),e}(c.Component);e.default=h,h.defaultProps={prefixCls:"am-carousel",dots:!0,arrows:!1,autoplay:!1,infinite:!1,cellAlign:"center",selectedIndex:0,dotStyle:{},dotActiveStyle:{}},t.exports=e.default},688:function(t,e,n){var r;!function(){"use strict";var i=!("undefined"===typeof window||!window.document||!window.document.createElement),o={canUseDOM:i,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:i&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:i&&!!window.screen};void 0===(r=function(){return o}.call(e,n,e,t))||(t.exports=r)}()},689:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(690)),i=o(n(691));function o(t){return t&&t.__esModule?t:{default:t}}r.default.Item=i.default,e.default=r.default,t.exports=e.default},690:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=d(n(78)),i=d(n(138)),o=d(n(79)),a=d(n(80)),s=d(n(81)),l=d(n(82)),u=d(n(77)),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function d(t){return t&&t.__esModule?t:{default:t}}var p=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n},f=function(t){function e(){return(0,o.default)(this,e),(0,s.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,l.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){var t,e=this.props,n=e.direction,o=e.wrap,a=e.justify,s=e.align,l=e.alignContent,d=e.className,f=e.children,h=e.prefixCls,v=e.style,g=p(e,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),y=(0,u.default)(h,d,(t={},(0,i.default)(t,h+"-dir-row","row"===n),(0,i.default)(t,h+"-dir-row-reverse","row-reverse"===n),(0,i.default)(t,h+"-dir-column","column"===n),(0,i.default)(t,h+"-dir-column-reverse","column-reverse"===n),(0,i.default)(t,h+"-nowrap","nowrap"===o),(0,i.default)(t,h+"-wrap","wrap"===o),(0,i.default)(t,h+"-wrap-reverse","wrap-reverse"===o),(0,i.default)(t,h+"-justify-start","start"===a),(0,i.default)(t,h+"-justify-end","end"===a),(0,i.default)(t,h+"-justify-center","center"===a),(0,i.default)(t,h+"-justify-between","between"===a),(0,i.default)(t,h+"-justify-around","around"===a),(0,i.default)(t,h+"-align-start","start"===s),(0,i.default)(t,h+"-align-center","center"===s),(0,i.default)(t,h+"-align-end","end"===s),(0,i.default)(t,h+"-align-baseline","baseline"===s),(0,i.default)(t,h+"-align-stretch","stretch"===s),(0,i.default)(t,h+"-align-content-start","start"===l),(0,i.default)(t,h+"-align-content-end","end"===l),(0,i.default)(t,h+"-align-content-center","center"===l),(0,i.default)(t,h+"-align-content-between","between"===l),(0,i.default)(t,h+"-align-content-around","around"===l),(0,i.default)(t,h+"-align-content-stretch","stretch"===l),t));return c.createElement("div",(0,r.default)({className:y,style:v},g),f)}}]),e}(c.Component);e.default=f,f.defaultProps={prefixCls:"am-flexbox",align:"center"},t.exports=e.default},691:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=c(n(78)),i=c(n(79)),o=c(n(80)),a=c(n(81)),s=c(n(82)),l=c(n(77)),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function c(t){return t&&t.__esModule?t:{default:t}}var d=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n},p=function(t){function e(){return(0,i.default)(this,e),(0,a.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,s.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.className,i=t.prefixCls,o=t.style,a=d(t,["children","className","prefixCls","style"]),s=(0,l.default)(i+"-item",n);return u.createElement("div",(0,r.default)({className:s,style:o},a),e)}}]),e}(u.Component);e.default=p,p.defaultProps={prefixCls:"am-flexbox"},t.exports=e.default},731:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var r=n(78),i=n.n(r),o=n(79),a=n.n(o),s=n(80),l=n.n(s),u=n(81),c=n.n(u),d=n(82),p=n.n(d),f=n(0),h=n.n(f),v=[{component:function(t){function e(){a()(this,e);var t=c()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.previousSlide()},t}return p()(e,t),l()(e,[{key:"render",value:function(){return h.a.createElement("button",{style:this.getButtonStyles(0===this.props.currentSlide&&!this.props.wrapAround),onClick:this.handleClick},"PREV")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(h.a.Component),position:"CenterLeft"},{component:function(t){function e(){a()(this,e);var t=c()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.nextSlide&&t.props.nextSlide()},t}return p()(e,t),l()(e,[{key:"render",value:function(){return h.a.createElement("button",{style:this.getButtonStyles(this.props.currentSlide+this.props.slidesToScroll>=this.props.slideCount&&!this.props.wrapAround),onClick:this.handleClick},"NEXT")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(h.a.Component),position:"CenterRight"},{component:function(t){function e(){return a()(this,e),c()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p()(e,t),l()(e,[{key:"render",value:function(){var t=this,e=this.getIndexes(this.props.slideCount,this.props.slidesToScroll);return h.a.createElement("ul",{style:this.getListStyles()},e.map((function(e){return h.a.createElement("li",{style:t.getListItemStyles(),key:e},h.a.createElement("button",{style:t.getButtonStyles(t.props.currentSlide===e),onClick:t.props.goToSlide&&t.props.goToSlide.bind(null,e)},"\u2022"))})))}},{key:"getIndexes",value:function(t,e){for(var n=[],r=0;r<t;r+=e)n.push(r);return n}},{key:"getListStyles",value:function(){return{position:"relative",margin:0,top:-10,padding:0}}},{key:"getListItemStyles",value:function(){return{listStyleType:"none",display:"inline-block"}}},{key:"getButtonStyles",value:function(t){return{border:0,background:"transparent",color:"black",cursor:"pointer",padding:10,outline:0,fontSize:24,opacity:t?1:.5}}}]),e}(h.a.Component),position:"BottomCenter"}],g=n(688),y=n.n(g),m=n(161),S=n.n(m);var b={ADDITIVE:"ADDITIVE",DESTRUCTIVE:"DESTRUCTIVE"},w=function(t,e,n){null!==t&&"undefined"!==typeof t&&(t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n)},O=function(t,e,n){null!==t&&"undefined"!==typeof t&&(t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null)},T=function(t){function e(t){a()(this,e);var n=c()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n._rafCb=function(){var t=n.state;if(0!==t.tweenQueue.length){for(var e=Date.now(),r=[],i=0;i<t.tweenQueue.length;i++){var o=t.tweenQueue[i],a=o.initTime,s=o.config;e-a<s.duration?r.push(o):s.onEnd&&s.onEnd()}-1!==n._rafID&&(n.setState({tweenQueue:r}),n._rafID=S()(n._rafCb))}},n.handleClick=function(t){!0===n.clickSafe&&(t.preventDefault(),t.stopPropagation(),t.nativeEvent&&t.nativeEvent.stopPropagation())},n.autoplayIterator=function(){if(n.props.wrapAround)return n.nextSlide();n.state.currentSlide!==n.state.slideCount-n.state.slidesToShow?n.nextSlide():n.stopAutoplay()},n.goToSlide=function(t){var e=n.props,r=e.beforeSlide,i=e.afterSlide;if(t>=h.a.Children.count(n.props.children)||t<0){if(!n.props.wrapAround)return;if(t>=h.a.Children.count(n.props.children))return r(n.state.currentSlide,0),n.setState({currentSlide:0},(function(){n.animateSlide(null,null,n.getTargetLeft(null,t),(function(){n.animateSlide(null,.01),i(0),n.resetAutoplay(),n.setExternalData()}))}));var o=h.a.Children.count(n.props.children)-n.state.slidesToScroll;return r(n.state.currentSlide,o),n.setState({currentSlide:o},(function(){n.animateSlide(null,null,n.getTargetLeft(null,t),(function(){n.animateSlide(null,.01),i(o),n.resetAutoplay(),n.setExternalData()}))}))}r(n.state.currentSlide,t),n.setState({currentSlide:t},(function(){n.animateSlide(),n.props.afterSlide(t),n.resetAutoplay(),n.setExternalData()}))},n.nextSlide=function(){var t=h.a.Children.count(n.props.children),e=n.props.slidesToShow;if("auto"===n.props.slidesToScroll&&(e=n.state.slidesToScroll),!(n.state.currentSlide>=t-e)||n.props.wrapAround)if(n.props.wrapAround)n.goToSlide(n.state.currentSlide+n.state.slidesToScroll);else{if(1!==n.props.slideWidth)return n.goToSlide(n.state.currentSlide+n.state.slidesToScroll);n.goToSlide(Math.min(n.state.currentSlide+n.state.slidesToScroll,t-e))}},n.previousSlide=function(){n.state.currentSlide<=0&&!n.props.wrapAround||(n.props.wrapAround?n.goToSlide(n.state.currentSlide-n.state.slidesToScroll):n.goToSlide(Math.max(0,n.state.currentSlide-n.state.slidesToScroll)))},n.onResize=function(){n.setDimensions()},n.onReadyStateChange=function(){n.setDimensions()},n.state={currentSlide:n.props.slideIndex,dragging:!1,frameWidth:0,left:0,slideCount:0,slidesToScroll:n.props.slidesToScroll,slideWidth:0,top:0,tweenQueue:[]},n.touchObject={},n.clickSafe=!0,n}return p()(e,t),l()(e,[{key:"componentWillMount",value:function(){this.setInitialDimensions()}},{key:"componentDidMount",value:function(){this.setDimensions(),this.bindEvents(),this.setExternalData(),this.props.autoplay&&this.startAutoplay()}},{key:"componentWillReceiveProps",value:function(t){this.setState({slideCount:t.children.length}),this.setDimensions(t),this.props.slideIndex!==t.slideIndex&&t.slideIndex!==this.state.currentSlide&&this.goToSlide(t.slideIndex),this.props.autoplay!==t.autoplay&&(t.autoplay?this.startAutoplay():this.stopAutoplay())}},{key:"componentWillUnmount",value:function(){this.unbindEvents(),this.stopAutoplay(),S.a.cancel(this._rafID),this._rafID=-1}},{key:"tweenState",value:function(t,e){var n=this,r=e.easing,i=e.duration,o=e.delay,a=e.beginValue,s=e.endValue,l=e.onEnd,u=e.stackBehavior;this.setState((function(e){var c=e,d=void 0,p=void 0;if("string"===typeof t)d=t,p=t;else{for(var f=0;f<t.length-1;f++)c=c[t[f]];d=t[t.length-1],p=t.join("|")}var h={easing:r,duration:null==i?300:i,delay:null==o?0:o,beginValue:null==a?c[d]:a,endValue:s,onEnd:l,stackBehavior:u||"ADDITIVE"},v=e.tweenQueue;return h.stackBehavior===b.DESTRUCTIVE&&(v=e.tweenQueue.filter((function(t){return t.pathHash!==p}))),v.push({pathHash:p,config:h,initTime:Date.now()+h.delay}),c[d]=h.endValue,1===v.length&&(n._rafID=S()(n._rafCb)),{tweenQueue:v}}))}},{key:"getTweeningValue",value:function(t){var e=this.state,n=void 0,r=void 0;if("string"===typeof t)n=e[t],r=t;else{n=e;for(var i=0;i<t.length;i++)n=n[t[i]];r=t.join("|")}for(var o=Date.now(),a=0;a<e.tweenQueue.length;a++){var s=e.tweenQueue[a],l=s.pathHash,u=s.initTime,c=s.config;if(l===r){var d=o-u>c.duration?c.duration:Math.max(0,o-u);n+=(0===c.duration?c.endValue:c.easing(d,c.beginValue,c.endValue,c.duration))-c.endValue}}return n}},{key:"render",value:function(){var t=this,e=h.a.Children.count(this.props.children)>1?this.formatChildren(this.props.children):this.props.children;return h.a.createElement("div",{className:["slider",this.props.className||""].join(" "),ref:"slider",style:i()({},this.getSliderStyles(),this.props.style)},h.a.createElement("div",i()({className:"slider-frame",ref:"frame",style:this.getFrameStyles()},this.getTouchEvents(),this.getMouseEvents(),{onClick:this.handleClick}),h.a.createElement("ul",{className:"slider-list",ref:"list",style:this.getListStyles()},e)),this.props.decorators?this.props.decorators.map((function(e,n){return h.a.createElement("div",{style:i()({},t.getDecoratorStyles(e.position),e.style||{}),className:"slider-decorator-"+n,key:n},h.a.createElement(e.component,{currentSlide:t.state.currentSlide,slideCount:t.state.slideCount,frameWidth:t.state.frameWidth,slideWidth:t.state.slideWidth,slidesToScroll:t.state.slidesToScroll,cellSpacing:t.props.cellSpacing,slidesToShow:t.props.slidesToShow,wrapAround:t.props.wrapAround,nextSlide:t.nextSlide,previousSlide:t.previousSlide,goToSlide:t.goToSlide}))})):null,h.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:this.getStyleTagStyles()}}))}},{key:"getTouchEvents",value:function(){var t=this;return!1===this.props.swiping?null:{onTouchStart:function(e){t.touchObject={startX:e.touches[0].pageX,startY:e.touches[0].pageY},t.handleMouseOver()},onTouchMove:function(e){var n=t.swipeDirection(t.touchObject.startX,e.touches[0].pageX,t.touchObject.startY,e.touches[0].pageY);0!==n&&e.preventDefault();var r=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.touches[0].pageY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.touches[0].pageX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.touches[0].pageX,endY:e.touches[0].pageY,length:r,direction:n},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})},onTouchEnd:function(e){t.handleSwipe(e),t.handleMouseOut()},onTouchCancel:function(e){t.handleSwipe(e)}}}},{key:"getMouseEvents",value:function(){var t=this;return!1===this.props.dragging?null:{onMouseOver:function(){t.handleMouseOver()},onMouseOut:function(){t.handleMouseOut()},onMouseDown:function(e){t.touchObject={startX:e.clientX,startY:e.clientY},t.setState({dragging:!0})},onMouseMove:function(e){if(t.state.dragging){var n=t.swipeDirection(t.touchObject.startX,e.clientX,t.touchObject.startY,e.clientY);0!==n&&e.preventDefault();var r=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.clientY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.clientX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.clientX,endY:e.clientY,length:r,direction:n},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})}},onMouseUp:function(e){t.state.dragging&&t.handleSwipe(e)},onMouseLeave:function(e){t.state.dragging&&t.handleSwipe(e)}}}},{key:"handleMouseOver",value:function(){this.props.autoplay&&(this.autoplayPaused=!0,this.stopAutoplay())}},{key:"handleMouseOut",value:function(){this.props.autoplay&&this.autoplayPaused&&(this.startAutoplay(),this.autoplayPaused=null)}},{key:"handleSwipe",value:function(t){"undefined"!==typeof this.touchObject.length&&this.touchObject.length>44?this.clickSafe=!0:this.clickSafe=!1;var e=this.props,n=e.slidesToShow,r=e.slidesToScroll,i=e.swipeSpeed;"auto"===r&&(n=this.state.slidesToScroll),h.a.Children.count(this.props.children)>1&&this.touchObject.length>this.state.slideWidth/n/i?1===this.touchObject.direction?this.state.currentSlide>=h.a.Children.count(this.props.children)-n&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.nextSlide():-1===this.touchObject.direction&&(this.state.currentSlide<=0&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.previousSlide()):this.goToSlide(this.state.currentSlide),this.touchObject={},this.setState({dragging:!1})}},{key:"swipeDirection",value:function(t,e,n,r){var i=t-e,o=n-r,a=Math.atan2(o,i),s=Math.round(180*a/Math.PI);return s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?1:s>=135&&s<=225?-1:!0===this.props.vertical?s>=35&&s<=135?1:-1:0}},{key:"startAutoplay",value:function(){h.a.Children.count(this.props.children)<=1||(this.autoplayID=setInterval(this.autoplayIterator,this.props.autoplayInterval))}},{key:"resetAutoplay",value:function(){this.props.resetAutoplay&&this.props.autoplay&&!this.autoplayPaused&&(this.stopAutoplay(),this.startAutoplay())}},{key:"stopAutoplay",value:function(){this.autoplayID&&clearInterval(this.autoplayID)}},{key:"animateSlide",value:function(t,e,n,r){this.tweenState(this.props.vertical?"top":"left",{easing:t||this.props.easing,duration:e||this.props.speed,endValue:n||this.getTargetLeft(),delay:null,beginValue:null,onEnd:r||null,stackBehavior:b})}},{key:"getTargetLeft",value:function(t,e){var n=void 0,r=e||this.state.currentSlide,i=this.props.cellSpacing;switch(this.props.cellAlign){case"left":n=0,n-=i*r;break;case"center":n=(this.state.frameWidth-this.state.slideWidth)/2,n-=i*r;break;case"right":n=this.state.frameWidth-this.state.slideWidth,n-=i*r}var o=this.state.slideWidth*r;return this.state.currentSlide>0&&r+this.state.slidesToScroll>=this.state.slideCount&&1!==this.props.slideWidth&&!this.props.wrapAround&&"auto"===this.props.slidesToScroll&&(o=this.state.slideWidth*this.state.slideCount-this.state.frameWidth,n=0,n-=i*(this.state.slideCount-1)),-1*(o-(n-=t||0))}},{key:"bindEvents",value:function(){y.a.canUseDOM&&(w(window,"resize",this.onResize),w(document,"readystatechange",this.onReadyStateChange))}},{key:"unbindEvents",value:function(){y.a.canUseDOM&&(O(window,"resize",this.onResize),O(document,"readystatechange",this.onReadyStateChange))}},{key:"formatChildren",value:function(t){var e=this,n=this.props.vertical?this.getTweeningValue("top"):this.getTweeningValue("left");return h.a.Children.map(t,(function(t,r){return h.a.createElement("li",{className:"slider-slide",style:e.getSlideStyles(r,n),key:r},t)}))}},{key:"setInitialDimensions",value:function(){var t=this,e=this.props,n=e.vertical,r=e.initialSlideHeight,i=e.initialSlideWidth,o=e.slidesToShow,a=e.cellSpacing,s=e.children,l=n?r||0:i||0,u=r?r*o:0,c=u+a*(o-1);this.setState({slideHeight:u,frameWidth:n?c:"100%",slideCount:h.a.Children.count(s),slideWidth:l},(function(){t.setLeft(),t.setExternalData()}))}},{key:"setDimensions",value:function(t){var e,n,r=this,i=void 0,o=void 0,a=(t=t||this.props).slidesToScroll,s=this.refs.frame,l=s.childNodes[0].childNodes[0];l?(l.style.height="auto",i=this.props.vertical?l.offsetHeight*t.slidesToShow:l.offsetHeight):i=100,o="number"!==typeof t.slideWidth?parseInt(t.slideWidth,10):t.vertical?i/t.slidesToShow*t.slideWidth:s.offsetWidth/t.slidesToShow*t.slideWidth,t.vertical||(o-=t.cellSpacing*((100-100/t.slidesToShow)/100)),n=i+t.cellSpacing*(t.slidesToShow-1),e=t.vertical?n:s.offsetWidth,"auto"===t.slidesToScroll&&(a=Math.floor(e/(o+t.cellSpacing))),this.setState({slideHeight:i,frameWidth:e,slideWidth:o,slidesToScroll:a,left:t.vertical?0:this.getTargetLeft(),top:t.vertical?this.getTargetLeft():0},(function(){r.setLeft()}))}},{key:"setLeft",value:function(){this.setState({left:this.props.vertical?0:this.getTargetLeft(),top:this.props.vertical?this.getTargetLeft():0})}},{key:"setExternalData",value:function(){this.props.data&&this.props.data()}},{key:"getListStyles",value:function(){var t=this.state.slideWidth*h.a.Children.count(this.props.children),e=this.props.cellSpacing,n=e*h.a.Children.count(this.props.children),r="translate3d("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px, 0)";return{transform:r,WebkitTransform:r,msTransform:"translate("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px)",position:"relative",display:"block",margin:this.props.vertical?e/2*-1+"px 0px":"0px "+e/2*-1+"px",padding:0,height:this.props.vertical?t+n:this.state.slideHeight,width:this.props.vertical?"auto":t+n,cursor:!0===this.state.dragging?"pointer":"inherit",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getFrameStyles",value:function(){return{position:"relative",display:"block",overflow:this.props.frameOverflow,height:this.props.vertical?this.state.frameWidth||"initial":"auto",margin:this.props.framePadding,padding:0,transform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",msTransform:"translate(0, 0)",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getSlideStyles",value:function(t,e){var n=this.getSlideTargetPosition(t,e),r=this.props.cellSpacing;return{position:"absolute",left:this.props.vertical?0:n,top:this.props.vertical?n:0,display:this.props.vertical?"block":"inline-block",listStyleType:"none",verticalAlign:"top",width:this.props.vertical?"100%":this.state.slideWidth,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",marginLeft:this.props.vertical?"auto":r/2,marginRight:this.props.vertical?"auto":r/2,marginTop:this.props.vertical?r/2:"auto",marginBottom:this.props.vertical?r/2:"auto"}}},{key:"getSlideTargetPosition",value:function(t,e){var n=this.state.frameWidth/this.state.slideWidth,r=(this.state.slideWidth+this.props.cellSpacing)*t,i=(this.state.slideWidth+this.props.cellSpacing)*n*-1;if(this.props.wrapAround){var o=Math.ceil(e/this.state.slideWidth);if(this.state.slideCount-o<=t)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount-t)*-1;var a=Math.ceil((Math.abs(e)-Math.abs(i))/this.state.slideWidth);if(1!==this.state.slideWidth&&(a=Math.ceil((Math.abs(e)-this.state.slideWidth)/this.state.slideWidth)),t<=a-1)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount+t)}return r}},{key:"getSliderStyles",value:function(){return{position:"relative",display:"block",width:this.props.width,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",visibility:this.state.slideWidth?"visible":"hidden"}}},{key:"getStyleTagStyles",value:function(){return".slider-slide > img {width: 100%; display: block;}"}},{key:"getDecoratorStyles",value:function(t){switch(t){case"TopLeft":return{position:"absolute",top:0,left:0};case"TopCenter":return{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case"TopRight":return{position:"absolute",top:0,right:0};case"CenterLeft":return{position:"absolute",top:"50%",left:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"CenterCenter":return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",WebkitTransform:"translate(-50%, -50%)",msTransform:"translate(-50%, -50%)"};case"CenterRight":return{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"BottomLeft":return{position:"absolute",bottom:0,left:0};case"BottomCenter":return{position:"absolute",bottom:0,width:"100%",textAlign:"center"};case"BottomRight":return{position:"absolute",bottom:0,right:0};default:return{position:"absolute",top:0,left:0}}}}]),e}(h.a.Component);T.defaultProps={afterSlide:function(){},autoplay:!1,resetAutoplay:!0,swipeSpeed:12,autoplayInterval:3e3,beforeSlide:function(){},cellAlign:"left",cellSpacing:0,data:function(){},decorators:v,dragging:!0,easing:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},edgeEasing:function(t,e,n,r){return(n-e)*t/r+e},framePadding:"0px",frameOverflow:"hidden",slideIndex:0,slidesToScroll:1,slidesToShow:1,slideWidth:1,speed:500,swiping:!0,vertical:!1,width:"100%",wrapAround:!1,style:{}};var C=T},78:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(95),o=(r=i)&&r.__esModule?r:{default:r};e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},83:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(103);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},93:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},94:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return i}))},95:function(t,e,n){t.exports={default:n(96),__esModule:!0}},96:function(t,e,n){n(97),t.exports=n(110).Object.assign},97:function(t,e,n){var r=n(116);r(r.S+r.F,"Object",{assign:n(98)})},98:function(t,e,n){"use strict";var r=n(113),i=n(119),o=n(125),a=n(121),s=n(120),l=n(127),u=Object.assign;t.exports=!u||n(117)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r}))?function(t,e){for(var n=s(t),u=arguments.length,c=1,d=o.f,p=a.f;u>c;)for(var f,h=l(arguments[c++]),v=d?i(h).concat(d(h)):i(h),g=v.length,y=0;g>y;)f=v[y++],r&&!p.call(h,f)||(n[f]=h[f]);return n}:u}}]);
//# sourceMappingURL=16.e4cd8079.chunk.js.map