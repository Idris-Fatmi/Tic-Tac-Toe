class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("start")
        this.title=createElement("h2")
        this.greeting=createElement("h3")
    }
    display(){
        this.title.html("Tic-Tac-Toe")
        this.title.position(300,100)
        this.input.position(400,200)
        this.button.position(500,300)
        this.greeting.position(450,250)
    }
}