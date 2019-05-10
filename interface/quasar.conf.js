const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function(ctx) {
    return {
        boot: [
            'i18n',
            'axios'
        ],
        css: [
            'app.styl'
        ],
        extras: [
            'roboto-font',
            'fontawesome-v5'
        ],
        supportIE: false,
        build: {
            distDir: "../public/",
            scopeHoisting: true,
            // vueRouterMode: 'history',
            // vueCompiler: true,
            gzip: true,
            // analyze: true,
            // extractCSS: false,
            extendWebpack(cfg) {
                cfg.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/
                })
            },
            chainWebpack(chain) {
                chain.plugin('copy-root-over-public')
                .use(CopyWebpackPlugin, [
                    [{
                        from: appPaths.resolve.src('../root/'),
                        to: './',
                        ignore: ['.*']
                    }]
                ])
            }
        },
        devServer: {
            // https: true,
            // port: 8080,
            open: true // opens browser window automatically
        },
        framework: {
            components: [
                'QSpace',
                'QBar',
                'QCard',
                'QCardSection',
                'QLayout',
                'QHeader',
                'QFooter',
                'QDrawer',
                'QPageContainer',
                'QPage',
                'QToolbar',
                'QToolbarTitle',
                'QBtn',
                'QIcon',
                'QChip',
                'QList',
                'QItem',
                'QItemLabel',
                'QItemSection',
                'QSeparator',
                'QTooltip',
                'QDialog',
                'QAvatar',
                'QInput'
            ],
            directives: [
                'Ripple',
                'ClosePopup'
            ],
            plugins: [
                    'Notify',
                    'Dialog'
            ],
            iconSet: 'fontawesome-v5'
            // lang: 'en' // Quasar language
        },
        // animations: 'all' --- includes all animations
        animations: [
            'fadeIn',
            'fadeOut'
        ],
        ssr: {
            pwa: false
        },
        pwa: {
            // workboxPluginMode: 'InjectManifest',
            // workboxOptions: {},
            manifest: {
                display: 'standalone',
                orientation: 'portrait',
                background_color: '#ffffff',
                theme_color: '#CC342D'
            }
        },
        cordova: {
            id: 'org.abstractive.compass'
        },
        electron: {
            // bundler: 'builder', // or 'packager'
            extendWebpack(cfg) {
                // do something with Electron process Webpack cfg
            },
            packager: {
                // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

                // OS X / Mac App Store
                // appBundleId: '',
                // appCategoryType: '',
                // osxSign: '',
                // protocol: 'myapp://path',

                // Window only
                // win32metadata: { ... }
            },
            builder: {
                // https://www.electron.build/configuration/configuration

                // appId: 'quasar-app'
            }
        }
    }
}