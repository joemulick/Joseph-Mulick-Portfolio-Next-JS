
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([1],{106:function(e,t,r){"use strict";var n=r(71),o=r(215),i="function"==typeof Symbol&&"symbol"==typeof Symbol(),a=Object.prototype.toString,l=function(e){return"function"==typeof e&&"[object Function]"===a.call(e)},c=Object.defineProperty&&function(){var e={};try{Object.defineProperty(e,"x",{enumerable:!1,value:e});for(var t in e)return!1;return e.x===e}catch(e){return!1}}(),u=function(e,t,r,n){(!(t in e)||l(n)&&n())&&(c?Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},f=function(e,t){var r=arguments.length>2?arguments[2]:{},a=n(t);i&&(a=a.concat(Object.getOwnPropertySymbols(t))),o(a,function(n){u(e,n,t[n],r[n])})};f.supportsDescriptors=!!c,e.exports=f},107:function(e,t,r){"use strict";var n=r(71),o=r(108),i=function(e){return void 0!==e&&null!==e},a=r(217)(),l=Object,c=o.call(Function.call,Array.prototype.push),u=o.call(Function.call,Object.prototype.propertyIsEnumerable),f=a?Object.getOwnPropertySymbols:null;e.exports=function(e,t){if(!i(e))throw new TypeError("target must be an object");var r,o,s,p,y,d,h,b=l(e);for(r=1;r<arguments.length;++r){o=l(arguments[r]),p=n(o);var v=a&&(Object.getOwnPropertySymbols||f);if(v)for(y=v(o),s=0;s<y.length;++s)h=y[s],u(o,h)&&c(p,h);for(s=0;s<p.length;++s)h=p[s],d=o[h],u(o,h)&&(b[h]=d)}return b}},108:function(e,t,r){"use strict";var n=r(216);e.exports=Function.prototype.bind||n},109:function(e,t,r){"use strict";var n=r(107),o=function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",t=e.split(""),r={},n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r),i="";for(var a in o)i+=a;return e!==i},i=function(){if(!Object.assign||!Object.preventExtensions)return!1;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return!1};e.exports=function(){return Object.assign?o()?n:i()?n:Object.assign:n}},207:function(e,t,r){e.exports=r(208)},208:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=n(o),a=r(69),l=n(a),c=r(209),u=(n(c),r(70),r(221)),f=n(u);t.default=function(){return i.default.createElement(l.default,null,i.default.createElement(f.default,null))}},209:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,g.parse)(e,!1,!0),r=(0,g.parse)((0,P.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}Object.defineProperty(t,"__esModule",{value:!0});var i=r(43),a=n(i),l=r(210),c=n(l),u=r(14),f=n(u),s=r(4),p=n(s),y=r(5),d=n(y),h=r(15),b=n(h),v=r(16),m=n(v),g=r(100),j=r(1),O=n(j),w=r(8),x=n(w),S=r(212),_=n(S),k=r(39),E=n(k),P=r(24),$=function(e){function t(e){var r;(0,p.default)(this,t);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var a=(0,b.default)(this,(r=t.__proto__||(0,f.default)(t)).call.apply(r,[this,e].concat(o)));return a.linkClicked=a.linkClicked.bind(a),a.formatUrls(e),a}return(0,m.default)(t,e),(0,d.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.formatUrls(e)}},{key:"linkClicked",value:function(e){var t=this;if("A"!==e.currentTarget.nodeName||!(e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=this.props.shallow,n=this.href,i=this.as;if(o(n)){var a=window.location.pathname;n=(0,g.resolve)(a,n),i=i?(0,g.resolve)(a,i):n,e.preventDefault();var l=this.props.scroll;null==l&&(l=i.indexOf("#")<0);var c=this.props.replace,u=c?"replace":"push";E.default[u](n,i,{shallow:r}).then(function(e){e&&l&&window.scrollTo(0,0)}).catch(function(e){t.props.onError&&t.props.onError(e)})}}}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=(0,g.resolve)(e,this.href);E.default.prefetch(t)}}},{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,c.default)(this.props.href)!==(0,c.default)(e.href)&&this.prefetch()}},{key:"formatUrls",value:function(e){this.href=e.href&&"object"===(0,a.default)(e.href)?(0,g.format)(e.href):e.href,this.as=e.as&&"object"===(0,a.default)(e.as)?(0,g.format)(e.as):e.as}},{key:"render",value:function(){var e=this.props.children,t=this.href,r=this.as;"string"==typeof e&&(e=O.default.createElement("a",null,e));var n=j.Children.only(e),o={onClick:this.linkClicked};return!this.props.passHref&&("a"!==n.type||"href"in n.props)||(o.href=r||t),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,k._rewriteUrlForNextExport)(o.href)),O.default.cloneElement(n,o)}}]),t}(j.Component);$.propTypes=(0,_.default)({href:x.default.oneOfType([x.default.string,x.default.object]).isRequired,as:x.default.oneOfType([x.default.string,x.default.object]),prefetch:x.default.bool,replace:x.default.bool,shallow:x.default.bool,passHref:x.default.bool,scroll:x.default.bool,children:x.default.oneOfType([x.default.element,function(e,t){return"string"==typeof e[t]&&T("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired}),t.default=$;var T=(0,P.execOnce)(P.warn)},210:function(e,t,r){e.exports={default:r(211),__esModule:!0}},211:function(e,t,r){var n=r(0),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},212:function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){return(0,u.default)(e,o({},d,h))}function a(e){return e&&e[d]===h}function l(e){if(!(0,y.default)(e))throw new TypeError("given propTypes must be an object");if((0,s.default)(e,d)&&!a(e[d]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,u.default)({},e,o({},d,i(function(){function t(t,r,n){var o=Object.keys(t).filter(function(t){return!(0,s.default)(e,t)});return o.length>0?new TypeError(String(n)+": unknown props found: "+String(o.join(", "))):null}return t}())))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var c=r(213),u=n(c),f=r(219),s=n(f),p=r(220),y=n(p),d="prop-types-exact: ​",h={};e.exports=t.default},213:function(e,t,r){"use strict";var n=r(106),o=r(107),i=r(109),a=r(218),l=i();n(l,{implementation:o,getPolyfill:i,shim:a}),e.exports=l},214:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),r}},215:function(e,t){var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString;e.exports=function(e,t,o){if("[object Function]"!==n.call(t))throw new TypeError("iterator must be a function");var i=e.length;if(i===+i)for(var a=0;a<i;a++)t.call(o,e[a],a,e);else for(var l in e)r.call(e,l)&&t.call(o,e[l],l,e)}},216:function(e,t,r){"use strict";var n=Array.prototype.slice,o=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==o.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var r,i=n.call(arguments,1),a=function(){if(this instanceof r){var o=t.apply(this,i.concat(n.call(arguments)));return Object(o)===o?o:this}return t.apply(e,i.concat(n.call(arguments)))},l=Math.max(0,t.length-i.length),c=[],u=0;u<l;u++)c.push("$"+u);if(r=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var f=function(){};f.prototype=t.prototype,r.prototype=new f,f.prototype=null}return r}},217:function(e,t,r){"use strict";var n=r(71);e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;e[t]=42;for(t in e)return!1;if(0!==n(e).length)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var o=Object.getOwnPropertySymbols(e);if(1!==o.length||o[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(e,t);if(42!==i.value||!0!==i.enumerable)return!1}return!0}},218:function(e,t,r){"use strict";var n=r(106),o=r(109);e.exports=function(){var e=o();return n(Object,{assign:e},{assign:function(){return Object.assign!==e}}),e}},219:function(e,t,r){var n=r(108);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},220:function(e,t){function r(e){return e&&"object"===(void 0===e?"undefined":n(e))&&!Array.isArray(e)}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r,e.exports=t.default},221:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(222),i=n(o),a=r(1),l=n(a),c=r(70),u=function(e){return l.default.createElement(c.Row,null,l.default.createElement(c.Col,{xs:6},l.default.createElement("div",{className:"text-div-container"},l.default.createElement("h1",{className:"nameLine"},"My name is Joe Mulick"),l.default.createElement("h2",{className:"nameLine"},"Full Stack Javascript Web Developer, Los Angeles California"))),l.default.createElement(c.Col,{xs:6},l.default.createElement("div",{className:"jsx-3366951534 photo-div-container"},l.default.createElement("img",{src:"https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/mefiltered_qff7c0.jpg",className:"jsx-3366951534 me-photo"}),l.default.createElement(i.default,{styleId:"3366951534",css:[".nameLine.jsx-3366951534{text-align:center;}",".text-div-container.jsx-3366951534{margin:auto;}",".photo-div-container.jsx-3366951534{margin:auto;}",".me-photo.jsx-3366951534{max-height:215px;max-width:215px;border-radius:50%;margin:auto;}"]}))))};t.default=u},222:function(e,t,r){e.exports=r(110)},71:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=Array.prototype.slice,a=r(214),l=Object.prototype.propertyIsEnumerable,c=!l.call({toString:null},"toString"),u=l.call(function(){},"prototype"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],s=function(e){var t=e.constructor;return t&&t.prototype===e},p={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{s(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),d=function(e){if("undefined"==typeof window||!y)return s(e);try{return s(e)}catch(e){return!1}},h=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===o.call(e),i=a(e),l=t&&"[object String]"===o.call(e),s=[];if(!t&&!r&&!i)throw new TypeError("Object.keys called on a non-object");var p=u&&r;if(l&&e.length>0&&!n.call(e,0))for(var y=0;y<e.length;++y)s.push(String(y));if(i&&e.length>0)for(var h=0;h<e.length;++h)s.push(String(h));else for(var b in e)p&&"prototype"===b||!n.call(e,b)||s.push(String(b));if(c)for(var v=d(e),m=0;m<f.length;++m)v&&"constructor"===f[m]||!n.call(e,f[m])||s.push(f[m]);return s};h.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var e=Object.keys;Object.keys=function(t){return e(a(t)?i.call(t):t)}}}else Object.keys=h;return Object.keys||h},e.exports=h}},[207]);
            return { page: comp.default }
          })
        