(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{342:function(a,s,t){"use strict";t.r(s);var n=t(12),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),s("p",[a._v("command 用于运行指定命令，以抑制正常的 Shell 函数查找。仅执行内置命令或 PATH 中的命令。")]),a._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-pVv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" COMMAND "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ARG "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" 使用 "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v(" 变量的一个默认值以确保所有的标准工具都能被找到。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" 打印最终调用的命令。如 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" 打印 /usr/bin/vim。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-V")]),a._v(" 打印每个 COMMAND 命令的详细描述，和 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" 内置命令相似。如 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-V")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" 打印 "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"vim is /usr/bin/vim"')]),a._v("。\n")])])]),s("h2",{attrs:{id:"_4-返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-返回值"}},[a._v("#")]),a._v(" 4.返回值")]),a._v(" "),s("p",[a._v("成功返回 0。")]),a._v(" "),s("p",[a._v("提供了无效选项返回 2。")]),a._v(" "),s("p",[a._v("未找到命令返回 127。")]),a._v(" "),s("h2",{attrs:{id:"_5-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-常用示例"}},[a._v("#")]),a._v(" 5.常用示例")]),a._v(" "),s("p",[a._v("（1）调用命令而不是同名的函数。")]),a._v(" "),s("p",[a._v("假设有一个与 echo 同名的函数。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-name function"}},[a._v("echo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("builtin")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"This is echo function"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v("\nThis is "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v("\n")])])]),s("p",[a._v("如果想调用 echo 命令而不是与之同名的 echo 函数，可以使用 command 来调用。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello world"')]),a._v("\nhello world\n")])])]),s("p",[a._v("（2）查看最终调用的是哪个命令。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v("\n")])])]),s("p",[a._v("（3）查看命令的类型。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-V")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v(" is a shell "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("builtin")]),a._v("\n")])])]),s("hr"),a._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.linux.org/docs/man1/command.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("command(1) - Linux manual page - linux.org"),s("OutboundLink")],1)]),a._v(" "),s("Vssue",{attrs:{title:"command-builtin"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);