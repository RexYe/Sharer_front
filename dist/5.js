webpackJsonp([5],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TestVuex_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01a91375_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_TestVuex_vue__ = __webpack_require__(62);
function injectStyle (ssrContext) {
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01a91375"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TestVuex_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01a91375_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_TestVuex_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3863b70b", content, true);

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'TestVuex',
	components: {},
	computed: {
		// ...mapGetters([
		// 	'getter1',
		// 	'get1'
		// 	]),
		// ...mapState([
		// 	'count',
		// 	'part2'
		// ])
	},
	data() {
		return {};
	},
	methods: {
		// changeStore(){
		// 	this.$store.commit('increment')
		// },
		// ...mapMutations([
		// 	'decrement',
		// 	'add'
		// 	]),
		// ...mapActions([
		// 	'incrementAsync',
		// 	'addSync'
		// 	])
	}
});

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('span', [_vm._v("3")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("上一页")])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});