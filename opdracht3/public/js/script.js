// windows.onload = function() {
// 	if (javascript geladen wordt) {
// 		laat dan de zoek balk zien
// 	} else {
// 		anders display none je de zoekbalk
// 	}
// }

var search = document.getElementById('search-bar')

search.onkeyup = function(event) {
	var filter = search.value.toUpperCase()
	var ol = document.getElementById('list')
	var li = ol.getElementsByTagName('li')

	for (i=0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0]
		if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			
			li[i].style.display = ""
		} else {
			
			li[i].style.display = "none"
		}
	}

}

// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {
// 	var header = document.getElementById("myHeader")

// 	// Get the offset position of the navbar
// 	var sticky = header.offsetTop

// 	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

//   	if (window.pageYOffset >= sticky) {
//     	header.classList.add("sticky")
//   	} else {
//     header.classList.remove("sticky")
//   }

// }

// // Get the header




