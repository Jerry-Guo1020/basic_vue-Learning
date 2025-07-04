import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.use(router)


app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
