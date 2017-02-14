/**
 * --------------------------------
 * change font size
 * --------------------------------
 */

var container = query(".container");
var button_small = query(".btn-decrease");
var button_big = query(".btn-increase");
var new_textarea = query("textarea");
var change_by = 2;
var limit_up = 80;
var limit_down = 10;
var new_size;
var input = query("input", container);

function changeText() {
    var operator = this.firstChild.nodeValue;
    var current_size = parseInt(getStyle(new_textarea, "fontSize"));

		if (operator === "+") {

        new_size = current_size + change_by;

    } else {

        new_size = current_size - change_by;

    }
    if (new_size > limit_up || new_size < limit_down) {
        new_size = current_size;
    }

		new_textarea.style.fontSize = input.value = new_size + "px";

}
// event bind
button_small.onclick = button_big.onclick = changeText;



/**
 * --------------------------------
 * change color
 * --------------------------------
 */

var button_lighter = query(".btn-lighter");
var button_darker = query(".btn-darker");

var body = document.body;
var h1 = query("h1");
var select = query("select");


function changeColor(){
	var color = getStyle(this,"color");

	body.style.backgroundColor = getStyle(this,"backgroundColor");

	h1.style.color = input.style.color = select.style.color = color ;
}
// event bind
button_darker.onclick = button_lighter.onclick = changeColor;


/**
 * --------------------------------
 * change weight
 * --------------------------------
 */

var select = query("#weight");
function changeWeight(){
	
	var current_weight = this.options[this.selectedIndex].firstChild.nodeValue;

	new_textarea.style.fontWeight = current_weight;
}
// event bind
select.onchange = changeWeight;