var text;
var z = confirm("Press this confirm button!");
if (z == true) {
    text = "Confirm is pressed!";
} else {
    text = "Cancel is pressed!";
}

document.write( '<h3>' + text + '</h3>');