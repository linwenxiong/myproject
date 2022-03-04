"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var vueRouter = require("vue-router");
var serverRenderer = require("vue/server-renderer");
var path = require("path");
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = vue.defineComponent({
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const active = vue.ref(0);
    function itemClick(key, item) {
      emit("menuClick");
      active.value = key;
      window.scrollTo({
        top: +document.getElementById(item + key).getAttribute("scrolls"),
        behavior: "smooth"
      });
    }
    return {
      itemClick,
      active
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "menu-wrappy" }, _attrs))} data-v-401235b3><div class="menu-conten" data-v-401235b3><!--[-->`);
  serverRenderer.ssrRenderList(_ctx.menuList, (item, key) => {
    _push(`<div class="${serverRenderer.ssrRenderClass(["menu-item", { active: _ctx.active === key }])}" data-v-401235b3>${serverRenderer.ssrInterpolate(item)}</div>`);
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/menu/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Menu = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-401235b3"]]);
const _sfc_main$4 = vue.defineComponent({
  name: "ItemCard",
  emits: ["cardClick"],
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    title: {
      type: String,
      default: "\u6682\u65E0\u6807\u9898"
    }
  },
  setup(prop, { emit }) {
    function itemClick(href) {
      emit("cardClick", href);
    }
    const cardObj = vue.ref(null);
    const scroll = vue.ref(0);
    vue.nextTick(() => {
      var _a;
      scroll.value = (_a = cardObj.value) == null ? void 0 : _a.offsetTop;
    });
    return {
      scroll,
      cardObj,
      itemClick
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: "item-card-wrappy",
    ref: "cardObj",
    scrolls: _ctx.scroll
  }, _attrs))}><h2 class="module2-title">${serverRenderer.ssrInterpolate(_ctx.title)}</h2><section class="module2-content"><!--[-->`);
  serverRenderer.ssrRenderList(_ctx.data, (item, index) => {
    _push(`<div class="module2-item"><h3 class="module2-item-title"><i><img class="module2-icon"${serverRenderer.ssrRenderAttr("src", item.logo)} alt=""></i>${serverRenderer.ssrInterpolate(item.name)}</h3><div class="module2-item-txt">${serverRenderer.ssrInterpolate(item.explain)}</div></div>`);
  });
  _push(`<!--]--></section></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/common/items-card/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var ItemsCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
var pageIframe_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = vue.defineComponent({
  props: {
    url: {
      type: String,
      default: ""
    },
    showIframe: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:showIframe"],
  setup(props, { emit }) {
    function goBack() {
      emit("update:showIframe", false);
    }
    return {
      goBack
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.showIframe) {
    _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "iframe-wrappy" }, _attrs))} data-v-e2910f82><div class="firame-top-box" data-v-e2910f82><span class="firame-top-btn" data-v-e2910f82>\u8FD4\u56DE</span> ${serverRenderer.ssrInterpolate(_ctx.url)}</div><iframe${serverRenderer.ssrRenderAttr("src", _ctx.url)} frameborder="0" width="100%" height="100%" data-v-e2910f82></iframe></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/content/components/page-iframe.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var PageIframe = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-e2910f82"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = vue.defineComponent({
  name: "Content",
  components: {
    ItemsCard,
    PageIframe
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const showIframe = vue.ref(false);
    const webUrl = vue.ref("");
    function cardClick(href) {
      showIframe.value = true;
      webUrl.value = href;
    }
    return { webUrl, showIframe, cardClick };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ItemsCard = vue.resolveComponent("ItemsCard");
  const _component_PageIframe = vue.resolveComponent("PageIframe");
  _push(`<section${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "content-wrappy" }, _attrs))} data-v-4e942ff5><div class="module2-wrappy" data-v-4e942ff5><!--[-->`);
  serverRenderer.ssrRenderList(_ctx.data, (item, key) => {
    _push(serverRenderer.ssrRenderComponent(_component_ItemsCard, {
      key,
      data: item.list,
      id: item.title + key,
      title: item.title
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
  _push(serverRenderer.ssrRenderComponent(_component_PageIframe, {
    showIframe: _ctx.showIframe,
    "onUpdate:showIframe": ($event) => _ctx.showIframe = $event,
    url: _ctx.webUrl
  }, null, _parent));
  _push(`</section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/content/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Content = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-4e942ff5"]]);
var data = [
  {
    "title": "\u6280\u672F\u4E66\u7C4D",
    "list": [
      {
        "url": "https://impatient-js.apachecn.org/",
        "logo": "",
        "name": "\u5199\u7ED9\u4E0D\u8010\u70E6\u7A0B\u5E8F\u5458\u7684 JavaScript",
        "explain": "\u5C3D\u53EF\u80FD\u7684\u4ECE\u4E00\u4E2A\u7B26\u5408\u73B0\u4EE3\u7406\u5FF5\u7684\u89D2\u5EA6\u51FA\u53D1\uFF0C\u8BA9\u521D\u5B66\u8005\u80FD\u66F4\u5BB9\u6613\u7684\u5B66\u4E60 JavaScript\u3002"
      },
      {
        "url": "https://ts.xcatliu.com/",
        "logo": "https://www.typescriptlang.org/favicon-32x32.png",
        "name": "TypeScript \u5165\u95E8\u6559\u7A0B",
        "explain": "\u4ECE JavaScript \u7A0B\u5E8F\u5458\u7684\u89D2\u5EA6\u603B\u7ED3\u601D\u8003\uFF0C\u5FAA\u5E8F\u6E10\u8FDB\u7684\u7406\u89E3 TypeScript\u3002"
      },
      {
        "url": "https://es6.ruanyifeng.com/",
        "logo": "https://es6.ruanyifeng.com/favicon.ico",
        "name": "ES6 \u5165\u95E8\u6559\u7A0B",
        "explain": "\u300AECMAScript 6 \u5165\u95E8\u6559\u7A0B\u300B\u662F\u4E00\u672C\u5F00\u6E90\u7684 JavaScript \u8BED\u8A00\u6559\u7A0B\uFF0C\u5168\u9762\u4ECB\u7ECD ECMAScript 6 \u65B0\u5F15\u5165\u7684\u8BED\u6CD5\u7279\u6027\u3002"
      },
      {
        "url": "https://zhongsp.gitbooks.io/typescript-handbook/content/",
        "logo": "https://www.typescriptlang.org/favicon-32x32.png",
        "name": "TypeScript\uFF08\u4E2D\u6587\u7248\uFF09",
        "explain": "\u5177\u6709\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u4E14\u662FJavaScript\u7684\u8D85\u96C6"
      }
    ]
  },
  {
    "title": "\u6784\u5EFA\u5DE5\u5177",
    "list": [
      {
        "url": "https://webpack.docschina.org",
        "logo": "https://webpack.docschina.org/icon-square-small.85ba630cf0c5f29ae3e3.svg",
        "name": "Webpack",
        "explain": "webpack \u662F\u4E00\u4E2A\u7528\u4E8E\u73B0\u4EE3 JavaScript \u5E94\u7528\u7A0B\u5E8F\u7684 \u9759\u6001\u6A21\u5757\u6253\u5305\u5DE5\u5177"
      },
      {
        "url": "https://cn.vitejs.dev",
        "logo": "https://cn.vitejs.dev/logo.svg",
        "name": "Vite \u5B98\u65B9\u4E2D\u6587\u6587\u6863",
        "explain": "\u524D\u7AEF\u5F00\u53D1\u4E0E\u6784\u5EFA\u5DE5\u5177"
      },
      {
        "url": "https://www.gulpjs.com.cn/",
        "logo": "https://www.gulpjs.com.cn/img/gulp-white-text.svg",
        "name": "Gulp",
        "explain": "\u57FA\u4E8E\u6D41\u7684\u524D\u7AEF\u81EA\u52A8\u5316\u6784\u5EFA\u5DE5\u5177\u3002"
      },
      {
        "url": "https://grunt.docschina.org/",
        "logo": "https://grunt.docschina.org/img/favicons/favicon.ico",
        "name": "Grunt",
        "explain": "Grunt\uFF0CJavaScript \u4E16\u754C\u7684\u6784\u5EFA\u5DE5\u5177"
      }
    ]
  },
  {
    "title": "\u6846\u67B6\u6587\u6863",
    "list": [
      {
        "url": "https://v3.cn.vuejs.org",
        "logo": "https://v3.cn.vuejs.org/images/icons/apple-icon-152x152.png",
        "name": "Vue3.0",
        "explain": "\u6E10\u8FDB\u5F0FJavaScript \u6846\u67B6"
      },
      {
        "url": "https://vuejs.org",
        "logo": "https://v3.cn.vuejs.org/images/icons/apple-icon-152x152.png",
        "name": "Vue2.0",
        "explain": "\u6E10\u8FDB\u5F0F JavaScript \u6846\u67B6 Vue2.0"
      },
      {
        "url": "https://react.docschina.org",
        "logo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        "name": "React",
        "explain": "\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JavaScript \u5E93"
      }
    ]
  },
  {
    title: "Vue\u751F\u6001",
    list: [
      {
        url: "https://element.eleme.cn/#/zh-CN",
        logo: "https://raw.githubusercontent.com/ElemeFE/element/dev/examples/assets/images/element-logo-small.svg",
        name: "Element Ui",
        explain: "Element\uFF0C\u4E00\u5957\u4E3A\u5F00\u53D1\u8005\u3001\u8BBE\u8BA1\u5E08\u548C\u4EA7\u54C1\u7ECF\u7406\u51C6\u5907\u7684\u57FA\u4E8E Vue 2.0 \u7684\u684C\u9762\u7AEF\u7EC4\u4EF6\u5E93"
      },
      {
        url: "https://youzan.github.io/vant/#/zh-CN/",
        logo: "https://img01.yzcdn.cn/vant/logo.png",
        name: "Vant Ui",
        explain: "Vant\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93"
      },
      {
        url: "https://www.iviewui.com/",
        logo: "https://file.iviewui.com/dist/7dcf5af41fac2e4728549fa7e73d61c5.svg",
        name: "View Ui",
        explain: "\u4E00\u5957\u57FA\u4E8E Vue.js \u7684\u9AD8\u8D28\u91CFUI \u7EC4\u4EF6\u5E93"
      },
      {
        url: "https://router.vuejs.org/zh/",
        logo: "https://v3.cn.vuejs.org/images/icons/apple-icon-152x152.png",
        name: "Vue Router",
        explain: "Vue.js \u7684\u5B98\u65B9\u8DEF\u7531"
      },
      {
        url: "https://www.nuxtjs.cn/",
        logo: "https://www.nuxtjs.cn/favicon.ico",
        name: "NuxtJS",
        explain: "\u4E00\u4E2A\u57FA\u4E8E Vue.js \u7684\u670D\u52A1\u7AEF\u6E32\u67D3\u5E94\u7528\u6846\u67B6\u3002"
      }
    ]
  },
  {
    title: "React\u7EC4\u4EF6\u5E93",
    list: [{
      url: "https://element.eleme.cn/#/zh-CN",
      logo: "https://raw.githubusercontent.com/ElemeFE/element/dev/examples/assets/images/element-logo-small.svg",
      name: "Element Ui",
      explain: "Element\uFF0C\u4E00\u5957\u4E3A\u5F00\u53D1\u8005\u3001\u8BBE\u8BA1\u5E08\u548C\u4EA7\u54C1\u7ECF\u7406\u51C6\u5907\u7684\u57FA\u4E8E Vue 2.0 \u7684\u684C\u9762\u7AEF\u7EC4\u4EF6\u5E93"
    }]
  },
  {
    title: "Css",
    list: [
      {
        url: "https://cubic-bezier.com/#.17,.67,.83,.67",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARFJREFUOE9jZFi9u57hP0MDA6mAkeEnAwNDOyPDqt3/SdULV8/I8JMsA5742DLIbDkMNodkA1772TMobDvC8PXPX9IMUOHhYrjkZsGQfvY6w+KHz5F8gRYGAqwsDB9+/4ErYGZkZHjrb88w8fYjhom3HzO8+/UbJcgwvJCiKM0w5/5TsKJ8VTmGMnV5BtmtRxj+/f/PECwjxrD2ySv8BsBkPwc6MjgeOMtw5v0nvJGE4gIXcSGGA6/eM4A0c67bR1TsohgQJC3GsMpSl4FlzV6iNGNE4xkXMwaLvacZ/vwnPm2huGCJuQ5DzMkrRNuO4oJddkYMbofOkaQZxYBH3jYMcluPkG8AyToh1v9kpDQ7AwA7WnJHAr6XGAAAAABJRU5ErkJggg==",
        name: "\u8D1D\u585E\u5C14\u66F2\u7EBF\u5728\u7EBF\u53D6\u503C",
        explain: "css3\u8D1D\u585E\u5C14\u66F2\u7EBF\u53D6\u503C"
      },
      {
        url: "https://chokcoco.github.io/CSS-Inspiration/#/",
        logo: "https://chokcoco.github.io/CSS-Inspiration/logo2.png",
        name: "CSS Inspiration -- CSS\u7075\u611F",
        explain: "\u8FD9\u91CC\u53EF\u4EE5\u8BA9\u4F60\u5BFB\u627E\u5230\u4F7F\u7528\u6216\u8005\u662F\u5B66\u4E60 CSS \u7684\u7075\u611F\uFF0C\u4EE5\u5206\u7C7B\u7684\u5F62\u5F0F\uFF0C\u5C55\u793A\u4E0D\u540C CSS \u5C5E\u6027\u6216\u8005\u4E0D\u540C\u7684\u8BFE\u9898\u4F7F\u7528 CSS \u6765\u89E3\u51B3\u7684\u5404\u79CD\u65B9\u6CD5\u3002"
      },
      {
        url: "https://animista.net/",
        logo: "https://animista.net/favicon.ico",
        name: "CSS\u52A8\u753B\u5E93",
        explain: "css\u52A8\u753B\u5E93\u3002"
      }
    ]
  },
  {
    title: "\u4EE3\u7801\u98CE\u683C\u68C0\u67E5",
    list: [
      {
        url: "https://cn.eslint.org/",
        logo: "https://cn.eslint.org/img/favicon.512x512.png",
        name: "ESLint",
        explain: "\u53EF\u7EC4\u88C5\u7684\u3001\u7528\u4E8E JavaScript \u548C JSX \u7684\u4EE3\u7801\u68C0\u67E5\u5DE5\u5177"
      },
      {
        url: "https://vue.docschina.org/v2/style-guide/",
        logo: "https://v3.cn.vuejs.org/images/icons/apple-icon-152x152.png",
        name: "Vue \u98CE\u683C\u6307\u5357",
        explain: "Vue \u4EE3\u7801\u7684\u98CE\u683C\u6307\u5357"
      }
    ]
  },
  {
    title: "Node.js & Deno",
    list: [
      {
        url: "http://nodejs.cn/",
        logo: "http://img.nodejs.cn/favicon.png",
        name: "Node.js",
        explain: "\u57FA\u4E8E V8 \u5F15\u64CE\u7684 JavaScript \u8FD0\u884C\u73AF\u5883"
      },
      {
        url: "https://www.npmjs.com/",
        logo: "https://static.npmjs.com/7a7ffabbd910fc60161bc04f2cee4160.png",
        name: "NPM",
        explain: "npm \u662F JavaScript package \u7BA1\u7406\u5DE5\u5177\uFF0C\u5728\u8FD9\u91CC\u53EF\u4EE5\u627E\u5230\u53EF\u590D\u7528\u4EE3\u7801\uFF0C\u5E76\u4EE5\u5F3A\u5927\u7684\u5168\u65B0\u65B9\u5F0F\u8FDB\u884C\u805A\u5408"
      }
    ]
  },
  {
    title: "\u5C0F\u7A0B\u5E8F\u6846\u67B6",
    list: [{
      url: "https://wepyjs.github.io/wepy-docs/2.x/#/",
      logo: "https://wepyjs.github.io/wepy-docs/static/img/logo-green.png",
      name: "wepy",
      explain: "WePY \u662F\u4E00\u6B3E\u8BA9\u5C0F\u7A0B\u5E8F\u652F\u6301\u7EC4\u4EF6\u5316\u5F00\u53D1\u7684\u6846\u67B6\uFF0C\u901A\u8FC7\u9884\u7F16\u8BD1\u7684\u624B\u6BB5\u8BA9\u5F00\u53D1\u8005\u53EF\u4EE5\u9009\u62E9\u81EA\u5DF1\u559C\u6B22\u7684\u5F00\u53D1\u98CE\u683C"
    }]
  },
  {
    title: "\u5176\u4ED6\u5DE5\u5177\u7F51\u7AD9",
    list: [{
      url: "http://json2ts.com/",
      logo: "",
      name: "json2ts",
      explain: "\u53EF\u4EE5\u5C06JSON\u6570\u636E\u751F\u6210TypeScript\u63A5\u53E3\u7684\u4E00\u4E2A\u7F51\u7AD9"
    }, {
      url: "https://babeljs.io/",
      logo: "https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg",
      name: "Babel",
      explain: "ES6\u4EE3\u7801\u8F6C\u4E3AES5\u4EE3\u7801\u7684\u5728\u7EBF\u8F6C\u6362\u5DE5\u5177"
    }]
  }
];
var index_vue_vue_type_style_index_0_lang = "";
var index_vue_vue_type_style_index_1_scoped_true_lang = "";
const _sfc_main$1 = vue.defineComponent({
  components: {
    Menu,
    Content
  },
  setup() {
    const menuList = data.map((item) => {
      return item.title;
    });
    const showIframe = vue.ref(false);
    const content = vue.ref(null);
    const menuClick = () => {
      content.value.showIframe = false;
    };
    return {
      menuClick,
      content,
      showIframe,
      data,
      menuList
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Menu = vue.resolveComponent("Menu");
  const _component_Content = vue.resolveComponent("Content");
  _push(`<section${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-wrappy" }, _attrs))} data-v-4a116ac2>`);
  _push(serverRenderer.ssrRenderComponent(_component_Menu, { menuList: _ctx.menuList }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_Content, {
    data: _ctx.data,
    ref: "content"
  }, null, _parent));
  _push(`</section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/page/home/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4a116ac2"]]);
const routes = [
  { path: "/", component: Home }
];
function createRouter() {
  return vueRouter.createRouter({
    history: vueRouter.createMemoryHistory(),
    routes
  });
}
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = vue.resolveComponent("router-view");
  _push(serverRenderer.ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
function createApp() {
  const app = vue.createSSRApp(App);
  const router = createRouter();
  app.use(router);
  return {
    app,
    router
  };
}
async function render(url, manifest) {
  const { app, router } = createApp();
  router.push(url);
  await router.isReady();
  const ctx = {};
  const html = await serverRenderer.renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = path.basename(file);
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile);
              seen.add(depFile);
            }
          }
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
exports.render = render;
