var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/highlight.js/styles/github-dark-dimmed.css
var require_github_dark_dimmed = __commonJS({
  "node_modules/highlight.js/styles/github-dark-dimmed.css"(exports, module2) {
    module2.exports = "/build/_assets/github-dark-dimmed-OAJW4HO2.css";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 87,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-CPX3BRI7.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => ({
  charset: "utf-8",
  title: "Rookr Blog App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: " Hello World" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/Blog.tsx
var Blog_exports = {};
__export(Blog_exports, {
  default: () => Blog,
  links: () => links2
});
var import_react3 = require("@remix-run/react"), import_github_dark_dimmed = __toESM(require_github_dark_dimmed()), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links2 = () => [
  {
    rel: "stylesheet",
    href: import_github_dark_dimmed.default
  }
];
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "prose lg:prose-xl py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/routes/Blog.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this),
    ";"
  ] }, void 0, !0, {
    fileName: "app/routes/Blog.tsx",
    lineNumber: 19,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/Blog.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// mdx:routes\Blog\SecontPost.mdx
var SecontPost_exports = {};
__export(SecontPost_exports, {
  attributes: () => attributes,
  default: () => SecontPost_default,
  filename: () => filename,
  handle: () => handle,
  headers: () => headers,
  meta: () => meta2
});
var import_react4 = __toESM(require("react")), attributes = {
  title: "Hello World Again!",
  meta: {
    title: "Hello World Again!",
    description: "hello everyone!!"
  }
};
function MDXContent(props = {}) {
  let _components = Object.assign({
    h2: "h2",
    p: "p",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(_components.h2, null, "Write something here!!"), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.p, null, "blah blah blah"), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.pre, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, { className: "hljs language-js" }, /* @__PURE__ */ import_react4.default.createElement(_components.span, { className: "hljs-keyword" }, "function"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, { className: "hljs-title function_" }, "hello"), "(", /* @__PURE__ */ import_react4.default.createElement(_components.span, { className: "hljs-params" }), `) {\r
    `, /* @__PURE__ */ import_react4.default.createElement(_components.span, { className: "hljs-variable language_" }, "console"), ".", /* @__PURE__ */ import_react4.default.createElement(_components.span, { className: "hljs-title function_" }, "log"), "(", /* @__PURE__ */ import_react4.default.createElement(_components.span, { className: "hljs-string" }, "'yooo!'"), `)\r
}
`)));
  return MDXLayout ? /* @__PURE__ */ import_react4.default.createElement(MDXLayout, { ...props }, _content) : _content;
}
var SecontPost_default = MDXContent, filename = "SecontPost.mdx", headers = typeof attributes < "u" && attributes.headers, meta2 = typeof attributes < "u" && attributes.meta, handle = typeof attributes < "u" && attributes.handle;

// mdx:routes\Blog\FirstPost.mdx
var FirstPost_exports = {};
__export(FirstPost_exports, {
  attributes: () => attributes2,
  default: () => FirstPost_default,
  filename: () => filename2,
  handle: () => handle2,
  headers: () => headers2,
  meta: () => meta3
});
var import_react5 = __toESM(require("react")), attributes2 = {
  title: "My first about post about... making my first post!",
  date: new Date(163944e7),
  meta: {
    title: "My First Post",
    description: "Some quick notes about adding syntax highlighting"
  }
};
function MDXContent2(props = {}) {
  let _components = Object.assign({
    h2: "h2",
    h3: "h3",
    p: "p",
    a: "a",
    code: "code",
    pre: "pre",
    span: "span",
    em: "em",
    ul: "ul",
    li: "li"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(_components.h2, null, attributes2.title), `
`, attributes2.date.toDateString(), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.h3, null, "First of all how did I get this page to render?"), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Remix has ", /* @__PURE__ */ import_react5.default.createElement(_components.a, { href: "https://remix.run/docs/en/v1/guides/mdx" }, "built-in support for MDX"), ", it automatically will treat each ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, ".mdx"), " file witin ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "/routes"), ` like a route module. Just like regular components.\r
Basically that means an MDX file is automatically a page! There's really not much work to do.`), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.h3, null, "Syntax Highlighting"), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "The only thing I really needed to setup was some syntax highlighting, e.g. you should notice the following code block should already be pre-styled with my currently selected theme:"), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.pre, null, /* @__PURE__ */ import_react5.default.createElement(_components.code, { className: "hljs language-js" }, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "function"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title function_" }, "helloWorld"), "(", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-params" }), `) {\r
  `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "return"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, "'hello!'"), `;\r
}
`)), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "To achieve this first of all I had to update the base ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "remix.config.js"), " to now have the ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "mdx"), " property."), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.pre, null, /* @__PURE__ */ import_react5.default.createElement(_components.code, { className: "hljs language-js" }, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-variable language_" }, "module"), ".", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-property" }, "exports"), ` = {\r
  `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-comment" }, "// ... existing config here"), `\r
  `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "mdx"), ": ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "async"), ` (filename) => {\r
    `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "const"), " [rehypeHighlight] = ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "await"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title class_" }, "Promise"), ".", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title function_" }, "all"), `([\r
      `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "import"), "(", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, "'rehype-highlight'"), ").", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title function_" }, "then"), "(", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-function" }, "(", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-params" }, "mod"), ") =>"), " mod.", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-property" }, "default"), `),\r
    ]);\r
    `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "return"), ` {\r
      `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "rehypePlugins"), `: [rehypeHighlight],\r
    };\r
  },\r
};
`)), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Notice that we are using ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "rehype-highlight"), " as a plugin which ultimately will use ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "highlight.js"), " behind the scenes to transform our html."), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, `There are actually other ways to do this, for example you could also use a remark plugin instead or a plugin which uses PrismJS.\r
Honestly this MDX ecosystem is still very new to me so I'm not quite sure yet what's the best approach. Will look into that more later!`), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "The ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "rehype-highlight"), " plugin was the example used in the docs so I just ran with it."), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Anyways, once you have that config change I then started configuring my blog routing."), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.h3, null, "Let's take a moment to talk about the routing"), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "As an example I currently (at the time of writing) have the following files:"), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.pre, null, /* @__PURE__ */ import_react5.default.createElement(_components.code, null, `app/routes/blog.tsx --> The layout "parent"\r
app/routes/blog/index.tsx --> The "index route" for /blog\r
app/routes/blog/first-post.mdx --> The post you're reading!
`)), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "The distinction between ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "blog.tsx"), " and ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "blog/index.tsx"), ` here was initially very confusing to me.\r
However it started to make a little bit more sense when I remeber how the same sort of ideas work with React Route 6.`), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "For example in React Router that routing might look like this:"), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.pre, null, /* @__PURE__ */ import_react5.default.createElement(_components.code, { className: "hljs language-jsx" }, "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title class_" }, "Routes"), `>\r
  `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "xml" }, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-tag" }, "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-name" }, "Route"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "path"), "=", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, '"/"'), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "element"), "=", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, "{"), "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "App"), " />"), `}>\r
    `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-tag" }, "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-name" }, "Route"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "index"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "element"), "=", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, "{"), "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "Home"), " />"), `} />\r
    `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-tag" }, "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-name" }, "Route"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "path"), "=", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, '"blog"'), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "element"), "=", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, "{"), "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "Blog"), " />"), `}>\r
      `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-tag" }, "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-name" }, "Route"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "path"), "=", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, '"first-post"'), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "element"), "=", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, "{"), "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "FirstPost"), " />"), `} />\r
      `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-tag" }, "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-name" }, "Route"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "index"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "element"), "=", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, "{"), "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "BlogIndex"), " />"), `} />\r
    `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-tag" }, "</", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-name" }, "Route"), ">"), `\r
  `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-tag" }, "</", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-name" }, "Route"), ">")), `\r
