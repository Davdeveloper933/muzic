<template>
  <div class="main-layout">
    <the-header />
    <main class="main-layout-content">
      <router-view></router-view>
    </main>
    <the-footer />
  </div>
  <base-modal v-if="isModalActive" />
</template>

<script setup>
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import BaseModal from "@/components/base/BaseModal.vue";
import {useModalStore} from "@/stores/Modal";
import {storeToRefs} from "pinia";

const modal = useModalStore()
const {isModalActive} = storeToRefs(modal)

</script>

<style lang="sass" scoped>
.main-layout
  display: flex
  flex-direction: column
  min-height: 100vh
  background-color: #F6F7FF
  &-content
    flex-grow: 1
    display: flex
    flex-direction: column
    justify-content: center
    //align-items: center
</style>
