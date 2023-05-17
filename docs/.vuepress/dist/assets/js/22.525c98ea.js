(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{298:function(t,a,e){"use strict";e.r(a);var s=e(10),l=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),a("p",[t._v("set 用于设置 Shell 特性或查看 Shell 变量。")]),t._v(" "),a("p",[t._v('使用 set 可以查看和修改 Shell 环境的运行参数，定制 Shell 脚本的运行环境。符号"+“和”-"的作用分别是打开和关闭指定模式。')]),t._v(" "),a("p",[t._v("注意：")]),t._v(" "),a("ol",[a("li",[t._v("如果命令行下不带任何参数运行 set，会显示所有 Shell 变量和函数。")]),t._v(" "),a("li",[t._v("set 不能用来定义变量，定义变量请使用“变量名=值”的形式。")])]),t._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--abefhkmnptuvxBCEHPT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-o option-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("+abefhkmnptuvxBCEHPT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("+o option-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v("\n\t标示已修改的变量，以供输出至环境变量。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v("\n\t使被中止的后台程序立刻回报执行状态。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v("\n\t转向所产生的文件无法覆盖已存在的文件。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n\tShell 预设会用杂凑表记忆使用过的指令，以加速指令的执行。使用 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" 参数可取消。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("\n\t若指令传回值不等于0，则立即退出 Shell。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v("\n\t取消使用通配符。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v("\n\t自动记录函数所在位置。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v("\n\tShell 可利用”"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("”加"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("指令编号"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("的方式来执行 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v(" 中记录的指令。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-k")]),t._v("\n\t指令所给的参数都会被视为此指令的环境变量。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v("\n\t记录 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" 循环的变量名称。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v("\n\t使用监视模式。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v("\n\t只读取指令，而不实际执行。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("option-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t通过选项名称完成对 Shell 执行环境的设置。如果未执行选项名称，则显示所有配置情况。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v("\n\t启动优先顺序模式。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v("\n\t启动 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" 参数后，执行指令时，会以实际的文件或目录来取代符号链接。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v("\n\t执行完随后的指令，即退出 Shell。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v("\n\t当执行时使用到未定义过的变量，则显示错误信息。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n\t显示 Shell 所读取的输入值。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-x")]),t._v("\n\t执行指令时，会先显示该指令及其所有参数。\n")])])]),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),a("p",[t._v("（1）无参执行 set 查看所有 Shell 变量和函数。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" foo\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("foo\n")])])]),a("p",[t._v("（2）查看当前 Shell 执行环境的设置情况。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v("\nallexport      \toff\nbraceexpand    \ton\nemacs          \ton\nerrexit        \toff\nerrtrace       \toff\nfunctrace      \toff\nhashall        \ton\nhistexpand     \ton\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v("        \ton\nignoreeof      \toff\ninteractive-comments\ton\nkeyword        \toff\nmonitor        \ton\nnoclobber      \toff\nnoexec         \toff\nnoglob         \toff\nnolog          \toff\nnotify         \toff\nnounset        \toff\nonecmd         \toff\nphysical       \toff\npipefail       \toff\nposix          \toff\nprivileged     \toff\nverbose        \toff\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v("             \toff\nxtrace         \toff\n")])])]),a("p",[t._v("（3）当执行 Shell 脚本时使用到未定义过的变量，则显示错误信息。")]),t._v(" "),a("p",[t._v("执行脚本的时候，如果遇到不存在的变量，Bash 默认忽略它。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" bar\n")])])]),a("p",[t._v("上面代码中，$a 是一个不存在的变量。执行结果如下。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" script.sh\n\nbar\n")])])]),a("p",[t._v("可以看到，"),a("code",[t._v("echo $a")]),t._v("输出了一个空行，Bash 忽略了不存在的"),a("code",[t._v("$a")]),t._v("，然后继续执行"),a("code",[t._v("echo bar")]),t._v("。")]),t._v(" "),a("p",[t._v("大多数情况下，这不是开发者想要的行为，遇到变量不存在，脚本应该报错，而不是一声不响地往下执行。")]),t._v(" "),a("p",[a("code",[t._v("set -u")]),t._v("就用来改变这种行为。脚本在头部加上它，遇到不存在的变量就会报错，并停止执行。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" bar\n")])])]),a("p",[t._v("运行结果如下。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" script.sh\nbash: script.sh:行4: a: 未绑定的变量\n")])])]),a("p",[t._v("可以看到，脚本报错了，并且不再执行后面的语句。")]),t._v(" "),a("p",[t._v("-u 还有另一种写法 -o nounset，两者是等价的。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" nounset\n")])])]),a("p",[t._v("（4）脚本执行时打印出命令。")]),t._v(" "),a("p",[t._v("默认情况下，脚本执行后，屏幕只显示运行结果，没有其他内容。如果多个命令连续执行，它们的运行结果就会连续输出。有时会分不清，某一段内容是什么命令产生的。")]),t._v(" "),a("p",[a("code",[t._v("set -x")]),t._v("用来在运行结果之前，先输出执行的那一行命令。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-x")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" bar\n")])])]),a("p",[t._v("运行结果如下。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" script.sh\n+ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" bar\nbar\n")])])]),a("p",[t._v("可以看到，执行echo bar之前，该命令会先打印出来，行首以+表示。这对于调试复杂的脚本是很有用的。")]),t._v(" "),a("p",[a("code",[t._v("-x")]),t._v(" 还有另一种写法 "),a("code",[t._v("-o xtrace")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" xtrace\n")])])]),a("h2",{attrs:{id:"_5-选项名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-选项名"}},[t._v("#")]),t._v(" 5.选项名")]),t._v(" "),a("p",[t._v("执行环境的不同配置有对应的名称，一般与 set 选项也有对应的关系。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("选项名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("allexport")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-a")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("从这个选项中被设置开始就自动标明要输出的新变量或修改过的变量，直至选项被复位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("braceexpand")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-B")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("打开花括号扩展，它是一个默认设置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("emacs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使用emacs内置编辑器进行命令行编辑，是一个默认设置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("errexit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-e")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当命令返回一个非零退出状态（失败）时退出。读取初始化文件时不设置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("histexpand")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-H")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("执行历史替换时打开!和!!扩展，是一个默认设置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("history")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("打开命令行历史、默认为打开")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ignoreeof")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("禁止用EOF(Ctrl+D)键退出shell。必须键入exit才能退出。等价于设置shell变量IGNOREEOF=10")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("keyword")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-k")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将关键字参数放到命令的环境中")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("interactive-comments")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("对于交互式shell，把#符后面的文本作为注释")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("monitor")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-m")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置作业控制")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("noclobber")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-C")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("防止文件在重定向时被重写")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("noexec")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-n")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("读命令，但不执行。用来检查脚本的语法。交互式运行时不开启")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("noglob")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-d")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("禁止用路径名扩展。即关闭通配符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("notify")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-b")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("后台作业完成时通知用户")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("nounset")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-u")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("扩展一个未设置的变量时显示一个错误信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onecmd")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-t")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在读取和执行命令后退出")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("physical")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-P")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置时，在键入cd或pwd禁止符号链接。用物理目录代替")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("privileged")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-p")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置后，shell不读取.profile或ENV文件，且不从环境继承shell函数，将自动为setuid脚本开启特权")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("verbose")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("为调试打开verbose模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vi")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使用vi内置编辑器进行命令行编辑")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("xtrace")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-x")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("为调试打开echo模式")])])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/bash.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("bash(1) - Linux manual page - man7.org"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2017/11/bash-set.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bash 脚本set 命令教程- 阮一峰的网络日志"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=l.exports}}]);