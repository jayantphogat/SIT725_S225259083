const addCards = (items) => {
  const cardSection = $('#card-section');
  cardSection.empty();

  items.forEach(item => {
    const cardHTML = `
      <div class="col s12 m6 l4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}" alt="${item.title}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${item.title}<i class="material-icons right">more_vert</i>
            </span>
            <p><a href="${item.link}">About this habit</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              ${item.title}<i class="material-icons right">close</i>
            </span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>
    `;
    cardSection.append(cardHTML);
  });
};

const getCards = () => {
  $.get('/api/habits', (response) => {
    if (response.statusCode === 200) {
      addCards(response.data);
    }
  });
};

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();

  $('#clickMeButton').click(function () {
    M.toast({ html: 'Welcome to Smart Habit Tracker!' });
  });

  $('#formSubmit').click(function () {
    const firstName = $('#first_name').val();
    M.toast({ html: `Thank you, ${firstName || 'User'}! Form submitted.` });
  });

  getCards();
});