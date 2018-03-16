## Assignment 1.2
Forking our WAFS project and analyzing if the site is accessible for everyone.
To test this, we can simulate different scenario's like, JavaScript not loading, being (color)blind, having a slow internet connection and other scenarios that we have to anticipate for 

https://jajan20.github.io/browser-technologies/

## Feature check:
### Color
![](https://github.com/jajan20/browser-technologies/blob/master/opdracht1/color.jpg)

Tested with tools to mimic being color blind, site can still be used. But adding some more contrast makes it look a lot better.

- [Protanopia](https://www.toptal.com/designers/colorfilter?orig_uri=www.color-blindness.com&process_type=protan)
- [Dotanopia](https://www.toptal.com/designers/colorfilter?orig_uri=www.color-blindness.com&process_type=protan)
- [Tritanopia](https://www.toptal.com/designers/colorfilter?orig_uri=www.color-blindness.com&process_type=protan)

### JavaScript
Website won't load without JavaScript.
![](https://github.com/jajan20/browser-technologies/blob/master/opdracht1/javascript_disabled.jpg)
Since WAFS was focused on single page web app everything breaks when JavaScript doesn't load.

### Images
Website works without images, but there's no alt text included. I could use the following html code: 
```html
alt=""
```
This because all my images have headers with titles. Detail pages also work without the use of images.
![](https://github.com/jajan20/browser-technologies/blob/master/opdracht1/noImages.jpg)

### Mouse/Trackpad
When we navigate through my website without using a mouse/trackpad we'll notice a few things. Even though my serie buttons have hover states, they miss the focus states. By giving focus state and hover state the same styling we can fix this problem.
![](https://github.com/jajan20/browser-technologies/blob/master/opdracht1/focusStates.jpg)

### Other features for future projects

- **Local Storage:** saving already downloaded images?
- **Bandwidth:** Missing progressive loading.
- **Custom Fonts:**
With the use of google fonts, my custom font loads really fast. But I could use font display swap to load text content first and then when the font is loaded swap the regular to the custom font.
- **Cookies:** No functional use right now. 
- All the content is loaded at once.
- Missing the opportunity to save data to local Storage.
- Site doesn't work in every browser (Firefox).
- Voiceover has trouble identifying correct elements.
- Website is responsive, but could use some optimizations.
- Doesn’t work in Firefox.

#### Solutions
- [ ] Site doesn't work without JavaScript, this can't be fixed as of right now. From the moment the page is loaded, a AJAX call is made and uses JavaScript to render every content element on the page. 
- [ ] Find out how to add alt text with transparency JS so that when images fail to load there is a description.
- [ ] With first view I could try to use criticalCSS but all of my content is loaded from AJAX calls. For returning users I could use local Storage to save data that they already downloaded before.
- [x] With font display: swap I could make the text load faster so that it feels like the site is faster (progressive loading).
- [ ] Cookies gebruiken om gebruikers te onthouden.
- [x] Fix Firefox issue: Working in modules is a rather new functionality and isn't supported in all browsers. (Just in Chrome & Safari)


####
**Fix** for firefox, don't use type is module. This is a very new function used in ES6 and isn't supported by every browser. 

```html
<script type="module"
```

## Voiceover tests
Even though my app is rather small and I thought that everything would work fine. I realised while using the voice over option that I still need to work on a couple of things.

Alt text, correct usage of labels, explaining navigation.
**Results of the test:**

![](https://github.com/jajan20/browser-technologies/blob/master/opdracht1/image_01.jpg)
![](https://github.com/jajan20/browser-technologies/blob/master/opdracht1/image_02.jpg)


## Device tests
The core of WAFS was using JavaScript to create a single page webapp. And after testing on different devices I found out that this doesn't work, at all.
Not just older devices, but my own iPhone X won't display the page correctly.

With older devices it's because JavaScript is disabled or not supported. Or because I'm using ES6.

**Results of the test:**

![](https://github.com/jajan20/browser-technologies/blob/master/opdracht1/deviceTest.jpg)

As you can see on the pictures above, none of the devices would display my site correctly. They all failed the initial load.










