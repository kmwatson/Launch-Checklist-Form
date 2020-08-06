// Write your JavaScript code here!

window.addEventListener("load", function(){
   let launchForm = document.getElementById('launchForm');
   launchForm.addEventListener('submit', function(event){
      let pilotInput = document.querySelector('input[name=pilotName]');
      let copilotInput = document.querySelector('input[name=copilotName]');
      let fuelInput = document.querySelector('input[name=fuelLevel]');
      let cargoInput = document.querySelector('input[name=cargoMass]');
      let fuelInputNumber = Number(fuelInput.value);
      let cargoInputNumber = Number(cargoInput.value);
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required");
         event.preventDefault();
      } else if ((isNaN(pilotInput)) !== true){
         alert("Not a valid input. Pilot name must be a string.");
         event.preventDefault();
      } else if ((isNaN(copilotInput)) !== true){
         alert("Not a valid input. Co-pilot Name must be a string.");
         event.preventDefault();
      } else if ((isNaN(fuelInputNumber)) !== false) {
         alert("Not a valid input. Fuel level must be a number.");
         event.preventDefault();
      } else if ((isNaN(cargoInputNumber)) !== false) {
         alert("Not a valid input. Cargo mass must be a number.");
         event.preventDefault();
      } else if (fuelInput.value < 10000){
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch`;
         fuelStatus.innerHTML = `Not enough fuel to launch.`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle is not ready for launch";
      } else if (cargoInput.value > 10000){
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch`;
         cargoStatus.innerHTML = `Too much cargo to launch`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle is not ready for launch";
      } else if (fuelInput.value < 10000 || cargoInput.value >10000) {
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch`;
         fuelStatus.innerHTML = `Not enough fuel to launch`;
         cargoStatus.innerHTML = `Too much cargo to launch`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle is not ready for launch";
      } else {
         event.preventDefault();
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Ready to launch!";
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch`;
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
      };
   });
});


window.addEventListener("load", function(){
   let missionTarget = document.querySelector('missionTarget');
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
      response.json().then(function(json){
         //console.log(json[4]);
         const div = document.getElementById('missionTarget');
         //console.log(document.getElementById('missionTarget'));
         div.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[4].name}</li>
            <li>Diameter: ${json[4].diameter}</li>
            <li>Star: ${json[4].star}</li>
            <li>Distance from Earth: ${json[4].distance}</li>
            <li>Number of Moons: ${json[4].moons}</li>
         </ol>
         <img src="${json[4].image}">`;
      });
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
