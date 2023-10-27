"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[933],{2634:function(n,e,r){r.d(e,{N:function(){return c},W:function(){return s}});var t,i,a=r(168),o=r(5867),s=o.ZP.div(t||(t=(0,a.Z)(["\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 15px;\n  .title {\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.2em;\n    margin-top: 1em;\n  }\n"]))),c=o.ZP.div(i||(i=(0,a.Z)(["\n  font-size: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5em;\n  margin-top: 2em;\n"])))},3933:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var t,i=r(1413),a=r(6727),o=r(4695),s=r(9434),c=r(1737),u=r(1134),l=r(168),d=r(5867),p=d.ZP.form(t||(t=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1em auto;\n  gap: 1em;\n  width: 400px;\n  label {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 0.1em;\n  }\n  span {\n    margin-left: 0.5em;\n  }\n\n  input {\n\n    padding: 0.3em 0.5em;\n\n  }\n\n  button {\n    transition: 0.8s; \n    width: 50%;\n    padding: 0.3em 0.3em;\n    border: black solid 1px;\n    border-radius: 1em;\n    background-color: transparent;\n    &:hover,\n    &:focus {\n      scale: 1.1;\n    }\n  }\n"]))),m=r(2634),x=r(184),f=a.Ry({name:a.Z_().min(4).max(32).required(),number:a.Z_().min(6).max(16).required()}).required();function g(){var n,e,r=(0,u.cI)({resolver:(0,o.X)(f)}),t=r.register,a=r.handleSubmit,l=r.reset,d=r.formState.errors,g=(0,s.v9)((function(n){return n.contacts})).items,h=(0,s.I0)();return(0,x.jsx)(m.W,{children:(0,x.jsxs)(p,{onSubmit:a((function(n){if(g.find((function(e){return e.name===n.name})))return alert("".concat(n.name," is already in contacts")),void l();h((0,c.uK)(n)),l()})),children:[(0,x.jsxs)("label",{children:[(0,x.jsx)("span",{children:"Contact name"}),(0,x.jsx)("input",(0,i.Z)({type:"text",placeholder:"Jacob Mercer"},t("name",{required:!0}))),(0,x.jsx)("span",{children:null===(n=d.name)||void 0===n?void 0:n.message})]}),(0,x.jsxs)("label",{children:[(0,x.jsx)("span",{children:"Number"}),(0,x.jsx)("input",(0,i.Z)({type:"text",placeholder:"761-23-96"},t("number"))),(0,x.jsx)("span",{children:null===(e=d.number)||void 0===e?void 0:e.message})]}),(0,x.jsx)("button",{type:"submit",children:"Add"})]})})}var h,b,j=r(1592),v=function(n){var e=n.id,r=n.name,t=n.number,i=(0,s.I0)(),a=(0,s.v9)((function(n){return n.contacts})).isLoading;return(0,x.jsx)(x.Fragment,{children:a?(0,x.jsx)(j.Z,{}):(0,x.jsxs)("li",{children:[(0,x.jsxs)("span",{children:[r,":"]}),(0,x.jsx)("span",{children:t}),(0,x.jsx)("button",{type:"button",onClick:function(){return i((0,c.GK)(e))},children:"x"})]})})},y=d.ZP.ul(h||(h=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 24px;\n  gap: 12px;\n  margin-top: 1em;\n\n  li {\n    padding: 0.4em 1em;\n    display: flex;\n    align-items: center;\n    border: 1px solid #000;\n    border-radius: 30px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,\n      rgba(0, 0, 0, 0.22) 0px 15px 12px;\n  }\n  span + span {\n    margin-left: 14px;\n  }\n  button {\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n    display: flex;\n    text-align: center;\n    align-items: center;\n    margin-left: auto;\n    width: 40px;\n    height: 40px;\n    background-color: transparent;\n    border: 2px solid #d60101;\n    border-radius: 50%;\n    cursor: pointer;\n    font-size: 26px;\n    color: #d60101;\n    transition: all 0.3s ease-in-out;\n    &:hover,\n    &:focus {\n      border: 2px solid white;\n      background-color: transparent;\n      color: white;\n      box-shadow: 0px 0px 15px 10px rgba(255, 0, 0, 0.4);\n    }\n  }\n"]))),w=r(4289),Z=d.ZP.input(b||(b=(0,l.Z)(["\n  padding: 6px 12px;\n  background-color: transparent;\n  border: 1px solid black;\n  border-radius: 1em;\n  &::placeholder {\n    color: black;\n    font-size: 16px;\n  }\n"]))),k=r(1997),C=function(){var n=(0,s.v9)((function(n){return n.filter})).filter,e=(0,s.I0)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(Z,{placeholder:"Search name",type:"text",name:"filter",value:n,onChange:function(n){return e((0,k.T)(n.target.value))}})})},F=r(7689),I=function(){var n=(0,s.v9)((function(n){return n.contacts})).items,e=(0,s.v9)((function(n){return n.filter})).filter,r=(0,s.v9)(w.Qb),t=""===e?n:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,x.jsx)(m.W,{children:r?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(C,{}),(0,x.jsx)(y,{children:t.length>0?t.map((function(n){var e=n.name,r=n.id,t=n.number;return(0,x.jsx)(v,{name:e,id:r,number:t},r)})):(0,x.jsx)("h2",{children:"Empty..."})})]}):(0,x.jsx)(F.Fg,{to:"/login",replace:!0})})},_=r(2791),L=function(){var n=(0,s.I0)(),e=(0,s.v9)(w.Qb);return(0,_.useEffect)((function(){e&&n((0,c.yF)())}),[n,e]),(0,x.jsxs)(x.Fragment,{children:[e&&(0,x.jsx)(g,{}),(0,x.jsx)(I,{})]})}},4289:function(n,e,r){r.d(e,{NH:function(){return i},Qb:function(){return t},dy:function(){return a}});var t=function(n){return n.auth.isLoggedIn},i=function(n){return n.auth.isLoading},a=function(n){return n.auth.user}}}]);
//# sourceMappingURL=933.8bd05f34.chunk.js.map