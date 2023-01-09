<template>
  <div class="ya-player">
    <track-thumb
        class="ya-player__thumb"
        :track-artwork="trackArtwork"
        :image="true"
    />
    <div class="ya-player__wrapper">
      <iframe
          frameborder="0"
          style="border: none;"
          src="https://music.yandex.ru/iframe/#track/109240677/24171319"
      >Слушайте
        <a href="https://music.yandex.ru/album/24171319/track/109240677">Цветы</a>
        — <a href="https://music.yandex.ru/artist/7714432">Lida</a> на Яндекс
        Музыке
      </iframe
      >
    </div>
  </div>
</template>

<script>
import TrackThumb from "@/components/player/TrackThumb.vue";

export default {
  components: {
    TrackThumb,
  },
  props: {
    trackArtwork: {type: String, required: true},
  },
};
</script>

<style lang="sass" scoped>
.ya-player
  display: flex
  align-items: flex-start
  gap: 20px
  width: 100%

  &__thumb
    height: 100px
    width: 100px
    overflow: hidden
    object-fit: cover
    object-position: center
    border-radius: 10px

  &__wrapper
    width: 100%
    max-width: 630px
    height: 155px

    iframe
      width: 100%
      height: 100%

</style>
