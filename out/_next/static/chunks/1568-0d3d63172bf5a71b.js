(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1568],{84925:function(t,r,e){var o;"undefined"!=typeof self&&self,t.exports=(o=e(67294),function(t){var r={};function e(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o,a=(o=e(1))&&o.__esModule?o:{default:o};r.default=a.default},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},a=function(){function t(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(r,e,o){return e&&t(r.prototype,e),o&&t(r,o),r}}(),n=e(2),s=n&&n.__esModule?n:{default:n},i=function(t){function r(t){!function(t,r){if(!(t instanceof r))throw TypeError("Cannot call a class as a function")}(this,r);var e=function(t,r){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&("object"==typeof r||"function"==typeof r)?r:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t));return e.smoothScroll=e.smoothScroll.bind(e),e}return function(t,r){if("function"!=typeof r&&null!==r)throw TypeError("Super expression must either be null or a function, not "+typeof r);t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(t,r):t.__proto__=r)}(r,t),a(r,[{key:"componentDidMount",value:function(){e(3).polyfill()}},{key:"smoothScroll",value:function(t){var r=this;t.preventDefault();var e=function(){return 0};void 0!==this.props.offset&&(e=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(r.props.offset)});var o=t.currentTarget.getAttribute("href").slice(1),a=document.getElementById(o).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:a-e(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,r=(t.offset,function(t,r){var e={};for(var o in t)!(r.indexOf(o)>=0)&&Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}(t,["offset"]));return s.default.createElement("a",o({},r,{onClick:this.smoothScroll}))}}]),r}(n.Component);r.default=i},function(t,r){t.exports=o},function(t,r,e){t.exports={polyfill:function(){var t,r=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===r.__forceSmoothScrollPolyfill__){var o=r.HTMLElement||r.Element,a={scroll:r.scroll||r.scrollTo,scrollBy:r.scrollBy,elementScroll:o.prototype.scroll||i,scrollIntoView:o.prototype.scrollIntoView},n=r.performance&&r.performance.now?r.performance.now.bind(r.performance):Date.now,s=(t=r.navigator.userAgent,RegExp("MSIE |Trident/|Edge/").test(t))?1:0;r.scroll=r.scrollTo=function(){if(void 0!==arguments[0]){if(!0===l(arguments[0])){a.scroll.call(r,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:r.scrollX||r.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:r.scrollY||r.pageYOffset);return}p.call(r,e.body,void 0!==arguments[0].left?~~arguments[0].left:r.scrollX||r.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:r.scrollY||r.pageYOffset)}},r.scrollBy=function(){if(void 0!==arguments[0]){if(l(arguments[0])){a.scrollBy.call(r,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0);return}p.call(r,e.body,~~arguments[0].left+(r.scrollX||r.pageXOffset),~~arguments[0].top+(r.scrollY||r.pageYOffset))}},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0]){if(!0===l(arguments[0])){if("number"==typeof arguments[0]&&void 0===arguments[1])throw SyntaxError("Value could not be converted");a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop);return}var t=arguments[0].left,r=arguments[0].top;p.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===r?this.scrollTop:~~r)}},o.prototype.scrollBy=function(){if(void 0!==arguments[0]){if(!0===l(arguments[0])){a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},o.prototype.scrollIntoView=function(){if(!0===l(arguments[0])){a.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);return}var t=function(t){var r;do r=(t=t.parentNode)===e.body;while(!1===r&&!1===function(t){var r=c(t,"Y")&&f(t,"Y"),e=c(t,"X")&&f(t,"X");return r||e}(t));return r=null,t}(this),o=t.getBoundingClientRect(),n=this.getBoundingClientRect();t!==e.body?(p.call(this,t,t.scrollLeft+n.left-o.left,t.scrollTop+n.top-o.top),"fixed"!==r.getComputedStyle(t).position&&r.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):r.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}}function i(t,r){this.scrollLeft=t,this.scrollTop=r}function l(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,r){return"Y"===r?t.clientHeight+s<t.scrollHeight:"X"===r?t.clientWidth+s<t.scrollWidth:void 0}function f(t,e){var o=r.getComputedStyle(t,null)["overflow"+e];return"auto"===o||"scroll"===o}function p(t,o,s){var l,c,f,p,m=n();t===e.body?(l=r,c=r.scrollX||r.pageXOffset,f=r.scrollY||r.pageYOffset,p=a.scroll):(l=t,c=t.scrollLeft,f=t.scrollTop,p=i),function t(e){var o,a,s,i=(n()-e.startTime)/468;o=.5*(1-Math.cos(Math.PI*(i=i>1?1:i))),a=e.startX+(e.x-e.startX)*o,s=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,a,s),(a!==e.x||s!==e.y)&&r.requestAnimationFrame(t.bind(r,e))}({scrollable:l,method:p,startTime:m,startX:c,startY:f,x:o,y:s})}}}}]))},84415:function(t,r){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),r.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var r=t.$$typeof;switch(r){case e:switch(t=t.type){case a:case s:case n:case p:case m:return t;default:switch(t=t&&t.$$typeof){case c:case l:case f:case u:case d:case i:return t;default:return r}}case o:return r}}}(t)===a}},14954:function(t,r,e){"use strict";t.exports=e(84415)},40826:function(t,r,e){"use strict";let o;e.d(r,{z0:function(){return X},Mi:function(){return I},LG:function(){return U}});var a=e(67294),n=e(70917);function s(){return(s=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}let i=new Map,l=new WeakMap,c=0;function f(t,r,e={},a=o){if(void 0===window.IntersectionObserver&&void 0!==a){let n=t.getBoundingClientRect();return r(a,{isIntersecting:a,target:t,intersectionRatio:"number"==typeof e.threshold?e.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:s,observer:f,elements:p}=function(t){let r=Object.keys(t).sort().filter(r=>void 0!==t[r]).map(r=>{var e;return`${r}_${"root"===r?(e=t.root)?(l.has(e)||(c+=1,l.set(e,c.toString())),l.get(e)):"0":t[r]}`}).toString(),e=i.get(r);if(!e){let o;let a=new Map,n=new IntersectionObserver(r=>{r.forEach(r=>{var e;let n=r.isIntersecting&&o.some(t=>r.intersectionRatio>=t);t.trackVisibility&&void 0===r.isVisible&&(r.isVisible=n),null==(e=a.get(r.target))||e.forEach(t=>{t(n,r)})})},t);o=n.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:n,elements:a},i.set(r,e)}return e}(e),m=p.get(t)||[];return p.has(t)||p.set(t,m),m.push(r),f.observe(t),function(){m.splice(m.indexOf(r),1),0===m.length&&(p.delete(t),f.unobserve(t)),0===p.size&&(f.disconnect(),i.delete(s))}}let p=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function m(t){return"function"!=typeof t.children}class d extends a.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()},this.handleChange=(t,r)=>{t&&this.props.triggerOnce&&this.unobserve(),m(this.props)||this.setState({inView:t,entry:r}),this.props.onChange&&this.props.onChange(t,r)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:r,rootMargin:e,trackVisibility:o,delay:a,fallbackInView:n}=this.props;this._unobserveCb=f(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:o,delay:a},n)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!m(this.props)){let{inView:t,entry:r}=this.state;return this.props.children({inView:t,entry:r,ref:this.handleNode})}let e=this.props,{children:o,as:n}=e,i=function(t,r){if(null==t)return{};var e,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)e=n[o],r.indexOf(e)>=0||(a[e]=t[e]);return a}(e,p);return a.createElement(n||"div",s({ref:this.handleNode},i),o)}}function u({threshold:t,delay:r,trackVisibility:e,rootMargin:o,root:n,triggerOnce:s,skip:i,initialInView:l,fallbackInView:c,onChange:p}={}){var m;let[d,u]=a.useState(null),y=a.useRef(),[h,g]=a.useState({inView:!!l,entry:void 0});y.current=p,a.useEffect(()=>{let a;if(!i&&d)return a=f(d,(t,r)=>{g({inView:t,entry:r}),y.current&&y.current(t,r),r.isIntersecting&&s&&a&&(a(),a=void 0)},{root:n,rootMargin:o,threshold:t,trackVisibility:e,delay:r},c),()=>{a&&a()}},[Array.isArray(t)?t.toString():t,d,n,o,s,i,e,c,r]);let b=null==(m=h.entry)?void 0:m.target;a.useEffect(()=>{d||!b||s||i||g({inView:!!l,entry:void 0})},[d,b,s,i,l]);let v=[u,h.inView,h.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var y=e(14954);e(8417);var h=e(52443);e(8679),e(62324),e(27278);var g=e(85893),b=g.Fragment;function v(t,r,e){return h.h.call(r,"css")?(0,g.jsx)(h.E,(0,h.c)(t,r),e):(0,g.jsx)(t,r,e)}n.F4`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,n.F4`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,n.F4`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,n.F4`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,n.F4`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,n.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,n.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,n.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,n.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,n.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,n.F4`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,n.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,n.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,n.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;var x=n.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;n.F4`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;var F=n.iv`
  opacity: 0;
`,w=n.iv`
  display: inline-block;
  white-space: pre;
`,k=t=>{let{cascade:r=!1,damping:e=.5,delay:o=0,duration:s=1e3,fraction:i=0,keyframes:l=x,triggerOnce:c=!1,css:f,className:p,style:m,childClassName:u,childStyle:h,children:g,onVisibilityChange:w}=t,S=(0,a.useMemo)(()=>(function({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:o=x,iterationCount:a=1}){return n.iv`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${o};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};
  `})({keyframes:l,duration:s}),[s,l]);return void 0==g?null:"string"==typeof g||"number"==typeof g||"boolean"==typeof g?v(Y,{...t,animationStyles:S,children:String(g)}):(0,y.isFragment)(g)?v(O,{...t,animationStyles:S}):v(b,{children:a.Children.map(g,(l,y)=>{if(!(0,a.isValidElement)(l))return null;let g=[f,S],b=o+(r?y*s*e:0);switch(l.type){case"ol":case"ul":return v(n.ms,{children:({cx:r})=>v(l.type,{...l.props,className:r(p,l.props.className),style:{...m,...l.props.style},children:v(k,{...t,children:l.props.children})})});case"li":return v(d,{threshold:i,triggerOnce:c,onChange:w,children:({inView:t,ref:r})=>v(n.ms,{children:({cx:e})=>v(l.type,{...l.props,ref:r,className:e(u,l.props.className),css:t?g:F,style:{...h,...l.props.style,animationDelay:b+"ms"}})})});default:return v(d,{threshold:i,triggerOnce:c,onChange:w,children:({inView:t,ref:r})=>v("div",{ref:r,className:p,css:t?g:F,style:{...m,animationDelay:b+"ms"},children:v(n.ms,{children:({cx:t})=>v(l.type,{...l.props,className:t(u,l.props.className),style:{...h,...l.props.style}})})})})}})})},Y=t=>{let{animationStyles:r,cascade:e=!1,damping:o=.5,delay:a=0,duration:n=1e3,fraction:s=0,triggerOnce:i=!1,css:l,className:c,style:f,children:p,onVisibilityChange:m}=t,{ref:d,inView:y}=u({triggerOnce:i,threshold:s,onChange:m});return e?v("div",{ref:d,className:c,css:[l,w],style:f,children:p.split("").map((t,e)=>v("span",{css:y?r:F,style:{animationDelay:a+e*n*o+"ms"},children:t},e))}):v(O,{...t,children:p})},O=t=>{let{animationStyles:r,fraction:e=0,triggerOnce:o=!1,css:a,className:n,style:s,children:i,onVisibilityChange:l}=t,{ref:c,inView:f}=u({triggerOnce:o,threshold:e,onChange:l});return v("div",{ref:c,className:n,css:f?[a,r]:F,style:s,children:i})};n.F4`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,n.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,n.F4`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,n.F4`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,n.F4`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,n.F4`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,n.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,n.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,n.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,n.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,n.F4`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,n.F4`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,n.F4`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,n.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,n.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,n.iv`
  backface-visibility: visible;
`,n.F4`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;var S=n.F4`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;n.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,n.iv`
  transform-origin: top left;
`;var X=t=>v(k,{keyframes:S,...t});n.F4`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,n.F4`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,n.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,n.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,n.F4`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;var _=n.F4`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,C=n.F4`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,j=n.F4`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,z=n.F4`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,E=n.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,V=n.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,M=n.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,T=n.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,I=t=>{let{direction:r,reverse:e=!1,...o}=t,n=(0,a.useMemo)(()=>(function(t,r){switch(r){case"down":return t?E:_;case"right":return t?M:j;case"up":return t?T:z;default:return t?V:C}})(e,r),[r,e]);return v(k,{keyframes:n,...o})},B=n.F4`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,N=n.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,P=n.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,R=n.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$=n.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,L=n.F4`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,A=n.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,D=n.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,W=n.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,H=n.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,U=t=>{let{direction:r,reverse:e=!1,...o}=t,n=(0,a.useMemo)(()=>(function(t,r){switch(r){case"down":return t?A:N;case"left":return t?D:P;case"right":return t?W:R;case"up":return t?H:$;default:return t?L:B}})(e,r),[r,e]);return v(k,{keyframes:n,...o})}}}]);