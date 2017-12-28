var inp = "3,55&4,22 "
  inp = inp.replace(/,/g, ".")
  console.log(inp);
  var langth = parseFloat(inp.match(/.+(?=&)/));
  var width = parseFloat(inp.match(/&(.+)/)[1]);
  var prof = parseInt(inp.match(/\d+(?=:)/));
  // var prof = inp.match(/\d+(?=;)/);
  var liist = parseInt(inp.match(/(?!:).$/));
  console.log(langth);
  console.log(width);
  console.log(prof);
  console.log(liist);
  //  var a=4;
  // if (liist != NaN) {
  //   a = liist+2;
  // }
  // console.log(a);