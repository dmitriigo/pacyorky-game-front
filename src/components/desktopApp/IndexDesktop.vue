<template>
	<div>index page desktop</div>
</template>

<script>
export default {
	name: "IndexDesktop",

	created() {
		this.$store.dispatch("getGamesByIdAction");
	},
};
</script>

<style scoped></style>
