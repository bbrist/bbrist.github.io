<template>
  <div class="chip-items">
    <template v-if="items && items.length > 0">
      <div>
        <v-chip v-for="(item, i) in items" :key="i" small>
          {{ item }}
        </v-chip>
      </div>
    </template>
    <template v-else>
      <div style="font-weight: 300">No Items</div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ChipsList',
  props: ['items'],
};
</script>

<style lang="scss" scoped>
  .chip-items {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;

    & .v-chip {
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
</style>
