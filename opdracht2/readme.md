## Accordion

#### The Core
There's a lot of information about accordions on the web. Every source explains it in a different way. Either by using CSS + JavaScript, or just CSS with some hacks. The main function of an accordion is giving the user en overview of different subjects (titles) which refer to the content hidden inside. This way it's a lot easier looking for something. F.A.Q. list, or forums with a lot of questions could work really well with this. 

## Sketches
Examples on how an accordion can work. The principle is simple; the titles give insight on what is inside the element. Content is hidden to make it easier for the user to find what they're looking for.
![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/accSketch.png)

## Research
What is an accordion? Without any styling you'd think there is just a page with all the content visible for the user to read. Unfortunately, a lot of accordions that roam the web don't work that way. While looking for a correct semantic way of building one I came across a tag called ```<details>``` Which is an standard tag in HTML which does exactly what we want. Drop down subject header with an arrow head. Clicking it expands the content below.

#### First step
When I found out about the ```<details>``` tag I was thrilled. What is that simple? It does everything I need so why haven't I heard about it before?
Turns out it's not that simple.

On the image below you can see an screenshot from can I use, which shows us that the details tag isn’t fully supported. Internet explorer and Edge are left out.

![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/detailsCanI.png)

**source:** [caniuse - details](https://caniuse.com/#search=details)
 
So how can we make this work for every user?

### JavaScript
My first thought was; I need JavaScript. Shit, isn't there an other way? While racking my brain I was already looking for JavaScript solutions. Polyfills that create the same effect and then I realized that the core of the accordion is not hiding content behind subject headers, but to give users content to read.

There is no need for difficult JavaScript fixes. By default, browsers who don't support the details tag render the content completely without hiding parts of it. Which is exactly what I want.

## Enhancements

### HTML & CSS
Basic functionality and the default styling when there are no files selected. 
![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/accHTMLCSS.png)

### JavaScript
If you want to create an accordion for every browser, you could use feature detection. This will check if the browser supports a certain tag/function/element and renders accordingly.

The details tag for example, has an 'open' property. We can make the browser look for this element and act upon either finding it or not finding it.

**example:** 
The code below will look for details inside the document and if it doesn't find it it'll return "no-details"
```if (!('open' in document.createElement('details'))) {
		return "no-details"; }
	}``` 

This is a simple example of feature detection, but for details tag it'll work. Let's say the browser doesn't support JavaScript, or we're on a network that blocks JavaScript then the accordion won't be displayed but the content is shown on the page.


### Browsers
- Chrome
- Firefox
- Safari
- Internet Explorer 8
- Edge
- iOS Safari

![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/accBrowsers.png)


## Sources
- [Smashing Magazine - Designing Perfect Accordion Checklist](https://www.smashingmagazine.com/2017/06/designing-perfect-accordion-checklist/)
- [Viget - Testing Accordion Menu Designs](https://www.viget.com/articles/testing-accordion-menu-designs-iconography/)
- [SitePoint - Vertical Accordion Design](https://www.sitepoint.com/css3-vertical-accordion-using-target-selector/)
- [The Refinery - Semantics and UX of pure CSS3 Accordions](http://the-refinery.io/website-design/semantics-and-ux-of-pure-css3-accordions)
- [Feature Detection](http://thenewcode.com/680/Feature-Detection-and-Styling-For-The-HTML5-details-Element)

## Image Picker

#### The Core
An image picker is used on websites so that users can upload images. When this line of code ```
<input type="file"``` is added to the HTML, which renders an file upload button they can navigate to a file on their computer and upload it to the website.

## Sketches
Bare minimum sketch of an image picker without any enhancements (css/JavaScript.)
![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/minimalImagePicker_small.png)

When enhancements are added we could give the user some feedback like an image preview. With css we can style the element so that it is pleasing to the eyes.

![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/possibleImagePicker_small.png)

## Research
The criteria said that the image picker needed a preview as feedback for the users. But the picker should always be available without relying on JavaScript or CSS.

#### First step
What is an image picker? Does every browser support the standard? The answer is **yes**. Every browser supports the basic function which is: click on a button, search inside computer folders, add your image.
On the MDN website there's a good explanation of what is possible with file input. **source:** [MDN - input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)

#### Image preview
An preview is something we can't implement with only using HTML. By using JavaScript we can add an layer so that users can see the file they uploaded.
W3 explains how to refer to your file input using JavaScript.
**source:** [W3 - input & js](https://www.w3schools.com/jsref/dom_obj_fileupload.asp)

#### Multiple images
One function that I liked to see was being able to add multiple images. At first I thought that this was something complicated, turns out it's not. unfortunately, not every browser supports this type of file selection. But if you look at the screenshot below, it seems that only mobile browsers lack the capabilities to upload multiple images. Which makes sense. Uploading multiple images on a smartphone can be quite the challenge.

![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/multipleFiles.png)
**sources:** [Whatwg - multiple files](https://html.spec.whatwg.org/multipage/input.html#file-upload-state-(type=file)) - [caniuse](https://caniuse.com/#search=multiple)


#### Filereader
Something I used to create the image preview is fileReader. With javascript by using the ```var reader = new FileReader()``` I created a fileReader that expected an input file and renders this on an element. Filereader isn't supported by Opera Mini and Internet Explorer 9 and below.
**source:** [fileReader API](https://caniuse.com/#feat=filereader)

## Enhancements

### HTML
Basic functionality and the default styling when there are no files selected. 
![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/defaultState_noFiles.png)

And when the user adds file the image picker looks like this.
![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/defaultState_selectedFiles.png)

Even though it doesn't look very nice, this will still work on every browser 
With the exception of uploading multiple files. When a browser doesn't support this function, it'll fallback to a single upload.

### CSS
For the css I simple wanted a different font type, there's no other styling used.

**No files selected**

![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/cssState_noFiles.png)

**Files selected**

![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/cssState_selectedFiles.png)

### Javascript
I only used JavaScript to add the preview. it enhances the user experience, but the image picker doesn’t depend on JavaScript to work.

**No files selected**

![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/noFilesJavascript.png)

**Files selected**

![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/FilesJavascript.png)

Right now the user can add as many files as they want. When used in some context I would limit the number of uploads and the size of the images as well.

### Browsers
- Safari
- Chrome
- Firefox
- Internet Explorer 8
- Edge
- iOS Safari

![](/Users/jamie/Dropbox/HVA/Minor/04_browserTechnologies/week_02/imagePickerBrowser.png)
