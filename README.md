# React TypeScript Calendar Application

This is a React TypeScript application that renders events on a calendar, ensuring that overlapping events do not visually overlap. The application is responsive and allows the user to view events spanning from 00h:00  to 23h:00 .

## Features

- Displays events on a calendar
- Ensures overlapping events have the same width
- Uses maximum available width for events
- Responsive design that adjusts to window size
- Scrollable calendar view
- Dockerized for easy deployment

## Project Structure

     src/api - Input json
        - data.ts
     src/components - React components
        - Calendar.tsx - Main calendar component
        - Event.tsx - Event component
        - Header.tsx - Header component
        - TimeLabels.tsx - Time labels component
     src/utils - Utility functions
        - overlapUtils.ts - Functions to detect and handle overlapping events
        - constant.ts - Constants used in the application
     src/types - TypeScript types
        - event.ts - Event type definition
     src/tests - Functions Tests
        - calendar.test.tsx
        - overlapUtils.test.ts
     src/styles - CSS styles
        - Calendar.css - Styles for the calendar component
        - Event.css - Styles for the event component
        - TimeLabels.css - Styles for the time labels component

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/) (optional, for easier container management)

##Installation and Use
####Clone Directory :


`git clone https://github.com/manel90/planity_test.git` 

`cd planity_test`

#### Building Docker Images :

`
docker-compose build`

#### Launch Containers:

`
docker-compose up`

## Access the Application :

Open your web browser and go to the following address: http://localhost:3000/

## Run Test

`npm test`
