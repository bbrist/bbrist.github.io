<template>
  <div class="skill">
    <v-card outlined >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            {{ category }}
          </div>
          <v-list-item-title class="headline mb-1">{{ name }}</v-list-item-title>
          <!--<v-list-item-subtitle>{{ category }}</v-list-item-subtitle>-->
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
        >
          <v-img :src="logo" />
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn text x-small @click="show">Click to see more</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import DetailsModal from '@/components/resume/DetailsModal.vue';

export default {
  name: 'Skill',
  props: {
    name: String,
    category: String,
    logo: String,
    details: String,
  },
  methods: {
    show() {
      this.$modal.open(DetailsModal, {
        title: this.name,
        subtitle: this.text,
        details: this.details,
      });
    },
  },
};
</script>
