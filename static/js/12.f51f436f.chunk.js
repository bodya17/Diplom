(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{291:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(l(1)),r=l(71),a=o(l(558));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.inject)("main")((0,r.observer)(function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),n.default.createElement(n.default.Fragment,null,n.default.createElement(a.default,null))}))},297:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];for(var l in e)t.push(e[l]);return t}},346:function(e,t){var f=1/0,m=9007199254740991,d=17976931348623157e292,s=NaN,p="[object Function]",b="[object GeneratorFunction]",y="[object Symbol]",_=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,w=/^0o[0-7]+$/i,E=/^(?:0|[1-9]\d*)$/,x=parseInt,T=Object.prototype.toString,C=Math.ceil,R=Math.max;function g(e,t,l){var n=-1,r=e.length;t<0&&(t=r<-t?0:r+t),(l=r<l?r:l)<0&&(l+=r),r=l<t?0:l-t>>>0,t>>>=0;for(var a=Array(r);++n<r;)a[n]=e[n+t];return a}function j(e,t,l){if(!O(l))return!1;var n,r,a,o,u,c,i,f,d=typeof t;return!!("number"==d?null!=(u=l)&&("number"==typeof(f=u.length)&&-1<f&&f%1==0&&f<=m)&&((i=O(c=u)?T.call(c):"")!=p&&i!=b)&&(a=t,(o=null==(o=l.length)?m:o)&&("number"==typeof a||E.test(a))&&-1<a&&a%1==0&&a<o):"string"==d&&t in l)&&((n=l[t])===(r=e)||n!=n&&r!=r)}function O(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=function(e,t,l){var n,r,a;t=(l?j(e,t,l):void 0===t)?1:R((n=(a=t)?(a=function(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||(l=t)&&"object"==typeof l&&T.call(t)==y)return s;var t,l;if(O(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=O(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(_,"");var r=h.test(e);return r||w.test(e)?x(e.slice(2),r?2:8):v.test(e)?s:+e}(a))!==f&&a!==-f?a==a?a:0:(a<0?-1:1)*d:0===a?a:0,r=n%1,n==n?r?n-r:n:0),0);var o=e?e.length:0;if(!o||t<1)return[];for(var u=0,c=0,i=Array(C(o/t));u<o;)i[c++]=g(e,u,u+=t);return i}},558:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},r=function(){function n(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,l){return t&&n(e.prototype,t),l&&n(e,l),e}}(),o=l(1),u=_(o),c=l(298),i=l(300),f=l(71),d=_(l(318)),m=_(l(295)),s=_(l(293)),p=_(l(296)),b=l(294),y=_(l(297));function _(e){return e&&e.__esModule?e:{default:e}}var v=(0,f.inject)("loader")(n=(0,f.observer)(n=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={minmax:null,lssq:null},e.clickCalcHandler=e.clickCalcHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"clickCalcHandler",value:function(e,t,l){var n=this;this.props.loader.showLoader();var r={x_vals:e,y_vals:t,deg:l},a=fetch(b.LSSQ_DISCRETE_URL,{method:"POST",body:JSON.stringify(r)}).then(function(e){return e.json()}),o=fetch(b.MINMAX_DISCRETE_URL,{method:"POST",body:JSON.stringify(r)}).then(function(e){return e.json()});Promise.all([a,o]).then(function(e){n.props.loader.hideLoader(),n.setState({minmax:(0,y.default)(e[1]).slice(-1)[0],lssq:e[0]})}).catch(function(e){console.log(e),n.props.loader.hideLoader()})}},{key:"render",value:function(){var e=void 0,t=void 0,l=void 0,n=void 0,r=void 0;return this.state.minmax&&this.state.lssq&&(e=this.state.minmax,t=this.state.lssq,console.log("minmaxData: ",e),l=u.default.createElement(s.default,{id:"comp_discrete_mm_plot",legend:!1,plotData:[{x:e.x_approx,y:e.approximation,name:"Апроксимація"},{x:e.x_vals,y:e.y_vals,mode:"markers",name:"Табл. дані"},{x:e.alternance,y:e.f_alternance,mode:"markers",name:"Точки альтернансу"},a({},e.max_error_line,{name:"Максимальна похибка"})]}),n=u.default.createElement(s.default,{id:"comp_discrete_ls_plot",legend:!1,plotData:[{x:t.x_approx,y:t.approximation,name:"Апроксимація"},{x:t.x_vals,y:t.y_vals,mode:"markers",name:"Табл. дані"},a({},t.max_error_line,{name:"Максимальна похибка",line:{color:"#f00"}})]}),r=u.default.createElement(s.default,{id:"comp_discrete_errs_plot",plotData:[a({},t.error_plot,{name:"МНК"}),{x:e.error_plot[0],y:e.error_plot[1],name:"Мінімакс"}]})),u.default.createElement("div",null,u.default.createElement(d.default,{onCalcClick:this.clickCalcHandler}),t&&u.default.createElement("div",null,u.default.createElement(i.Card,null,u.default.createElement(i.CardText,null,u.default.createElement(c.Table,null,u.default.createElement(c.TableBody,{displayRowCheckbox:!1},u.default.createElement(c.TableRow,null,u.default.createElement(c.TableRowColumn,{width:"20%"}),u.default.createElement(c.TableRowColumn,null,"Мінімакс"),u.default.createElement(c.TableRowColumn,null,"МНК")),u.default.createElement(c.TableRow,null,u.default.createElement(c.TableRowColumn,{width:"20%"},"Макс похибка"),u.default.createElement(c.TableRowColumn,null,e.max_error.toFixed(4)),u.default.createElement(c.TableRowColumn,null,t.max_error.toFixed(4))),u.default.createElement(c.TableRow,null,u.default.createElement(c.TableRowColumn,{width:"20%"},"x в якому макс похибка"),u.default.createElement(c.TableRowColumn,null,e.x_error.toFixed(4)),u.default.createElement(c.TableRowColumn,null,t.x_error.toFixed(4))),u.default.createElement(c.TableRow,null,u.default.createElement(c.TableRowColumn,{width:"20%"},"Аналітичний вигляд"),u.default.createElement(c.TableRowColumn,null,u.default.createElement(p.default,{formula:e.formula.replace((0,m.default)(4),"$1")})),u.default.createElement(c.TableRowColumn,null,u.default.createElement(p.default,{formula:t.formula.replace((0,m.default)(4),"$1")}))),u.default.createElement(c.TableRow,null,u.default.createElement(c.TableRowColumn,{width:"20%"},"Графіки"),u.default.createElement(c.TableRowColumn,null,l),u.default.createElement(c.TableRowColumn,null,n)))),r))))}}]),t}())||n)||n;t.default=v}}]);