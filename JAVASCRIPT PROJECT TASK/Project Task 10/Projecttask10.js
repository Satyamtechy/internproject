const getUserChoice=(userInput)=>{
    userInput = userInput.toLowerCase();
    if(userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb'){
        return userInput;
    }
    else{
        console.log(`error`);
    }
}

const getComputerChoice =()=>{
    var theRandomNumber = Math.floor(Math.random() * 10) + 1;
    if(theRandomNumber===0){
        return 'rock'
    }
    else if(theRandomNumber==='1'){
        return 'paper'
    }
    else{
        return 'scissors'
    }
}
const determineWinner = (userChoice,computerChoice)=>{
    if(userChoice === 'bomb'){
        return 'You destroyed your oponent! Congrats!'
    }

    if(userChoice === computerChoice){
        return 'the game was a tie'
    }
    else if(userChoice==='rock'){
        if(computerChoice==='paper'){
            return 'the computer won'
        }
        else{
            return 'the user won'
        }
    }
    else if(userChoice==='paper'){
        if(computerChoice==='scissors'){
            return 'the computer won'
        }
        else{
            return 'the user won'
        }
    }
    else if(userChoice==='scissors'){
        if(computerChoice==='rock'){
            return 'the computer won'
        }
        else{
            return 'the user won'
        }
    }
}
const playGame = ()=>{
    var userChoice = getUserChoice()
    console.log(`${userChoice}`)
    var computerChoice=getComputerChoice()
    console.log(`${computerChoice}`)
    console.log(determineWinner(userChoice,computerChoice))
}
playGame();