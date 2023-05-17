(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{461:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),a("p",[t._v("GDB（GNU Debugger）是 GNU 开源组织发布的一个强大的 UNIX 程序调试工具。")]),t._v(" "),a("p",[t._v("如果你是在 UNIX 平台下开发软件，你会发现 GDB 这个调试工具有比 VC、BCB 的图形化调试工具拥有更强大的功能。同时 GDB 也具有例如 DDD 调试器，全称是 Data Display Debugger 这样的图形化调试端。")]),t._v(" "),a("p",[t._v("一般来说，GDB 主要完成下面四个方面的功能：\n（1）启动你的程序，可以按照你的自定义的要求随心所欲的运行程序；\n（2）可让被调试的程序在你所指定的调置的断点处停住（断点可以是条件表达式）；\n（3）当程序被停住时，可以检查此时你的程序中所发生的事；\n（4）动态的改变程序的执行环境。")]),t._v(" "),a("p",[t._v("GDB 强大的功能依赖于繁杂的命令，若想精通 GDB 和熟练操作所有 GDB 命令绝非易事。当然，在实际的代码调试过程中，没有必要熟练掌握 GDB 所有命令，可以快速掌握 GDB 常见的命令来应付大部分的调试工作。推荐一个快速的 GDB 上手教程："),a("a",{attrs:{href:"http://blog.csdn.net/liigo/article/details/582231",target:"_blank",rel:"noopener noreferrer"}},[t._v(" GDB十分钟教程"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),a("p",[t._v("GDB 通常和 gcc 一起使用，编译选项加入"),a("code",[t._v("-g")]),t._v("才可使可执行文件处于debug模式。")]),t._v(" "),a("p",[t._v("gdb命令格式：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("gdb "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-help"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-nx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-batch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-cd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-b bps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-tty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-s symfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-e prog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-se prog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-c core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-x cmds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-d dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("core"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("procID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用操作"}},[t._v("#")]),t._v(" 3.常用操作")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("gdb "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("可执行文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("：选中可执行程序，进入 gdb 的 debug 模式；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" b（breakpoint）：b 函数名 ：对此函数进行中断 ；b 文件名：行号；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" r （run）：启动程序，运行至程序的断点或者结束；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" l （list）：l funcname，查看函数源码。或 l linenum，显示指定行周围的源码。或 l -，显示当前行前面的源码。或l，显示当前行后面的源码；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" s（step）：进入函数，逐语句运行；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":不进入函数，逐过程运行；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" c（continue）：继续运行，跳至下一个断点；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" p（print）：打印显示变量值；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("variable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("value,为变量赋值；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" kill：终止调试的程序；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" h（help）：列出gdb详细命令帮助列表；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v(" filename.c:30：清除30行处的断点；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" info break：显示断点信息；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" delete 断点编号：断点编号是info "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("break")]),t._v(" 后显示出来的；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" bt（backtrace）：回溯到段出错的位置；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" frame 帧号：帧号是bt命令产生的堆栈针；\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" q（quit）：退出；\n")])])]),a("p",[t._v("括号中的长命令等同于其缩写命令。")]),t._v(" "),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),a("p",[t._v("（1）分屏显示源代码")]),t._v(" "),a("p",[t._v("gdb 模式下使用"),a("code",[t._v("layout src")]),t._v(" 或者大于号 "),a("code",[t._v(">")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("layout src\n")])])]),a("p",[t._v("还可以在进入 gdb 时加入参数 -tui 达到同样效果。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("gdb "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-tui")]),t._v("\n")])])]),a("p",[t._v("分屏后的效果如下图所示：\n"),a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTUxMjEzMTcxMTM2OTM3?x-oss-process=image/format,png",alt:"这里写图片描述"}}),t._v("\n（2）退出 gdb 分屏模式。")]),t._v(" "),a("p",[t._v("使用快捷键 Ctrl+x+a 切换。")]),t._v(" "),a("h2",{attrs:{id:"_5-tui-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-tui-模式"}},[t._v("#")]),t._v(" 5.TUI 模式")]),t._v(" "),a("p",[t._v("TUI（Text User Interface）模式指文本界面。")]),t._v(" "),a("h3",{attrs:{id:"_5-1-打开-tui-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-打开-tui-模式"}},[t._v("#")]),t._v(" 5.1 打开 TUI 模式")]),t._v(" "),a("p",[t._v("打开 TUI 模式有多种方法：")]),t._v(" "),a("ul",[a("li",[t._v("使用"),a("code",[t._v("gdbtui")]),t._v(" 或者"),a("code",[t._v("gdb -tui")]),t._v("开始一个调试。-q 表示静默模式打开 gdbtui，不打印介绍与版权信息。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ gdbtui -q sample\n(gdb) ....\n")])])]),a("ul",[a("li",[a("p",[t._v("使用快捷键 "),a("code",[t._v("ctrl+x ctrl+a")]),t._v(" or "),a("code",[t._v("ctrl+x+a")]),t._v("相互切换。")])]),t._v(" "),a("li",[a("p",[t._v("使用大于号 > 切换到TUI模式。")])]),t._v(" "),a("li",[a("p",[t._v("gdb 模式下，使用"),a("code",[t._v("layout next|prev|src|asm|regs|cmd")]),t._v("切换到TUI模式。")])])]),t._v(" "),a("h3",{attrs:{id:"_5-2-tui-模式的-4-个窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-tui-模式的-4-个窗口"}},[t._v("#")]),t._v(" 5.2 TUI 模式的 4 个窗口")]),t._v(" "),a("p",[t._v("command 命令窗口：可以键入调试命令，这也是默认的窗口；\nsource 源代码窗口：显示当前行，断点等信息；\nassembly：汇编代码窗口；\nregister：寄存器窗口；")]),t._v(" "),a("p",[t._v("除 command 窗口外，其他三个窗口不可同时显示。其可用 layout 命令来进行选择自己需要的窗口。可参见 "),a("code",[t._v("help layout")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_5-3-gdbtui-相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-gdbtui-相关命令"}},[t._v("#")]),t._v(" 5.3 gdbtui 相关命令")]),t._v(" "),a("p",[t._v("（1）layout\n用以修改窗口布局。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("layout next \nDisplay the next layout.  \n\nlayout prev \nDisplay the previous layout.  \n\nlayout src \nDisplay the source window only.  \n\nlayout asm \nDisplay the assembly window only.  \n\nlayout split \nDisplay the source and assembly window.  \n\nlayout regs \nDisplay the register window together with the source or assembly window. \n")])])]),a("p",[t._v("（2）winheigh\n调整各个窗口的高度。help winheight可以查看winheight的具体用法。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Usage: winheight <win_name> [+ | -] <#lines>\nWindow names are:\nsrc  : the source window\ncmd  : the command window\nasm  : the disassembly window\nregs : the register display\n")])])]),a("p",[t._v("Change the height of the window name by count lines. Positive counts increase the height, while negative counts decrease it.")]),t._v(" "),a("p",[t._v("使用示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" winheight src +5\n winheight src -4\n")])])]),a("p",[t._v("（3）focus\n用法："),a("code",[t._v("focus next | prev | src | asm | regs | split")])]),t._v(" "),a("p",[t._v("我们可以通过focus命令来调整焦点位置，默认情况下是在src窗口，通过focus next命令， 焦点就移到cmd窗口了，这时候就可以像以前一样，通过方向键来切换到上一条命令和下一条命令。")]),t._v(" "),a("p",[t._v("在默认设置下，方向键和PageUp PageDn 都是用来控制gdbtui的src窗口的，所以，我们常用的上下键用来显示前一条命令和后一条命令的功能就没有了， 不过这个时候我们可以"),a("code",[t._v("focus cmd")]),t._v("将焦点转移到命令窗口，再次来获取这个功能。")]),t._v(" "),a("p",[t._v("当我们通过方向键调整了gdbtui 的src 窗口以后，可以通过update命令重新把焦点定位到当前执行的代码上。")]),t._v(" "),a("p",[t._v("help focus可用于查看focus的用法。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("src  : the source window\nasm  : the disassembly window\nregs : the register display\ncmd  : the command window\n")])])]),a("p",[t._v("焦点不在 src 窗口以后，我们就不同通过方向键来浏览源码了。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/gdb.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("gdb(1) — Linux manual page - man7.org"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.linux.org/docs/man1/gdb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("gdb(1) manual - linux.org"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.360doc.com/content/14/0325/15/15064667_363606885.shtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("在gdb中显示源码(gdbtui使用方法)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://laokaddk.blog.51cto.com/368606/945057/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDB的使用,重点讲解图像化 gdb -tui 方式 "),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);