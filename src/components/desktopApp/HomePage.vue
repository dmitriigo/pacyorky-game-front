<template>
	<div id="home-page" class="h-100">
		<b-container class="main-container h-50">
			<b-row cols="1" class="h-100 d-flex align-content-between">
				<b-col>
					<img
						src="@/assets/home-page/family-home-page.png"
						class="family-picture"
					/>
				</b-col>

				<b-col>
					<p class="text-center text-in-middle">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
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
export default {
	name: "HomePage",
};
</script>

<style scoped>
#home-page {
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
