<template>
  <base-card class="card-payment">
    <p class="card-payment-text typography-text">
      <span class="card-payment-text-main">Рецензия для&nbsp;</span>
      <span class="card-payment-text-bold">{{ payment.user }}</span>
    </p>
    <span class="card-payment-sum typography-text"
      >+ {{ payment.sum }}кр</span
    ></base-card
  >
</template>

<script>
import BaseCard from "@/components/base/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
  props: {
    payment: {
      user: String,
      sum: [Number, String],
    },
  },
};
</script>

<style lang="sass" scoped>
.card-payment
  +flex($jc: space-between)
  gap: 10px
  +xs()
    padding: 20px
  &-text
    color: $dark
    +xs()
      text-overflow: ellipsis
      white-space: nowrap
      overflow: hidden
    &-main
      +xs()
        display: none
    &-bold
      font-weight: 600
      +xs()
        width: 100%
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
  &-sum
    color: $green
    font-weight: 600
    white-space: nowrap
    flex-shrink: 0
</style>