// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var currentdate = new Date();

  // method to update the style of the taskstate column
  if (typeof (getTaskStateStyleClass) == "undefined") {
    var getTaskStateStyleClass = function(state, duedate) {
      var className = state;
      if (state == "opened") {
        if (duedate < currentdate) {
          className = "overdue-task";
        } else if (duedate === currentdate) {
          className = "almost-overdue-task";
        }
      }
      return className;
    }
  }

  // method to substract dates and give the result in days
  if (typeof (getDurationInDays) == "undefined") {
    var getDurationInDays = function(start, end) {
      //var duration = 0;
      var durationInMs = end - start; // this is time in milliseconds
      var duration = durationInMs / 1000 / 60 / 60 / 24; // in days
      return Math.trunc(duration);
    }
  }
