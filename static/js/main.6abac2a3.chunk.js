(this["webpackJsonpcvgc-site"]=this["webpackJsonpcvgc-site"]||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(18),l=a.n(s),r=(a(53),a(2)),i=a(11),o=a(6),j=(a(54),a(55),a(45)),b=a(65),u=a(1);function d(e){var t=e.theClub;return Object(u.jsx)(j.a,{children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)("thead",{className:"thead-dark",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"#"}),Object(u.jsx)("th",{scope:"col",children:"Name"}),Object(u.jsx)("th",{scope:"col",children:"Email"}),Object(u.jsx)("th",{scope:"col",children:"Status"}),Object(u.jsx)("th",{scope:"col"})]})}),Object(u.jsx)("tbody",{children:t.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t+1}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.status})]},t)}))})]})})}var h=a(71),O=a(66),x=a(67),m=a(70);function g(e){switch(e.status){case"Yellow":return Object(u.jsxs)(m.a,{variant:"danger",dismissible:!0,children:[Object(u.jsx)(m.a.Heading,{children:"Warning: Yellow Mark Detected"}),Object(u.jsxs)("p",{children:["To change a yellow mark to a green mark you must have undergone testing for covid, including the authorized covid shot(s). Please go to a UD Covid Testing facility to be allowed into club and other UD facilities. Please look ",Object(u.jsx)("a",{href:"https://www.udel.edu/home/coronavirus/testing/",children:"here"})," for more information Notice: If you have had both shots but still have a yellow mark, please wait 2 weeks for the second shot to come into full affect."]})]});case"Red":return Object(u.jsxs)(m.a,{variant:"danger",dismissible:!0,children:[Object(u.jsx)(m.a.Heading,{children:"Warning: Red Mark Detected"}),Object(u.jsx)("p",{children:"You are currently out of compliance with testing or have Covid. Please contact Student Health Services ASAP: (302)-831-2226"})]});default:return Object(u.jsx)("span",{})}}function v(e){var t=e.getMember,a=e.showEditModal,n=e.addMember,s=Object(c.useState)(""),l=Object(o.a)(s,2),r=l[0],i=l[1],b=Object(c.useState)(""),d=Object(o.a)(b,2),m=d[0],v=d[1],f=Object(c.useState)(""),p=Object(o.a)(f,2),C=p[0],k=p[1];return Object(u.jsxs)(j.a,{className:"Login",children:[Object(u.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),n({name:r,email:m,status:C}),i(""),v(""),k("")},children:[Object(u.jsxs)(O.a,{children:[Object(u.jsx)(j.a,{children:Object(u.jsxs)(h.a.Group,{controlId:"name",children:[Object(u.jsx)(h.a.Label,{className:"label",children:"Full Name "}),Object(u.jsx)(h.a.Control,{className:"textBox",autoFocus:!0,type:"name",autoCapitalize:"on",value:r,onChange:function(e){return i(e.target.value)}})]})}),Object(u.jsx)(j.a,{children:Object(u.jsxs)(h.a.Group,{controlId:"email",children:[Object(u.jsx)(h.a.Label,{className:"label",children:"Email "}),Object(u.jsx)(h.a.Control,{className:"textBox",autoFocus:!0,type:"email",value:m,onChange:function(e){return v(e.target.value)}})]})}),Object(u.jsx)(j.a,{children:Object(u.jsxs)(h.a.Group,{controlId:"healthCheck",children:[Object(u.jsx)(h.a.Label,{className:"label",children:"Health Check"}),Object(u.jsxs)(h.a.Group,{children:[Object(u.jsx)(h.a.Check,{inline:!0,type:"radio",name:"status",value:"Red",id:"red-radio",label:"Red",checked:"Red"===C,onChange:function(e){return k(e.target.value)}}),Object(u.jsx)(h.a.Check,{inline:!0,type:"radio",name:"status",value:"Yellow",id:"yellow-radio",label:"Yellow",checked:"Yellow"===C,onChange:function(e){return k(e.target.value)}}),Object(u.jsx)(h.a.Check,{inline:!0,type:"radio",name:"status",value:"Green",id:"green-radio",label:"Green",checked:"Green"===C,onChange:function(e){return k(e.target.value)}})]})]})})]}),Object(u.jsx)(x.a,{className:"button",type:"submit",id:"submit-button",disabled:!(m.length>0&&r.length>0&&""!==C),children:"Submit"}),Object(u.jsx)(x.a,{className:"button",id:"edit-button",onClick:function(){a(!0)},disabled:!(!!t(0)&&""!==t(0).name&&""!==t(0).email&&""!==t(0).status),children:"Edit"})]}),Object(u.jsx)(g,{status:C})]})}var f=a(68),p=a(69),C=a(47),k=a(39);function w(e){var t=e.getMember,a=e.checkMember,n=e.changeMember,s=e.visible,l=e.setVisible,r=e.club,i=Object(c.useState)(0),j=Object(o.a)(i,2),b=j[0],d=j[1],O=Object(c.useState)(""),m=Object(o.a)(O,2),v=m[0],f=m[1],w=Object(c.useState)(""),y=Object(o.a)(w,2),S=y[0],N=y[1],G=Object(c.useState)(""),M=Object(o.a)(G,2),L=M[0],I=M[1],R=function(){return l(!1)};function Y(){f(""),N(""),I("")}return Object(u.jsxs)(p.a,{show:s,onHide:R,backdrop:"static",keyboard:!1,datatestid:"modal",children:[Object(u.jsx)(k.a,{closeButton:!0,onClick:Y,children:"Edit"}),Object(u.jsx)(g,{status:L}),Object(u.jsxs)(C.a,{children:[Object(u.jsxs)(h.a,{onSubmit:function(e){e.preventDefault();var a=t(b);f(a.name),N(a.email),I(a.status)},children:[Object(u.jsx)(h.a.Group,{children:Object(u.jsx)(h.a.Label,{children:"Row Number"})}),Object(u.jsx)("input",{type:"number",min:"1",max:r.length,onChange:function(e){return t=e.target.valueAsNumber,void(a(t-1)&&d(t-1));var t}}),Object(u.jsx)(x.a,{className:"button",type:"submit",id:"search-button",children:"Search"})]}),Object(u.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),n(b,v,S,L),Y()},children:[Object(u.jsxs)(h.a.Group,{controlId:"name",children:[Object(u.jsx)(h.a.Label,{children:"Name"}),Object(u.jsx)(h.a.Control,{as:"textarea",rows:1,value:v,autoCapitalize:"on",onChange:function(e){return f(e.target.value)}})]}),Object(u.jsxs)(h.a.Group,{controlId:"email",children:[Object(u.jsx)(h.a.Label,{children:"Email"}),Object(u.jsx)(h.a.Control,{as:"textarea",rows:1,value:S,onChange:function(e){return N(e.target.value)}})]}),Object(u.jsxs)(h.a.Group,{controlId:"healthCheck",children:[Object(u.jsx)(h.a.Label,{className:"label",children:"Health Check"}),Object(u.jsxs)(h.a.Group,{children:[Object(u.jsx)(h.a.Check,{inline:!0,type:"radio",name:"status",value:"Red",id:"red-radio",label:"Red",checked:"Red"===L,onChange:function(e){return I(e.target.value)}}),Object(u.jsx)(h.a.Check,{inline:!0,type:"radio",name:"status",value:"Yellow",id:"yellow-radio",label:"Yellow",checked:"Yellow"===L,onChange:function(e){return I(e.target.value)}}),Object(u.jsx)(h.a.Check,{inline:!0,type:"radio",name:"status",value:"Green",id:"green-radio",label:"Green",checked:"Green"===L,onChange:function(e){return I(e.target.value)}})]})]}),Object(u.jsx)(x.a,{className:"button",type:"submit",id:"save-button",onClick:R,disabled:!function(){return v.length>0&&S.length>0},children:"Save Changes"})]})]})]})}var y=a.p+"static/media/CVGC_Logo.b6831654.png";var S=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),l=Object(o.a)(s,2),j=l[0],b=l[1];function h(e){return a[e]}return Object(u.jsxs)(f.a,{className:"App",children:[Object(u.jsx)("img",{src:y,alt:"",id:"CVGC-Logo"}),Object(u.jsx)(O.a,{children:Object(u.jsx)(v,{getMember:h,showEditModal:b,addMember:function(e){n([].concat(Object(i.a)(a),[e]))}})}),Object(u.jsxs)(O.a,{children:[Object(u.jsx)(w,{getMember:h,checkMember:function(e){return!!a[e]},changeMember:function(e,t,c,s){var l=Object(r.a)(Object(r.a)({},a[e]),{},{name:t,email:c,status:s}),o=Object(i.a)(a);o[e]=l,n(o)},visible:j,setVisible:b,club:a}),Object(u.jsx)(d,{theClub:a})]}),Object(u.jsx)(O.a,{})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};a(60);l.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),N()}},[[61,1,2]]]);
//# sourceMappingURL=main.6abac2a3.chunk.js.map