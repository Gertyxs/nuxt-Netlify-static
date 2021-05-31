import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locales from '@/locales'

Vue.use(VueI18n)

export default ({ app, store }: { app: any; store: any }) => {
  const locale = 'zn-CN'

  app.i18n = new VueI18n({
    locale: locale,
    fallbackLocale: locale, // 语言环境中不存在相应massage键时回退到指定语言
    messages: locales,
  })

  app.i18n.path = (link: string) => {
    // 如果是默认语言，就省略
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
