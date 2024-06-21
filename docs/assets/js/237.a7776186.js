(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{571:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[s._v("#")]),s._v(" 1.命令简介")]),s._v(" "),t("p",[s._v("iostat（IO statistics）命令被用于监视 CPU 和输入输出设备的使用情况。")]),s._v(" "),t("p",[s._v("iostat 有一个弱点，它不能对某个进程进行深入分析，仅对系统的整体情况进行分析。")]),s._v(" "),t("p",[s._v("iostat 属于 "),t("a",{attrs:{href:"http://sebastien.godard.pagesperso-orange.fr/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("sysstat"),t("OutboundLink")],1),s._v(" 软件包，RedHat 系的 Linux 可以用 "),t("code",[s._v("yum install sysstat")]),s._v(" 直接安装。")]),s._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[s._v("#")]),s._v(" 2.命令格式")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("iostat "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" DEVICE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ALL "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" INTERVAL "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" COUNT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("INTERVAL 表示 iostat 报告的时间间隔（单位秒），COUNT 表示报告的总次数。")]),s._v(" "),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[s._v("#")]),s._v(" 3.选项说明")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("-c\n\t显示 CPU 使用情况\n-d\n\t显示磁盘使用情况\n--dec={ 0 | 1 | 2 }\n\t指定要使用的小数位数，默认为 2\n-g GROUP_NAME { DEVICE [...] | ALL }\n\t显示一组设备的统计信息\n-H\n\t此选项必须与选项 -g 一起使用，指示只显示组的全局统计信息，而不显示组中单个设备的统计信息\n-h\n\t以可读格式打印大小\n-j { ID | LABEL | PATH | UUID | ... } [ DEVICE [...] | ALL ]\n\t显示永久设备名。选项 ID、LABEL 等用于指定持久名称的类型\n-k\n\t以 KB 为单位显示\n-m \n\t以 MB 为单位显示\n-N\n\t显示磁盘阵列（LVM） 信息\n-n\n\t显示NFS 使用情况\n-p [ { DEVICE [,...] | ALL } ]\n\t显示磁盘和分区的情况\n-t\n\t打印时间戳。时间戳格式可能取决于 S_TIME_FORMAT 环境变量\n-V\n\t显示版本信息并退出\n-x\n\t显示详细信息\n-y\n\t如果在给定的时间间隔内显示多个记录，则忽略自系统启动以来的第一个统计信息\n-z\n\t省略在采样期间没有活动的任何设备的输出。\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[s._v("#")]),s._v(" 4.常用示例")]),s._v(" "),t("p",[s._v("（1）显示所有设备负载情况。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("iostat\nLinux "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".107-1-tlinux2_kvm_guest-0049 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("VM_114_170_centos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \t02/22/20 \t_x86_64_\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" CPU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.10")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.12")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.77")]),s._v("\n\nDevice:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn\nvda               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.57")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.99")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40.17")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1649382")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66723341")]),s._v("\nvdb               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.14")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.41")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.42")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("687445")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5681756")]),s._v("\nscd0              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("318")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("p",[s._v("CPU 属性值说明：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("%user：CPU 处在用户模式下的时间百分比\n%nice：CPU 处在带 NICE 值的用户模式下的时间百分比，即改变过优先级的进程的占用 CPU 的百分比\n%system：CPU 处在内核模式下的时间百分比\n%iowait：CPU 等待输入输出完成时间的百分比\n%steal：管理程序维护另一个虚拟处理器时，虚拟 CPU 的无意识等待时间百分比\n%idle：CPU 空闲时间百分比\n")])])]),t("p",[t("strong",[s._v("注意：")]),s._v(" 如果 %iowait 的值过高，表示硬盘存在 I/O 瓶颈，%idle 值高，表示 CPU 较空闲，如果 %idle 值高但系统响应慢时，有可能是 CPU 等待分配内存，此时应加大内存容量。%idle 值如果持续低于10，那么系统的 CPU 处理能力相对较低，表明系统中最需要解决的资源是 CPU。")]),s._v(" "),t("p",[s._v("磁盘属性值说明：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Device：/dev 目录下的磁盘（或分区）名称\ntps：该设备每秒的传输次数。一次传输即一次 I/O 请求，多个逻辑请求可能会被合并为一次 I/O 请求。一次传输请求的大小是未知的\nBlk_read/s (kB_read/s, MB_read/s)：每秒读取的数据大小。每个块等同于扇区，大小为 512B\nBlk_wrtn/s (kB_wrtn/s, MB_wrtn/s)：每秒写入的数据大小\nBlk_read (kB_read, MB_read)：读取数据的总大小\nBlk_wrtn (kB_wrtn, MB_wrtn)：写入数据的总大小\n")])])]),t("p",[s._v("（2）显示磁盘的详细使用情况。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("iostat "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-dx")]),s._v("\nLinux "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".107-1-tlinux2_kvm_guest-0049 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("VM_114_170_centos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \t02/22/20 \t_x86_64_\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" CPU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nDevice:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util\nvda               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.03")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.58")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.05")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.53")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.99")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40.16")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52.35")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.51")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.53")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.45")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.48")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.08")]),s._v("\nvdb               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.12")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.12")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.41")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.41")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("53.61")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.99")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.98")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.99")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.38")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v("\nscd0              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.23")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.41")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.41")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.41")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n\n")])])]),t("p",[s._v("磁盘属性值说明：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Device：/dev 目录下的磁盘（或分区）名称\nrrqm/s：每秒合并到设备队列中的读取请求数\nwrqm/s：每秒合并到设备队列中的写请求数\nr/s：设备每秒完成的读请求数\nw/s：设备每秒完成的写请求数\nrsec/s (rkB/s, rMB/s)：每秒读取的数据大小。每扇区大小为 512 字节\nwsec/s (wkB/s, wMB/s)：每秒写入的数据大小\navgrq-sz：平均每次设备 I/O 操作的数据大小 \navgqu-sz： I/O 请求队列平均长度\nawait：每次 I/O 平均耗时 （单位毫秒）。包括在请求队列中的等待时间和真正 I/O 时间\nr_await：每个读操作平均耗时（单位毫秒）。包括在请求队列中的等待时间和真正读取时间\nw_await：每个写操作平均耗时（单位毫秒）。包括在请求队列中的等待时间和真正写入时间\nsvctm：平均每次设备 I/O 操作的服务时间（单位毫秒）。警告！不要再信任此字段，此字段将在将来的 sysstat 版本中删除\n%util：在统计时间内所有处理 IO 时间，除以总共统计时间。例如，如果统计间隔 1s，该设备有 0.8s 在处理 IO，而 0.2s 闲置，那么该设备的 %util = 0.8/1 = 80%，所以该参数暗示了设备的繁忙程度。\n")])])]),t("p",[s._v("注意：如果 %util 是100%，表明产生的 I/O 请求太多，设备已经接近满负荷运行了（当然如果磁盘具有并发能力，即使 %util 是 100%，磁盘使用未必就到了瓶颈，比如 RAID 阵列和现代固态硬盘）。如果 svctm 比较接近 await，说明 I/O 几乎没有等待时间；如果 await 远大于 svctm，说明I/O 队列太长，I/O 响应太慢，则需要进行必要优化。如果 avgqu-sz 比较大，也表示有大量 I/O 在等待。")]),s._v(" "),t("p",[s._v("（3）查看指定磁盘的负载情况。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("iostat "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" vda\nLinux "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".107-1-tlinux2_kvm_guest-0049 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("VM_114_170_centos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \t02/22/20 \t_x86_64_\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" CPU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nDevice:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn\nvda               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.57")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.99")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40.16")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1649382")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("67150673")]),s._v("\n")])])]),t("p",[s._v("（4）只查看 CPU 使用情况。每一个间隔 1s 显示一次，总共显示 3 次。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("iostat "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nLinux "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".107-1-tlinux2_kvm_guest-0049 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("VM_114_170_centos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \t02/22/20 \t_x86_64_\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" CPU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.10")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.12")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.77")]),s._v("\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.13")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.87")]),s._v("\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.13")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.87")]),s._v("\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/iostat.1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("iostat(1) - Linux manual page - man7.org"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://sebastien.godard.pagesperso-orange.fr/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("sysstat 官网"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://linux.51yip.com/search/iostat",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux 命令手册.iostat 命令"),t("OutboundLink")],1)]),s._v(" "),t("Vssue",{attrs:{title:"iostat"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);