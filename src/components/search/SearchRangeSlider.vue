<template>
	<div class="search__range">
		<h4 class="search__range-title title_h4">{{ name }}</h4>
		<div class="search__range-inputs">
			<div class="search__range-input-wrapper search__range-input-wrapper_from">
				<input type="number" class="search__range-input" ref="searchRangeMin" id="search-range-min" min="0" readonly :value="minValue">
			</div>
			<div class="search__range-input-wrapper search__range-input-wrapper_to">
				<input type="number" class="search__range-input" ref="searchRangeMax" id="search-range-max" :max="max" readonly :value="maxValue">
			</div>
		</div>
		<Slider v-model="value" :tooltips="false" :lazy="false" :min="min" :max="max" @update="changeInputs" @change="updateValues" />
	</div>
</template>

<script>
import Slider from '@vueform/slider'

export default {
	props: ['name', 'min', 'max'],
	components: {
		Slider
	},
	emits: ['update-min-max'],
	mounted() {
		setTimeout(() => {
			this.value = [this.min, this.max],
			this.maxValue = this.max;
		}, 100)
	},
	data() {
		return {
			minValue: this.min,
			maxValue: this.max,
			value: [this.min, this.max],
		}
	},
	methods: {
		changeInputs() {
			this.minValue = this.value[0];
			this.maxValue = this.value[1];
		},
		updateValues() {
			this.$emit('update-min-max', this.value[0], this.value[1]);
		}
	}
}
</script>

<style src="@vueform/slider/themes/default.css"></style>