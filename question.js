class Question{
    constructor(){
        this.title=createElement('h1')
        this.input1=createInput("Enter Your Name here");
        this.input2=createInput("enter Correct option no.")
        this.button=createButton("Submit")
        this.question=createElement("h3")
        this.option1=createElement("h4")
        this.option2=createElement("h4")
        this.option3=createElement("h4")
        this.option4=createElement("h4")
    }

    hide(){
        this.title.hide();
        this.button.hide();
        this.input1.hide();
        this.input2.hide();
      }
    
      display(){
        this.title.html("My Quiz Game");
        this.title.position(350, 0);

        this.question.html("Question :- What starts and End with letter 'E',but has only one letter ?")
        this.question.position(150,80)
        this.option1.html("1:Everyone")
        this.option1.position(150,100);
        this.option2.html("1:Everyone")
        this.option2.position(150,120);
        this.option3.html("1:Everyone")
        this.option3.position(150,140);
        this.option4.html("1:Everyone")
        this.option4.position(150,160);
        
        this.input1.position(130, 160);
        this.input2.position(130, 160);
        this.button.position(250, 200);
    
        this.button.mousePressed(()=>{

            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
    
          contestant.name = this.input1.value();
          contestant.answer = this.input2.value();
          
          contestantCount+=1;
          contestant.index=contestantCount;
          contestant.update()
          contestant.updateCount(contestantCount);
          
        });
    
      }
    }
    
}