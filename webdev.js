let bake1 = ["Cakes","Velvet","$60","11:00 AM","11:53 AM","25-Jan-21","19-May-21","Home Delivery?"];																				
let bake2 = ["Muffins/Scones","Chocolate","$4","12:00 PM","12:53 PM","25-Jan-21","19-May-21","Home Delivery?"];																								
let bake3 = ["Pastries","Strawberry","$7","01:00 PM","01:53 PM","25-Jan-21","19-May-21","Home Delivery?"];																								
let bake4 = ["Bread","Oat","$3","04:00 PM","04:53 PM","25-Jan-21","19-May-21","Home Delivery?"];																								
let bake5 = ["Cupcakes","cherry","$3","05:30 PM","06:23 PM","25-Jan-21","19-May-21","Home Delivery?"];																								
let bake6 = ["Cinnamon rolls","Apple-pie filling","$6","12:00 PM","12:53 PM","25-Jan-21","19-May-21","Home Delivery?"];																							
function link(array) {
    var itenary = document.createElement('ul');		// Create the itenary element:

    for(var i = 0; i < array.length; i++) {
        var stuff = document.createElement('li');				// Create the itenary stuff:
        stuff.appendChild(document.createTextNode(array[i]));	// Set its contents:
        itenary.appendChild(stuff);			// Add it to the itenary:
    }
    return itenary;				// Finally, return the constructed itenary:
}

//Add the contents of bake[0] to #bake:
document.getElementById("bake1").appendChild(link(bake1));
document.getElementById("bake2").appendChild(link(bake2));
document.getElementById("bake3").appendChild(link(bake3));
document.getElementById("bake4").appendChild(link(bake4));
document.getElementById("bake5").appendChild(link(bake5));
document.getElementById("bake6").appendChild(link(bake6));

var foo = document.getElementsByClassName("tog");

for (var i = 0; i < foo.length; i++) {
  foo[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
	