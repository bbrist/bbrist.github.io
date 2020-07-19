<template>
  <details-modal :title="title" :subtitle="subtitle" :details="details" :image="image">
    <template v-slot:content>
      <v-list-item-content class="project-list">
        Projects {{ projects }}
      </v-list-item-content>
    </template>
  </details-modal>
</template>
<script>
import DetailsModal from '@/components/resume/modal/DetailsModal.vue';

export default {
  name: 'SkillsModal',
  components: { DetailsModal },
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
