const express = require('express')
const ejs = require('ejs')
const fs = require('fs')
const contacts = require('./contacts.js')
const app = express()

// console.log(contacts)

app.set('view engine, ejs')
app.use(express.static('public'))

app.get('/', function(req, res) {
	// console.log(data[0].contacts)
	res.render("index.ejs", { contacts: contacts })
})

app.get('/:id', function(req, res) {
	let id = req.params.id
	
	for (contact of contacts) {
		for (var i = 0; i < contact.contacts.length; i++ ) {
			if (contact.contacts[i].name +" "+ contact.contacts[i].surname == id) {
				// console.log(contact.contacts[i])
				res.render("detail.ejs", { contact: contact.contacts[i] })
				break
			}
		}
		
	}
})

app.listen(3000)
console.log('App is running on port 3000')