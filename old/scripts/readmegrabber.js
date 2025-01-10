// https://raw.githubusercontent.com/Saeraphinx/Saeraphinx/main/readme.md
var url = 'https://raw.githubusercontent.com/Saeraphinx/Saeraphinx/main/readme.md';

fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      done(text);
    });
  });

function done(text) {
  
}