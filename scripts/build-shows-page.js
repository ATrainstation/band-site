// const shows = [
//     {
//         date: "Mon Sept 09 2024",
//         venue: "Ronald Lane",
//         location: "San Francisco, CA"
//     },

//     {
//         date: "Tue Sept 17 2024",
//         venue: "Pier 3 East",
//         location: "San Francisco, CA"
//     },

//     {
//         date: "Sat Oct 12 2024",
//         venue: "View Lounge",
//         location: "San Francisco, CA"
//     },

//     {
//         date: "Sat Nov 16 2024",
//         venue: "Hyatt Agency",
//         location: "San Francisco, CA"
//     },

//     {
//         date: "Fri Nov 29 2024",
//         venue: "Moscow Center",
//         location: "San Francisco, CA"
//     },

//     {
//         date: "Wed Dec 18 2024",
//         venue: "Press Club",
//         location: "San Francisco, CA"
//     },
// ];


// async function updateShows(bandSiteApi) {
//     const showDates = await bandSiteApi.getShowDates();
//     clearShows();
//     openShows(showDates);
// }

// updateShows();


function clearShows() {
    const gigsListed = document.querySelector('.shows__gigs');
    while (gigsListed.firstChild) {
        gigsListed.removeChild(gigsListed.firstChild);
    }
  };

clearShows();

const apiKey = '577cc8f6-2716-45b4-86a4-74684f999ada';
const api = new BandSiteApi(apiKey);


async function openShows() {
    
    const showDates = await api.getShowDates()

    const gigsListed = document.querySelector('.shows__gigs');
    const showsHeaders = document.querySelector('.dt-shows__headers');

    showDates.forEach(function (gig) {
    const gigContainer = document.createElement('div');
    gigContainer.className = 'shows__gig';

    // DATE
    const dateContainer = document.createElement('div');
    dateContainer.className = 'shows__gig__cont shows__gig__cont--big';

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
    locaContainer.className = 'shows__gig__cont shows__gig__cont--big';

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

    // Date conversion
    const unixEpochTimeMS = gig.date;
    const newDate = new Date(unixEpochTimeMS)

    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = newDate.toLocaleString('en-US', options).split(', ').join(' ');

         //   const date = new Date();
        //   const formattedDate = date.toISOString(
    //   {
    //   month: '2-digit',
    //   day: '2-digit',
    //   year: 'numeric'
    // }
    // );

    dateValue.textContent = formattedDate;

    gigContainer.appendChild(venueContainer);
    venueContainer.appendChild(venueHeader);
    venueContainer.appendChild(venueValue);
    venueHeader.textContent = 'VENUE';
    venueValue.textContent = gig.place;

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
    
    })};


document.addEventListener('DOMContentLoaded', function () {
    clearShows();
    openShows();
});