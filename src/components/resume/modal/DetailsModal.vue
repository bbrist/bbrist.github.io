<template>
  <div class="details-modal">
    <v-card outlined >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{ title }}</v-list-item-title>
          <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
          <v-list-item-content class="details" v-if="details" v-html="details" />
          <v-list-item-content v-else>
            <span>No Details</span>
          </v-list-item-content>
          <slot name="content"></slot>
        </v-list-item-content>

        <slot></slot>

        <v-list-item-avatar tile size="80" v-if="image">
          <v-img :src="image" />
        </v-list-item-avatar>
      </v-list-item>

      <v-btn text @click="close">Close</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'DetailsModal',
  props: {
    title: String,
    subtitle: {
      type: String,
      default: '',
    },
    details: String,
    image: Object,
  },
  methods: {
    close() {
      this.$modal.toggle(false);
    },
  },
};
</script>

<style lang="scss">
  .details {
    & p {
      margin-bottom: 10px !important;
    }
  }
</style>
