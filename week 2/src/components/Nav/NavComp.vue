<template>
	<nav class="header-nav">
		<a class="header-nav__link" href="#">Ana Sayfa</a>
		<a class="header-nav__link" href="#">Hakkimizda</a>
		<a class="header-nav__link" href="#">Iletisim</a>
	</nav>
</template>

<style lang="scss" scoped>
.header-nav {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	&__link {
		margin: 0 10px;
		color: black;
		text-transform: uppercase;
		text-decoration: none;
	}
}
</style>