</`, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title class_" }, "Routes"), `>
`)), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "In the above example the element ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "<Blog />"), " basically houses the common layout/logic for all of the children below it. It specifically needs to render an ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "<Outlet />"), ` to define where the nested routes will render.\r
That's basically the same exact idea here in Remix, except that structure is being defined using the file system. Once I wrapped my head around that it made a litte bit more sense.`), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.h3, null, "Now back to syntax highlighting..."), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Now that we have that structure in place, the only thing left to do is setup up our ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "highlight.js"), " CSS file to specifically load in ", /* @__PURE__ */ import_react5.default.createElement(_components.em, null, "only"), " for our blog routing. This is because we likely won't need those styles anywhere else but in the blog posts."), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "In addition to that Remix seems to optimize what CSS is sent ", /* @__PURE__ */ import_react5.default.createElement(_components.em, null, "per page"), ". Meaning to enable our syntax highlighting we'd have to include the styles in each page. That seems overkill, so instead we're going to load it inside our ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "blog.tsx"), " (which again remember wraps the underlying nested children) so that we only define it once across all blog posts."), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.pre, null, /* @__PURE__ */ import_react5.default.createElement(_components.code, { className: "hljs language-ts" }, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "import"), " styles ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "from"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, "'highlight.js/styles/github-dark-dimmed.css'"), "; ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-comment" }, "// change this to your desired theme"), `\r
`, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "import"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "type"), " { ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title class_" }, "LinksFunction"), ", ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title class_" }, "LoaderFunction"), " } ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "from"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, "'remix'"), `;\r
`, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "import"), " { ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title class_" }, "MetaFunction"), ", ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title class_" }, "Outlet"), " } ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "from"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, '"remix"'), `;\r
\r
`, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "export"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "const"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "links"), ": ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title class_" }, "LinksFunction"), " = ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-function" }, "() =>"), ` {\r
  `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "return"), ` [\r
    {\r
      `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "rel"), ": ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-string" }, "'stylesheet'"), `,\r
      `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-attr" }, "href"), `: styles,\r
    },\r
  ];\r
}\r
\r
`, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "export"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "default"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "function"), " ", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-title function_" }, "Blog"), "(", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-params" }), `) {\r
  `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-keyword" }, "return"), ` (\r
    `, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "xml" }, /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-tag" }, "<", /* @__PURE__ */ import_react5.default.createElement(_components.span, { className: "hljs-name" }, "Outlet"), " />")), `\r
  );\r
}\r

