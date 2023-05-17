(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{322:function(a,s,t){"use strict";t.r(s);var e=t(10),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),s("p",[a._v("type 用来显示命令的类型。")]),a._v(" "),s("p",[a._v("一个命令的类型可以是：")]),a._v(" "),s("ul",[s("li",[a._v("alias：别名")]),a._v(" "),s("li",[a._v("keyword：Shell 保留关键字")]),a._v(" "),s("li",[a._v("function：Shell 函数")]),a._v(" "),s("li",[a._v("builtin：Shell 内建命令")]),a._v(" "),s("li",[a._v("file：磁盘文件，外部命令")]),a._v(" "),s("li",[a._v("unfound：没有找到")])]),a._v(" "),s("p",[a._v("type 是 Linux 系统的一种自省机制，知道了命令是那种类型，我们就可以针对性的获取帮助。比如内建命令可以用 help 命令来获取帮助，外部命令用 man 或 info 来获取帮助。")]),a._v(" "),s("h2",{attrs:{id:"_2-返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-返回值"}},[a._v("#")]),a._v(" 2.返回值")]),a._v(" "),s("p",[a._v("如果找到所有命令，则 type 返回成功（0）；如果有任何一个命令找不到，则返回失败（1）。")]),a._v(" "),s("h2",{attrs:{id:"_3-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-命令格式"}},[a._v("#")]),a._v(" 3.命令格式")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-aftpP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"_4-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-选项说明"}},[a._v("#")]),a._v(" 4.选项说明")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("\n\t显示所有可能的类型，比如有些命令如 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v(" 是 Shell 内建命令，也可以是外部命令。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("\n\t排除对 Shell 函数的查找。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v("\n\t判断一个名字当前是否是 alias、keyword、function、builtin、file。如果找不到名称，则不打印任何内容。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v("\n\t如果 name 在执行"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"type -t name"')]),a._v("返回的不是"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"file"')]),a._v("，那么什么也不返回；否则会在环境变量 "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v(" 中查找并返回可执行文件路径。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v("\n\t即使"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"type-t name"')]),a._v("不返回"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"file"')]),a._v("，仍然会在环境变量 "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v(" 中查找并返回可执行文件路径。\n")])])]),s("h2",{attrs:{id:"_5-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-常用示例"}},[a._v("#")]),a._v(" 5.常用示例")]),a._v(" "),s("p",[a._v("（1）查看命令的别名。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" is aliased to `ls "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("auto'\n")])])]),s("p",[a._v("（2）查看内建命令。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" is a shell "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("builtin")]),a._v("\n")])])]),s("p",[a._v("（3）查看 Shell 关键字。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" is a shell keyword\n")])])]),s("p",[a._v("（4）查看外部命令。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" is /usr/bin/date\n")])])]),s("p",[a._v("（5）命令没有找到。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" notcmd\nbash: type: notcmd: not found\n")])])]),s("p",[a._v("（6）显示命令所有可能的类型。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" is a shell "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("builtin")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" is /usr/bin/cd\n")])])]),s("p",[a._v("（7）查看 type 命令自身的类型。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" is a shell "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("builtin")]),a._v("\n")])])]),s("hr"),a._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.man7.org/linux/man-pages/man1/bash.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("bash(1) - Linux manual page - man7.org"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://wangchujiang.com/linux-command/c/type.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux type 命令详解：显示指定命令的类型- Linux 命令搜索引擎"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);