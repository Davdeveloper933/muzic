<template>
	<div class="musical-style__col">
		<div class="musical-style__name-wrapper">
			<div class="musical-style__icon"><img :src="category.icon" :alt="category.name"></div>
			<h3 class="title_h3 musical-style__subtitle">{{ category.name }}</h3>
		</div>
		<div class="musical-style__items" v-if="category.list != 0">
			<div class="musical-style__item" v-for="(item, index) in category.list"
				:key="index"
			>
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['category'],
	emits: ['update:category'],
	data() {
		return {
			addButtonText: '+ добавить'
		}
	},
	methods: {
		removeItem(e) {
			this.$emit('update:category', this.category.list.splice(e.target.dataset.id, 1));
		},
		addItem(e) {
			let text = prompt('Введите название стиля');
			if (text) {
				this.$emit('update:category', this.category.list.push(text));
			}
		}
	}
}
</script>
