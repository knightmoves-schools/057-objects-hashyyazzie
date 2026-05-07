let school = {
  name: "My School",
  "average class size": 25,
  mascot: "Eagles"
};
document.getElementById("result").innerHTML = `${school.name} has an average class size of ${school["average class size"]} and their mascot is a ${school.mascot}`;
