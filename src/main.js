import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import './assets/styles/fontstyle.css'
import './assets/styles/styles.css'
import './assets/styles/mreset.css'

import { createI18n } from 'vue-i18n'
import en from './lang/en/header.js'
import kh from '@/lang/ca/header.js'
import cn from '@/lang/cn/header.js'
import vn from '@/lang/vn/header.js'
import id from '@/lang/id/header.js'
import th from '@/lang/th/header.js'

const i18n = createI18n({
      locale: 'en',
      fallbackLocale: 'en',
      messages: {
            en, kh, cn, vn, id, th
      },
});

createApp(App)
      .use(router)
      .use(VueSweetalert2)
      .use(i18n)
      .mount('#app')



