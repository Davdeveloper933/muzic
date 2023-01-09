<template>
  <input
    class="input typography-button"
    :placeholder="placeholder"
    :type="type"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
  },
};
</script>

<style lang="sass">
.input
  padding: 0 20px
  height: 60px
  flex-grow: 1
  border: 1px solid $outline
  border-radius: 10px
  outline: none
  &::placeholder
    color: $light-blue
</style>