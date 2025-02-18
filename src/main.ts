import { createApp } from 'vue';
import App from './App.vue';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/body-css/dist/index.css';
import '@utrecht/root-css/dist/index.css';
import '@utrecht/logo-css/dist/index.css';
import '@utrecht/surface-css/dist/index.css';
import '@utrecht/link-list-css/dist/index.css';
import './style.css';
import { UtrechtComponentLibrary } from '@utrecht/web-component-library-vue';

createApp(App).use(UtrechtComponentLibrary).mount('#app');
