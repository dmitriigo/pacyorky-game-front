<template>
	<div>
		<b-modal v-model="modalStatus" ref="my-modal">
			<div class="d-block text-center">
				<h3>Hello from My Modal!</h3>
			</div>
		</b-modal>
	</div>
</template>

<script>
export default {
	name: "ErrorModal",

	data() {
		return {
			modalStatus: false,
		};
	},

	computed: {
		getModalStatus() {
			return this.$store.getters.showModalGetter;
		},
	},

	watch: {
		getModalStatus() {
			this.modalStatus = true;
		},
	},
};
</script>

<style scoped></style>
