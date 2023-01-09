<template>
  <div class="player">
    <!-- Track thumbnail -->
    <track-thumb
      class="player__thumb"
      :track-artwork="trackArtwork"
      :image="headerControls"
    />

    <!-- Player controls and track info -->
    <div class="player__controls">
      <!-- Track info -->
      <div class="header">
        <div class="header-common">
          <button
            type="button"
            class="playback"
            @click="
              startPlaying();
              toggleMusicPlaying();
              $emit('togglePlayback');
            "
          >
            <pause-icon v-if="isPlaying"></pause-icon>
            <play-icon v-else></play-icon>
          </button>

          <div class="header__info">
            <h2 class="header__title">{{ trackArtist }}</h2>

            <div class="header__details">
              <span class="header__artist">{{ trackTitle }}</span>

              <div class="header__demo" v-if="trackDemo">демо</div>
            </div>
          </div>
        </div>
        <div class="header-controls" v-if="headerControls">
          <button class="header-control">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                stroke="#45454E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 8L12 3L7 8"
                stroke="#45454E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 3V15"
                stroke="#45454E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button class="header-control">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20H21"
                stroke="#45454E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z"
                stroke="#45454E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button class="header-control">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H5H21"
                stroke="#FF6C6C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                stroke="#FF6C6C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 11V17"
                stroke="#FF6C6C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 11V17"
                stroke="#FF6C6C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div v-if="isViewButtons" class="header__buttons">
          <button class="header__btn">
            <img src="@/assets/images/icons/upload.svg" alt="" />
          </button>
          <button class="header__btn">
            <img src="@/assets/images/icons/edit.svg" alt="" />
          </button>
          <button class="header__btn">
            <img src="@/assets/images/icons/remove.svg" alt="" />
          </button>
        </div>
      </div>

      <!-- Playback bar and volume bar -->
      <div class="controls">
        <div
          class="playback-bar"
          @click="update"
          :class="playerStarted ? '' : 'disabled'"
        >
          <div
            class="playback-bar__time-elapsed"
            :class="isWhite ? 'white' : ''"
          >
            {{ timeElapsed }}
          </div>

          <div
            class="range-container"
            :style="{ '--progress-position': progressPosition }"
          >
            <div class="range" ref="wrapper">
              <div
                class="progress"
                :class="playerStarted ? 'active' : ''"
              ></div>
            </div>
            <div class="handle" @mousedown="onMouseDown"></div>
          </div>

          <div class="playback-bar__total-time">
            {{ trackDuration }}
          </div>
        </div>

        <div class="controls__volume">
          <sound-button @showVolumeBar="toggleVolumeBar" />

          <volume-range
            class="volume-slider"
            @change-volume="setVolume"
            v-show="volumeBarOpened"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import TrackThumb from "@/components/player/TrackThumb.vue";
import PlayIcon from "@/components/icons/PlayIcon.vue";
import PauseIcon from "@/components/icons/PauseIcon.vue";
import SoundButton from "@/components/player/SoundButton.vue";
import VolumeRange from "@/components/player/VolumeRange.vue";

import { useConvertSecondsToMinutes } from "@/composables/useGetMinutes.js";

const props = defineProps({
  trackArtist: { type: String, required: true },
  trackTitle: { type: String, required: true },
  trackArtwork: { type: String, required: true },
  trackSrc: { type: String, required: true },
  trackDemo: { type: Boolean, required: true },
  isViewButtons: { type: Boolean },
  headerControls: { type: Boolean, default: false },
});

defineEmits(["togglePlayback"]);

// Logic to start/pause playing
const playerStarted = ref(false);
const isPlaying = ref(false);
const progressPosition = ref(0);
const startPlaying = () => {
  playerStarted.value = true;
  isPlaying.value = !isPlaying.value;
};

const audioTrack = props.trackSrc;
const musicPlayer = new Audio(audioTrack);
musicPlayer.volume = 0.5;

// Logic to convert seconds to minutes and set track initial and total time
let trackSeconds;
const trackDuration = ref("");
musicPlayer.onloadedmetadata = () => {
  trackSeconds = Math.round(musicPlayer.duration);
  trackDuration.value = useConvertSecondsToMinutes(trackSeconds);
};

// Function to update time elapsed
const timeElapsed = ref("00:00");
const setTimeElapsed = () => {
  const timeElapsedSeconds = Math.round(musicPlayer.currentTime);
  timeElapsed.value = useConvertSecondsToMinutes(timeElapsedSeconds);
};

// Function to start/pause music playing
const toggleMusicPlaying = () => {
  if (isPlaying.value) {
    musicPlayer.play();
  } else {
    musicPlayer.pause();
  }
};

// Function to change volume
const setVolume = (volume) => {
  musicPlayer.volume = volume / 100;
};

// Logic related to scrubing
const isScrubbing = ref(false);
const wrapper = ref(null);

const disableScrubbing = () => {
  isScrubbing.value = false;
};

onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    if (!isScrubbing.value) return;
    update(e);
  });
  document.addEventListener("mouseup", disableScrubbing);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", (e) => update(e));
  document.removeEventListener("mouseup", disableScrubbing);
});

const onMouseDown = () => {
  isScrubbing.value = true;
};

const update = (e) => {
  const container = wrapper.value;
  const rect = container.getBoundingClientRect();
  const percent =
    Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width - 0.04;

  if (percent > -0.005) {
    progressPosition.value = percent;
    seekTrack();
  }
};

