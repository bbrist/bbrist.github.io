<template>
  <details-modal :title="title" :subtitle="subtitle" :details="details" :image="image">
    <template v-slot:content>
      <v-list-item-content class="project-list">
        Projects <chips-list :items="projects" />
      </v-list-item-content>
    </template>
  </details-modal>
</template>
<script>
import DetailsModal from '@/components/resume/modal/DetailsModal.vue';
import ChipsList from '@/components/ChipsList.vue';

export default {
  name: 'SkillsModal',
  components: { ChipsList, DetailsModal },
  props: {
    title: String,
    subtitle: {
      type: String,
      default: '',
    },
    details: String,
    image: Object,
    projects: Array,
  },
};
</script>

<style scoped lang="scss">

</style>
