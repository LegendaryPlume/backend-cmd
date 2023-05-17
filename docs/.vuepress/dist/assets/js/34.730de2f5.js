(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{310:function(t,e,n){"use strict";n.r(e);var a=n(10),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-命令简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),e("p",[t._v("size 用于查看目标文件、库或可执行文件中各段及其总和的大小，是 GNU 二进制工具集 "),e("a",{attrs:{href:"https://www.gnu.org/software/binutils/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GNU Binutils"),e("OutboundLink")],1),t._v(" 的一员。")]),t._v(" "),e("h2",{attrs:{id:"_2-命令格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("size [-A|-B|--format=compatibility]\n    [--help]\n    [-d|-o|-x|--radix=number]\n    [--common]\n    [-t|--totals]\n    [--target=bfdname] [-V|--version]\n    [OBJFILE...]\n")])])]),e("p",[t._v("其中 OBJFILE... 为待检测的文件列表，若未给定，则默认为 a.out。")]),t._v(" "),e("h2",{attrs:{id:"_3-选项说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("-A\n-B\n--format=compatibility\n\t控制输出格式。-A 或 --format=sysv 表示使用 System V size 风格，-B 或 --format=berkeley 表示使用 Berkeley size 风格。默认使用 Berkeley size 风格的输出。\n\t\n\t下面是 Berkeley 风格示例：\n\t$ size --format=Berkeley ranlib size\n\ttext    data    bss     dec     hex     filename\n\t294880  81920   11592   388392  5ed28   ranlib\n\t294880  81920   11888   388688  5ee50   size\n\n\t下面是接近 System V 风格示例：\n\t$ size --format=SysV ranlib size\n\tranlib  :\n\tsection         size         addr\n\t.text         294880         8192\n\t.data          81920       303104\n\t.bss           11592       385024\n\tTotal         388392\n\n\tsize  :\n\tsection         size         addr\n\t.text         294880         8192\n\t.data          81920       303104\n\t.bss           11888       385024\n\tTotal         388688\n\n--help\n\t显示帮助信息\n\n-d\n-o\n-x\n--radix=number\n\t控制大小输出的进制 -d 或 --radix=10 表示 10 进制，-o 或 --radix=8 表示八进制，-x 或 --radix=16 表示 16 进制\n\n--common\n\t打印每个文件的 common symbols 大小\n\n-t\n--totals\n\t列出所有文件的总大小。注意，只能使用 Berkeley 风格输出\n\n--target=bfdname\n\t指明目标文件的格式。该选项没有必要指定，因为 size 可自动推导\n\t\n-V\n--version\n\t显示版本\n\t\n@file\n\t从指定的文件 file 读取命令行选项。文件中的选项由空白符（空格，TAB和回车）分隔。选项中可以包含空白字符，方法是将整个选项用单引号或双引号括起来。任何字符（包括反斜杠）可以通过添加前缀反斜杠来包含。文件本身可能包含额外的 @file 选项，该选项将以递归方式处理\n")])])]),e("h2",{attrs:{id:"_4-常用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),e("p",[t._v("（1）查看指定程序各个段的大小。以 size 为例。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("size /bin/size\ntext\t   data\t    bss\t    dec\t    hex\tfilename\n22565\t   1428\t   1360\t  25353\t   6309\t/bin/size\n")])])]),e("p",[t._v("（2）查看静态库中的各个目标文件的段大小。以 libc.a 为例。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("size /usr/lib64/libc.a\n\ntext\t   data\t    bss\t    dec\t    hex\tfilename\n233\t      4\t      0\t    237\t     ed\tinit-first.o (ex /usr/lib64/libc.a)\n1667\t      0\t      0\t   1667\t    683\tlibc-start.o (ex /usr/lib64/libc.a)\n64\t      0\t      0\t     64\t     40\tsysdep.o (ex /usr/lib64/libc.a)\n953\t      0\t      0\t    953\t    3b9\tversion.o (ex /usr/lib64/libc.a)\n395\t      0\t      0\t    395\t    18b\tcheck_fds.o (ex /usr/lib64/libc.a)\n852\t      8\t   2192\t   3052\t    bec\tlibc-tls.o (ex /usr/lib64/libc.a)\n307\t      0\t      0\t    307\t    133\telf-init.o (ex /usr/lib64/libc.a)\n8\t      0\t      0\t      8\t      8\tdso_handle.o (ex /usr/lib64/libc.a)\n0\t      0\t      4\t      4\t      4\terrno.o (ex /usr/lib64/libc.a)\n...\n")])])]),e("hr"),t._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.gnu.org/software/binutils/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GNU Binutils"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/size.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("size(1) - Linux manual page - man7.org"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://linux.cn/article-9504-1.html?pr",target:"_blank",rel:"noopener noreferrer"}},[t._v("六个例子带你入门 size 命令"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);