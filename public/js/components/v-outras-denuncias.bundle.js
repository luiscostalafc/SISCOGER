webpackJsonp([1,6,16,35,37],{"1rBJ":function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"label.checkbox[data-v-13a0f13e]{position:relative;padding-left:18px}label.checkbox>input[data-v-13a0f13e]{box-sizing:border-box;position:absolute;z-index:-1;padding:0;opacity:0;margin:0}label.checkbox>.icon[data-v-13a0f13e]{position:absolute;top:.2rem;left:0;display:block;width:1.4rem;height:1.4rem;line-height:1rem;text-align:center;user-select:none;border-radius:.35rem;background-repeat:no-repeat;background-position:50%;background-size:50% 50%}label.checkbox:not(.active)>.icon[data-v-13a0f13e]{background-color:#ddd;border:1px solid #bbb}label.checkbox>input:focus~.icon[data-v-13a0f13e]{outline:0;border:1px solid #66afe9;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}label.checkbox.active>.icon[data-v-13a0f13e]{background-size:1rem 1rem;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+)}label.checkbox.active .btn-default[data-v-13a0f13e]{filter:brightness(75%)}.btn.readonly[data-v-13a0f13e],label.checkbox.disabled[data-v-13a0f13e],label.checkbox.readonly[data-v-13a0f13e]{filter:alpha(opacity=65);box-shadow:none;opacity:.65}label.btn>input[type=checkbox][data-v-13a0f13e]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}",""])},D0wg:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{button:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},falseValue:{default:!1},name:{type:String,default:null},text:{type:String,default:null},readonly:{type:Boolean,default:!1},trueValue:{default:!0},type:{type:String,default:null},value:{default:!1},check:{type:Boolean,default:!1}},data:function(){return{checked:this.value===this.trueValue||this.check}},computed:{inGroup:function(){return this.$parent&&this.$parent.btnGroup&&!this.$parent._radioGroup},isButton:function(){return this.button||this.$parent&&this.$parent.btnGroup&&this.$parent.buttons},isFalse:function(){return this.value===this.falseValue},isTrue:function(){return this.value===this.trueValue},parentValue:function(){return this.$parent.val},typeColor:function(){return this.type||this.$parent&&this.$parent.type||"default"}},watch:{checked:function(t,e){var o=t?this.trueValue:this.falseValue;this.$emit("checked",t),this.$emit("input",o),this.updateParent()},parentValue:function(t){this.updateFromParent()},value:function(t,e){var o=t===this.trueValue;this.checked!==o&&(this.checked=o)}},created:function(){if(this.inGroup){var t=this.$parent;t._checkboxGroup=!0,t.val instanceof Array||(t.val=[])}},mounted:function(){this.updateFromParent()},methods:{updateFromParent:function(){if(this.inGroup){var t=this.$parent.val.indexOf(this.trueValue);this.checked=~t}},updateParent:function(){if(this.inGroup){var t=this.$parent.val.indexOf(this.trueValue);this.checked&&!~t&&this.$parent.val.push(this.trueValue),!this.checked&&~t&&this.$parent.val.splice(t,1)}},toggle:function(){this.disabled||this.readonly||(this.checked=!this.checked)}}}},EPUk:function(t,e,o){var n=o("YiKi");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("1ab92fba",n,!0,{})},FfMg:function(t,e,o){var n=o("VU/8")(o("lO1W"),o("wuYg"),!1,function(t){o("EPUk")},null,null);t.exports=n.exports},GYsd:function(t,e,o){var n=o("VU/8")(o("D0wg"),o("OR4z"),!1,function(t){o("MJtE")},"data-v-13a0f13e",null);t.exports=n.exports},HDz1:function(t,e,o){"use strict";var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();o("urgZ");var a,i=Array.prototype,r=new Error("Passed arguments must be of Node"),s=[],l=[];function c(t){return t instanceof window.Node}function u(t){return t instanceof window.NodeList||t instanceof d||t instanceof window.HTMLCollection||t instanceof Array}var d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=e;if(e[0]===window?o=[window]:"string"==typeof e[0]?(o=(e[1]||document).querySelectorAll(e[0]),e[1]&&(this.owner=e[1])):0 in e&&!c(e[0])&&e[0]&&"length"in e[0]&&(o=e[0],e[1]&&(this.owner=e[1])),o){for(var n in o)this[n]=o[n];this.length=o.length}else this.length=0;window.prueba=this}return n(t,[{key:"concat",value:function(){var t=i.slice.call(this);for(var e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];return i.forEach.call(o,function(e){if(c(e))~t.indexOf(e)||t.push(e);else{if(!u(e))throw Error("Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)");!function e(o){i.forEach.call(o,function(o){c(o)?~t.indexOf(o)||t.push(o):u(o)&&e(o)})}(e)}}),b(t,this)}},{key:"delete",value:function(){var t=p(this).filter(function(t){return t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t),document.body.contains(t)});return t.length&&console.warn("NodeList: Some nodes could not be deleted."),t}},{key:"each",value:function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return i.forEach.apply(this,e),this}},{key:"filter",value:function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return b(i.filter.apply(this,e),this)}},{key:"find",value:function(t){var e=[];if("string"==typeof t&&p(this).forEach(function(o){e.push(o.querySelectorAll(t))}),c(t)&&p(this).forEach(function(o){o!==t&&o.contains(t)&&e.push(t)}),u(t)){var o=p(t);p(this).forEach(function(t){o.forEach(function(o){t!==o&&t.contains(o)&&e.push(o)})})}return p(e,this.owner)}},{key:"forEach",value:function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return i.forEach.apply(this,e),this}},{key:"includes",value:function(t,e){return~this.indexOf(t,e)}},{key:"map",value:function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];var n=i.map.apply(this,e);return n.some(function(t){return c(t)||u(t)})?p(n,this):n}},{key:"parent",value:function(){return p(this.map(function(t){return t.parentNode}),this)}},{key:"pop",value:function(t){"number"!=typeof t&&(t=1);for(var e=[],o=i.pop.bind(this);t--;)e.push(o());return b(e,this)}},{key:"push",value:function(){for(var t=this,e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];return i.forEach.call(o,function(e){if(!c(e))throw r;~t.indexOf(e)||i.push.call(t,e)}),this}},{key:"shift",value:function(t){"number"!=typeof t&&(t=1);for(var e=[];t--;)e.push(i.shift.call(this));return 1==e.length?e[0]:b(e,this)}},{key:"slice",value:function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return b(i.slice.apply(this,e),this)}},{key:"splice",value:function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];for(var n=2,a=e.length;n<a;n++)if(!c(e[n]))throw r;return i.splice.apply(this,e),this}},{key:"unshift",value:function(){for(var t=this,e=i.unshift.bind(this),o=arguments.length,n=Array(o),a=0;a<o;a++)n[a]=arguments[a];return i.forEach.call(n,function(o){if(!c(o))throw r;~t.indexOf(o)||e(o)}),this}},{key:"addClass",value:function(t){return this.toggleClass(t,!0)}},{key:"removeClass",value:function(t){return this.toggleClass(t,!1)}},{key:"toggleClass",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=void 0===e||null===e?"toggle":e?"add":"remove";return"string"==typeof t&&(t=t.trim().replace(/\s+/," ").split(" ")),this.each(function(e){return t.forEach(function(t){return e.classList[o](t)})})}},{key:"get",value:function(t){var e=[];return this.each(function(o){null!==o&&(o=o[t]),e.push(o)}),p(e,this)}},{key:"set",value:function(t,e){return t.constructor===Object?this.each(function(e){if(e)for(var o in t)o in e&&(e[o]=t[o])}):this.each(function(o){t in o&&(o[t]=e)}),this}},{key:"call",value:function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];var n=i.shift.call(e),a=[],r=!0;return this.each(function(t){t&&t[n]instanceof Function?(t=t[n].apply(t,e),a.push(t),r&&void 0!==t&&(r=!1)):a.push(void 0)}),r?this:p(a,this)}},{key:"item",value:function(t){return b([this[t]],this)}},{key:"on",value:function(t,e,o){if("string"==typeof t&&(t=t.trim().replace(/\s+/," ").split(" ")),!this||!this.length)return this;if(void 0===o&&(o=e,e=null),!o)return this;var n=o;return o=e?function(t){var o=b(e,this);o.length&&o.some(function(e){var o=e.contains(t.target);return o&&n.call(e,t,e),o})}:function(t){n.apply(this,[t,this])},this.each(function(e){t.forEach(function(t){(e===window||c(e))&&(e.addEventListener(t,o,!1),l.push({el:e,event:t,callback:o}))})}),this}},{key:"off",value:function(t,e){return t instanceof Function&&(e=t,t=null),t=t instanceof Array?t:"string"==typeof t?t.trim().replace(/\s+/," ").split(" "):null,this.each(function(o){l=l.filter(function(n){return!!(!n||n.el!==o||e&&e!==n.callback||t&&!~t.indexOf(n.event))||(n.el.removeEventListener(n.event,n.callback),!1)})}),this}},{key:"onBlur",value:function(t){return this&&this.length&&t?(this.each(function(e){s.push({el:e,callback:t})}),a||(a=function(t){s.forEach(function(e){e.el.contains(t.target)||e.el===t.target||e.callback.call(e.el,t,e.el)})},document.addEventListener("click",a,!1),document.addEventListener("touchstart",a,!1)),this):this}},{key:"offBlur",value:function(t){return this.each(function(e){s=s.filter(function(o){return!(o&&o.el===e&&(!t||o.callback===t))&&e})}),this}},{key:"asArray",get:function(){return i.slice.call(this)}}]),t}(),f=d.prototype;function p(t,e){var o=[];return i.forEach.call(t,function(n){if(c(n))~o.indexOf(n)||o.push(n);else if(u(n))for(var a in n)~o.indexOf(n[a])||o.push(n[a]);else if(null!==n)return t.get=f.get,t.set=f.set,t.call=f.call,t.owner=e,t}),b(o,e)}var h=["join","copyWithin","fill","find","forEach"];Object.getOwnPropertyNames(i).forEach(function(t){~h.indexOf(t)||void 0!==f[t]||(f[t]=i[t])}),window.Symbol&&Symbol.iterator&&(f[Symbol.iterator]=f.values=i[Symbol.iterator]);var v=document.createElement("div");function m(t){var e=this;f[t]||(v[t]instanceof Function?f[t]=function(){for(var o=arguments.length,n=Array(o),a=0;a<o;a++)n[a]=arguments[a];var i=[],r=!0;for(var s in f){var l=f[s];l&&l[t]instanceof Function?(l=l[t].apply(l,n),i.push(l),r&&void 0!==l&&(r=!1)):i.push(void 0)}return r?e:p(i,e)}:Object.defineProperty(f,t,{get:function(){var e=[];return this.each(function(o){null!==o&&(o=o[t]),e.push(o)}),p(e,this)},set:function(e){this.each(function(o){o&&t in o&&(o[t]=e)})}}))}for(var g in v)m(g);function b(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return new d(e)}window.NL=b,e.a=b},J3Mm:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-tab",{attrs:{header:"Outras Denúncias",badge:t.lenght}},[o("table",{staticClass:"table table-striped"},[t.lenght?[o("thead",[o("tr",[o("th",{staticClass:"col-xs-2"},[t._v("N° Denúncia")]),t._v(" "),o("th",{staticClass:"col-xs-2"},[t._v("Processo crime")]),t._v(" "),o("th",{staticClass:"col-xs-2"},[t._v("Julgamento")]),t._v(" "),o("th",{staticClass:"col-xs-2"},[t._v("Tempo")]),t._v(" "),o("th",{staticClass:"col-xs-2"},[t._v("Trânsito em julgado")]),t._v(" "),o("th",{staticClass:"col-xs-2"},[t._v("Ações")])])]),t._v(" "),o("tbody",t._l(t.registros,function(e){return o("tr",{key:e.id_denunciacivil},[o("td",[t._v(t._s(e.processo))]),t._v(" "),o("td",[o("b",[t._v(t._s(e.processocrime))])]),t._v(" "),o("td",[e.julgamento?o("span",[o("b",[t._v(t._s(e.julgamento))])]):o("span",[o("b",[t._v(" Não cadastrado ")])])]),t._v(" "),o("td",["Condenado"==e.julgamento?[t._v("\n                            "+t._s(e.pena_anos)+" Anos\n                            "+t._s(e.pena_meses)+" Meses\n                            "+t._s(e.pena_dias)+" Dias\n                        ")]:[t._v("\n                            -\n                        ")]],2),t._v(" "),o("td",["S"==e.transitojulgado_bl?o("b",[t._v("Sim")]):o("b",[t._v(" Não ")])]),t._v(" "),o("td",[o("span",[t.canEdit?[o("a",{staticClass:"btn btn-info",on:{click:function(o){return t.edit(e)}}},[o("i",{staticClass:"fa fa-fw fa-edit "})])]:t._e(),t._v(" "),t.canDelete?[o("a",{staticClass:"btn btn-danger",on:{click:function(o){return t.destroy(e.id_denunciacivil)}}},[o("i",{staticClass:"fa fa-fw fa-trash-o "})])]:t._e()],2)])])}),0)]:[o("tr",[o("td",[t._v("Nada encontrado")])])]],2),t._v(" "),t.canCreate?[o("a",{staticClass:"btn btn-primary btn-block",on:{click:t.toCreate}},[o("i",{staticClass:"fa fa-plus"}),t._v("Adicionar Denúncia\n        ")])]:t._e(),t._v(" "),o("Modal",{attrs:{large:"",effect:"fade"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[o("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[o("h4",{staticClass:"modal-title"},[t.registro.id_denunciacivil?o("b",[t._v("Editar Denúncia")]):o("b",[t._v("Inserir nova Denúncia")])])]),t._v(" "),o("div",{attrs:{slot:"modal-body"},slot:"modal-body"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.id_denunciacivil,expression:"registro.id_denunciacivil"}],attrs:{type:"hidden",name:"id"},domProps:{value:t.registro.id_denunciacivil},on:{input:function(e){e.target.composing||t.$set(t.registro,"id_denunciacivil",e.target.value)}}}),t._v(" "),o("Label",{attrs:{label:"rg",title:"RG"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.rg,expression:"registro.rg"}],staticClass:"form-control",attrs:{type:"text",size:"12",maxlength:"25",readonly:""},domProps:{value:t.registro.rg},on:{input:function(e){e.target.composing||t.$set(t.registro,"rg",e.target.value)}}})]),t._v(" "),o("Label",{attrs:{label:"cargo",title:"Posto/Grad."}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.cargo,expression:"registro.cargo"}],staticClass:"form-control",attrs:{type:"text",size:"6",maxlength:"10",readonly:""},domProps:{value:t.registro.cargo},on:{input:function(e){e.target.composing||t.$set(t.registro,"cargo",e.target.value)}}})]),t._v(" "),o("Label",{attrs:{label:"nome",title:"Nome"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.nome,expression:"registro.nome"}],staticClass:"form-control",attrs:{type:"text",size:"40",readonly:""},domProps:{value:t.registro.nome},on:{input:function(e){e.target.composing||t.$set(t.registro,"nome",e.target.value)}}})]),t._v(" "),o("Label",{attrs:{label:"processo",title:"Processo, Nº do processo - Comarca",tooltip:"Ex: Ação Penal Militar nº 2010.0000XXX-X - Curitiba"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.processo,expression:"registro.processo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.registro.processo},on:{input:function(e){e.target.composing||t.$set(t.registro,"processo",e.target.value)}}})]),t._v(" "),o("Label",{attrs:{label:"infracao",title:"Artigo, Lei e Infração Penal",tooltip:"Ex: Art. 121, Código Penal, Homicídio"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.registro.infracao,expression:"registro.infracao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.registro.infracao},on:{input:function(e){e.target.composing||t.$set(t.registro,"infracao",e.target.value)}}})]),t._v(" "),o("Label",{attrs:{label:"processocrime",title:"Processo Crime"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.registro.processocrime,expression:"registro.processocrime"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.registro,"processocrime",e.target.multiple?o:o[0])}}},[o("option",{attrs:{rel:"none",value:""}},[t._v("Selecione")]),t._v(" "),o("option",{attrs:{rel:"foicondenado",value:"Condenado"}},[t._v("Condenado")]),t._v(" "),o("option",{attrs:{rel:"none",value:"Absolvido"}},[t._v("Absolvido")])])]),t._v(" "),o("Label",{attrs:{lg:"6",label:"julgamento",title:"Julgamento"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.registro.julgamento,expression:"registro.julgamento"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.registro,"julgamento",e.target.multiple?o:o[0])}}},[o("option",{attrs:{rel:"none",value:""}},[t._v("Selecione")]),t._v(" "),o("option",{attrs:{rel:"foicondenado",value:"Condenado"}},[t._v("Condenado")]),t._v(" "),o("option",{attrs:{rel:"none",value:"Absolvido"}},[t._v("Absolvido")])])]),t._v(" "),o("Label",{attrs:{lg:"6",label:"transitojulgado_bl"}},[o("Checkbox",{attrs:{"true-value":"S",text:"Transitou em julgado?"},model:{value:t.registro.transitojulgado_bl,callback:function(e){t.$set(t.registro,"transitojulgado_bl",e)},expression:"registro.transitojulgado_bl"}})],1),t._v(" "),"Condenado"==t.registro.julgamento?[o("Label",{attrs:{label:"pena_anos",title:"Pena Anos"}},[o("the-mask",{staticClass:"form-control",attrs:{mask:"##",type:"text"},model:{value:t.registro.pena_anos,callback:function(e){t.$set(t.registro,"pena_anos",e)},expression:"registro.pena_anos"}})],1),t._v(" "),o("Label",{attrs:{label:"pena_meses",title:"Pena Meses"}},[o("the-mask",{staticClass:"form-control",attrs:{mask:"##",type:"text"},model:{value:t.registro.pena_meses,callback:function(e){t.$set(t.registro,"pena_meses",e)},expression:"registro.pena_meses"}})],1),t._v(" "),o("Label",{attrs:{label:"pena_dias",title:"Pena Dias"}},[o("the-mask",{staticClass:"form-control",attrs:{mask:"##",type:"text"},model:{value:t.registro.pena_dias,callback:function(e){t.$set(t.registro,"pena_dias",e)},expression:"registro.pena_dias"}})],1),t._v(" "),o("Label",{attrs:{label:"tipodapena",title:"Tipo da pena"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.registro.tipodapena,expression:"registro.tipodapena"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.registro,"tipodapena",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[t._v("Selecione")]),t._v(" "),o("option",{attrs:{value:"Detencao"}},[t._v("Detenção")]),t._v(" "),o("option",{attrs:{value:"Reclusao"}},[t._v("Reclusão")])])]),t._v(" "),o("Label",{attrs:{label:"restritiva_bl"}},[o("Checkbox",{attrs:{"true-value":"S",text:"Restritiva de direito?"},model:{value:t.registro.restritiva_bl,callback:function(e){t.$set(t.registro,"restritiva_bl",e)},expression:"registro.restritiva_bl"}})],1)]:t._e(),t._v(" "),o("Label",{attrs:{lg:"12",label:"descricao_txt",title:"Obsercações",tooltip:"Exemplo: Lei N. 9455/97 - TORTURA. par. 1, inciso I, alinea a. Data da denuncia: xx/xx/xx, transitou em julgado em xx/xx/xx"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.registro.obs_txt,expression:"registro.obs_txt"}],attrs:{id:"foco",rows:"6",cols:"105",width:"100%",placeholder:"Artigo da sentença da condenação, data da denúncia, data do trânsito em julgado e outros complementos"},domProps:{value:t.registro.obs_txt},on:{input:function(e){e.target.composing||t.$set(t.registro,"obs_txt",e.target.value)}}})])],2),t._v(" "),o("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[o("div",{staticClass:"col-xs-6"},[o("a",{staticClass:"btn btn-default btn-block",on:{click:function(e){t.showModal=!1}}},[t._v("Cancelar")])]),t._v(" "),o("div",{staticClass:"col-xs-6"},[o("v-tooltip",{attrs:{effect:"scale",placement:"top",content:t.msgRequired}},[t.registro.id_denunciacivil?o("a",{staticClass:"btn btn-success btn-block",attrs:{disabled:t.requireds},on:{click:function(e){return t.update(t.registro.id_denunciacivil)}}},[t._v("Editar")]):o("a",{staticClass:"btn btn-success btn-block",attrs:{disabled:t.requireds},on:{click:t.create}},[t._v("Inserir")])])],1)])])],2)},staticRenderFns:[]}},MJtE:function(t,e,o){var n=o("1rBJ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("235f4d06",n,!0,{})},O4kN:function(t,e,o){var n=o("VU/8")(o("UdK+"),o("J3Mm"),!1,function(t){o("XxAT")},"data-v-8cceaa5a",null);t.exports=n.exports},OR4z:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o(t.isButton?"a":"label",{tag:"a",class:[t.isButton?"btn btn-"+t.typeColor:"open checkbox "+t.typeColor,{active:t.checked,disabled:t.disabled,readonly:t.readonly}],on:{click:t.toggle}},[t.name?o("input",{attrs:{type:"hidden",name:t.name},domProps:{value:t.checked?t.trueValue:t.falseValue}}):t._e(),t._v(" "),t.isButton?t._e():o("span",{staticClass:"icon dropdown-toggle",class:[t.checked?"btn-"+t.typeColor:"",{bg:"default"===t.typeColor}]}),t._v(" "),!t.isButton&&t.checked&&"default"===t.typeColor?o("span",{staticClass:"icon"}):t._e(),t._v("\n   "),t.text?o("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(t.text))]):t._e()])},staticRenderFns:[]}},"R/tE":function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"td[data-v-8cceaa5a]{white-space:normal!important;word-wrap:break-word}table[data-v-8cceaa5a]{table-layout:fixed}",""])},Rdp3:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("n6t6");e.default={mixins:[n.a],props:{effect:{type:String,default:"scale"},trigger:{type:String,default:"hover"}}}},SSo0:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("qAgu"),a=o.n(n);e.default={components:{tooltip:a.a},props:{title:"",label:"",icon:"",link:"",lg:{default:"4"},md:{default:"6"},xs:{default:"12"},error:{type:String,default:""},slim:{type:Boolean,default:!1},tooltip:{type:String,default:""}},computed:{classform:function(){return(this.slim?"form-group2 form-group ":"form-group ")+("col-lg-"+this.lg+" ")+("col-md-"+this.md+" ")+("col-xs-"+this.xs+" ")+(this.error.length>0?"has-error":"")}}}},"UdK+":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("FfMg"),a=o.n(n),i=o("alBe"),r=o.n(i),s=o("hlPV"),l=(o.n(s),o("GYsd")),c=o.n(l);e.default={components:{Modal:a.a,Label:r.a,TheMask:s.TheMask,Checkbox:c.a},props:["pm"],data:function(){return{module:"denuncia",registros:[],registro:{},canCreate:!1,canEdit:!1,canDelete:!1,showModal:!1}},mounted:function(){this.list(),this.canCreate=this.$root.hasPermission("criar-outras-denuncia"),this.canEdit=this.$root.hasPermission("editar-outras-denuncia"),this.canDelete=this.$root.hasPermission("apagar-outras-denuncia")},computed:{requireds:function(){return!this.registro.obs_txt},lenght:function(){return this.registros?Object.keys(this.registros).length:0},msgRequired:function(){return"Para liberar este botão o campos OBSERVAÇÕES deve estar preenchido"}},methods:{list:function(){var t=this,e=this.$root.baseUrl+"api/"+this.module+"/list/"+this.pm.RG;this.pm.RG&&axios.get(e).then(function(e){t.registros=e.data}).catch(function(t){return console.log(t)})},toCreate:function(){this.showModal=!0,this.registro.rg=this.pm.RG,this.registro.cargo=this.pm.CARGO,this.registro.nome=this.pm.NOME},create:function(){var t=this;if(!this.requireds){var e=this.$root.baseUrl+"api/"+this.module+"/store";axios.post(e,this.registro).then(function(e){t.transation(e.data.success,"create")}).catch(function(t){return console.log(t)}),this.showModal=!1}},edit:function(t){this.registro=t,this.showModal=!0},update:function(t){var e=this;if(!this.requireds){var o=this.$root.baseUrl+"api/"+this.module+"/update/"+t;axios.put(o,this.registro).then(function(t){e.transation(t.data.success,"edit")}).catch(function(t){return console.log(t)})}},destroy:function(t){var e=this;if(confirm("Você tem certeza?")){var o=this.$root.baseUrl+"api/"+this.module+"/destroy/"+t;axios.delete(o).then(function(t){e.transation(t.data.success,"delete")}).catch(function(t){return console.log(t)})}},transation:function(t,e){var o=this.words(e);this.showModal=!1,t?(this.list(),this.$root.msg(o.success,"success"),this.registro={}):this.$root.msg(o.fail,"danger")},words:function(t){return"create"==t?{success:"Inserido com sucesso",fail:"Erro ao inserir"}:"edit"==t?{success:"Editado com sucesso",fail:"Erro ao editar"}:"delete"==t?{success:"Apagado com sucesso",fail:"Erro ao apagar"}:void 0}}}},VK7r:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".form-group2[data-v-24a989b6]{margin-bottom:2px}",""])},XxAT:function(t,e,o){var n=o("R/tE");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("76890ed9",n,!0,{})},YiKi:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".modal{transition:all .3s ease}.modal.in{background-color:rgba(0,0,0,.5)}.modal.zoom .modal-dialog{-webkit-transform:scale(.1);-moz-transform:scale(.1);-ms-transform:scale(.1);transform:scale(.1);top:300px;opacity:0;-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s}.modal.zoom.in .modal-dialog{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform:translate3d(0,-300px,0);transform:translate3d(0,-300px,0);opacity:1}",""])},alBe:function(t,e,o){var n=o("VU/8")(o("SSo0"),o("o+Ye"),!1,function(t){o("pOks")},"data-v-24a989b6",null);t.exports=n.exports},di4E:function(t,e,o){var n=o("rd3Q");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("3782027c",n,!0,{})},lO1W:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function n(){if(document.documentElement.scrollHeight<=document.documentElement.clientHeight)return 0;var t=document.createElement("p");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.visibility="hidden",e.style.width="200px",e.style.height="150px",e.style.overflow="hidden",e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var n=t.offsetWidth;return o===n&&(n=e.clientWidth),document.body.removeChild(e),o-n}e.default={props:{backdrop:{type:Boolean,default:!0},callback:{type:Function,default:null},cancelText:{type:String,default:"Close"},effect:{type:String,default:null},large:{type:Boolean,default:!1},okText:{type:String,default:"Save changes"},small:{type:Boolean,default:!1},title:{type:String,default:""},value:{type:Boolean,required:!0},width:{default:null}},data:function(){return{transition:!1,val:null}},computed:{optionalWidth:function(){return null===this.width?null:Number.isInteger(this.width)?this.width+"px":this.width}},watch:{transition:function(t,e){if(t!==e){var o=this.$el,a=document.body;t?this.val?(o.querySelector(".modal-content").focus(),o.style.display="block",setTimeout(function(){return o.classList.add("in")},0),a.classList.add("modal-open"),0!==n()&&(a.style.paddingRight=n()+"px")):o.classList.remove("in"):(this.$emit(this.val?"opened":"closed"),this.val||(o.style.display="none",a.style.paddingRight=null,a.classList.remove("modal-open")))}},val:function(t,e){this.$emit("input",t),(null===e?!0===t:t!==e)&&(this.transition=!0)},value:function(t,e){t!==e&&(this.val=t)}},methods:{action:function(t,e){null!==t&&(t&&this.callback instanceof Function&&this.callback(),this.$emit(t?"ok":"cancel",e),this.val=t||!1)}},mounted:function(){this.val=this.value}}},n6t6:function(t,e,o){"use strict";var n=o("HDz1");e.a={props:{content:{type:String},effect:{type:String,default:"fade"},header:{type:Boolean,default:!0},placement:{type:String,default:"top"},title:{type:String},trigger:{type:String}},data:function(){return{top:0,left:0,show:!1}},computed:{events:function(){return{contextmenu:["contextmenu"],hover:["mouseleave","mouseenter"],focus:["blur","focus"]}[this.trigger]||["click"]}},methods:{beforeEnter:function(){var t=this;this.position(),setTimeout(function(){return t.position()},30)},position:function(){var t=this;this.$nextTick(function(){var e=t.$refs.popover||"",o=t.$refs.trigger.children[0];switch(t.placement){case"top":t.left=o.offsetLeft-e.offsetWidth/2+o.offsetWidth/2,t.top=o.offsetTop-e.offsetHeight;break;case"left":t.left=o.offsetLeft-e.offsetWidth,t.top=o.offsetTop+o.offsetHeight/2-e.offsetHeight/2;break;case"right":t.left=o.offsetLeft+o.offsetWidth,t.top=o.offsetTop+o.offsetHeight/2-e.offsetHeight/2;break;case"bottom":t.left=o.offsetLeft-e.offsetWidth/2+o.offsetWidth/2,t.top=o.offsetTop+o.offsetHeight;break;default:console.warn("Wrong placement prop")}e.style.top=t.top+"px",e.style.left=t.left+"px"})},toggle:function(t){t&&"contextmenu"===this.trigger&&t.preventDefault(),this.show=!this.show,this.show&&this.beforeEnter()}},mounted:function(){var t=this,e=this.$refs.trigger.children[0];if(!e)return console.error("Could not find trigger v-el in your component that uses popoverMixin.");("focus"!==this.trigger||~e.tabIndex||(e=Object(n.a)("a,input,select,textarea,button",e)).length)&&this.events.forEach(function(o){Object(n.a)(e).on(o,t.toggle)})},beforeDestroy:function(){this._trigger&&Object(n.a)(this._trigger).off()}}},"o+Ye":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.classform},[t.icon&&!t.link?o("i",{class:t.icon}):t._e(),t._v(" "),o("label",{attrs:{for:t.label}},[t._v(t._s(t.title))]),t._v(" "),t.link?o("a",{attrs:{href:t.link,target:"_blank"}},[o("i",{class:t.icon})]):t._e(),t._v(" "),t.tooltip?o("tooltip",{attrs:{effect:"scale",placement:"top",content:t.tooltip}},[o("i",{staticClass:"fa fa-question-circle"})]):t._e(),t._v(" "),o("br"),t._v(" "),t._t("default"),t._v(" "),t.error?o("span",{staticClass:"help-block"},[o("strong",[t._v(t._s(t.error))])]):t._e()],2)},staticRenderFns:[]}},pOks:function(t,e,o){var n=o("VK7r");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("30be461a",n,!0,{})},qAgu:function(t,e,o){var n=o("VU/8")(o("Rdp3"),o("y3Z/"),!1,function(t){o("di4E")},null,null);t.exports=n.exports},rd3Q:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".tooltip.bottom,.tooltip.left,.tooltip.right,.tooltip.top{opacity:.9}.fadein-enter{animation:fadein-in .3s ease-in}.fadein-leave-active{animation:fadein-out .3s ease-out}@keyframes fadein-in{0%{opacity:0}to{opacity:.9}}@keyframes fadein-out{0%{opacity:.9}to{opacity:0}}",""])},urgZ:function(t,e){Array.prototype.find||(Array.prototype.find=function(t){"use strict";if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var e,o=Object(this),n=o.length>>>0,a=arguments[1],i=0;i<n;i++)if(e=o[i],t.call(a,e,i,o))return e}),"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var o,n=arguments.length;for(o=0;o<n;o++)t=arguments[o],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:o.call(this,t)}}t=null}():function(t){"use strict";if("Element"in t){var e=t.Element.prototype,o=Object,n=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array.prototype.indexOf||function(t){for(var e=0,o=this.length;e<o;e++)if(e in this&&this[e]===t)return e;return-1},i=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},r=function(t,e){if(""===e)throw new i("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new i("INVALID_CHARACTER_ERR","String contains an invalid character");return a.call(t,e)},s=function(t){for(var e=n.call(t.getAttribute("class")||""),o=e?e.split(/\s+/):[],a=0,i=o.length;a<i;a++)this.push(o[a]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},l=s.prototype=[],c=function(){return new s(this)};if(i.prototype=Error.prototype,l.item=function(t){return this[t]||null},l.contains=function(t){return-1!==r(this,t+="")},l.add=function(){var t,e=arguments,o=0,n=e.length,a=!1;do{t=e[o]+"",-1===r(this,t)&&(this.push(t),a=!0)}while(++o<n);a&&this._updateClassName()},l.remove=function(){var t,e,o=arguments,n=0,a=o.length,i=!1;do{for(t=o[n]+"",e=r(this,t);-1!==e;)this.splice(e,1),i=!0,e=r(this,t)}while(++n<a);i&&this._updateClassName()},l.toggle=function(t,e){t+="";var o=this.contains(t),n=o?!0!==e&&"remove":!1!==e&&"add";return n&&this[n](t),!0===e||!1===e?e:!o},l.toString=function(){return this.join(" ")},o.defineProperty){var u={get:c,enumerable:!0,configurable:!0};try{o.defineProperty(e,"classList",u)}catch(t){-2146823252===t.number&&(u.enumerable=!1,o.defineProperty(e,"classList",u))}}else o.prototype.__defineGetter__&&e.__defineGetter__("classList",c)}}(self))},wuYg:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["modal",t.effect],attrs:{role:"dialog"},on:{click:function(e){t.backdrop&&t.action(!1,1)},transitionend:function(e){t.transition=!1}}},[o("div",{class:["modal-dialog",{"modal-lg":t.large,"modal-sm":t.small}],style:{width:t.optionalWidth},attrs:{role:"document"},on:{click:function(e){return e.stopPropagation(),t.action(null)}}},[o("div",{staticClass:"modal-content"},[t._t("modal-header",[o("div",{staticClass:"modal-header"},[o("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.action(!1,2)}}},[o("span",[t._v("×")])]),t._v(" "),o("h4",{staticClass:"modal-title"},[t._t("title",[t._v(t._s(t.title))])],2)])]),t._v(" "),t._t("modal-body",[o("div",{staticClass:"modal-body"},[t._t("default")],2)]),t._v(" "),t._t("modal-footer",[o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){return t.action(!1,3)}}},[t._v(t._s(t.cancelText))]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.action(!0,4)}}},[t._v(t._s(t.okText))])])])],2)])])},staticRenderFns:[]}},"y3Z/":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{ref:"trigger"},[t._t("default"),t._v(" "),o("transition",{attrs:{name:t.effect}},[t.show?o("div",{ref:"popover",class:["tooltip",t.placement]},[o("div",{staticClass:"tooltip-arrow"}),t._v(" "),o("div",{staticClass:"tooltip-inner"},[t._t("content",[o("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]):t._e()])],2)},staticRenderFns:[]}}});