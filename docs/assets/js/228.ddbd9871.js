(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{565:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[s._v("#")]),s._v(" 1.命令简介")]),s._v(" "),t("p",[s._v("ssh-agent 是 OpenSSH 认 证代理。")]),s._v(" "),t("p",[s._v("sh-agent是一个用于保存公钥认证过程中用到的私钥的程序。ssh-agent 在 X 会话或登录会话之初启动，所有其他窗口或程序则以 ssh-agent 客户端程序的身份启动。当使用 ssh(1) 登录到其他机器时，可通过环境变量定位到代理并使用代理自动进行身份验证。")]),s._v(" "),t("p",[s._v("其实 ssh-agent 就是一个密钥管理器，运行 ssh-agent 以后，使用 ssh-add 将私钥交给 ssh-agent 保管，其他程序需要身份验证的时候可以将验证申请交给 ssh-agent 来完成整个认证过程。")]),s._v(" "),t("h2",{attrs:{id:"_2-使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用场景"}},[s._v("#")]),s._v(" 2.使用场景")]),s._v(" "),t("p",[s._v("使用不同的密钥连接到不同的主机时，需要手动指定对应的密钥。ssh-agent 可以帮助我们选择对应的密钥进行认证，不用手动指定密钥即可进行连接。")]),s._v(" "),t("p",[s._v("当私钥设置了密码，我们又需要频繁的使用私钥进行认证时，ssh-agent 可以帮助我们免去重复的输入密码的操作。")]),s._v(" "),t("h2",{attrs:{id:"_3-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-命令格式"}},[s._v("#")]),s._v(" 3.命令格式")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ssh-agent "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-Dd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-a bind_address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-E fingerprint_hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-P allowed_providers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-t life"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nssh-agent "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-a bind_address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-E fingerprint_hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-P allowed_providers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-t life"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nssh-agent "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v("\n")])])]),t("h2",{attrs:{id:"_4-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-选项说明"}},[s._v("#")]),s._v(" 4.选项说明")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("-a <bind_address>\n\t将 agent 绑定到 Unix 域套接字地址。缺省 $TMPDIR/ssh-XXXXXXXXXX/agent.<ppid>。\n-c\n\t生成 C-shell 风格的命令输出。\n-D\n\t前台模式。当指定此选项时，ssh-agent 将不进行 fork。\n-d\n\t调试模式。\n-E <fingerprint_hash>\n\t指定显示密钥指纹时使用的哈希算法。有效选项为 md5 和 sha256。默认值为 sha256。\n-k\n\t把 ssh-agent 进程杀掉（由环境变量 SSH_AGENT_PID 给出 PID）。\n-P <allowed_providers>\n\t为 PKCS#11 提供程序和 FIDO 身份验证器中间件共享库指定可接受路径的模式列表，这些共享库可以与 ssh-add(1) 的 -S 或 -S 选项一起使用。\n\n\t与模式列表不匹配的库将被拒绝。有关模式列表语法的描述，请参见 ssh_config(5) 中的 PATTERNS。默认列表为“/usr/lib/*，/usr/local/lib/*”。\n-s\n\t生成 Bourne shell 风格的命令输出。\n-t <life>\n\t为添加到代理的标识的最大生存期设置一个默认值。生存期可以以秒或 sshd_config(5) 中指定的时间格式指定。使用 ssh-add(1) 为标识指定的生存期将覆盖此值。如果没有这个选项，默认的最大生存期是永远。\ncommand [arg ...]\n\t如果给出了命令(和可选参数)，它将作为代理的子进程执行。当命令行上给出的命令终止时，代理自动退出。\n")])])]),t("h2",{attrs:{id:"_5-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-常用示例"}},[s._v("#")]),s._v(" 5.常用示例")]),s._v(" "),t("p",[s._v("（1）运行 ssh-agent 并打印本身的环境和变量。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ssh-agent\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SSH_AUTH_SOCK")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp/ssh-LG9nILJM4eg5/agent.10291"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SSH_AUTH_SOCK")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SSH_AGENT_PID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10292")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" SSH_AGENT_PID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Agent pid "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10292")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nlvlv@jumper02:~$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Agent pid "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10292")]),s._v("\n")])])]),t("p",[s._v("（2）把 ssh-agent 进程杀掉。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ssh-agent "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v("\nSSH_AGENT_PID not set, cannot "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" agent\n")])])]),t("p",[s._v("（3）运行 ssh-agent 并生成 C-shell 风格的命令输出。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ssh-agent "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("\nsetenv "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SSH_AUTH_SOCK")]),s._v(" /tmp/ssh-9EeTOiN3QBlO/agent.12868"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsetenv SSH_AGENT_PID "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12869")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Agent pid "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12869")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("（4）使用 -d 参数，运行调试模式。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ssh-agent "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SSH_AUTH_SOCK")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp/ssh-RIdJfIA1Qus2/agent.13761"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SSH_AUTH_SOCK")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Agent pid "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13761")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndebug2: fd "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" setting O_NONBLOCK\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/ssh-agent.1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("ssh-agent(1) - Linux manual page - man7.org"),t("OutboundLink")],1)]),s._v(" "),t("Vssue",{attrs:{title:"ssh-agent"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);