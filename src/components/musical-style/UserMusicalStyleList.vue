<template>
	<div class="musical-style">
		<h2 class="musical-style__title title_h2" data-editable>
			<span data-edit>{{ title }}</span>
		</h2>
		<div class="musical-style__list" v-if="data.length != 0">
			<UserMusicalStyleItem v-for="(item,index) in data" 
				:key="index" 
				:category="item" 
			/>
		</div>
	</div>
</template>

<script>
	import UserMusicalStyleItem from '@/components/musical-style/UserMusicalStyleItem.vue'

	export default {
		components: {
			UserMusicalStyleItem
		},
		data() {
			return{
				title: 'Музыкальные стили',
				data: [
					{
						icon: require('@/assets/img/adore.png'),
						name: 'обожаю',
						list: ['Дрим-поп', 'Метал', 'edm', 'Хардкор', 'Альтернативный рок', 'трэп', 'Неопсиходелия', 'гаражный рок', 'мамбл рэп', 'R&B']
					},
					{
						icon: require('@/assets/img/love.png'),
						name: 'люблю',
						list: ['Индастриал', 'Пост-рок', 'Альтернатива', 'Эмбиент', 'Фолк', 'Эмбиент', 'шугейз']
					},
					{
						icon: require('@/assets/img/not-love.png'),
						name: 'не присылать',
						list: ['Рэп', 'Поп', 'Кантри', 'Фанк', 'Трэш', 'Lo-fi', 'Эмбиент', 'Ню-метал', 'Постбоп']
					},
				]
			}
		}
	}
</script>
