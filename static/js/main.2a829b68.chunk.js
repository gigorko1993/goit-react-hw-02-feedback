(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,n){t.exports={list:"Statistics_list__1e6Vx",item:"Statistics_item__1zvPc"}},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),i=n(4),s=n.n(i),o=(n(15),n(5)),r=n(6),l=n(10),d=n(9),b=n(7),u=n.n(b),j=n(0),h=function(t){var e=t.options,n=t.onFeedbackButtonClick;return Object(j.jsx)("button",{className:u.a.button,type:"button",name:e,onClick:n,children:e})},k=n(8),O=n.n(k),x=function(t){return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{className:O.a.title,children:t.title}),t.children]})},f=n(1),m=n.n(f),p=function(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,i=t.percent;return Object(j.jsxs)("ul",{className:m.a.list,children:[Object(j.jsxs)("li",{className:m.a.item,children:["Good: ",e]}),Object(j.jsxs)("li",{className:m.a.item,children:["Neutral: ",n]}),Object(j.jsxs)("li",{className:m.a.item,children:["Bad: ",c]}),Object(j.jsxs)("li",{className:m.a.item,children:["Total: ",a]}),Object(j.jsxs)("li",{className:m.a.item,children:["Positive feedback: ",i>0?"".concat(i,"%"):0]})]})},v=function(t){var e=t.message;return Object(j.jsx)("p",{children:e})},g=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.addFeedback=function(e){var n=e.target.name;t.setState((function(t){var e=t[n];return t[n]=e+1}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){return Math.floor(t.state.good/t.countTotalFeedback()*100)},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad,a=this.countTotalFeedback();return Object(j.jsxs)("div",{children:[Object(j.jsxs)(x,{title:"Please leave feedback",children:[Object(j.jsx)(h,{options:"good",onFeedbackButtonClick:this.addFeedback}),Object(j.jsx)(h,{options:"neutral",onFeedbackButtonClick:this.addFeedback}),Object(j.jsx)(h,{options:"bad",onFeedbackButtonClick:this.addFeedback})]}),Object(j.jsxs)(x,{title:"Statistics",children:[a?Object(j.jsx)(p,{good:e,neutral:n,bad:c,total:a,percent:this.countPositiveFeedbackPercentage()}):null,a?null:Object(j.jsx)(v,{message:"No feedback given"})]})]})}}]),n}(a.a.Component);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={button:"FeedbackOptions_button__2WAgU"}},8:function(t,e,n){t.exports={title:"Section_title__zEqv7"}}},[[17,1,2]]]);
//# sourceMappingURL=main.2a829b68.chunk.js.map