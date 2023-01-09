<template>
	<div class="reviews">
		<h2 class="reviews__title title_h2">{{ title }}</h2>
		<div class="reviews__slider">
			<swiper
				:modules="modules"
				:slides-per-view="3"
				:space-between="30"
				navigation
				:pagination="{ type: 'fraction' }"
				@swiper="onSwiper"
				@slideChange="onSlideChange"
			>
				<swiper-slide v-for="(item, index) in data" :key="index">
					<ReviewItem :item="item" />
				</swiper-slide>
				...
			</swiper>
		</div>
	</div>
</template>

<script>
	// import Swiper core and required modules
	import { Navigation, Pagination } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/vue';
	import ReviewItem from '@/components/reviews/ReviewItem.vue'
	
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	export default {
		components: {
			Swiper,
			SwiperSlide,
			Navigation,
			Pagination,
			ReviewItem
		},
		setup() {
			const onSwiper = (swiper) => {
				console.log(swiper);
			};
			const onSlideChange = () => {
				console.log('slide change');
			};
			return {
				onSwiper,
				onSlideChange,
				modules: [Navigation, Pagination],
			};
		},
		data() {
			return {
				title: 'Все рецензии от куратора',
				data: [
					{
						name: 'Shape Of Despair',
						text: 'Скорость работы Shape Of Despair вполне сопоставима с темпами их музыки. На то, чтобы записать и выпустить шесть составивших «Return To The Void» композиций, им потребовалось семь лет — в среднем, больше года на каждый...'
					},
					{
						name: 'Qliphothic Realm',
						text: 'Итальянец Снор Фладе играет андерграундный блэк-метал уже почти десяток лет. На счету этого мульти-инструменталиста пять EP с one-man-проектом Feretri и еще парочка с Ortro, однако “Entrance” – его первая полноформатная рабо...'
					},
					{
						name: 'Under One Flag',
						text: 'Сабж - результат очередных эксгумационных действий сотрудников лейбла Insulation по поволжскому андеграунду. Данный коллектив недолго существовал в Саратове в начале 90-х, и сингл "Праздник Ветра"является чуть ли...'
					},
					{
						name: 'Shape Of Despair',
						text: 'Скорость работы Shape Of Despair вполне сопоставима с темпами их музыки. На то, чтобы записать и выпустить шесть составивших «Return To The Void» композиций, им потребовалось семь лет — в среднем, больше года на каждый...'
					},
					{
						name: 'Qliphothic Realm',
						text: 'Итальянец Снор Фладе играет андерграундный блэк-метал уже почти десяток лет. На счету этого мульти-инструменталиста пять EP с one-man-проектом Feretri и еще парочка с Ortro, однако “Entrance” – его первая полноформатная рабо...'
					},
					{
						name: 'Under One Flag',
						text: 'Сабж - результат очередных эксгумационных действий сотрудников лейбла Insulation по поволжскому андеграунду. Данный коллектив недолго существовал в Саратове в начале 90-х, и сингл "Праздник Ветра"является чуть ли...'
					},
					{
						name: 'Shape Of Despair',
						text: 'Скорость работы Shape Of Despair вполне сопоставима с темпами их музыки. На то, чтобы записать и выпустить шесть составивших «Return To The Void» композиций, им потребовалось семь лет — в среднем, больше года на каждый...'
					},
					{
						name: 'Qliphothic Realm',
						text: 'Итальянец Снор Фладе играет андерграундный блэк-метал уже почти десяток лет. На счету этого мульти-инструменталиста пять EP с one-man-проектом Feretri и еще парочка с Ortro, однако “Entrance” – его первая полноформатная рабо...'
					},
					{
						name: 'Under One Flag',
						text: 'Сабж - результат очередных эксгумационных действий сотрудников лейбла Insulation по поволжскому андеграунду. Данный коллектив недолго существовал в Саратове в начале 90-х, и сингл "Праздник Ветра"является чуть ли...'
					},
					{
						name: 'Shape Of Despair',
						text: 'Скорость работы Shape Of Despair вполне сопоставима с темпами их музыки. На то, чтобы записать и выпустить шесть составивших «Return To The Void» композиций, им потребовалось семь лет — в среднем, больше года на каждый...'
					},
					{
						name: 'Qliphothic Realm',
						text: 'Итальянец Снор Фладе играет андерграундный блэк-метал уже почти десяток лет. На счету этого мульти-инструменталиста пять EP с one-man-проектом Feretri и еще парочка с Ortro, однако “Entrance” – его первая полноформатная рабо...'
					},
					{
						name: 'Under One Flag',
						text: 'Сабж - результат очередных эксгумационных действий сотрудников лейбла Insulation по поволжскому андеграунду. Данный коллектив недолго существовал в Саратове в начале 90-х, и сингл "Праздник Ветра"является чуть ли...'
					}
				]
			}
		}
	}
</script>