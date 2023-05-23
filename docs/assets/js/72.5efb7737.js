(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{400:function(t,a,e){"use strict";e.r(a);var s=e(12),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),a("p",[t._v("realpath 用于获取指定目录或文件的绝对路径。")]),t._v(" "),a("p",[t._v("编写 Shell 脚本中，通常会使用相对路径来指明文件，但有时候，我们需要用到绝对路径，此时可以使用 realpath 来获取。")]),t._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("realpath [OPTIONS] FILES\n")])])]),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-e, --canonicalize-existing\n\t文件 FILE 的所有组成部件必须都存在\n-m, --canonicalize-missing\n\t文件 FILE 的组成部件可以不存在\n-L, --logical\n\t在软链接之前解析父目录 ..\n-P, --physical\n\t解析软链接，默认动作\n-q, --quiet\n\t静默模式输出，禁止显示大多数错误消息\n--relative-to=DIR\n\t相对于目录 DIR 的路径\n--relative-base=DIR\n\t如果文件在基目录 DIR下，打印结果会省去基目录，否则打印绝对路径\n-s, --strip, --no-symlinks\n\t不扩展软链接\n-z, --zero\n\t不分隔输出，即所有的输出均在一行而不是单独每行\n--help\n\t显示帮助信息\n--version\n\t显示版本信息\n")])])]),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),a("p",[t._v("（1）打印指定文件的绝对路径。执行命令时当前工作目录为 /data/test/src。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("realpath ./hello.tgz\n/data/test/src/hello.tgz\n")])])]),a("p",[t._v("（2）显示软链接指向的目标文件的绝对路径。执行命令时当前工作目录为 /data/test。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ll\ntotal 4\n-rw-r--r-- 1 root root    0 Feb  1 07:26 foo\nlrwxrwxrwx 1 root root   13 Feb  1 07:05 hello.sln -> src/hello.tgz\ndrwxr-xr-x 2 root root 4096 Feb  1 07:19 src\n\nrealpath ./hello.sln\n/data/test/src/hello.tgz\n")])])]),a("p",[t._v("可见，即便使用相对路径创建的软链接，realpath 也能顺利解析。")]),t._v(" "),a("p",[t._v("（3）打印某个文件相对于另外一个目录的路径。执行命令时当前工作目录为 /data/test。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("realpath --relative-to=./src ./foo\n../foo\n")])])]),a("p",[t._v("（4）打印某个文件相对于基目录的路径，如果文件在基目录下，则会省去基目录。执行命令时当前工作目录为 /data/test。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("realpath --relative-base=/data/test ./foo\nfoo\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/realpath.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("realpath(1) - Linux manual page - man7.org"),a("OutboundLink")],1)]),t._v(" "),a("Vssue",{attrs:{title:"realpath"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);