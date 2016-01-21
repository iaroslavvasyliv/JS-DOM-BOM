"use strict";

function addForm(){
	var form = document.createElement ("form");
	var body = document.body;

	form.name = "myForm";
	// form.action = "http://google.com";
	form.setAttribute("onsubmit", "validateForm(); return false");
	body.appendChild(form);

	var fields = [
		{type: "text", name: "age"},
		{type: "text", name: "username"},
		{type: "text", name: "date"},
	];

	for (var i = 0; i < fields.length; i++) { // loop "fields" array to get each object
		var inputEl = fields[i]; // get object in "fields array" 	
		var inputTag = document.createElement ("input"); // create input element
		form.appendChild(inputTag); // append input elem to form

		for (var key in inputEl) { // get keys of obj
		    //alert(key + " -> " + inputEl[key]);// key returns key, inputEl[key] returns value
		    inputTag.setAttribute(key, inputEl[key]);
		}
	}

	var submitButton = document.createElement("input");
	form.appendChild(submitButton);
	submitButton.type = "submit";
	submitButton.value = "Validate Me";


}
addForm();

function validateForm() {
	var ageField = document.forms["myForm"]["age"].value;
	var userNameField = document.forms["myForm"]["username"].value;
	var digitRegex =/^[0-9]+$/;
	// !ageField.match(digitRegex) && 
		if (!ageField.match(digitRegex) || userNameField.substring(0, 5) != "user_"){
			alert("your data is invalid");
			
		}
}

function SetDateValue(){
	var dateObject = new Date();
	var date = dateObject.getDate() + "/" + (dateObject.getMonth() + 1) + "/" + dateObject.getFullYear();
	var dateInput = document.getElementsByName("date")[0];

	dateInput.value = date;

}
SetDateValue();