(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{481:function(t,e,a){"use strict";a.r(e);var s=a(12),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-命令简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),e("p",[t._v("SVN 是 Apache Subversion 的缩写 ，是一个开源的版本控制系统。")]),t._v(" "),e("p",[t._v("相较于 RCS、CVS，它采用了分支管理系统，它的设计目标是取代 CVS。互联网上很多版本控制服务已从 CVS 转移到 Subversion。Subversion 在 2000 年由 CollabNet 开发，后成为 Apache 软件基金会的一个项目。")]),t._v(" "),e("p",[t._v("svn 是 Apache Subversion 的客户端，完成与 Apache Subversion 服务端的交互，实现版本控制。")]),t._v(" "),e("p",[t._v("由于 Git 高效的性能、便捷的分支管理、强大的社区支持，SVN 已逐渐被 Git 取代。")]),t._v(" "),e("h2",{attrs:{id:"_2-命令格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("svn [subcommand] [options] [args]\n")])])]),e("h2",{attrs:{id:"_3-选项说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),e("p",[t._v("可用的子命令：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\tadd\n\tblame (praise, annotate, ann)\n\tcat\n    changelist (cl)\n    checkout (co)\n    cleanup\n    commit (ci)\n    copy (cp)\n    delete (del, remove, rm)\n    diff (di)\n    export\n    help (?, h)\n    import\n    info\n    list (ls)\n    lock\n    log\n    merge\n    mergeinfo\n    mkdir\n    move (mv, rename, ren)\n    patch\n    propdel (pdel, pd)\n    propedit (pedit, pe)\n    propget (pget, pg)\n    proplist (plist, pl)\n    propset (pset, ps)\n    relocate\n    resolve\n    resolved\n    revert\n    status (stat, st)\n    switch (sw)\n    unlock\n    update (up)\n    upgrade\n")])])]),e("h1",{attrs:{id:"_4-常用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),e("p",[t._v("（1）svn commit 撤销。\nstep 1 找出要回滚的版本号。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("svn log --limit 3 FILENAME\n")])])]),e("p",[e("code",[t._v("--limit 3")]),t._v("的意思是显示最新的三个版本。假如根据 svn log 日志查出指定文件要回滚的版本号是 2589。")]),t._v(" "),e("p",[t._v("step 2 回滚本地到版本号 2589。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("svn merge -r 5730:2589 FILENAME\n")])])]),e("p",[t._v("step 3 为了保险起见，确认回滚的结果。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("svn diff FILENAME\n")])])]),e("p",[t._v("step 4 本地与版本库中没有差异的话，指定文件的当前版本是 2589。提交回滚后的文件。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('svn commit -m "Revert revision from r5730 to r2589,because of ..."\n')])])]),e("hr"),t._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Subversion",target:"_blank",rel:"noopener noreferrer"}},[t._v("Subversion - wikipedia"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/136asdxxl/p/7410947.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("svn 命令行使用总结"),e("OutboundLink")],1)]),t._v(" "),e("Vssue",{attrs:{title:"svn"}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);