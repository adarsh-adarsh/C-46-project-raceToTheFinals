class Game 
{
  constructor()
  {
    //Matter.body.setAngle(this.body,angle);
  }

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){gameState = data.val();})
  }

  update(state)
  {
    database.ref('/').update({gameState: state});
  }

  async start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists())
      {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  match1()
  {
    if(allPlayers[0].score>allPlayers[1].score)
    {
      allPlayers[0].gameState = 2;
      allPlayers[1].gameState = 3;
      Array.splice(allPlayers[1]);
    }
    else if (allPlayers[1].score>allPlayers[0].score)
    {
      allPlayers[1].gameState = 2;
      allPlayers[0].gameState = 3;
      Array.splice(allPlayers[0]);
    }
  }

  match2()
  {
    if(allPlayers[2].score>allPlayers[3].score)
    {
      allPlayers[2].gameState = 2;
      allPlayers[3].gameState = 3;
      Array.splice(allPlayers[3]);
    }
    else if (allPlayers[3].score>allPlayers[2].score)
    {
      allPlayers[3].gameState = 2;
      allPlayers[2].gameState = 3;
      Array.splice(allPlayers[2]);
    }
  }

  play()
  {
    form.hide();
    Player.getPlayerInfo();
    player.getPlayers();
    if(allPlayers!== undefined)
    {
      background("bg",backgroundImage);
      //var index = 0;
      var goalKeeper = createSprite(200,200);
      goalKeeper.addImage("gk",goalKeepingGloves);
      goalKeeper.x = world.mouseX;
      goalKeeper.y = world.mouseY;
      rand1 = randomNumber();
      rand2 = randomNumber();
      ball.x = rand1;
      ball.y = rand2;
      ball.velocityX = 5;
      ball.velocityY = 5;
      if(goalKeeper.isTouching(ball))
      {
        ball.velocityX = 0;
        ball.velocityY = 0;
        player.score+=1;
      }
      else
      {
        player.score = player.score;
      }
      this.match1();
      this.match2();
    }
    drawSprites();
  }

 /* finals()
  {
    if(allPlayers[].score>allPlayers[].score)
    {
      allPlayers[].gameState = 5;
      allPlayers[].gameState = 4;
    }
    else if (allPlayers[].score>allPlayers[].score)
    {
      allPlayers[].gameState = 5;
      allPlayers[].gameState = 4;
    }
  }
  */
}














/*
      for(var plr in allPlayers)
      {
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
      }
*/
