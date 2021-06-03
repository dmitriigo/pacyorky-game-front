<template>
	<b-container
		id="GameDashboard"
		class="d-flex flex-column justify-content-center align-items-center h-75"
	>
		<b-row class="d-flex justify-content-center">
			<b-col cols="auto" class="d-flex flex-column pr-4">
				<div class="middle-gif">
					<img src="#" />
				</div>

				<b-button @click="modalShow = !modalShow" class="game-btns mt-5">
					<p style="color: white" class="mb-0">
						{{ $ml.get("create_new_room") }}
					</p>
				</b-button>
			</b-col>

			<b-col cols="auto" class="d-flex flex-column pl-4">
				<p style="color: #35838d">
					{{ $ml.get("active_games_list") }}
				</p>

				<div
					class="d-flex flex-column justify-content-start flex-grow-1 active-games-list px-3 py-1"
				>
					<ActivePlayersGraph
						v-for="item in getActiveRoomsAndSortByPlayersCountAsc"
						:key="item.id"
						:activePlayersCount="item.players.length"
						:activeRoomName="item.name"
					></ActivePlayersGraph>
				</div>

				<b-button
					class="game-btns join mt-5"
					style="background-color: white; border: 4px solid #35838d"
				>
					<p class="mb-0">
						{{ $ml.get("join") }}
					</p>
				</b-button>
			</b-col>
		</b-row>

		<Modal :isModalShown="modalShow" @close="modalShow = !modalShow"></Modal>
	</b-container>
</template>

<script>
import { mapState } from "vuex";
import ActivePlayersGraph from "@/components/desktopApp/ActivePlayersGraph";
import Modal from "@/components/desktopApp/Modal";

export default {
	name: "GameDashboard",

	components: {
		ActivePlayersGraph,
		Modal,
	},

	data() {
		return {
			modalShow: false,
		};
	},

	computed: {
		...mapState({
			activeRooms: "listOfActiveRooms",
		}),
		getActiveRoomsAndSortByPlayersCountAsc() {
			return this.activeRooms
				.sort((a, b) => {
					var roomA = a.players.length;
					var roomB = b.players.length;
					if (roomB < roomA) {
						return -1;
					}
					if (roomB > roomA && roomB < 4) {
						return 1;
					}
					return 0;
				})
				.slice(0, 6);
		},
	},
};
</script>

<style scoped>
p {
	font-size: max(0.73vw, 15px);
	font-family: "Montserrat";
	color: black;
}

.game-btns {
	box-sizing: border-box;
	height: max(2.7vw, 42px);
	border-radius: 10px;
	border: 0;
	background-color: #5f9da5;
}

.middle-gif {
	width: max(24vw, 237px);
	height: max(15vw, 202px);
	border: 1px solid #35838d;
	border-radius: 10px;
}

.active-games-list {
	box-sizing: border-box;
	width: max(12vw, 217.4px);
	border: 1px solid #35838d;
	border-radius: 10px;
}

@media (min-width: 768px) and (max-width: 991.98px) {
	.middle-gif {
		box-sizing: border-box;
		width: 300px;
		height: 250px;
		border: 1px solid #35838d;
		border-radius: 10px;
	}
}

@media (min-width: 992px) and (max-width: 1199.98px) {
	p {
		font-size: 18px;
		font-family: "Montserrat";
		color: black;
	}

	.game-btns {
		box-sizing: border-box;
		height: 55px;
		border-radius: 10px;
		border: 0;
		background-color: #5f9da5;
	}

	.middle-gif {
		box-sizing: border-box;
		width: 450px;
		height: 300px;
		border: 1px solid #35838d;
		border-radius: 10px;
	}

	.active-games-list {
		box-sizing: border-box;
		width: 250px;
		border: 1px solid #35838d;
		border-radius: 10px;
		align-self: center;
	}

	.game-btns.join {
		width: 250px;
		align-self: center;
	}
}
</style>
