class Game{
    constructor(name){
        this.name = name
    }
}
class Menu{
    constructor(){
        this.games = []
        this.selectedGames = null
    }
    start(){
        let selection = this.showMainMenuOptions()
        while(selection!=0){
            switch(selection){
                case `1`:
                this.createGame()
                break
                case `2`:
                this.deleteGame()
                break
                case `3`:
                this.displayGame()
                break
                default:
                selection = 0
            }
            selection=this.showMainMenuOptions()
        }
     alert(`Goobye Bich`)
    }
    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Create Game
        2) Delete Game
        3) Display Games
        `)
    }
    displayGame(){
        let gameString = ``
        for(let i=0;i<this.games.length;i++){
            gameString+=i+`) `+this.games[i].name+`\n`
        }
        alert(gameString)
    }
    createGame(){
        let name = prompt(`Enter thy game`)
        this.games.push(new Game(name))
    }
    deleteGame(){
        let index = prompt(`what will be removed from existence?`)
        if(index>=0&&index<this.games.length){
            this.games.splice(index,1)
        }
    }
 }
 let menu = new Menu()
 menu.start()