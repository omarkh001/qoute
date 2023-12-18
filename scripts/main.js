var cartona=[`“Be yourself; everyone else is already taken.”
― Oscar Wilde`,`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss`,`
“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”
― Albert Camus
`,`“If you tell the truth, you don't have to remember anything.”
― Mark Twain`];


var lastNum = -1;
function addqoute(){
    var qoute=cartona[Math.floor(Math.random() *cartona.length)];

    while(qoute == lastNum)
    {
        qoute=cartona[Math.floor(Math.random() *cartona.length)]
    }
    
    console.log (qoute)
    document.getElementById("test").innerHTML=qoute

    lastNum = qoute;
    
    }



