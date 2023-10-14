console.log('API Time!');

const getBeers = async(e) => { //this is a function called getBeers which takes an argument/parameter called (e)
    e.preventDefault(); // this prevenst the default form behavior which is to refresh the page
    let number = e.target.number.value;   // Retrieve the value of the 'number' field from the event's target (probably a form) 
                                          // and store it in the 'number' variable.
    

    if (number == '') number = 1; // Changed from 'card' to 1
    //----------------------------------------------------------------------------------------------------------------
    const url = `https://random-data-api.com/api/v2/beers?size=${number}`; // this is the url as an f string
    const res = await fetch(url); // this wants us to fetch the specified url and wait for a response
    const data = await res.json(); // this wants us to turn the response into data
    //----------------------------------------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------------------------------------
    // this code below is to mark up a card html element that displays the proper information   
    const container = document.getElementById('container');
    container.innerHTML = ''
    if (Array.isArray(data)) { // Moved the comment to the next line
        for (let beer of data) {
            let card = `
            <div>
              <h3>${beer.name} by ${beer.brand}</h3>
              <h5>${beer.alcohol} alc</h5>
            </div>
            `;
            container.innerHTML += card; // Changed this line
        }
    } else {
        let card = `
        <div>
          <h3>${data.name} by ${data.brand}</h3>
          <h5>${data.alcohol} alc</h5>
        </div>
        `;
        container.innerHTML = card;
    }
}
    //----------------------------------------------------------------------------------------------------------------

const form = document.querySelector('form'); // this selects the form from our html
form.addEventListener('submit', getBeers); // this adds an event listener for the submit button and activates the getBeer function up top
