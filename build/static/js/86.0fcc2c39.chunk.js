(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[86],{1556:function(e,t,a){"use strict";var o=a(7),i=a(1),r=a.n(i),l=a(361),s=a.n(l),n=a(250);t.a=({height:e,color:t=[]})=>{const a=Object(n.a)(),i={legend:{show:!0,itemGap:20,icon:"circle",bottom:0,textStyle:{color:a.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Traffic Rate",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:5,stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{color:a.palette.text.secondary,fontSize:13,fontFamily:"roboto"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"14",fontWeight:"normal"},formatter:"{b} \n{c} ({d}%)"}},labelLine:{normal:{show:!1}},data:[{value:65,name:"Google"},{value:20,name:"Facebook"},{value:15,name:"Others"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return r.a.createElement(s.a,{style:{height:e},option:Object(o.a)(Object(o.a)({},i),{},{color:[...t]})})}},2137:function(e,t,a){"use strict";a.r(t);var o=a(1),i=a.n(o),r=a(1556),l=a(7),s=a(361),n=a.n(s),c=a(250);var h=({height:e,color:t=[]})=>{const a=Object(c.a)(),o={grid:{top:"10%",bottom:"10%",left:"5%",right:"5%"},legend:{itemGap:20,icon:"circle",textStyle:{color:a.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},tooltip:{},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:a.palette.text.secondary,fontSize:14,fontFamily:"roboto"}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:a.palette.text.secondary,opacity:.15}},axisLabel:{color:a.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{data:[30,40,20,50,40,80,90],type:"line",stack:"This month",name:"This month",smooth:!0,symbolSize:4,lineStyle:{width:4}},{data:[20,50,15,50,30,70,95],type:"line",stack:"Last month",name:"Last month",smooth:!0,symbolSize:4,lineStyle:{width:4}}]};return i.a.createElement(n.a,{style:{height:e},option:Object(l.a)(Object(l.a)({},o),{},{color:[...t]})})};const m={grid:{left:0,top:0,right:0,bottom:0},legend:{},tooltip:{},xAxis:{show:!1,type:"category",showGrid:!1,boundaryGap:!1},yAxis:{show:!1,type:"value",splitLine:{show:!1}},series:[{data:[25,18,20,30,40,43],type:"line",areaStyle:{},smooth:!0}]};var p=({height:e,color:t})=>i.a.createElement(n.a,{style:{height:e},option:Object(l.a)(Object(l.a)({},m),{},{color:[...t]})}),y=a(48);var b=({height:e,color:t=[]})=>{const a=Object(y.a)(),o={grid:{top:"10%",bottom:"10%",right:"5%"},legend:{show:!1},color:["#223388","rgba(34, 51, 136, 0.8)"],barGap:0,barMaxWidth:"64px",tooltip:{},dataset:{source:[["Month","Website","App"],["Jan",2200,1200],["Feb",800,500],["Mar",700,1350],["Apr",1500,1250],["May",2450,450],["June",1700,1250]]},xAxis:{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:a.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:a.palette.text.secondary,opacity:.15}},axisLabel:{color:a.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{type:"bar"},{type:"bar"}]};return i.a.createElement(n.a,{style:{height:e},option:Object(l.a)({},o)})},x=a(109);t.default=()=>{const e=Object(c.a)();return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(x.b,{routeSegments:[{name:"Charts",path:"/charts"},{name:"Echarts"}]})),i.a.createElement(x.z,{title:"Doughnut Chart"},i.a.createElement(r.a,{height:"350px",color:[e.palette.primary.dark,e.palette.primary.main,e.palette.primary.light]})),i.a.createElement("div",{className:"py-3"}),i.a.createElement(x.z,{title:"Line Chart"},i.a.createElement(h,{height:"350px",color:[e.palette.primary.main,e.palette.primary.light]})),i.a.createElement("div",{className:"py-3"}),i.a.createElement(x.z,{title:"Comparison Chart"},i.a.createElement(b,{height:"350px",color:[e.palette.primary.dark,e.palette.primary.light]})),i.a.createElement("div",{className:"py-3"}),i.a.createElement(x.z,{title:"Area Chart"},i.a.createElement(p,{height:"350px",color:[e.palette.primary.main]})))}}}]);