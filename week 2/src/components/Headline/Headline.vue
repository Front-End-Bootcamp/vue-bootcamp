<script setup>
import ButtonComp from '../Button/ButtonComp.vue';

const props = defineProps(['title', 'subtitle', 'description']);
const isActive = true

</script>

<template>
	<div class="headline" :class="{ 'purple': isActive }">
		<h2 class="headline__subtitle">
			<slot name="subtitle">Baslik buraya gelecek</slot>
		</h2>
		<h1 class="headline__title">{{ props.title }}</h1>
		<p class="headline__description">{{ props.description }}</p>
		<div class="headline__buttons">
			<ButtonComp text="Kayit Ol" color="primary"></ButtonComp>
			<ButtonComp text="Bootcamplerimiz" color="secondary"></ButtonComp>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.headline {
	margin: 0;
	padding: 20px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	width: 100%;
	height: 540px;

	background: linear-gradient(93.97deg, #938CDB 36.07%, rgba(147, 140, 219, 0) 97.1%);

	&__title {
		width: 16ch;
		font-size: 80px;
		line-height: 100px;
		color: var(--text-color-light);
	}

	&__subtitle {
		font-size: 28px;
		color: var(--text-color-light);
	}

	&__description {
		color: var(--text-color-light);
	}

	&__buttons {
		display: flex;
		flex-direction: row;
	}
}
</style>