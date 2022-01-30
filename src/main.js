import {createApp}     from 'vue'
import App             from './App.vue'
import router          from './router'
import store           from './store'
import FontAwesomeIcon from '@/fontawesome-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store).use(router).mount('#app')
