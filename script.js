const quotes=[
    {
        quote:"Learn as if you will live forever, live like you will die tommorrow",
        author:"Mahatma Gandhi",
    },
    {
        quote:"When you change your thoughts,remember to also change your world",
        author:"Norman Vincent Peale",
     },
    {
        quote:"It is better to fail in originality than to succeed in imitation",
        author:"Herman Melville"
    },
    {
       quote:"I never dreamed about success .I worked for it",
       author:"Estee Lauder"
    }
]

const quote=document.querySelector('.quote');
const author=document.querySelector('.author');
const btn=document.querySelector('#generatequote');

btn.addEventListener('click',()=>{
   let random=Math.floor(Math.random()*quotes.length);
  // console.log(quotes.length);
  let generate=quotes[random];
  quote.innerHTML=generate.quote;
  author.innerHTML=generate.author;
})