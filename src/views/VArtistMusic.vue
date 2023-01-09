<template>
  <div class="v-artist-music">
    <div class="container">
      <profile-top
          :isEdit="isEdit"
          :img="profile.img"
          :name="profile.name"
          :desc="profile.desc"
          :userType="userType"
      />
      <profile-bottom
          :isEdit="isEdit"
          :buttonText="aside.buttonText"
          :list="aside.list"
          :socialList="socialList"
          :price="profile.price"
          :musical="true"
          :styles="styles"
          :addMusic="true"
          :userType="userType"
      />
    </div>
  </div>
</template>

<script setup>
import ProfileTop from "@/components/profile/ProfileTop.vue";
import ProfileBottom from "@/components/profile/ProfileBottom.vue";

import {onMounted, ref} from "vue";
import {useAuthStore} from "@/stores/AuthStore";
import {storeToRefs} from "pinia";
import {useUserStore} from "@/stores/User";

const auth = useAuthStore()
const user = useUserStore()
const {isEdit, userType} = storeToRefs(auth)
const {profile} = storeToRefs(user)
const {getUserInfo} = user

const socialList = ref([
  {
    name: "yandex",
    icon: require("@/assets/img/yandex-music.svg"),
    url: "#",
  },
  {
    name: "vk",
    icon: require("@/assets/img/vk.svg"),
    url: "#",
  },
  {
    name: "youtube",
    icon: require("@/assets/img/youtube.svg"),
    url: "",
  },
  {
    name: 'web',
    icon: require('@/assets/img/web.svg'),
    url: '#'
  }
])
const aside = ref({
  buttonText: "Рецензировать за:",
  list: [
    {
      icon: require("@/assets/img/playlist.svg"),
      text: "Треков",
      count: 139,
    },
    {
      icon: require("@/assets/img/recens.svg"),
      text: "Рецензий",
      count: 43,
    },
    {
      icon: require("@/assets/img/like.svg"),
      text: "Одобрено",
      count: 96,
    },
  ],
})
const styles = ref([
  {
    list: [
      "дрим-поп",
      "метал",
      "хардкор",
      "альтернативный рок",
      "edm",
      "трэп",
      "неопсиходелия",
      "гаражный рок",
      "мамбл рэп",
      "r&b",
    ],
  },
])

onMounted(() => {
  getUserInfo()
})
</script>

<style lang="sass" scoped>
.v-artist-music
  padding-top: 80px
  background-color: $background
</style>
