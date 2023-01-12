<template>
  <input class="b-checkbox__input" type="checkbox" :checked="isChecked" :value="value" @change="updateInput" :name="name" :id="id" />
  <label class="b-checkbox" :for="id">
    <div class="b-checkbox__circle-outer">
      <div class="b-checkbox__circle-inner"></div>
    </div>
    <span class="b-checkbox__text typography-text">{{ title }}</span>
  </label>
</template>

<script>
export default {
  emits: ["change"],
  props: {
    name: String,
    title: String,
    checked: {
      type: Boolean,
      default: false,
    },
    id: String,
    value: { type: String },
    modelValue: { default: "" },
    trueValue: { default: true },
    falseValue: { default: false }
  },
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    }
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  },
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
  overflow: hidden

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
    max-width: 100%
    overflow: hidden
    text-overflow: ellipsis
</style>
