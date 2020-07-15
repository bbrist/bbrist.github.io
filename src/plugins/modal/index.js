import ModalView from '@/plugins/modal/components/ModalView.vue';

export const defaults = {
  value: false,
  width: 700,
};

class ModalPlugin {
  constructor(options = {}) {
    this.init({ ...options, ...defaults });
  }

  init(options) {
    this.value = options.value;
    this.width = options.width;
  }

  install(Vue, options = {}) {
    this.init({ ...defaults, ...options });

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$modal = this;

    this.events = new Vue();

    Vue.component('modal-view', ModalView);

    console.debug('Installing Modal');
  }

  open(component, props = {}, width = -1) {
    this.toggle(true);
    this.events.$emit('show', {
      component,
      props,
      value: true,
      width: (width === -1) ? this.width : width,
    });
  }

  hide() {
    this.events.$emit('hide');
  }

  toggle(value = undefined) {
    const open = (value === undefined) ? !this.value : value;
    this.events.$emit('toggle', open);
  }

  onOpen(callback) {
    this.events.$on('show', callback);
  }

  onHide(callback) {
    this.events.$on('hide', callback);
  }

  onToggle(callback) {
    this.events.$on('toggle', callback);
  }
}

export default new ModalPlugin(defaults);
