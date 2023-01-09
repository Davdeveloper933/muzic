<template>
  <div class="w-artist">
    <div class="container w-artist-inner">
      <div class="w-artist-block">
        <h1 class="w-artist-block-title typography-h1">Кошелек</h1>
        <div class="w-artist-block-inner">
          <base-card class="w-artist-data">
            <div class="w-artist-data-top">
              <div class="w-artist-data-el">
                <span class="w-artist-data-subtitle typography-button">
                  В наличии
                </span>
                <span class="w-artist-data-title typography-subtitle"
                  >1305 кр</span
                >
              </div>
              <div class="w-artist-data-el">
                <span class="w-artist-data-subtitle typography-button">
                  Заблокировано
                </span>
                <span class="w-artist-data-title typography-subtitle"
                  >420 кр</span
                >
              </div>
            </div>
            <div class="w-artist-data-toggle">
              <base-switch />
              <p class="w-artist-data-toggle-text typography-button">
                не отправлять автоматически последние 10 кр
              </p>
            </div>
          </base-card>
          <base-card class="w-artist-balance">
            <span class="w-artist-balance-title typography-subtitle"
              >Пополнение баланса</span
            >
            <div class="w-deposit">
              <base-input class="w-deposit-input" placeholder="Введите сумму" />
              <base-button
                class="primary typography-button w-deposit-button"
                title="Пополнить счет"
              />
            </div>
          </base-card>
        </div>
      </div>
      <div classs="w-payment">
        <h2 class="w-payment-title typography-title">История платежей</h2>
        <div class="w-payment-block">
          <base-card-payment
            v-for="(payment, index) in payments"
            :payment="payment"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/base/BaseCard.vue";
import BaseSwitch from "@/components/base/BaseSwitch.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseCardPayment from "@/components/base/BaseCardPayment.vue";

export default {
  components: {
    BaseCard,
    BaseSwitch,
    BaseButton,
    BaseInput,
    BaseCardPayment,
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

<style lang="sass">
.w-artist
  padding-top: 80px
  padding-bottom: 100px
  +xs()
    padding-top: 40px
    padding-bottom: 80px
  &-block
    margin-bottom: 100px
    +xs()
      margin-bottom: 80px
    &-inner
      +flex()
      gap: 30px
      +lg()
        flex-direction: column
        align-items: flex-start
        max-width: 580px
    &-title
      display: inline-block
      margin-bottom: 40px
      +xs()
        margin-bottom: 20px
  &-data
    flex-basis: 50%
    padding: 30px !important
    +lg()
      flex-basis: initial
      width: 100%
    +xs()
      padding: 20px !important
    &-top
      +flex($jc: space-between)
      margin-bottom: 50px
      gap: 20px
      flex-wrap: wrap
      +xs()
        flex-direction: column
        gap: 16px
        align-items: flex-start
        margin-bottom: 30px
    &-subtitle
      font-weight: 500
      color: $light-blue
    &-el
      +flex()
      gap: 10px
    &-toggle
      display: flex
      align-items: center
      gap: 13px
      +xs()
        gap: 10px
      &-text
        color: $light-blue
        font-weight: 400 !important
        +xs()
          color: $text
  &-balance
    flex-basis: 50%
    padding: 30px !important
    +lg()
      flex-basis: initial
      width: 100%
    +xs()
      padding: 20px !important
    &-title
      display: inline-block
      margin-bottom: 20px
      +xs()
        margin-bottom: 15px

.w-deposit
  display: flex
  align-items: center
  width: 100%
  gap: 20px
  +xs()
    flex-direction: column
  &-input
    width: 100%
    font-weight: 400 !important
  &-button
    +xs()
      width: 100%

.w-payment
  &-title
    margin-bottom: 40px
    +xs()
      margin-bottom: 20px
  &-block
    display: flex
    flex-direction: column
    gap: 10px
    +xs()
      gap: 5px
</style>