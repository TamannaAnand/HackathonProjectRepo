# Hackathon Project - SafeCampus

Description
-----------

SafeCampus is designed to streamline the safety inspection process for campuses, providing visibility into inspection statuses. The system allows principals to monitor inspection progress through a dynamic dashboard and identifies incomplete tasks.

Technologies Used
-----------------

*   **Node.js**: JavaScript runtime used for building the server-side logic.
    
*   **Express.js**: Web framework used to create backend APIs and handle HTTP requests.
    
*   **Bootstrap**: Frontend framework used for designing a responsive and user-friendly interface.
    
*   **SQLite**: Database used to store inspection data securely.
    

Installation
------------
# Hackathon Project - SafeCampus

## Description

SafeCampus is designed to streamline the safety inspection process for campuses, providing visibility into inspection statuses. The system allows principals to monitor inspection progress through a dynamic dashboard and identifies incomplete tasks.

## Technologies Used

* **Node.js**: JavaScript runtime used for building the server-side logic.
* **Express.js**: Web framework used to create backend APIs and handle HTTP requests.
* **Bootstrap**: Frontend framework used for designing a responsive and user-friendly interface.
* **SQLite**: Database used to store inspection data securely.

## Installation

### Prerequisites

Before running the project, you'll need to have **Node.js** installed on your machine. You can download and install it from the official Node.js website:

- [Download Node.js](https://nodejs.org/)

### Steps to Install Node.js

1. Visit the Node.js download page [here](https://nodejs.org/).
2. Choose the appropriate version for your operating system (LTS is recommended for most users).
3. Follow the installation instructions for your system.

After installing Node.js, you can confirm it's installed properly by running the following commands in your terminal:

        node -v
        npm -v
    
4.  Navigate to the project directory in the terminal.
    
5.  Run npm install to install the required dependencies.

        npm install  

6.  To start the server, run:

        npx nodemon .\app.js  

The application will be available at http://localhost:3000.

Usage
-----
*   Login into the SafeCampus App using the following Username & Password.

        Username: titans
        Password: password123

*   View the dashboard to monitor inspection progress.
    
*   The dashboard will display the current status of inspections, with visual indicators for incomplete inspections.

*   Logout of the dashboard to return to the login page.


Future Improvements
-------------------
*   Future features will allow for adding and updating inspection data.

*   Adding functionality for monitoring inspection statuses in real-time.
    
*   Automated notifications for overdue tasks.
    
*   Scalability for multi-campus integration.