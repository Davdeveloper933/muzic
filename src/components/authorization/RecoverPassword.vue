<template>
  <div
      v-if="isRecoverPassword"
      class="v-login-curator__confirm"
  >
    <h2 class="v-login-curator__confirm-mail title_h2">{{ loginInput }}</h2>
    <h2 class="v-login-curator__confirm-description title_h2">На указанную вами почту, отправлено письмо. Перейдите по ссылке в письме для подтверждения почты</h2>
  </div>
  <div v-else class="v-login-curator container-narrow">
    <base-block class="v-login-curator__block">
      <h1 class="v-login-curator__title typography-title">Восстановление пароля</h1>
      <form class="v-login-curator__form">
        <base-input
          id="login"
          label="Email или Логин"
          placeholder="email@gmail.com"
          v-model="loginInput"
        />
        <base-button
            title="Восстановить"
            :primary="true"
            @click="recoverPassword"
        />
      </form>
    </base-block>
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

    const {setRecoverPasswordRequest} = auth
    const {isRecoverPassword} = storeToRefs(auth)

    const changeVisibility = () => {
      if (icon.value === "eye") {
        icon.value = "eye-closed";
        type.value = "text";
      } else {
        icon.value = "eye";
        type.value = "password";
      }
    }

    const recoverPassword = () => {
      const recoverFormData = {
        email: loginInput.value,
      }

      setRecoverPasswordRequest(recoverFormData)
    }

    return {
      loginInput,
      passwordInput,
      icon,
      type,
      isRecoverPassword,
      recoverPassword,
      changeVisibility,
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

  &__confirm
    width: 840px
    display: flex
    margin: 0 auto
    text-align: center
    flex-direction: column
    justify-content: center
    align-items: center

  &__confirm-description
    color: $label

  &__confirm-mail
    color: $accent
</style>
