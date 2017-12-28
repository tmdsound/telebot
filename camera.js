var imagesnapjs = require('imagesnapjs'), fs = require('fs');

var filename = '/Users/andrew/tmp/webcam.jpg';

fs.exists(filename, function (exists) {
  if(exists)
    fs.unlinkSync(filename);

  imagesnapjs.capture(filename, { cliflags: '-w 2'}, function(err) {
    console.log(err ? err : 'Success!');
  });
});

// var imagesnapjs = require('imagesnapjs');
 
// imagesnapjs.capture('/Users/andrew/tmp/image.jpg', { cliflags: '-w 2'}, function(err) {
//   console.log(err ? err : 'Success!');
// });