const seekTrack = () => {
  musicPlayer.currentTime = trackSeconds * progressPosition.value;
  setTimeElapsed();
};

musicPlayer.ontimeupdate = () => {
  progressPosition.value = musicPlayer.currentTime / trackSeconds;
  setInterval(() => {
    setTimeElapsed();
  }, 1000);
  if (progressPosition.value > 0.96) progressPosition.value = 0.96;
};

// Change current time color based on progress
const isWhite = ref(false);
watch(progressPosition, async (newValue) => {
  if (newValue > 0.01) {
    isWhite.value = true;
  } else {
    isWhite.value = false;
  }
});

// Logic to restart UI after playback has finished
musicPlayer.onended = () => {
  playerStarted.value = false;
  isPlaying.value = false;
  progressPosition.value = 0;
  musicPlayer.currentTime = 0;
};

// Logic to show/hide volume bar
const volumeBarOpened = ref(false);
const toggleVolumeBar = () => {
  volumeBarOpened.value = !volumeBarOpened.value;
};
</script>

<style lang="sass" scoped>
.player .header-common
  display: flex
  gap: 15px

  +md()
    width: 100%

.player .header-controls
  margin-right: 36px
  display: flex
  align-items: center
  gap: 20px

  +md()
    display: none

.player
  // display: grid
  // grid-template-columns: 100px 1fr
  align-items: flex-start
  gap: 20px
  display: flex
  flex-grow: 1
  width: 100%
.player__thumb
  height: 100px
  width: 100px
  overflow: hidden
  display: none
.player__controls
  display: grid
  gap: 20px
  width: 100%
  +sm()
    gap:10px
.player__controls .header
  display: flex
  justify-content: space-between
  align-items: flex-start
  width: 100%

.player__controls .header__buttons
  display: flex
  align-items: center
  margin-left: auto
  padding-right: 36px
  gap: 10px
  +xs()
    display: none

.player__controls .header__btn
  display: flex
  align-items: center
  justify-content: center
  background: 0
  border: 0
  padding: 0
  outline: 0

  &:first-child
    margin-left: 0

  img
    width: 24px
    height: 24px
    object-fit: contain

.player__controls .playback
  height: 50px
  width: 50px
  display: grid
  place-items: center
  background: $main-color
  border-radius: 10px
  flex-shrink: 0 !important
.player__controls .header__info
  display: grid
  gap: 5px

  +md()
    width: 100%
.player__controls .header__title
  font-size: $h4-font-size
  font-weight: $p-font-weight
  line-height: $h4-line-heigth
  letter-spacing: $letter-spacing
  color: $text-color
  margin-bottom: 5px !important
  display: none
.player__controls .header__details
  display: grid
  grid-template-columns: auto 45px
  align-items: center
  justify-content: start
  gap: 10px

  // +md()
  //   display: flex
  //   justify-content: space-between

.player__controls .header__artist
  font-size: $p-font-size
  font-weight: $h4-font-weight
  line-height: $default-line-height
  letter-spacing: $letter-spacing
  color: $text-color
.player__controls .header__demo
  display: grid
  place-items: center
  font-size: 12px
  line-height: $default-line-height
  letter-spacing: $letter-spacing
  text-transform: uppercase
  color: $main-color
  background: $secondary-color
  padding: 2px 5px
  border-radius: 5px
  +xs()
    position: absolute
    right: 0
    top: 0
.player__controls .controls
  display: grid
  grid-template-columns: 1fr 24px
  align-items: center
  gap: 12px

  +md()
    grid-template-columns: unset

.playback-bar
  position: relative
  height: 20px
  flex-grow: 1
  flex-shrink: 1
  cursor: pointer
  user-select: none

  +sm()
    height: 10px

.playback-bar.disabled
  pointer-events: none
.playback-bar.disabled .handle
  display: none
.playback-bar__time-elapsed,
.playback-bar__total-time
  position: absolute
  top: 3px
  font-size: 12px
  line-height: $default-line-height
  letter-spacing: $letter-spacing
  color: $title-color
  z-index: 10

  +sm()
    top: 16px
    color: $text-color-secondary
    font-weight: 500

.playback-bar__time-elapsed
  left: 10px
  +sm()
    left:0
.playback-bar__time-elapsed.white
  color: $white-color
.playback-bar__total-time
  right: 10px
  +sm()
    right: 0
.playback-bar .range-container
  width: 100%
  height: 100%
  background: $secondary-color
  border-radius: 15px
.playback-bar .range
  position: relative
  width: 100%
  height: 100%
  border-radius: 15px
  overflow: hidden
.playback-bar .range .progress
  position: absolute
  left: 0
  top: 0
  bottom: 0
  height: 100%
  right: calc(100% - var(--progress-position) * 100%)
  background: $main-color
  &.active
    box-shadow: 10px 0 0 10px $main-color
.playback-bar .handle
  width: 40px
  height: 40px
  position: absolute
  top: calc(50% - 20px)
  left: calc(var(--progress-position) * 100%)
  background-color: $main-color
  border: 7px solid $fifth-color
  border-radius: 50%
  cursor: pointer
  z-index: 20

  +md()
    width: 28px
    height: 28px
    border: 4px solid $fifth-color
    top: calc(50% - 14px)


.player__controls .controls__volume
  position: relative
  height: 24px

  +md()
    display: none

.player__controls .volume-slider
  position: absolute
  bottom: 33px
  left: calc(50% - 15px)
</style>
