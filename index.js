var spisok = require('./web');
 // function helptext() {
   
 //  return "ok Потолки \nПерегородки \nСтены \nКороба \nОткосы \nКиссоны"
 // }

const TelegramBot = require('node-telegram-bot-api'); 
const token = '453261720:AAH8Ri4meXRwoQof-hC1A8vQ67wFXRQP238';
            
var bot = new TelegramBot(token, { polling: true });

console.log('bot server started...');

// bot.on('message', (msg) => {
    
// var Hi = "hi",
//     ok = "ok";

// if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
// bot.sendMessage(msg.chat.id,"Hello dear user");
// }
// if (msg.text.toString().toLowerCase().indexOf(ok) === 0) {
// bot.sendMessage(msg.chat.id,"Okey dear user");
// } 
  
// console.log(spisok.helptext);
// });  
bot.onText(/\/calc/,(msg) => {
  var { chat: {id}} = msg
  //var helptext = "ok Потолки \nПерегородки \nСтены \nКороба \nОткосы \nКиссоны"
  //var asd = astra(parseFloat(match))
  var u = spisok.helptext();
  bot.sendMessage(id,u)
})
function astra(sum) {
  return (sum + 10.0)
  // body...
}
bot.onText(/Size (.+)/,(msg, [source,match]) => {
  match = match.replace(/,/g, ".")
  var langth = parseFloat(match.match(/.+(?=&)/))
  var width = parseFloat(match.match(/(?<=&).+/))
  console.log(langth);
  console.log(width);
  var c =  potolok(langth,width)
  var { chat: {id}} = msg
  bot.sendMessage(id,"ud = "+c)
})
function potolok(a,b) {
  var perim = (a + b)*2;
  console.log(perim);
  var ud = Math.ceil(perim/3);
  return ud;
  // body...
}
// var fs = require("fs");
 
// fs.writeFile("hello.txt", "Hello мир!", function(error){
 
//                 if(error) throw error; // если возникла ошибка
// });