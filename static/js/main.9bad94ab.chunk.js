(this.webpackJsonptest_adress_form=this.webpackJsonptest_adress_form||[]).push([[0],{139:function(e,t,r){},249:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(10),o=r.n(c),s=(r(139),r(40)),l=r(43),i=r(50),d=r(17),u=r(287),h=r(284),j=r(125),b=r(24),O=r(5),m=b.a({street:b.b().required("\u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),home:b.b().required("\u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),district:b.b().required("\u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),locality:b.b().required("\u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),area:b.b().required("\u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),region:b.b().required("\u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),country:b.b().required("\u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f")}),v=function(e){var t=Object(j.a)({initialValues:e.state,validationSchema:m,onSubmit:function(r){t.resetForm(),e.setAddress("\u0432\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0430\u0434\u0440\u0435\u0441- \u0433\u043e\u0440\u043e\u0434: ".concat(t.values.locality,", \u0443\u043b\u0438\u0446\u0430: ").concat(t.values.street,",\n             \u0434\u043e\u043c: ").concat(t.values.home)),e.setIsSelectAddress(!1)}});return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{name:"street",value:t.values.street,placeholder:"\u0423\u043b\u0438\u0446\u0430",onChange:t.handleChange,error:t.touched.street&&Boolean(t.errors.street),helperText:t.touched.street&&t.errors.street})}),Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{name:"home",value:t.values.home,placeholder:"\u0434\u043e\u043c",onChange:t.handleChange,error:t.touched.home&&Boolean(t.errors.home),helperText:t.touched.home&&t.errors.home})}),Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{name:"district",value:t.values.district,placeholder:"\u0420\u0430\u0439\u043e\u043d",onChange:t.handleChange,error:t.touched.district&&Boolean(t.errors.district),helperText:t.touched.district&&t.errors.district})}),Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{name:"locality",value:t.values.locality,placeholder:"\u0413\u043e\u0440\u043e\u0434",onChange:t.handleChange,error:t.touched.locality&&Boolean(t.errors.locality),helperText:t.touched.locality&&t.errors.locality})}),Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{name:"area",value:t.values.area,placeholder:"\u0420\u0430\u0439\u043e\u043d",onChange:t.handleChange,error:t.touched.area&&Boolean(t.errors.area),helperText:t.touched.area&&t.errors.area})}),Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{name:"region",value:t.values.region,placeholder:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c",onChange:t.handleChange,error:t.touched.region&&Boolean(t.errors.region),helperText:t.touched.region&&t.errors.region})}),Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{name:"country",value:t.values.country,placeholder:"\u0421\u0442\u0440\u0430\u043d",onChange:t.handleChange,error:t.touched.country&&Boolean(t.errors.country),helperText:t.touched.country&&t.errors.country})}),Object(O.jsx)(h.a,{type:"submit",children:"\u0414\u0430\u043b\u0435\u0435"})]})})},x=r(23),g=r(124),y=r.n(g),p=r(290),f=r(288);function _(e){return Object(O.jsx)(f.a,Object(i.a)({elevation:15,variant:"filled"},e))}function C(e){var t=Object(a.useState)(!0),r=Object(d.a)(t,2),n=r[0],c=r[1],o=function(e,t){"clickaway"!==t&&c(!1)};return Object(O.jsx)(p.a,{open:n,autoHideDuration:6e3,onClose:o,children:Object(O.jsx)(_,{onClose:o,severity:"success",children:e.text})})}var S,k,B,T,q=r(285),w=Object(l.a)(u.a)(S||(S=Object(s.a)(["\n  width: 500px;\n"]))),A=l.a.div(k||(k=Object(s.a)(["\n  font-size: medium\n"]))),F=l.a.div(B||(B=Object(s.a)(["\n  color: red\n"]))),I=function(e){var t,r=Object(a.useState)({street:"",home:"",district:"",locality:"",area:"",region:"",country:""}),n=Object(d.a)(r,2),c=n[0],o=n[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),u=l[0],j=l[1],b=Object(a.useState)(!1),m=Object(d.a)(b,2),g=m[0],p=m[1],f=Object(a.useState)(""),_=Object(d.a)(f,2),S=_[0],k=_[1],B=Object(a.useState)(""),T=Object(d.a)(B,2),I=T[0],E=T[1];Object(a.useEffect)((function(){(t=new google.maps.places.Autocomplete(document.getElementById("autocomplete"),{})).addListener("place_changed",L)}),[]);var L=function(){var e=t.getPlace();if(e.address_components){var r=function(e){var t,r={street:"",home:"",district:"",locality:"",area:"",region:"",country:""},a=Object(x.a)(e.address_components);try{for(a.s();!(t=a.n()).done;){var n=t.value;switch(n.types[0]){case"street_number":r.home=n.long_name;break;case"route":r.street=n.long_name;break;case"sublocality_level_1":r.district=n.long_name;break;case"locality":r.locality=n.long_name;break;case"administrative_area_level_2":r.area=n.long_name;break;case"administrative_area_level_1":r.region=n.long_name;break;case"country":r.country=n.long_name}}}catch(c){a.e(c)}finally{a.f()}return r}(e);o(Object(i.a)(Object(i.a)({},c),r)),p(!0)}else E("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0430\u0434\u0440\u0435\u0441 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430")};return Object(O.jsx)(q.a,{theme:e.theme,children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Add New Address"}),Object(O.jsx)(w,{id:"autocomplete",color:"secondary",variant:"outlined",type:"text",onChange:function(){p(!1),E("")}}),Object(O.jsxs)(F,{children:[" ",I]}),g&&Object(O.jsxs)("div",{children:[Object(O.jsx)(A,{children:" \u0432\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0440\u0430\u0437\u0431\u0438\u0442\u044b\u0439 \u043f\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0430\u0434\u0440\u0435\u0441 "})," ",Object(O.jsxs)(h.a,{onClick:function(){j(!u)},children:[Object(O.jsx)(y.a,{}),"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"]}),u&&Object(O.jsx)(v,{setAddress:k,setIsSelectAddress:p,state:c})]}),S&&Object(O.jsx)(C,{text:S})]})})},E=r(126),L=r(286),P=l.a.div(T||(T=Object(s.a)(["\n  text-align: center;\n  \n"]))),D=Object(E.a)({palette:{primary:{main:L.a[300]},secondary:{main:"#11cb5f"}}});var J=function(){return Object(O.jsx)(P,{children:Object(O.jsx)(I,{theme:D})})},z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,291)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),a(e),n(e),c(e),o(e)}))};o.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root")),z()}},[[249,1,2]]]);
//# sourceMappingURL=main.9bad94ab.chunk.js.map