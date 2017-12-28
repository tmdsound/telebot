var inp = "3,55&4,22 4:3";
  inp = inp.replace(/,/g, ".");
  var langth = parseFloat(inp.match(/.+(?=&)/));
  var width = parseFloat(inp.match(/&(.+)/)[1]);
  var prof = parseInt(inp.match(/\d+(?=:)/));
  var liist = parseInt(inp.match(/(?!:).$/));

  // var liist = parseFloat(inp.match(/:(.+)/)[1]);
  // console.log(langth);
  // console.log(width);  
var plosh = (langth*width).toFixed(2);
  console.log(plosh);  
(isNaN(liist))?(kb = 2.5):(kb = liist);
(isNaN(prof))?(lp = 3):(lp = prof);
console.log("длина листа = "+kb);
console.log("Длина профиля cd = "+lp);

var gips = Math.ceil(plosh/(kb*1.2));
var lcd = l(width);
var cd = Math.ceil(((lcd*langth)+(Math.ceil(langth/kb)*width))/lp);
var perim = (langth+width)*2;
var ud=Math.ceil(perim/3);
var dubel=Math.ceil(perim/0.4);
var shurup25= Math.ceil(plosh*35);
var shurup9= (tdn+lcd)*2;
function l(arg) {
  if (arg%0.4 !== 0 ){
    return Math.floor(arg/.4)
  }
  else {
    return Math.floor(arg/.4)-1
  }
  // body...
}
var supr = (Math.ceil(langth/0.75)-1)*lcd ;
var tdn = supr*2;


console.log("Гипс = "+gips+"\nUd="+ud+"\nCd="+cd+"\nДюбель = "+dubel+"\nШуруп 25 = "+shurup25+"\nПоодвес SUPER = "+supr+"\nTDN = "+tdn+"\n");
var text = "Гипсокартон "+kb*1000+"x1200x12.5 = "+gips+"шт\nUD (0.55) 3м = "+ud+"шт\nCD (0.55) "+lp+"м = "+cd+"шт\nДюбель 6ч40 = "+dubel+"шт\nШуруп 25 = "+shurup25+"шт\nПоодвес 125мм SUPER = "+supr+"шт\nTDN 6ч40 = "+tdn+"шт\n"
if (lp < langth){
  text=text+"Соединители для CD = "+lcd+"шт\n"
}
var fs = require("fs");
 
fs.writeFile("price.txt", text, function(error){
 
                if(error) throw error; // если возникла ошибка
});
