window.addEventListener('scroll', function (e){
	let top = this.scrollY
	let stickyHeaders = document.querySelectorAll('.letter-container')
	let delHeader = false

	for (i = stickyHeaders.length-1; i > -1 ; i--) {
		let header = stickyHeaders[i]
		let letter = header.querySelector('.follow')
		
		if (i == 0) {

		}
		if (!delHeader){ 
			letter.classList.remove('delete')
			if (header.getBoundingClientRect().top <= 0) {
				letter.classList.add('fixed')
				delHeader = true
			} else {
				letter.classList.remove('fixed')
			}
		} else {
			letter.classList.add('delete')
		}
	}
})

var search = document.getElementById('search-bar')

search.onkeyup = function(event) {
	var filter = search.value.toUpperCase()
	var contacts = document.getElementById('list')
	var persons = contacts.getElementsByTagName('li')

	for (i=0; i < persons.length; i++) {
		a = persons[i].getElementsByTagName("a")[0]
		if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			persons[i].setAttribute('class', '')
		} else {
			persons[i].setAttribute('class', 'hidden')
		} if (search.value === '') {
			
		}
	}

}






