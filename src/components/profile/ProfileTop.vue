<template>
  <div class="profile__top">
    <h1
        v-if="userType === 'curator'"
        class="profile__top-name-curator profile__top-name-curator--mobile">
      <span>{{ name }}</span>
    </h1>
    <div
        class="profile__top-img"
        :class="isEdit ? 'profile__top-img_edit' : ''"
        data-editable
    >
      <img :src="img" :alt="name" data-edit ref="logoImg" />
      <button
          v-if="isEdit"
          class="profile__top-img-edit edit"
          @click="this.$triggerLoad($event)"
      >
        <img src="~@/assets/img/edit.svg" alt="Редактировать" />
      </button>
      <input
          hidden
          type="file"
          name="file"
          id="file"
          ref="logoFile"
          @change="this.$changeImage($event)"
      />
    </div>
    <div class="profile__top-content content">
      <div
          v-if="cat"
          class="profile__top-cat-wrapper">
        <div
            v-for="item in cat"
            :key="item.value"
            class="profile__top-cat">
          <span>{{ item.title }}</span>
        </div>
      </div>
      <h1
          class="profile__top-name"
          :class="{'profile__top-name-curator--desktop' : userType === 'curator'}"
          data-editable>
        <span data-edit contenteditable="false">{{ name }}</span>
        <button
            v-if="isEdit"
            class="profile__top-name-edit edit"
            @click="this.$edit($event, name)"
        >
          <img src="~@/assets/img/edit.svg" alt="Редактировать" />
        </button>
      </h1>
      <div
          class="profile__top-wrapper"
          :class="{'profile__top-wrapper-curator' : userType === 'curator'}"
          data-editable>
        <div
            class="profile__top-desc"
            ref="descEdit"
            data-ref="descEdit"
            contenteditable="false"
            data-edit
        >
          <p
              v-for="(paragraph, index) in desc"
              :key="index"
          >{{ paragraph }}
            <button
                v-if="isEdit"
                ref="descEditBtn"
                class="profile__top-desc-edit edit"
                @click="this.$edit($event, desc)"
            >
              <img src="~@/assets/img/edit.svg" alt="Редактировать" />
            </button>
          </p>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isEdit", "img", "name", "desc", "cat", "userType"],
  mounted() {
    let btn = this.$refs.descEditBtn;
    let target = this.$refs.descEdit;
    // target.querySelector("p:last-child").appendChild(btn);
  },
};
</script>
