(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{348:function(t,s,n){"use strict";n.r(s);var a=n(10),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),s("p",[t._v("stat 用于显示文件或文件系统的详细信息。在显示文件信息时，比 ls 命令更加详细。")]),t._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". FILE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-命令选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-命令选项"}},[t._v("#")]),t._v(" 3.命令选项")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("-L, --dereference:跟随符号链接解析原文件而非符号链接；\n-f, --file-system:显示文件所在文件系统信息而非文件信息；\n-c,--format"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("FORMAT:以指定格式输出，而非默认格式；\n\t显示文件信息可用格式控制符如下：\n\t%a：以八进制显示访问权限\n\t%A：以可读形式显示访问权限\n\t%b：显示占有块数\n\t%B：显示每一块占有的字节数\n\t%C：SELinux security context string\n\t%d：十进制显示文件所在设备号\n\t%D：十六进制显示文件所在设备号\n\t%f：十六进制显示文件类型\n\t%F：文件类型。Linux下文件类型主要分为普通文件、目录、字符设备文件、块设备文件、符号链接文件、套接字等\n\t%g：文件所有者组ID\n\t%G：文件所有者组名称\n\t%h：文件硬链接数\n\t%i：inode号\n\t%m：文件所在磁盘分区挂载点，比如/data\n\t%n：文件名称\n\t%N：单引号括起来的文件名称，如果是软链接，则同时显示指向的文件名称\n\t%o：optimal I/O transfer size hint\n\t%s：实际文件大小，单位字节\n\t%t：major device "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" hex, "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" character/block device special files\n\t%T：minor device "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" hex, "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" character/block device special files\n\t%u：所有者用户ID\n\t%U：所有者用户名称\n\t%w：文件创建时间，输出-表示无法得知\n\t%W：文件创建时间，输出Unix时间戳，0表示无法得知\n\t%x：可读形式输出最后访问时间atime\n\t%X：Unix时间戳输出最后访问时间atime\n\t%y：可读形式输出最后修改时间mtime\n\t%Y：Unix时间戳输出后修改时间mtime\n\t%z：可读形式输出最后状态改变时间ctime\n\t%Z：Unix时间戳输出最后状态改变时间ctime\n\t\n\t显示文件系统信息可用格式控制符有：\n\t%a：非超级用户可使用的自由block数\n\t%b：文件系统总block数\n\t%c：文件系统总文件节点数\n\t%d：可用文件节点数\n\t%f：可用文件block数\n\t%i：十六进制文件系统ID\n\t%l：最大文件名称长度\n\t%n：文件名称\n\t%s：一个块的大小，单位字节（for faster transfers）\n\t%S：一个块的基本大小，单位字节（用于统计block的数量）\n\t%t：十六进制输出文件系统类型\n\t%T：可读形式输出文件系统类型\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--printf")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("FORMAT:以指定格式输出，而非默认格式。与--format作用类似，但可以解释反斜杠转义字符，比如换行符"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("n；\n-t, --terse:简洁模式输出，只显示摘要信息；\n--help:显示帮助信息；\n--version:显示版本信息。\n")])])]),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),s("p",[t._v("（1）显示文件信息。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@TENCENT64 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stat Changelog")]),t._v("\n  File: ‘Changelog’\n  Size: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1598")]),t._v("      \tBlocks: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("          IO Block: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("   regular "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\nDevice: fd01h/64769d\tInode: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1579435")]),t._v("     Links: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nAccess: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0644/-rw-r--r--"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  Uid: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("/    root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   Gid: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("/    root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAccess: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("-11-06 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":39:54.110931887 +0800\nModify: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("-11-06 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":39:54.110931887 +0800\nChange: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("-11-06 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(":07:14.428548887 +0800\n Birth: -\n")])])]),s("p",[t._v("信息解释：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("File: ‘Changelog’:文件名称为Changelog\nSize: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1598")]),t._v(":文件大小1598字节\nBlocks: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("：文件占用的块数\nIO Block: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("：\nregular file：文件类型（普通文件）\nDevice: fd01h/64769d：文件所在设备号，分别以十六进制和十进制显示\nInode: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1579435")]),t._v("：文件节点号\nLinks: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("：硬链接数\nAccess: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0644/-rw-r--r--"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：访问权限\nUid：所有者ID与名称\nGid：所有者用户组ID与名称\nAccess：最后访问时间\nModify：最后修改时间\nChange：最后状态改变时间\nBirth -：无法获知文件创建时间。注意：Linux下的文件未存储文件创建时间\n")])])]),s("p",[t._v("（2）显示文件所在文件系统信息。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@TENCENT64 /data/vas_pgg_proj/apps/penguin_game"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stat -f Makefile")]),t._v("\n  File: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Makefile"')]),t._v("\n    ID: 6f75a4f02634e23e Namelen: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("     Type: ext2/ext3\nBlock size: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("       Fundamental block size: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("\nBlocks: Total: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("43830967")]),t._v("   Free: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30155578")]),t._v("   Available: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27923259")]),t._v("\nInodes: Total: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11162880")]),t._v("   Free: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11077199")]),t._v("\n")])])]),s("p",[t._v("信息解释：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("File: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Makefile"')]),t._v("：文件名称为"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Makefile"')]),t._v("；\nID: 6f75a4f02634e23e：文件系统ID\nNamelen: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("：最大文件名称长度\nType: ext2/ext3：文件系统类型名称\nBlock size: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("：块大小为4096字节\nFundamental block size: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("：基本块大小为4096字节\nBlocks: Total: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("43830967")]),t._v("   Free: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30155578")]),t._v("   Available: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27923259")]),t._v("：\nInodes: Total: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11162880")]),t._v("   Free: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11077199")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/stat.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("stat(1) - Linux manual page - man7.org"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/pointer_y/article/details/54347968",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Linux】Linux下使用stat命令所显示出来的三个时间"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://blog.51cto.com/colinzhouyj/1288580",target:"_blank",rel:"noopener noreferrer"}},[t._v("linux stat命令参数详解"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/sammyliu/p/4521315.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("磁盘、分区及Linux文件系统 [Disk, Partition, Linux File System]"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);