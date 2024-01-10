(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{472:function(a,t,e){"use strict";e.r(t);var s=e(12),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),t("p",[a._v("usermod（user modify）是系统管理员命令，用于修改用户账号。")]),a._v(" "),t("p",[a._v("usermod 可用来修改用户账号的各项设定，通过修改系统账号文件让命令行指定的变化生效。")]),a._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod [OPTIONS] LOGIN\n")])])]),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-a, --append\n\t将用户添加到补充组。仅与 -G 选项一起使用。\n-c, --comment\n\t添加备信息\n-d, --home HOME_DIR\n\t用户的新主目录\n-e, --expiredate EXPIRE_DATE\n\t设定帐户过期的日期\n-f, --inactive INACTIVE\n\t过期 INACTIVE 天数后，设定密码为失效状态\n-g, --gid GROUP\n\t强制使用 GROUP 为新主组\n-G, --groups GROUPS\n\t新的附加组列表 GROUPS\n-a, --append GROUP\n\t将用户追加至上边 -G 中提到的附加组中，并不从其它组中删除此用户\n-h, --help\n\t显示此帮助信息并推出\n-l, --login LOGIN\n\t新的登录名称\n-L, --lock\n\t锁定用户帐号\n-m, --move-home\n\t将家目录内容移至新位置 (仅于 -d 一起使用)\n-o, --non-unique\n\t允许使用重复的(非唯一的) UID\n-p, --password PASSWORD\n\t将加密过的密码 (PASSWORD) 设为新密码\n-s, --shell SHELL\n\t该用户帐号的新登录 shell\n-u, --uid UID\n  \t用户帐号的新 UID\n-U, --unlock\n\t解锁用户帐号\n-Z, --selinux-user  SEUSER\n\t用户账户的新 SELinux 用户映射\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),t("p",[a._v("（1）修改用户的家目录。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod -d /home/tom tom\n")])])]),t("p",[a._v("（2）改变用户的 uid。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod -u 888 tom\n")])])]),t("p",[a._v("（3）修改用户名为 jerry。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod -l jerry tom\n")])])]),t("p",[a._v("（4）锁定 tom 用户。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod -L tom\n")])])]),t("p",[a._v("（5）解锁 tom 用户。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod -U tom\n")])])]),t("p",[a._v("（6）添加新的附加组。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod -G deng tom\n")])])]),t("p",[a._v("（7）修改用户登录 Shell。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod -s /bin/sh tom\n")])])]),t("p",[a._v("（8）修改用户的 GID。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod -g 1003 tom\n")])])]),t("p",[a._v("（9）指定帐号过期日期。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod -e 2020-12-31 tom\n")])])]),t("p",[a._v("（10）指定用户帐号密码过期多少天后，禁用该帐号。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod -f 3 tom\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://man7.org/linux/man-pages/man8/usermod.8.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("usermod(8) - Linux manual page - man7.org"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/dengjin20104042056/article/details/97970997",target:"_blank",rel:"noopener noreferrer"}},[a._v("CSDN.【Linux】一步一步学Linux——usermod命令(86)"),t("OutboundLink")],1)]),a._v(" "),t("Vssue",{attrs:{title:"usermod"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);