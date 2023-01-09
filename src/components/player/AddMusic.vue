<template>
  <div class="add-music">
    <div class="add-music__row add-music__row--head">
      <div class="add-music__file-block">
        <label for="file-music" class="add-music__file-label">{{ add }}</label>
        <input
            ref="addFile"
            @change="addMusicName"
            id="file-music"
            type="file"
            class="add-music__input-file"
            accept="audio/*"
        />
      </div>
      <span>или</span>
      <div class="add-music__input-block">
        <p
            class="add-music__input-placeholder"
            v-if="placeholder"
            @click="clickPlaceholder"
        >
          Вставьте ссылку на
          <a href="https://music.yandex.ru/home" target="_blank"
          >Яндекс-Музыку</a
          >
        </p>
        <input
            type="text"
            class="add-music__input-text"
            ref="input"
            @focus="focusInput"
            @blur="blurInput"
        />
      </div>
    </div>
    <div class="add-music__row">
      <div class="add-music__demo">
        <input
            class="add-music__demo-input"
            checked
            type="checkbox"
            id="checkbox"
        />
        <label class="add-music__demo-label" for="checkbox">
          <span class="add-music__demo-checkbox">
            <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M13.3334 4.72339L6.00008 12.0567L2.66675 8.72339"
                  stroke="#FF6C6C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="add-music__demo-text">Демо версия</span>
        </label>
      </div>
      <input type="text" class="add-music__input-text" placeholder="Название"/>
    </div>
    <div class="add-music__row add-music__row--top">
      <button class="add-music__style-btn" @click="openModal">
        + добавить музыкальный стиль
      </button>
      <textarea
          class="add-music__textarea"
          placeholder="Введите описание"
      ></textarea>
    </div>
    <div class="add-music__row add-music__row--left">
      <input
          type="text"
          class="add-music__input-text adding-element"
          placeholder="Поделитесь музыкой с других сайтов"
      />
    </div>
    <div class="add-music__row add-music__row--left">
      <div class="add-music__buttons">
        <button
            class="add-music__button-secondary"
            @click="$emit('button-click')"
        >
          Отменить
        </button>
        <button
            class="add-music__button-primary"
            @click="$emit('button-click')"
        >
          Сохранить
        </button>
      </div>
    </div>


  </div>

  <base-modal @close-modal="closeModal" v-if="modal">
    <template #header>
      <div class="modal-header" v-if="genresView">
        <img src="@/assets/images/adore-emodji.png" alt="emodji"/>
        <span class="modal-header__title">обожаю</span>
      </div>
      <div class="modal-header" v-else>
        <button class="modal-header__button" @click="genresView = true">
          <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M15 18L9 12L15 6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </button>
        <span class="modal-header__title">{{ genreTitle }}</span>
      </div>
    </template>
    <template #body>
      <div class="modal-body">
        <div class="modal-body__genres" v-if="genresView">
          <button
              class="modal-body__button"
              v-for="(genre, index) in genres"
              :key="index"
              @click="chooseSubgenres(genre)"
          >
            {{ genre.title }}
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M6 12L10 8L6 4"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="modal-body__subgenres" v-else>
          <label
              class="modal-body__label"
              v-for="(subgenre, index) in subgenres"
              :key="index"
          >
            <input class="modal-body__input" type="checkbox"/>
            <span class="modal-body__checkbox">
              <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M14.0554 4.33331L6.41656 11.9722L2.94434 8.49998"
                    stroke="#FF6C6C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
            </span>
            <span class="modal-body__subgenres-title">{{ subgenre }}</span>
          </label>
        </div>
        <base-button
            class="modal-body__save"
            title="Сохранить"
            :primary="true"
        />
      </div>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from "@/components/base1/BaseModal.vue";
import BaseButton from "@/components/base1/BaseButton.vue";

