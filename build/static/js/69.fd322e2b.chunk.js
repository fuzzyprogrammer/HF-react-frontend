(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[69],{1128:function(e,a,t){"use strict";t.r(a);var l=t(346);t.d(a,"default",(function(){return l.a}))},1219:function(e,a,t){"use strict";var l=t(548);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=n.default.memo(n.default.forwardRef((function(a,t){return n.default.createElement(i.default,(0,r.default)({ref:t},a),e)})));0;return t.muiName=i.default.muiName,t};var r=l(t(1260)),n=l(t(1)),i=l(t(1128))},1260:function(e,a){function t(){return e.exports=t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},t.apply(this,arguments)}e.exports=t},1623:function(e,a,t){"use strict";var l=t(548);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(1)),n=(0,l(t(1219)).default)(r.default.createElement("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp");a.default=n},1916:function(e,a,t){"use strict";var l=t(548);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(1)),n=(0,l(t(1219)).default)(r.default.createElement("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}),"VolumeDown");a.default=n},2121:function(e,a,t){"use strict";t.r(a);var l=t(1),r=t.n(l),n=t(19),i=t(1151),c=t(1209),u=t(556),s=t(1916),m=t.n(s),o=t(1623),d=t.n(o),v=t(2055);const b=Object(i.a)({root:{width:200}});function E(){const e=b(),a=r.a.useState(30),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"continuous-slider",gutterBottom:!0},"Volume"),r.a.createElement(c.a,{container:!0,spacing:2},r.a.createElement(c.a,{item:!0},r.a.createElement(m.a,null)),r.a.createElement(c.a,{item:!0,xs:!0},r.a.createElement(v.a,{value:l,onChange:(e,a)=>{i(a)},"aria-labelledby":"continuous-slider"})),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,null))),r.a.createElement(v.a,{disabled:!0,defaultValue:30,"aria-labelledby":"continuous-slider"}))}const f=Object(i.a)((e=>({root:{width:300},margin:{height:e.spacing(3)}}))),p=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function g(e){return"".concat(e,"\xb0C")}function y(e){return p.findIndex((a=>a.value===e))+1}function h(){const e=f();return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"discrete-slider",gutterBottom:!0},"Temperature"),r.a.createElement(v.a,{defaultValue:20,getAriaValueText:g,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:10,marks:!0}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-custom",gutterBottom:!0},"Custom marks"),r.a.createElement(v.a,{defaultValue:20,getAriaValueText:g,"aria-labelledby":"discrete-slider-custom",step:10,valueLabelDisplay:"auto",marks:p}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-restrict",gutterBottom:!0},"Restricted values"),r.a.createElement(v.a,{defaultValue:20,valueLabelFormat:y,getAriaValueText:g,"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:p}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-always",gutterBottom:!0},"Always visible"),r.a.createElement(v.a,{defaultValue:80,getAriaValueText:g,"aria-labelledby":"discrete-slider-always",step:10,marks:p,valueLabelDisplay:"on"}))}const V=Object(i.a)({root:{width:300}});function N(e){return"".concat(e,"\xb0C")}function C(){const e=V(),a=r.a.useState([20,37]),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"range-slider",gutterBottom:!0},"Temperature range"),r.a.createElement(v.a,{value:l,onChange:(e,a)=>{i(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:N}))}var x=t(352);const w=Object(i.a)({root:{width:250},input:{width:42}});function O(){const e=w(),a=r.a.useState(30),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"input-slider",gutterBottom:!0},"Volume"),r.a.createElement(c.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,null)),r.a.createElement(c.a,{item:!0,xs:!0},r.a.createElement(v.a,{value:"number"===typeof l?l:0,onChange:(e,a)=>{i(a)},"aria-labelledby":"input-slider"})),r.a.createElement(c.a,{item:!0},r.a.createElement(x.a,{className:e.input,value:l,margin:"dense",onChange:e=>{i(""===e.target.value?"":Number(e.target.value))},onBlur:()=>{l<0?i(0):l>100&&i(100)},inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"input-slider"}}))))}const j=Object(i.a)({root:{height:300}});function T(e){return"".concat(e,"\xb0C")}const z=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function S(){const e=j();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"vertical-slider",gutterBottom:!0},"Temperature"),r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{orientation:"vertical",getAriaValueText:T,defaultValue:30,"aria-labelledby":"vertical-slider"}),r.a.createElement(v.a,{disabled:!0,orientation:"vertical",getAriaValueText:T,defaultValue:30,"aria-labelledby":"vertical-slider"}),r.a.createElement(v.a,{orientation:"vertical",defaultValue:[20,37],"aria-labelledby":"vertical-slider",getAriaValueText:T,marks:z})))}var A=t(109);a.default=()=>r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(A.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Slider"}]})),r.a.createElement(A.z,{title:"Continuous Slider"},r.a.createElement(E,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(A.z,{title:"Discrete Slider"},r.a.createElement(h,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(A.z,{title:"Range Slider"},r.a.createElement(C,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(A.z,{title:"Slider with Input"},r.a.createElement(O,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(A.z,{title:"Vertical Slider"},r.a.createElement(S,null)))}}]);