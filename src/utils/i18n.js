import store from '@/store'
import i18n from '@/i18n'

/**
 * 返回当前 lang
 */
export function getLanguage() {
  return store && store.getters && store.getters.language
}

export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}
