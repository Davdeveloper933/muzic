<template>
  <input class="b-checkbox__input" type="checkbox" :name="name" :id="id" />
  <label class="b-checkbox" :for="id">
    <div class="b-checkbox__circle-outer">
      <div class="b-checkbox__circle-inner"></div>
    </div>
    <span class="b-checkbox__text typography-text">{{ title }}</span>
  </label>
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    checked: {
      type: Boolean,
      default: false,
    },
    id: String,
  },
  // methods: {
  //   modelValue(event) {
  //     this.$emit("update:modelValue", event.target.value);
  //     console.log(event.target.value);
  //   },
  // },
};
</script>

<style lang="sass" scoped>
.b-checkbox
  background-color: $background-item
  height: 60px
  padding: 0 20px
  display: flex
  align-items: center
  border: 1px solid $border
  border-radius: 10px
  gap: 10px
  cursor: pointer
  user-select: none
  transition: 0.3s ease

  &:hover
    border: 1px solid darken($border, 20%)


  &__input
    width: 0.00000001px
    visibility: hidden
    position: absolute

    &:checked + label .b-checkbox__circle-outer .b-checkbox__circle-inner
      background-color: $accent
      width: 10px
      height: 10px
      border-radius: 50%
      flex-shrink: 0


    &:checked + label
      background: #ffeeee
      border-color: #ff6c6c



  &__circle-outer
    width: 20px
    height: 20px
    border-radius: 50%
    border: 1px solid $border-circle
    display: flex
    align-items: center
    justify-content: center
    flex-shrink: 0


  &__text
    white-space: nowrap
    color: $placeholder
    font-size: 16px
</style>
