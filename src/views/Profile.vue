<template>
	<section class="profile">
		<div class="container">
			<ProfileTop
          :isEdit="isEdit"
          :img="profile.img"
          :name="profile.name"
          :desc="profile.desc"
          :cat="profile.cat"
          :userType="userType"
      />
			<ProfileBottom
          :isEdit="isEdit"
          :buttonText="aside.buttonText"
          :list="aside.list"
          :socialList="socialList"
          :price="profile.price"/>
		</div>
	</section>
</template>

<script setup>
import ProfileBottom from '@/components/profile/ProfileBottom.vue'
import ProfileTop from '@/components/profile/ProfileTop.vue'
import {storeToRefs} from "pinia";

import {ref} from "vue";
import {useUserStore} from "@/stores/User";
import {useAuthStore} from "@/stores/AuthStore";

const user = useUserStore()
const auth = useAuthStore()

const {profile} = storeToRefs(user)
const {isEdit, userType} = storeToRefs(auth)

const socialList = ref([
  {
    name: 'yandex',
    icon: require('@/assets/img/yandex-music.svg'),
    url: '#'
  },
  {
    name: 'vk',
    icon: require('@/assets/img/vk.svg'),
    url: '#'
  },
  {
    name: 'youtube',
    icon: require('@/assets/img/youtube.svg'),
    url: '#'
  },
  {
    name: 'web',
    icon: require('@/assets/img/web.svg'),
    url: '#'
  }
])
const aside = ref({
  buttonText: 'Рецензировать за:',
  list: [
    {
      icon: require('@/assets/img/playlist.svg'),
      text: 'Взял в плейлист',
      count: 109,
    },
    {
      icon: require('@/assets/img/recens.svg'),
      text: 'Срецензировал',
      count: 43,
    },
    {
      icon: require('@/assets/img/react.svg'),
      text: 'Среагировал',
      count: 96,
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

</script>