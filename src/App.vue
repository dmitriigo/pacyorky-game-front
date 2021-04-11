<template>
	<div id="app">
		<NavBar></NavBar>
		<HomePage></HomePage>
		<ErrorModal></ErrorModal>
		<MainFooter></MainFooter>
	</div>
</template>

<script>
import ErrorModal from "@/components/desktopApp/ErrorModal";
import axios from "axios";
import NavBar from "@/components/general/NavBar";
import HomePage from "@/components/desktopApp/HomePage";
import MainFooter from "@/components/general/MainFooter";

export default {
	name: "App",
	components: {
		ErrorModal,
		NavBar,
		HomePage,
		MainFooter,
	},
	mounted() {
		this.setPlayerID();
	},
	methods: {
		setPlayerID: function() {
			axios.get("/api/player/id/").then((res) => {
				this.$cookies.set("playerid", res.data);
			});
		},
	},
	created() {
		document.querySelector("body").style.height = "100vh";
	},
};
</script>

<style lang="less">
#app {
	height: 100%;
	overflow: hidden;
}

@font-face {
	font-family: "Montserrat";
	src: url("assets/fonts/MontserratAlternates-Regular.ttf") format("truetype");
}

@font-face {
	font-family: Montserrat;
	src: url("assets/fonts/MontserratAlternates-Bold.ttf") format("truetype");
	font-weight: bold;
}

@font-face {
	font-family: Montserrat;
	src: url("assets/fonts/MontserratAlternates-SemiBold.ttf") format("truetype");
	font-weight: 600;
}
</style>
