(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{436:function(a,e,t){"use strict";t.r(e);var s=t(10),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"_1-命令简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),e("p",[a._v("poweroff 关闭机器电源。")]),a._v(" "),e("p",[a._v("poweroff 命令用来关闭计算机操作系统并且切断系统电源。如果确认系统中已经没有用户存在且所有数据都已保存，需要立即关闭系统，可以使用 poweroff 命令。")]),a._v(" "),e("p",[a._v("poweroff、reboot 和 halt 可分别用于关机、重启或停止机器。这三个命令都有相同的选项。")]),a._v(" "),e("h2",{attrs:{id:"_2-命令格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("poweroff [OPTIONS...]\n")])])]),e("h2",{attrs:{id:"_3-选项说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("-d, --no-wtmp\n\t关闭操作系统时，不将操作写入日志文件“/var/log/wtmp”。\n-f, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--force")]),a._v("\n\t强制关闭操作系统。\n-n, --no-sync\n\t关闭操作系统前不同步硬盘/存储介质。\n-w, --wtmp-only\n\t不真正关闭操作系统，仅在日志文件“/var/log/wtmp”中写入 wtmp 关闭条目。\n-p, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--poweroff")]),a._v("\n\t不管调用 poweroff、reboot 和 "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),a._v(" 中的哪一个，都要切断主机电源。\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n\t显示帮助信息。\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--halt")]),a._v("\n\t不管调用 poweroff, "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v(" 和 "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),a._v(" 中的哪一个，都要停止机器。\n--no-wall\n\t请勿在 poweroff, "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v(" 或 "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),a._v(" 前发送留言。\n")])])]),e("h2",{attrs:{id:"_4-常用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),e("p",[a._v("（1）关闭主机并切断系统电源。")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("poweroff\n")])])]),e("p",[a._v("（2）强制关闭操作系统。")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("poweroff  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("\n")])])]),e("p",[a._v("（3）不真正关闭操作系统, 仅仅写入日志。")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("poweroff "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v("\n")])])]),e("p",[a._v("（4）关闭操作系统前不发送留言。")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("poweroff --no-wall\n")])])]),e("p",[a._v("（5）关闭操作系统前不同步硬盘/存储介质。")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("poweroff "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v("\n")])])]),e("p",[a._v("（6）强制执行 poweroff。")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("poweroff "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("\n")])])]),e("hr"),a._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://man7.org/linux/man-pages/man8/poweroff.8.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("poweroff(8) — Linux manual page - man7.org"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);