export default {
  components: {
    BaseModal,
    BaseButton,
  },
  data() {
    return {
      modal: false,
      add: "Добавить аудиофайл",
      placeholder: true,
      genresView: true,
      subgenres: [],
      genreTitle: "",
      genres: [
        {
          title: "Pop",
          subgenres: [
            "Metal(233)",
            "Heavy Metal (137)",
            "Hardcore (128)",
            "Melodic Metal (101)",
            "Noise (90)",
            "Death / Thrash (81)",
          ],
        },
        {
          title: "Electronic",
          subgenres: ["Metal(233)", "Heavy Metal (137)"],
        },
        {
          title: "Rock/Punk",
          subgenres: ["Metal(233)", "Heavy Metal (137)"],
        },
        {
          title: "Hip-Hop/Rap",
          subgenres: ["Metal(233)", "Heavy Metal (137)"],
        },
        {
          title: "R&B/Soul",
          subgenres: ["Metal(233)", "Heavy Metal (137)"],
        },
        {
          title: "Folk/Acoustic",
          subgenres: ["Metal(233)", "Heavy Metal (137)"],
        },
        {
          title: "World",
          subgenres: ["Metal(233)", "Heavy Metal (137)"],
        },
        {
          title: "Classical/ Instrumental",
          subgenres: ["Metal(233)", "Heavy Metal (137)"],
        },
        {
          title: "Metal",
          subgenres: ["Metal(233)", "Heavy Metal (137)"],
        },
        {
          title: "Jazz",
          subgenres: ["Metal(233)", "Heavy Metal (137)"],
        },
        {
          title: "Reggae",
          subgenres: ["Metal(233)", "Heavy Metal (137)"],
        },
        {
          title: "Popular Music",
          subgenres: ["Metal(233)", "Heavy Metal (137)"],
        },
      ],
    };
  },
  methods: {
    addMusicName() {
      this.add = this.$refs.addFile.files[0].name;
    },
    focusInput() {
      this.placeholder = false;
    },
    blurInput() {
      if (this.$refs.input.value.trim() !== "") {
        this.placeholder = false;
      } else {
        this.placeholder = true;
      }
    },
    clickPlaceholder() {
      this.$refs.input.focus();
    },
    chooseSubgenres(elem) {
      this.subgenres = elem.subgenres;
      this.genreTitle = elem.title;
      this.genresView = false;
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
  mounted() {
    let addingElem = document.querySelector(".adding-element");
    let addingElems = document.querySelectorAll(".adding-element");
    let clone;

    addingElem.addEventListener("change", () => {
      if (addingElem.value !== "") {
        clone = addingElem.cloneNode();
        document
            .querySelector(".add-music__right")
            .insertBefore(
                clone,
                document.querySelector(".adding-element").nextSibling
            );

        addingElem.value = "";
      }
    });

    // addingElems.forEach((item) => {
    //   item.addEventListener("change", () => {
    //     if (item.value === "") {
    //       item.remove();
    //     }
    //   });
    // });
  },
};
</script>

<style lang="sass" scoped>
.add-music
  border-radius: 15px
  padding: 24px 28px
  border: 1px solid #e7ebff
  background-color: #fff
  width: 100%

  +md()
    padding: 24px 20px

  &__row
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 24px

    +md()
      flex-direction: column
      margin-bottom: 16px

    &--top
      align-items: flex-start

    &--left
      flex-direction: column
      align-items: flex-end


    span
      font-size: 16px
      line-height: 19px
      color: #777B9E

      +md()
        margin: 8px 0

    &--head
      span
        margin: 0 28px

  &__file-block
    display: flex
    align-items: center
    justify-content: space-between
    width: 220px

    +md()
      width: 100%


  &__file-label
    background: #FFEEEE
    border: 1px solid rgba(255, 108, 108, 0.2)
    border-radius: 10px
    display: flex
    align-items: center
    justify-content: center
    height: 60px
    padding: 0 20px
    width: 220px
    //width: 100%
    cursor: pointer
    font-weight: 600
    font-size: 16px
    line-height: 19px
    color: #FF6C6C

    +md()
      max-width: 100%

  &__input-file
    opacity: 0
    position: absolute
    width: 0.00001px
    visibility: hidden

  &__demo
    min-width: 268px
    display: flex
    justify-content: center
    align-items: center
    margin-right: 32px

    +md()
      width: 100%
      margin-bottom: 8px

    &-text
      font-size: 16px
      line-height: 19px
      color: #212123

    &-input
      visibility: hidden
      opacity: 0
      width: 0.0001px
      position: absolute

      &:checked + .add-music__demo-label svg
        display: block

    &-label
      display: flex
      align-items: center
      justify-content: center
      gap: 10px
      user-select: none
      width: 220px
      cursor: pointer

      svg
        display: none

    &-checkbox
      display: inline-block
      width: 24px
      height: 24px
      display: flex
      align-items: center
      justify-content: center
      border: 1px solid #E7EBFF
      border-radius: 5px
      cursor: pointer

  &__style-btn
    background: #E7EBFF
    border-radius: 7px
    padding: 8px
    font-size: 16px
    line-height: 19px
    color: #FF6C6C
    width: 268px
    margin-right: 32px

    +md()
      width: 100%
      margin-bottom: 12px

  &__input-block
    position: relative
    width: 100%
    max-width: 683px

  &__input-placeholder
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: 20px
    font-size: 16px
    line-height: 19px
    color: #777B9E

    +md()
      font-size: 14px

    a
      color: #FF6C6C

  &__input-text
    height: 60px
    padding: 0 20px
    font-weight: 400
    font-size: 16px
    line-height: 19px
    border: 1px solid #E7EBFF
    border-radius: 10px
    width: 100%
    max-width: 683px

    +md()
      height: 45px
      font-size: 14px

    &::placeholder
      color: #777B9E

  &__textarea
    height: 125px
    padding: 20px
    font-weight: 400
    font-size: 16px
    line-height: 19px
    width: 100%
    max-width: 683px
    border: 1px solid #E7EBFF
    border-radius: 10px
    resize: none

    &::placeholder
      color: #777B9E

  &__buttons
    display: flex
    align-items: center
    width: 100%
    max-width: 683px
    gap: 20px

    +md()
      flex-direction: column
      gap: 0

  &__button-secondary
    height: 60px
    background: #E7EBFF
    border-radius: 10px
    flex-grow: 1
    font-weight: 600
    font-size: 16px
    line-height: 19px
    color: #45454E

    +md()
      width: 100%
      margin-bottom: 10px

  &__button-primary
    height: 60px
    background: #FF6C6C
    border-radius: 10px
    flex-grow: 1
    font-weight: 600
    font-size: 16px
    line-height: 19px
    color: #fff

    +md()
      width: 100%

.modal-header
  display: flex
  align-items: center
  gap: 10px
  margin-bottom: 20px

  img
    max-width: 100%
    flex-shrink: 0

  &__title
    font-weight: 600
    font-size: 24px
    line-height: 29px

  &__button
    width: 40px
    height: 40px
    border: 1px solid $border
    border-radius: 7px
    display: flex
    align-items: center
    justify-content: center

.modal-body
  &__genres
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))
    gap: 10px

  &__button
    padding: 0 15px
    height: 55px
    border-radius: 10px
    border: 1px solid $outline
    display: flex
    align-items: center
    justify-content: space-between
    font-size: 15px
    line-height: 18px
    color: #2A2A2D
    transition: .3s ease
    text-align: left

    &:hover
      border: 1px solid $accent
      color: $accent

      svg path
        stroke: $accent

    svg
      max-width: 100%
      flex-shrink: 0
      transition: .3s ease

  &__save
    margin-top: 30px

  &__subgenres
    display: flex
    flex-direction: column
    gap: 10px

    &-title
      font-size: 15px
      line-height: 18px

  &__label
    display: flex
    align-items: center
    gap: 10px
    cursor: pointer

  &__input
    opacity: 0
    visibility: hidden
    position: absolute
    width: 0.0001px

    &:checked + .modal-body__checkbox svg
      display: block

  &__checkbox
    display: flex
    align-items: center
    justify-content: center
    width: 25px
    height: 25px
    border-radius: 5px
    border: 1px solid $border

    svg
      display: none
</style>
