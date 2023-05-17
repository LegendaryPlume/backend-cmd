(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{536:function(a,s,t){"use strict";t.r(s);var n=t(10),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),s("p",[a._v("xargs 从标准输入构建和执行命令行。")]),a._v(" "),s("p",[a._v("xargs 可以将 stdin 中以空格或换行符进行分隔的数据，形成以空格分隔的参数（arguments），传递给其他命令。因为以空格作为分隔符，所以有一些文件名或其他意义的字符串内含空格时，xargs 可能会误判。")]),a._v(" "),s("p",[a._v("之所以要用到 xargs，是因为很多命令不支持使用管道 | 传递参数。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("find /sbin -perm +700 | ls -l         # 这个命令是错误，因为标准输入不能作为 ls 的参数\nfind /sbin -perm +700 | xargs ls -l   # 这样才是正确的\n")])])]),s("p",[a._v("简单来说，xargs 的作用是给其他命令传递参数，是构建单行命令的重要组件之一。")]),a._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("xargs [OPTIONS] [COMMAND]\n")])])]),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),s("p",[a._v("注意，长选项的强制性参数对于短选项也是强制的。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('-0, --null\n\t如果输入的 stdin 含有特殊字符，例如反引号 `、反斜杠 \\、空格等字符时，xargs 将它还原成一般字符。为默认选项\n-a, --arg-file=FILE\n\t从指定的文件 FILE 中读取输入内容而不是从标准输入\n-d, --delimiter=DEL\n\t指定 xargs 处理输入内容时的分隔符。xargs 处理输入内容默认是按空格和换行符作为分隔符，输出 arguments 时按空格分隔\n-E EOF_STR\n\tEOF_STR 是 end of file string，表示输入的结束\n-e, --eof[=EOF_STR]\n\t作用等同于 -E 选项，与 -E 选项不同时，该选项不符合 POSIX 标准且 EOF_STR 不是强制的。如果没有 EOF_STR 则表示输入没有结束符\n-I REPLACE_STR\n\t将 xargs 输出的每一项参数单独赋值给后面的命令，参数需要用指定的替代字符串 REPLACE_STR 代替。REPLACE_STR 可以使用 {} $ @ 等符号，其主要作用是当 xargs command 后有多个参数时，调整参数位置。例如备份以 txt 为后缀的文件：find . -name "*.txt" | xargs -I {}  cp {} /tmp/{}.bak\n-i, --replace[=REPLACE_STR]\n\t作用同 -I 选项，参数 REPLACE_STR 是可选的，缺省为 {}。建议使用 -I 选项，因为其符合 POSIX\n-L MAX_LINES\n\t限定最大输入行数。隐含了 -x 选项\n-l, --max-lines[=MAX_LINES]\n\t作用同 -L 选项，参数 MAX_LINES 是可选的，缺省为 1。建议使用 -L 选项，因为其符合 POSIX 标准\n-n, --max-args=MAX_ARGS\n\t表示命令在执行的时候一次使用参数的最大个数\n-o, --open-tty\n\t在执行命令之前，在子进程中重新打开stdin作为/dev/TTY。如果您希望xargs运行交互式应用程序，这是非常有用的\n-P, --max-procs=MAX_PROCS\n\t每次运行最大进程；缺省值为 1。如果 MAX_PROCS 为 0，xargs 将一次运行尽可能多的进程。一般和 -n 或 -L 选项一起使用\n-p, --interactive\n\t当每次执行一个 argument 的时候询问一次用户\n--process-slot-var=NAME\n\t将指定的环境变量设置为每个正在运行的子进程中的唯一值。一旦子进程退出，将重用该值。例如，这可以用于初始负荷分配方案\n-r, --no-run-if-empty\n\t当 xargs 的输入为空的时候则停止 xargs，不用再去执行后面的命令了。为默认选项\n-s, --max-chars=MAX_CHARS\n\t命令行的最大字符数，指的是 xargs 后面那个命令的最大命令行字符数，包括命令、空格和换行符。每个参数单独传入 xargs 后面的命令\n--show-limits\n\t显示操作系统对命令行长度的限制\n-t， --verbose\n\t先打印命令到标准错误输出，然后再执行\n-x, --exit\n\t配合 -s 使用，当命令行字符数大于 -s 指定的数值时，退出 xargs\n--help\n\t显示帮助信息并退出\n--version\n\t显示版本信息并退出\n')])])]),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),s("p",[a._v("（1）将 Shell 的特殊字符反引号还原为一般字符。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'`0123`4 56789'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("0123"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("56789")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("0123"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("56789")]),a._v("\n")])])]),s("p",[a._v("如果直接进行如下操作，会报无法找到命令 01234 的错误，因为反引号在 Shell 中会将 01234 作为一个命令来执行，但是 01234 不是一个命令。-t 表示先打印命令，然后再执行。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("01234"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("56789")]),a._v("\n-bash: 01234: "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" not found\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("56789")]),a._v("\n")])])]),s("p",[a._v("（2）设置 xargs 读入参数时的结束标识，以逗号结束。这里要注意结束标志必须要是单独的字段，即以空格或者换行符分隔的字段。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 01234 , "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("56789")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-E")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('","')]),a._v("\n01234\n")])])]),s("p",[a._v('（3）使用 rm、mv 等命令同时操作多个文件时，有时会报 "argument list too long" 参数列表过长的错误，此时可以使用 xargs 来解决。xargs 将标准输入的字符串分隔后，作为参数传递给后面的命令。例如，给当前目录的所有文件添加后缀名。')]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(".bak\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 选择符合条件的文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-E")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"201701|201702|201703"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(".bak\n")])])]),s("p",[a._v("（4）设置命令行的最大字符数。参数默认一个一个单独传入命令中执行。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"01234 56789"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 01234 \n01234\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("56789")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("56789")]),a._v("\n")])])]),s("p",[a._v("（5）设置标准输入中每次多少行作为命令的参数，默认是将标准输入中所有行的归并到一行一次性传给命令执行。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"01234'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),a._v("56789"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),a._v('01234"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 01234 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("56789")]),a._v(" \n01234 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("56789")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 01234 \n01234\n")])])]),s("p",[a._v("（6）将文件内容以空格分隔合并为一行输出。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 列出文件内容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" test.txt\na b c d e\nf g h i j \nk l m n o\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 多行输入合并为一行输出")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" test.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v("\na b c d e f g h i j k l m n o\n")])])]),s("p",[a._v("（7）与 ps、grep、awk 和 kill 结合，强制终止指定进程。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ef")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" spp "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{printf \"%s \",$2}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-9")]),a._v("\n")])])]),s("p",[s("code",[a._v("ps -ef|grep spp")]),a._v("用于查找包含 spp 的进程，"),s("code",[a._v('awk \'{printf "%s ",$2,FNR}')]),a._v("将目标进程 ID 打印输出，"),s("code",[a._v("xargs kill -9")]),a._v("则将目标进程 ID 作为参数传递给"),s("code",[a._v("kill -9")]),a._v("用于杀死进程。")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/xargs.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("xargs(1) - Linux manual page - man7.org"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/xargs.1p.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("xargs(1p) - Linux manual page - man7.org"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"http://blog.csdn.net/zhangfn2011/article/details/6776925/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Xargs用法详解 - CSDN"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"http://blog.csdn.net/hittata/article/details/8021500",target:"_blank",rel:"noopener noreferrer"}},[a._v("linux xargs详解 - CSDN"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);