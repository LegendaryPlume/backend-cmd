(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{524:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),s("p",[t._v("ldd 命令用于打印程序或共享库文件所依赖的共享库列表。")]),t._v(" "),s("p",[t._v("注意，ldd 本身不是一个二进制程序，而是一个 Shell 脚本，使用文本编辑器 vim 可以查看其内容，具体目录可以使用 which 命令查看。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" ldd\n/usr/bin/ldd\n")])])]),s("p",[t._v("我们知道，Linux 的动态库装载器 ld-linux.so 模块会先于 executable 模块工作，并获得控制权，ld-linux.so 会通过系统环境变量的设置，选择只显示可执行模块的dependency，而不运行可执行模块。相关环境变量有：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("LD_TRACE_LOADED_OBJECTS\nLD_WARN\nLD_BIND_NOW\nLD_LIBRARY_VERSION\nLD_VERBOSE\nLD_DEBUG\n")])])]),s("p",[t._v("ldd 默认开启的环境变量是：LD_TRACE_LOADED_OBJECTS=1。也就是说，LD_TRACE_LOADED_OBJECTS为必要环境变量，其他环境变量的设置是可选的。其他的变量的设置与ldd命令选项的对应关系如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('-d, --data-relocs -> LD_WARN=yes\n-r, --function-relocs ->LD_WARN和LD_BIND_NOW=yes\n-u, --unused -> LD_DEBUG="unused"\n-v, --verbose -> LD_VERBOSE=yes\n')])])]),s("p",[t._v("比如设置LD_TRACE_LOADED_OBJECTS环境变量不为空时，任何可执行程序在运行时，都会只显示依赖的动态库，程序并不真正地执行。测试如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export LD_TRACE_LOADED_OBJECTS=1\nls\n\tlinux-vdso.so.1 =>  (0x00007ffd1d3cf000)\n\t/$LIB/libonion.so => /lib64/libonion.so (0x00007fbbe7162000)\n\tlibselinux.so.1 => /lib64/libselinux.so.1 (0x00007fbbe6e2e000)\n\tlibcap.so.2 => /lib64/libcap.so.2 (0x00007fbbe6c29000)\n\tlibacl.so.1 => /lib64/libacl.so.1 (0x00007fbbe6a20000)\n\tlibc.so.6 => /lib64/libc.so.6 (0x00007fbbe665e000)\n\tlibdl.so.2 => /lib64/libdl.so.2 (0x00007fbbe645a000)\n\tlibpthread.so.0 => /lib64/libpthread.so.0 (0x00007fbbe623e000)\n\tlibpcre.so.1 => /lib64/libpcre.so.1 (0x00007fbbe5fdd000)\n\tliblzma.so.5 => /lib64/liblzma.so.5 (0x00007fbbe5db8000)\n\t/lib64/ld-linux-x86-64.so.2 (0x00007fbbe7053000)\n\tlibattr.so.1 => /lib64/libattr.so.1 (0x00007fbbe5bb3000)\n")])])]),s("p",[t._v("撤销该环境变量，ls 即可恢复正常使用：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("unset LD_TRACE_LOADED_OBJECTS\nls\nChangelog  Changelog.ln  dablelv  txt.txt\n")])])]),s("p",[t._v("由此可见，ldd 命令其实是通过设置 ld-linux.so 依赖的环境变量来影响 ld-linux.so的工作方式，使得可执行模块加载时显示其依赖的动态库。实际上可以直接执行 ld-linux.so 模块，如"),s("code",[t._v("/lib/ld-linux.so.2 --list program")]),t._v("，来达到命令"),s("code",[t._v("ldd program")]),t._v("的效果。")]),t._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("ldd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" FILES\n")])])]),s("p",[t._v("其中 OPTIONS 为可选的命令选项，FILES 为必填的程序或共享库文件列表。")]),t._v(" "),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("--version：打印ldd版本号\n-v, --verbose：详细信息模式，打印所有相关信息\n-u, --unused：打印未使用的直接依赖\n-d, --data-relocs：执行重定位和报告任何丢失的对象\n-r, --function-relocs：执行数据对象和函数的重定位，并且报告任何丢失的对象和函数。（只对ELF格式文件有效）\n--help：显示帮助信息\n")])])]),s("h2",{attrs:{id:"_4-示例说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-示例说明"}},[t._v("#")]),t._v(" 4.示例说明")]),t._v(" "),s("p",[t._v("（1）显示可执行文件依赖的动态链接库。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("ldd /usr/bin/ls\n\tlinux-vdso.so.1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007ffd90514000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LIB")]),t._v("/libonion.so "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /lib64/libonion.so "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007f294ade8000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlibselinux.so.1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /lib64/libselinux.so.1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007f294aab4000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlibcap.so.2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /lib64/libcap.so.2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007f294a8af000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlibacl.so.1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /lib64/libacl.so.1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007f294a6a6000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlibc.so.6 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /lib64/libc.so.6 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007f294a2e4000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlibdl.so.2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /lib64/libdl.so.2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007f294a0e0000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlibpthread.so.0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /lib64/libpthread.so.0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007f2949ec4000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlibpcre.so.1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /lib64/libpcre.so.1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007f2949c63000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tliblzma.so.5 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /lib64/liblzma.so.5 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007f2949a3e000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t/lib64/ld-linux-x86-64.so.2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007f294acd9000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlibattr.so.1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /lib64/libattr.so.1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x00007f2949839000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/ldd.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ldd(1) - Linux manual page - man7.org"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://man.linuxde.net/ldd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux命令大全.ldd命令"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/wanghetao/p/3779611.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客园.ldd命令"),s("OutboundLink")],1)]),t._v(" "),s("Vssue",{attrs:{title:"ldd"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);