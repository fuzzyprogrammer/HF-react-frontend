(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[104],{2086:function(e,t,a){"use strict";a.r(t);var c=a(19),r=a(1),l=a.n(r),n=a(2039),s=a.n(n),i=a(2041),u=a.n(i),m=a(1187),o=a(1209),f=a(1210);const p="https://api.soundcloud.com",b="caf73ef1e709f839664ab82bef40fa96";t.default=()=>{const e=Object(r.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(!0),d=Object(c.a)(i,2),h=d[0],E=d[1],j=Object(r.useState)(null),k=Object(c.a)(j,2),_=k[0],O=k[1],v=Object(r.useState)(!0),w=Object(c.a)(v,2),x=w[0],g=w[1];Object(r.useEffect)((()=>()=>g(!1)),[]);const N=l.a.createElement("div",{className:"w-full text-center p-6",key:"loader"},l.a.createElement(m.a,{variant:"indeterminate"}));return l.a.createElement("div",{className:"p-8 h-full-screen scroll-y"},l.a.createElement(s.a,{pageStart:0,loadMore:()=>{let e=p+"/users/8665091/favorites";_&&(e=_),u.a.get(e,{client_id:b,linked_partitioning:1,page_size:10},{cache:!0}).then((function(e,t){if(t){let e=a;t.collection.map((t=>(null==t.artwork_url&&(t.artwork_url=t.user.avatar_url),e.push(t),t))),x&&(t.next_href?(n(e),O(t.next_href)):E(!1))}}))},hasMore:h,loader:N,useWindow:!1},l.a.createElement(o.a,{container:!0,spacing:2},a.map(((e,t)=>l.a.createElement(o.a,{item:!0,lg:3,md:3,xs:12,sm:6,className:"track",key:e.title},l.a.createElement(f.a,{className:"p-4 flex justify-center h-full",elevation:6},l.a.createElement("a",{href:e.permalink_url,className:"text-center"},l.a.createElement("img",{src:e.artwork_url,className:"border-radius-circle h-148 w-148",alt:"albutm cover"}),l.a.createElement("p",{className:"caption"},e.title)))))))))}}}]);