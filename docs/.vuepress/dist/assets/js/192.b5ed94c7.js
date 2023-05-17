(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{466:function(e,t,a){"use strict";a.r(t);var r=a(10),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[e._v("#")]),e._v(" 1.命令简介")]),e._v(" "),t("p",[e._v("rz 命令（Receive ZMODEM），使用 ZMODEM 协议，将本地文件批量上传到远程 Linux/Unix 服务器。")]),e._v(" "),t("p",[e._v("注意不能上传文件夹。")]),e._v(" "),t("p",[e._v("当我们使用虚拟终端软件，如 XShell、SecureCRT 或 PuTTY 来连接远程服务器后，使用 rz 命令可以上传本地文件到远程服务器。输入 rz 回车后，会出现文件选择对话框，选择需要上传文件，一次可以指定多个文件，上传到服务器的路径为当前执行 rz 命令的目录。")]),e._v(" "),t("p",[e._v("此外，可以在虚拟终端软件设置上传时默认加载的本地路径和下载的路径。如 SecureCRT 中 Options -> session options -> X/Y/Zmodem 下可以设置上传和下载的目录。")]),e._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[e._v("#")]),e._v(" 2.命令格式")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rz [OPTIONS]\n")])])]),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[e._v("#")]),e._v(" 3.选项说明")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("-+, --append\n\t将文件内容追加到已存在的同名文件\n-a, --ascii\n\t以文本方式传输\n-b, --binary\n\t以二进制方式传输，推荐使用\n--delay-startup N\n\t等待 N 秒\n-e, --escape\n\t对所有控制字符转义，建议使用\n-E, --rename\n\t已存在同名文件则重命名新上传的文件，以点和数字作为后缀\n-p, --protect\n\t对 ZMODEM 协议有效，如果目标文件已存在则跳过\n-q, --quiet\n\t安静执行，不输出提示信息\n-v, --verbose\n\t输出传输过程中的提示信息\n-y, --overwrite\n\t存在同名文件则替换\n-X, --xmodem\n\t使用 XMODEM 协议\n--ymodem\n\t使用 YMODEM 协议\n-Z, --zmodem\n\t使用 ZMODEM 协议\n--version\n\t显示版本信息\n--h, --help\n\t显示帮助信息\n")])])]),t("p",[e._v("以上为常见的命令选项，更多的选项说明，请参见rz的帮助手册。")]),e._v(" "),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[e._v("#")]),e._v(" 4.常用示例")]),e._v(" "),t("p",[e._v("（1）以二进制，并对控制字符进行转义，替换已存在的同名文件。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rz -bye\n")])])]),t("h2",{attrs:{id:"_5-faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-faq"}},[e._v("#")]),e._v(" 5.FAQ")]),e._v(" "),t("p",[e._v("（1）rz 如何上传文件夹？")]),e._v(" "),t("p",[e._v("很遗憾，rz 不能直接上传文件夹，可先将文件夹打包，当作文件下载。")]),e._v(" "),t("p",[e._v("（2）经常把 rz 和 sz 弄混淆，该如何正确记忆？")]),e._v(" "),t("p",[e._v("之所以将 rz 称之为上传工具，是因为我们以本地机器为中心。从远程服务器的角度，很容易理解 rz 为什么叫作 Receive ZMODEM，因为服务器需要从本地机器接收文件。sz 命令则表示从服务器发送文件到本地，也叫下载文件。")]),e._v(" "),t("p",[e._v("（3）如何安装 rz 与 sz？")]),e._v(" "),t("p",[e._v("rz 与 sz 对应的安装包为 "),t("a",{attrs:{href:"https://www.ohse.de/uwe/software/lrzsz.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("lrzsz"),t("OutboundLink")],1),e._v("，在不同的 Linux 发行版本，使用对应的安装工具安装即可。")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# RedHat 系列：CentOS/Fedora")]),e._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" lrzsz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Debian 系列：Debian/Ubuntu")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" lrzsz\n")])])]),t("hr"),e._v(" "),t("h1",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://linux.die.net/man/1/rz",target:"_blank",rel:"noopener noreferrer"}},[e._v("rz(1) - Linux man page - die.net"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://linux.die.net/man/1/sz",target:"_blank",rel:"noopener noreferrer"}},[e._v("sz(1) - Linux man page - die.net"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"http://blog.csdn.net/lioncode/article/details/7921525",target:"_blank",rel:"noopener noreferrer"}},[e._v("利用SecureCRT上传、下载文件（使用sz与rz命令），超实用！"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.ohse.de/uwe/software/lrzsz.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("lrzsz: free x/y/zmodem implementation - ohse.de"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);