<template>
  <div class="v-login-curator container-narrow">
    <base-block class="v-login-curator__block">
      <h1 class="v-login-curator__title typography-title">Вход</h1>
      <form class="v-login-curator__form">
        <base-input
          id="login"
          label="Email или Логин"
          placeholder="email@gmail.com"
          v-model="loginInput"
        />
        <base-input
          id="password"
          :type="type"
          label="Пароль"
          placeholder="Введите пароль"
          :icon="icon"
          v-model="passwordInput"
          @button-click="changeVisibility"
        />
        <base-button
            title="Войти"
            :primary="true"
            @click="signIn"
        />
<!--        <base-social text="Или войти с помощью" />-->
      </form>
    </base-block>
    <p class="v-login-curator__account typography-text">
      Забыли пароль?
      <button
          class="v-login-curator__link"
          @click="recoverPassword"
      >Восстановить
      </button
      >
    </p>
  </div>
</template>

<script>
import BaseBlock from "@/components/base1/BaseBlock.vue";
import BaseInput from "@/components/base1/BaseInput.vue";
import BaseButton from "@/components/base1/BaseButton.vue";
import BaseSocial from "@/components/base1/BaseSocial.vue";

import {useAuthStore} from "@/stores/AuthStore";
import {storeToRefs} from "pinia";
import {ref} from "vue";

export default {
  name: "VLoginCurator",
  components: {
    BaseBlock,
    BaseInput,
    BaseButton,
    BaseSocial,
  },
  props: {
    signInForm: {
      type: Object,
      default: () => ({})
    },
  },
  setup() {
    const loginInput = ref("")
    const passwordInput = ref("")
    const icon = ref("eye")
    const type = ref("password")
    const auth = useAuthStore()

    const {setSignInRequest, setCurrentForm, setUserType} = auth

    const changeVisibility = () => {
      if (icon.value === "eye") {
        icon.value = "eye-closed";
        type.value = "text";
      } else {
        icon.value = "eye";
        type.value = "password";
      }
    }

    const signIn = () => {
      const signInFormData = {
        email: loginInput.value,
        password: passwordInput.value,
      }

      setSignInRequest(signInFormData)
    }

    // ToDo исправить как появится api авторизации
    const signInCurator = () => {
      setUserType('curator', true)
      signIn()
    }

    const signInArtist = () => {
      setUserType('artist', true)
      signIn()
    }

    const signInNoRegistration = () => {
      setUserType('', false)
      signIn()
    }


    const recoverPassword = () => {
      setCurrentForm('RecoverPassword')
    }

    return {
      loginInput,
      passwordInput,
      icon,
      type,
      changeVisibility,
      signIn,
      recoverPassword,
      signInCurator,
      signInArtist,
      signInNoRegistration
    }
  },
  methods: {

  },
};
</script>

<style lang="sass" scoped>
.v-login-curator
  +xs()
    margin-top: 23px
    margin-bottom: 23px

  &__title
    text-align: center
    margin-bottom: 40px

  &__block
    padding-bottom: 52px

    +xs()
      padding: 20px

  &__form
    display: flex
    flex-direction: column
    gap: 30px


  &__account
    font-size: 16px
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
