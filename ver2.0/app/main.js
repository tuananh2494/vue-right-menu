import Vue from 'vue'
import App from './App'
import router from './router'
import "vueify/lib/insert-css" // required for .vue file <style> tags
import { component as VueContextMenu } from '@xunlei/vue-context-menu'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
