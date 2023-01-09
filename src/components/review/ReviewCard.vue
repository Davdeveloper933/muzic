<template>
  <transition>
    <li class="review-card" v-if="showReviewCard">
      <!-- Track info & controls -->
      <div class="review-card__header">
        <!-- Music (yandex) player -->
        <music-player
          v-if="!yandex"
          class="player"
          :track-artist="artist"
          :track-title="title"
          :track-artwork="artwork"
          :track-src="src"
          :track-demo="demo"
          @toggle-playback="activateReactions"
          :headerControls="headerControls"
        />
        <yandex-player v-else :trackArtwork="artwork" />
        <div class="reviews-bottom reviews-bottom--mobile">
          <button
              :class="{ active: showReviews }"
              class="reviews-bottom__button"
              @click="showReviews = !showReviews"
              v-if="musicFile.comments.length > 0"
          >
            <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M0 1.5C0 0.947715 0.319797 0.5 0.714286 0.5H14.2857C14.6802 0.5 15 0.947715 15 1.5C15 2.05228 14.6802 2.5 14.2857 2.5H0.714286C0.319797 2.5 0 2.05228 0 1.5Z"
                  fill="#FF6C6C"
              />
              <path
                  d="M0 8.5C0 7.94772 0.319797 7.5 0.714286 7.5H14.2857C14.6802 7.5 15 7.94772 15 8.5C15 9.05228 14.6802 9.5 14.2857 9.5H0.714286C0.319797 9.5 0 9.05228 0 8.5Z"
                  fill="#FF6C6C"
              />
              <path
                  d="M0 15.5C0 14.9477 0.319797 14.5 0.714286 14.5H14.2857C14.6802 14.5 15 14.9477 15 15.5C15 16.0523 14.6802 16.5 14.2857 16.5H0.714286C0.319797 16.5 0 16.0523 0 15.5Z"
                  fill="#FF6C6C"
              />
            </svg>
          </button>

          <!-- Track tags -->
          <ul class="review-card__tags">
            <base-tag color="gray" v-for="tag in musicFile.genres" :key="tag">
              {{ tag }}
            </base-tag>
          </ul>
        </div>
        <transition>
          <div class="review-card__reviews review-card__reviews--mobile" v-show="showReviews">
            <ul class="reviews-list" v-if="comments.length > 0">
              <li
                  class="reviews-list__item"
                  v-for="comment in comments"
                  :key="comment"
              >
                <p>{{ comment }}</p>
              </li>
            </ul>

            <!-- <div class="review-description">
          <p class="review-description__text">
            Песня начинается с интенсивных, зажигательных, запоминающихся гитарных
            риффов, смешанных с динамичными барабанными битами. Все это уже
            говорит слушателям о наступающем вайбе — жанр здесь можно было бы
            охарактеризовать как прогрессив-метал. Он резкий, живой, заводной,
            очень хорошо сбалансирован как в аранжировках, так и в композиции в
            целом.
          </p>
        </div> -->
            <transition>
              <div class="review-input" v-show="reviewIsShown">
              <textarea
                  :class="{ disabled: isSavedComment }"
                  :disabled="isSavedComment"
                  v-model="commentValue"
                  placeholder="Напишите свою рецензию"
              ></textarea>
                <div class="review-input__footer">
                  <button
                      v-show="!isAddedToPlaylist"
                      @click="isShowSelectPlaylist = true"
                      class="add-to-playlist"
                  >
                    Разместить в плейлисте
                  </button>
                  <div v-show="isAddedToPlaylist" class="review-input__caption">
                    <span>Размещено в </span>
                    <img :src="addedPlaylist.icon || ''" alt="" />
                    <span>«{{ addedPlaylist.name || "" }}»</span>
                  </div>
                  <template v-if="!isSavedComment">
                    <base-button
                        class="cancel"
                        mode="cancel"
                        title="Отменить"
                        @click="closeInput"
                    />
                    <base-button
                        class="save"
                        mode="primary"
                        title="Сохранить"
                        @click="saveReview"
                    />
                  </template>
                </div>
              </div>
            </transition>
          </div>
        </transition>


        <div class="review-right">
          <p class="review-date">12.11.2022 15:30</p>
          <div class="review-buttons" v-if="!review1">
            <!-- Skip track button -->
            <skip-button class="skip" :disabled="!canBeSkipped && !yandex" />

            <!-- Leave a review button -->
            <base-button
              class="review-button"
              v-if="!reviewIsShown"
              :mode="'primary'"
              :title="'Оценить'"
              @click="showReviewForm"
              :class="{ disabled: !canBeSkipped && !yandex }"
            />
          </div>
          <div class="review1-buttons" v-if="review1">
            <button
              class="review1-button"
              :class="{ disabled: !canBeSkipped && !yandex }"
            >
              <div class="review1-button__left">
                <img src="@/assets/images/deny-emodji.png" alt="deny" />
              </div>
              <div class="review1-button__right">Рецензии</div>
            </button>
          </div>
        </div>
      </div>

      <div class="reviews-bottom reviews-bottom--desktop">
        <button
          :class="{ active: showReviews }"
          class="reviews-bottom__button"
          @click="showReviews = !showReviews"
          v-if="musicFile.comments.length > 0"
        >
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.5C0 0.947715 0.319797 0.5 0.714286 0.5H14.2857C14.6802 0.5 15 0.947715 15 1.5C15 2.05228 14.6802 2.5 14.2857 2.5H0.714286C0.319797 2.5 0 2.05228 0 1.5Z"
              fill="#FF6C6C"
            />
            <path
              d="M0 8.5C0 7.94772 0.319797 7.5 0.714286 7.5H14.2857C14.6802 7.5 15 7.94772 15 8.5C15 9.05228 14.6802 9.5 14.2857 9.5H0.714286C0.319797 9.5 0 9.05228 0 8.5Z"
              fill="#FF6C6C"
            />
            <path
              d="M0 15.5C0 14.9477 0.319797 14.5 0.714286 14.5H14.2857C14.6802 14.5 15 14.9477 15 15.5C15 16.0523 14.6802 16.5 14.2857 16.5H0.714286C0.319797 16.5 0 16.0523 0 15.5Z"
              fill="#FF6C6C"
            />
          </svg>
        </button>

        <!-- Track tags -->
        <ul class="review-card__tags">
          <base-tag color="gray" v-for="tag in musicFile.genres" :key="tag">
            {{ tag }}
          </base-tag>
        </ul>
      </div>

      <!-- Track reviews -->
      <transition>
        <div class="review-card__reviews review-card__reviews--desktop" v-show="showReviews">
          <ul class="reviews-list" v-if="comments.length > 0">
            <li
              class="reviews-list__item"
              v-for="comment in comments"
              :key="comment"
            >
              <p>{{ comment }}</p>
            </li>
          </ul>

          <!-- <div class="review-description">
        <p class="review-description__text">
          Песня начинается с интенсивных, зажигательных, запоминающихся гитарных
          риффов, смешанных с динамичными барабанными битами. Все это уже
          говорит слушателям о наступающем вайбе — жанр здесь можно было бы
          охарактеризовать как прогрессив-метал. Он резкий, живой, заводной,
          очень хорошо сбалансирован как в аранжировках, так и в композиции в
          целом.
        </p>
      </div> -->
          <transition>
            <div class="review-input" v-show="reviewIsShown">
              <textarea
                :class="{ disabled: isSavedComment }"
                :disabled="isSavedComment"
                v-model="commentValue"
                placeholder="Напишите свою рецензию"
              ></textarea>
              <div class="review-input__footer">
                <button
                  v-show="!isAddedToPlaylist"
                  @click="isShowSelectPlaylist = true"
                  class="add-to-playlist"
                >
                  Разместить в плейлисте
                </button>
                <div v-show="isAddedToPlaylist" class="review-input__caption">
                  <span>Размещено в </span>
                  <img :src="addedPlaylist.icon || ''" alt="" />
                  <span>«{{ addedPlaylist.name || "" }}»</span>
                </div>
                <template v-if="!isSavedComment">
                  <base-button
                    class="cancel"
                    mode="cancel"
                    title="Отменить"
                    @click="closeInput"
                  />
                  <base-button
                    class="save"
                    mode="primary"
                    title="Сохранить"
                    @click="saveReview"
                  />
                </template>
              </div>
            </div>
          </transition>
        </div>
      </transition>

      <transition>
        <div v-show="isShowSelectPlaylist" class="playlist-popup">
          <div
            @click="closeSelectPlaylist"
            class="playlist-popup__overlay"
          ></div>
          <transition name="fadeup">
            <div v-show="isShowSelectPlaylist" class="playlist-popup__main">
              <div class="playlist-popup__title">Разместить в плейлисте</div>
              <div class="playlist-popup__list">
                <label
                  v-for="(playlist, idx) of playlists"
                  :key="idx"
                  class="playlist-popup__item"
                >
                  <input
                    v-model="playlist.isActive"
                    type="radio"
                    name="radio_playlist"
                    class="playlist-popup__item-input"
                  />
                  <div class="playlist-popup__item-btn">
                    <div class="playlist-popup__item-name">
                      {{ playlist.name }}
                    </div>
                    <img
                      :src="playlist.icon"
                      alt=""
                      class="playlist-popup__item-icon"
                    />
                  </div>
                </label>
              </div>
              <button
                @click="submitSelectPlaylist"
                class="primary playlist-popup__submit"
              >
                Подтвердить размещение
              </button>
            </div>
          </transition>
        </div>
      </transition>
    </li>
  </transition>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import MusicPlayer from "@/components/player/MusicPlayer.vue";
