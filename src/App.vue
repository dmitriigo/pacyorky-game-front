<template>
	<div id="app">
		<NavBar></NavBar>
		<!-- <ErrorModal></ErrorModal> -->
		<router-view></router-view>
		<MainFooter></MainFooter>
	</div>
</template>

<script>
import ErrorModal from "@/components/desktopApp/ErrorModal";
import axios from "axios";
import NavBar from "@/components/general/NavBar";
import HomePage from "@/components/desktopApp/HomePage";
import MainFooter from "@/components/general/MainFooter";
import GameDescription from "@/components/desktopApp/GameDescription";
import BoardGame from "@/components/desktopApp/BoardGame";
import GameRules from "@/components/desktopApp/GameRules";
import GameDashboard from "@/components/desktopApp/GameDashboard";
import ActivePlayersGraph from "@/components/desktopApp/ActivePlayersGraph";
import Modal from "@/components/desktopApp/Modal";

export default {
	name: "app",
	components: {
		ErrorModal,
		NavBar,
		HomePage,
		MainFooter,
		GameDescription,
		GameRules,
		BoardGame,
		GameDashboard,
		ActivePlayersGraph,
		Modal,
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
