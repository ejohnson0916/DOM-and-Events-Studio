// Write your JavaScript code here.
// Remember to pay attention to page loading!
var isLoaded = false;
var liftOffResults = false;

window.onload = (event) => {
  if (document.body !== undefined || document.body !== null) {
    isLoaded = true;

    document.getElementById("takeoff").onclick = (event) => {
      confirm("Confirm that the shuttle is ready for takeoff");
      liftOffResults = confirm("Confirm that the shuttle is ready for liftoff");
      if (liftOffResults) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
        document.getElementById("shuttleBackground").style.backgroundColor =
          "blue";

        document.getElementById("spaceShuttleHeight").innerHTML =
          document.getElementById("spaceShuttleHeight").innerHTML + 100000;

        document.getElementById("landing").onclick = (event) => {
          alert("The shuttle is landing. Landing gear engaged.");

          document.getElementById("flightStatus").innerHTML =
            "The shuttle has landed";

          document.getElementById("shuttleBackground").style.backgroundColor =
            "blue";
        };
      }
    };
  }
};
