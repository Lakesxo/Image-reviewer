# Sellics Image Reviewer Application

This application is built with React, Redux-toolkit and Styled-components.

## About

This application is based on a photo reviewing feature. Upon loading, the application presents the user with a list of already approved images. This list would initially be empty for someone who has never used the application before. Users can add photos by clicking on a + button. Upon clicking on the + button, the user is presented with an imae from the Unsplash API.

Whenever an image is presented, the user can either approve or reject the image. If the image is rejected, the user is presented with a new image. If the image is approved, it is added to the list of approved images and rendered. Application state also persists during page reloads.

Here's a link to the live project => https://image-reviewer-challenge.netlify.app/

## How To Install

- Clone or download this repository on your machine
- run 'yarn install' or 'npm install' to install all dependencies
- run 'yarn start' or 'npm start' to open in your browser.
