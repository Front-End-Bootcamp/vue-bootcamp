<script setup>
import HeaderComp from '@/components/Header/HeaderComp.vue';
import Headline from './components/Headline/Headline.vue';
import Footer from './components/Footer/Footer.vue';

const title = "Kodluyoruz Vue Bootcamp";
const description = "Türkiye'yi teknolojide bir yetenek merkezi yapmak için gençlere ihtiyaçları olan eğitimi sağlıyoruz.";

</script>

<template>
	<main class="main">
		<HeaderComp></HeaderComp>
		<Headline :title="title" :description="description">
			<template #subtitle>Hayalindeki yazılım kariyerine ilk adımı at</template>
		</Headline>
		<Footer></Footer>
	</main>
</template>

<style scoped>
.main {
	flex-grow: 1;
}
</style>
