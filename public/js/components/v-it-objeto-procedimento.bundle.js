webpackJsonp([50],{"Fi+k":function(t,a,e){var o=e("yl5Q");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("6bcf60b9",o,!0,{})},"M0+t":function(t,a,e){var o=e("VU/8")(e("ZQKJ"),e("wCD/"),!1,function(t){e("Fi+k")},"data-v-090bf7fb",null);t.exports=o.exports},ZQKJ:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{op:"viatura"}}}},"wCD/":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-label",{attrs:{label:"id_objetoprocedimento",title:"Objeto do procedimento"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.op,expression:"op"}],staticClass:"form-control",attrs:{id:"id_objetoprocedimento",name:"objetoprocedimento",required:"true"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.op=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:""}},[t._v("Selecione")]),t._v(" "),e("option",{attrs:{value:"arma"}},[t._v("arma")]),t._v(" "),e("option",{attrs:{value:"munição"}},[t._v("munição")]),t._v(" "),e("option",{attrs:{value:"semovente"}},[t._v("semovente")]),t._v(" "),e("option",{attrs:{value:"viatura"}},[t._v("viatura")]),t._v(" "),e("option",{attrs:{value:"outros"}},[t._v("outros")])])]),t._v(" "),"viatura"===t.op?[e("v-label",{attrs:{label:"vtr_placa",title:"Placa da viatura (sem traço)"}},[e("input",{staticClass:"form-control ",attrs:{id:"vtr_placa",name:"vtr_placa",type:"text"}})]),t._v(" "),e("v-label",{attrs:{label:"vtr_prefixo",title:"Prefixo da viatura"}},[e("input",{staticClass:"form-control ",attrs:{id:"vtr_prefixo",name:"vtr_prefixo",type:"text"}})]),t._v(" "),e("v-label",{attrs:{label:"tipo_acidente",title:"Tipo acidente"}},[e("select",{staticClass:"form-control",attrs:{name:"tipo_acidente"}},[e("option",{attrs:{value:"-"}},[t._v("-")]),t._v(" "),e("option",{attrs:{value:"nao identificado"}},[t._v("Não identificado")]),t._v(" "),e("option",{attrs:{value:"abalroamento lateral"}},[t._v("Abalroamento lateral")]),t._v(" "),e("option",{attrs:{value:"abalroamento transversal"}},[t._v("Abalroamento transversal")]),t._v(" "),e("option",{attrs:{value:"atropelamento"}},[t._v("Atropelamento")]),t._v(" "),e("option",{attrs:{value:"atropelamento de animal"}},[t._v("Atropelamento de animal")]),t._v(" "),e("option",{attrs:{value:"capotamento"}},[t._v("Capotamento")]),t._v(" "),e("option",{attrs:{value:"colisao frontal"}},[t._v("Colisão frontal")]),t._v(" "),e("option",{attrs:{value:"colisao traseira"}},[t._v("Colisão traseira")]),t._v(" "),e("option",{attrs:{value:"choque"}},[t._v("Choque")]),t._v(" "),e("option",{attrs:{value:"engavetamento"}},[t._v("Engavetamento")]),t._v(" "),e("option",{attrs:{value:"incendio"}},[t._v("Incêndio")]),t._v(" "),e("option",{attrs:{value:"queda de passageiro"}},[t._v("Queda de passageiro")]),t._v(" "),e("option",{attrs:{value:"queda de objeto"}},[t._v("Queda de objeto")]),t._v(" "),e("option",{attrs:{value:"queda de moto"}},[t._v("Queda de moto")]),t._v(" "),e("option",{attrs:{value:"queda de veiculo"}},[t._v("Queda de veículo")]),t._v(" "),e("option",{attrs:{value:"tombamento"}},[t._v("Tombamento")]),t._v(" "),e("option",{attrs:{value:"acidente complexo"}},[t._v("Acidente complexo")]),t._v(" "),e("option",{attrs:{value:"nao identificado"}},[t._v("Não identificado")])])]),t._v(" "),e("v-label",{attrs:{label:"avarias",title:"Avarias"}},[e("select",{staticClass:"form-control",attrs:{name:"avarias"}},[e("option",{attrs:{value:""}},[t._v("Selecione")]),t._v(" "),e("option",{attrs:{value:"Pequena Monta"}},[t._v("Pequena Monta")]),t._v(" "),e("option",{attrs:{value:"Media Monta"}},[t._v("Media Monta")]),t._v(" "),e("option",{attrs:{value:"Grande Monta"}},[t._v("Grande Monta")])])]),t._v(" "),e("v-label",{attrs:{label:"situacaoviatura",title:"Situação Viatura"}},[e("select",{staticClass:"form-control",attrs:{name:"situacaoviatura"}},[e("option",{attrs:{value:"nao informado"}},[t._v("Não informado")]),t._v(" "),e("option",{attrs:{value:"consertada com onus"}},[t._v("Consertada com ônus")]),t._v(" "),e("option",{attrs:{value:"consertada sem onus"}},[t._v("Consertada sem ônus")]),t._v(" "),e("option",{attrs:{value:"inservivel"}},[t._v("Inservível")]),t._v(" "),e("option",{attrs:{value:"aguarda conserto"}},[t._v("Aguarda conserto")])])])]:t._e(),t._v(" "),"arma"===t.op?[e("v-label",{attrs:{label:"identificacao_arma",title:"Identificação da arma"}},[e("input",{staticClass:"form-control ",attrs:{id:"identificacao_arma",name:"vtr_placa",type:"text"}})])]:t._e(),t._v(" "),"munição"===t.op?[e("v-label",{attrs:{label:"identificacao_municao",title:"Identificação da munição"}},[e("input",{staticClass:"form-control ",attrs:{id:"identificacao_municao",name:"vtr_placa",type:"text"}})])]:t._e(),t._v(" "),"semovente"===t.op?[e("v-label",{attrs:{label:"identificacao_semovente",title:"Identificação do semovente"}},[e("input",{staticClass:"form-control ",attrs:{id:"identificacao_semovente",name:"vtr_placa",type:"text"}})])]:t._e(),t._v(" "),"outros"===t.op?[e("v-label",{attrs:{label:"outros",title:"Identificação Outros"}},[e("input",{staticClass:"form-control ",attrs:{id:"outros",name:"vtr_placa",type:"text"}})])]:t._e()],2)},staticRenderFns:[]}},yl5Q:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])}});