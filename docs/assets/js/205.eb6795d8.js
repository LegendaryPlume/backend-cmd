(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{480:function(t,n,e){"use strict";e.r(n);var a=e(10),r=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_1-命令简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),n("p",[t._v("ifconfig（configure a network interface）命令是系统管理员命令，用于查看和配置网络接口。")]),t._v(" "),n("h2",{attrs:{id:"_2-命令格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ifconfig [-v] [-a] [-s] [INTERFACE]\nifconfig [-v] INTERFACE [aftype] OPTIONS | ADDRESS ...\n")])])]),n("p",[t._v("不跟任何选项和参数单独执行 ifconfig 命令将显示当前活动接口的状态。如果给定一个接口参数，则它仅显示给定接口的状态。如果只给一个选项 -a，它将显示所有接口的状态，包括那些关闭的接口。其他情况，用于配置一个网络接口。")]),t._v(" "),n("h2",{attrs:{id:"_3-选项说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("-a\n\t显示所有接口的状态，包括那些关闭的接口\n-s\n\t显示接口简短状态列表，类似于 netstat -i\n-v\n\t冗余模式，遇到错误将报告错误信息\nINTERFACE\n\t接口的名称。这通常是一个驱动程序名，后面跟着一个单元号，例如用于第一个以太网接口的 eth0\nup\n\t此标志将导致激活接口。如果将地址分配给接口，则会隐式激活接口\ndown\n\t此标志用于关闭接口的驱动程序\n[-]arp\n\t启用或关闭接口使用 ARP 协议\n[-]promisc\n\t启用或禁用接口的混杂模式。如果选中，网络上的所有数据包都将由接口接收\n[-]allmulti\n\t启用或禁用所有多播模式。如果选中，则接口将接收网络上的所有多播数据包\nmtu N\n\t设置接口的最大传输单元\ndstaddr ADDR\n\t为点对点链路（如 PPP）设置远程 IP 地址。关键字 dstaddr 现在已经过时了，使用 pointopoint 关键字代替\nnetmask ADDR\n\t设置接口的 IP 网络掩码。此值默认为通常的 A、B 或 C 类网络掩码（从接口 IP 地址派生），但可以设置为任何值\nadd ADDR/PREFIX_LEN\n\t向接口添加 IPv6 地址\ndel ADDR/PREFIX_LEN\n\t从接口中删除 IPv6 地址\ntunnel ::aa.bb.cc.dd\n\t创建一个新的SIT(IPv6-in-IPv4)设备，通过隧道到达给定的目的地\nirq ADDR\n\t设置此设备使用的中断行。并非所有设备都可以动态更改其 IRQ 设置\nio_addr ADDR\n\t为该设备设置 I/O 空间中的起始地址\nmem_start ADDR\n\t设置此设备使用的共享内存的起始地址。只有少数几个设备需要这个\nmedia TYPE\n\t设置设备要使用的物理端口或介质类型。典型的类型值有10base2（细以太网）、10baseT（双绞线 10Mbps 以太网）、AUI（外部收发器）等。特殊的媒体类型可以使用 auto 来告诉驱动程序进行自动感知。注意，并非所有设备都可以更改此设置\n[-]broadcast [ADDR]\n\t如果给定地址参数，则为该接口设置协议广播地址。否则设置（或清除）接口的 IFF_BROADCAST标志\n[-]pointopoint [ADDR]\n\t这个关键字启用了接口的点对点模式，这意味着它是两台机器之间的直接连接，没有其他人监听它。如果给了地址参数，就像过时的 dstaddr 关键字一样，设置另一端的协议地址。否则设置或清除接口的 IFF_POINTOPOINT 标志\nhw CLASS ADDR\n\t如果设备驱动程序支持此操作，则设置此接口的物理地址。CLASS 为硬件类型名称，ADDR 为物理地址。目前支持的硬件类包括 ether (Ethernet)、ax25 (AMPR AX.25)、ARCnet 和 netrom (AMPR NET/ROM)\nmulticast\n\t在接口上设置多播标志。一般不需要显示设置，因为驱动程序本身会设置正确的标志\nADDRESS\n\t接口的 IP 地址\ntxqueuelen LENGTH\n\t设置设备的传输队列的长度。对于具有高延迟（调制解调器链路，ISDN）的较慢设备，将其设置为小值是有用的，以防止快速批量传输过多地干扰诸如 telnet 之类的交互通信\n")])])]),n("h2",{attrs:{id:"_4-常用示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),n("p",[t._v("（1）查看处于激活状态的网络接口信息。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ifconfig\neth0      Link encap:Ethernet  HWaddr 00:16:3E:00:1E:51  \n          inet addr:10.160.7.81  Bcast:10.160.15.255  Mask:255.255.240.0\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:61430830 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:88534 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000\n          RX bytes:3607197869 (3.3 GiB)  TX bytes:6115042 (5.8 MiB)\n\nlo        Link encap:Local Loopback  \n          inet addr:127.0.0.1  Mask:255.0.0.0\n          UP LOOPBACK RUNNING  MTU:16436  Metric:1\n          RX packets:56103 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:56103 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:0\n          RX bytes:5079451 (4.8 MiB)  TX bytes:5079451 (4.8 MiB)\n")])])]),n("p",[t._v("eth0 表示第一块网卡。")]),t._v(" "),n("p",[t._v("第一行 Link encap:Ethernet 表示连接类型为以太网，HWaddr 00:16:3E:00:1E:51 为网卡的物理地址；\n第二行 inet addr:10.160.7.81 为网卡的 IPv4 地址，Bcast:10.160.15.255 为广播地址，Mask:255.255.240.0 为子网掩码；\n第三行 UP（代表网卡开启状态），BROADCAST（支持广播），RUNNING（代表网卡的网线被接上），MULTICAST（支持组播），MTU:1500（最大传输单元 1500 字节），Metric:1 表示网卡路由数据包优先级，数值越低，优先级越高；\n第四、五行：接收、发送数据包情况统计；\n第七行：接收、发送数据字节数统计信息。")]),t._v(" "),n("p",[t._v("lo 是表示主机的回环地址，这个一般是用来测试一个网络程序，只能在本机上访问，局域网或外网的主机无法访问该地址。")]),t._v(" "),n("p",[t._v("（2）查看所有网络接口信息，不论其是否激活。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ifconfig -a\n")])])]),n("p",[t._v("（3）查看指定网络接口信息。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ifconfig eth0\n")])])]),n("p",[t._v("（4）启动和关闭指定网卡。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 启动网卡\nifconfig eth0 up\n# 关闭网卡\nifconfig eth0 down\n")])])]),n("p",[t._v("（5）修改 MAC 地址。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ifconfig eth0 down\nifconfig eth0 hw ether 00:AA:BB:CC:DD:EE\nifconfig eth0 up\n")])])]),n("p",[t._v("（6）配置 IP 地址。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 给 eth0 网卡配置 IP 地址\nifconfig eth0 192.168.1.56\n\n# 给 eth0 网卡配置 IP 地址并加上子网掩码\nifconfig eth0 192.168.1.56 netmask 255.255.255.0 \n\n# 给 eth0 网卡配置 IP 地址，加上子网掩码，加上广播地址\nifconfig eth0 192.168.1.56 netmask 255.255.255.0 broadcast 192.168.1.255\n")])])]),n("p",[t._v("（7）启用和关闭 ARP 协议。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 开启网卡 eth0 的 arp 协议\nifconfig eth0 arp\n# 关闭网卡 eth0 的 arp 协议\nifconfig eth0 -arp\n")])])]),n("p",[t._v("（8）设置最大传输单元。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 设置能通过的最大数据包大小为 1500 bytes\nifconfig eth0 mtu 1500\n")])])]),n("p",[t._v("（9）添加和删除 IPv6 地址。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 添加 IPv6 地址\nifconfig eth0 add 3ffe:3240:800:1005::2/64\n\n# 删除 IPv6 地址\nifconfig eth0 del 3ffe:3240:800:1005::2/64\n")])])]),n("hr"),t._v(" "),n("h2",{attrs:{id:"参考文献"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.man7.org/linux/man-pages/man8/ifconfig.8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ifconfig(8) manual"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/dengjin20104042056/article/details/99709841",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Linux】一步一步学Linux——ifconfig命令(151)"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://man.linuxde.net/ifconfig",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux 命令大全.ifconfig命令"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.aboutlinux.info/2006/11/ifconfig-dissected-and-demystified.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ifconfig Command - Explained in Detail"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=r.exports}}]);