`)), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Now if you're able to see all of the above code blocks with proper highlighting then I must've done it right!"), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.h2, null, "Where to go from here"), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react5.default.createElement(_components.li, null, "In general the site's stlyes and look/feel is still pretty plain. I'll need to improve that to something... reasonable.", `
`, /* @__PURE__ */ import_react5.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react5.default.createElement(_components.li, null, "Looking to add tailwind since I've been wanting to learn that anyways"), `
`), `
`), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.li, null, "A challenge to figure out: how to display nested attributes from the parent ", /* @__PURE__ */ import_react5.default.createElement(_components.code, null, "blog.tsx"), "? For example what if I wanted to determine the title or date of a specific blog post so that I can render it consistently across all posts?", `
`, /* @__PURE__ */ import_react5.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react5.default.createElement(_components.li, null, "Actually I noticed Kent C. Dodd's blog doesn't utilize Remix's built-in MDX route modules. I have a feeling it's because of maybe one of these concerns"), `
`), `
`), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.li, null, "I need to improve the ", /* @__PURE__ */ import_react5.default.createElement(_components.a, { href: "/blog" }, "base blog page"), " to dynamically determine the full list of blog posts", `
`, /* @__PURE__ */ import_react5.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react5.default.createElement(_components.li, null, "I'll probably need to read from the file system then utilize frontmatter to determine titles, dates, etc."), `
`), `
`), `
`), `
`, /* @__PURE__ */ import_react5.default.createElement(_components.p, null, "Anyways that's it for now!"));
  return MDXLayout ? /* @__PURE__ */ import_react5.default.createElement(MDXLayout, { ...props }, _content) : _content;
}
var FirstPost_default = MDXContent2, filename2 = "FirstPost.mdx", headers2 = typeof attributes2 < "u" && attributes2.headers, meta3 = typeof attributes2 < "u" && attributes2.meta, handle2 = typeof attributes2 < "u" && attributes2.handle;

// mdx:routes\Blog\ThirdPost.mdx
var ThirdPost_exports = {};
__export(ThirdPost_exports, {
  attributes: () => attributes3,
  default: () => ThirdPost_default,
  filename: () => filename3,
  handle: () => handle3,
  headers: () => headers3,
  meta: () => meta4
});
var import_react6 = __toESM(require("react")), attributes3 = {
  title: "Update title!!!!",
  meta: {
    title: "Update title!!!!",
    description: "hello everyone!!"
  }
};
function MDXContent3(props = {}) {
  let _components = Object.assign({
    h2: "h2",
    p: "p",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(_components.h2, null, "Write something here!!"), `
