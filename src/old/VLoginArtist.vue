<template>
  <div class="v-registration-artist container-narrow">
    <base-block class="v-registration-artist__block">
      <h1 class="v-registration-artist__title typography-title">
        Вход артисты
      </h1>
      <form class="v-registration-artist__form" @submit.prevent="login">
        <base-input
          id="login"
          label="Email или Логин"
          placeholder="email@gmail.com"
        />
        <base-input
          id="password"
          :type="type"
          label="Пароль"
          placeholder="Введите пароль"
          :icon="icon"
          @button-click="changeVisibility"
        />
        <base-button title="Войти" :primary="true" />
      </form>
      <base-social text="Или войти с помощью" />
    </base-block>
    <p class="v-registration-artist__account typography-text">
      Нет аккаунта?
      <router-link to="/login/artist" class="v-registration-artist__link"
        >Зарегистрироваться</router-link
      >
    </p>
  </div>
</template>

<script>
import BaseBlock from "@/components/base1/BaseBlock.vue";
import BaseInput from "@/components/base1/BaseInput.vue";
import BaseButton from "@/components/base1/BaseButton.vue";
import BaseSocial from "@/components/base1/BaseSocial.vue";

export default {
  name: "VLoginCurator",
  components: {
    BaseBlock,
    BaseInput,
    BaseButton,
    BaseSocial,
  },
  data() {
    return {
      icon: "eye",
      type: "password",
    };
  },
  methods: {
    login() {},
    changeVisibility() {
      if (this.icon === "eye") {
        this.icon = "eye-closed";
        this.type = "text";
      } else {
        this.icon = "eye";
        this.type = "password";
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.v-registration-artist
  margin-top: 95px
  margin-bottom: 123px
  +xs()
    margin-top: 23px
    margin-bottom: 23px

  &__title
    text-align: center
    margin-bottom: 40px


  &__form
    display: flex
    flex-direction: column
    gap: 30px
    margin-bottom: 30px


  &__account
    font-weight: 600
    text-align: center
    margin-top: 13px


  &__link
    color: $accent
    text-decoration: none
    font-weight: 600
    transition: 0.3s ease
    &:hover
      opacity: 0.9
</style>
