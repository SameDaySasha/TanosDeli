/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Function to update the Open/Closed status
function updateOpenStatus() {
    var currentDateTime = new Date();
    var currentDay = currentDateTime.getDay();
    var currentHour = currentDateTime.getHours() + currentDateTime.getMinutes() / 60; // Convert current time to decimal hours
    var statusElement = document.getElementById('open-status');
  
    // Define the deli's hours of operation
    var openHours = [
      { start: 10, end: 15 }, // Sunday: 10am - 3pm
      { start: 6, end: 17 }, // Monday: 6am - 5pm
      { start: 6, end: 17 }, // Tuesday: 6am - 5pm
      { start: 6, end: 17 }, // Wednesday: 6am - 5pm
      { start: 6, end: 17 }, // Thursday: 6am - 5pm
      { start: 6, end: 17 }, // Friday: 6am - 5pm
      { start: 8, end: 16 }  // Saturday: 8am - 4pm
    ];
  
    // Check if the current time is within the deli's hours of operation
    var isOpen = currentHour >= openHours[currentDay].start && currentHour < openHours[currentDay].end;
  
   // Update the page with the open status
if (isOpen) {
    statusElement.classList.add('open');
    statusElement.classList.remove('closed');
    statusElement.textContent = 'Open';
  } else {
    statusElement.classList.add('closed');
    statusElement.classList.remove('open');
    statusElement.textContent = 'Closed';
  }
  ;
  }
  
  // Run the function to update the status immediately
  updateOpenStatus();
  
  // Set the function to run every minute to keep the status updated
  setInterval(updateOpenStatus, 60000);