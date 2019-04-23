![Stack Builders](https://github.com/stackbuilders/nano-chat/raw/master/sb.png)

# Description

This folder contains a really simple front-end for the challenge. You have to
develop the backend services and replace the endpoints in the JS files with your own.

For each HTML file int `public/` there is a JS file with same name in the `js/public` folder,
which makes the HTTP request to the backend.

Search for comments like the one below in the JS files to find where to replace them with your service endpoints.

```javascript
/**
 * ****************************
 * Please change '/track' with
 * your service endpoint below
 * ****************************
 */
```

## Json

In the `json` folder there are some data JSON examples of the data that the server could send to the client.

  1. [create-track.json](public/json/create-track.json) Create a track
  2. [track.json](public/json/track.json) Individual track
  3. [tracks.json](public/json/tracks.json) List of tracks
  4. [statistic-distance.json](public/json/statistic-distance.json) Statistics from tracks by distance
  5. [statistic-velocity.json](public/json/statistic-velocity.json) Statistics from tracks by velocity

## Installation

If you need a static server to check the HTML templates you could use
[lite-server](https://github.com/johnpapa/lite-server/) that we configured for you.

### Instructions to install and run the server:

You will need [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/).
Instructions to install in [Windows](https://treehouse.github.io/installation-guides/windows/node-windows.html)
and [Linux/Mac](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/).

  1. `npm install` or `yarn install`
  2. `npm start`

Open `http://localhost:8080` in your browser to try it out.

