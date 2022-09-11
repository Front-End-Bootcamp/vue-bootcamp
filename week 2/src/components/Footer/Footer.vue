<template>
	<footer class="footer">
		<cite class="footer__copyright">
			2022 &copy; Kodluyoruz
		</cite>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	min-height: 80px;

	&__copyright {
		font-size: 16px;
		font-weight: 400;
		font-style: normal;
		text-transform: uppercase;
	}
}
</style>