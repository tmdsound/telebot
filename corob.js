
var inp = "/crbuw75 3,55&4,22 40:20";
  inp = inp.replace(/,/g, ".");
  var name = String(inp.match(/\/\w+/));
  inp =inp.replace(/\/\w+/,"");
  var langth = parseFloat(inp.match(/(.)+(?=&)/));
  var width = parseFloat(inp.match(/&(.+)/)[1]);
  var prof = parseInt(inp.match(/\d+(?=:)/));
  var liist = parseInt(inp.match(/(?!:).{2}$/));
  var shirina = parseFloat(prof/100);
  var visota = parseFloat(liist/100);


  function plosh() {
    return (langth*width).toFixed(2);
  }
  function perim() {
    return (langth+width)*2;
  }
  function perVn() {
    return perim()-(8*shirina);
  }
  function ploshVn() {
    return ((langth-(shirina*2))*(width-(shirina*2))).toFixed(2);

  }
  function gips() {
    gp = ((plosh()-ploshVn())+(perVn()*visota))/3;
    return Math.ceil(gp+(gp*.1));
   } 
   function uds() {
    udp = (perim()+perVn())/3;
    return Math.ceil(udp);
   }
   function dubel() {
      return Math.ceil(perim()/.40);
   }
   function tdn() {
    return Math.ceil(perVn()/.35);
   }
   function shurup25() {
      return gips()*120;
   }
   function cd() {
      cdp = (perim()/.40)*shirina;
      cdv = (perVn()/.40)*visota;
      return Math.ceil((cdp+cdv)/3)
   }
   function bloha() {
      return Math.ceil((perim()/.40))*2;
   }
   var price = "Помещение: Длина "+langth+"м Ширина "+width+"м \nКороб: Ширина "+shirina*100+"см Высота "+visota*100+"см \nРабота:\nКвадратные метры = "+ploshVn()+"\nПогонные метры = "+perVn()+"\n Гипсокартон = "+gips()+" шт\n"+"Шуруп 25 = "+shurup25()+" шт\n"+"Шуруп 9,5 с буром = "+bloha()+" шт\n"+"Дюбель 6х40 = "+dubel()+" шт\n"+"TDN 6х40 = "+tdn()+" шт\n"+"СD (0.55) 3м = "+cd()+" шт\n"


  if (name == "/crb"){
    var ud = Math.ceil((perim()+perVn()*2)/3);
    price = price + "UD (0.55) 3м = "+ud+" шт\n"
  }else {
    switch (name){
      case "/crbuw75" : uwname = "UW 75";break;
      case "/crbuw50" : uwname = "UW 50";break;
      case "/crbuw100" : uwname = "UW 100";break;
      default : uwname = "ERROR";
    }
    var uw = Math.ceil(perVn()/3);
    price = price + "UD (0.55) 3м = "+uds()+" шт\n"+uwname+" (0.55) 3м = "+uw+" шт\n"
  }
    


  console.log(price);
