(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{504:function(a,s,t){"use strict";t.r(s);var e=t(10),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),s("p",[a._v("ssh-keyscan 从服务器收集 SSH 公钥。")]),a._v(" "),s("p",[a._v("ssh-keyscan 是一个收集多个主机的 SSH 公共密钥的实用工具。它被设计用来帮助构建和验证 ssh_known_hosts 文件，其格式在 "),s("a",{attrs:{href:"https://man7.org/linux/man-pages/man8/sshd.8.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("sshd(8)"),s("OutboundLink")],1),a._v(" 中有说明。ssh- keycan 提供了一个适合 Shell 和 Perl 脚本使用的最小接口。")]),a._v(" "),s("p",[a._v("ssh-keycan 使用非阻塞的套接字 I/O 以并行方式联系尽可能多的主机，因此非常高效。可以在几十秒内收集来自 1,000 台主机的公钥，即使其中一些主机关闭或没有运行 "),s("a",{attrs:{href:"https://man7.org/linux/man-pages/man8/sshd.8.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("sshd(8)"),s("OutboundLink")],1),a._v("。对于扫描，不需要登录被扫描的机器，扫描过程也不涉及任何加密。")]),a._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ssh-keyscan "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-46cDHv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-f file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-p port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-T timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-t type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("host "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" addrlist namelist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-4")]),a._v("\n\t强制使用 IPv4 地址。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-6")]),a._v("\n\t强制使用 IPv6 地址。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\t从指定文件中读取"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("地址列表,名字列表"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("对。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\t指定连接远程主机的端口。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("timeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\t指定连接尝试的超时时间。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\t指定要创建的密钥类型。取值为 dsa、ecdsa、ed25519 或 rsa。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("\n\t详细模式，打印调试信息。\n")])])]),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),s("p",[a._v("（1）显示指定主机的 SSH 公钥。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ssh-keyscan "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 127.0.0.1:22 SSH-2.0-OpenSSH_7.4")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 ecdsa-sha2-nistp256 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBPGSUxf7imqYeMvvJ1XzkXpT4OhOLJXVRktQpegmqKOKyEOLoFgJHdklYPshzk6YXt8Zgb6NPqW0lZBMco3kQMo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 127.0.0.1:22 SSH-2.0-OpenSSH_7.4")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDkGXOrc1t17nD5zYHNcA83zsa9uvv8s1bGcHQoUgCotwJexLu0zTUgNzDJRuMHzIIzuwIIy2H24sgIOvo81bJHIcJOXxr6pJ8Jc/lriZmitqpOBfHRheUif8V6uqfQKYEQRRpEow5rDK0qYi7CSVuZFBgdLGQT+XyK72AK+hzvQyEmtd5NmeeIX0SmQ5WfwhzcCa0byu+hop81HjTXleSdwErox04BFTVX/UcH4LQb16Q4W+5kI46Vn1p6uuzrEt/+C92DUgYtmDW5hv9BuuYQuSdUoI+vpW+y+Bf5e4bqfuEh34P6qEgkIm+LUxybPS65MMHTRWpT+j/zIdGHIuqh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 127.0.0.1:22 SSH-2.0-OpenSSH_7.4")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINBoGj6wvUg+fNcgaXAHw2fpQzntB3pqt2/YXH6BNX8W\n")])])]),s("p",[a._v("（2）显示指定主机的 RSA 公钥。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ssh-keyscan "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" rsa "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 127.0.0.1:22 SSH-2.0-OpenSSH_7.4")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDkGXOrc1t17nD5zYHNcA83zsa9uvv8s1bGcHQoUgCotwJexLu0zTUgNzDJRuMHzIIzuwIIy2H24sgIOvo81bJHIcJOXxr6pJ8Jc/lriZmitqpOBfHRheUif8V6uqfQKYEQRRpEow5rDK0qYi7CSVuZFBgdLGQT+XyK72AK+hzvQyEmtd5NmeeIX0SmQ5WfwhzcCa0byu+hop81HjTXleSdwErox04BFTVX/UcH4LQb16Q4W+5kI46Vn1p6uuzrEt/+C92DUgYtmDW5hv9BuuYQuSdUoI+vpW+y+Bf5e4bqfuEh34P6qEgkIm+LUxybPS65MMHTRWpT+j/zIdGHIuqh\n")])])]),s("p",[a._v("（3）收集主机 SSH 公钥，并输出调试信息。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ssh-keyscan "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1\n")])])]),s("hr"),a._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/ssh-keyscan.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("ssh-keyscan(1) — Linux manual page - man7.org"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);