(this["webpackJsonpintro-component-with-signup-form"]=this["webpackJsonpintro-component-with-signup-form"]||[]).push([[0],{13:function(e,r,t){},15:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t.n(n),s=t(7),c=t.n(s),i=t(5),l=(t(13),t(0)),o=function(e){var r=e.children;return Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-body",children:r})})},d=function(e){var r=e.children;return Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h2",{children:r})})},u=function(e){var r=e.children;return Object(l.jsx)("div",{className:"paragraph",children:Object(l.jsx)("p",{children:r})})},j=function(e){var r=e.children,t=e.onSubmit,n=e.handleSubmit;e.register;return Object(l.jsx)("div",{className:"form",children:Object(l.jsx)("form",{onSubmit:n(t),children:r})})},m=function(e){var r=e.className,t=e.value,n=e.type,a=void 0===n?"submit":n,s=e.handleClick;return Object(l.jsx)("div",{className:"button",children:Object(l.jsx)("input",{className:"btn ".concat(r),onClick:s,type:a,value:t})})},b=t(4),h=function(e){var r=e.errors,t=e.validate,n=e.name;return(null===r||void 0===r?void 0:r[n])&&(null===r||void 0===r?void 0:r[n].type)===t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("i",{className:"error-icon"}),Object(l.jsx)("span",{className:"error",children:null===r||void 0===r?void 0:r[n].message})]}):null},v=function(e){var r=e.name,t=e.errors,n=e.validated,a=void 0===n?"required":n;return(null===t||void 0===t?void 0:t[r])&&(null===t||void 0===t?void 0:t[r].type)===a?"error":""},p=function(e){var r=e.placeholder,t=e.register,n=e.name,a=e.required,s=e.errors;return Object(l.jsxs)("div",{className:"input-text",children:[Object(l.jsx)("input",Object(b.a)({placeholder:r,className:"input ".concat(v({name:n,errors:s,required:"required"})),type:"text"},t(n,{required:{value:a,message:"".concat(r," cannot be empty")}}))),a&&Object(l.jsx)(h,{errors:s,validate:"required",name:n})]})},x=function(e){var r=e.placeholder,t=e.register,n=e.name,a=e.required,s=e.errors;return Object(l.jsxs)("div",{className:"input-text",children:[Object(l.jsx)("input",Object(b.a)({placeholder:r,className:"input \n                ".concat(v({name:n,errors:s,validated:"required"})," \n                ").concat(v({name:n,errors:s,validated:"pattern"})),type:"text"},t(n,{required:{value:a,message:"".concat(r," cannot be empty")},pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,message:"Looks like this is not an email"}}))),a&&Object(l.jsx)(h,{errors:s,validate:"required",name:n}),Object(l.jsx)(h,{errors:s,validate:"pattern",name:n})]})},O=function(e){var r=e.placeholder,t=e.register,n=e.name,a=e.required,s=e.errors;return Object(l.jsxs)("div",{className:"input-text",children:[Object(l.jsx)("input",Object(b.a)({placeholder:r,className:"input ".concat(v({name:n,errors:s,required:"required"})),type:"password"},t(n,{required:{value:a,message:"".concat(r," cannot be empty")}}))),a&&Object(l.jsx)(h,{errors:s,validate:"required",name:n})]})},g=function(e){var r=Object(i.a)(),t=r.register,n=r.handleSubmit,a=r.formState.errors;return Object(l.jsx)("section",{className:"container",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)(d,{children:"Learn to code by watching others"}),Object(l.jsx)(u,{children:"See how experienced developers solve problems in real-time Watchinmg scripted tutorials is great, but understanding how developers think is invaluable."})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)(o,{}),Object(l.jsxs)(o,{children:[Object(l.jsxs)("div",{className:"head",children:["Try it free 7 days ",Object(l.jsx)("span",{children:"the $20/mo. thereafter"})]}),Object(l.jsxs)(j,{register:t,handleSubmit:n,onSubmit:function(e){alert("".concat(JSON.stringify(e)))},children:[Object(l.jsx)(p,{placeholder:"First Name",name:"firstName",errors:a,required:!0,register:t}),Object(l.jsx)(p,{placeholder:"Last Name",name:"lastName",errors:a,required:!0,register:t}),Object(l.jsx)(x,{placeholder:"Email Address",name:"email",errors:a,required:!0,register:t}),Object(l.jsx)(O,{placeholder:"Password",name:"lastName",errors:a,required:!0,register:t}),Object(l.jsx)(m,{value:"Claim your free trial"}),Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("span",{className:"text",children:["By clickthe button, you are agreeing to our",Object(l.jsx)("a",{href:"#",onClick:function(e){},children:"Terms and Service"})]})})]})]})]})]})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(r){var t=r.getCLS,n=r.getFID,a=r.getFCP,s=r.getLCP,c=r.getTTFB;t(e),n(e),a(e),s(e),c(e)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.5225ce76.chunk.js.map