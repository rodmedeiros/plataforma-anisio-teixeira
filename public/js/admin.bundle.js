webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_SidebarComponent_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_SidebarComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_SidebarComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SearchComponent_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SearchComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_SearchComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ListComponent_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ListComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_ListComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PaginatorComponent_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PaginatorComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_PaginatorComponent_vue__);
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
    name: 'admin',
    components: {
        Sidebar: __WEBPACK_IMPORTED_MODULE_0__components_SidebarComponent_vue___default.a, Search: __WEBPACK_IMPORTED_MODULE_1__components_SearchComponent_vue___default.a, List: __WEBPACK_IMPORTED_MODULE_2__components_ListComponent_vue___default.a, Paginator: __WEBPACK_IMPORTED_MODULE_3__components_PaginatorComponent_vue___default.a
    },
    data: function data() {
        return {
            title: '',
            paginator: {},
            search: '',
            show: false
        };
    },

    methods: {}
});

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(104)
/* template */
var __vue_template__ = __webpack_require__(105)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d893ab8"
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
Component.options.__file = "resources/assets/js/components/SidebarComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d893ab8", Component.options)
  } else {
    hotAPI.reload("data-v-1d893ab8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5df2b3bc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d893ab8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SidebarComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d893ab8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SidebarComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.pointer[data-v-1d893ab8] {\n  cursor: pointer;\n}\n.w-150[data-v-1d893ab8] {\n  width: 150px;\n}\n", ""]);

// exports


/***/ }),

/***/ 104:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Sidebar',
    data: function data() {
        return {
            username: localStorage.getItem('username'),
            userId: localStorage.getItem('user_id')
        };
    },

    methods: {
        get: function get(endpoint) {
            var _this = this;

            this.$parent.show = false;
            axios.get('/api-v1/' + endpoint).then(function (resp) {
                _this.$parent.paginator = resp.data.paginator;
                _this.$parent.title = resp.data.title;
                _this.$parent.search = endpoint;
                _this.$parent.show = true;
            }).catch(function (error) {
                console.log(error.response);
            });
        }
    }
});

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "list-group" }, [
    _c("a", { staticClass: "thumbnail", attrs: { href: "#" } }, [
      _c("img", {
        staticClass: "w-150",
        attrs: {
          src: "https://via.placeholder.com/300x200",
          alt: "Foto Usuário"
        }
      })
    ]),
    _vm._v(" "),
    _c("p", [_vm._v(_vm._s("Benvindo " + _vm.username))]),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "list-group-item pointer",
        on: {
          click: function($event) {
            _vm.get("canais")
          }
        }
      },
      [_vm._v("Canais")]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "list-group-item pointer",
        on: {
          click: function($event) {
            _vm.get("users")
          }
        }
      },
      [_vm._v("Usuários")]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "list-group-item pointer",
        on: {
          click: function($event) {
            _vm.get("conteudos")
          }
        }
      },
      [_vm._v("Mídias Educacionais")]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "list-group-item pointer",
        on: {
          click: function($event) {
            _vm.get("aplicativos")
          }
        }
      },
      [_vm._v("Aplicativos Educacionais")]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "list-group-item pointer",
        on: {
          click: function($event) {
            _vm.get("tags")
          }
        }
      },
      [_vm._v("Tags")]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "list-group-item pointer",
        on: {
          click: function($event) {
            _vm.get("licenses")
          }
        }
      },
      [_vm._v("Licenças")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1d893ab8", module.exports)
  }
}

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(107)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(109)
/* template */
var __vue_template__ = __webpack_require__(110)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6406c664"
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
Component.options.__file = "resources/assets/js/components/SearchComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6406c664", Component.options)
  } else {
    hotAPI.reload("data-v-6406c664", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("e5cbeea6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6406c664\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SearchComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6406c664\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SearchComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 109:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Search',
    data: function data() {
        return {
            placeholder: 'Pesquise de conteúdos',
            termo: ''
        };
    },

    methods: {
        onSearch: function onSearch() {
            var _this = this;

            var url = '/api-v1/' + this.$parent.search + '/search/' + this.termo;
            this.$parent.show = false;
            axios.get(url).then(function (resp) {
                _this.$parent.paginator = resp.data.paginator;
                _this.$parent.show = true;
            }).catch(function (error) {
                console.log(error.response);
            });
        }
    }
});

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "search",
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.onSearch()
        }
      }
    },
    [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.termo,
              expression: "termo"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text", placeholder: _vm.placeholder },
          domProps: { value: _vm.termo },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.termo = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm._m(0)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-btn" }, [
      _c(
        "button",
        { staticClass: "btn btn-default", attrs: { type: "submit" } },
        [_vm._v("Pesquisa")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6406c664", module.exports)
  }
}

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(114)
/* template */
var __vue_template__ = __webpack_require__(115)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cb31973a"
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
Component.options.__file = "resources/assets/js/components/PaginatorComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cb31973a", Component.options)
  } else {
    hotAPI.reload("data-v-cb31973a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0594cf67", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cb31973a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PaginatorComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cb31973a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PaginatorComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 114:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Paginator',
  props: ['paginator'],
  data: function data() {
    return {};
  },


  methods: {
    goTo: function goTo(url) {
      var _this = this;

      if (url) axios.get(url).then(function (resp) {
        _this.$parent.paginator = resp.data.paginator;
      });
    }
  }

});

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.paginator.total
    ? _c("nav", { attrs: { "aria-label": "..." } }, [
        _c("p", { staticClass: "text-center" }, [
          _vm._v(
            _vm._s(
              _vm.paginator.total
                ? "Total: " + _vm.paginator.total
                : "Sem Resultados"
            )
          )
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "pager" }, [
          _c("li", { staticClass: "previous" }, [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    _vm.goTo(_vm.paginator.prev_page_url)
                  }
                }
              },
              [
                _c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("←")]),
                _vm._v(" Anterior")
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "next" }, [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    _vm.goTo(_vm.paginator.next_page_url)
                  }
                }
              },
              [
                _vm._v("Próximo "),
                _c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("→")])
              ]
            )
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cb31973a", module.exports)
  }
}

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid heigth" },
    [
      _c("Sidebar", { staticClass: "col-sm-3" }),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "col-sm-9" },
        [
          _c("Search", { attrs: { search: _vm.search } }),
          _vm._v(" "),
          _c("header", { staticClass: "page-header" }, [
            _c("h1", [_c("small", [_vm._v(_vm._s(_vm.title))])])
          ]),
          _vm._v(" "),
          _c(
            "transition",
            { attrs: { name: "fade" } },
            [
              _vm.show
                ? _c("List", { attrs: { items: _vm.paginator.data } })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("Paginator", { attrs: { paginator: _vm.paginator } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7943083c", module.exports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(98)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(100)
/* template */
var __vue_template__ = __webpack_require__(116)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7943083c"
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
Component.options.__file = "resources/assets/js/pages/Admin.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7943083c", Component.options)
  } else {
    hotAPI.reload("data-v-7943083c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a076d1a8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7943083c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Admin.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7943083c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Admin.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.page-header > h1[data-v-7943083c] {\n  margin-top: 0px;\n  font-size: 20px;\n}\n.fade-enter-active[data-v-7943083c], .fade-leave-active[data-v-7943083c] {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n}\n.fade-enter[data-v-7943083c], .fade-leave-to[data-v-7943083c] {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ })

});