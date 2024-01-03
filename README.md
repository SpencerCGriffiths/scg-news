# SCG News

## Overview

SCG News is a Reddit clone project that serves up articles from my API built as a backend project. This web application allows users to view articles available in a PostgreSQL database. Users can explore articles by topics, sort articles by different variables, and order them in both descending and ascending orders.

The project utilizes context state to manage the user for the site. However, please note that the user information is currently hard-coded for a single user. There is scope to add further identification. 

In addition to viewing articles, users can interact with the site by voting on articles, viewing individual articles, viewing comments, posting their comments on articles, and deleting their own comments.

## Hosted

You can find a hosted version of the app here along with the associated repo:

- [SCG News App](https://scg-news.netlify.app/) (please be aware that there is an initial loading time for the build)
- [SCG News Repo](https://github.com/SpencerCGriffiths/scg-news.git)

and the backend API here along with the associated repo:

- [Backend API](https://readaway.onrender.com/api) (this shows all endpoints for the API)
- [Backend Repo](https://github.com/SpencerCGriffiths/be-scg-news.git)

## How to Run

In order to run locally you will require minimum Node v20.7.0.

To run the project locally you will need to:

Clone the repository:
~ git clone https://github.com/SpencerCGriffiths/scg-news.git

You should then install dependencies to your machine by running

~ npm install

You can then launch the project

~ npm run dev

## Deployment

The application is hosted with [Netlify](https://scg-news.netlify.app/).

The database is hosted with [Render](https://render.com/).

## Future Developments

For future developments and enhancements to this project, please refer to the [FutureDevelopments.md](FutureDevelopments.md) file.

Feel free to contribute to the project and help make it even better!