<template>
  <button
    class="b-button"
    :class="{
      'b-button__transparent': transparent,
      'b-button__primary': primary,
      'b-button__outline': outline,
    }"
    type="button"
    @click="$emit('button-click')"
  >
    <span class="b-button__title typography-text" v-if="title">{{
      title
    }}</span>
    <base-icon
      :name="icon"
      :width="width"
      :height="height"
      :fill="fill"
      v-if="icon"
    />
  </button>
</template>

<script>
import BaseIcon from "@/components/base1/BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
  props: {
    title: String,
    icon: String,
    width: [String, Number],
    height: [String, Number],
    fill: String,
    transparent: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="sass" scoped>
.b-button
  display: flex
  align-items: center
  justify-content: center
  gap: 5px
  border: none
  outline: none
  cursor: pointer
  user-select: none
  background-color: transparent
  flex-shrink: 0
  transition: 0.3s ease

  &:hover
    opacity: 0.9


  &__transparent
    height: 60px
    padding: 0 20px


  &__primary
    background-color: $accent
    height: 60px
    border-radius: 10px
    flex-grow: 1
    font-weight: 600
    width: 100%
    span
      color: #fff
      font-weight: 600
      font-size: 16px
      line-height: 19px


  &__outline
    background-color: $accent-input
    border: 1px solid $accent-border
    border-radius: 10px
    height: 60px
    flex-grow: 1
</style>
