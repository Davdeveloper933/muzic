<template>
  <div class="b-social">
    <div class="b-social__lines">
      <div class="b-social__line"></div>
      <p class="b-social__text typography-text">
        {{ text }}
      </p>
      <div class="b-social__line"></div>
    </div>
    <div class="b-social__social">
      <base-button icon="yandex" :outline="true"></base-button>
      <base-button icon="vk" :outline="true"></base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base1/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    text: String,
  },
};
</script>

<style lang="sass" scoped>
.b-social
  &__lines
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 30px


  &__line
    flex-grow: 1
    height: 1px
    background-color: $border


  &__text
    padding: 0 10px
    text-align: center


  &__social
    display: flex
    gap: clamp(23px, 5%, 30px)
</style>
