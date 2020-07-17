<template>
  <div class="resume">
    <div class="header" style="margin: 20px 5px">
      <h1>{{ resume.name }}</h1>
      <h3>{{ resume.title }}</h3>
    </div>

    <div class="d-flex justify-center flex-wrap">
      <div v-for="(link, i) in nav" :key="i">
        <v-btn text small @click="scrollToRef(link.ref)">
          {{ link.name }}
        </v-btn>
      </div>
    </div>

    <resume-section ref="about" title="About">
      <div style="margin: 0 10px;">
        <v-expansion-panels multiple tile>
          <expansion-section title="Background">
            <div v-html="resume.background"></div>
          </expansion-section>
          <expansion-section title="Professional Interests">
            <div v-html="resume.interests"></div>
          </expansion-section>
          <!--<expansion-section title="Personal Philosophies">

          </expansion-section>-->
          <expansion-section title="Hobbies and Personal Interests">
            <div v-html="resume.hobbies"></div>
          </expansion-section>
          <expansion-section title="Education">
            <div v-html="resume.education"></div>
          </expansion-section>
          <expansion-section title="Contact">
            <div v-html="resume.contact"></div>
          </expansion-section>
        </v-expansion-panels>
      </div>
    </resume-section>

    <resume-section ref="experience" title="Experience">
      <v-container>
        <v-row>
          <v-col cols="12" v-for="(job, i) in resume.experience" :key="i">
            <experience v-bind="job" />
          </v-col>
        </v-row>
      </v-container>
    </resume-section>

    <resume-section ref="skills" title="Skills & Languages">
      <!-- TODO: Add Filter Capability -->
      <!--<div>
        <span>Filter</span>
        <v-select
          v-model="selectedCategories"
          :items="skillCategories"
          chips
          label="Categories"
          multiple
          solo
        ></v-select>
      </div>-->
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4"
                 v-for="(skill, i) in skills" :key="i">
            <skill :name="skill.name" :logo="skill.image" :category="skill.category"
                   :details="skill.details" />
          </v-col>
        </v-row>
      </v-container>
    </resume-section>

    <resume-section ref="projects" title="Projects">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4"
                 v-for="(project, i) in resume.projects" :key="i">
            <project :name="project.name"
                     :text="project.description"
                     :details="project.details" />
          </v-col>
        </v-row>
      </v-container>
    </resume-section>

    <v-btn
      fixed
      dark
      fab
      bottom
      right
      color="primary"
      @click="$vuetify.goTo(0, { duration: 300, offset: 0, easing: 'easeInOutCubic'})"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Skill from '@/components/resume/Skill.vue';
import Project from '@/components/resume/Project.vue';
import Experience from '@/components/resume/Experience.vue';
import ResumeSection from '@/components/resume/ResumeSection.vue';
import ExpansionSection from '@/components/expansion/ExpansionSection.vue';

// import info from '@/data';
import scroll from '@/mixins/scroll';

export default {
  name: 'Resume',
  mixins: [scroll],
  components: {
    Skill, Project, ExpansionSection, ResumeSection, Experience,
  },
  computed: {
    resume() {
      return this.$site.resume;
    },
    skills() {
      return this.resume.skills;
    },
    skillCategories() {
      return this.resume.skills
        .map((s) => ({
          text: s.category,
          value: s.type.id,
        }));
    },
  },
  data: () => ({
    selectedCategories: [],
    nav: [
      {
        name: 'About',
        ref: 'about',
      },
      {
        name: 'Experience',
        ref: 'experience',
      },
      {
        name: 'Skills & Languages',
        ref: 'skills',
      },
      {
        name: 'Projects',
        ref: 'projects',
      },
    ],
  }),
};
</script>

<style scoped lang="scss">

  .resume .header {
    margin: 0 5px;
  }

  .page-nav {
    display: flex;
    justify-content: center;

    & > ul {
      display: inline-flex;
      list-style: none;

      & > li {

        &:after {
          content: '|';
        }

        &:last-child:after {
          content: '';
        }

        & > * {
          padding: 4px;
        }

      }

    }

  }
</style>
