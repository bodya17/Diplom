(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),l=n(1),i=y(l),u=n(278),c=n(280),s=n(66),f=y(n(275)),p=y(n(273)),d=y(n(380)),h=y(n(276)),m=n(274),b=y(n(277));function y(e){return e&&e.__esModule?e:{default:e}}var _=(0,s.inject)("loader")(r=(0,s.observer)(r=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.clickCalcHandler=t.clickCalcHandler.bind(t),t.state={lssq:null,minmax:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,l.Component),a(n,[{key:"clickCalcHandler",value:function(e,t,n,r,o,a){var l=this;this.props.loader.showLoader();Promise.all([fetch(m.LSSQ_URL,{method:"POST",body:JSON.stringify({func:e,start:+n,end:+r,deg:+t,points:+o})}).then(function(e){return e.json()}),fetch(m.MINMAX_URL,{method:"POST",body:JSON.stringify({func:e,start:+n,end:+r,deg:+t,precision:+a})}).then(function(e){return e.json()})]).then(function(e){l.props.loader.hideLoader(),l.setState({lssq:e[0],minmax:(0,b.default)(e[1]).slice(-1)[0]})}).catch(function(e){console.error("Something went wrong!\n "+e),l.props.loader.hideLoader()})}},{key:"render",value:function(){if(this.state.lssq&&this.state.minmax){var e=i.default.createElement(p.default,{legend:!1,data:[{x:this.state.lssq.x_approx,y:this.state.lssq.f_x_approx},{x:this.state.lssq.x_approx,y:this.state.lssq.approximation},o({},this.state.lssq.max_error_line,{line:{color:"#f00"}})]}),t=i.default.createElement(p.default,{layout:{showlegend:!1},data:[{x:this.state.minmax.func_plot[0],y:this.state.minmax.func_plot[1]},{x:this.state.minmax.pol_plot[0],y:this.state.minmax.pol_plot[1]}]}),n=i.default.createElement(p.default,{layout:{title:"Функції похибок"},data:[o({},this.state.lssq.error_plot,{name:"МНК"}),{x:this.state.minmax.error_plot[0],y:0<this.state.minmax.error_plot.length?this.state.minmax.error_plot[1].map(function(e){return-e}):this.state.minmax.error_plot[1],name:"Мінімакс"}]});return i.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},i.default.createElement(c.Card,null,i.default.createElement(c.CardText,null,i.default.createElement(u.Table,null,i.default.createElement(u.TableBody,{displayRowCheckbox:!1},i.default.createElement(u.TableRow,null,i.default.createElement(u.TableRowColumn,{width:"20%"}),i.default.createElement(u.TableRowColumn,null,"Мінімакс"),i.default.createElement(u.TableRowColumn,null,"МНК")),i.default.createElement(u.TableRow,null,i.default.createElement(u.TableRowColumn,{width:"20%"},"Макс похибка"),i.default.createElement(u.TableRowColumn,null,this.state.minmax.max_err.toFixed(4)),i.default.createElement(u.TableRowColumn,null,this.state.lssq.max_error.toFixed(4))),i.default.createElement(u.TableRow,null,i.default.createElement(u.TableRowColumn,{width:"20%"},"x в якому макс похибка"),i.default.createElement(u.TableRowColumn,null,this.state.minmax.x_of_max_err.toFixed(4)),i.default.createElement(u.TableRowColumn,null,this.state.lssq.x_of_max_error.toFixed(4))),i.default.createElement(u.TableRow,null,i.default.createElement(u.TableRowColumn,{width:"20%"},"Аналітичний вигляд"),i.default.createElement(u.TableRowColumn,null,i.default.createElement(h.default,{formula:this.state.minmax.polynom_latex.replace((0,f.default)(4),"$1")})),i.default.createElement(u.TableRowColumn,null,i.default.createElement(h.default,{formula:this.state.lssq.formula.replace((0,f.default)(4),"$1")}))),i.default.createElement(u.TableRow,null,i.default.createElement(u.TableRowColumn,{width:"20%"},"Графіки"),i.default.createElement(u.TableRowColumn,null,t),i.default.createElement(u.TableRowColumn,null,e)))),n)))}return i.default.createElement(d.default,{onCalcClick:this.clickCalcHandler})}}]),n}())||r)||r;t.default=_},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n(1)),a=l(n(283));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.layout,n=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["layout"]);return o.default.createElement(a.default,r({},n,{useResizeHandler:!0,style:{width:"100%",height:"100%"},layout:r({},t,{autosize:!0})}))}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="http://"+window.location.hostname+":5000/minmax",o="http://"+window.location.hostname+":5000/least_squares?",a="http://"+window.location.hostname+":5000/least_squares_discrete?",l="http://"+window.location.hostname+":5000/minmax_discrete?",i="http://"+window.location.hostname+":5000/spline_minmax?",u="http://"+window.location.hostname+":5000/continuous_spline_minmax?",c="http://"+window.location.hostname+":5000/continuous_spline_minmax_segments_specified?",s="http://"+window.location.hostname+":5000/spline_minmax_discrete?";t.MINMAX_URL=r,t.LSSQ_URL=o,t.LSSQ_DISCRETE_URL=a,t.MINMAX_DISCRETE_URL=l,t.MINMAX_DISCRETE_URL_GET="http://localhost:5000/minmax_discrete_get_results",t.MINMAX_URL_GET="http://localhost:5000/minmax_get_results",t.LSSQ_URL_GET="http://localhost:5000/least_squares_get_results",t.LSSQ_DISCRETE_URL_GET="http://localhost:5000/least_squares_discrete_get_results",t.SPLINE_MINMAX_URL=i,t.CONTINUOUS_SPLINE_MINMAX_URL=u,t.CONTINUOUS_SPLINE_MINMAX_SEGMENTS_SPECIFIED_URL=c,t.MINMAX_SPLINE_DISCRETE_URL=s},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new RegExp("(\\.\\d{"+(e||3)+"})\\d*","g")}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};n(284);var l=n(285);t.default=function(e){var t=e.formula;return a.default.createElement(l.InlineMath,{math:t})}},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];for(var n in e)t.push(e[n]);return t}},288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),l=(r=["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"],o=["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),i=n(1),u=f(i),c=f(n(281)),s=n(282);function f(e){return e&&e.__esModule?e:{default:e}}var p=c.default.div(l),d=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.PureComponent),a(t,[{key:"render",value:function(){var t=this;return u.default.createElement(p,null,u.default.createElement(s.TextField,{floatingLabelText:"Функція, яку апроксимуємо",type:"text",value:this.props.func,onChange:function(e){return t.props.changeFunc(e.target.value)}}),u.default.createElement(s.TextField,{floatingLabelText:"Степінь многочлена",type:"number",value:this.props.deg,onChange:function(e){return t.props.changeDeg(e.target.value)}}),u.default.createElement(s.TextField,{floatingLabelText:"Початок інтервалу",type:"number",value:this.props.start,onChange:function(e){return t.props.changeStart(e.target.value)}}),u.default.createElement(s.TextField,{floatingLabelText:"Кінець інтервалу",type:"number",value:this.props.end,onChange:function(e){return t.props.changeEnd(e.target.value)}}),this.props.minmax&&u.default.createElement(s.TextField,{floatingLabelText:"Точність",type:"number",value:this.props.precision,onChange:function(e){return t.props.changePrecision(e.target.value)}}),this.props.lssq&&u.default.createElement(s.TextField,{floatingLabelText:"Точки розбиття",type:"number",value:this.props.points,onChange:function(e){return t.props.changePoints(e.target.value)}}),u.default.createElement(s.RaisedButton,{label:"Обчислити",primary:!0,onClick:this.props.onCalcClick}))}}]),t}();d.defaultProps={func:"sin(x)",start:"0",end:"3",deg:"2",precision:"0.01",points:"10"},t.default=d},380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a,l,i,u,c,s,f,p,d,h,m,b,y,_,g,v=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),w=n(1),E=C(w),x=n(13),O=C(n(0)),T=n(66),P=C(n(288));function C(e){return e&&e.__esModule?e:{default:e}}function j(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function S(n,r,e,t,o){var a={};return Object.keys(t).forEach(function(e){a[e]=t[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(n,r,a),a=null),a}var M=(r=x.action.bound,o=x.action.bound,a=x.action.bound,l=x.action.bound,i=x.action.bound,u=x.action.bound,(0,T.observer)((g=_=function(e){function l(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return j(t=n=R(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this].concat(o))),"data",f,n),j(n,"func",p,n),j(n,"deg",d,n),j(n,"start",h,n),j(n,"end",m,n),j(n,"precision",b,n),j(n,"points",y,n),R(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,w.Component),v(l,[{key:"changeFunc",value:function(e){this.func=e}},{key:"changeDeg",value:function(e){this.deg=e}},{key:"changeStart",value:function(e){this.start=e}},{key:"changeEnd",value:function(e){this.end=e}},{key:"changePrecision",value:function(e){this.precision=e}},{key:"changePoints",value:function(e){this.points=e}},{key:"render",value:function(){var e=this;return console.log(this.props),E.default.createElement("div",{style:{width:"100%",margin:"0 auto"}},E.default.createElement(P.default,{func:this.func,deg:this.deg,start:this.start,end:this.end,precision:this.precision,points:this.points,onCalcClick:function(){return e.props.onCalcClick(e.func,e.deg,e.start,e.end,e.points,e.precision)},changeFunc:this.changeFunc,changeDeg:this.changeDeg,changeStart:this.changeStart,changeEnd:this.changeEnd,changePrecision:this.changePrecision,changePoints:this.changePoints,lssq:!0,minmax:!0}))}}]),l}(),_.propTypes={onCalcClick:O.default.func},f=S((s=g).prototype,"data",[x.observable],{enumerable:!0,initializer:function(){return null}}),p=S(s.prototype,"func",[x.observable],{enumerable:!0,initializer:function(){return"cos(x)"}}),d=S(s.prototype,"deg",[x.observable],{enumerable:!0,initializer:function(){return"2"}}),h=S(s.prototype,"start",[x.observable],{enumerable:!0,initializer:function(){return"1"}}),m=S(s.prototype,"end",[x.observable],{enumerable:!0,initializer:function(){return"3"}}),b=S(s.prototype,"precision",[x.observable],{enumerable:!0,initializer:function(){return"0.1"}}),y=S(s.prototype,"points",[x.observable],{enumerable:!0,initializer:function(){return"10"}}),S(s.prototype,"changeFunc",[r],Object.getOwnPropertyDescriptor(s.prototype,"changeFunc"),s.prototype),S(s.prototype,"changeDeg",[o],Object.getOwnPropertyDescriptor(s.prototype,"changeDeg"),s.prototype),S(s.prototype,"changeStart",[a],Object.getOwnPropertyDescriptor(s.prototype,"changeStart"),s.prototype),S(s.prototype,"changeEnd",[l],Object.getOwnPropertyDescriptor(s.prototype,"changeEnd"),s.prototype),S(s.prototype,"changePrecision",[i],Object.getOwnPropertyDescriptor(s.prototype,"changePrecision"),s.prototype),S(s.prototype,"changePoints",[u],Object.getOwnPropertyDescriptor(s.prototype,"changePoints"),s.prototype),c=s))||c);t.default=M}}]);