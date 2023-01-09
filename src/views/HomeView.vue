<template>
  <div class="home">
    <main class="main">
      <div class="container">
        <div class="tabs">
          <button
            class="tabs__item"
            @click="showNewCards"
            :class="{ active: isShowNewCards }"
          >
            Новые запросы
          </button>
          <button
            class="tabs__item"
            @click="showReviewedCards"
            :class="{ active: isShowReviewedCards }"
          >
            Уже оценены
          </button>
        </div>

        <ul v-if="isShowNewCards" class="review-cards">
          <review-card
            v-for="file in musicFiles"
            :key="file.title"
            :music-file="file"
          ></review-card>
        </ul>

        <div v-if="isShowReviewedCards" class="reviewed-tracks">
          <ul class="reviewed-cards">
            <reviewed-card
              v-for="file in reviewedMusicFiles"
              :key="file.title"
              :music-file="file"
            ></reviewed-card>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ReviewCard from "@/components/review/ReviewCard.vue";
import ReviewedCard from "@/components/review/ReviewedCard.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "Reviews",
  components: { ReviewCard, ReviewedCard },
  setup() {
    const isShowNewCards = ref(true);
    const isShowReviewedCards = ref(false);

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
      },
      {
        artwork: require("@/assets/mp3/Sunshine.png"),
        genres: ["deep house", "dance"],
        comments: [
          "Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом.",
        ],
        yandex: true,
      },
    ]);

    const reviewedMusicFiles = ref([
      {
        artist: "DJ Dark & MD DJ",
        title: "Erhu (Original Mix)",
        src: require("@/assets/mp3/Erhu.mp3"),
        artwork: require("@/assets/mp3/Erhu.png"),
        genres: ["deep house", "dance", "house"],
        demo: false,
        comments: [],
        status: "skipped",
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
        status: "reviewed",
        reviewText:
          "Ответ куратора: Хорошая песня. Крайне зажигательно, предлагаю встретиться у меня в номерах в Мариотте со всей вашей группой поочереди. Настоятельно предлагаю встретиться у меня в номерах в Мариотте со всей вашей группой по очереди. Настоятельно предлагаю встретиться у меня в номерах в Мариотте со всей вашей группой по очереди.",
      },
    ]);

    const showNewCards = () => {
      isShowReviewedCards.value = false;
      isShowNewCards.value = true;
    };

    const showReviewedCards = () => {
      isShowNewCards.value = false;
      isShowReviewedCards.value = true;
    };

    return {
      musicFiles,
      reviewedMusicFiles,
      isShowNewCards,
      isShowReviewedCards,
      showNewCards,
      showReviewedCards,
    };
  },
};
</script>
