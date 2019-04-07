(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e23b8c0"],{"2f21":function(t,e,s){"use strict";var a=s("79e5");t.exports=function(t,e){return!!t&&a(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,s){"use strict";var a=s("5ca1"),i=s("d8e8"),n=s("4bf8"),r=s("79e5"),o=[].sort,u=[1,2,3];a(a.P+a.F*(r(function(){u.sort(void 0)})||!r(function(){u.sort(null)})||!s("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(n(this)):o.call(n(this),i(t))}})},"6b76":function(t,e,s){"use strict";var a=s("6d82"),i=s.n(a);i.a},"6d82":function(t,e,s){},"867f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.budget?s("div",{staticClass:"budget"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col col-md-12"},[s("app-back")],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col col-md-12"},[s("app-panel",{attrs:{title:t.budget.name,footer:!1}},[s("div",{staticClass:"budget__info",attrs:{slot:"body"},slot:"body"},[s("p",[t._v("Balance: "+t._s(t.balance.toFixed(2))+" "+t._s(t.budget.currency))]),t.budget.transactions&&t.budget.transactions.length?s("div",[s("p",[t._v("Average transaction amount: "+t._s(t.avgTransactionAmount.toFixed(2))+" "+t._s(t.budget.currency))]),s("p",[t._v("Maximum transaction amount: "+t._s(t.maxTransactionAmount.toFixed(2))+" "+t._s(t.budget.currency))]),s("p",[t._v("Minimum transaction amount: "+t._s(t.minTransactionAmount.toFixed(2))+" "+t._s(t.budget.currency))])]):t._e()])])],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col col-md-8"},[s("app-panel",{attrs:{title:"Transactions",footer:!1}},[t.budget.transactions&&t.budget.transactions.length?s("ul",{staticClass:"budgets__list",attrs:{slot:"body"},slot:"body"},t._l(t.budget.transactions,function(e,a){return s("li",{key:a,staticClass:"budgets__item"},[s("div",{staticClass:"budgets__index"},[t._v("#"+t._s(a+1))]),s("div",{staticClass:"budgets__name"},[s("strong",[t._v(t._s(e.target)+" - "+t._s(e.sum.toFixed(2))+" "+t._s(e.currency))])]),s("div",{staticClass:"budgets__actions"},[s("button",{staticClass:"btn btn--del",on:{click:function(s){return t.deleteTransaction(e.id)}}},[t._v("Delete")])])])}),0):s("div",{attrs:{slot:"body"},slot:"body"},[t._v("Please create a transaction to see it in the list.")])])],1),s("div",{staticClass:"col col-md-4"},[s("app-panel",{attrs:{title:"Сreate a new transaction",footer:!1}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.createTransuction(e)}}},[s("div",{staticClass:"form__item",class:{"is-invalid":t.errors.first("target")}},[s("label",{attrs:{for:"budgetTarget"}},[t._v("Target")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.target,expression:"target"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form__control",attrs:{type:"text",id:"budgetTarget",name:"target"},domProps:{value:t.target},on:{input:function(e){e.target.composing||(t.target=e.target.value)}}}),s("span",{staticClass:"invalid-text"},[t._v(t._s(t.errors.first("target")))])]),s("div",{staticClass:"form__item",class:{"is-invalid":t.errors.first("selectedCurrency")}},[s("label",{attrs:{for:"budgetCurrency"}},[t._v("Currency")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCurrency,expression:"selectedCurrency"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form__control",attrs:{id:"budgetCurrency",name:"selectedCurrency"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedCurrency=e.target.multiple?s:s[0]}}},t._l(t.currency,function(e,a){return s("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])}),0),s("span",{staticClass:"invalid-text"},[t._v(t._s(t.errors.first("selectedCurrency")))])]),s("div",{staticClass:"form__item",class:{"is-invalid":t.errors.first("sum")}},[s("label",{attrs:{for:"budgetSum"}},[t._v("Sum")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.sum,expression:"sum"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form__control",attrs:{type:"number",step:"any",id:"budgetSum",name:"sum"},domProps:{value:t.sum},on:{input:function(e){e.target.composing||(t.sum=e.target.value)}}}),s("span",{staticClass:"invalid-text"},[t._v(t._s(t.errors.first("sum")))])]),s("div",{staticClass:"form__item"},[s("button",{staticClass:"btn btn--create form__btn",attrs:{type:"submit",disabled:!t.isFormValid}},[t._v("Create")])])])])])],1)])])]):t._e()},i=[],n=(s("7514"),s("55dd"),s("ac6a"),s("0eae")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"back-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goBack(e)}}},[t._v("← Back")])},o=[],u={methods:{goBack:function(){this.$router.go(-1)}}},c=u,l=(s("6b76"),s("2877")),d=Object(l["a"])(c,r,o,!1,null,"43228730",null),m=d.exports,f={name:"budget",components:{AppPanel:n["a"],AppBack:m},data:function(){return{id:this.$route.params.id,selectedCurrency:"",target:"",sum:""}},computed:{allBudgetIds:function(){return this.$store.state.budgetList.map(function(t){return t.id})},isFormValid:function(){return this.selectedCurrency&&this.target.trim()&&this.sum},currency:function(){return this.$store.state.currency},budget:function(){var t=this;return this.$store.state.budgetList.filter(function(e){return e.id===+t.id})[0]},rates:function(){return this.$store.state.rates},transactionsToUSD:function(){var t=this,e=[];return this.budget.transactions.forEach(function(s){e.push(+s.sum/t.rates[s.currency])}),e},amountUSD:function(){return this.amount/this.budgetRate},sumToUSD:function(){return this.sum/this.rates[this.selectedCurrency]},allTransactionSumToUSD:function(){return this.transactionsToUSD.reduce(function(t,e){return t+e},0)},balance:function(){return(this.amountUSD-this.allTransactionSumToUSD)*this.budgetRate},avgTransactionAmount:function(){return this.allTransactionSumToUSD/this.transactionsToUSD.length*this.budgetRate},maxTransactionAmount:function(){return this.transactionsToUSD.sort(function(t,e){return e-t})[0]*this.budgetRate},minTransactionAmount:function(){return this.transactionsToUSD.sort(function(t,e){return t-e})[0]*this.budgetRate},amount:function(){return this.budget.amount},budgetRate:function(){return this.rates[this.budget.currency]},limitOverflow:function(){return((this.amountUSD-this.allTransactionSumToUSD-this.sumToUSD)*this.budgetRate).toFixed(2)}},methods:{createTransuction:function(){if(this.limitOverflow>=0){var t={currency:this.selectedCurrency,target:this.target,sum:+this.sum,id:+this.id,balance:this.balance};this.$store.dispatch("createTransaction",t).then(this.$store.dispatch("updateBudgetAfterTransaction",{id:+this.id,balance:this.balance})),this.resetForm()}else this.$flashStorage.flash("transaction exceeds the limit by ".concat(Math.abs(this.limitOverflow)," ").concat(this.selectedCurrency),"error",{timeout:3e3})},resetForm:function(){this.selectedCurrency="",this.target="",this.sum="",this.$validator.reset()},deleteTransaction:function(t){var e=this.budget.transactions.filter(function(e){return e.id!==t}),s={id:+this.id,transactions:e,balance:this.balance};this.$store.dispatch("deleteTransaction",s).then(this.$store.dispatch("updateBudgetAfterTransaction",{id:+this.id,balance:this.balance}))},goHome:function(){var t=this,e=this.allBudgetIds.find(function(e){return e===+t.id});e||this.$router.push("/budgets/")}},watch:{$route:function(t){this.id=t.params.id,this.goHome()}},created:function(){this.goHome()}},h=f,v=Object(l["a"])(h,a,i,!1,null,null,null);e["default"]=v.exports},ac6a:function(t,e,s){for(var a=s("cadf"),i=s("0d58"),n=s("2aba"),r=s("7726"),o=s("32e9"),u=s("84f2"),c=s("2b4c"),l=c("iterator"),d=c("toStringTag"),m=u.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(f),v=0;v<h.length;v++){var g,b=h[v],p=f[b],_=r[b],C=_&&_.prototype;if(C&&(C[l]||o(C,l,m),C[d]||o(C,d,b),u[b]=m,p))for(g in a)C[g]||n(C,g,a[g],!0)}}}]);
//# sourceMappingURL=chunk-2e23b8c0.999158b4.js.map