(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{513:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),a("p",[t._v("at 指定命令运行时间。")]),t._v(" "),a("p",[t._v("at 的守护进程 atd 会以后台模式运行，检查系统上的一个特殊目录来获取 at 命令提交的作业。默认情况下，atd 守护进程每 60 秒检查一次目录。有作业时会检查作业运行时间，如果与当前时间匹配，则运行此作业。")]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" atd 如果没有启动可通过"),a("code",[t._v("systemctl restart atd.service")]),t._v("启动。")]),t._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("at "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-V"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-q queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-f file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-mldbv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" TIME\nat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-V"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-q queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-f file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-mldbv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" time_arg\nat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" job "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-m\n\t当指定的任务被完成之后，将给用户发送邮件，即使没有标准输出。\n-I\n\tatq 的别名，列出尚未执行的计划任务。\n-d\n\tatrm 的别名。删除指定的计划任务。\n-v\n\t显示任务将被执行的时间。\n-c\n\t打印任务的内容到标准输出。\n-V\n\t显示版本信息。\n-q <queue>\n\t使用指定的列队。\n-f <file>\n\t从指定文件读入任务而不是从标准输入读入。\n-t <time>\n\t以时间参数的形式提交要运行的任务。\n")])])]),a("p",[t._v("at 允许使用一套相当复杂的指定时间的方法。他能够接受在当天的 hh:mm（小时:分钟）式的时间指定。假如该时间已过去，那么就放在第二天执行。当然也能够使用midnight（深夜），noon（中午），teatime（饮茶时间，一般是下午4点）等比较模糊的词语来指定时间。用户还能够采用 12 小时计时制，即在时间后面加上 AM（上午）或 PM（下午）来说明是上午还是下午。 也能够指定命令执行的具体日期，指定格式为 month day（月 日）或 mm/dd/yy（月/日/年）或 dd.mm.yy（日.月.年）。指定的日期必须跟在指定时间的后面。")]),t._v(" "),a("p",[t._v("上面介绍的都是绝对计时法，其实还能够使用相对计时法，这对于安排不久就要执行的命令是很有好处的。指定格式为：now + count time-units ，now 就是当前时间，time-units是时间单位，这里能够是 minutes（分钟）、hours（小时）、days（天）、weeks（星期）。count 是时间的数量，究竟是几天，还是几小时，等等。 更有一种计时方法就是直接使用today（今天）、tomorrow（明天）来指定完成命令的时间。")]),t._v(" "),a("p",[t._v("TIME（时间格式）可以定义出什么时候要进行 at 这项任务的时间，格式有：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HH:MM\n04:00\n")])])]),a("p",[t._v("在今日的 HH:MM 时刻进行，若该时刻已超过，则明天的 HH:MM 进行此任务。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HH:MM YYYY-MM-DD\n04:00 2009-03-17\n")])])]),a("p",[t._v("强制规定在某年某月的某一天的特殊时刻进行该项任务。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HH:MM[am|pm] [Month] [Date]\n04pm March 17\n")])])]),a("p",[t._v("也是一样，强制在某年某月某日的某时刻进行该项任务")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HH:MM[am|pm] + number [minutes|hours|days|weeks]\nnow + 5 minutes\n04pm + 3 days\n")])])]),a("p",[t._v("就是说，在某个时间点再加几个时间后才进行该项任务。")]),t._v(" "),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),a("p",[t._v("（1）三天后的下午 5 点钟执行命令。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("at 5pm + "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days\nat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /usr/bin/ls\nat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("EOT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\njob "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" at Tue Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":00:00 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("\n")])])]),a("p",[t._v("要执行的命令从标准输入指定，"),a("code",[t._v("<EOT>")]),t._v(" 表示输入结束，可键入 Ctrl + D 来表示输入结束。")]),t._v(" "),a("p",[t._v("（2）明天17点钟，输出时间到指定文件内。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("at "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":00 tomorrow\nat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /root/test/date.log\nat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("EOT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\njob "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" at Sun Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":00:00 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("\n")])])]),a("p",[t._v("（3）查看尚未执行的计划任务。")]),t._v(" "),a("p",[t._v("设定计划任务后，在没有执行之前我们可以查看系统有哪些尚未执行的工作任务。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("at "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\tSun Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":00:00 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" a root\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\tTue Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":00:00 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" a root\n")])])]),a("p",[t._v("或者使用 atq 命令。")]),t._v(" "),a("p",[t._v("（4）删除未执行的任务。")]),t._v(" "),a("p",[t._v("比如删除 2 号任务。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("at "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),a("p",[t._v("或者使用 atrm 命令。")]),t._v(" "),a("p",[t._v("（5）显示已经设置的任务内容。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("at "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# atrun uid=0 gid=0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mail root 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("umask")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Execution directory inaccessible'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&2")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("SHELL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sh}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'marcinDELIMITER1c0816b5'\ndate > /root/test/date.log\n\nmarcinDELIMITER1c0816b5")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://linux.die.net/man/1/at",target:"_blank",rel:"noopener noreferrer"}},[t._v("at(1) - Linux man page - Die.net"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/at.1p.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("at(1p) - Linux manual page - man7.org"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/peida/archive/2013/01/05/2846152.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("每天一个linux命令（49）：at命令- peida - 博客园"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);