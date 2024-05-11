$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    });

    //Tables
var $table = $('#table');
$(function () {
    $('#toolbar').find('select').change(function () {
        $table.bootstrapTable('refreshOptions', {
            exportDataType: $(this).val()
        });
    });
})

    var trBoldBlue = $("table");

$(trBoldBlue).on("click", "tr", function (){
        $(this).toggleClass("bold-blue");
});


//  FEED

"use strict";

//Defining elements and variables
const notifications = document.querySelectorAll(".notifi");
const counter = document.querySelector(".unread");
const readAll = document.querySelector(".mark-all");
const redDot = document.querySelectorAll(".dot");

let unread = 3;

// Active notification functionality
notifications.forEach((notifi, index) => {
  notifi.addEventListener("click", () => {
    notifi.classList.toggle("active-f");
    redDot[index].classList.toggle("dot");

    if (notifi.classList.contains("active-f")) {
      unread -= 1;
    } else {
      unread += 1;
    }

    counter.textContent = unread;
  });

 // Pin functionality
 const pinButton = document.createElement("button");
 pinButton.innerHTML = '<i class="fa-solid fa-map-pin" style="color: #000000;"></i>';
 pinButton.classList.add("pin-button");
 pinButton.addEventListener("click", (event) => {
   event.stopPropagation(); // Prevent click event propagation to parent notification

   // Toggle pin class
   notifi.classList.toggle("pinned");

   // Add/remove pinned icon based on class
   if (notifi.classList.contains("pinned")) {
     pinButton.innerHTML = '<i class="fas fa-thumbtack"></i>';
     // Move the pinned notification to the top
     notifi.parentElement.prepend(notifi);
   } else {
     pinButton.innerHTML = '<i class="fa-solid fa-map-pin" style="color: #000000;"></i>';
     // Move the unpinned notification back to its original position at the bottom
     notifi.parentElement.appendChild(notifi);
   }
 });
 notifi.appendChild(pinButton);
});

// Mark all as read functionality
readAll.addEventListener("click", () => {
 unread = 0;
 counter.textContent = unread;
 notifications.forEach((notifi, index) => {
   notifi.classList.add("active");
   redDot[index].style.display = "none";
 });
});




  