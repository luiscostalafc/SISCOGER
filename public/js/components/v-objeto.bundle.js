webpackJsonp([59],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/FDI/Objeto.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['rg'],
    data: function data() {
        return {
            objetos: []
        };
    },
    mounted: function mounted() {
        this.listObjetos();
    },

    methods: {
        listObjetos: function listObjetos() {
            var _this = this;

            var urlIndex = this.$root.baseUrl + 'api/fdi/objetos/' + this.rg;
            if (this.rg) {
                axios.get(urlIndex).then(function (response) {
                    _this.objetos = response.data;
                }).catch(function (error) {
                    return console.log(error);
                });
            }
        },
        urlEdit: function urlEdit(proc, ref, ano) {
            var urlBase = this.$root.baseUrl;
            return '' + urlBase + proc + '/editar/' + ref + '/' + ano;
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1b9e8f8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/FDI/Objeto.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e1b9e8f8\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/FDI/Objeto.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-tab",
    { attrs: { header: "Objeto", badge: _vm.objetos.length } },
    [
      _c("h4", { staticClass: "text-center text-bold" }, [
        _vm._v(
          "Marcado em procedimentos como Acusado, Indiciado, Sindicado ou Paciente"
        )
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "table table-striped" }, [
        _c(
          "tbody",
          [
            _vm.objetos.length
              ? [
                  _c("tr", [
                    _c("th", [_vm._v("Proc.")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("CDOPM")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Situação")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Andamento")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Ações")])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.objetos, function(objeto, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm._f("toUpper")(objeto.procedimento)) +
                            " " +
                            _vm._s(objeto.sjd_ref) +
                            " / " +
                            _vm._s(objeto.sjd_ref_ano)
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(objeto.cdopm))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _vm._v(_vm._s(objeto.situacao) + " "),
                          objeto.rg_sustituto
                            ? [_vm._v("Substituído")]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(objeto.id_andamento))]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-info",
                              attrs: {
                                href: _vm.urlEdit(
                                  objeto.procedimento,
                                  objeto.sjd_ref,
                                  objeto.sjd_ref_ano
                                )
                              }
                            },
                            [_c("i", { staticClass: "fa fa-fw fa-edit " })]
                          )
                        ])
                      ])
                    ])
                  })
                ]
              : [_c("tr", [_c("td", [_vm._v("Nada encontrado")])])]
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e1b9e8f8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1b9e8f8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/FDI/Objeto.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1b9e8f8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/FDI/Objeto.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3654d125", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1b9e8f8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Objeto.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1b9e8f8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Objeto.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/FDI/Objeto.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1b9e8f8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/FDI/Objeto.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/FDI/Objeto.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e1b9e8f8\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/FDI/Objeto.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e1b9e8f8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/FDI/Objeto.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1b9e8f8", Component.options)
  } else {
    hotAPI.reload("data-v-e1b9e8f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});