(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{390:function(a,t,s){"use strict";s.r(t);var e=s(10),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),t("p",[a._v("du（disk usage）命令用于查看指定的目录或文件所占用的磁盘空间。")]),a._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("du [OPTIONS] [FILES]\ndu [OPTIONS] --files0-from=F\n")])])]),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("-a, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--all")]),a._v("\n\t递归显示目录与其包含的所有文件及子目录的大小，默认仅显示目录及其子目录的大小。\n--apparent-size\n\t显示文件或目录自身大小，而不是它们占用的磁盘空间大小。文件或目录占用磁盘空间的大小与它们自身大小有时候并非完全一致，有可能比较大，原因可能是稀疏文件中存在空洞，内部碎片，间接blocks等。大小等同与使用命令"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"wc -c"')]),a._v("或"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ls --blokc-size=1"')]),a._v("查看的字节大小。\n-B, --block-size"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SIZE\n\t定文件大小的统计单位，SIZE 可取如下字符串: KB（1000）、K（1024）、MB（1000*1000）、M（1024*1024）以及G, T, P, E, Z, Y等\n-b, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-bytes")]),a._v("\n\t显示目录或文件大小时，以byte为单位,等同于选项 --apparent-size --block-size"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("。\n-c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--total")]),a._v("\n\t显示占用磁盘空间大小的总和。\n-D, --dereference-args\n\t显示指定符号连接的源文件大小。\n--files0-from"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("F\n\t列出在文件F中指出的文件名称，如果F等于连字符-，则从标准输入读取文件名称。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v("\n\t等同于 -D, --dereference-args。\n-h, --human-readable\n\t以易读的单位显示大小，例如以 K，M，G 等为单位进行显示。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--si")]),a._v("\n\t等同于 -h，但是 K，M，G 等以 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" 而非 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2014")]),a._v(" 为换算单位。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-k")]),a._v("\n\t以 K 为单位显示，等同于--block-size"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1K。\n-l, --count-links\n\t多次计算硬链接文件。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v("\n\t以 M 为单位显示，等同于--block-size"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1M。\n-L, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dereference")]),a._v("\n\t显示符号链接的源文件大小。\n-P, --no-dereference\n\t默认选项，不显示符号链接源文件大小。\n-0, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--null")]),a._v("\n\t以 NULL 字符取代输出的换行符。\n-S, --separate-dirs\n\t不显示子目录大小（不太明白，为何使用时仍然显示子目录大小）。\n-s, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--summarize")]),a._v("\n\t只显示给定的文件或目录的总大小。\n-x, --one-file-system\n\t以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。\n-X, --exclude-from"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("FILE\n\t跳过符合指定的文件。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--exclude")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PATTERN\n\t跳过符合指定模式的文件或目录。\n--max-depth"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("N\n\t指定递归显示的最大目录深度，--max-depth"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" 等同于 --summarize。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--time")]),a._v("\n\t显示文件或目录最后修改时间。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("WORD\n\t显示指定类型的时间，而非默认的最后修改时间。WORD 可取值为 atime、access、use（访问时间），或者ctime、status（状态改变时间）。\n--time-style"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("STYLE\n\t使用指定的时间格式显示时间，STYLE 可取值为 full-iso, long-iso, iso, +FORMAT，其中 FORMAT 解析方式等同于 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" 命令。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n\t显示帮助信息。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("\n\t显示版本信息。\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),t("p",[a._v("（1）显示指定文件或目录占用磁盘空间大小。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("du -sh [file or directory] \n")])])]),t("p",[a._v("（2）显示指定目录及其所有子目录的大小。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("du -h [directory]\n")])])]),t("h2",{attrs:{id:"_5-注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-注意事项"}},[a._v("#")]),a._v(" 5.注意事项")]),a._v(" "),t("p",[a._v("（1）文件大小与占用磁盘空间大小的区别。")]),a._v(" "),t("p",[a._v("文件大小（又名 apparent size）是文件自身实际大小，与占用磁盘空间大小（又名 occupied space size）有本质的区别。举个例子，创建一个 1 字节的文件，使用 du 命令显示的为 4KB，使用 ls 命令显示为 1 字节。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 1B.txt\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" 1B.txt\n-rw-rw-r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" dablelv dablelv "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" Apr  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(":14 1B.txt\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" 1B.txt\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(".0K\t1B.txt\n")])])]),t("p",[a._v("我们先创建一个文件1B.txt，大小是一个字节，ls显示出的size就是1Byte，而1B.txt这个文件在硬盘上会占用1个block，因为Linux文件系统存储最小单位为block，不足1个block大小的文件也要占用1个block大小。这里的一个block等于4K。")]),a._v(" "),t("p",[a._v("（2）稀疏文件（sparse file）。")]),a._v(" "),t("p",[a._v("稀疏文件就是在文件中留有很多空余空间，称为空洞（hole），留备将来插入数据使用，这些空洞被填充为NULL字符，特点是文件系统并不会为空余空间分配磁盘空间。")]),a._v(" "),t("p",[a._v("使用如下代码创建稀疏文件：")]),a._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("<sys/types.h>")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("<sys/stat.h>")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("<fcntl.h>")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("<unistd.h>")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" argc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" fd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"sparse.file"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" O_RDWR"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("O_CREAT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("lseek")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10240")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SEEK_CUR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("write")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("编译生成后执行，创建稀疏文件sparse.file，偏移10240字节后写入一个空字符，使得文件sparse.file内容全为空字符。使用ls命令查看文件大小为10241B，这是文件的大小。使用du命令查看文件占用磁盘空间大小时，发现稀疏文件空洞部分并不占用磁盘空间，被文件系统压缩存储。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ ll sparse.file\n-rw---x--- 1 dablelv dablelv 10241 Apr  4 20:16 sparse.file\n[dablelv@TENCENT64 ~]$ du -h sparse.file\n4.0K\tsparse.file\n")])])]),t("h2",{attrs:{id:"_6-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-小结"}},[a._v("#")]),a._v(" 6.小结")]),a._v(" "),t("p",[a._v("文件大小与实际占用磁盘空间大小是两个不同的概念，所以使用 du 和 ls 命令来查看同一个文件得到的大小是不一样的，查看文件大小时需要注意区分。")]),a._v(" "),t("p",[t("strong",[a._v("注意")]),a._v("，稀疏文件是指存在空洞的文件，其空洞部分是不占用磁盘空间的，但是使用 ls 查看其大小时，包含空洞部分。")]),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/du.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("du(1) - Linux manual page - man7.org"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/loryliu/article/details/25337409",target:"_blank",rel:"noopener noreferrer"}},[a._v("为什么用ls和du显示出来的文件大小有差别？"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);