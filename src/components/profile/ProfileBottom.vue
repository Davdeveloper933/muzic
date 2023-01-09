<template>
  <div class="profile__bottom">
    <div class="profile__aside">
      <button v-if="isEdit && userType === 'curator'" class="profile__aside-edit btn">
        {{ buttonText }}
        <input
            id="price"
            contenteditable
            :value="price"
            maxlength="4"
            @input="setNewPrice"
        />
        <label for="price">кр.</label>
      </button>
      <div
          class="profile__top-desc profile__top-desc--mobile"
      >
        <p
            v-for="(paragraph, index) in desc"
            :key="index"
        >{{ paragraph }}</p>
      </div>
      <ProfileList :list="list" v-if="list"/>
      <div class="profile__musical" v-if="musical">
        <MusicalStyleItem
            :list="adoredStylesList"
            :isEdit="isEdit"
            @removeItemFromStyles="removeItemFromStyles"
        />
        <musical-style-item
            v-for="(item, index) in styles"
            :key="index"
            :isEdit="false"
            :category="item"
            musicButtonAddText="+ редактировать"
        />
      </div>
      <Social :socialList="socialList" :isEdit="isEdit" v-if="socialList"/>
    </div>
    <div class="profile__more">
      <Playlist
          v-if="!addMusic"
          :playlist="playlist"
          :isEdit="isEdit"
          />
      <div
          v-if="!addMusic"
          class="musical-style">
        <h2 class="musical-style__title title_h2" data-editable>
          <span data-edit>Музыкальные стили</span>
        </h2>
        <div class="musical-style__list">
          <MusicalStyleItem
              :icon="require('@/assets/img/adore.png')"
              name="обожаю"
              :list="adoredStylesList"
              :isEdit="isEdit"
              @removeItemFromStyles="removeItemFromStyles"
          />
          <MusicalStyleItem
              :icon="require('@/assets/img/love.png')"
              name="люблю"
              :list="likedStylesList"
              :isEdit="isEdit"
              @removeItemFromStyles="removeItemFromStyles"
          />
          <MusicalStyleItem
              :icon="require('@/assets/img/not-love.png')"
              name="не присылать"
              :list="hatedStylesList"
              :isEdit="isEdit"
              @removeItemFromStyles="removeItemFromStyles"
          />
        </div>
      </div>
      <div class="profile-add-music" v-if="addMusic">
        <transition>
          <button
              class="profile-add-music__button"
              @click="addMusicField"
              v-if="!musicField"
          >
            Добавить музыку
          </button>
        </transition>
        <transition>
          <add-music
              v-if="musicField"
              @button-click="musicField = !musicField"
          />
        </transition>
        <div class="songs">
          <review-card
              v-for="file in musicFiles"
              :key="file.title"
              :music-file="file"
              :review1="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileList from "@/components/profile/ProfileList.vue";
import Social from "@/components/Social.vue";
import Playlist from "@/components/playlist/Playlist.vue";
import MusicalStyleItem from "@/components/musical-style/MusicalStyleItem.vue";
import AddMusic from "@/components/player/AddMusic.vue";
import ReviewCard from "@/components/review/ReviewCard.vue";

import {ref} from "vue";
import {useUserStore} from "@/stores/User";
import {storeToRefs} from "pinia";
import {computed} from "@vue/runtime-core";

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: ''
  },
  list: {
    type: Array,
    default: () => ([])
  },
  socialList: {
    type: Array,
    default: () => ([])
  },
  price: {
    type: [Number, String],
  },
  musical: {
    type: Boolean,
    default: false
  },
  styles: {
    type: Array,
    default: () => ([])
  },
  addMusic: {
    type: Boolean,
    default: false
  },
  userType: {
    type: String,
    default: ''
  },
  desc: {
    type: Array,
    default: () => ([])
  },
  playlist: {
    type: Array,
    default: () => ([])
  },
})
const user = useUserStore()
const {musicStyles, adoredStyles, likedStyles, hatedStyles} = storeToRefs(user)
const {getMusicStyles, updateUserPrice} = user

const musicField = ref(false)
const musicFiles = ref([
  {
    artist: "DJ Dark & MD DJ",
    title: "Erhu (Original Mix)",
    src: require("@/assets/mp3/Erhu.mp3"),
    artwork: require("@/assets/mp3/Erhu.png"),
    genres: ["deep house", "dance", "house"],
    demo: false,
    comments: [],
    yandex: false,
    headerControl: true,
  },
  {
    artist: "KVPV",
    title: "Sunshine",
    src: require("@/assets/mp3/Sunshine.mp3"),
    artwork: require("@/assets/mp3/Sunshine.png"),
    genres: ["deep house", "dance"],
    demo: true,
    comments: [
      "Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом.",
    ],
    yandex: false,
    headerControl: true,
  },
  {
    artwork: require("@/assets/mp3/Sunshine.png"),
    genres: ["deep house", "dance"],
    comments: [
      "Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом.",
    ],
    yandex: true,
    headerControl: true,
  },
])

// const adoredStyles = computed(() => {
//   return getMusicStyles('обожаю')
// })
// const likedStyles = computed(() => {
//   return getMusicStyles('люблю')
// })
// const hatedStyles = computed(() => {
//   return getMusicStyles('не присылать')
// })

const adoredStylesList = ref(adoredStyles.value)
const likedStylesList = ref(likedStyles.value)
const hatedStylesList = ref(hatedStyles.value)

const removeItemFromStyles = (index, name) => {
  switch (name) {
    case 'обожаю':
      adoredStylesList.value.splice(index, 1)
      break;
    case 'люблю':
      likedStylesList.value.splice(index, 1)
      break;
    case 'не присылать':
      hatedStylesList.value.splice(index, 1)
      break;
  }
}

const setNewPrice = (evt) => {
  setTimeout(() => {
    console.log(evt.target.value);
    updateUserPrice(evt.target.value)
  }, 3000)

}

const addMusicField = () => {
  console.log("hello");
  musicField.value = true;
}
</script>

<style lang="sass" scoped>
.profile__musical
  margin-bottom: 30px

.profile-add-music
  &__button
    background-color: #FFEEEE
    height: 60px
    width: 100%
    text-align: center
    border-radius: 10px
    border: 1px solid rgba(255, 108, 108, 0.2)
    font-weight: 600
    font-size: 16px
    line-height: 19px
    color: #FF6C6C

.songs
  margin-top: 36px
  display: flex
  flex-direction: column
  gap: 30px
</style>
