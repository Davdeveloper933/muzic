<template>
	<div class="search__form">
		<h2 class="search__form-title title_h2">{{ title }}</h2>
		<SearchSelect :name="genreName" :selected="selected" @update-selected="addSelected" :defaultValue="'Выберите жанры'" :list="genre" :selectedType="'genre'" />
		<SearchSelect :name="categoriesName" :selected="selected" @update-selected="addSelected" :defaultValue="'Все'" :list="categories" :selectedType="'category'" />
		<SearchRangeSlider :max="max" :min="min" :name="priceName" @update-min-max="updateMinMax" />
		<button class="btn btn_fill" @click="this.$emit('update-list', this.minValue, this.maxValue)">{{ btnText }}</button>

	</div>
</template>

<script>
import SearchSelect from '@/components/search/SearchSelect.vue'
import SearchRangeSlider from '@/components/search/SearchRangeSlider.vue'

export default {
	props: ['profileList', 'min', 'max', 'categories', 'genre', 'selected'],
	components: {
		SearchSelect,
		SearchRangeSlider
	},
	emits: ['update-min-max', 'update-list'],
	data() {
		return {
			title: 'Фильтры',
			genreName: 'Жанры',
			categoriesName: 'Кураторы',
			priceName: 'Стоимость',
			btnText: 'Применить',
			minValue: this.min,
			maxValue: this.max,
		}
	},
	methods: {
		addSelected(selectedType, value) {
			this.selected[selectedType] = value;
		},
		updateMinMax(min, max) {
			this.minValue = min;
			this.maxValue = max;
		}
	}
}

</script>