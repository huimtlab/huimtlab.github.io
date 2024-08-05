import { createI18n } from "vue-i18n"
// 英文翻译包
import en from './langs/en'
// 中文翻译包
import zh from './langs/zh'
 
// 把语言包放进去
const messages = {
    zh,
    en
}
const i18n = createI18n({
    // vue2 legacy写false和true就行, vue3 写false
    legacy:false,
    // locale是表示我们当前的语言,你是中文他就会用zh.js,你是英文他就会用en.js
    //本地存储中有就用本地存储中的,没有就默认为en
    locale:localStorage.getItem('lang') || 'zh',
    messages
})
 
export default i18n