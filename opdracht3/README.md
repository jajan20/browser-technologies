## Contact list - Browser Technologies
#### Use case
In a list of contacts, I want to be able to filter and be able to see the details of every contact.

## Documentation
- [Core functionality](#core-functionality)
- [Features](#features)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Requirements](#requirements)
- [Roadmap](#roadmap)
- [Research](#research)
    - [Internet Explorer 8](#internet-explorer-8)
    - [Internet Explorer 9](#internet-explorer-9) 
    - [Internet Explorer 11](#internet-explorer-11)
    - [Microsoft Edge](#microsoft-edge)
- [Chrome](#chrome)
- [Safari](#safari)
- [Firefox](#firefox)
- [Conclusion](#conclusion)
- [Resources](#resources)


## Core functionality
The bare minimum for a contact list would be an alphabetical list of all the contacts with links to their detail page. At the detail page, you can find all details about the person.

## Features
- Search
- Filter
- Feature detection

## Installation
``` npm install ```

## Dependencies
| Package | Version |     
|---------|---------|
| EJS     | 2.5.8   |  
| Express | 4.16.3  |  
  

## Requirements
- [x] documentation about core functionality
- [x] documentation about feature detection
- [x] which browser supports what features
- [x] progressive enhancements
- [x] user experience

## Roadmap
- [ ] figuring out how the refactor the code so that search works server side.
- [ ] still need to add javascript detection without the ``` <noscript> ``` tag.

## Research
So first I made sure it worked in the browser I use the most, while testing I found out that not every browser can render the list as I had intended.

#### Internet Explorer 8
![](/Users/Jamie/Desktop/images/ie_08.png)
Internet Explorer doesn't support most of the CSS I've used, but there's a natural fallback so the core functionality is still useable.

#### Internet Explorer 9
![](/Users/jamie/Desktop/images/ie_09.png)
The next version renders most of the css but the placeholder doesn't show. So I wrote a bit of code for **feature detection**:

```js
var searchFunction = document.querySelector('.search-container')
var placeholder = document.querySelector('.label')

if (document.createElement("input").placeholder == undefined) {
     placeholder.setAttribute('class', '')
} else {
    placeholder.setAttribute('class', 'hide')
}
```
This will check if the placeholder attribute is supported and if it's not I will render the label visible. (Which is normally hidden.)


#### Internet Explorer 11
![](/Users/jamie/Desktop/images/ie_11.png)
Same feature detection as with version 9.

#### Microsoft Edge
![](/Users/jamie/Desktop/images/edge.png)
Everything works.

## Chrome
![](/Users/jamie/Desktop/images/chrome_both.png)
Everything works.

## Safari
Everything still works on safari, but the search input renders differently.

![](/Users/jamie/Desktop/images/safari.png)
## Firefox
![](/Users/jamie/Desktop/images/firefox.png)

## Conclusion
This assignment was a good challenge, I learned a lot and realized I have so much more to learn. One of the things that stuck is that at school we make assignments in this perfect bubble, but the real live web is truly messy.

## Resources
[UI Names](https://uinames.com/) Cool website for randomly generated persons.
