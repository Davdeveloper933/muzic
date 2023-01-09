<template>
  <!-- start section profile -->
  <section class="profile">
    <span>{{ profile_playlists }}</span>
    <div class="container">
      <ProfileTop
          :isEdit="isEdit"
          :img="profile.user?.photo"
          :name="profile.user?.title"
          :desc="profile.user?.description"
          :cat="profile.curator_types"
          :userType="userType"
      />
      <ProfileBottom
          :isEdit="isEdit"
          :userType="userType"
          :buttonText="aside.buttonText"
          :list="aside.list"
          :socialList="socialList"
          :price="profile.price"
          :desc="profile.desc"
          :playlist="profile.playlists"
      />

    </div>
  </section>
  <!-- end section profile -->
</template>

<script setup>
import ProfileBottom from '@/components/profile/ProfileBottom.vue'
import ProfileTop from '@/components/profile/ProfileTop.vue'

import {onMounted, ref} from "vue";
import {useAuthStore} from "@/stores/AuthStore";
import {storeToRefs} from "pinia";
import {useUserStore} from "@/stores/User";
import {computed} from "@vue/runtime-core";

const auth = useAuthStore()
const user = useUserStore()
const {isEdit, userType} = storeToRefs(auth)
const {profile} = storeToRefs(user)
const {getUserInfo} = user

const social_yandex = computed(() => {
  return profile.value.user?.social_yandex
})
const social_vk = computed(() => {
  return profile.value.user?.social_vk
})
const social_soundcloud = computed(() => {
  return profile.value.user?.social_soundcloud
})
const social_website = computed(() => {
  return profile.value.user?.social_website
})
const count_playlists = computed(() => {
  return profile.value.count_playlists
})
const count_recensions = computed(() => {
  return profile.value.count_recensions
})
const count_reactions = computed(() => {
  return profile.value.count_reactions
})

const socialList = ref([
  {
    name: 'yandex',
    icon: require('@/assets/img/yandex-music.svg'),
    url: social_yandex
  },
  {
    name: 'vk',
    icon: require('@/assets/img/vk.svg'),
    url: social_vk
  },
  {
    name: 'youtube',
    icon: require('@/assets/img/youtube.svg'),
    url: social_soundcloud
  },
  {
    name: 'web',
    icon: require('@/assets/img/web.svg'),
    url: social_website
  }
])

const aside = ref({
  buttonText: 'Рецензировать за:',
  list: [
    {
      icon: require('@/assets/img/playlist.svg'),
      text: 'Взял в плейлист',
      count: count_playlists,
    },
    {
      icon: require('@/assets/img/recens.svg'),
      text: 'Срецензировал',
      count: count_recensions,
    },
    {
      icon: require('@/assets/img/react.svg'),
      text: 'Среагировал',
      count: count_reactions,
    },
    {
      icon: require('@/assets/img/like.svg'),
      text: 'Лайков на рецензии',
      count: 138,
    },
    {
      icon: require('@/assets/img/dislike.svg'),
      text: 'Дизлайков на рецензии',
      count: 256,
    }
  ]
})

onMounted(() => {
  getUserInfo()
})

</script>