<template>
	<div id="nav-bar">
		<b-container>
			<b-navbar toggleable="md">
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav class="w-100 d-flex align-items-center">
						<b-row class=" w-100 mx-0">
							<b-col cols="3">
								<b-nav-item href="#">
									<p>{{ $ml.get("home") }}</p>
								</b-nav-item>
							</b-col>

							<b-col cols="3">
								<b-nav-item href="#">
									<p>{{ $ml.get("game_description") }}</p>
								</b-nav-item>
							</b-col>

							<b-col cols="3">
								<b-nav-item href="#">
									<p>{{ $ml.get("game_rules") }}</p>
								</b-nav-item>
							</b-col>

							<b-col cols="3">
								<b-nav-item href="#">
									<p>{{ $ml.get("board_game") }}</p>
								</b-nav-item>
							</b-col>
						</b-row>

						<div>
							<img
								src="@/assets/navbar/ukraine-flag.svg"
								class="language-btn"
							/>
						</div>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</b-container>
	</div>
</template>

<script>
export default {
	name: "NavBar",
};
</script>

<style scoped>
#navbar {
	background-color: #ffffff;
}

[class^="col"] {
	display: flex;
	justify-content: center;
}

p {
	margin-bottom: 0;
	font-family: "Montserrat";
	font-size: max(13px, 0.73vw);
	text-transform: uppercase;
	color: black;
}

.language-btn {
	width: 35px;
}
</style>
