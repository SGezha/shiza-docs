import { defineConfig } from 'vitepress'

export default defineConfig({
    themeConfig: {
        nav: [
            { text: 'Гайд для енотов', link: '/guide/index' },
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Гайды для енотов',
                    items: [
                        { text: 'Главная', link: '/guide/index' }, 
                        { text: 'Действующий список администрации проекта', link: '/guide/contact' }, 
                    ]
                }
            ],
        },
    },
    lang: 'ru-Ru',
    title: 'Shiza Docs',
    description: 'Документация для шизы.',
})