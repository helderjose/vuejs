new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    // desse exemplo
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    }
  }
});
