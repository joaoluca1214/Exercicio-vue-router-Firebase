(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["perfil"],{"10d2":function(t,e,i){"use strict";var n=i("8dd9");e["a"]=n["a"]},"68f9":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"pa-6 pl-4",attrs:{fluid:""}},[i("h1",{staticClass:"h1 text-center"},[t._v(" Perfil")]),i("v-form",[i("v-container",[i("v-text-field",{attrs:{label:"nome"},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}}),i("v-text-field",{attrs:{label:"sobrenome"},model:{value:t.sobrenome,callback:function(e){t.sobrenome=e},expression:"sobrenome"}}),i("v-btn",{attrs:{color:"green",dark:""},on:{click:function(e){return t.sauverProfil()}}},[t._v("salvar")])],1)],1)],1)},s=[],r=i("1da1"),a=(i("96cf"),i("4ee7")),o={data:function(){return{nome:"",sobrenome:"",uid:"",avecProfil:!1}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.uid=a["a"].currentUser.uid,e.next=3,a["b"].where("uid","==",t.uid).get();case 3:i=e.sent,i.docs.legth>0&&(t.avecProfil=!0,n=i.docs,t.profileId=n.id,t.nome=n.data().nome,t.sobrenome=n.data().sobrenome);case 5:case"end":return e.stop()}}),e)})))()},methods:{sauverProfil:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!0!==t.avecProfil){e.next=5;break}return e.next=3,a["b"].doc(t.profileId).update({nome:t.nome,sobrenome:t.sobrenome});case 3:e.next=8;break;case 5:return e.next=7,a["b"].add({uid:t.uid,nome:t.nome,sobrenome:t.sobrenome});case 7:t.avecProfil=!0;case 8:case"end":return e.stop()}}),e)})))()}}},l=o,c=i("2877"),u=i("6544"),h=i.n(u),d=i("8336"),b=i("a523"),v=i("4bd4"),f=i("8654"),m=Object(c["a"])(l,n,s,!1,null,null,null);e["default"]=m.exports;h()(m,{VBtn:d["a"],VContainer:b["a"],VForm:v["a"],VTextField:f["a"]})},8336:function(t,e,i){"use strict";var n=i("53ca"),s=i("3835"),r=i("5530"),a=(i("c7cd"),i("a9e3"),i("caad"),i("86cc"),i("10d2")),o=(i("99af"),i("8d4f"),i("90a2")),l=i("a9ad"),c=i("80d2"),u=l["a"].extend({name:"v-progress-circular",directives:{intersect:o["a"]},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(c["g"])(this.calculatedSize),width:Object(c["g"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,i){this.isVisible=i}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),h=u,d=i("4e82"),b=i("f2e7"),v=i("c995"),f=i("fe6c"),m=i("1c87"),p=i("af2b"),g=i("58df"),x=i("d9bd"),w=Object(g["a"])(a["a"],m["a"],f["a"],p["a"],Object(d["a"])("btnToggle"),Object(b["b"])("inputValue"));e["a"]=w.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({"v-btn":!0},m["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return v["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(r["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(s["a"])(e,2),n=i[0],r=i[1];t.$attrs.hasOwnProperty(n)&&Object(x["a"])(n,r,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(h,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),s=i.tag,r=i.data,a=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes(Object(n["a"])(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?r:a(this.color,r),e)}})},"86cc":function(t,e,i){},"8d4f":function(t,e,i){}}]);
//# sourceMappingURL=perfil.12ee9d09.js.map