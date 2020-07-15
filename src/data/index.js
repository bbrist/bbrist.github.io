import resume from '@/data/resume';

export default {
  resume,

  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$site = this;

    console.debug('Installing Site Data');
  },

};
