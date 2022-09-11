<script setup>
const props = defineProps(['text', 'color']);

</script>

<template>
	<button class="button" :class="[props.color == 'primary' ? '-primary' : '-secondary']">
		{{ props.text }}
	</button>
</template>

<style lang="scss" scoped>
.button {
	display: block;
	margin: 0 10px;
	padding: 10px 40px;

	border: none;
	border-radius: 8px;

	&.-primary {
		color: var(--primary-button-text-color);
		background-color: var(--primary-button-color);
	}

	&.-secondary {
		color: var(--secondary-button-text-color);
		background-color: var(--secondary-button-color);
	}
}
</style>