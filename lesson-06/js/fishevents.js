const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];  // temporary checking for valid response and data parsing


    for(let event of towns[2].events) {
      let list =  document.createElement('li');
      list.textContent = event;
    }

    document.querySelector('.event-list').appendChild(event);
    }
);