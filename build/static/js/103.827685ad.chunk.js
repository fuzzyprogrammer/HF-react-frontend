(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[103],{2147:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(109),r=t(19),m=t(1209),s=t(526),i=t(1431),o=t(1433),u=t(1434),d=t(1183),E=t(1152);function p(){const e=Object(n.useState)(0),a=Object(r.a)(e,2),t=a[0],c=a[1],p=["First Name","Last Name","Address"];return l.a.createElement("div",null,l.a.createElement(i.a,{activeStep:t,alternativeLabel:!0},p.map((e=>l.a.createElement(o.a,{key:e},l.a.createElement(u.a,null,e))))),l.a.createElement("div",null,t===p.length?l.a.createElement("div",null,l.a.createElement("div",{className:"flex items-center mb-4"},l.a.createElement(d.a,null,"done")," ",l.a.createElement("span",{className:"ml-2"},"Done")),l.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:()=>{c(0)}},"Reset")):l.a.createElement("div",null,function(e){switch(e){case 0:return l.a.createElement("form",{noValidate:!0,autoComplete:"off"},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(s.a,{className:"w-full",label:"First Name"})),l.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(s.a,{className:"w-full",label:"Middle Name"})),l.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(s.a,{className:"w-full",label:"Last Name"})),l.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(s.a,{className:"w-full",label:"Age"}))));case 1:return l.a.createElement(s.a,{label:"Company Name"});case 2:return l.a.createElement(s.a,{label:"Address"});default:return""}}(t),l.a.createElement("div",{className:"pt-6"},l.a.createElement(E.a,{variant:"contained",color:"secondary",disabled:0===t,onClick:()=>{c((e=>e-1))}},"Back"),l.a.createElement(E.a,{className:"ml-4",variant:"contained",color:"primary",onClick:()=>{c((e=>e+1))}},t===p.length-1?"Finish":"Next")))))}var N=t(1461),b=t(201),v=t(556),g=t(1151);const f=Object(g.a)((e=>({root:{width:"90%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)}})));function h(){const e=f(),a=Object(n.useState)(0),t=Object(r.a)(a,2),c=t[0],m=t[1],d=["Select campaign settings","Create an ad group","Create an ad"];function p(){m((e=>e+1))}function g(){m((e=>e-1))}return l.a.createElement("div",{className:e.root},l.a.createElement(i.a,{activeStep:c,orientation:"vertical"},d.map(((a,t)=>l.a.createElement(o.a,{key:a},l.a.createElement(u.a,null,a),l.a.createElement(N.a,null,l.a.createElement("div",null,(e=>{switch(e){case 0:return l.a.createElement(s.a,{label:"First Name"});case 1:return l.a.createElement(s.a,{label:"Last Name"});case 2:return l.a.createElement(s.a,{label:"Address"});default:return""}})(t)),l.a.createElement("div",{className:e.actionsContainer},l.a.createElement("div",null,l.a.createElement(E.a,{disabled:0===c,onClick:g,className:e.button},"Back"),l.a.createElement(E.a,{variant:"contained",color:"primary",onClick:p,className:e.button},c===d.length-1?"Finish":"Next")))))))),c===d.length&&l.a.createElement(b.a,{square:!0,elevation:0,className:e.resetContainer},l.a.createElement(v.a,null,"All steps completed - you're finished"),l.a.createElement(E.a,{variant:"outlined",color:"secondary",onClick:function(){m(0)},className:e.button},"Reset")))}a.default=()=>l.a.createElement("div",{className:"m-sm-30"},l.a.createElement(c.z,{title:"Horizontal Stepper"},l.a.createElement(p,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(c.z,{title:"Vertical Stepper"},l.a.createElement(h,null)))}}]);