<template>
  <base-card class="card-pagination">
    <button class="card-pagination-arrow">
      <base-icon name="chevron-large" />
    </button>
    <button class="card-pagination-num">
      <span class="card-pagination-num-text">1</span>
    </button>
    <button class="card-pagination-num">
      <span class="card-pagination-num-text">2</span>
    </button>
    <button class="card-pagination-num">
      <span class="card-pagination-num-text">...</span>
    </button>
    <button class="card-pagination-num">
      <span class="card-pagination-num-text">5</span>
    </button>
    <button class="card-pagination-arrow">
      <base-icon name="chevron-large" /></button
  ></base-card>
</template>

<script>
import BaseCard from "@/components/base/BaseCard.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";

export default {
  components: {
    BaseCard,
    BaseIcon,
  },
};
</script>

<style lang="sass" scoped>
.card-pagination
  border-radius: 10px
  height: 60px
  min-height: initial
  padding: 0
  overflow: hidden
  display: flex
  border: 1px solid $outline-dark
  +xs()
    height: 52px
    width: 100%
  > *:not(:last-child)
    border-right: 1px solid $outline-dark
  &-arrow
    width: 108px
    transition: .15s
    +flex
    +xs()
      width: 100%
      flex-grow: 1
    &:last-child svg
      transform: rotate(-180deg)
    &:hover,
    &:active
      background-color: $dark-blue
  &-num
    width: 60px
    transition: .15s
    +flex()
    +xs()
      aspect-ratio: 1 / 1
      width: auto
    &:hover,
    &:active
      background-color: $dark-blue-hover
      .card-pagination-num-text
        color: $dark
    &-text
      color: $light-blue
      font-weight: 600
</style>