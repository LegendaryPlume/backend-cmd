(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{297:function(a,s,t){"use strict";t.r(s);var e=t(10),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-功能简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-功能简介"}},[a._v("#")]),a._v(" 1.功能简介")]),a._v(" "),s("p",[a._v("readonly 命令用于定义只读 Shell 变量和函数。")]),a._v(" "),s("p",[a._v("单独执行 readonly 或使用选项 -p 可以输出显示系统中所有已定义的只读变量和函数。")]),a._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("readonly")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-aAf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("word"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("\n\t定义 Shell 函数。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("\n\t定义索引数组变量。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v("\n\t定义关联数组变量。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v("\n\t显示系统中全部只读变量和函数列表。\n")])])]),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),s("p",[a._v("（1）显示所有只读变量和函数。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("readonly")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ir")]),a._v(" BASHPID\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("BASH_COMPLETION_COMPAT_DIR")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/etc/bash_completion.d"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("BASH_REMATCH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'()'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),s("p",[a._v("（2）定义只读变量并初始化。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("readonly")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FOO")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FOO")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bar"')]),a._v("\n-bash: FOO: "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("readonly")]),a._v(" variable\n")])])]),s("hr"),a._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),s("p",[s("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/bash.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("bash(1) - Linux manual page - man7.org"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);