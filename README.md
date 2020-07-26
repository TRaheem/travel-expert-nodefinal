CPRG210 - WEB APPLICATION DEVELOPMENT
ASSIGNMENT 3 - NODE FINAL

The aim of this project is to deploy my most current version of Travel Exerts website using Express, EJS and Mongoose.It has a database driven gallery that is deployed to Heroku and MongoDB Atlas

DEPENDENCIES 
Project dependencies used (as seen in the package.json file) are:
Express
EJS
dotenv
cors
moments
mongoose - mongoose connection was also authenticated using .env file.

CUSTOM 404 PAGE
A custom 404 page was created (404-page.ejs) and will show up when a file or endpoint cannot be found.

PUBLIC FOLDER
Static assets are served from 'public' folder. All backup html files were deleted from the public folder.

VIEWS PARTIALS FOLDER
Created six (6)partials to avoid repeating page elements. partials created are:
- head: contains the meta lines, documentation about Author, date, course, etc.
- header-nav: contains the navigation bar for all pages except the home page. This is also where the if statement is used to ensure current page is highlighted.
- home-nav: contains navigation bar for only the home page. The home nav link is not highlighted when active.
- css-global: This contains all css files that are common to all pages.
- foot: contains the footer section for all the pages.
- gallery-js: contains the js files common to all the pages.

VIEWS - PAGE TEMPLATES
Created 7 page templates with different titles, and used the endpoint handler (in app.js) to render and serve each page.
- index: home page for the travel website.
- login: page where users can login using the login form
- register: page for new users to sign up using the form.
- contact: page containing company contact information, travel experts that can be contacted and a form to fill to reach out to them.
- destination: page containing a gallery of tour destinations in each continent. Each destination displayed a card design using figure and figcaption.
- destination-single: this page displays a single destination with a short description. Each page has:
   
    - nav bar (similar to other pages)
    - a larger version of the clicked image
    - a page heading
    - short description
    - a footer (similar to other pages) 

- 404-page: this is the custom 404 page that will be rendered when an invalid image id is used or a wrong page is opened.

SCHEMA/MODEL DEFINITION
Mongoose schema was defined here: ./models/destination.js
It was required into my app and called destinations in my MONGODB collection.

DB Seed
custom module was moved (based on Tony Grimme's sample code) to ./seeds/gallery.js
Description for each of the data was defined as a const for easy reading.

Dynamic HTML endoint
Endpoint handler for single destination was created in my app as Get /destinations/:id (line 73).
Model.findOne() was used to return a single image document form atlas and render the single destination page. (line 77).

JSON API endpoint
Endpoint handler for array destination was created in my express app as Get /api/images (line 97).
mode.find() was used to return a json destinations (line 101).

FETCH ()
fetch() was used to 
- retrieve the array from a remote JSON endpoint hosted by my app. (index.js line 3). The locally defined array was commented out.
- retrieve current year for the footer using moment dependency (thisyear.js line 6). Local host fetch was also commented out.

CSS FOLDER
- 404.css: contains css specific to 404-page.ejs
- index.css: contains css specific to index.ejs, contact.ejs and destination.ejs
- main.css: contains css that is common to all pages except the index.ejs
- reset.css: conatins google font, page font style and width defined for all pages.
- single.css: contains css specific to the destination-single.ejs page.
- typography.css: contains css for the card design.
- utility.css: contains css common to all pages

NEW API
I created a new API on postmaster called thisyear which was fetched on public/js/thisyear.js and endpoint used to render current year for the footer using moment dependecy as seen in app.js (line 91)

PICTURES AND DESCRIPTION
Pictures were taken from: Lorem picsum website and attributed in both the footer and database. All image descriptions were also taken from google search of specific destinations.

Other references used in learning/debugging and clarifying:

1. USA Travel Experts website
2. Google Search
3. Stack overflow
4. MDN
5. Easy tutorials
6. codepen sample codes
7. Other websites not noted
8. Tony Grimme's sample codes

This website was deployed on heroku app