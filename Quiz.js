class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    //write code to change the background color here
background("yellow")

    //write code to show a heading for showing the result of Quiz
    textSize(25)
    text("Results",200,200)
    //call getContestantInfo( ) here
    getContestantInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      var displayAns = 530;
      fill ("blue")
      textSize(20);
      text("*NOTE*:Contestant who answered the correct are highlighted green",130,230)
    }

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
     var correstAns ="2";
      if(correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill('red')
      textSize (15)


    }

    displayAns+=30;
    textSize (15)
    text (allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayAns)
  
  

  }
}
