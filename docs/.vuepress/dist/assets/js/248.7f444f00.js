(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{522:function(t,e,s){"use strict";s.r(e);var n=s(10),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-命令简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),e("p",[t._v("ipcs 命令用于查看 Linux 进程间通信设施的状态，包括消息列表、共享内存和信号量的信息。可以帮助开发人员定位进程间通信中出现的问题。")]),t._v(" "),e("p",[t._v("注意，本文描述的是 util-linux 版 ipcs，和其它版本（如 POSIX 版）的实现可能会有出入。")]),t._v(" "),e("h2",{attrs:{id:"_2-命令格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ipcs [resource-option] [output-format]\nipcs [resource-option] -i id\n")])])]),e("h2",{attrs:{id:"_3-命令选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-命令选项"}},[t._v("#")]),t._v(" 3.命令选项")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("-i，--id ID\n\t详细显示指定资源 ID 的 IPC 信息。使用时需要指定资源类型，资源包括消息队列（-q）、共享内存（-m）和信号量（-s）\n-h，--help\n\t显示帮助信息\n-V，--version\n\t显示版本信息\n\nIPC 资源类型选项：\n-q，--queues\n\t显示活动的消息队列信息\n-m，--shmems\n\t显示活动的共享内存信息\n-s, --semaphores\n\t显示活动的信号量信息\n-a，--all\n\t显示系统内所有的IPC信息。命令的默认选项\n\n输出格式选项：当指定多个时，以最后一个为准。\n-c，--creator\n\t查看 IPC 的创建者和所有者\n-l，--limits\n\t查看 IPC 资源的限制信息\n-p，--pid\n\t查看 IPC 资源的创建者和最后操作者的进程 ID\n-t，--time\n\t查看最新调用 IPC 资源的详细时间。包括 msgsnd() 和 msgrcv() 对 message queues 的操作，shmat() 和 shmdt() 对shared memory 的操作，以及 semop() 对 semaphores 的操作\n-u，--summary\n\t查看 IPC 资源状态汇总信息\n\n显示大小单位控制选项：只对选项 -l, --limits 生效\n-b，--bytes\n\t以字节为单位显示大小\n--human\n\t以可读的格式显示大小\n")])])]),e("h2",{attrs:{id:"_4-常用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),e("p",[t._v("（1）显示所有IPC信息。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@TENCENT64 /]# ipcs\n------ Message Queues --------\nkey        msqid      owner      perms      used-bytes   messages    \n\n------ Shared Memory Segments --------\nkey        shmid      owner      perms      bytes      nattch     status      \n0x6674431e 0          root       600        50485760   9\n\n------ Semaphore Arrays --------\nkey        semid      owner      perms      nsems     \n0x0000870a 0          root       666        1    \n")])])]),e("p",[t._v("（2）显示共享内存指定ID的信息。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@TENCENT64 /]# ipcs -m -i 32769\n\nShared memory Segment shmid=32769\nuid=0\tgid=0\tcuid=0\tcgid=0\nmode=0666\taccess_perms=0666\nbytes=12000\tlpid=2784\tcpid=1077\tnattch=3\natt_time=Thu Dec 27 10:39:32 2018  \ndet_time=Thu Dec 27 10:39:32 2018  \nchange_time=Fri Jul 20 13:17:41 2018 \n")])])]),e("p",[t._v("（3）查看 IPC 的创建这和最最后操作者的进程 ID。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("------ Message Queues PIDs --------\nmsqid      owner      lspid      lrpid     \n\n------ Shared Memory Creator/Last-op PIDs --------\nshmid      owner      cpid       lpid      \n0          root       702        23364     \n32769      root       702        5296      \n")])])]),e("p",[t._v("其中 lspid 代表最近一次向消息队列中发送消息的“进程号”，lrpid 对应最近一次从消息队列中读取消息的“进程号”。但请注意：此处的进程号是弱进程号，既它有可能代表的是线程号，如果进程中是起的线程对消息队列发送、接收消息，则此处 pid 对应的均是线程号。可以采用"),e("code",[t._v("ps -AL | grep pid")]),t._v("来查找该线程对应的进程 id。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/ipcs.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ipcs(1) - Linux manual page - man7.org"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mirrors.edge.kernel.org/pub/linux/utils/util-linux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Index of /pub/linux/utils/util-linux/"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/MartinChentf/p/6057100.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("工作中常用的Linux命令：ipcs/ipcrm命令"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/dalongyes/article/details/50616162",target:"_blank",rel:"noopener noreferrer"}},[t._v("ipcs命令详解——共享内存、消息队列、信号量定位利器"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);