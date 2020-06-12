<template>
  <div class="card__body">
    <div v-if="$slots.title || title">
      <slot name="title" style="color:white">{{ title }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {},
    bodyStyle: {},
    shadow: {
      type: String
    }
  }
}
</script>

<style scoped>
.card__body {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>