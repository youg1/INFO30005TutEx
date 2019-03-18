
function getFormValue(){
	var fstname = document.getElementsByName("firstname");
	var lstname = document.getElementsByName("lastname");
	alert("Hello "+fstname[0].value+" "+lstname[0].value);
};

