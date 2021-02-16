<template>
	<div>
		<b-modal v-model="getModalStatus" ref="my-modal">
			<div class="d-block text-center">
				<h3>Hello from My Modal!</h3>
				<h4>Error happened: {{ $ml.get(getErrorCode) }}</h4>
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
			errorCode: "",
		};
	},

	computed: {
		getModalStatus() {
			return this.$store.getters.modalStatusGetter;
		},

		getErrorCode() {
			return (this.errorCode = this.$store.getters.errorCodeGetter);
		},
	},
};
</script>

<style scoped></style>
