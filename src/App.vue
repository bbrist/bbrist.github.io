<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

    </v-app-bar>

    <v-main>
      <div class="d-flex justify-center">
        <div :style="`max-width: ${$vuetify.breakpoint.thresholds.sm}px; width: 100%`">
          <router-view />
        </div>
      </div>
    </v-main>

    <modal-view id="modal" v-model="modal"/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    modal: false,
  }),
};
</script>
