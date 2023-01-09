<template>
  <div class="wallet">
    <div class="container wallet-inner">
      <div class="wallet-left">
        <h2 class="wallet-title typography-title">Кошелёк</h2>
        <base-card class="wallet-card">
          <span class="wallet-card-title typography-subtitle">1305 кр</span>
          <base-button
            class="wallet-card-button primary typography-button"
            title="Вывести"
          />
        </base-card>
      </div>
      <div class="wallet-right">
        <h2 class="wallet-title typography-title">История платежей</h2>
        <div class="wallet-pay">
          <base-card-payment
            v-for="(payment, index) in payments"
            :payment="payment"
            :key="index"
          />
          <div class="wallet-data">
            <base-card-pages />
            <base-card-pagination />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";
import BaseCard from "@/components/base/BaseCard.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseCardPayment from "@/components/base/BaseCardPayment.vue";
import BaseCardPages from "@/components/base/BaseCardPages.vue";
import BaseCardPagination from "@/components/base/BaseCardPagination.vue";

export default {
  components: {
    BaseIcon,
    BaseCard,
    BaseCardPayment,
    BaseCardPages,
    BaseCardPagination,
    BaseButton,
  },
  data() {
    return {
      payments: [
        { user: "@electricfuneralrecords", sum: 15 },
        { user: "@deafheaven", sum: 15 },
        { user: "@deafheaven", sum: 55 },
        { user: "@electricfuneralrecords", sum: 15 },
        { user: "@electricfuneralrecords", sum: 15 },
        { user: "@deafheaven", sum: 15 },
        { user: "@deafheaven", sum: 55 },
        { user: "@electricfuneralrecords", sum: 15 },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.wallet
  padding-top: 80px
  padding-bottom: 100px
  +xs()
    padding-top: 40px
    padding-bottom: 80px
  &-left
    width: 33%
    +lg()
      width: fit-content
    +xs()
      width: 100%
  &-right
    width: 66%
    +lg()
      width: fit-content
    +xs()
      width: 100%
  &-inner
    display: flex
    align-items: flex-start
    gap: 30px
    +lg()
      flex-direction: column
    +xs()
      gap: 80px
  &-title
    margin-bottom: 40px
    +xs()
      margin-bottom: 20px
  &-card
    +flex($jc: space-between)
    gap: 20px
    +xs()
      flex-direction: column
      gap: 15px
      align-items: flex-start
      padding: 20px
    &-button
      +xs()
        flex-grow: 1
        width: 100%
  &-data
    +flex($jc: space-between)
    gap: 10px
    flex-wrap: wrap
    margin-top: 30px
    +xs()
      margin-top: 15px
      flex-direction: column-reverse
      gap: 10px
  &-pay
    display: flex
    flex-direction: column
    gap: 10px
    +xs()
      gap: 5px
</style>