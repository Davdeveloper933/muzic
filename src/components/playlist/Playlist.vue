<template>
  <div class="playlist">
    <h2 class="playlist__title title_h2" data-editable>
      <span data-edit>{{ title }}</span>
    </h2>
    <div class="playlist__list" v-if="playlist.length !== 0">
      <PlaylistItem v-for="(item, index) in loadPlaylist"
                    :key="index"
                    :index="index"
                    :link="item.link"
                    :img="item.img"
                    :name="item.name"
                    :text="item.text"
                    :isEdit="isEdit"
                    :playlist="playlist"
      />
    </div>
    <div class="playlist__btns">
      <button
          v-if="playlist.length !== 0 && playlist.length > playlistCount * playlistStep"
          class="playlist__btn playlist__btn_show-more btn"
          @click="playlistStep++"
      >{{ showMoreText }}
      </button>
      <button
          class="playlist__btn playlist__btn_add-playlist btn btn_fill"
          @click="showAddPlaylistModal"
      >{{ addPlaylist }}
      </button>
    </div>
  </div>
</template>

<script setup>
import PlaylistItem from '@/components/playlist/PlaylistItem.vue'
import {ref} from "vue";
import {computed} from "@vue/runtime-core";
import {useModalStore} from "@/stores/Modal";

const modal = useModalStore()
const {toggleModal, setCurrentModal} = modal

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false
  },
  playlist: {
    type: Array,
    default: () => ([])
  }
})

const title = ref('Плейлисты')
const showMoreText = ref('Показать ещё')
const addPlaylist = ref('Добавить плейлист')
const playlistCount = ref(4)
const playlistStep = ref(1)

const loadPlaylist = computed(() => {
  return props.playlist.slice(0, playlistCount.value * playlistStep.value)
})

const showAddPlaylistModal = () => {
  toggleModal()
  setCurrentModal('AddPlaylistModal', 'Добавьте Ваш плейлист на ВК или Яндекс-музыке')
}
</script>
