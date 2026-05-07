let school = {
  name: "My School",
  "Average Class Size": 25,
  mascot: "Eagles"
};
let { name, averageClassSize, mascot } = school;
document.getElementById("result").innerHTML = `${school.name} has an average class size of ${school["averageClassSize"]} and their mascot is a ${school.mascot}`;
