/* this script will generate a series of messages for users at random*/ 
function randomGenerator (num){
    return Math.floor(Math.random() * num)
} 
const messagesOfHope = {
    dailyAffirmation : ['I have all the strength you need!', 'I radiate joy', 
    'I am fearfully and wonderfully made', 'I am beautiful', 'I am confident',
    'I am light'],
    motivationMessage: ['Just do it!', 'Nothing is impossible for you', 
    'Think big, make it happen'],
    quotes: ['Every day is a chance to be better','There is joy in every journey',
    'When you focus on the good, the good gets better',
    'Work hard in silence,let your success be your noise']
}

let messageOfTheDay = [];


    for (messages in messagesOfHope){
      let nextMessage = randomGenerator(messagesOfHope[messages].length);
      console.log(nextMessage);
      if (nextMessage === 1 || nextMessage===0){
        messageOfTheDay.push(`Your daily affirmation is: ${messagesOfHope[messages][nextMessage]}.`);
      } else if(nextMessage === 2){
        messageOfTheDay.push(`Here's a motivational message for you: ${messagesOfHope[messages][nextMessage]}.`);
      }else if (nextMessage === 3){
        messageOfTheDay.push(`Today's quote is: ${messagesOfHope[messages][nextMessage]}.`);
      }else if (nextMessage === 4){
        messageOfTheDay.push(`Say this: ${messagesOfHope[messages][nextMessage]}.`);
      }else if (nextMessage === 5){
        messageOfTheDay.push(`Read this out loud: ${messagesOfHope[messages][nextMessage]}.`);
      }
      else if (nextMessage === 6){
        messageOfTheDay.push(`Today: ${messagesOfHope[messages][nextMessage]}.`);
      }
      else {
        messageOfTheDay.push(`Sorry wrong input, please try again!.`);
      }
    }
    
    function messageReturn(){   
        console.log(messageOfTheDay.join('\n'));
}


messageReturn(messageOfTheDay);



