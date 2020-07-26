// Description of all single destinations defined as const for better readability. source - Google search//

// Peru description for South America large image//
const peru = "Peru is a country in South America that is home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains. The region around Machu Picchu, including the Sacred Valley, Inca Trail and colonial city of Cusco, is rich in archaeological sites."

//Los Angeles description for North America large image//
const losAngeles = "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours."

//Paris descrition for Europe large image//
const europe = "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral."

//Brisbane description for Australia large image//
const brisbane = "Brisbane, capital of Queensland, is a large city on the Brisbane River. Clustered in its South Bank cultural precinct are the Queensland Museum and Sciencentre, with noted interactive exhibitions. Another South Bank cultural institution is Queensland Gallery of Modern Art, among Australia's major contemporary art museums. "

//Mauritius description for Africa large image//
const mauritius = "Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs. The mountainous interior includes Black River Gorges National Park, with rainforests, waterfalls, hiking trails and wildlife like the flying fox."

//Dubai description for Asia large image//
const dubai = "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music."

//Array to store all destination information required. This content will be stored in mongodb//
const gallery = [
  {
    id:           1021,
    name:         'South America',
    location:     '1021-SouthAmerica.jpg',
    description:  peru,
    tourIdea:     'Peru',
    attribution:  {
      source: 'Lorem Picsum',
      credit: 'Frances Gunn',
      url:  'https://unsplash.com/photos/8BmNurlVR6M'
    }
  },

  {
    id:           122,
    name:         'North America',
    location:     '122-NorthAmerica.jpg',
    description:  losAngeles,
    tourIdea:     'Los Angeles',
    attribution:  {
      source:     'Lorem Picsum',
      credit:     'Vadim Sherbakov',
      url:        'https://unsplash.com/photos/xS_RzdD5CFE'
    }
  },
    
  {
    id:           1050,
    name:         'Europe',
    location:     '1050-Europe.jpg',
    description:  europe,
    tourIdea:     'Paris',
    attribution:  {
      source:     'Lorem Picsum',
      credit:     'Joseph Barrientos',
      url:        'https://unsplash.com/photos/xcC5ozHk_N8'
    }
  },

  {
    id:           323,
    name:         'Australia',
    location:     '323-Australia.jpg',
    description:  brisbane,
    tourIdea:     'Brisbane',
    attribution:  {
      source:     'Lorem Picsum',
      credit:     'Pawel Wojciechowski',
      url:        'https://unsplash.com/photos/QYAojSRu82c'
    }
  },

  {
    id:           28,
    name:         'Africa',
    location:     '28-Africa.jpg',
    description:  mauritius,
    tourIdea:     'Mauritius',
    attribution: {
      source:     'Lorem Picsum',
      credit:     'Jerry Adney',
      url:        'https://unsplash.com/photos/_WiFMBRT7Aw'
    }
  },
    
  {
    id:           196,
    name:         'Asia',
    location:     '196-Asia.jpg',
    description:  dubai,
    tourIdea:     'Dubai',
    attribution:  {
      source:     'Lorem Picsum',
      credit:     'Dyaa Eldin Moustafa',
      url:        'https://unsplash.com/photos/mR_HR8NZwg8'
    }
  }, 
  
];

module.exports = gallery;