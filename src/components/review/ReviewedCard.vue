<template>
  <li class="review-card">
    <!-- Track info & controls -->
    <div class="review-card__header">
      <!-- Music player -->
      <music-player
        class="player"
        :track-artist="artist"
        :track-title="title"
        :track-artwork="artwork"
        :track-src="src"
        :track-demo="demo"
        :is-view-buttons="onReview"
      />

      <!-- Feedback status -->
      <review-status
        v-if="!onReview"
        class="review-status"
        :status="musicFile.status"
      />
    </div>
      <div class="reviews-bottom reviews-bottom--mobile">
        <button :class="{ active: showReviews }" class="reviews-bottom__button" @click="showReviews = !showReviews"
          v-if="musicFile.comments.length > 0">
          <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 1.5C0 0.947715 0.319797 0.5 0.714286 0.5H14.2857C14.6802 0.5 15 0.947715 15 1.5C15 2.05228 14.6802 2.5 14.2857 2.5H0.714286C0.319797 2.5 0 2.05228 0 1.5Z"
              fill="#FF6C6C" />
            <path
              d="M0 8.5C0 7.94772 0.319797 7.5 0.714286 7.5H14.2857C14.6802 7.5 15 7.94772 15 8.5C15 9.05228 14.6802 9.5 14.2857 9.5H0.714286C0.319797 9.5 0 9.05228 0 8.5Z"
              fill="#FF6C6C" />
            <path
              d="M0 15.5C0 14.9477 0.319797 14.5 0.714286 14.5H14.2857C14.6802 14.5 15 14.9477 15 15.5C15 16.0523 14.6802 16.5 14.2857 16.5H0.714286C0.319797 16.5 0 16.0523 0 15.5Z"
              fill="#FF6C6C" />
          </svg>
        </button>
      
        <!-- Track tags -->
        <ul class="review-card__tags">
          <base-tag color="gray" v-for="tag in musicFile.genres" :key="tag">
            {{ tag }}
          </base-tag>
        </ul>
      </div>
      <div class="reviews-bottom reviews-bottom--desktop">
        <button :class="{ active: showReviews }" class="reviews-bottom__button" @click="showReviews = !showReviews"
        v-if="musicFile.comments.length > 0"
          >
          <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 1.5C0 0.947715 0.319797 0.5 0.714286 0.5H14.2857C14.6802 0.5 15 0.947715 15 1.5C15 2.05228 14.6802 2.5 14.2857 2.5H0.714286C0.319797 2.5 0 2.05228 0 1.5Z"
              fill="#FF6C6C" />
            <path
              d="M0 8.5C0 7.94772 0.319797 7.5 0.714286 7.5H14.2857C14.6802 7.5 15 7.94772 15 8.5C15 9.05228 14.6802 9.5 14.2857 9.5H0.714286C0.319797 9.5 0 9.05228 0 8.5Z"
              fill="#FF6C6C" />
            <path
              d="M0 15.5C0 14.9477 0.319797 14.5 0.714286 14.5H14.2857C14.6802 14.5 15 14.9477 15 15.5C15 16.0523 14.6802 16.5 14.2857 16.5H0.714286C0.319797 16.5 0 16.0523 0 15.5Z"
              fill="#FF6C6C" />
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
      <ul class="reviews-list" :style="{marginTop: showReviews? '16px': '0'}" v-if="comments && comments.length > 0">
        <li
          class="reviews-list__item"
          v-for="comment in comments"
          :key="comment"
        >
          <p>{{ comment }}</p>
        <div class="reviews-list__buttons">
          <button>
            <img src="@/assets/images/icons/music.svg" alt="" />
          </button>
          <button>
            <img src="@/assets/images/icons/spotify.svg" alt="" />
          </button>
        </div>
        </li>
        <!-- <div class="reviewed-input">
          <textarea
            :class="{ disabled: true }"
            :disabled="true"
            :placeholder="reviewText"
          ></textarea>
          <div class="reviewed-input__footer">
            <div v-show="isAddedToPlaylist" class="reviewed-input__caption">
              <span>Размещено в </span>
              <img :src="addedPlaylist.icon || ''" alt="" />
              <span>«{{ addedPlaylist.name || "" }}»</span>
            </div>
          </div>
        </div> -->
      </ul>
    </div>
    </transition>
            <transition>
              <div class="review-card__reviews review-card__reviews--mobile" v-show="showReviews">
                <ul class="reviews-list" :style="{marginTop: showReviews? '16px': '0'}" v-if="comments.length > 0">
                  <li class="reviews-list__item" v-for="comment in comments" :key="comment">
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
                    <textarea :class="{ disabled: isSavedComment }" :disabled="isSavedComment" v-model="commentValue"
                      placeholder="Напишите свою рецензию"></textarea>
                    <div class="review-input__footer">
                      <button v-show="!isAddedToPlaylist" @click="isShowSelectPlaylist = true" class="add-to-playlist">
                        Разместить в плейлисте
                      </button>
                      <div v-show="isAddedToPlaylist" class="review-input__caption">
                        <span>Размещено в </span>
                        <img :src="addedPlaylist.icon || ''" alt="" />
                        <span>«{{ addedPlaylist.name || "" }}»</span>
                      </div>
                      <template v-if="!isSavedComment">
                        <base-button class="cancel" mode="cancel" title="Отменить" @click="closeInput" />
                        <base-button class="save" mode="primary" title="Сохранить" @click="saveReview" />
                      </template>
                    </div>
                  </div>
                </transition>
              </div>
            </transition>
  </li>
