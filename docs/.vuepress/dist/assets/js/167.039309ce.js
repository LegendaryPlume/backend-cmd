(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{441:function(a,t,e){"use strict";e.r(t);var n=e(10),s=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),t("p",[a._v("env 命令用于显示系统中已存在的环境变量，以及在定义的环境中执行指令。若没有设置任何选项和参数时，则直接显示当前系统的环境变量。本文介绍的是 GNU 版本的 env，其它版本（如 POSIX 版）的实现可能会有所不同。")]),a._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("env [OPTION]... [-] [NAME=VALUE]... [COMMAND [ARG]...]\n")])])]),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-, -i, --ignore-environment\n\t忽略环境变量\n-0, --null\n\t输出环境变量时以空字符（NUL）替代换行符\n-u, --unset=NAME\n\t从当前环境中删除指定的变量\n--help\n    显示帮助并退出 \n--version\n    输出版本信息并退出 \n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),t("p",[a._v("（1）显示所有的环境变量。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("env\nXDG_SESSION_ID=2216652\nHOSTNAME=TENCENT64.site\nTERM=xterm\nSHELL=/bin/bash\n...\n")])])]),t("p",[a._v("（2）临时更改环境变量，使得程序在新的环境变量下运行。例如，使用 C 程序 a.out 用于获取环境变量 PAHT。实现如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// main.c\n\n#include <stdlib.h>\n#include <stdio.h>\n\nint main(void)\n{\n    char *pathvar;\n    pathvar = getenv("PATH");\n    printf("PATH=%s\\n",pathvar);\n    return 0;\n}\n')])])]),t("p",[a._v("编译生成 a.out，并执行查看环境变量 PATH。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("gcc main.c\na.out\nPATH=/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin\n")])])]),t("p",[a._v("临时改变环境变量 PATH 后执行 a.out。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("env PATH=test ./a.out\nPATH=test\n")])])]),t("p",[a._v("（3）查看 env 版本。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("env --version\nenv (GNU coreutils) 8.22\nCopyright (C) 2013 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nWritten by Richard Mlynarik and David MacKenzie.\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/env.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("env(1) - Linux manual page - man7.org"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);