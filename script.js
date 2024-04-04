/* this script will generate a series of messages for users*/ 
function randomGenerator (num){
    return Math.floor(Math.random() * num)
} 

const messagesOfHope = {
    dailyAffirmation : ['I have all the strength you need!', 'I radiate joy', 
    'I am fearfully and wonderfully made', 'I am beautiful', 'I am confident'],
    motivationMessage: ['Just do it!', 'Nothing is impossible for you', 'Think big, make it happen'],
    quotes: ['Every day is a chance to be better','There is joy in every journey',
    'When you focus on the good, the good gets better',
    'Work hard in silence,let your success be your noise']
};

function messageReturn(num){
    /* IF STATEMENT HERE - if value inputted is greater than 4, 
    return something like "No daily affirmation for today"*/
}

//call the function with all four options 
messageReturn(1);
messageReturn(2);
messageReturn(3);
messageReturn(4);