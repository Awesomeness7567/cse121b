/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templeList = [];
const templesElement = document.querySelector('div');

/* async displayTemples Function */
const displayTemples = (templeList) => {
    reset();
    templeList.forEach((temple) => {
      const article = document.createElement('article');
      const h3 = document.createElement('h3');
      const img = document.createElement('img');
  
      h3.textContent = temple.templeName;
      img.src = temple.imageUrl;
      img.alt = temple.location;
  
      article.appendChild(h3);
      article.appendChild(img);
  
      templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const data = await response.json();
    templeList = data;
  //   displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = (temples) => {
    /* In this function, first call the reset function to clear the output */
    reset();
    /* Define a variable named filter that obtains the value of the HTML element with the ID of sortBy (The pull-down menu) */
    const filter = document.getElementById('sortBy').value;
    /* Use a switch statement that uses the filter value as the selector responding to four (4) cases */
    switch (filter) {
      /* For each case, call the displayTemples function using an filter statement that filters the temples parameter for the four options provided */
      case 'utah':
        displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
        break;
      case 'notutah':
        displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
        break;
      case 'older':
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
        displayTemples(temples);
        break;
      default:
        console.log('Invalid filter');
    }
};

/* Event Listener */
document.getElementById('sortBy').addEventListener('change', () => {
  sortBy(templeList);
});

getTemples();