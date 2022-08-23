document.getElementById("btn").addEventListener("click", ()=>{
  generate();
  getPic();
});

generate = () => {
    quotes = {
        '-Gadaffi': '“Their ages are 17. They give them pills at night, they put hallucinatory pills in their drinks, their milk, their coffee, their Nescafe.”',
        '-Gadaffi' : '“There is no state with a democracy except Libya on the whole planet.”', 
        '-Gadaffi'  : '“All right, then nobody can complain if we ask pregnant women to make parachute jumps.”',
        '-Robert Mugabe' : '"The only white man you can trust is a dead white man."',
        '-Joseph Stalin' : '"Ideas are more powerful than guns. We would not let our enemies have guns. Why should we let them have ideas?"',
        '-Idi Amin' : '"It’s not for me. I’ve tried human flesh, and it’s too salty for my taste."',
        '-Fidel Castro' : '"I am not a dictator, and I do not think I will become one. I will not maintain power with a machine gun."',
        '-Joseph Stalin' : '"One death is a tragedy; one million is a statistic."',
        '​-Mao Zedong' : '"To read too many books is harmful."',
        '​-Augusto Pinochet' : '"I’m not a dictator; it’s just that I have a grumpy face."',
        '-Robert Mugabe' : '“I have died many times – that’s where I have beaten Christ. Christ died once and resurrected once.”',
        '-Robert Mugabe' : '“Our party must continue to strike fear in the heart of the white man, our real enemy.”',
        '—George W. Bush' : '"Rarely is the questioned asked: Is our children learning?"',
        '—George W. Bush' : "''There's an old saying in Tennessee — I know it's in Texas, probably in Tennessee — that says, fool me once, shame on — shame on you. Fool me — you can't get fooled again.''",
        '—George W. Bush' : '"They misunderestimated me."',
        '—George W. Bush': "The vast majority of our imports come from outside the country.",
        '-Robert Mugabe' : "“If you are ugly, you are ugly. Stop talking about inner beauty because men don’t walk around with X-ray machines to see inner beauty.”",
        '-Benito Mussolini' : "I have been a racist since 1921. I don't know how they can think I'm imitating Hitler",
        '-Benito Mussolini' : "We do not argue with those who disagree with us, we destroy them."
    };
  
    // grab all the keys in the quotes object and store in an array
    let quotecontext = Object.keys(quotes);
    // grab a random key (quotecontext) and store it in randomcontext
    let author = quotecontext[Math.floor(Math.random() * quotecontext.length)];
    // grab the value(quote) that belongs to that key
    let quote = quotes[author]
  
    document.getElementById("quote").textContent = quote;
    document.getElementById("author").textContent = author;
    
  
  }

function getPic(){
  pictures = {
  '-Gadaffi' : "pics/0888103b45f26457f256189651b77a85--muammar-gaddafi-conversation.jpg",
  '-Robert Mugabe' : "pics/mugabe.jpg",
  '-Joseph Stalin' : "pics/stalin.jpg",
  '​-Mao Zedong' : "pics/mao.jpg",
  '​-Augusto Pinochet' : "pics/augusto-pinochet-7.jpg",
  '-Fidel Castro' : "pics/990904-Fidel_Castro-76703931.jpg",
  "-Idi Amin" : "pics/idi amin.jpg",
  '—George W. Bush' : "pics/bush-face.jpg",
  '-Benito Mussolini': "pics/mussolini.jpeg"

 }
 //stores the properties of the pictures object in an array, then loops through the 
 //array and compares the author in the html to each value in the array for a match
 let pictureKeys = Object.keys(pictures)
 let author = document.getElementById("author").innerHTML
 for(let i = 0; i< pictureKeys.length +1; i++){
  if(author == pictureKeys[i]){
    document.getElementById("img").src= pictures[pictureKeys[i]]
  }
}
}
