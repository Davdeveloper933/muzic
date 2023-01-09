<template>
	<div class="profile__top">
		<div class="profile__top-img" :class="isEdit ? 'profile__top-img_edit' : ''" data-editable>
			<img :src="img" :alt="name" data-edit ref="logoImg">
			<button v-if="isEdit" class="profile__top-img-edit edit" @click="this.$triggerLoad($event)"><img src="~@/assets/img/edit.svg" alt="Редактировать"></button>
			<input hidden type="file" name="file" id="file" ref="logoFile" @change="this.$changeImage($event)" />
		</div>
		<div class="profile__top-content content">
			<div class="profile__top-cat">{{ cat }}</div>
			<h1 class="profile__top-name" data-editable>
				<span data-edit>{{ name }}</span>
				<button v-if="isEdit" class="profile__top-name-edit edit" @click="this.$edit($event, name)"><img src="~@/assets/img/edit.svg" alt="Редактировать"></button>
			</h1>
			<div class="profile__top-wrapper" data-editable>
				<div class="profile__top-desc" data-edit v-html="desc"></div>
				<button v-if="isEdit" class="profile__top-desc-edit edit" @click="this.$edit($event, desc)"><img src="~@/assets/img/edit.svg" alt="Редактировать"></button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['isEdit', 'img', 'name', 'desc', 'cat']
	}
</script>
