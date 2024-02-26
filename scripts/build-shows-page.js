const shows = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },

    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },

    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },

    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },

    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },

    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA"
    },
];

    clearShows();
    openShows();

function clearShows() {
    const gigsListed = document.querySelector('.shows__gigs');
    while (gigsListed.firstChild) {
        gigsListed.removeChild(gigsListed.firstChild);
    }
  };

 function openShows() {
    const gigsListed = document.querySelector('.shows__gigs');

    shows.forEach(function (gig) {
    const gigContainer = document.createElement('div');
    gigContainer.className = 'shows__gig';

    // DATE
    const dateContainer = document.createElement('div');
    dateContainer.className = 'shows__gig__cont';

    const dateHeader = document.createElement('h4');
    dateHeader.className = 'shows__gig__header'

    const dateValue = document.createElement('p');
    dateValue.className = 'shows__gig__date';

    // VENUE

    const venueContainer = document.createElement('div');
    venueContainer.className = 'shows__gig__cont';

    const venueHeader = document.createElement('h4');
    venueHeader.className = 'shows__gig__header'

    const venueValue = document.createElement('p');
    venueValue.className = 'shows__gig__venue';

    // LOCATION

    const locaContainer = document.createElement('div');
    locaContainer.className = 'shows__gig__cont';

    const locaHeader = document.createElement('h4');
    locaHeader.className = 'shows__gig__header'

    const locaValue = document.createElement('p');
    locaValue.className = 'shows__gig__location';

    // Buttons and Dividers
    const contButton = document.createElement('div');
    contButton.className = "shows__gig__cont";

    const buyButton = document.createElement('button');
    buyButton.className = "shows__gig__button";

    const divider = document.createElement('div');
    divider.className = "divider divider--full";

    gigsListed.appendChild(gigContainer);
    gigContainer.appendChild(dateContainer);
    dateContainer.appendChild(dateHeader);
    dateContainer.appendChild(dateValue);
    dateHeader.textContent = 'DATE';
    dateValue.textContent = gig.date;

    gigContainer.appendChild(venueContainer);
    venueContainer.appendChild(venueHeader);
    venueContainer.appendChild(venueValue);
    venueHeader.textContent = 'VENUE';
    venueValue.textContent = gig.venue;

    gigContainer.appendChild(locaContainer);
    locaContainer.appendChild(locaHeader);
    locaContainer.appendChild(locaValue);
    locaHeader.textContent = 'LOCATION';
    locaValue.textContent = gig.location;
    
    // gigsListed.appendChild(contButton);
    gigContainer.appendChild(contButton);
    contButton.appendChild(buyButton);
    gigContainer.appendChild(divider);
    buyButton.textContent = 'BUY TICKETS'
    
})
};

document.addEventListener('DOMContentLoaded', function () {
    clearShows();
    openShows();
});