(this["webpackJsonpsb-prop-bet"]=this["webpackJsonpsb-prop-bet"]||[]).push([[0],{16:function(e,t,a){e.exports={leaderboardPage:"Leaderboard_leaderboardPage__2YuCy",container:"Leaderboard_container__3MruL",loadingContainer:"Leaderboard_loadingContainer__3pvtD",item:"Leaderboard_item__3KlS6",eliminated:"Leaderboard_eliminated__151ch",itemName:"Leaderboard_itemName__2cxhb",itemPoints:"Leaderboard_itemPoints__2JfTD",trackYourself:"Leaderboard_trackYourself__17vAc",searchButton:"Leaderboard_searchButton__jEegM",trackYourselfModal:"Leaderboard_trackYourselfModal__dvGVo",tiebreaker:"Leaderboard_tiebreaker__Al65V"}},269:function(e,t,a){},270:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(0),s=a.n(n),i=a(49),c=a.n(i),o=(a(267),a(268),a(269),a(270),a(123)),d=a(12),l=a(89),j=a.n(l),b=a(187),u=a(124),m=a(72),h=a(92),O=a(240),f=a.n(O),p=a(70),x=a(351),v=a(353),_=a(352),g=a(338),y=a(248),k=a(242),w=a.n(k),N=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.year,e.next=3,w.a.get("https://vokbvjr975.execute-api.us-east-1.amazonaws.com/prod/superBowls/"+a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=a(16),E=a.n(S),C=new y.a({id:"user-preferences",storageFallback:!0}),L=function(){return Object(r.jsx)(p.a,{name:"angle right",size:"small",style:{marginLeft:"0.75rem",color:"gray"}})},P=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(),c=Object(m.a)(i,2),o=c[0],l=c[1],O=Object(n.useState)(),p=Object(m.a)(O,2),y=p[0],k=p[1],w=Object(n.useState)(),S=Object(m.a)(w,2),P=S[0],z=S[1],T=Object(d.g)();Object(n.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,r,n,s,i,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({year:"2022"});case 2:return(t=e.sent).entries.forEach((function(e){for(var a=0,r=0,n=Object.entries(t.answers);r<n.length;r++){var s=Object(m.a)(n[r],2),i=s[0],c=s[1];c.answer&&e.answers[i]===c.answer&&(a+=c.value)}e.points=a,e.tiebreakerDifference=Math.abs(e.tiebreaker-t.answers.Tiebreaker?t.answers.Tiebreaker.answer:0)})),t.entries.sort((function(e,t){return t.points-e.points||e.tiebreakerDifference-t.tiebreakerDifference})),a=1e5,r=1,n=1,t.entries.forEach((function(e){e.points<a&&(n=r,a=e.points),e.place=n,r++})),s=t.entries[0],t.entries.forEach((function(e){for(var a=0,r=0,n=Object.entries(e.answers);r<n.length;r++){var i=Object(m.a)(n[r],2),c=i[0],o=i[1];t.answers[c].answer||(a+=0,o.includes("(")?a+=parseInt(o.split("(")[1].split(" ")[0]):a+=1)}e.isEliminated=s.points-e.points>a})),e.next=13,C.query({prop:"trackedEntry"}).read();case 13:(i=e.sent)?(c=t.entries.find((function(e){var t=e.name,a=e.email;return i.name===t&&i.email===a})))&&(i=Object(b.a)(Object(b.a)({},i),c),k(i)):k(i),z(t);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var A=function(e){P.hasStarted&&T.push({pathname:"/entry",state:{entry:e,answers:P.answers}})};return P?Object(r.jsxs)("div",{className:E.a.leaderboardPage,children:[Object(r.jsxs)("div",{style:{backgroundColor:"white",padding:"1.25rem 1rem 1rem"},children:[Object(r.jsx)("div",{style:{fontSize:"2rem"},children:"PROP BET POOL"}),Object(r.jsxs)("div",{style:{fontSize:"1rem",marginTop:10},children:["sponsored by"," ",Object(r.jsx)("a",{href:"https://www.bookiebeats.com/",target:"_blank",rel:"noreferrer",children:"bookiebeats.com"})]})]}),y&&Object(r.jsxs)("div",{className:E.a.container,children:[Object(r.jsx)("h2",{children:"YOU"}),Object(r.jsxs)("div",{className:"".concat(E.a.item).concat(y.isEliminated?" ".concat(E.a.eliminated):""),style:{cursor:P.hasStarted?"pointer":""},onClick:function(){A(y)},children:[Object(r.jsx)("div",{style:{width:"1.75rem"},children:y.place}),Object(r.jsx)("div",{children:Object(r.jsx)(h.a,{name:y.name,email:y.email,round:!0,size:"40"})}),Object(r.jsxs)("div",{className:E.a.itemName,children:[y.name,P.hasStarted&&Object(r.jsxs)("div",{className:E.a.tiebreaker,children:["Tiebreaker: ",y.tiebreaker]})]}),Object(r.jsxs)("div",{className:E.a.itemPoints,children:[y.points,P.hasStarted&&Object(r.jsx)(L,{})]})]})]}),Object(r.jsx)("h2",{children:"LEADERBOARD"}),Object(r.jsx)("div",{className:E.a.container,children:P.entries.map((function(e){var t=e.name,a=e.email,n=e.points,s=e.place,i=e.tiebreaker,c=e.isEliminated,o={cursor:P.hasStarted?"pointer":""};return y&&y.name===t&&y.email===a&&(o.border="2px #6d72c3 solid"),Object(r.jsxs)("div",{className:"".concat(E.a.item).concat(c?" ".concat(E.a.eliminated):""),style:o,onClick:function(){A(e)},children:[Object(r.jsx)("div",{style:{width:"1.75rem"},children:s}),Object(r.jsx)("div",{children:Object(r.jsx)(h.a,{name:t,email:a,round:!0,size:"40"})}),Object(r.jsxs)("div",{className:E.a.itemName,children:[Object(r.jsx)("div",{children:t}),P.hasStarted&&Object(r.jsxs)("div",{className:E.a.tiebreaker,children:["Tiebreaker: ",i]})]}),Object(r.jsxs)("div",{className:E.a.itemPoints,children:[n,P.hasStarted&&Object(r.jsx)(L,{})]})]},a)}))}),!y&&Object(r.jsx)("div",{className:E.a.trackYourself,role:"button",onClick:function(){return s(!0)},children:"Track Yourself"}),Object(r.jsxs)(f.a,{isOpen:a,onRequestClose:function(){return s(!1)},className:E.a.trackYourselfModal,ariaHideApp:!1,children:[Object(r.jsx)("h2",{children:"Track Yourself"}),Object(r.jsx)("div",{children:"Input your email to find yourself"}),Object(r.jsxs)(v.a,{onSubmit:function(e){var t=e.target,a=P.entries.filter((function(e){return e.email===t[0].value}));l(a)},children:[Object(r.jsx)(v.a.Field,{style:{width:300,margin:"1rem auto"},children:Object(r.jsx)(_.a,{placeholder:"Email",size:"big",type:"email",autoFocus:!0})}),Object(r.jsx)(g.a,{id:E.a.searchButton,size:"big",primary:!0,type:"submit",children:"Search"}),Object(r.jsx)(g.a,{onClick:function(){return s(!1)},basic:!0,size:"big",children:"Close"})]}),o&&Object(r.jsxs)("div",{style:{marginTop:"2rem"},children:[Object(r.jsx)("div",{children:"Found ".concat(o.length,", ").concat(o.length>0?"pick yourself":"did you get your email right?")}),o.map((function(e,t){var a=e.name,n=e.email;return Object(r.jsxs)("div",{className:E.a.item,style:{backgroundColor:"#f3f3f7",cursor:"pointer"},role:"button",onClick:function(){C.query({prop:"trackedEntry"}).update(e),k(e),s(!1)},children:[Object(r.jsx)("div",{children:Object(r.jsx)(h.a,{name:a,email:n,round:!0,size:"40"})}),Object(r.jsx)("div",{className:E.a.itemName,style:{margin:"0 1rem"},children:a})]},n)}))]})]})]}):Object(r.jsx)("div",{className:E.a.loadingContainer,children:Object(r.jsx)(x.a,{size:"huge",active:!0,children:"LOADING"})})},z=a(71),T=a.n(z),A=function(){var e=Object(d.h)().state;if(!e)return Object(r.jsx)(d.a,{to:"/"});var t=e.entry,a=t.name,n=t.email,s=t.answers,i=t.points,c=e.answers;return Object(r.jsxs)("div",{className:T.a.entryPage,children:[Object(r.jsx)("div",{children:Object(r.jsx)(h.a,{name:a,email:n,round:!0,size:"80",className:T.a.avatar})}),Object(r.jsx)("h1",{className:T.a.name,children:a}),Object(r.jsxs)("h2",{children:["Score: ",i]}),Object.keys(s).map((function(e){var t,a={},n=!1,i=!1;return c[e]&&c[e].answer&&(i=!0,"PUSH"===c[e].answer?a.backgroundColor="rgb(205 205 205)":c[e].answer===s[e]?(n=!0,a.backgroundColor="#b1dab1"):a.backgroundColor="#f7a8a8"),i&&(t=n?c[e].value:0),Object(r.jsxs)("div",{className:T.a.questionAndAnswer,style:a,children:[Object(r.jsxs)("div",{style:{marginRight:"3rem"},children:[Object(r.jsx)("div",{className:T.a.question,children:e}),Object(r.jsx)("div",{className:T.a.answer,children:s[e]})]}),Object(r.jsx)("div",{style:{marginLeft:"auto",fontSize:22},children:t})]},e)}))]})};var q=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(o.a,{children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/entry",children:Object(r.jsx)(A,{})}),Object(r.jsx)(d.b,{path:"/",children:Object(r.jsx)(P,{})})]})})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,355)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),s(e),i(e)}))};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(q,{})}),document.getElementById("root")),Y()},71:function(e,t,a){e.exports={entryPage:"Entry_entryPage__1cH3z",avatar:"Entry_avatar__1SgQz",name:"Entry_name__24jq1",questionAndAnswer:"Entry_questionAndAnswer__2PNQU",question:"Entry_question__3UZ1W",answer:"Entry_answer__38TTM"}}},[[337,1,2]]]);
//# sourceMappingURL=main.cd6f3eb4.chunk.js.map