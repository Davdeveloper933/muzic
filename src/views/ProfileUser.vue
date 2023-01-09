<template>
	<!-- start section profile -->
	<section class="profile">
		<div class="container">

			<ProfileUserTop :img="profile.img" :name="profile.name" :desc="profile.desc" :cat="profile.cat"/>
			<ProfileUserBottom :sendText="aside.sendText" :list="aside.list" :socialList="socialList"  :price="profile.price"/>

		</div>
	</section>
	<!-- end section profile -->
</template>

<script setup>
// @ is an alias to /src
import ProfileUserBottom from '@/components/profile/ProfileUserBottom.vue'
import ProfileUserTop from '@/components/profile/ProfileUserTop.vue'

import {ref} from "vue";
import {useUserStore} from "@/stores/User";
import {storeToRefs} from "pinia";

const user = useUserStore()
const {profile} = storeToRefs(user)

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
        url: ''
      }
    ])
const aside = ref({
      sendText: 'Отправить музыку',
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