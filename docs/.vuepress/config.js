const head = require('./config/headConfig');
const nav = require('./config/navConfig');
const sidebar = require('./config/sidebarConfig');
module.exports = {
    title: "Jane's blog",
    description: "Jane's personal blog",
    head,
    plugins: {
        '@vuepress/back-to-top': true, //返回顶部
        '@vssue/vuepress-plugin-vssue': {
            platform: 'github-v4',
            owner: 'HsiehChia',
            repo: 'StudyDoc',
            clientId: 'fd48f15d88b2c71d6096',
            clientSecret: '3b6127e6441035b24e6335b1b5fd0a983c547dd9',
            autoCreateIssue : true,
        },
    },
    themeConfig: {
        lastUpdated: '上一次更新时间',
        logo: '/assets/img/logo.png',
        nav,
        sidebar,
    }
}