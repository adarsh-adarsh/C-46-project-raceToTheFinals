class Player 
{
  constructor()
  {
    this.index = null;
    this.name = null;
  }

  getCount()
  {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{playerCount = data.val();})
  }

  updateCount(count)
  {
    database.ref('/').update({playerCount: count});
  }

  update()
  {
    var playerIndex = "players/player" + this.index;
  }

  static getPlayerInfo()
  {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{allPlayers = data.val();})
  }

  getPlayers()
  {
    database.ref("newPlayers").on("value",(data)=>{this.rank = data.val();})
  }
}
