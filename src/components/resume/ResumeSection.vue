<template>
  <div class="section">
    <h2 class="section-header">{{ title }}</h2>
    <div class="section-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped lang="scss">
  .section {
    margin: 20px 5px;

    & .section-header {
      margin-bottom: 10px;
    }

    & .section-content {
      margin-left: 5px;
    }

  }
</style>
