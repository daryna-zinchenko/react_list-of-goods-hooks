(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,r=n(4),c=n.n(r),o=n(5),a=n(6),i=n(9),l=n(7),u=n(8),h=n(2),d=n.n(h),b=(n(14),n(15),n(1)),p=n.n(b),j=n(0),N=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function f(e,t){var n=t.sortType,r=t.isReversed,c=Object(u.a)(e);return c.sort((function(e,t){switch(n){case s.ALPHABET:return e.localeCompare(t);case s.LENGTH:return e.length-t.length;default:return 0}})),r&&c.reverse(),console.log(n,r),c}!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var v=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},e.handleSort=function(t){switch(t){case s.ALPHABET:e.setState({sortType:s.ALPHABET});break;case s.LENGTH:e.setState({sortType:s.LENGTH})}},e.handleReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleReset=function(){e.setState({isReversed:!1,sortType:s.NONE})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isReversed,r=t.sortType;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info ".concat(r!==s.ALPHABET?"is-light":"")),onClick:function(){return e.handleSort(s.ALPHABET)},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success ".concat(r!==s.LENGTH?"is-light":"")),onClick:function(){return e.handleSort(s.LENGTH)},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning ".concat(n?"":"is-light")),onClick:function(){return e.handleReverse()},children:"Reverse"}),(r!==s.NONE||n)&&Object(j.jsx)("button",{type:"button",className:p()("button is-danger is-light"),onClick:function(){return e.handleReset()},children:"Reset"})]}),Object(j.jsx)("ul",{children:f(N,{sortType:r,isReversed:n}).map((function(e){return Object(j.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})}}]),n}(d.a.Component);c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.873ff4ee.chunk.js.map