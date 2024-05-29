let CardsArray = [
{
name: 'cake',
 img: 'images/cake.png.jpg',

 },
 {
  name: 'sushi',
 img: 'images/sushi.png.jpg',
    
 },
 {
name: 'coffee',
 img: 'images/coffee.png.jpg',
        
 },
 {
 name: 'pancake',
 img: 'images/pancake.png.jpg',
            
 },
{
  name: 'ramen',
  img: 'images/ramen.png.jpg',
                
 },
 {
 name: 'lolipop',
 img: 'images/lolipop.png.jpg',
                        
 },
 {
    name: 'cake',
     img: 'images/cake.png.jpg',
    
     },
     {
      name: 'sushi',
     img: 'images/sushi.png.jpg',
        
     },
     {
    name: 'coffee',
     img: 'images/coffee.png.jpg',
            
     },
     {
     name: 'pancake',
     img: 'images/pancake.png.jpg',
                
     },
    {
      name: 'ramen',
      img: 'images/ramen.png.jpg',
                    
     },
     {
     name: 'lolipop',
     img: 'images/lolipop.png.jpg',
                            
     },
]  
CardsArray.sort(() => 0.5 -  Math.random())

let griddisplay = document.querySelector('#grid')
const resultdisplay = document.querySelector('#result')
let cardschosen = []
let cardschosenids = []
const cardswon = []

function createboard(){
    for(let i = 0; i < 12; i++){
      let card =  document.createElement('img')
      card.setAttribute('src', 'images/blank.png.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipcard)
      griddisplay.appendChild(card)
    }
}
createboard()

function checkmatch(){

 const cards = document.querySelectorAll('img')
 const optiononeid = cardschosenids[0]
 const optiontwoid = cardschosenids[1]
 console.log(cards);
  console.log('check for match!')

if(optiononeid == optiontwoid){
  cards[optiononeid].setAttribute('src', 'images/blank.png.jpg')
  cards[optiontwoid].setAttribute('src', 'images/blank.png.jpg')
  alert('you have clicked the same image!')
}

  if(cardschosen[0] == cardschosen[1]){
    alert('you found a match!')
     cards[optiononeid].setAttribute('src', 'images/egg.png.jpg')
     cards[optiontwoid].setAttribute('src', 'images/egg.png.jpg')
     cards[optiononeid].removeEventListener('click', flipcard)
     cards[optiontwoid].removeEventListener('click', flipcard)
     cardswon.push(cardschosen)
  } else{
    cards[optiononeid].setAttribute('src', 'images/blank.png.jpg')
    cards[optiontwoid].setAttribute('src', 'images/blank.png.jpg')
    alert('sorry! try again!')
  }
  resultdisplay.textContent = cardswon.length
  cardschosen = []
  cardschosenids = []

if(cardswon.length === CardsArray.length/2){
 resultdisplay.textContent = "congratulations you have found them all!"
}
}

function flipcard(){
 const cardid = this.getAttribute('data-id')
cardschosen.push(CardsArray[cardid].name)
cardschosenids.push(cardid)
console.log(cardschosen)
console.log(cardschosenids)
this.setAttribute('src', CardsArray[cardid].img)
if(cardschosen.length === 2){
  setTimeout(checkmatch, 500)
}
}










