<template>
  <div class="project">
    <v-card outlined>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-text>{{ text }}</v-card-text>

      <v-card-actions>
        <v-btn text x-small @click="show">Click to see more</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import SkillsModal from '@/components/resume/modal/SkillsModal.vue';

export default {
  name: 'Project',
  props: {
    name: String,
    text: String,
    details: String,
    skills: Array,
  },
  methods: {
    show() {
      this.$modal.open(SkillsModal, {
        title: this.name,
        subtitle: this.text,
        details: this.details,
        skills: this.skills,
      });
    },
  },
};
</script>
