// This shows that the website has to fetch an api called thisyear to show the current year on the footer'

// the local host fetch was commented out for the heroku app to work
fetch('http://localhost:3000/api/thisyear')

//fetch('https://dry-bayou-50613.herokuapp.com/api/thisyear')
  .then(function(response) {
    return response.json();
     })
  
  .then(function(date){
    document.getElementById("this-year").innerHTML = date.year;
    });