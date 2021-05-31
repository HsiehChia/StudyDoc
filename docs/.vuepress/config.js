module.exports = {
    title: "Jane's blog",
    description: "Jane's personal blog",
    head: [
        ['link', {ref: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'author', content: 'jane'}],
        ['meta', {name: 'keywords', content: '前端程序员的个人博客，分享前端知识以及程序代码'}],
    ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            {text: '首页', link: '/'},
            {text: '技术分类', link: '/cate/'},
            {text: '联系站长', link: '/contact/'},
        ],
        sidebar: [
            {
                title: '技术分类目录',
                path: '/cate/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                  ['/cate/category', '目录结构'],
                ]
            },
            {
                title: 'HTML',
                path: '/html/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/html/tags',
                    '/html/test',
                ]
            },
        ]
    }
}