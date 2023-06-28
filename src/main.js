import { createApp } from 'vue'
import App from './App.vue'

import { ComponentLibrary } from '@zelenyjan/stencil-vue-sample-vue/dist';
import { ComponentLibrary as GovComponentLibrary } from "@gov-design-system-ce/vue/dist";

createApp(App).use(ComponentLibrary).use(GovComponentLibrary).mount('#app');
