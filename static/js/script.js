(function(){

var app = {
		init: function() {
			router.init()
			console.log('App initialized!')

		}
}

var api = {
	shows: [],
	getPopularShows: function(result, errorCallback) {
		console.log('api.getPopularShows')
		var request = {
			method: 'GET',
			url: 'https://api.themoviedb.org/3/tv/popular?api_key=ff575feb141fa0d8c58ff1f806f21156'
		}

		http.request(request, 
			function(response) {
				var data = optimize.popularShows(response)
				api.shows = data
				result(data)

			}, 
			function(err) {
				console.log('Error:', err);
				errorCallback(err)
			}
		)
	},
	getShowDetail: function(id, result, errorCallback) {
		var request = {
			method: 'GET',
			url: 'https://api.themoviedb.org/3/tv/'+id+'?api_key=ff575feb141fa0d8c58ff1f806f21156&language=en-US'
		}

		http.request(request, 
			function(response) {
				var data = optimize.popularShowDetail(response)
				result(data)
			}, 
			function(err) {
				console.log('Error:', err);
				errorCallback(err)
			}
		)
	}
}

var http = {
	request: function(requestObject, result, err) {
		loader.show()
		var request = new XMLHttpRequest()
		
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				result(JSON.parse(request.responseText))
			}
		}
		
		request.onerror = function(error) {
			err(error)
		}

		request.open(requestObject.method, requestObject.url, true)
		request.send()
	}
}

var router = {
	init: function() {
		this.handleEvents()
		console.log('Router initialized!')
	},
	toggle: function(sectionToToggle) {
		var sections = document.querySelectorAll('section')
		var activeSection = document.querySelector(sectionToToggle)
	
		console.log('active section: ', activeSection)

		sections.forEach(function(section) {
			section.classList.remove('active')
		})
		activeSection.classList.add('active')
	},
	handleEvents: function(id){
		var self = this
		var home = function() {
			api.getPopularShows(
				function(data) {
					content.render.popularShows(data)
					self.toggle('#popularShows')
					events.filterByTitle()
					loader.hide()
					
				},
				function(err) {
					// Do something with the error
					document.getElementById('errorWindow').style.visibility = "visible"
					
					setTimeout(function() {
             			console.log('FUCK')
             			document.getElementById('errorWindow').style.visibility = "hidden"
             		}, 4000)
				}
			)
		}

		var detail = function(id) {
			api.getShowDetail(id,
				function(data) {
					content.render.showDetail(data)
					self.toggle('#showDetail')
					events.allowBack()
					loader.hide()
				},
				function(err) {
					// Do something with the error
					document.getElementById('errorWindow').style.visibility = "visible"
					
					setTimeout(function(){
             			console.log('FUCK')
             			document.getElementById('errorWindow').style.visibility = "hidden"
             		}, 4000)
				}
			)
		}

		routie({
			'': home,
			'home': home,
			'shows/:id': detail
		})
	}
}

var optimize = {
	popularShows: function(data){
		return data.results.map(function(item) {
			return {
				title: item.original_name,
				tvShowID: item.id,
				poster: item.poster_path,
				summary: item.overview
			} 
		})
	},
	popularShowDetail: function(data) {
		return {
			title: data.original_name,
			tvShowID: data.id,
			poster: data.poster_path,
			backdrop: data.backdrop_path,
			summary: data.overview,
			nrOfEpisodes: data.number_of_episodes,
			firstAirDate: data.first_air_date,
			rating: data.vote_average,
			voteCount: data.vote_count
		}
	}
}

var loader = {
	hide: function(){
		var hideLoader = document.getElementById('loaderContainer')
		hideLoader.classList.remove('activeLoader')
	},
	
	show: function(){
		var hideLoader = document.getElementById('loaderContainer')
		hideLoader.classList.add('activeLoader')
	}
}

var events = {
	filterByTitle: function() {
		var filterElement = document.getElementById('filter')
		var filteredShows = []
		
		filterElement.onkeyup = function(e) {
			var value = e.currentTarget.value

			filteredShows = []

			api.shows.forEach(function(show){
				var title = show.title.substring(0, value.length).toLowerCase()

				if (value === title) {
					filteredShows.push(show)
					content.render.popularShows(filteredShows)
				}
			})
		}
	},
	allowBack: function() {
		var backBtn = document.querySelector('.back-btn')
		
		backBtn.onclick = function() {
			window.history.back()
		}
	}
}

var content = {
	render: {
		popularShows: function(data) {
			var directives = {
				title: { text: function() { return this.title } },
				link: { href: function() { return `#shows/${this.tvShowID}`}},
                image: { src: function() { return `https://image.tmdb.org/t/p/w500/${this.poster}` } }
           	}
            Transparency.render(document.getElementById('show'), data, directives)		
		},

		showDetail: function(data) {
			var directives = {
				title: { text: function() { return this.title } },
				summary: { text: function() { return this.summary } },
                poster: { src: function() {	return `https://image.tmdb.org/t/p/w500/${this.poster}` } },
                backdrop: { src: function() { return `https://image.tmdb.org/t/p/w500/${this.backdrop}` } },
                nrOfEpisodes: { text: function() {	return this.nrOfEpisodes } },
                rating: { text: function() { return this.rating } },
                voteCount: { text: function() {	return this.voteCount } },
                firstAirDate: { text: function() {	return this.firstAirDate } }
            }
            Transparency.render(document.getElementById('showDetail'), data, directives)
		}
	}
}

app.init()
})()