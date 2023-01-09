<template>
  <button class="button">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="sass">
.primary
  background-color: $red
  border-radius: 10px
  padding: 0 57px
  min-height: 60px
  color: $light
  white-space: nowrap
</style>