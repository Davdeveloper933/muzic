<template>
  <div class="b-file">
    <span class="b-file__label-text" v-if="label">{{ label }}</span>
    <label class="b-file__label typography-text" :for="id" v-if="!showPreview">
      <div class="b-file__field">
        <base-icon class="b-file__image" name="image" />
        <span class="b-file__field-text typography-text">Загрузить фото</span>
      </div>
    </label>
    <div class="b-file__preview" v-show="showPreview">
      <img ref="preview" src="" />
      <label :for="id" class="b-file__download">
        <base-icon name="download" fill="#FF6C6C" />
      </label>
    </div>
    <input
      ref="input"
      @change="getFile"
      class="b-file__input"
      :id="id"
      type="file"
      accept=".jpg,.jpeg,.png"
    />
  </div>
</template>

<script>
import BaseIcon from "@/components/base1/BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      file: null,
      showPreview: false,
    };
  },
  props: {
    id: String,
    label: String,
  },
  methods: {
    getFile() {
      this.showPreview = true;
      const image = this.$refs.input.files[0];
      const preview = this.$refs.preview;
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);

      fileReader.onload = function (e) {
        preview.src = e.target.result;
      };
    },
  },
};
</script>

<style lang="sass" scoped>
.b-file
  width: fit-content

  &__image
    +xs()
      max-width: 40%

  &__label
    font-weight: 500
    color: $label
    display: flex
    align-items: flex-start
    flex-direction: column
    gap: 20px
    width: fit-content

    &-text
      display: inline-block
      color: $label
      margin-bottom: 20px
      font-weight: 500



  &__input
    opacity: 0
    position: absolute
    visibility: hidden
    width: 1px


  &__field
    width: clamp(135px, 15vw, 205px)
    aspect-ratio: 1/1
    border-radius: 10px
    background-color: $background-light
    border: 1px solid $border
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    gap: 20px
    cursor: pointer
    transition: 0.3s ease

    &-text
      font-weight: 500
      color: $label
      font-size: 16px
      line-height: 19px
      letter-spacing: -0.04em

    &:hover
      border: 1px solid darken($border, 10%)



  &__preview
    width: clamp(135px, 15vw, 205px)
    aspect-ratio: 1/1
    border-radius: 10px
    position: relative
    overflow: hidden

    &:hover
      .b-file__download
        transform: translateY(0)



    img
      width: 100%
      object-fit: cover
      object-position: center
      height: 100%



  &__download
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    background-color: $background
    display: flex
    align-items: center
    justify-content: center
    padding: 5px 0
    cursor: pointer
    transition: 0.3s ease
    transform: translateY(100%)
</style>
