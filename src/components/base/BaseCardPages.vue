<template>
  <base-card class="card-pages">
    <div class="card-pages-quantity">
      <span class="card-pages-num typography-text-small">10</span>
      <base-icon name="chevron-small" />
    </div>
    <div class="card-pages-data">
      <p class="card-pages-data-text typography-text-small">
        Количество на странице
      </p>
    </div>
  </base-card>
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
.card-pages
  display: flex
  min-height: initial
  height: 60px
  padding: 0
  border-radius: 10px
  border: 1px solid $outline-dark
  +xs()
    width: 100%
    height: 52px
  &-quantity
    +flex()
    width: 111px
    cursor: pointer
    border-right: 1px solid $outline-dark
  &-num
    color: $dark
    font-weight: 600
  &-data
    width: 219px
    +flex()
    +xs()
      flex-grow: 1
      width: 100%
    &-text
      color: $light-blue
</style>