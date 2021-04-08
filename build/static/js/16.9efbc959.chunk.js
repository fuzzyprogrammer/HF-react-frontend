(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[16],{1220:function(e,a,t){"use strict";var n=t(1),c=n.createContext();a.a=c},1228:function(e,a,t){"use strict";var n=t(1),c=n.createContext();a.a=c},1247:function(e,a,t){"use strict";var n=t(4),c=t(3),r=t(1),o=(t(0),t(5)),l=t(10),i=t(1228),s="table",d=r.forwardRef((function(e,a){var t=e.classes,l=e.className,d=e.component,p=void 0===d?s:d,u=e.padding,m=void 0===u?"default":u,b=e.size,g=void 0===b?"medium":b,f=e.stickyHeader,v=void 0!==f&&f,h=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),y=r.useMemo((function(){return{padding:m,size:g,stickyHeader:v}}),[m,g,v]);return r.createElement(i.a.Provider,{value:y},r.createElement(p,Object(c.a)({role:p===s?null:"table",ref:a,className:Object(o.default)(t.root,l,v&&t.stickyHeader)},h)))}));a.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(c.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},1248:function(e,a,t){"use strict";var n=t(3),c=t(4),r=t(1),o=(t(0),t(5)),l=t(10),i=t(1220),s=t(30),d=r.forwardRef((function(e,a){var t=e.classes,l=e.className,s=e.component,d=void 0===s?"tr":s,p=e.hover,u=void 0!==p&&p,m=e.selected,b=void 0!==m&&m,g=Object(c.a)(e,["classes","className","component","hover","selected"]),f=r.useContext(i.a);return r.createElement(d,Object(n.a)({ref:a,className:Object(o.default)(t.root,l,f&&{head:t.head,footer:t.footer}[f.variant],u&&t.hover,b&&t.selected),role:"tr"===d?null:"row"},g))}));a.a=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1249:function(e,a,t){"use strict";var n=t(3),c=t(4),r=t(1),o=(t(0),t(5)),l=t(10),i=t(1220),s={variant:"body"},d="tbody",p=r.forwardRef((function(e,a){var t=e.classes,l=e.className,p=e.component,u=void 0===p?d:p,m=Object(c.a)(e,["classes","className","component"]);return r.createElement(i.a.Provider,{value:s},r.createElement(u,Object(n.a)({className:Object(o.default)(t.root,l),ref:a,role:u===d?null:"rowgroup"},m)))}));a.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(p)},1259:function(e,a,t){"use strict";var n=t(3),c=t(4),r=t(1),o=(t(0),t(5)),l=t(10),i=t(1220),s={variant:"head"},d="thead",p=r.forwardRef((function(e,a){var t=e.classes,l=e.className,p=e.component,u=void 0===p?d:p,m=Object(c.a)(e,["classes","className","component"]);return r.createElement(i.a.Provider,{value:s},r.createElement(u,Object(n.a)({className:Object(o.default)(t.root,l),ref:a,role:u===d?null:"rowgroup"},m)))}));a.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(p)},1275:function(e,a,t){"use strict";var n=t(4),c=t(3),r=t(1),o=(t(0),t(5)),l=t(10),i=t(13),s=t(30),d=t(1228),p=t(1220),u=r.forwardRef((function(e,a){var t,l,s=e.align,u=void 0===s?"inherit":s,m=e.classes,b=e.className,g=e.component,f=e.padding,v=e.scope,h=e.size,y=e.sortDirection,O=e.variant,j=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=r.useContext(d.a),N=r.useContext(p.a),E=N&&"head"===N.variant;g?(l=g,t=E?"columnheader":"cell"):l=E?"th":"td";var k=v;!k&&E&&(k="col");var w=f||(x&&x.padding?x.padding:"default"),C=h||(x&&x.size?x.size:"medium"),z=O||N&&N.variant,R=null;return y&&(R="asc"===y?"ascending":"descending"),r.createElement(l,Object(c.a)({ref:a,className:Object(o.default)(m.root,m[z],b,"inherit"!==u&&m["align".concat(Object(i.a)(u))],"default"!==w&&m["padding".concat(Object(i.a)(w))],"medium"!==C&&m["size".concat(Object(i.a)(C))],"head"===z&&x&&x.stickyHeader&&m.stickyHeader),"aria-sort":R,role:t,scope:k},j))}));a.a=Object(l.a)((function(e){return{root:Object(c.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1540:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"d",(function(){return o})),t.d(a,"b",(function(){return l})),t.d(a,"a",(function(){return i})),t.d(a,"e",(function(){return s}));var n=t(20),c=t.n(n);const r=()=>c.a.get("/api/invoices/all"),o=e=>c.a.get("/api/invoices",{data:e}),l=e=>c.a.post("/api/invoices/delete",e),i=e=>c.a.post("/api/invoices/add",e),s=e=>c.a.post("/api/invoices/update",e)},2079:function(e,a,t){"use strict";t.r(a);var n=t(19),c=t(1),r=t.n(c),o=t(1152),l=t(1210),i=t(1247),s=t(1259),d=t(1248),p=t(1275),u=t(1249),m=t(1540),b=t(40),g=t(47),f=t(109),v=t(5);a.default=()=>{const e=Object(c.useState)([]),a=Object(n.a)(e,2),t=a[0],h=a[1],y=Object(c.useState)(null),O=Object(n.a)(y,2),j=O[0],x=O[1],N=Object(c.useState)(!1),E=Object(n.a)(N,2),k=E[0],w=E[1],C=Object(c.useState)(!0),z=Object(n.a)(C,2),R=z[0],A=z[1],H=Object(b.g)();Object(c.useEffect)((()=>(Object(m.c)().then((e=>{R&&h(e.data)})),()=>A(!1))),[R]);return r.a.createElement("div",{className:"m-sm-30"},r.a.createElement(g.a,{to:"/invoice/add"},r.a.createElement(o.a,{className:"mb-4",variant:"contained",color:"primary"},"Add Invoice")),r.a.createElement(l.a,{elevation:6,className:"w-full overflow-auto"},r.a.createElement(i.a,{className:"min-w-750"},r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{className:"pl-sm-24"},"Order No."),r.a.createElement(p.a,{className:"px-0"},"Bill From"),r.a.createElement(p.a,{className:"px-0"},"Bill To"),r.a.createElement(p.a,{className:"px-0"},"Status"),r.a.createElement(p.a,{className:"px-0"},"Actions"))),r.a.createElement(u.a,null,t.map(((e,a)=>r.a.createElement(d.a,{key:e.id},r.a.createElement(p.a,{className:"pl-sm-24 capitalize",align:"left"},e.orderNo),r.a.createElement(p.a,{className:"pl-0 capitalize",align:"left"},e.seller.name),r.a.createElement(p.a,{className:"pl-0 capitalize",align:"left"},e.buyer.name),r.a.createElement(p.a,{className:"pl-0 capitalize"},r.a.createElement("small",{className:Object(v.default)({"border-radius-4  text-white px-2 py-2px":!0,"bg-primary":"delivered"===e.status,"bg-secondary":"processing"===e.status,"bg-error":"pending"===e.status})},e.status)),r.a.createElement(p.a,{className:"pl-0"},r.a.createElement(o.a,{color:"primary",className:"mr-2",onClick:()=>{return a=e.id,void H.push("/invoice/".concat(a));var a}},"Open"),r.a.createElement(o.a,{color:"secondary",onClick:()=>(e=>{x(e),w(!0)})(e)},"Delete")))))))),r.a.createElement(f.d,{open:k,onConfirmDialogClose:()=>{w(!1)},onYesClick:()=>{Object(m.b)(j).then((e=>{R&&(h(e.data),w(!1))}))},text:"Are you sure to delete?"}))}}}]);