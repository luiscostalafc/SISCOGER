webpackJsonp([5],{"288B":function(t,e,o){var a=o("BRrk");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("6e0202dc",a,!0,{})},"8f8d":function(t,e,o){var a=o("WMr1");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("0f903500",a,!0,{})},BRrk:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"td[data-v-6fdf8008]{white-space:normal!important;word-wrap:break-word}table[data-v-6fdf8008]{table-layout:fixed}",""])},Df7r:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("table",{staticClass:"table table-striped"},[t.lenght?[t._m(0),t._v(" "),o("tbody",t._l(t.registros,function(e,a){return o("tr",{key:a},[o("td",[t._v(t._s(e.elogio_data))]),t._v(" "),o("td",[t._v(t._s(e.opm_abreviatura))]),t._v(" "),o("td",[t._v(t._s(e.descricao_txt))]),t._v(" "),o("td",[o("span",[t.canEdit?[o("a",{staticClass:"btn btn-info",on:{click:function(o){return t.edit(e)}}},[o("i",{staticClass:"fa fa-fw fa-edit "})])]:t._e(),t._v(" "),t.canDelete?[o("a",{staticClass:"btn btn-danger",on:{click:function(o){return t.destroy(e.id_elogio)}}},[o("i",{staticClass:"fa fa-fw fa-trash-o "})])]:t._e()],2)])])}),0)]:[t._m(1)]],2),t._v(" "),t.canCreate?[o("a",{staticClass:"btn btn-primary btn-block",on:{click:t.toCreate}},[o("i",{staticClass:"fa fa-plus"}),t._v("Adicionar Elogio\n        ")])]:t._e(),t._v(" "),o("v-modal",{attrs:{large:"",effect:"fade",width:"70%"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.id_elogio,expression:"registro.id_elogio"}],attrs:{type:"hidden",name:"id"},domProps:{value:t.registro.id_elogio},on:{input:function(e){e.target.composing||t.$set(t.registro,"id_elogio",e.target.value)}}}),t._v(" "),o("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[o("h4",{staticClass:"modal-title"},[t.registro.id_elogio?o("b",[t._v("Editar Elogio")]):o("b",[t._v("Inserir novo Elogio")])])]),t._v(" "),o("div",{attrs:{slot:"modal-body"},slot:"modal-body"},[o("v-label",{attrs:{label:"rg",title:"RG"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.rg,expression:"registro.rg"}],staticClass:"form-control",attrs:{type:"text",size:"12",maxlength:"25",readonly:""},domProps:{value:t.registro.rg},on:{input:function(e){e.target.composing||t.$set(t.registro,"rg",e.target.value)}}})]),t._v(" "),o("v-label",{attrs:{label:"cargo",title:"Posto/Grad."}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.cargo,expression:"registro.cargo"}],staticClass:"form-control",attrs:{type:"text",size:"6",maxlength:"10",readonly:""},domProps:{value:t.registro.cargo},on:{input:function(e){e.target.composing||t.$set(t.registro,"cargo",e.target.value)}}})]),t._v(" "),o("v-label",{attrs:{label:"nome",title:"Nome"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.nome,expression:"registro.nome"}],staticClass:"form-control",attrs:{type:"text",size:"40",readonly:""},domProps:{value:t.registro.nome},on:{input:function(e){e.target.composing||t.$set(t.registro,"nome",e.target.value)}}})]),t._v(" "),o("v-label",{attrs:{label:"elogio_data",title:"Data da publicação do elogio"}},[o("v-datepicker",{attrs:{placeholder:t.registro.elogio_data,"clear-button":""},model:{value:t.registro.elogio_data,callback:function(e){t.$set(t.registro,"elogio_data",e)},expression:"registro.elogio_data"}})],1),t._v(" "),o("v-label",{attrs:{label:"publicacao",title:"Publicação",tooltip:"Ex: BI nº 010/2011"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.publicacao,expression:"registro.publicacao"}],staticClass:"form-control",attrs:{type:"text",size:"40",maxlength:"120"},domProps:{value:t.registro.publicacao},on:{input:function(e){e.target.composing||t.$set(t.registro,"publicacao",e.target.value)}}})]),t._v(" "),o("v-label",{attrs:{label:"opm",title:"OPM do elogio"}},[o("v-opm",{attrs:{name:"cdopm",cdopm:t.registro.cdopm},model:{value:t.registro.cdopm,callback:function(e){t.$set(t.registro,"cdopm",e)},expression:"registro.cdopm"}})],1),t._v(" "),o("v-label",{attrs:{label:"descricao_txt",title:"Descrição",lg:"12",md:"12"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.registro.descricao_txt,expression:"registro.descricao_txt"}],attrs:{id:"foco",rows:"5",cols:"105",width:"100%"},domProps:{value:t.registro.descricao_txt},on:{input:function(e){e.target.composing||t.$set(t.registro,"descricao_txt",e.target.value)}}})])],1),t._v(" "),o("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[o("div",{staticClass:"col-xs-6"},[o("a",{staticClass:"btn btn-default btn-block",on:{click:function(e){t.showModal=!1}}},[t._v("Cancelar")])]),t._v(" "),o("div",{staticClass:"col-xs-6"},[o("v-tooltip",{attrs:{effect:"scale",placement:"top",content:t.msgRequired}},[t.registro.id_elogio?o("a",{staticClass:"btn btn-success btn-block",attrs:{disabled:t.requireds},on:{click:function(e){return e.preventDefault(),t.update(t.registro.id_elogio)}}},[t._v("Editar")]):o("a",{staticClass:"btn btn-success btn-block",attrs:{disabled:t.requireds},on:{click:t.create}},[t._v("Inserir")])])],1)])])],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"col-xs-1"},[e("b",[this._v("Data")])]),this._v(" "),e("th",{staticClass:"col-xs-2"},[e("b",[this._v("OPM")])]),this._v(" "),e("th",{staticClass:"col-xs-7"},[e("b",[this._v("Sintese")])]),this._v(" "),e("th",{staticClass:"col-xs-2"},[e("b",[this._v("Ações")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Nada encontrado")])])}]}},KTVf:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-tab",{attrs:{header:"FDI",badge:t.tam}},[t.canSeeComportamentos?[o("Comportamento",{attrs:{pm:t.pm},on:{length:t.elogiosLenght}})]:t._e(),t._v(" "),t.canSeeElogios?[o("Elogios",{attrs:{pm:t.pm}})]:t._e()],2)},staticRenderFns:[]}},OjKI:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("table",{staticClass:"table table-striped"},[t.lenght?[t._m(0),t._v(" "),o("tbody",t._l(t.registros,function(e,a){return o("tr",{key:a},[o("td",[t._v(t._s(t._f("date_br")(e.data)))]),t._v(" "),o("td",[t._v(t._s(e.comportamento))]),t._v(" "),o("td",[t._v(t._s(e.motivo_txt))]),t._v(" "),o("td",[t._v(t._s(e.publicacao))]),t._v(" "),o("td",[o("span",[t.canEdit?[o("a",{staticClass:"btn btn-info",on:{click:function(o){return t.edit(e)}}},[o("i",{staticClass:"fa fa-fw fa-edit "})])]:t._e(),t._v(" "),t.canDelete?[o("a",{staticClass:"btn btn-danger",on:{click:function(o){return t.destroy(e.id_comportamentopm)}}},[o("i",{staticClass:"fa fa-fw fa-trash-o "})])]:t._e()],2)])])}),0)]:[t._m(1)]],2),t._v(" "),t.canCreate?[o("a",{staticClass:"btn btn-primary btn-block",on:{click:t.toCreate}},[o("i",{staticClass:"fa fa-plus"}),t._v("Adicionar mudança de comportamento\n        ")])]:t._e(),t._v(" "),o("v-modal",{attrs:{large:"",effect:"fade",width:"65%"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.id_comportamentopm,expression:"registro.id_comportamentopm"}],attrs:{type:"hidden",name:"id"},domProps:{value:t.registro.id_comportamentopm},on:{input:function(e){e.target.composing||t.$set(t.registro,"id_comportamentopm",e.target.value)}}}),t._v(" "),o("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[o("h4",{staticClass:"modal-title"},[t.registro.id_comportamentopm?o("b",[t._v("Editar Comportamento")]):o("b",[t._v("Inserir novo Comportamento")])])]),t._v(" "),o("div",{attrs:{slot:"modal-body"},slot:"modal-body"},[o("v-label",{attrs:{lg:"4",label:"rg",title:"RG"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.rg,expression:"registro.rg"}],staticClass:"form-control",attrs:{type:"text",size:"12",maxlength:"25",readonly:""},domProps:{value:t.registro.rg},on:{input:function(e){e.target.composing||t.$set(t.registro,"rg",e.target.value)}}})]),t._v(" "),o("v-label",{attrs:{lg:"4",label:"cargo",title:"Posto/Grad."}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.cargo,expression:"registro.cargo"}],staticClass:"form-control",attrs:{type:"text",size:"6",maxlength:"10",readonly:""},domProps:{value:t.registro.cargo},on:{input:function(e){e.target.composing||t.$set(t.registro,"cargo",e.target.value)}}})]),t._v(" "),o("v-label",{attrs:{lg:"4",label:"nome",title:"Nome"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.nome,expression:"registro.nome"}],staticClass:"form-control",attrs:{type:"text",size:"40",readonly:""},domProps:{value:t.registro.nome},on:{input:function(e){e.target.composing||t.$set(t.registro,"nome",e.target.value)}}})]),t._v(" "),o("v-label",{attrs:{lg:"4",label:"data",title:"Data (Art. 63 RDE)"}},[o("v-datepicker",{attrs:{placeholder:t.registro.data,"clear-button":""},model:{value:t.registro.data,callback:function(e){t.$set(t.registro,"data",e)},expression:"registro.data"}})],1),t._v(" "),o("v-label",{attrs:{lg:"4",label:"publicacao",title:"Publicação",tooltip:"Ex: BI nº 010/2011"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.publicacao,expression:"registro.publicacao"}],staticClass:"form-control",attrs:{type:"text",size:"40",maxlength:"120"},domProps:{value:t.registro.publicacao},on:{input:function(e){e.target.composing||t.$set(t.registro,"publicacao",e.target.value)}}})]),t._v(" "),o("v-label",{attrs:{lg:"4",label:"publicacao",title:"Novo Comportamento"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.registro.id_comportamento,expression:"registro.id_comportamento"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.registro,"id_comportamento",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"0"}},[t._v("Não se Aplica")]),t._v(" "),o("option",{attrs:{value:"1"}},[t._v("Excepcional")]),t._v(" "),o("option",{attrs:{value:"2"}},[t._v("Ótimo")]),t._v(" "),o("option",{attrs:{value:"3"}},[t._v("Bom")]),t._v(" "),o("option",{attrs:{value:"4"}},[t._v("Insuficiente")]),t._v(" "),o("option",{attrs:{value:"5"}},[t._v("Mau")])])]),t._v(" "),o("v-label",{attrs:{lg:"6",label:"motivo",title:"Motivo"}},[0!==t.registro.id_comportamento?o("select",{directives:[{name:"model",rawName:"v-model",value:t.registro.motivo,expression:"registro.motivo"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.registro,"motivo",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"Inclusao na PMPR"}},[t._v("Inclusão na PMPR")]),t._v(" "),o("option",{attrs:{value:'Alt. de comportamento - ART. 51 RDE. §7º I- do "Mau" para o "Insuficiente"'}},[t._v('Alt. de comportamento - ART. 51 RDE. §7º I- do "Mau" para o "Insuficiente"')]),t._v(" "),o("option",{attrs:{value:'Alt. de comportamento - ART. 51 RDE. §7º II- do "Insuficiente" para o "Bom"'}},[t._v('Alt. de comportamento - ART. 51 RDE. §7º II- do "Insuficiente" para o "Bom"')]),t._v(" "),o("option",{attrs:{value:'Alt. de comportamento - ART. 51 RDE. §7º III- do "Bom" para o "Otimo"'}},[t._v('Alt. de comportamento - ART. 51 RDE. §7º III- do "Bom" para o "Ótimo"')]),t._v(" "),o("option",{attrs:{value:'Alt. de comportamento - ART. 51 RDE. §7º IV- do "Otimo" para o "Excepcional"'}},[t._v('Alt. de comportamento - ART. 51 RDE. §7º IV- do "Ótimo" para o "Excepcional"')]),t._v(" "),o("option",{attrs:{value:"Cancelamento de Punicao - ART. 59 RDE."}},[t._v("Cancelamento de Punicao - ART. 59 RDE.")])]):o("select",{directives:[{name:"model",rawName:"v-model",value:t.registro.motivo,expression:"registro.motivo"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.registro,"motivo",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"Cancelamento de Punicao - ART. 59 RDE."}},[t._v("Cancelamento de Punicao - ART. 59 RDE.")])])]),t._v(" "),"Cancelamento de Punicao - ART. 59 RDE."==t.registro.motivo?o("v-label",{attrs:{lg:"6",label:"punicao",title:"Qual punição"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.registro.id_punicao,expression:"registro.id_punicao"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.registro,"id_punicao",e.target.multiple?o:o[0])}}},t._l(t.punicoes,function(e){return o("option",{key:e.id_punicao,domProps:{value:e.id_punicao}},[t._v("\n                        "+t._s(e.procedimento)+": "+t._s(e.sjd_ref)+"/"+t._s(e.sjd_ref_ano)+" "+t._s(t._f("desc")(e.descricao_txt))+"\n                    ")])}),0)]):t._e(),t._v(" "),o("v-label",{attrs:{label:"obs_txt",title:"Observações",lg:"12",md:"12"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.registro.motivo_txt,expression:"registro.motivo_txt"}],attrs:{id:"foco",rows:"5",cols:"105",width:"100%"},domProps:{value:t.registro.motivo_txt},on:{input:function(e){e.target.composing||t.$set(t.registro,"motivo_txt",e.target.value)}}})])],1),t._v(" "),o("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[o("div",{staticClass:"col-xs-6"},[o("a",{staticClass:"btn btn-default btn-block",on:{click:function(e){t.showModal=!1}}},[t._v("Cancelar")])]),t._v(" "),o("div",{staticClass:"col-xs-6"},[o("v-tooltip",{attrs:{effect:"scale",placement:"top",content:t.msgRequired}},[t.registro.id_comportamentopm?o("a",{staticClass:"btn btn-success btn-block",attrs:{disabled:t.requireds},on:{click:function(e){return e.preventDefault(),t.update(t.registro.id_comportamentopm)}}},[t._v("Editar")]):o("a",{staticClass:"btn btn-success btn-block",attrs:{disabled:t.requireds},on:{click:t.create}},[t._v("Inserir")])])],1)])])],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",{staticClass:"col-xs-1"},[o("b",[t._v("Data")])]),t._v(" "),o("th",{staticClass:"col-xs-2"},[o("b",[t._v("Novo comportamento")])]),t._v(" "),o("th",{staticClass:"col-xs-5"},[o("b",[t._v("Sintese")])]),t._v(" "),o("th",{staticClass:"col-xs-2"},[o("b",[t._v("Publicacao")])]),t._v(" "),o("th",{staticClass:"col-xs-2"},[o("b",[t._v("Ações")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Nada encontrado")])])}]}},Pi0z:function(t,e,o){var a=o("VU/8")(o("rxG6"),o("Df7r"),!1,function(t){o("288B")},"data-v-6fdf8008",null);t.exports=a.exports},WMr1:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"",""])},c62M:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("pRof"),s=o.n(a),r=o("Pi0z"),i=o.n(r);e.default={components:{Comportamento:s.a,Elogios:i.a},props:["pm"],data:function(){return{canSeeComportamentos:!1,canSeeElogios:!1,tam:0}},mounted:function(){this.canSeeComportamentos=this.$root.hasPermission("ver-mudanca-comportamento"),this.canSeeElogios=this.$root.hasPermission("ver-elogios")},methods:{elogiosLenght:function(t){this.tam=t}}}},"l2/y":function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"td[data-v-41b2c618]{white-space:normal!important;word-wrap:break-word}table[data-v-41b2c618]{table-layout:fixed}",""])},pRof:function(t,e,o){var a=o("VU/8")(o("x9LP"),o("OjKI"),!1,function(t){o("povV")},"data-v-41b2c618",null);t.exports=a.exports},povV:function(t,e,o){var a=o("l2/y");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("5442c4f2",a,!0,{})},rxG6:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pm"],data:function(){return{module:"elogio",registros:[],registro:{},punicoes:[],canCreate:!1,canEdit:!1,canDelete:!1,showModal:!1,rg:"",nome:""}},created:function(){this.list(),this.canCreate=this.$root.hasPermission("criar-elogio"),this.canEdit=this.$root.hasPermission("editar-elogio"),this.canDelete=this.$root.hasPermission("apagar-elogio"),this.rg=this.$root.dadoSession("rg"),this.nome=this.$root.dadoSession("nome")},watch:{lenght:function(){this.$root.$emit("length",this.length)}},computed:{requireds:function(){return!this.registro.elogio_data||!this.registro.descricao_txt},lenght:function(){return this.registros?Object.keys(this.registros).length:0},msgRequired:function(){return"Para liberar este botão os campos: DATA e DESCRIÇÃO deve estar preenchidos"}},methods:{list:function(){var t=this,e=this.$root.baseUrl+"api/"+this.module+"/list/"+this.pm.RG;this.pm.RG&&axios.get(e).then(function(e){t.registros=e.data}).catch(function(t){return console.log(t)})},toCreate:function(){this.showModal=!0,this.registro.rg=this.pm.RG,this.registro.cargo=this.pm.CARGO,this.registro.nome=this.pm.NOME,this.registro.rg_cadastro=this.rg,this.registro.digitador=this.nome},create:function(){var t=this;if(!this.requireds){var e=this.$root.baseUrl+"api/"+this.module+"/store";axios.post(e,this.registro).then(function(e){t.transation(e.data.success,"create")}).catch(function(t){return console.log(t)}),this.showModal=!1}},edit:function(t){this.registro=t,this.registro.rg_cadastro=this.rg,this.registro.digitador=this.nome,this.showModal=!0},update:function(t){var e=this;if(!this.requireds){var o=this.$root.baseUrl+"api/"+this.module+"/update/"+t;axios.put(o,this.registro).then(function(t){e.transation(t.data.success,"edit")}).catch(function(t){return console.log(t)})}},destroy:function(t){var e=this;if(confirm("Você tem certeza?")){var o=this.$root.baseUrl+"api/"+this.module+"/destroy/"+t;axios.delete(o).then(function(t){e.transation(t.data.success,"delete")}).catch(function(t){return console.log(t)})}},transation:function(t,e){var o=this.words(e);this.showModal=!1,t?(this.list(),this.$root.msg(o.success,"success"),this.registro={}):this.$root.msg(o.fail,"danger")},words:function(t){return"create"==t?{success:"Inserido com sucesso",fail:"Erro ao inserir"}:"edit"==t?{success:"Editado com sucesso",fail:"Erro ao editar"}:"delete"==t?{success:"Apagado com sucesso",fail:"Erro ao apagar"}:void 0},listPunicoes:function(){return!0}}}},uzCe:function(t,e,o){var a=o("VU/8")(o("c62M"),o("KTVf"),!1,function(t){o("8f8d")},"data-v-9b98160c",null);t.exports=a.exports},x9LP:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pm"],data:function(){return{module:"comportamento",registros:[],registro:{},punicoes:[],canCreate:!1,canEdit:!1,canDelete:!1,showModal:!1}},created:function(){this.list(),this.listPunicoes(),this.canCreate=this.$root.hasPermission("criar-comportamento"),this.canEdit=this.$root.hasPermission("editar-comportamento"),this.canDelete=this.$root.hasPermission("apagar-comportamento")},filters:{desc:function(t){return t?"("+t.substring(0,25)+"...)":""}},computed:{requireds:function(){return!(this.registro.id_comportamento&&this.registro.motivo&&this.registro.motivo_txt)},lenght:function(){return this.registros?Object.keys(this.registros).length:0},msgRequired:function(){return"Para liberar este botão os campos: COMPORTAMENTO, MOTIVO e DESCRIÇÃO deve estar preenchidos"}},methods:{list:function(){var t=this,e=this.$root.baseUrl+"api/"+this.module+"/list/"+this.pm.RG;this.pm.RG&&axios.get(e).then(function(e){t.registros=e.data,t.$emit("length",t.length)}).catch(function(t){return console.log(t)})},toCreate:function(){this.showModal=!0,this.registro.rg=this.pm.RG,this.registro.cargo=this.pm.CARGO,this.registro.nome=this.pm.NOME},create:function(){var t=this;if(!this.requireds){var e=this.$root.baseUrl+"api/"+this.module+"/store";axios.post(e,this.registro).then(function(e){t.transation(e.data.success,"create")}).catch(function(t){return console.log(t)}),this.showModal=!1}},edit:function(t){this.registro=t,this.showModal=!0},update:function(t){var e=this;if(!this.requireds){var o=this.$root.baseUrl+"api/"+this.module+"/update/"+t;axios.put(o,this.registro).then(function(t){e.transation(t.data.success,"edit")}).catch(function(t){return console.log(t)})}},destroy:function(t){var e=this;if(confirm("Você tem certeza?")){var o=this.$root.baseUrl+"api/"+this.module+"/destroy/"+t;axios.delete(o).then(function(t){e.transation(t.data.success,"delete")}).catch(function(t){return console.log(t)})}},transation:function(t,e){var o=this.words(e);this.showModal=!1,t?(this.list(),this.$root.msg(o.success,"success"),this.registro={}):this.$root.msg(o.fail,"danger")},words:function(t){return"create"==t?{success:"Inserido com sucesso",fail:"Erro ao inserir"}:"edit"==t?{success:"Editado com sucesso",fail:"Erro ao editar"}:"delete"==t?{success:"Apagado com sucesso",fail:"Erro ao apagar"}:void 0},listPunicoes:function(){var t=this;if(this.pm.RG){var e=this.$root.baseUrl+"api/fdi/punicoes/"+this.pm.RG;axios.get(e).then(function(e){t.punicoes=e.data}).catch(function(t){return console.log(t)})}return!0}}}}});