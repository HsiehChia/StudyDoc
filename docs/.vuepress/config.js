module.exports = {
    title: "HsiehChia's blog",
    description: "Jane's personal blog",
    themeConfig: {
        logo: '/assets/logo.png',
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