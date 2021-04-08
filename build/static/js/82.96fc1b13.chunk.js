(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[82],{1278:function(e,t,a){"use strict";var n=a(3),l=a(4),r=a(1),s=(a(0),a(5)),i=a(10),o=a(30),c=r.forwardRef((function(e,t){var a=e.absolute,i=void 0!==a&&a,o=e.classes,c=e.className,m=e.component,d=void 0===m?"hr":m,p=e.flexItem,u=void 0!==p&&p,b=e.light,f=void 0!==b&&b,h=e.orientation,g=void 0===h?"horizontal":h,E=e.role,x=void 0===E?"hr"!==d?"separator":void 0:E,y=e.variant,v=void 0===y?"fullWidth":y,N=Object(l.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return r.createElement(d,Object(n.a)({className:Object(s.default)(o.root,c,"fullWidth"!==v&&o[v],i&&o.absolute,u&&o.flexItem,f&&o.light,"vertical"===g&&o.vertical),role:x,ref:t},N))}));t.a=Object(i.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(o.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(c)},1557:function(e,t,a){"use strict";var n=a(4),l=a(1),r=a.n(l),s=a(1210),i=a(561),o=a(1274),c=a(1247),m=a(1259),d=a(1248),p=a(1275),u=a(1249),b=a(1363),f=a(558),h=a(1183),g=a(1151),E=a(5);const x=Object(g.a)((e=>{e.palette,Object(n.a)(e,["palette"]);return{productTable:{"& small":{height:15,width:50,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-child":{paddingLeft:"16px !important"}}}})),y=[{imgUrl:"/assets/images/products/headphone-2.jpg",name:"earphone",price:100,available:15},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"earphone",price:1500,available:30},{imgUrl:"/assets/images/products/iphone-2.jpg",name:"iPhone x",price:1900,available:35},{imgUrl:"/assets/images/products/iphone-1.jpg",name:"iPhone x",price:100,available:0},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"Head phone",price:1190,available:5}];t.a=()=>{const e=x();return r.a.createElement(s.a,{elevation:3,className:"pt-5 mb-6"},r.a.createElement("div",{className:"flex justify-between items-center px-6 mb-3"},r.a.createElement("span",{className:"card-title"},"top selling products"),r.a.createElement(i.a,{size:"small",defaultValue:"this_month",disableUnderline:!0},r.a.createElement(o.a,{value:"this_month"},"This Month"),r.a.createElement(o.a,{value:"last_month"},"Last Month"))),r.a.createElement("div",{className:"overflow-auto"},r.a.createElement(c.a,{className:Object(E.default)("whitespace-pre min-w-400",e.productTable)},r.a.createElement(m.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{className:"px-6",colSpan:4},"Name"),r.a.createElement(p.a,{className:"px-0",colSpan:2},"Revenue"),r.a.createElement(p.a,{className:"px-0",colSpan:2},"Stock Status"),r.a.createElement(p.a,{className:"px-0",colSpan:1},"Action"))),r.a.createElement(u.a,null,y.map(((e,t)=>r.a.createElement(d.a,{key:t,hover:!0},r.a.createElement(p.a,{className:"px-0 capitalize",colSpan:4,align:"left"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(b.a,{src:e.imgUrl}),r.a.createElement("p",{className:"m-0 ml-8"},e.name))),r.a.createElement(p.a,{className:"px-0 capitalize",align:"left",colSpan:2},"$",e.price>999?(e.price/1e3).toFixed(1)+"k":e.price),r.a.createElement(p.a,{className:"px-0",align:"left",colSpan:2},e.available?e.available<20?r.a.createElement("small",{className:"border-radius-4 bg-secondary text-white px-2 py-2px"},e.available," available"):r.a.createElement("small",{className:"border-radius-4 bg-primary text-white px-2 py-2px"},"in stock"):r.a.createElement("small",{className:"border-radius-4 bg-error text-white px-2 py-2px"},"out of stock")),r.a.createElement(p.a,{className:"px-0",colSpan:1},r.a.createElement(f.a,null,r.a.createElement(h.a,{color:"primary"},"edit"))))))))))}},2109:function(e,t,a){"use strict";a.r(t);var n=a(19),l=a(1),r=a.n(l),s=a(2133),i=a(2064),o=a(1209),c=a(1210),m=a(558),d=a(1183);var p=()=>r.a.createElement("div",null,r.a.createElement(o.a,{container:!0,spacing:3},[{icon:"card_giftcard",amount:10495,title:"TO BE PACKED"},{icon:"local_shipping",amount:30942,title:"TO BE SHIPPED"},{icon:"assignment_turned_in",amount:45269,title:"TO BE DELIVERED"},{icon:"assignment",amount:20965,title:"TO BE INVOICED"}].map(((e,t)=>r.a.createElement(o.a,{key:e.title,item:!0,md:3,sm:6,xs:12},r.a.createElement(c.a,{elevation:3,className:"p-5 flex-column justify-center items-center"},r.a.createElement("div",null,r.a.createElement(m.a,{size:"small",className:"p-2 bg-light-gray"},r.a.createElement(d.a,{className:"text-muted"},e.icon))),r.a.createElement("h3",{className:"mt-1 text-32"},e.amount.toLocaleString()),r.a.createElement("p",{className:"m-0 text-muted"},e.title))))))),u=a(1557),b=a(1524),f=a.n(b);var h=()=>r.a.createElement(f.a,{options:g,series:[{name:"Sale",data:[14,29,18,20,20,40,20,30,24,18,30,15]}],type:"line",height:400});const g={chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},colors:["#5d78ff","#fbaf0f"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:3},title:{text:"",align:"left"},grid:{},markers:{size:4,hover:{size:6}},xaxis:{categories:["January","February","March","April","May","June","July","August","Spetember","October","November","December"],title:{text:""},axisBorder:{show:!1}},yaxis:{title:{text:""}},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5}};var E=a(1278),x=a(561),y=a(1274);const v={labels:["Available","Low Stock","Out of Stock"],stroke:{width:0},colors:["rgba(var(--primary), 1)","rgba(var(--secondary), 1)","rgba(var(--error), 1)"],dataLabels:{enabled:!1},legend:{show:!1}};var N=()=>r.a.createElement(f.a,{options:v,series:[75,50,25],type:"donut"});var j=()=>r.a.createElement(l.Fragment,null,r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0,sm:8,xs:12},r.a.createElement("h5",{className:"mt-0 mb-4 text-muted"},"Sales Activity"),r.a.createElement(p,null)),r.a.createElement(o.a,{item:!0,sm:4,xs:12},r.a.createElement("div",{className:"flex-column h-full"},r.a.createElement("h5",{className:"mt-0 mb-4 text-muted"},"Inventory Summary"),r.a.createElement(c.a,{className:"p-5 flex justify-between items-center mb-4 h-full",elevation:3},r.a.createElement("span",null,"QUANTITY IN HAND"),r.a.createElement("h5",{className:"m-0"},"540")),r.a.createElement(c.a,{className:"p-5 flex justify-between items-center h-full",elevation:3},r.a.createElement("span",null,"QUANTITY TO BE RECEIVED"),r.a.createElement("h5",{className:"m-0"},"120")))),r.a.createElement(o.a,{item:!0,sm:6,xs:12},r.a.createElement(c.a,{className:"px-6 py-4"},r.a.createElement(o.a,{container:!0,spacing:3,alignItems:"center"},r.a.createElement(o.a,{item:!0,sm:7,xs:12},r.a.createElement("div",{className:"flex justify-between items-center py-3"},r.a.createElement("h5",{className:"font-normal text-error"},"Stockout Items"),r.a.createElement("h5",{className:"text-error"},"234")),r.a.createElement("div",{className:"flex justify-between items-center py-3"},r.a.createElement("h5",{className:"font-normal"},"Low Stock Items"),r.a.createElement("h5",null,"123")),r.a.createElement("div",{className:"flex justify-between items-center py-3"},r.a.createElement("h5",{className:"font-normal"},"Available Items"),r.a.createElement("h5",null,"3432"))),r.a.createElement(o.a,{item:!0,sm:5,xs:12},r.a.createElement(N,null))),r.a.createElement(E.a,{className:"mt-6"}),r.a.createElement("div",{className:"flex justify-between items-center p-4"},r.a.createElement("h5",{className:"m-0"},"Purchase Order"),r.a.createElement(x.a,{size:"small",defaultValue:"this_year",disableUnderline:!0},r.a.createElement(y.a,{value:"this_year"},"This Year"),r.a.createElement(y.a,{value:"last_year"},"Last Year"))),r.a.createElement("div",{className:"flex justify-around"},r.a.createElement("div",{className:"py-3 text-center"},r.a.createElement("p",null,"Quantity Ordered"),r.a.createElement("h4",{className:"text-primary"},"432")),r.a.createElement(E.a,{orientation:"vertical",flexItem:!0}),r.a.createElement("div",{className:"py-3 text-center"},r.a.createElement("p",null,"Total Cost"),r.a.createElement("h4",{className:"text-primary"},"$",432432..toLocaleString()))))),r.a.createElement(o.a,{item:!0,sm:6,xs:12},r.a.createElement(u.a,null))),r.a.createElement(c.a,{className:"mt-5 mb-6",elevation:3},r.a.createElement("div",{className:"flex justify-between items-center p-4"},r.a.createElement("h5",{className:"m-0"},"Sales Order Summery"),r.a.createElement(x.a,{size:"small",defaultValue:"this_year",disableUnderline:!0},r.a.createElement(y.a,{value:"this_year"},"This Year"),r.a.createElement(y.a,{value:"last_year"},"Last Year"))),r.a.createElement(h,null))),O=a(1115),w=a(48),k=a(3),S=a(4),C=(a(0),a(5)),I=a(13),L=a(10);var T=l.createContext({}),R=l.forwardRef((function(e,t){var a=e.align,n=void 0===a?"left":a,r=e.classes,s=e.className,i=Object(S.a)(e,["align","classes","className"]);return l.createElement(T.Provider,{value:{align:n}},l.createElement("ul",Object(k.a)({className:Object(C.default)(r.root,r["align".concat(Object(I.a)(n))],s),ref:t},i)))})),A=Object(L.a)((function(){return{root:{display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1},alignLeft:{},alignRight:{},alignAlternate:{}}}),{name:"MuiTimeline"})(R),D=a(2053),M=a(189);var _=l.createContext({}),U=l.forwardRef((function(e,t){var a=e.classes,n=e.className,r=Object(S.a)(e,["classes","className"]),s=l.useContext(T).align,i=void 0===s?"left":s,o=!1;return l.Children.forEach(e.children,(function(e){Object(M.a)(e,["TimelineOppositeContent"])&&(o=!0)})),l.createElement(_.Provider,{value:{classes:{content:a.content,oppositeContent:a.oppositeContent}}},l.createElement("li",Object(k.a)({className:Object(C.default)(a.root,a["align".concat(Object(I.a)(i))],n,!o&&a.missingOppositeContent),ref:t},r)))})),z=Object(L.a)((function(){return{root:{listStyle:"none",display:"flex",position:"relative",minHeight:70},alignLeft:{},alignRight:{flexDirection:"row-reverse"},alignAlternate:{"&:nth-child(even)":{flexDirection:"row-reverse","& $content":{textAlign:"right"},"& $oppositeContent":{textAlign:"left"}}},missingOppositeContent:{"&:before":{content:'""',flex:1,padding:"6px 16px"}},content:{},oppositeContent:{}}}),{name:"MuiTimelineItem"})(U),P=l.forwardRef((function(e,t){var a=e.classes,n=e.className,r=Object(S.a)(e,["classes","className"]);return l.createElement("div",Object(k.a)({className:Object(C.default)(a.root,n),ref:t},r))})),B=Object(L.a)((function(){return{root:{display:"flex",flexDirection:"column",flex:0,alignItems:"center"}}}),{name:"MuiTimelineSeparator"})(P),W=l.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.color,s=void 0===r?"grey":r,i=e.variant,o=void 0===i?"default":i,c=Object(S.a)(e,["classes","className","color","variant"]);return l.createElement("span",Object(k.a)({className:Object(C.default)(a.root,n,"inherit"!==s&&a["".concat(o).concat(Object(I.a)(s))]),ref:t},c))})),Y=Object(L.a)((function(e){return{root:{display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:e.shadows[2],marginTop:8,marginBottom:8},defaultGrey:{borderColor:"transparent",color:e.palette.grey[50],backgroundColor:e.palette.grey[400]},outlinedGrey:{boxShadow:"none",color:e.palette.grey.contrastText,borderColor:e.palette.grey[400],backgroundColor:"transparent"},defaultPrimary:{borderColor:"transparent",color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},outlinedPrimary:{boxShadow:"none",backgroundColor:"transparent",borderColor:e.palette.primary.main},defaultSecondary:{borderColor:"transparent",color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main},outlinedSecondary:{boxShadow:"none",backgroundColor:"transparent",borderColor:e.palette.secondary.main}}}),{name:"MuiTimelineDot"})(W),F=l.forwardRef((function(e,t){var a=e.classes,n=e.className,r=Object(S.a)(e,["classes","className"]);return l.createElement("span",Object(k.a)({className:Object(C.default)(a.root,n),ref:t},r))})),V=Object(L.a)((function(e){return{root:{width:2,backgroundColor:e.palette.grey[400],flexGrow:1}}}),{name:"MuiTimelineConnector"})(F),J=l.forwardRef((function(e,t){var a=e.classes,n=e.className,r=Object(S.a)(e,["classes","className"]),s=l.useContext(T).align,i=void 0===s?"left":s,o=l.useContext(_).classes,c=void 0===o?{}:o;return l.createElement("div",Object(k.a)({className:Object(C.default)(a.root,c.content,a["align".concat(Object(I.a)(i))],n),ref:t},r))})),G=Object(L.a)((function(){return{root:{flex:1,padding:"6px 16px"},alignRight:{textAlign:"right"}}}),{name:"MuiTimelineContent"})(J),H=a(1151);const $=Object(H.a)((e=>{e.palette,Object(S.a)(e,["palette"]);return{root:{"&:before":{display:"none !important"}}}}));var Q=({notification:e,isFirstIndex:t,isLastIndex:a})=>{const n=$();return r.a.createElement(l.Fragment,null,r.a.createElement(z,{classes:{root:n.root}},r.a.createElement(B,null,r.a.createElement(Y,{color:"primary",variant:t||a?"default":"outlined"}),r.a.createElement(V,null)),r.a.createElement(G,null,r.a.createElement("p",{className:"mt-0 mb-5 text-muted uppercase"},Object(D.a)(new Date(e.timestamp),"dd MMM, yyyy")),r.a.createElement("h4",{className:"mt-0 mb-4"},e.title),r.a.createElement("p",{className:Object(C.default)({"m-0":!0,"pb-8":!a})},e.subtitle))))};const K=[{title:"What is Lorem Ipsum?",subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",timestamp:"2020/09/15"},{title:"Why do we use it?",subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",timestamp:"2020/08/1"},{title:"Where can I get some?",subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",timestamp:"2020/07/05"},{title:"Where does it come from?",subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",timestamp:"2020/05/12"}];var X=()=>{const e=Object(w.a)(),t=Object(O.a)(e.breakpoints.down("xs"));return r.a.createElement(c.a,{className:Object(C.default)({"max-w-900 mx-auto":!0,"p-10":!t}),elevation:3},r.a.createElement(A,{align:"left"},K.map(((e,t)=>r.a.createElement(Q,{notification:e,isLastIndex:t===K.length-1,isFirstIndex:0===t,key:t})))))};t.default=()=>{const e=Object(l.useState)(0),t=Object(n.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"analytics m-sm-30"},r.a.createElement(s.a,{className:"mt-4 mb-6",value:a,onChange:(e,t)=>o(t),indicatorColor:"primary",textColor:"primary"},["Dashboard","Recent Updates"].map(((e,t)=>r.a.createElement(i.a,{className:"capitalize",value:t,label:e,key:t})))),0===a&&r.a.createElement(j,null),1===a&&r.a.createElement(X,null))}}}]);