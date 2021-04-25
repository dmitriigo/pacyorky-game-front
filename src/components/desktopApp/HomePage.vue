<template>
	<div id="home-page" class="h-75">
		<b-container fluid class="main-container h-100">
			<b-row cols="1" class="h-75 d-flex align-content-around">
				<b-col>
					<img
						src="@/assets/home-page/family-home-page.png"
						class="family-picture"
					/>
				</b-col>

				<b-col>
					<p class="text-center text-in-middle">
						{{ $ml.get("home_page_text_middle") }}
					</p>
				</b-col>

				<b-col>
					<b-button class="start-game-btn">
						<p>{{ $ml.get("start_game") }}</p>
					</b-button>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import NavBar from "@/components/general/NavBar";
import MainFooter from "@/components/general/MainFooter";

export default {
	name: "HomePage",
	components: {
		NavBar,
		MainFooter,
	},
};
</script>

<style scoped>
.main-container {
	background-color: #ffffff;
	background: url("../../assets/home-page/background-patterns.png") top center
		no-repeat;
}

.main-container {
	margin-top: 10vh;
}

[class^="col"] {
	display: flex;
	justify-content: center;
}

p {
	margin-bottom: 0;
	font-family: "Montserrat";
	color: black;
}

.text-in-middle {
	width: 35vw;
	text-align: center;
	font-weight: bold;
	font-size: max(21px, 1.25vw);
}

.start-game-btn {
	display: inline-block;
	width: max(200px, 15vw);
	border-radius: 10px;
	background-color: #35838d;
	font-weight: 600;
	font-size: max(19px, 1.15vw);
}

.family-picture {
	width: max(400px, 30vw);
}
</style>
