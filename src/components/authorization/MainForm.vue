<template>
  <div class="v-login-curator container-narrow">
    <base-block class="v-login-curator__block">
        <base-button
            title="Авторизация"
            :primary="true"
            @click="signIn"
        />
      <br>
      <base-button
          title="Войти как куратор"
          :primary="true"
          @click="signInCurator"
      />
      <br>
      <base-button
          title="Войти как артист"
          :primary="true"
          @click="signInArtist"
      />
      <br>
      <base-button
          title="Страница куратора без регистрации"
          :primary="true"
          @click="signInCuratorNoRegistration"
      />
      <br>
      <base-button
          title="Страница артиста без регистрации"
          :primary="true"
          @click="signInArtistNoRegistration"
      />
      <br>
    </base-block>
  </div>
</template>

<script setup>
import BaseBlock from "@/components/base1/BaseBlock.vue";
import BaseButton from "@/components/base1/BaseButton.vue";
import {useAuthStore} from "@/stores/AuthStore";
import {useRouter} from "vue-router";

const auth = useAuthStore()
const router = useRouter()
const {setCurrentForm, setUserType, setSignInRequest} = auth

const signIn = () => {
  setCurrentForm('Login')
}

const signInCurator = () => {
  setUserType('curator', true)
  setSignInRequest({
    email: '',
    password: '',
  })
}

const signInArtist = () => {
  setUserType('artist', true)
  setSignInRequest({
    email: '',
    password: '',
  })
}

const signInCuratorNoRegistration = () => {
  setUserType('', false)
  router.push('/profile')
}

const signInArtistNoRegistration = () => {
  setUserType('', false)
  router.push('/artist/music')
}
</script>