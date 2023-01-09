<template>
	<div class="search__select">
		<h4 class="search__select-title title_h4">{{ name }}</h4>
		<Select2 :placeholder="defaultValue" :options="list" :settings="{minimumResultsForSearch: -1}" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
	</div>
</template>

<script>
import Select2 from 'vue3-select2-component';

export default {
	props: ['name', 'list', 'defaultValue', 'selected', 'selectedType'],
	emits: ['update-selected'],
	components: {
		Select2
	},
	methods: {
		myChangeEvent(val){
			console.log(val);
		},
		mySelectEvent({id, text}){
			this.$emit('update-selected', this.selectedType, text)
		}
	}
}

</script>