</template>

<script setup>
import { ref } from "vue";
import MusicPlayer from "@/components/player/MusicPlayer.vue";
import ReviewStatus from "@/components/review/ReviewStatus.vue";

const props = defineProps({
  musicFile: { type: Object, required: true },
});

const addedPlaylist = ref({ name: "", icon: "" });

// Variables for tarck details
const artist = props.musicFile.artist;
const title = props.musicFile.title;
const artwork = props.musicFile.artwork;
const src = props.musicFile.src;
const demo = props.musicFile.demo;
const comments = props.musicFile.comments;
const onReview = props.musicFile.onReview;
const reviewText = props.musicFile.reviewText;
const showReviews = ref(false);
console.log(props.musicFile)
</script>

<style lang="sass" scoped>
.review-card
  background: $white-color
  padding: 20px
  border: 1px solid $third-color
  border-radius: 20px
  list-style-type: none

.review-card__header
  display: flex
  align-items: flex-end
  gap: 47px
  position: relative

  .player
    width: 100%
    +xs()
      margin-bottom: 20px


.review-status
  flex-shrink: 0
  width: 250px


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

.reviews-list__buttons
  display: flex
  align-items: center
  margin-left: auto
  padding-right: 36px
  gap:10px
  padding-top:10px  

.reviews-list__item
  background: $secondary-color
  padding: 30px 33px
  border-radius: 10px
  overflow: hidden

.reviews-list__item + .reviews-list__item
  margin-top: 20px

.reviews-list__item p
  font-size: $p-font-size
  line-height: $p-line-heigth
  letter-spacing: $letter-spacing
  color: $text-color-secondary

.reviewed-input
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
.reviewed-input textarea
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
.reviewed-input textarea::placeholder
  font-size: $p-font-size
  line-height: $p-line-heigth
  letter-spacing: $letter-spacing
  color: $text-color-secondary
.reviewed-input__footer
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

.reviewed-input__footer .add-to-playlist
  font-size: $default-font-size
  font-weight: 700
  line-height: $default-line-height
  letter-spacing: $letter-spacing
  color: $main-color

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
    +sm()
      margin-top: 30px
    +xs()
      margin-top: 10px

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
</style>
