webpackJsonp([62],{"+LvA":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["rg"],data:function(){return{membros:[]}},mounted:function(){this.listmembros()},methods:{listmembros:function(){var t=this,e=this.$root.baseUrl+"api/fdi/membros/"+this.rg;this.rg&&axios.get(e).then(function(e){t.membros=e.data}).catch(function(t){return console.log(t)})},urlEdit:function(t,e,o){return""+this.$root.baseUrl+t+"/editar/"+e+"/"+o}}}},"+Q+v":function(t,e,o){var r=o("VU/8")(o("+LvA"),o("pFvS"),!1,function(t){o("9Wm3")},"data-v-66ee1f61",null);t.exports=r.exports},"9Wm3":function(t,e,o){var r=o("LQaN");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);o("rjj0")("4eda9722",r,!0,{})},LQaN:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"",""])},pFvS:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-tab",{attrs:{header:"Membro",badge:t.membros.length}},[o("h4",{staticClass:"text-center text-bold"},[t._v("Marcado em procedimentos como Encarregado, Presidente ou Acusador")]),t._v(" "),o("table",{staticClass:"table table-striped"},[o("tbody",[t.membros.length?[o("tr",[o("th",[t._v("Proc.")]),t._v(" "),o("th",[t._v("CDOPM")]),t._v(" "),o("th",[t._v("Situação")]),t._v(" "),o("th",[t._v("Andamento")]),t._v(" "),o("th",[t._v("Ações")])]),t._v(" "),t._l(t.membros,function(e,r){return o("tr",{key:r},[o("td",[t._v(t._s(t._f("toUpper")(e.procedimento))+" "+t._s(e.sjd_ref)+" / "+t._s(e.sjd_ref_ano))]),t._v(" "),o("td",[t._v(t._s(e.cdopm))]),t._v(" "),o("td",[t._v(t._s(e.situacao)+" "),e.rg_sustituto?[t._v("Substituído")]:t._e()],2),t._v(" "),o("td",[t._v(t._s(e.id_andamento))]),t._v(" "),o("td",[o("span",[o("a",{staticClass:"btn btn-info",attrs:{href:t.urlEdit(e.procedimento,e.sjd_ref,e.sjd_ref_ano)}},[o("i",{staticClass:"fa fa-fw fa-edit "})])])])])})]:[o("tr",[o("td",[t._v("Nada encontrado")])])]],2)])])},staticRenderFns:[]}}});