import YandexPlayer from "@/components/player/YandexPlayer.vue";
import SkipButton from "@/components/review/SkipButton.vue";

const props = defineProps({
  musicFile: { type: Object, required: true },
  review1: { type: Object, default: false },
});

// Variables for track details
const artist = props.musicFile.artist;
const title = props.musicFile.title;
const artwork = props.musicFile.artwork;
const src = props.musicFile.src;
const demo = props.musicFile.demo;
const comments = props.musicFile.comments;
const yandex = props.musicFile.yandex;
const headerControls = props.musicFile.headerControl;

const isPlaying = ref(false);
const canBeSkipped = ref(false);
const showReviewCard = ref(true);

const reviewButtonLabel = ref("Оценить");
const reviewButtonMode = ref("disabled");

const isAddedToPlaylist = ref(false);
const isSavedComment = ref(false);
const commentValue = ref("");

const playlists = ref([
  {
    name: "Название плейлиста",
    icon: require("@/assets/images/icons/yamusic.svg"),
    isActive: false,
  },
  {
    name: "Длинное Название плейлиста плейлиста",
    icon: require("@/assets/images/icons/vk.svg"),
    isActive: false,
  },
]);

const showReviews = ref(false);

const isShowSelectPlaylist = ref(false);
const addedPlaylist = ref({ name: "", icon: "" });

