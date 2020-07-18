<template>
  <div class="skill">
    <v-card outlined >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            {{ category }}
          </div>
          <v-list-item-title class="headline mb-1">{{ name }}</v-list-item-title>
          <v-list-item-subtitle>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <v-rating dense readonly :value="rating * 5" small
                            empty-icon="mdi-cog-outline" full-icon="mdi-cog-outline" />
                </span>
              </template>
              <span>{{ level(rating * 5) }}</span>
            </v-tooltip>
          </v-list-item-subtitle>
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
import ProjectsModal from '@/components/resume/modal/ProjectsModal.vue';

export default {
  name: 'Skill',
  props: {
    name: String,
    category: String,
    logo: String,
    details: String,
    projects: Array,
    rating: Number,
  },
  methods: {
    show() {
      this.$modal.open(ProjectsModal, {
        title: this.name,
        subtitle: this.text,
        details: this.details,
        projects: this.projects,
      });
    },
    level(rating) {
      const v = parseInt(rating, 10);
      switch (v) {
        case 1:
          return 'Beginner';
        case 2:
          return 'Experienced';
        case 3:
        case 4:
          return 'Advanced';
        case 5:
          return 'Expert';
        default:
          return 'Experienced';
      }
    },
  },
};
</script>
