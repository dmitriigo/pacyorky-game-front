<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-row>
          <p v-if="beforeGame > 0">Игра начнется в {{ game.startAt | formatDate }}</p>
          <p v-if="beforeGame > 0">через: {{ beforeGame }}</p>
        </b-row>
        <b-row>
          <b-col><img style="height: auto; width: 100%" :src="require('@/assets/pole/pole.png')"></b-col>
          <b-col v-if="false"><img style="height: auto; width: 100%"
                                   :src="require('@/assets/cards/character/rubashka.png')"></b-col>
          <b-col>
            <b-row>
              <b-col class="m-3" style="display: flex; justify-content: center; align-items: center"><img
                  style="height: auto; width: 50%" :src="require('@/assets/cards/stuff/rubashka.png')"></b-col>
              <b-col class="m-3" style="display: flex; justify-content: center; align-items: center"><img
                  style="height: auto; width: 50%" :src="require('@/assets/cards/dishes/rubashka.png')"></b-col>
            </b-row>
            <b-row>
              <b-col class="m-3" style="display: flex; justify-content: center; align-items: center"><img
                  style="height: auto; width: 50%" :src="require('@/assets/cards/holiday/rubashka.png')"></b-col>
              <b-col class="m-3" style="display: flex; justify-content: center; align-items: center"><img
                  style="height: auto; width: 50%" :src="require('@/assets/cards/rituals/rubashka.png')"></b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col v-if="playersCards.character.name">
            Character
            <img
                style="height: auto; width: 50%"
                :src="getUrl('character', playersCards.character.name)">
          </b-col>
          <b-col v-if="playersCards.dishes.length > 0">
            dishes
            <img v-for="dish in playersCards.dishes" style="height: auto; width: 50%"
                 :src="getUrl('dishes', dish.name)">
          </b-col>
          <b-col v-if="playersCards.stuff.length > 0">
            stuff
            <img v-for="stuff in playersCards.stuff"
                 style="height: auto; width: 50%"
                 :src="getUrl('stuff', stuff.name)">
          </b-col>
          <b-col v-if="playersCards.rituals.length > 0">
            rituals
            <img v-for="ritual in playersCards.rituals"
                 style="height: auto; width: 50%"
                 :src="getUrl('rituals', ritual.name)">
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "GameDesktop",
  data: function () {
    return {
      gameId: 0,
      game: {},
      playersCards: {
        dishes: [],
        rituals: [],
        stuff: [],
        character: {}
      },
      beforeGame: 0,
      intervalVal: undefined
    }
  },
  mounted() {
    this.gameId = this.$route.params.id;
    let self = this;
    this.intervalVal = setInterval(function () {
      axios.get('/api/games/' + self.gameId).then(response => {
        self.game = response.data;
        self.beforeGame = Math.floor((new Date(self.game.startAt).getTime() / 1000) - (new Date().getTime() / 1000));
        if (self.beforeGame < 0) {
          self.startGame();
          clearInterval(self.intervalVal)
        }
      })
    }, 1000)
  },
  methods: {
    startGame: function () {
      axios.get('/api/game/' + this.gameId + '/start').then(res => {
        console.log(res)
        if (!res.data) {
          return;
        }
        this.playersCards.character = res.data.character;
        let playerDeck = res.data.deck;
        for (let field in this.playersCards) {
          console.log(playerDeck)
          for (let card of playerDeck) {
            if (card.cardType.toLowerCase() === field) {
              this.playersCards[field].push(card);
            }
          }
          console.log(field)
        }
      })
    },
    getUrl: function (path, name) {
      return require('@/assets/cards/'+path+'/'+name+'.png')
    }
  }
}
</script>

<style scoped>

</style>