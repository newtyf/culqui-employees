import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import App from './App.vue'
import router from './router/router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserGroup, faSuitcase, faFileArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserGroup, faSuitcase, faFileArrowDown, faPlus)

/* add font awesome icon component */
const pinia = createPinia()
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)
app.mount("#app")