(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{409:function(e,a,s){"use strict";s.r(a);var t=s(10),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[e._v("#")]),e._v(" 1.命令简介")]),e._v(" "),a("p",[e._v("lastlog 用于显示系统中所有用户最近一次登录信息。")]),e._v(" "),a("p",[e._v("lastlog 命令格式化输出上次登录日志 /var/log/lastlog 的内容。它根据 UID 排序显示登录名、终端（tty）和上次登录时间。如果一个用户从未登录过，lastlog 显示 "),a("code",[e._v("**Never logged in**")]),e._v("。")]),e._v(" "),a("p",[e._v("注意需要以 root 身份运行该命令。")]),e._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[e._v("#")]),e._v(" 2.命令格式")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("lastlog "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("options"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[e._v("无选项单独执行 lastlog 将打印 lastlog 日志中的条目，并按其在 /etc/passwd 中的顺序进行排序。")]),e._v(" "),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[e._v("#")]),e._v(" 3.选项说明")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("-b, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--before")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("DAYS"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t仅打印早于 DAYS 的最近登录记录。\n-C, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--clear")]),e._v("\n\t清除用户的 lastlog 记录（仅与-u一起使用）。\n-h, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--help")]),e._v("\n\t显示此帮助信息并退出。\n-R, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--root")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CHROOT_DIR"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t在 CHROOT_DIR 目录中应用更改并使用 CHROOT_DIR 目录中的配置文件。\n-S, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--set")]),e._v("\n\t将 lastlog 记录设置为当前时间（仅与 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-u")]),e._v(" 一起使用）。\n-t, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--time")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("DAYS"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t仅打印晚于 DAYS 的最近登录记录。\n-u, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--user")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("LOGIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t打印 LOGIN 用户的最近登录记录。\n")])])]),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[e._v("#")]),e._v(" 4.常用示例")]),e._v(" "),a("p",[e._v("（1） 显示系统中所有用户最近一次登录信息。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("Username         Port     From             Latest\nroot             pts/4    "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("223.73")]),e._v(".1.91      Thu Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("27")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":49:23 +0800 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),e._v("\nbin                                        **Never logged in**\ndaemon                                     **Never logged in**\nadm                                        **Never logged in**\nlp                                         **Never logged in**\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sync")]),e._v("                                       **Never logged in**\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("shutdown")]),e._v("                                   **Never logged in**\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("halt")]),e._v("                                       **Never logged in**\nmail                                       **Never logged in**\noperator                                   **Never logged in**\ngames                                      **Never logged in**\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ftp")]),e._v("                                        **Never logged in**\nnobody                                     **Never logged in**\nsystemd-network                            **Never logged in**\ndbus                                       **Never logged in**\npolkitd                                    **Never logged in**\nlibstoragemgmt                             **Never logged in**\nrpc                                        **Never logged in**\nntp                                        **Never logged in**\nabrt                                       **Never logged in**\nsshd                                       **Never logged in**\npostfix                                    **Never logged in**\nchrony                                     **Never logged in**\ntcpdump                                    **Never logged in**\nsyslog                                     **Never logged in**\nwww                                        **Never logged in**\nlighthouse                                 **Never logged in**\ntss                                        **Never logged in**\n")])])]),a("p",[e._v("（2）显示指定用户的最近登录信息。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("lastlog "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-u")]),e._v(" root\nUsername         Port     From             Latest\nroot             pts/4    "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("223.73")]),e._v(".1.91      Thu Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("27")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":49:23 +0800 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),e._v("\n")])])]),a("p",[e._v("（3）显示指定天数前的登录信息。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("lastlog "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("\nUsername         Port     From             Latest\nbin                                        **Never logged in**\ndaemon                                     **Never logged in**\nadm                                        **Never logged in**\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),a("p",[e._v("（4）显示指定天数以来的登录信息。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("lastlog "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("\nUsername         Port     From             Latest\nroot             pts/4    "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("223.73")]),e._v(".1.91      Thu Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("27")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":49:23 +0800 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),e._v("\n")])])]),a("p",[e._v("（5）清除指定用户的登录信息。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("lastlog "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-C")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-u")]),e._v(" root\n\nlastlog "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-u")]),e._v(" root\nUsername         Port     From             Latest\nroot                                       **Never logged in**\n")])])]),a("hr"),e._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man8/lastlog.8.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("lastlog(8) - Linux manual page - man7.org"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);