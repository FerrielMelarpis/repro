import Quasar from 'quasar';
import Vuelidate from 'vuelidate';
import AxiosPlugin from './axios';
import ToastPlugin from './toast';
import i18nPlugin from './i18n';
import GoogleAPIPlugin from './google-api';
import JWTPlugin from './jwt';
import VueClipboards from 'vue-clipboards';

export default [
    Quasar,
    Vuelidate,
    AxiosPlugin,
    ToastPlugin,
    i18nPlugin,
    GoogleAPIPlugin,
    JWTPlugin,
    VueClipboards,
];
