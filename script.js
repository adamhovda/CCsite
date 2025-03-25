var addDropdown = document.getElementById("serviceDropdown").addEventListener("click", addService);
var test = document.getElementById("serviceDropdown").addEventListener("click", alert);



function addService() {
const sel = document.createElement("select");
const service1 = document.createElement("option");
const service2 = document.createElement("option");

service1.value = "manicure";
service1.text = "Manicure";

service2.value = "pedicure";
service2.text = "Pedicure";

sel.add(service1, null);
sel.add(service2, null);



document.getElementById("bookingForm").appendChild(sel); // put it into the DOM

}



function alert() {
    alert("hello");
}