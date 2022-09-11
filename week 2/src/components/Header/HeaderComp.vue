<script setup>
import NavComp from '@/components/Nav/NavComp.vue';
</script>

<template>
	<header class="header">
		<img src="/assets/image/logo.png" alt="Kodluyoruz">
		<NavComp></NavComp>
	</header>
</template>

<style lang="scss" scoped>
.header {
	padding: 0 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}
</style>