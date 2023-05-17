(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{407:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),s("p",[t._v("lastb 命令用于显示用户错误的登录列表。")]),t._v(" "),s("p",[t._v("lastb 可以发现系统的登录异常。单独执行 lastb 命令，它会读取位于 /var/log 目录下名为 btmp 的文件，并把该文件内容记录的登入失败的用户名单，全部显示出来。")]),t._v(" "),s("p",[t._v("实际上 lastb 是 last 的一个软链，所以 lastb 功能均可由 last 实现。")]),t._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("lastb "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-adFiowx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-n <num>, -<num> \n\t显示最近登录信息的行数。\n-t <YYYYMMDDHHMMSS>\n\t根据登录的时间显示指定用户的登录状态。\n-R\n\t禁止显示主机名字段。\n-a\n\t在最后一列显示主机名称。\n-d\n\t对于非本地登录的用户，将显示的 IP 地址转换为主机名。\n-i\n\t类似于 “-d” 的选项，将显示的主机名称转换为 IP 地址。\n-o\n\t读取旧的类型的 wtmp 文件。\n-x\n\t显示系统登录等级。\n--help\n\t显示帮助信息。\n--version\n\t显示版本显示。\n")])])]),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),s("p",[t._v("（1）列出登入失败的用户记录。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("lastb "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-5")]),t._v("\nadmin    ssh:notty    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":29 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":29  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \nadmin    ssh:notty    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":29 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":29  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \noperator ssh:notty    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":24 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":24  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),t._v("     ssh:notty    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":20 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":20  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),t._v("     ssh:notty    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":20 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":20  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbtmp begins Mon Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" 03:43:01 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("\n")])])]),s("p",[t._v("lastb 指令，它会读取位于 /var/log/btmp 的文件，并把该文件内容记录的登入系统失败的用户名单，全部显示出来。btmp 是二进制文件，所以用 last -f /var/log/btmp 结果一样。")]),t._v(" "),s("p",[t._v("（2）使用 -a 选项把来源 IP 显示在最后列。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("lastb "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a5")]),t._v("\nadmin    ssh:notty    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":33 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":33  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113\nadmin    ssh:notty    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":33 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":33  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113\nadmin    ssh:notty    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":29 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":29  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113\nadmin    ssh:notty    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":29 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":29  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113\noperator ssh:notty    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":24 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":24  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113\n\nbtmp begins Mon Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" 03:43:01 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("\n")])])]),s("p",[t._v("（3）不显示主机名字段。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("lastb "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-R")]),t._v("\njeremias ssh:notty    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \njeremias ssh:notty    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \nroot     ssh:notty    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \nroot     ssh:notty    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \nmatthew  ssh:notty    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":39 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":39  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n\nbtmp begins Mon Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" 03:43:01 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("\n")])])]),s("p",[t._v("（4）显示指定用户登录失败记录。")]),t._v(" "),s("p",[t._v("比如显示 root 用户登录失败记录。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("lastb "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" root\nroot     ssh:notty    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("147.182")]),t._v(".179.237  Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":44 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":44  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \nroot     ssh:notty    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":42 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":42  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \nroot     ssh:notty    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("61.177")]),t._v(".172.145   Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \nroot     ssh:notty    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("61.177")]),t._v(".172.145   Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":40  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \nroot     ssh:notty    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("92.255")]),t._v(".85.113    Thu Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":38 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":38  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n\nbtmp begins Mon Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" 03:43:01 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/lastb.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("lastb(1) — Linux manual page - man7.org"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);