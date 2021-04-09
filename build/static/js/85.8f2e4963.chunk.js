(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[85],{1277:function(e,a,t){"use strict";var l=t(3),r=t(19),n=t(4),c=t(26),i=t(1),m=t(22),o=(t(0),t(5)),s=t(1114),d=t(30),u=t(10),p=t(13),b=t(351),v=t(2062),f=t(25),E=t(1224),g=t(95),h=t(345),x=t(188),O=t(48);function N(e){return Math.round(1e5*e)/1e5}var j=!1,y=null;var w=i.forwardRef((function(e,a){var t=e.arrow,c=void 0!==t&&t,d=e.children,u=e.classes,N=e.disableFocusListener,w=void 0!==N&&N,T=e.disableHoverListener,k=void 0!==T&&T,C=e.disableTouchListener,z=void 0!==C&&C,I=e.enterDelay,S=void 0===I?100:I,P=e.enterNextDelay,L=void 0===P?0:P,A=e.enterTouchDelay,D=void 0===A?700:A,M=e.id,R=e.interactive,B=void 0!==R&&R,F=e.leaveDelay,W=void 0===F?0:F,H=e.leaveTouchDelay,K=void 0===H?1500:H,_=e.onClose,$=e.onOpen,J=e.open,U=e.placement,V=void 0===U?"bottom":U,q=e.PopperComponent,G=void 0===q?v.a:q,Q=e.PopperProps,X=e.title,Y=e.TransitionComponent,Z=void 0===Y?b.a:Y,ee=e.TransitionProps,ae=Object(n.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),te=Object(O.a)(),le=i.useState(),re=le[0],ne=le[1],ce=i.useState(null),ie=ce[0],me=ce[1],oe=i.useRef(!1),se=i.useRef(),de=i.useRef(),ue=i.useRef(),pe=i.useRef(),be=Object(x.a)({controlled:J,default:!1,name:"Tooltip",state:"open"}),ve=Object(r.a)(be,2),fe=ve[0],Ee=ve[1],ge=fe,he=Object(E.a)(M);i.useEffect((function(){return function(){clearTimeout(se.current),clearTimeout(de.current),clearTimeout(ue.current),clearTimeout(pe.current)}}),[]);var xe=function(e){clearTimeout(y),j=!0,Ee(!0),$&&$(e)},Oe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(a){var t=d.props;"mouseover"===a.type&&t.onMouseOver&&e&&t.onMouseOver(a),oe.current&&"touchstart"!==a.type||(re&&re.removeAttribute("title"),clearTimeout(de.current),clearTimeout(ue.current),S||j&&L?(a.persist(),de.current=setTimeout((function(){xe(a)}),j?L:S)):xe(a))}},Ne=Object(h.a)(),je=Ne.isFocusVisible,ye=Ne.onBlurVisible,we=Ne.ref,Te=i.useState(!1),ke=Te[0],Ce=Te[1],ze=function(){ke&&(Ce(!1),ye())},Ie=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(a){re||ne(a.currentTarget),je(a)&&(Ce(!0),Oe()(a));var t=d.props;t.onFocus&&e&&t.onFocus(a)}},Se=function(e){clearTimeout(y),y=setTimeout((function(){j=!1}),800+W),Ee(!1),_&&_(e),clearTimeout(se.current),se.current=setTimeout((function(){oe.current=!1}),te.transitions.duration.shortest)},Pe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(a){var t=d.props;"blur"===a.type&&(t.onBlur&&e&&t.onBlur(a),ze()),"mouseleave"===a.type&&t.onMouseLeave&&a.currentTarget===re&&t.onMouseLeave(a),clearTimeout(de.current),clearTimeout(ue.current),a.persist(),ue.current=setTimeout((function(){Se(a)}),W)}},Le=function(e){oe.current=!0;var a=d.props;a.onTouchStart&&a.onTouchStart(e)},Ae=Object(f.a)(ne,a),De=Object(f.a)(we,Ae),Me=i.useCallback((function(e){Object(g.a)(De,m.findDOMNode(e))}),[De]),Re=Object(f.a)(d.ref,Me);""===X&&(ge=!1);var Be=!ge&&!k,Fe=Object(l.a)({"aria-describedby":ge?he:null,title:Be&&"string"===typeof X?X:null},ae,d.props,{className:Object(o.default)(ae.className,d.props.className),onTouchStart:Le,ref:Re}),We={};z||(Fe.onTouchStart=function(e){Le(e),clearTimeout(ue.current),clearTimeout(se.current),clearTimeout(pe.current),e.persist(),pe.current=setTimeout((function(){Oe()(e)}),D)},Fe.onTouchEnd=function(e){d.props.onTouchEnd&&d.props.onTouchEnd(e),clearTimeout(pe.current),clearTimeout(ue.current),e.persist(),ue.current=setTimeout((function(){Se(e)}),K)}),k||(Fe.onMouseOver=Oe(),Fe.onMouseLeave=Pe(),B&&(We.onMouseOver=Oe(!1),We.onMouseLeave=Pe(!1))),w||(Fe.onFocus=Ie(),Fe.onBlur=Pe(),B&&(We.onFocus=Ie(!1),We.onBlur=Pe(!1)));var He=i.useMemo((function(){return Object(s.a)({popperOptions:{modifiers:{arrow:{enabled:Boolean(ie),element:ie}}}},Q)}),[ie,Q]);return i.createElement(i.Fragment,null,i.cloneElement(d,Fe),i.createElement(G,Object(l.a)({className:Object(o.default)(u.popper,B&&u.popperInteractive,c&&u.popperArrow),placement:V,anchorEl:re,open:!!re&&ge,id:Fe["aria-describedby"],transition:!0},We,He),(function(e){var a=e.placement,t=e.TransitionProps;return i.createElement(Z,Object(l.a)({timeout:te.transitions.duration.shorter},t,ee),i.createElement("div",{className:Object(o.default)(u.tooltip,u["tooltipPlacement".concat(Object(p.a)(a.split("-")[0]))],oe.current&&u.touch,c&&u.tooltipArrow)},X,c?i.createElement("span",{className:u.arrow,ref:me}):null))})))}));a.a=Object(u.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}},tooltip:{backgroundColor:Object(d.d)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(N(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(d.d)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(N(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(c.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(c.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(c.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(c.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip",flip:!1})(w)},1409:function(e,a,t){"use strict";var l=t(3),r=t(4),n=t(1),c=(t(0),t(5)),i=t(556),m=t(10),o=t(111),s=n.forwardRef((function(e,a){var t=e.children,m=e.classes,s=e.className,d=e.component,u=void 0===d?"div":d,p=e.disablePointerEvents,b=void 0!==p&&p,v=e.disableTypography,f=void 0!==v&&v,E=e.position,g=e.variant,h=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),x=Object(o.b)()||{},O=g;return g&&x.variant,x&&!O&&(O=x.variant),n.createElement(o.a.Provider,{value:null},n.createElement(u,Object(l.a)({className:Object(c.default)(m.root,s,b&&m.disablePointerEvents,x.hiddenLabel&&m.hiddenLabel,"filled"===O&&m.filled,{start:m.positionStart,end:m.positionEnd}[E],"dense"===x.margin&&m.marginDense),ref:a},h),"string"!==typeof t||f?t:n.createElement(i.a,{color:"textSecondary"},t)))}));a.a=Object(m.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(s)},2124:function(e,a,t){"use strict";t.r(a);var l=t(7),r=t(4),n=t(1),c=t.n(n),i=t(558),m=t(1183),o=t(1277),s=t(1363),d=t(1153),u=t(1154),p=t(19),b=t(1495),v=t(1115),f=t(1207),E=t(352),g=t(1152),h=t(1278),x=t(526),O=t(1209),N=t(1210),j=t(1274),y=t(48),w=t(113),T=t(1421),k=t.n(T),C=t(109),z=t(202),I=t(50);var S=({open:e,card:a,handleClose:t})=>{const r=Object(n.useState)({}),b=Object(p.a)(r,2),T=b[0],S=b[1],P=Object(z.c)(),L=Object(y.a)(),A=Object(v.a)(L.breakpoints.down("sm")),D=Object(z.d)((e=>e)).user,M=void 0===D?{}:D,R=Object(z.d)((e=>e.scrumboard)),B=R.board,F=void 0===B?{}:B,W=R.memberList,H=void 0===W?[]:W,K=R.labelList,_=void 0===K?[]:K,$=()=>{t()},J=e=>{let a=e.target,t=a.value;if("avatar"===a.name){let e=T.cardMembers,r=T.boardMembers.find((e=>e.id===t));a.checked?(e.push(r),S(Object(l.a)(Object(l.a)({},T),{},{cardMembers:e}))):(e.splice(e.indexOf(r),1),S(Object(l.a)(Object(l.a)({},T),{},{cardMembers:e})))}else if("label"===a.name){let e=T.labels,r=_.find((e=>e.id===parseInt(t)));a.checked?(e.push(r),S(Object(l.a)(Object(l.a)({},T),{},{labels:e}))):(e.splice(e.indexOf(r),1),S(Object(l.a)(Object(l.a)({},T),{},{labels:e})))}else"Enter"!==e.key||e.shiftKey||"commentText"!==a.name?S(Object(l.a)(Object(l.a)({},T),{},{[e.target.name]:e.target.value})):(S(Object(l.a)(Object(l.a)({},T),{},{[e.target.name]:e.target.value})),U())},U=()=>{let e=T.comments,a=void 0===e?[]:e,t=T.commentText;""!==t.trim()&&(a.push({id:Object(w.c)(),uid:M.userId,text:t.trim(),time:new Date}),t=""),S(Object(l.a)(Object(l.a)({},T),{},{comments:a,commentText:t}))};Object(n.useEffect)((()=>{let e=a.members,t=void 0===e?[]:e,r=a.labels,n=void 0===r?[]:r,c=t.map((e=>H.find((a=>a.id===e)))),i=n.map((e=>_.find((a=>a.id===e)))),m=F.members.map((e=>H.find((a=>a.id===e.id))));S((e=>Object(l.a)(Object(l.a)(Object(l.a)({},e),a),{},{boardId:F.id,cardMembers:c,boardMembers:m,labels:[...i]})))}),[a,_,H,F.id,F.members]);let V=T.title,q=T.cardMembers,G=void 0===q?[]:q,Q=T.boardMembers,X=void 0===Q?[]:Q,Y=T.labels,Z=void 0===Y?[]:Y,ee=T.description,ae=T.attachments,te=void 0===ae?[]:ae,le=T.comments,re=void 0===le?[]:le,ne=T.commentText;return c.a.createElement(f.a,{onClose:$,open:e,fullScreen:A,fullWidth:!0,scroll:"body"},c.a.createElement("div",{className:"scrum-board"},c.a.createElement("div",{className:"px-sm-24 pt-sm-24"},c.a.createElement("div",{className:"flex items-center"},c.a.createElement("div",{className:"flex items-center flex-grow"},c.a.createElement(m.a,{className:"text-muted"},"assignment"),c.a.createElement(E.a,{className:"flex-grow  ml-3 pl-3px pr-2 capitalize font-medium text-16",type:"text",autoFocus:!0,name:"title",onChange:J,disableUnderline:!0,value:V})),c.a.createElement(i.a,{size:"small",onClick:$},c.a.createElement(m.a,null,"clear"))),c.a.createElement("div",{className:"ml-10"},c.a.createElement("p",{className:"m-0 mb-4 text-small text-muted"},"Tech Startup Board Hot Backlog"),c.a.createElement("div",{className:"mb-4 flex flex-wrap justify-between"},c.a.createElement("div",null,c.a.createElement("h6",{className:"m-0 mb-2 uppercase text-muted"},"Card Members"),c.a.createElement("div",{className:"flex relative face-group"},G.map((e=>c.a.createElement(s.a,{key:e.id,className:"avatar",src:e.avatar}))),c.a.createElement(C.n,{horizontalPosition:"center",shouldCloseOnItemClick:!1,menuButton:c.a.createElement(o.a,{title:"Add",fontSize:"large"},c.a.createElement(s.a,{className:"avatar ml--3 cursor-pointer"},"+"))},X.map((e=>c.a.createElement(d.a,{className:"ml-0",key:e.id,control:c.a.createElement(u.a,{name:"avatar",checked:G.some((a=>a.id===e.id)),onChange:J,value:e.id}),label:c.a.createElement("div",{className:"flex items-center"},c.a.createElement(s.a,{src:e.avatar,className:"size-24"}),c.a.createElement("span",{className:"ml-3"},e.name))})))))),c.a.createElement("div",null,c.a.createElement("h6",{className:"m-0 mb-2 pb-3px uppercase text-muted"},"labels"),c.a.createElement("div",{className:"button-group"},Z.map((e=>c.a.createElement(g.a,{key:e.id,size:"small",variant:"contained",className:"capitalize mr-1 text-white text-small bg-".concat(e.color)},e.title))),c.a.createElement(C.n,{horizontalPosition:"right",shouldCloseOnItemClick:!1,menuButton:c.a.createElement(o.a,{title:"Add",fontSize:"large"},c.a.createElement(g.a,{className:"bg-light-gray",size:"small"},"+"))},_.map((e=>c.a.createElement(d.a,{className:"ml-0",key:e.id,control:c.a.createElement(u.a,{checked:Z.some((a=>a.id===e.id)),onChange:J,value:e.id,name:"label"}),label:c.a.createElement("div",{className:"flex items-center"},c.a.createElement("div",{className:"border-radius-4 size-24 bg-".concat(e.color)}),c.a.createElement("span",{className:"ml-3"},e.title))}))))))))),c.a.createElement(h.a,null),c.a.createElement(k.a,{className:"relative pt-4 mb-4 max-h-380"},c.a.createElement("div",{className:"px-sm-24 pt-4"},c.a.createElement("div",{className:"flex items-center mb-2"},c.a.createElement(m.a,{className:"text-muted"},"description"),c.a.createElement("h6",{className:"m-0 ml-4 uppercase text-muted"},"description")),c.a.createElement("div",{className:"ml-10 mb-4 flex"},c.a.createElement(x.a,{className:"text-muted",onChange:J,name:"description",value:ee,variant:"outlined",fullWidth:!0,multiline:!0})),c.a.createElement("div",{className:"flex justify-between items-center"},c.a.createElement("div",{className:"flex items-center"},c.a.createElement(m.a,{className:"text-muted"},"attach_file"),c.a.createElement("h6",{className:"m-0 ml-4 uppercase text-muted"},"attachments")),c.a.createElement("label",{htmlFor:"upload-file"},c.a.createElement(g.a,{className:"text-primary uppercase font-medium",component:"span"},"+ add an attachment")),c.a.createElement("input",{className:"hidden",id:"upload-file",type:"file",multiple:!0})),c.a.createElement("div",{className:"ml-10 mb-4"},c.a.createElement(O.a,{container:!0,spacing:2},te.map(((e,a)=>c.a.createElement(O.a,{key:a,item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(N.a,{className:"p-4 flex items-center bg-default h-full",elevation:2},c.a.createElement("div",{className:"flex items-center border-radius-8"},c.a.createElement("img",{className:"w-full",src:e.url,alt:"cover"})),c.a.createElement("div",{className:"ml-4"},c.a.createElement("h6",{className:"m-0 text-muted capitalize"},e.name),c.a.createElement("small",{className:"text-muted text-small capitalize"},e.size)),c.a.createElement(C.n,{horizontalPosition:"center",menuButton:c.a.createElement(i.a,{className:"ml-4"},c.a.createElement(m.a,null,"more_vert"))},c.a.createElement(j.a,{className:"flex items-center min-w-164",onClick:()=>{return a=e.url,void S(Object(l.a)(Object(l.a)({},T),{},{coverImage:a}));var a}},c.a.createElement(m.a,null," insert_photo "),c.a.createElement("span",{className:"pl-4"}," Make Cover ")),c.a.createElement(j.a,{onClick:()=>(e=>{let a=T.attachments,t=void 0===a?[]:a;t.splice(e,1),S(Object(l.a)(Object(l.a)({},T),{},{attachments:t}))})(a),className:"flex items-center min-w-164"},c.a.createElement(m.a,null," delete "),c.a.createElement("span",{className:"pl-4"}," Remove ")))))))))),c.a.createElement(h.a,{className:"my-4"}),c.a.createElement("div",{className:"px-sm-24"},c.a.createElement("div",{className:"flex items-center mb-2"},c.a.createElement(m.a,{className:"text-muted"},"message"),c.a.createElement("h6",{className:"m-0 ml-4 uppercase text-muted"},"comments")),c.a.createElement("div",{className:"comments ml-10"},re.map((e=>{let a=H.find((a=>a.id===e.uid));return c.a.createElement("div",{className:"mb-4",key:e.id},c.a.createElement("div",{className:"flex items-center mb-2"},c.a.createElement(s.a,{className:"avatar size-36",src:a.avatar}),c.a.createElement("div",{className:"ml-3"},c.a.createElement("h6",{className:"m-0"},a.name),c.a.createElement("small",null,Object(w.d)(new Date(e.time))," ago"))),c.a.createElement("p",{className:"m-0 text-muted"},e.text))})),c.a.createElement("div",{className:"flex items-center mb-4"},c.a.createElement(s.a,{className:"avatar size-36",src:M.photoURL}),c.a.createElement("div",{className:"flex-grow flex"},c.a.createElement(x.a,{className:"ml-3 text-muted",onChange:J,onKeyDown:J,variant:"outlined",name:"commentText",value:ne||"",fullWidth:!0,inputProps:{style:{padding:"10px"}}})),c.a.createElement(g.a,{onClick:U},"Send"))))),c.a.createElement("div",{className:"px-sm-24 mb-3 flex justify-end"},c.a.createElement(g.a,{className:"mr-3",onClick:$},"Cancel"),c.a.createElement(g.a,{onClick:()=>{let e=T.id,a=T.title,t=T.coverImage,l=T.cardMembers,r=void 0===l?[]:l,n=T.labels,c=void 0===n?[]:n,i=T.description,m=T.attachments,o=void 0===m?[]:m,s=T.comments,d=void 0===s?[]:s,u=T.listId,p=T.boardId,b={id:e,title:a,coverImage:t,members:r.map((e=>e.id)),labels:c.map((e=>e.id)),description:i,attachments:o,comments:d};P(Object(I.D)(p,u,b)),$()},variant:"contained",color:"primary"},"Save"))))},P=t(1120),L=t(1409),A=t(1151);const D=Object(A.a)((e=>{e.palette,Object(r.a)(e,["palette"]);return{root:{width:"32px",height:"6px",borderRadius:"6px",overflow:"hidden",marginRight:"8px"}}}));var M=({color:e="primary"})=>{const a=D();return c.a.createElement("div",{className:"bg-".concat(e," ").concat(a.root)})};var R=({card:e})=>{let a=e.title,t=e.members,l=void 0===t?[]:t,r=e.labels,n=void 0===r?[]:r,i=e.coverImage,o=e.attachments,d=e.comments;const u=Object(z.d)((e=>e.scrumboard)),p=u.memberList,b=void 0===p?[]:p,v=u.labelList,f=void 0===v?[]:v;let E=l.map((e=>b.find((a=>a.id===e)))),h=n.map((e=>f.find((a=>a.id===e))));return c.a.createElement("div",{className:"scrum-board-card"},i&&c.a.createElement("img",{className:"border-radius-4 w-full",src:i,alt:"stair"}),c.a.createElement("div",{className:"px-4 py-3"},0!==h.length&&c.a.createElement("div",{className:"flex mb-3 font-medium"},h.map((e=>e&&c.a.createElement(M,{key:e.id,color:e.color})))),c.a.createElement("h6",{className:"m-0 font-medium"},a),(0!==d.length||0!==o.length||0!==l.length)&&c.a.createElement("div",{className:"flex items-center justify-between mt-3 button-group text-small"},c.a.createElement("div",{className:"flex"},0!==d.length&&c.a.createElement(g.a,{size:"small"},c.a.createElement(m.a,{className:"mr-1 text-small",fontSize:"small"},"chat"),c.a.createElement("span",null,d.length)),0!==o.length&&c.a.createElement(g.a,{size:"small"},c.a.createElement(m.a,{className:"mr-1 text-small",fontSize:"small"},"attach_file"),c.a.createElement("span",null,o.length))),c.a.createElement("div",{className:"flex relative face-group"},E.map((e=>e&&c.a.createElement(s.a,{key:e.id,className:"avatar",src:e.avatar})))))))};var B=({data:e,handleCardClick:a})=>{const t=Object(n.useState)(!1),r=Object(p.a)(t,2),o=r[0],s=r[1],d=Object(n.useState)(!1),u=Object(p.a)(d,2),v=u[0],f=u[1],E=Object(n.useState)(""),h=Object(p.a)(E,2),O=h[0],y=h[1],w=Object(n.useState)(""),T=Object(p.a)(w,2),S=T[0],A=T[1],D=Object(z.c)(),M=Object(z.d)((e=>e.scrumboard)).board,B=void 0===M?{}:M,F=e=>{let a=e.target.name,t=e.target.value;"cardTitleText"===a?"Enter"!==e.key||e.shiftKey?y(t):_():"Enter"!==e.key||e.shiftKey?A(t):W()},W=()=>{D(Object(I.A)({boardId:B.id,listId:e.column.id,listTitle:S})),H(!1)},H=e=>{s(e)},K=e=>{f(e)},_=()=>{""!==O.trim()&&(D(Object(I.s)({boardId:B.id,listId:e.column.id,cardTitle:O})),y(""))},$=()=>{D(Object(I.t)({boardId:B.id,listId:e.column.id}))};Object(n.useEffect)((()=>{var a;let t=null===e||void 0===e||null===(a=e.column)||void 0===a?void 0:a.title;t&&A(t)}),[e]);let J=e.provided,U=e.snapshot,V=e.column;return c.a.createElement(N.a,Object.assign({className:"mx-3 relative pt-2 w-288",elevation:U.isDragging?10:3,ref:J.innerRef},J.draggableProps,J.dragHandleProps,{style:Object(l.a)({},J.draggableProps.style)}),c.a.createElement(b.c,{droppableId:V.id,direction:"vertical",type:"card"},((e,t)=>c.a.createElement("div",{ref:e.innerRef,className:"relative"},c.a.createElement("div",{className:"flex items-center justify-between pb-2"},o?c.a.createElement(P.a,{onClickAway:()=>H(!1)},c.a.createElement(x.a,{className:"pl-4",size:"small",variant:"outlined",value:S,onChange:F,onKeyDown:F,name:"columnTitleText",InputProps:{endAdornment:c.a.createElement(L.a,{position:"end"},c.a.createElement(i.a,{size:"small",onClick:W},c.a.createElement(m.a,{fontSize:"small"},"done")))}})):c.a.createElement("h4",{className:"m-0 flex-grow py-1 pl-4 capitalize",onClick:()=>H(!0)},V.title),c.a.createElement(C.n,{horizontalPosition:"right",menuButton:c.a.createElement(i.a,null,c.a.createElement(m.a,null,"more_vert"))},c.a.createElement(j.a,{className:"flex items-center min-w-148"},c.a.createElement(m.a,null," settings "),c.a.createElement("span",{className:"pl-4"}," Settings ")),c.a.createElement(j.a,{onClick:$,className:"flex items-center min-w-148"},c.a.createElement(m.a,null," delete "),c.a.createElement("span",{className:"pl-4"}," Delete ")))),c.a.createElement(k.a,{className:"relative h-380 px-4"},V.cardList.map(((e,t)=>c.a.createElement(b.b,{key:e.id,draggableId:e.id,index:t,type:"card"},((t,r)=>c.a.createElement(N.a,Object.assign({className:"mb-4 border-radius-4 bg-light-gray",elevation:r.isDragging?10:3,onClick:()=>a(Object(l.a)(Object(l.a)({},e),{},{listId:V.id})),ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:Object(l.a)({},t.draggableProps.style)}),c.a.createElement(R,{card:e}))))))),e.placeholder))),v?c.a.createElement(P.a,{onClickAway:()=>K(!1)},c.a.createElement(N.a,{className:"position-bottom border-radius-0 cursor-pointer p-4 w-full",elevation:5},c.a.createElement(x.a,{size:"small",className:"mb-3",variant:"outlined",name:"cardTitleText",value:O,fullWidth:!0,onChange:F,onKeyDown:F,InputProps:{endAdornment:c.a.createElement(L.a,{position:"end"},c.a.createElement(i.a,{size:"small",onClick:()=>K(!1)},c.a.createElement(m.a,{fontSize:"small"},"clear")))}}),c.a.createElement("div",{className:"flex justify-end"},c.a.createElement(g.a,{onClick:_,variant:"contained",color:"primary"},"Add")))):c.a.createElement("div",{className:"flex"},c.a.createElement(g.a,{className:"font-medium flex-grow border-radius-0",variant:"contained",color:"primary",onClick:()=>K(!0)},"+ Add Card")))};var F=({list:e=[],handleAddList:a,handleAddNewCard:t})=>{const l=Object(n.useState)(null),r=Object(p.a)(l,2),o=r[0],d=r[1],u=Object(n.useState)(!1),v=Object(p.a)(u,2),f=v[0],E=v[1],h=Object(n.useState)(!1),O=Object(p.a)(h,2),j=O[0],y=O[1],w=Object(n.useState)(""),T=Object(p.a)(w,2),C=T[0],A=T[1],D=Object(z.c)(),M=Object(z.d)((e=>e.scrumboard)).board,R=void 0===M?{}:M,F=e=>{d(e),E(!0)},W=()=>{E(!1)},H=e=>{y(e)},K=e=>{"Enter"!==e.key||e.shiftKey?A(e.target.value):(a(C),A(""))};return c.a.createElement(k.a,{className:"relative flex pb-4 w-full"},c.a.createElement(b.a,{onDragEnd:e=>{const a=e.source,t=e.destination;t&&("horizontal-droppable"===a.droppableId?D(Object(I.C)(R.id,a.index,t.index)):a.droppableId===t.droppableId?D(Object(I.B)(R.id,a.droppableId,a.index,t.index)):D(Object(I.z)(R.id,a.droppableId,t.droppableId,a,t)))}},c.a.createElement(b.c,{droppableId:"horizontal-droppable",direction:"horizontal"},(a=>c.a.createElement("div",Object.assign({ref:a.innerRef},a.droppableProps,{className:"flex"}),e.map(((e,a)=>c.a.createElement(b.b,{key:e.id,draggableId:e.id,index:a,type:"column"},((a,l)=>c.a.createElement(B,{data:{provided:a,snapshot:l,column:e},handleCardClick:F,handleDialogClose:W,handleAddNewCard:t}))))),a.placeholder)))),c.a.createElement("div",null,j?c.a.createElement(P.a,{onClickAway:()=>H(!1)},c.a.createElement(N.a,{className:"mx-3 border-radius-0 cursor-pointer p-4 min-w-288",elevation:3},c.a.createElement(x.a,{size:"small",className:"mb-3",variant:"outlined",name:"columnTitle",value:C,fullWidth:!0,onChange:K,onKeyDown:K,InputProps:{endAdornment:c.a.createElement(L.a,{position:"end"},c.a.createElement(i.a,{size:"small",onClick:()=>H(!1)},c.a.createElement(m.a,{fontSize:"small"},"clear")))}}),c.a.createElement("div",{className:"flex justify-end"},c.a.createElement(g.a,{onClick:()=>{a(C),A("")},variant:"contained",color:"primary"},"Add")))):c.a.createElement(N.a,{className:"mx-3 cursor-pointer flex items-center py-4 px-4 bg-light-gray min-w-288",elevation:3,onClick:()=>H(!0)},c.a.createElement(s.a,{className:"size-24 bg-error"},"+"),c.a.createElement("span",{className:"ml-8 font-medium"},"Add List"))),f&&c.a.createElement(S,{card:o,open:f,handleClose:W}))},W=t(40),H=t(47),K=t(5);const _=Object(A.a)((e=>{e.palette,Object(r.a)(e,["palette"]);return{avatar:{border:"2px solid white"}}}));a.default=()=>{const e=Object(z.d)((e=>e.scrumboard)),a=e.board,t=void 0===a?{}:a,r=e.memberList,p=void 0===r?[]:r,b=Object(W.i)().id,v=Object(z.c)(),f=_();Object(n.useEffect)((()=>{v(Object(I.y)(b)),v(Object(I.x)()),v(Object(I.w)())}),[b,v]);const E=e=>{let a=e.target.value,l=t.members,r=t.id;l.some((e=>e.id===a))?v(Object(I.u)({boardId:r,memberId:a})):v(Object(I.q)({boardId:r,memberId:a}))};let g=t.members,h=void 0===g?[]:g,x=t.title,O=t.list,N=void 0===O?[]:O;return c.a.createElement("div",{className:"scrum-board m-sm-30"},c.a.createElement("div",{className:"flex flex-wrap items-center justify-between mb-4"},c.a.createElement("div",{className:"flex items-center"},c.a.createElement(H.a,{to:"/scrum-board"},c.a.createElement(i.a,null,c.a.createElement(m.a,null,"arrow_back"))),c.a.createElement("h5",{className:"m-0 ml-2 capitalize"},x),c.a.createElement(i.a,{className:"ml-2"},c.a.createElement(m.a,null,"star_outline"))),c.a.createElement("div",{className:"flex relative mr-2 items-center"},h.map(((e,a)=>c.a.createElement(o.a,{key:a,title:e.name,fontSize:"large"},c.a.createElement(s.a,{className:Object(K.default)("h-24 w-24 ml--2",f.avatar),src:e.avatar})))),c.a.createElement(C.n,{horizontalPosition:"right",shouldCloseOnItemClick:!1,menuButton:c.a.createElement(o.a,{title:"Add",fontSize:"large"},c.a.createElement(s.a,{className:Object(K.default)("h-24 w-24 ml--2 cursor-pointer",f.avatar)},"+"))},p.map((e=>c.a.createElement(d.a,{className:"ml-0",key:e.id,control:c.a.createElement(u.a,{checked:h.some((a=>a.id===e.id)),onChange:E,value:e.id}),label:c.a.createElement("div",{className:"flex items-center"},c.a.createElement(s.a,{src:e.avatar,className:"size-24"}),c.a.createElement("span",{className:"ml-3"},e.name))})))))),c.a.createElement("div",{className:"relative"},c.a.createElement(F,{list:N,handleAddList:e=>{""!==e&&v(Object(I.p)({boardId:b,listTitle:e}))},handleAddNewCard:e=>{v(Object(I.s)(Object(l.a)({boardId:b},e)))}})))}}}]);