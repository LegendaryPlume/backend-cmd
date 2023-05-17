(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{531:function(e,n,r){"use strict";r.r(n);var t=r(10),s=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"_1-命令简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[e._v("#")]),e._v(" 1.命令简介")]),e._v(" "),n("p",[e._v("screen 是 GNU 开发的终端会话管理工具，可以新建和管理多个终端会话，并提供切换、分离、挂载等相应的功能。")]),e._v(" "),n("p",[e._v("每个终端会话可以创建 1~10 个窗口，其重要的特点就是终端断开连接后，screen 创建的终端会话中的任务是保存在后台运行的，不会因为终端窗口关闭或者断开连接而终止执行。")]),e._v(" "),n("p",[e._v("详细说明参见"),n("a",{attrs:{href:"http://www.gnu.org/software/screen/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNU Screen官方站点"),n("OutboundLink")],1),e._v("。")]),e._v(" "),n("h2",{attrs:{id:"_2-命令格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[e._v("#")]),e._v(" 2.命令格式")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("screen [OPTIONS] [ CMD [ ARGS ] ]\nscreen -r [[PID.]TTY[.HOST]]\nscreen -r SESSIONOWNER/[[PID.]TTY[.HOST]]\n")])])]),n("h2",{attrs:{id:"_3-选项说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[e._v("#")]),e._v(" 3.选项说明")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("-A\n\t将所有窗口都调整为目前终端机的大小\n-d, -D [PID.TTY.HOST]\n\t分离指定的 screen 会话\n-h NUM\n\t将历史记录回滚缓冲区指定为 NUM 行\n-m\n\t即使目前处于 screen 会话，仍强制建立新的 screen 会话\n-r [PID.TTY.HOST]\n-r SESSIONOWNER/[PID.TTY.HOST]\n\t恢复离线的 screen 会话\n-R\n\t先试图恢复离线的会话，若找不到离线的会话，再建立新的 screen 会话\n-s PROGRAM\n\t指定建立新窗口时所要执行的 Shell，用以取代环境变量 SHELL 表示的 Shell\n-S SESSIONNAME\n\t创建一个指定名称的新 session\n-v\n\t显示版本信息\n-x\n\t恢复之前离线的 screen 会话\n-ls, --list\n\t显示目前所有的 screen 会话\n-wipe [MATCH]\n\t检查目前所有的 screen 会话，并删除已经无法使用的 screen 会话\n")])])]),n("h2",{attrs:{id:"_4-常用示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[e._v("#")]),e._v(" 4.常用示例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("screen -S yourname: 新建一个叫 yourname 的 session\nscreen -ls: 列出当前所有的screen session，注意显示的screen会话的命名格式是pid.name，其中pid指的是screen的进程号，name就是screen会话的名称\nscreen -r yourname: 回到yourname这个session；\nscreen -d yourname: detach某个session；\nscreen -d: detach当前session；\nscreen -d -r yourname: 分离已经连接的 session，重新回到 yourname\nexit：关闭当前窗口，并且切换到下一个窗口（当退出最后一个窗口时，该screen会话自动终止，并且退回到原始 Shell 状态）\n")])])]),n("p",[e._v("进入一个 screen 会话中，才可以切换窗口，在每个 screen session 下，所有快捷键都以 Ctrl+a 开始。常用快捷键如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Ctrl+a+?：显示所有键绑定信息\nCtrl+a+c：创建一个新的运行shell窗口并切换到该窗口\nCtrl+a+n：切换到下一个window\nCtrl+a+p：切换到前一个window\nCtrl+a+0..9：切换到第 0..9 个window\nCtrl+a [Space]：由视窗0循序切换到视窗9 \nCtrl+a+d：分离当前screen会话，即退出当前screen会话。将目前的screen session (可能含有多个 windows) 丢到后台执行，并会回到还没进 screen 时的状态，此时在 screen session 里，每个 window 内运行的 process (无论是前台/后台)都在继续执行，即使 logout 也不影响。 Ctrl+a+z -> 把当前session放到后台执行，用 shell 的 fg 命令则可回去。\nCtrl+a Ctrl+a：在两个最近使用的window间切换。\nCtrl+a+x：锁住当前的window，需用用户密码解锁。\nCtrl+a+w：显示所有窗口列表。\nCtrl+a+t：time，显示当前时间和系统的平均负载（Load Average，是一段时间内系统的平均负载，这个一段时间一般取1分钟、5分钟、15分钟）。\nCtrl+a+k：kill window，强行关闭当前的window\nCtrl+a+[：进入copy mode，在copy mode下可以回滚、搜索、复制就像使用vi一样，常用快捷键有： \n\tCtrl+b：Backward，PageUp\n\tCtrl+f：Forward，PageDown \n\tH：High，将光标移至左上角\n\tL：Low，将光标移至左下角\n\t0：移到行首\n\t$：行末\n\tw：forward one word，以字为单位往前移\n\tb：backward one word，以字为单位往后移\n\tSpace：第一次按为标记区起点，第二次按为终点\n\tEsc 结束copy mode\nCtrl+a+]：paste，把刚刚在 copy mode 选定的内容贴上。\n")])])]),n("hr"),e._v(" "),n("h2",{attrs:{id:"参考文献"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/screen.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("screen(1) - Linux manual page - man7.org"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"http://www.gnu.org/software/screen/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNU screen"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"http://man.linuxde.net/screen",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux命令大全.screen命令"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/kaituorensheng/p/3602805.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("系统load average"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=s.exports}}]);