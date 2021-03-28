

//1. Create an **array of 5 elements**, each element is a random number of either 1 or 0

let randomizedRange = 2
let randomNum = () => Math.floor( Math.random()*randomizedRange)
let randomArray = []
let counter = 0;

while( counter <5){
    randomArray[counter] = randomNum()
    counter++
}
console.log('Ans of Q1: randomArray', randomArray)

// 2. Create a while loop, that goes through each element in the array, check if they are 1 or 0
//3. Also create a counter variable to keep track of the number of 1 and 0 values in the array

let i = 0
let countOne = 0
let countZero = 0

while(i<randomArray.length ){
   if(randomArray[i]=== 0){
        console.log('this array element is 1')
        countZero++
    }
    else {
        console.log('this array element is 0')
        countOne++
    }
    i++
}
console.log(`Ans of Q2 & 3: ${countZero} Zero and ${countOne} One`)


// 4. If the number of 1s is 5, announce the jackpot prize

if(countOne===5) console.log('Ans of Q4: congrats you have won the Jackpot')

// 5. If the number of 0s is 5, announce the congrat message

if(countZero===5) console.log(' Ans of Q5: congrats you have all zero number! Goodluck with Jackpot nextime!!')

//6. If the number of 1s is 3 < x < 5, announce smaller prize

if(countOne>3 && countOne < 5) console.log('Ans of Q6: congrats you have won a smaller prize!')

//7. Create a while loop that will run the above application for an undefinite number of time, and only break out of the loop if the jackpot prize is won. 
//8. Create a variable to keep track of many rounds have been played in order to win the jackpot

const RoundToWinJackpot = () => {
    let count= 0
    let round = 0
    randomizedRange = 6
    let randomArr = [ randomNum(), randomNum(), randomNum(), randomNum(), randomNum()]
    
     let j = 0
    while(j<randomArr.length ){
        count += randomArr[j] === 1? 1 : 0
        j++
        if( j === randomArray.length && count !== 5) {
            j=0; count = 0; round++
            randomArr = [ randomNum(), randomNum(), randomNum(), randomNum(), randomNum()]
        } 
        else if( count === 5) console.log('Ans of Q7&8: congrats!! Finally Jackpot is yours!! You have played total '+ round + ' round to win the jackpot' )
    }
    return round
}
RoundToWinJackpot()

// 9. If each round costs 50 cents, run the above program 5 times, either manually or use a while loop to help you, in order to learn the average amount of money you have to spend on winning a jackpot 😄 

let totalRoundToWin = 0
let wintCounter = 0

while (wintCounter <5){
    totalRoundToWin += RoundToWinJackpot()
    wintCounter++
}
let avgRoundToWin = totalRoundToWin / wintCounter 
let avgMoneyToWin = avgRoundToWin*50/100
console.log(`Ans of Q9: average round need to win Jackpot is ${avgRoundToWin}. So average amount of money needed to win Jackpot is ${avgMoneyToWin} `)

// 10. Increase the random number range to be any number between 0 - 5, run the program on number 9 again to see how much money you would actually have to spend to win a jackpot

randomNum = () => Math.round(Math.random()*5)
avgRoundToWin = Math.round(( RoundToWinJackpot() + RoundToWinJackpot() + RoundToWinJackpot() + RoundToWinJackpot() + RoundToWinJackpot()) /5 );
avgMoneyToWin = avgRoundToWin * .50
console.log(`Ans of Q10: average round need to win Jackpot is ${avgRoundToWin}. So average amount of money needed to win Jackpot is ${avgMoneyToWin} `)

// 11. If the jackpot prize was 30000 EUR, how much profit/loss do you make?

let jackpotPrize = 30000
let result = 30000>avgMoneyToWin? 'profit' : 'loss'
let amount = result=='loss'? avgMoneyToWin-30000 : 30000 - avgMoneyToWin
  console.log(`Ans of Q11: Your ${result} from jackpotPrize is ${amount}`)
