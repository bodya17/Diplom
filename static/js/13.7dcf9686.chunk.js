(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{286:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}(),o=a(1),u=h(o),i=a(298),c=a(300),f=a(71),s=h(a(318)),d=h(a(293)),p=h(a(295)),m=h(a(296)),b=a(294);function h(e){return e&&e.__esModule?e:{default:e}}var y=(0,f.inject)("loader")(n=(0,f.observer)(n=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={data:null},e.clickCalcHandler=e.clickCalcHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),l(t,[{key:"clickCalcHandler",value:function(e,t,a){var n=this;this.props.loader.showLoader(),fetch(b.LSSQ_DISCRETE_URL,{method:"POST",body:JSON.stringify({x_vals:e,y_vals:t,deg:a})}).then(function(e){return e.json()}).then(function(e){n.props.loader.hideLoader(),n.setState({data:e})}).catch(function(e){console.log(e),n.props.loader.hideLoader()})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(s.default,{onCalcClick:this.clickCalcHandler}),this.state.data&&u.default.createElement(c.Card,null,u.default.createElement(c.CardText,null,u.default.createElement(i.Table,null,u.default.createElement(i.TableBody,{displayRowCheckbox:!1},u.default.createElement(i.TableRow,null,u.default.createElement(i.TableRowColumn,null,"Аналітичний вигляд многочлена"),u.default.createElement(i.TableRowColumn,null,u.default.createElement(m.default,{formula:this.state.data.formula.replace((0,p.default)(4),"$1")}))),u.default.createElement(i.TableRow,null,u.default.createElement(i.TableRowColumn,null,"Значення ",u.default.createElement("i",null,"x")," в якому досягається максимальна похибка"),u.default.createElement(i.TableRowColumn,null,this.state.data.x_error.toFixed(5))),u.default.createElement(i.TableRow,null,u.default.createElement(i.TableRowColumn,null,"Максимальна похибка"),u.default.createElement(i.TableRowColumn,null,this.state.data.max_error.toFixed(5)))))),u.default.createElement(d.default,{data:[{x:this.state.data.x_approx,y:this.state.data.approximation,name:"Апроксимація"},{x:this.state.data.x_vals,y:this.state.data.y_vals,mode:"markers",name:"Табл. дані"},r({},this.state.data.max_error_line,{name:"Максимальна похибка",mode:"lines"})]}),u.default.createElement(d.default,{layout:{title:"Функція похибки"},data:[r({},this.state.data.error_plot)]}),u.default.createElement("h1",null,"Час рахування: "+this.state.data.computation_time.toFixed(2))))}}]),t}())||n)||n;t.default=y},346:function(e,t){var f=1/0,d=9007199254740991,s=17976931348623157e292,p=NaN,m="[object Function]",b="[object GeneratorFunction]",h="[object Symbol]",y=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,E=/^0o[0-7]+$/i,_=/^(?:0|[1-9]\d*)$/,x=parseInt,C=Object.prototype.toString,g=Math.ceil,j=Math.max;function O(e,t,a){var n=-1,r=e.length;t<0&&(t=r<-t?0:r+t),(a=r<a?r:a)<0&&(a+=r),r=a<t?0:a-t>>>0,t>>>=0;for(var l=Array(r);++n<r;)l[n]=e[n+t];return l}function T(e,t,a){if(!R(a))return!1;var n,r,l,o,u,i,c,f,s=typeof t;return!!("number"==s?null!=(u=a)&&("number"==typeof(f=u.length)&&-1<f&&f%1==0&&f<=d)&&((c=R(i=u)?C.call(i):"")!=m&&c!=b)&&(l=t,(o=null==(o=a.length)?d:o)&&("number"==typeof l||_.test(l))&&-1<l&&l%1==0&&l<o):"string"==s&&t in a)&&((n=a[t])===(r=e)||n!=n&&r!=r)}function R(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=function(e,t,a){var n,r,l;t=(a?T(e,t,a):void 0===t)?1:j((n=(l=t)?(l=function(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||(a=t)&&"object"==typeof a&&C.call(t)==h)return p;var t,a;if(R(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=R(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(y,"");var r=w.test(e);return r||E.test(e)?x(e.slice(2),r?2:8):v.test(e)?p:+e}(l))!==f&&l!==-f?l==l?l:0:(l<0?-1:1)*s:0===l?l:0,r=n%1,n==n?r?n-r:n:0),0);var o=e?e.length:0;if(!o||t<1)return[];for(var u=0,i=0,c=Array(g(o/t));u<o;)c[i++]=O(e,u,u+=t);return c}}}]);