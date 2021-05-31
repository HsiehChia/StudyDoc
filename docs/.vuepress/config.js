const head = require('./config/headConfig');
const nav = require('./config/navConfig');
const sidebar = require('./config/sidebarConfig');
module.exports = {
    title: "Jane's blog",
    description: "Jane's personal blog",
    head,
    plugins: {
        '@vuepress/back-to-top': true, //返回顶部
    },
    themeConfig: {
        lastUpdated: '上一次更新时间',
        logo: '/assets/img/logo.png',
        nav,
        sidebar,
    }
}