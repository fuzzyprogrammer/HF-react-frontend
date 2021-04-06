(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[58],{1224:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(1);function n(e){var a=r.useState(e),t=a[0],n=a[1],o=e||t;return r.useEffect((function(){null==t&&n("mui-".concat(Math.round(1e5*Math.random())))}),[t]),o}},1230:function(e,a,t){"use strict";var r=t(1),n=r.createContext();a.a=n},1233:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t(1),n=t(1230);function o(){return r.useContext(n.a)}},1261:function(e,a,t){"use strict";var r=t(3),n=t(4),o=t(1),l=(t(0),t(5)),c=t(10),s=o.forwardRef((function(e,a){var t=e.classes,c=e.className,s=e.row,i=void 0!==s&&s,d=Object(n.a)(e,["classes","className","row"]);return o.createElement("div",Object(r.a)({className:Object(l.default)(t.root,c,i&&t.row),ref:a},d))}));a.a=Object(c.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(s)},1268:function(e,a,t){"use strict";var r=t(3),n=t(19),o=t(4),l=t(1),c=(t(0),t(1261)),s=t(25),i=t(188),d=t(1230),u=t(1224),m=l.forwardRef((function(e,a){var t=e.actions,m=e.children,b=e.name,f=e.value,p=e.onChange,h=Object(o.a)(e,["actions","children","name","value","onChange"]),v=l.useRef(null),g=Object(i.a)({controlled:f,default:e.defaultValue,name:"RadioGroup"}),O=Object(n.a)(g,2),j=O[0],E=O[1];l.useImperativeHandle(t,(function(){return{focus:function(){var e=v.current.querySelector("input:not(:disabled):checked");e||(e=v.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var y=Object(s.a)(a,v),w=Object(u.a)(b);return l.createElement(d.a.Provider,{value:{name:w,onChange:function(e){E(e.target.value),p&&p(e,e.target.value)},value:j}},l.createElement(c.a,Object(r.a)({role:"radiogroup",ref:y},h),m))}));a.a=m},1379:function(e,a,t){"use strict";var r=t(3),n=t(4),o=t(1),l=(t(0),t(5)),c=t(348),s=t(73),i=Object(s.a)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(s.a)(o.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=t(10);var m=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var a=e.checked,t=e.classes,r=e.fontSize;return o.createElement("div",{className:Object(l.default)(t.root,a&&t.checked)},o.createElement(i,{fontSize:r}),o.createElement(d,{fontSize:r,className:t.layer}))})),b=t(30),f=t(13),p=t(97),h=t(1233),v=o.createElement(m,{checked:!0}),g=o.createElement(m,null),O=o.forwardRef((function(e,a){var t=e.checked,s=e.classes,i=e.color,d=void 0===i?"secondary":i,u=e.name,m=e.onChange,b=e.size,O=void 0===b?"medium":b,j=Object(n.a)(e,["checked","classes","color","name","onChange","size"]),E=Object(h.a)(),y=t,w=Object(p.a)(m,E&&E.onChange),C=u;return E&&("undefined"===typeof y&&(y=E.value===e.value),"undefined"===typeof C&&(C=E.name)),o.createElement(c.a,Object(r.a)({color:d,type:"radio",icon:o.cloneElement(g,{fontSize:"small"===O?"small":"default"}),checkedIcon:o.cloneElement(v,{fontSize:"small"===O?"small":"default"}),classes:{root:Object(l.default)(s.root,s["color".concat(Object(f.a)(d))]),checked:s.checked,disabled:s.disabled},name:C,checked:y,onChange:w,ref:a},j))}));a.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(b.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(b.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(O)},1485:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var r=t(26),n=t(1),o=(t(0),t(1406)),l=t(5),c=(t(3),t(4),t(1151)),s=t(1428),i=t(1448),d=(t(1424),t(19),t(1429)),u=(t(347),t(129),t(1279),t(1280),t(1283),Object(c.a)({toolbar:{flexDirection:"column",alignItems:"flex-start"},toolbarLandscape:{padding:16},dateLandscape:{marginRight:16}},{name:"MuiPickersDatePickerRoot"})),m=function(e){var a=e.date,t=e.views,r=e.setOpenView,c=e.isLandscape,d=e.openView,m=Object(o.b)(),b=u(),f=Object(n.useMemo)((function(){return Object(i.d)(t)}),[t]),p=Object(n.useMemo)((function(){return Object(i.b)(t)}),[t]);return Object(n.createElement)(s.b,{isLandscape:c,className:Object(l.default)(!f&&b.toolbar,c&&b.toolbarLandscape)},Object(n.createElement)(s.c,{variant:f?"h3":"subtitle1",onClick:function(){return r("year")},selected:"year"===d,label:m.getYearText(a)}),!f&&!p&&Object(n.createElement)(s.c,{variant:"h4",selected:"date"===d,onClick:function(){return r("date")},align:c?"left":"center",label:m.getDatePickerHeaderText(a),className:Object(l.default)(c&&b.dateLandscape)}),p&&Object(n.createElement)(s.c,{variant:"h4",onClick:function(){return r("month")},selected:"month"===d,label:m.getMonthText(a)}))};function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}var f=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(t,!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},d.c,{openTo:"date",views:["year","date"]});function p(e){var a=Object(o.b)();return{getDefaultFormat:function(){return Object(i.c)(e.views,a)}}}var h=Object(s.g)({useOptions:p,Input:s.d,useState:s.i,DefaultToolbarComponent:m}),v=Object(s.g)({useOptions:p,Input:s.a,useState:s.e,DefaultToolbarComponent:m});h.defaultProps=f,v.defaultProps=f},1560:function(e,a,t){"use strict";var r=t(7),n=t(19),o=t(1),l=t.n(o),c=t(63),s=t(1209),i=t(1268),d=t(1153),u=t(1379),m=t(1154),b=t(1152),f=t(1183),p=t(1406),h=t(1485),v=t(1464);a.a=()=>{const e=Object(o.useState)({date:new Date}),a=Object(n.a)(e,2),t=a[0],g=a[1];Object(o.useEffect)((()=>(c.ValidatorForm.addValidationRule("isPasswordMatch",(e=>(console.log(e),e===t.password))),()=>c.ValidatorForm.removeValidationRule("isPasswordMatch"))),[t.password]);const O=e=>{e.persist(),g(Object(r.a)(Object(r.a)({},t),{},{[e.target.name]:e.target.value}))},j=t.username,E=t.firstName,y=t.creditCard,w=t.mobile,C=t.password,k=t.confirmPassword,x=t.gender,P=t.date,M=t.email;return l.a.createElement("div",null,l.a.createElement(c.ValidatorForm,{onSubmit:e=>{},onError:()=>null},l.a.createElement(s.a,{container:!0,spacing:6},l.a.createElement(s.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(c.TextValidator,{className:"mb-4 w-full",label:"Username (Min length 4, Max length 9)",onChange:O,type:"text",name:"username",value:j||"",validators:["required","minStringLength: 4","maxStringLength: 9"],errorMessages:["this field is required"]}),l.a.createElement(c.TextValidator,{className:"mb-4 w-full",label:"First Name",onChange:O,type:"text",name:"firstName",value:E||"",validators:["required"],errorMessages:["this field is required"]}),l.a.createElement(c.TextValidator,{className:"mb-4 w-full",label:"Email",onChange:O,type:"email",name:"email",value:M||"",validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),l.a.createElement(p.a,{utils:v.a},l.a.createElement(h.a,{className:"mb-4 w-full",margin:"none",id:"mui-pickers-date",label:"Date picker",inputVariant:"standard",type:"text",autoOk:!0,value:P,onChange:e=>{g(Object(r.a)(Object(r.a)({},t),{},{date:e}))},KeyboardButtonProps:{"aria-label":"change date"}})),l.a.createElement(c.TextValidator,{className:"mb-8 w-full",label:"Credit Card",onChange:O,type:"number",name:"creditCard",value:y||"",validators:["required","minStringLength:16","maxStringLength: 16"],errorMessages:["this field is required"]})),l.a.createElement(s.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(c.TextValidator,{className:"mb-4 w-full",label:"Mobile Nubmer",onChange:O,type:"text",name:"mobile",value:w||"",validators:["required"],errorMessages:["this field is required"]}),l.a.createElement(c.TextValidator,{className:"mb-4 w-full",label:"Password",onChange:O,name:"password",type:"password",value:C||"",validators:["required"],errorMessages:["this field is required"]}),l.a.createElement(c.TextValidator,{className:"mb-4 w-full",label:"Confirm Password",onChange:O,name:"confirmPassword",type:"password",value:k||"",validators:["required","isPasswordMatch"],errorMessages:["this field is required","password didn't match"]}),l.a.createElement(i.a,{className:"mb-4",value:x||"",name:"gender",onChange:O,row:!0},l.a.createElement(d.a,{value:"Male",control:l.a.createElement(u.a,{color:"secondary"}),label:"Male",labelPlacement:"end"}),l.a.createElement(d.a,{value:"Female",control:l.a.createElement(u.a,{color:"secondary"}),label:"Female",labelPlacement:"end"}),l.a.createElement(d.a,{value:"Others",control:l.a.createElement(u.a,{color:"secondary"}),label:"Others",labelPlacement:"end"})),l.a.createElement(d.a,{control:l.a.createElement(m.a,null),label:"I have read and agree to the terms of service."}))),l.a.createElement(b.a,{color:"primary",variant:"contained",type:"submit"},l.a.createElement(f.a,null,"send"),l.a.createElement("span",{className:"pl-2 capitalize"},"Submit"))))}},2080:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(109),l=t(1560),c=t(1210);class s extends r.Component{render(){return n.a.createElement("div",{className:"m-sm-30"},n.a.createElement("div",{className:"mb-sm-30"},n.a.createElement(o.b,{routeSegments:[{name:"Forms",path:"/forms"},{name:"Basic"}]})),n.a.createElement(c.a,{className:"px-6 pt-2 pb-4"},n.a.createElement(l.a,null)))}}a.default=s}}]);