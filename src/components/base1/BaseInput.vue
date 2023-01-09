<template>
  <div v-if="!textarea" class="b-input">
    <label class="b-input__label typography-text" :for="id" v-if="label">{{
      label
    }}</label>
    <div class="b-input__field" :class="{ 'b-input_focused': focus }">
      <input
        class="b-input__input"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :modelValue="value"
        @input="modelValue"
        @focus="onFocus"
        @blur="onBlur"
      />
      <base-button
        class="b-input__button"
        :icon="icon"
        :width="width"
        :height="height"
        :fill="fill"
        :transparent="true"
        @button-click="$emit('button-click')"
      />
    </div>
  </div>
  <div v-else class="b-textarea">
    <label class="b-textarea__label typography-text" :for="id" v-if="label">{{
      label
    }}</label>
    <textarea
      class="b-textarea__textarea"
      :class="{ 'b-textarea_focused': focus }"
      :id="id"
      :placeholder="placeholder"
      :modelValue="value"
      @input="modelValue"
      @focus="onFocus"
      @blur="onBlur"
    ></textarea>
  </div>
</template>

<script>
import BaseButton from "@/components/base1/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      focus: false,
    };
  },
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
    icon: String,
    width: [String, Number],
    height: [String, Number],
    fill: String,
    value: String,
    transparentButton: {
      type: Boolean,
      default: true,
    },
    textarea: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    modelValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    onFocus() {
      this.focus = true;
    },
    onBlur() {
      this.focus = false;
    },
  },
};
</script>

<style lang="sass" scoped>
.b-input
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%

  &_focused
    border: 1px solid darken($border, 10%) !important


  &__label
    color: $label
    font-weight: 500
    display: inline-block
    margin-bottom: 10px
    font-size: 16px

  &__button
    transition: 0.3s ease

    &:hover
      opacity: 0.8



  &__field
    border-radius: 10px
    border: 1px solid $border
    width: 100%
    display: flex
    align-items: center
    overflow: hidden


  &__input
    flex-grow: 1
    border: none
    outline: none
    height: 60px
    padding: 0 20px
    width: 100%
    color: $input
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap

    &::placeholder
      color: $placeholder




.b-textarea
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%

  &_focused
    border: 1px solid darken($border, 10%) !important


  &__label
    color: $label
    font-weight: 500
    display: inline-block
    margin-bottom: 10px
    font-size: 16px

  &__textarea
    width: 100%
    border: none
    outline: none
    padding: 20px
    border-radius: 10px
    border: 1px solid $border
    min-height: 180px
    resize: none
    color: $input

    &::placeholder
      color: $placeholder
</style>