`, /* @__PURE__ */ import_react6.default.createElement(_components.p, null, "blah blah blah"), `
`, /* @__PURE__ */ import_react6.default.createElement(_components.pre, null, /* @__PURE__ */ import_react6.default.createElement(_components.code, { className: "hljs language-js" }, /* @__PURE__ */ import_react6.default.createElement(_components.span, { className: "hljs-keyword" }, "function"), " ", /* @__PURE__ */ import_react6.default.createElement(_components.span, { className: "hljs-title function_" }, "hello"), "(", /* @__PURE__ */ import_react6.default.createElement(_components.span, { className: "hljs-params" }), `) {\r
    `, /* @__PURE__ */ import_react6.default.createElement(_components.span, { className: "hljs-variable language_" }, "console"), ".", /* @__PURE__ */ import_react6.default.createElement(_components.span, { className: "hljs-title function_" }, "log"), "(", /* @__PURE__ */ import_react6.default.createElement(_components.span, { className: "hljs-string" }, "'yooo!'"), `)\r
}
`)));
  return MDXLayout ? /* @__PURE__ */ import_react6.default.createElement(MDXLayout, { ...props }, _content) : _content;
}
var ThirdPost_default = MDXContent3, filename3 = "ThirdPost.mdx", headers3 = typeof attributes3 < "u" && attributes3.headers, meta4 = typeof attributes3 < "u" && attributes3.meta, handle3 = typeof attributes3 < "u" && attributes3.handle;

// app/routes/Blog/index.tsx
var Blog_exports2 = {};
__export(Blog_exports2, {
  default: () => BlogIndex,
  loader: () => loader
});
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function postFromModule(mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  };
}
var loader = () => [
  postFromModule(FirstPost_exports),
  postFromModule(SecontPost_exports),
  postFromModule(ThirdPost_exports)
];
function BlogIndex() {
  let posts = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: "Articles" }, void 0, !1, {
      fileName: "app/routes/Blog/index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.Link, { to: post.slug, children: post.title }, void 0, !1, {
        fileName: "app/routes/Blog/index.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this),
      post.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "m-0 lg:m-0", children: post.description }, void 0, !1, {
        fileName: "app/routes/Blog/index.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this) : null
    ] }, post.slug, !0, {
      fileName: "app/routes/Blog/index.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/Blog/index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Blog/index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "14f01ead", entry: { module: "/build/entry.client-2G4DFCF7.js", imports: ["/build/_shared/chunk-P7I3FSFZ.js", "/build/_shared/chunk-CZ6M6RY7.js", "/build/_shared/chunk-KCDW4FMX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZYDUN377.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Blog": { id: "routes/Blog", parentId: "root", path: "Blog", index: void 0, caseSensitive: void 0, module: "/build/routes/Blog-UU6VTXLY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Blog/FirstPost": { id: "routes/Blog/FirstPost", parentId: "routes/Blog", path: "FirstPost", index: void 0, caseSensitive: void 0, module: "/build/routes/Blog/FirstPost-LWAREBIJ.js", imports: ["/build/_shared/chunk-T4KBEVXF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Blog/SecontPost": { id: "routes/Blog/SecontPost", parentId: "routes/Blog", path: "SecontPost", index: void 0, caseSensitive: void 0, module: "/build/routes/Blog/SecontPost-EE4EJHOG.js", imports: ["/build/_shared/chunk-E3AQAT2E.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Blog/ThirdPost": { id: "routes/Blog/ThirdPost", parentId: "routes/Blog", path: "ThirdPost", index: void 0, caseSensitive: void 0, module: "/build/routes/Blog/ThirdPost-45TLTAXG.js", imports: ["/build/_shared/chunk-JE2SGBIF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Blog/index": { id: "routes/Blog/index", parentId: "routes/Blog", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/Blog/index-TUR36N6G.js", imports: ["/build/_shared/chunk-E3AQAT2E.js", "/build/_shared/chunk-T4KBEVXF.js", "/build/_shared/chunk-JE2SGBIF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-KUKOJTV3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-14F01EAD.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/Blog": {
    id: "routes/Blog",
    parentId: "root",
    path: "Blog",
    index: void 0,
    caseSensitive: void 0,
    module: Blog_exports
  },
  "routes/Blog/SecontPost": {
    id: "routes/Blog/SecontPost",
    parentId: "routes/Blog",
    path: "SecontPost",
    index: void 0,
    caseSensitive: void 0,
    module: SecontPost_exports
  },
  "routes/Blog/FirstPost": {
    id: "routes/Blog/FirstPost",
    parentId: "routes/Blog",
    path: "FirstPost",
    index: void 0,
    caseSensitive: void 0,
    module: FirstPost_exports
  },
  "routes/Blog/ThirdPost": {
    id: "routes/Blog/ThirdPost",
    parentId: "routes/Blog",
    path: "ThirdPost",
    index: void 0,
    caseSensitive: void 0,
    module: ThirdPost_exports
  },
  "routes/Blog/index": {
    id: "routes/Blog/index",
    parentId: "routes/Blog",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: Blog_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
