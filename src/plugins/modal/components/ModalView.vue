<template>
  <v-dialog v-model="open" :width="width">
    <component :is="component" v-bind="props" />
  </v-dialog>
</template>

<script>
import DefaultModal from '@/plugins/modal/components/DefaultModal.vue';

// eslint-disable-next-line import/no-cycle
import { defaults } from '../index';

export default {
  name: 'ModalView',
  data: () => ({
    open: false,
    component: DefaultModal,
    props: {
      text: 'No Modal',
    },
    width: defaults.width,
  }),
  beforeMount() {
    this.$modal.onOpen((params) => {
      this.open = params.value;
      this.component = params.component;
      this.props = params.props;
      this.width = params.width;
      console.debug('Opened Modal', params);
    });
    this.$modal.onHide(() => {
      this.open = false;
    });
    this.$modal.onToggle((state) => {
      this.open = state;
    });
  },
};

/* import VDialog from 'vuetify/lib/components/VDialog';

export default {
  name: 'ModalView',
  data: () => ({
    open: false,
  }),
  watch: {
    open(val) {
      this.$modal.isOpen = val;
    },
  },
  mounted() {
    this.open = this.$modal.isOpen;
  },
  render(h) {
    const self = this;
    return h(VDialog, {
      props: {
        width: this.$modal.width,
      },
      domProps: {
        value: self.open,
      },
      on: {
        // eslint-disable-next-line func-names
        'update:value': function (event) {
          self.open = event;
        },
      },
    }, [this.$modal.component]);
  },
};
*/
</script>
