<template>
  <div class="home">

    <div class="mb-5"></div>

    <h3>Pages</h3>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4"
               v-for="(page, i) in pages" :key="i">
          <v-card>
            <v-card-title>{{ page.name }}</v-card-title>
            <v-card-actions>
              <v-btn text @click="goto(page.link)">View</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    pages: [
      {
        name: 'Resume',
        link: '/resume',
      },
    ],
  }),
  methods: {
    goto(link) {
      this.$router.push(link);
    },
  },
};
</script>
