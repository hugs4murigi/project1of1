//fetching objects from json file
fetch('https://api.npoint.io/dbe7abfccb9657be3ff7/quotes')
.then((res)=> res.json())
.then((quotes)=>{
    //creating variables for the content in the html file
    const button = document.getElementById('button')
    const author = document.getElementById('author')
    const content = document.getElementById('qoute')

    //adding event listener to the quote button
    button.addEventListener('click', function(){
        //function that chooses the quotes randomly in the jsone file
       const index = Math.floor(Math.random()* quotes.length)

       //displaying content in the html file
       author.innerHTML=quotes[index].author
       content.innerHTML=quotes[index].quote
    })
}).catch(error => console.log('error'))

//creating variables for the timer
const timer = document.getElementById('time')
const textArea =document.getElementById('text-area')
const myButton = document.getElementById('button')

//adding event listener to the button to affect the timer
myButton.addEventListener("click", function(){
    //style affecting the display of both the content and the timer 
    timer.style.display="block"
    textArea.style.display="none"
     let second =3


     //function for starting the timer
     const interval1 = setInterval(()=>{
        //function for decreasing the timer
        second--

        if(second/3===0){
            //function for stopping the timer
            clearInterval(interval1)
            //display goes back to normal
            timer.style.display="none"
            textArea.style.display="block"
            //the timer does back to normal
            second = 3
        }
        //function fo the count to be displayed
        document.getElementById('time').innerHTML=second

        //duration for the timer
     },1000)
})
