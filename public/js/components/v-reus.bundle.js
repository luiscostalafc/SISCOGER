webpackJsonp([24],{"6agr":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-12 col-md-12 col-xs-12 card"},[s("div",{staticClass:"card-header"},[s("h5",[s("b",[t._v("Réus")]),t._v(t._s(t.titleSubstitute))])]),t._v(" "),t.edit?s("div",[t.only?t._e():s("div",{staticClass:"card-body",class:t.edit?"bordaform":""},[s("form",{attrs:{id:"formReus",name:"formReus"}},[s("input",{attrs:{type:"hidden",name:"id_"+t.dproc},domProps:{value:t.idp}}),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-xs-6"},[s("label",{attrs:{for:"ipm_processocrime"}},[t._v("Processo crime")]),s("br"),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.reu.ipm_processocrime,expression:"reu.ipm_processocrime"}],staticClass:"form-control",attrs:{name:"ipm_processocrime"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.reu,"ipm_processocrime",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Selecione")]),t._v(" "),s("option",{attrs:{value:"Denunciado"}},[t._v("Denunciado")]),t._v(" "),s("option",{attrs:{value:"Arquivado"}},[t._v("Arquivado")])])]),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-xs-6"},[s("label",{attrs:{for:"ipm_julgamento"}},[t._v("Julgamento")]),s("br"),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.reu.ipm_julgamento,expression:"reu.ipm_julgamento"}],staticClass:"form-control",attrs:{name:"ipm_julgamento"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.reu,"ipm_julgamento",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Selecione")]),t._v(" "),s("option",{attrs:{value:"Condenado"}},[t._v("Condenado")]),t._v(" "),s("option",{attrs:{value:"Absolvido"}},[t._v("Absolvido")])])]),t._v(" "),"Condenado"==t.reu.ipm_julgamento?[s("div",{staticClass:"col-lg-1 col-md-1 col-xs-1"},[s("label",[t._v("Anos")]),s("br"),t._v(" "),s("the-mask",{staticClass:"form-control",attrs:{mask:"###",type:"text",maxlength:"3",name:"ipm_pena_anos",placeholder:"Anos"},model:{value:t.reu.ipm_pena_anos,callback:function(e){t.$set(t.reu,"ipm_pena_anos",e)},expression:"reu.ipm_pena_anos"}})],1),t._v(" "),s("div",{staticClass:"col-lg-1 col-md-1 col-xs-1"},[s("label",[t._v("Meses")]),s("br"),t._v(" "),s("the-mask",{staticClass:"form-control",attrs:{mask:"###",type:"text",maxlength:"3",name:"ipm_pena_meses",placeholder:"Meses"},model:{value:t.reu.ipm_pena_meses,callback:function(e){t.$set(t.reu,"ipm_pena_meses",e)},expression:"reu.ipm_pena_meses"}})],1),t._v(" "),s("div",{staticClass:"col-lg-1 col-md-1 col-xs-1"},[s("label",[t._v("Dias")]),s("br"),t._v(" "),s("the-mask",{staticClass:"form-control",attrs:{mask:"###",type:"text",maxlength:"3",name:"ipm_pena_dias",placeholder:"Dias"},model:{value:t.reu.ipm_pena_dias,callback:function(e){t.$set(t.reu,"ipm_pena_dias",e)},expression:"reu.ipm_pena_dias"}})],1),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-3 col-xs-3"},[s("label"),s("br"),t._v(" "),s("v-checkbox",{attrs:{name:"ipm_transitojulgado_bl","true-value":"S","false-value":"0",text:"Transitou em julgado?"},model:{value:t.reu.ipm_transitojulgado_bl,callback:function(e){t.$set(t.reu,"ipm_transitojulgado_bl",e)},expression:"reu.ipm_transitojulgado_bl"}})],1),t._v(" "),s("div",{staticClass:"col-lg-2 col-md-2 col-xs-2"},[s("label",{attrs:{for:"ipm_tipodapena"}},[t._v("Tipo Pena")]),s("br"),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.reu.ipm_tipodapena,expression:"reu.ipm_tipodapena"}],staticClass:"form-control",attrs:{name:"ipm_tipodapena"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.reu,"ipm_tipodapena",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Selecione")]),t._v(" "),s("option",{attrs:{value:"Detenção"}},[t._v("Detenção")]),t._v(" "),s("option",{attrs:{value:"Reclusão"}},[t._v("Reclusão")])])]),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-3 col-xs-3"},[s("label"),s("br"),t._v(" "),s("v-checkbox",{attrs:{name:"ipm_restritiva_bl","true-value":"S","false-value":"0",text:"Restritiva de direito?"},model:{value:t.reu.ipm_restritiva_bl,callback:function(e){t.$set(t.reu,"ipm_restritiva_bl",e)},expression:"reu.ipm_restritiva_bl"}})],1)]:t._e(),t._v(" "),s("div",{staticClass:"col-lg-10 col-md-10 col-xs-10"},[s("label",{attrs:{for:"obs_txt"}},[t._v("Observações")]),s("br"),t._v(" "),s("input",{staticClass:"numero form-control",attrs:{type:"text",name:"obs_txt"},domProps:{value:t.reu.obs_txt}})]),t._v(" "),s("div",{staticClass:"col-lg-1 col-md-1 col-xs-1"},[s("label",[t._v("Cancelar")]),s("br"),t._v(" "),s("a",{staticClass:"btn btn-danger btn-block",on:{click:function(e){return t.clear(!0)}}},[s("i",{staticClass:"fa fa-times",staticStyle:{color:"white"}})])]),t._v(" "),s("div",{staticClass:"col-lg-1 col-md-1 col-xs-1"},[s("label",[t._v("Editar")]),s("br"),t._v(" "),s("a",{staticClass:"btn btn-success btn-block",attrs:{disabled:t.liberaCampo(t.reu)},on:{click:t.editReu}},[s("i",{staticClass:"fa fa-plus",staticStyle:{color:"white"}})])])],2)])]):t._e(),t._v(" "),s("div",{staticClass:"card-footer"},[t.reus.length?s("div",{staticClass:"row bordaform"},[s("div",{staticClass:"col-sm-12"},[s("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),s("tbody",t._l(t.reus,function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a+1))]),t._v(" "),s("td",[t._v(t._s(e.rg))]),t._v(" "),s("td",[t._v(t._s(t._f("SN")(e.ipm_processocrime)))]),t._v(" "),e.ipm_julgamento&&"Absolvido"==e.ipm_julgamento?[s("td",[t._v(t._s(e.ipm_julgamento))]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")])]:[s("td",[t._v(t._s(t._f("SN")(e.ipm_julgamento))+": \n                                    "+t._s(e.ipm_pena_anos)),s("b",[t._v("A")]),t._v("\n                                    "+t._s(e.ipm_pena_meses)),s("b",[t._v("M")]),t._v("\n                                    "+t._s(e.ipm_pena_dias)),s("b",[t._v("D")]),t._v(" \n                                    Transitado? "),s("b",[t._v(t._s(t._f("SN")(e.ipm_transitojulgado_bl)))])]),t._v(" "),s("td",[t._v(t._s(t._f("SN")(e.ipm_tipodapena)))]),t._v(" "),s("td",[t._v(t._s(t._f("SN")(e.ipm_restritiva_bl)))])],t._v(" "),s("td",[s("div",{staticClass:"btn-group"},[s("a",{staticClass:"btn btn-success",staticStyle:{color:"white"},attrs:{type:"button"},on:{click:function(s){return t.replaceReu(e)}}},[s("i",{staticClass:"fa fa-edit"})])])])],2)}),0)])])]):t._e(),t._v(" "),!t.reus.length&&t.only?s("div",[t._m(1)]):t._e()])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"col-sm-1"},[t._v("#")]),t._v(" "),s("th",{staticClass:"col-sm-1"},[t._v("RG")]),t._v(" "),s("th",{staticClass:"col-sm-1"},[t._v("Processo crime")]),t._v(" "),s("th",{staticClass:"col-sm-3"},[t._v("Julgamento")]),t._v(" "),s("th",{staticClass:"col-sm-2"},[t._v("Tipo pena")]),t._v(" "),s("th",{staticClass:"col-sm-2"},[t._v("Rest. direito")]),t._v(" "),s("th",{staticClass:"col-sm-2"},[t._v("Ações")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[e("b",[this._v("Não há registros")])])}]}},IyP5:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},KJQo:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("s9Db"),o=s("hlPV");s.n(o);e.default={mixins:[a.a],components:{TheMask:o.TheMask},props:{unique:{type:Boolean,default:!1},situacao:{type:String,default:""},idp:{type:String,default:""}},data:function(){return{reu:[],reus:[],edit:!1,idedit:"",resultado:!1,only:!1,titleSubstitute:""}},filters:{SN:function(t){var e=t||"-";return e.length<2?"S"==e.toUpperCase()||"Y"==e.toUpperCase()||1==e?"Sim":"Não":e}},created:function(){this.getBaseUrl,this.verifyOnly,this.listReus()},watch:{reus:{handler:function(t){this.dproc,this.idp;localStorage.name=t},deep:!0}},computed:{},methods:{listReus:function(){var t=""+this.dproc+this.idp+"acusados",e=sessionStorage.getItem(t),s=JSON.parse(e);this.reus=Array.isArray(s)?s:[]},showReu:function(t){var e=this.getBaseUrl+"fdi/"+t+"/ver";window.open(e,"_blank")},replaceReu:function(t){this.reu=t,this.titleSubstitute=" - Edição "+t.nome+"/RG:"+t.rg,this.idedit=t.id_envolvido,this.edit=!0},editReu:function(){var t=this,e=this.getBaseUrl+"api/acusado/edit/"+this.idedit,s=document.getElementById("formReus"),a=new FormData(s);axios.post(e,a).then(function(){t.atualizaReus()}).catch(function(t){return console.log(t)})},atualizaReus:function(){var t=this,e=this.getBaseUrl+"api/dados/envolvido/"+this.dproc+"/"+this.idp+"/"+this.situacao;this.dproc&&this.idp&&this.situacao&&axios.get(e).then(function(e){t.reus=e.data;var s=""+t.dproc+t.idp+"acusados";sessionStorage.setItem(s,JSON.stringify(t.reus))}).then(this.clear(!1)).catch(function(t){return console.log(t)})},liberaCampo:function(t){return"Denunciado"==t.ipm_processocrime&&"Absolvido"==t.ipm_julgamento||(!("Denunciado"==t.ipm_processocrime||"Condenado"!=t.ipm_julgamento||!t.ipm_tipodapena)||void 0)},clear:function(t){this.edit=t,this.reu=[],this.titleSubstitute=""}}}},c8nP:function(t,e,s){var a=s("VU/8")(s("KJQo"),s("6agr"),!1,function(t){s("mX0j")},"data-v-0a47843a",null);t.exports=a.exports},mX0j:function(t,e,s){var a=s("IyP5");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("4229c6b6",a,!0,{})},s9Db:function(t,e,s){"use strict";e.a={methods:{list:function(){var t=this,e=this.$root.baseUrl+"api/"+this.module+"/list/"+this.rg;this.rg&&axios.get(e).then(function(e){t.registros=e.data}).catch(function(t){return console.log(t)})},create:function(){var t=this,e=this.$root.baseUrl+"api/"+this.module+"/store";axios.post(e,this.registro).then(function(e){t.transation(e.data.success,"create")}).catch(function(t){return console.log(t)}),this.showModal=!1},edit:function(t){this.registro=t,this.showModal=!0},update:function(t){var e=this,s=this.$root.baseUrl+"api/"+this.module+"/update/"+t;axios.put(s,this.registro).then(function(t){e.transation(t.data.success,"edit")}).catch(function(t){return console.log(t)})},destroy:function(t){var e=this;if(confirm("Você tem certeza?")){var s=this.$root.baseUrl+"api/"+this.module+"/destroy/"+t;axios.delete(s).then(function(t){e.transation(t.data.success,"delete")}).catch(function(t){return console.log(t)})}},transation:function(t,e){var s=this.words(e);this.showModal=!1,t?(this.list(),this.$root.msg(s.success,"success"),this.registro=[]):this.$root.msg(s.fail,"danger")},words:function(t){return"create"==t?{success:"Inserido com sucesso",fail:"Erro ao inserir"}:"edit"==t?{success:"Editado com sucesso",fail:"Erro ao editar"}:"delete"==t?{success:"Apagado com sucesso",fail:"Erro ao apagar"}:void 0}}}}});