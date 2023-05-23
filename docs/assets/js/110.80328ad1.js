(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{441:function(n,t,s){"use strict";s.r(t);var a=s(12),e=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[n._v("#")]),n._v(" 1.命令简介")]),n._v(" "),t("p",[n._v("sort 以行为单位对文本文件的内容进行排序，将结果显示在标准输出。")]),n._v(" "),t("p",[n._v("比较原则是从行首字符向后，依次按 ASCII 码值进行比较，最后按升序输出。如果 file 参数指定多个文件，那么 sort 命令将这些文件纵向连接起来，当作一个文件进行排序。")]),n._v(" "),t("p",[n._v("不加任何选项时，将对整行从第一个字符开始依次向后直到行尾按照 ASCII 码值做升序排序。")]),n._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[n._v("#")]),n._v(" 2.命令格式")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("sort [OPTION]... [FILE]...\nsort [OPTION]... --files0-from=F\n")])])]),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[n._v("#")]),n._v(" 3.选项说明")]),n._v(" "),t("p",[n._v("注意，长选项的强制性参数对于短选项也是强制的。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("-b, --ignore-leading-blanks\n\t忽略每行前面的空格字符\n-c, --check, --check=diagnose-first\n\t只检查文件是否已排序，不进行排序\n-C, --check=quiet, --check=silent\n\t类似于 -c，但不报告第一个乱序的行\n-d, --dictionary-order\n\t按照字典序，只考虑字母、数字及空格字符，忽略其他字符\n--files0-from=F\n\t从文件 F 中以 NUL 字符结尾的字符串作为输入文件名；如果 F 是 -，则从标准输入中读取文件名\n-f, --ignore-case\n\t排序时，将小写字母视为大写字母\n-i, --ignore-nonprinting\n\t排序时，只考虑可打印字符，忽略不可打印字符\n-m, --merge\n\t合并多个已排序的文件\n-n, --numeric-sort\n\t按数值大小排序\n-o, --output=FILE\n\t将排序结果输出到指定文件\n-r,--reverse\n\t逆向输出排序结果（降序排序）\n-t, --field-separator=SEP\n\t指定排序时使用的分隔字符，sort命令默认字段分隔符为空格和Tab\n-u, --unique\n\t相同的数据中，仅输出一行\n-k,--key=POS1[,POS2]\n\t以第 POS1 栏到 POS2 栏排序，默认到最后一栏\n--help\n\t显示帮助信息并退出\n--version\n\t显示版本信息并退出\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[n._v("#")]),n._v(" 4.常用示例")]),n._v(" "),t("p",[n._v("（1）对 /etc/passwd 进行排序。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("cat /etc/passwd | sort\nadm:x:3:4:adm:/var/adm:/sbin/nologin\napache:x:48:48:Apache:/var/www:/sbin/nologin\nbin:x:1:1:bin:/bin:/sbin/nologin\ndaemon:x:2:2:daemon:/sbin:/sbin/nologin\n")])])]),t("p",[n._v("（2）/etc/passwd 内容以冒号:来分隔，以第三栏至行末尾栏来排序。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("cat /etc/passwd | sort -t ':' -k 3\nroot:x:0:0:root:/root:/bin/bash\nuucp:x:10:14:uucp:/var/spool/uucp:/sbin/nologin\noperator:x:11:0:operator:/root:/sbin/nologin\nbin:x:1:1:bin:/bin:/sbin/nologin\ngames:x:12:100:games:/usr/games:/sbin/nologin\n")])])]),t("p",[n._v("（3）如果对 /etc/passwd，以第六个域的第 2 个字符到第 4 个字符进行升序排序，再基于第一个域进行反向排序。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("cat /etc/passwd | sort -t ':' -k 6.2,6.4 -k 1,1r\nsync:x:4:65534:sync:/bin:/bin/sync\nproxy:x:13:13:proxy:/bin:/bin/sh\nbin:x:2:2:bin:/bin:/bin/sh\nsys:x:3:3:sys:/dev:/bin/sh\nbin:x:3:3:sys:/dev:/bin/sh\n")])])]),t("p",[n._v("可以看出，六个域的第 2 个字符到第 4 个字符是升序排序。六个域的第 2 个字符到第 4 个字符如果相同则分为一组，组内再按照第一个域进行降序排序。注意，-r 需要与第二个 -k 的 <POS1,POS2> 连写，否则对前面两个 -k 均有效。")]),n._v(" "),t("hr"),n._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[n._v("#")]),n._v(" 参考文献")]),n._v(" "),t("p",[t("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/sort.1.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("sort(1) - Linux manual page - man7.org"),t("OutboundLink")],1)]),n._v(" "),t("p",[t("a",{attrs:{href:"http://man.linuxde.net/sort",target:"_blank",rel:"noopener noreferrer"}},[n._v("Linux命令大全——sort命令"),t("OutboundLink")],1)]),n._v(" "),t("Vssue",{attrs:{title:"sort"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);