// Logic to activate reactions
const timePassed = ref(0);
let intervalId;

const activateReactions = () => {
  // Toogle playing status
  isPlaying.value = !isPlaying.value;

  if (isPlaying.value) {
    startTimer();
  } else {
    stopTimer();
  }
};

const startTimer = () => {
  intervalId = setInterval(() => {
    timePassed.value++;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(intervalId);
};

watch(timePassed, async (newValue) => {
  if (newValue === 5) {
    canBeSkipped.value = true;
  } else if (newValue === 10) {
    reviewButtonMode.value = "primary";
  }
});

// Logic to show/hide review input
const reviewIsShown = ref(false);
const showReviewForm = () => {
  reviewIsShown.value = true;
};

const closeInput = () => {
  reviewIsShown.value = false;
  canBeSkipped.value = false;
  reviewButtonLabel.value = "Оценить";
  reviewButtonMode.value = "disabled";
};

const saveReview = () => {
  if (commentValue.value.length < 1) return;
  isSavedComment.value = true;
  showReviewCard.value = false;
};

const closeSelectPlaylist = () => {
  isShowSelectPlaylist.value = false;
};

const submitSelectPlaylist = () => {
  const selectedPlaylist = playlists.value.filter(
    (obj) => obj.isActive === "on"
  );
  if (!selectedPlaylist.length) return;
  closeSelectPlaylist();
  isAddedToPlaylist.value = true;
  const { name, icon } = selectedPlaylist[0];
  addedPlaylist.value = { name, icon };
  console.log(addedPlaylist.value);
};
</script>

<style lang="sass" scoped>
.reviews-bottom
  display: flex
  align-items: center
  gap: 15px
  margin-top: 10px

  &--desktop
    +md()
      display: none

  &--mobile
    display: none

    +md()
      display: flex

  &__button
    display: flex
    align-items: center
    justify-content: center
    width: 35px
    height: 35px
    background-color: #FFEEEE
    border: 1px solid #FFCBCB
    border-radius: 8px
    cursor: pointer

    +md()
      width: 25px
      height: 25px

    svg
      +md()
        width: 10px
        height: 11px

  .review-card__tags
    margin-top: 0

.reviews-bottom__button.active
  background-color: #FF6C6C
  svg path
    fill: white !important

.review-card
  background: $white-color
  padding: 20px 40px 20px 20px
  border: 1px solid $third-color
  border-radius: 20px
  list-style-type: none

  +md()
    padding: 20px 16px

.review-right
  display: flex
  flex-direction: column
  align-items: flex-end
  justify-content: space-between
.review-date
  font-size: 16px
  line-height: 19px
  font-weight: 700
  color: #777B9E

  +md()
    display: none

.review-buttons
  display: flex
  align-items: center
  gap: 20px
.review-card__header
  display: flex
  justify-content: space-between
  gap: 40px

  +md()
    flex-direction: column
    gap: 20px

.review-card__header .player
  flex-grow: 1
  flex-shrink: 1
.review-card__header .skip
  flex-grow: 0
  flex-shrink: 0
.review-card__header .review-button
  flex-grow: 0
  flex-shrink: 0
  width: 173px
.review-card__tags
  display: flex
  margin-top: 10px
  & li + li
    margin-left: 5px

.review-card__reviews
  &--desktop
    +md()
      display: none

  &--mobile
    display: none

    +md()
      display: block

.review-card__reviews .reviews-list
  margin-top: 16px
.reviews-list__item
  background: $secondary-color
  padding: 20px
  border-radius: 10px
  overflow: hidden

  +md()
    background: transparent
    padding: 0

.reviews-list__item + .reviews-list__item
  margin-top: 20px
.reviews-list__item p
  font-size: $p-font-size
  line-height: $p-line-heigth
  letter-spacing: $letter-spacing
  color: $text-color-secondary

.review-description
  padding: 20px

.review-input
  margin-top: 20px
  margin-left: auto

  &__caption
    display: flex
    align-items: center
    font-size: 16px
    line-height: 19px
    letter-spacing: $letter-spacing

    img
      margin: 0 10px
      width: 30px
      height: auto
      object-fit: contain
      display: block
.review-input textarea
  display: block
  max-height: 138px
  width: 100%
  font-size: $p-font-size
  line-height: $p-line-heigth
  letter-spacing: $letter-spacing
  color: $text-color-secondary
  resize: none
  background: $textarea-color
  padding: 30px 30px 30px 25px
  border: none
  border-radius: 10px
  overflow: hidden
.review-input textarea::placeholder
  font-size: $p-font-size
  line-height: $p-line-heigth
  letter-spacing: $letter-spacing
  color: $text-color-secondary
.review-input__footer
  display: flex
  align-items: center
  padding-left: 35px
  margin-top: 20px

  .cancel
    margin-left: auto
    width: 173px

  .save
    width: 173px
    margin-left: 20px

.review-input__footer .add-to-playlist
  font-size: $default-font-size
  font-weight: 700
  line-height: $default-line-height
  letter-spacing: $letter-spacing
  color: $main-color
.review-input__footer .save
  flex-grow: 0
  flex-shrink: 0
  flex-basis: 173px

.playlist-popup
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  z-index: 100
  display: flex
  align-items: center
  justify-content: center

  &__overlay
    background: #000
    opacity: .25
    left: 0
    top: 0
    position: fixed
    width: 100%
    height: 100%
    z-index: -1

  &__main
    width: 424px
    padding: 30px
    padding-top: 35px
    height: auto
    background: #fff
    border: 1px solid #E7EBFF
    border-radius: 20px
    position: relative
    z-index: 2

  &__title
    font-weight: 600
    font-size: 24px
    line-height: 29px
    letter-spacing: $letter-spacing

  &__list
    margin-top: 26px

  &__item
    width: 100%
    display: block
    cursor: pointer
    margin-top: 15px

    &:first-child
      margin-top: 0

    &-input
      display: none

      &:checked
        ~.playlist-popup__item-btn
          border-color: $main-color

    &-btn
      display: flex
      align-items: center
      padding: 0 20px
      background: #FFFFFF
      border: 1px solid #E7EBFF
      border-radius: 10px
      height: 62px
      transition: $transition

    &-name
      font-weight: 600
      font-size: 18px
      line-height: 21px
      letter-spacing: $letter-spacing
      padding-right: 35px
      width: 100%
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

    &-icon
      width: 30px
      height: auto
      object-fit: contain
      margin-left: auto

  &__submit
    display: block
    font-size: $default-font-size
    font-weight: 600
    line-height: $default-line-height
    letter-spacing: $letter-spacing
    padding: 20px
    border: 1px solid
    border-radius: 10px
    transition: all $transition
    color: $white-color
    background: $main-color
    border-color: $main-color
    margin-top: 20px
    width: 100%


.review1-buttons
  +md()
    width: 100%

.review1-button
  background-color: #E7EBFF
  border: 1px solid #B9C4FF
  border-radius: 12px
  display: flex
  align-items: center
  height: 60px

  img
    +md()
      width: 32px
      height: 32px

  +md()
    width: 100%

  &__left
    width: 72px
    position: relative
    border-right: 1px solid #B9C4FF

    &::after
      content: '56'
      position: absolute
      top: -25px
      right: -10px
      background-color: #FFEEEE
      width: 30px
      height: 30px
      border: 2px solid #fff
      z-index: 1
      border-radius: 50%
      font-weight: 700
      font-size: 13px
      line-height: 16px
      display: flex
      align-items: center
      justify-content: center
      color:  #FF6C6C
  &__right
    width: 128px
    display: flex
    justify-content: center
    font-size: 16px
    line-height: 19px
    color: #45454E
    font-weight: 600
    position: relative

    +md()
      width: 100%

    &::after
      content: '10/356'
      position: absolute
      top: -35px
      right: -10px
      background-color: #FFEEEE
      width: 65px
      height: 30px
      border: 2px solid #fff
      z-index: 1
      border-radius: 21px
      font-weight: 700
      font-size: 13px
      line-height: 16px
      display: flex
      align-items: center
      justify-content: center
      color:  #FF6C6C
  img
    width: 36px
    height: 36px
    object-fit: contain


.review1-button.disabled
  opacity: .8
  pointer-events: none
</style>
