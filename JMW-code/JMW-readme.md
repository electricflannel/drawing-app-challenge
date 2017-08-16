## Instructions:

To get this drawing app running, run `npm install` in the directory.  Once it has downloaded all the dependencies, run `npm start` to spin up the local server. That's all it really takes to get this app up and running.

## Notes:

- I used the BEM CSS naming convention and altered it to correspond with the component. I also used CSS variables, which is a feature available in newer browsers.
- "Save image as" works on Mozilla.  In Chrome, the app still exports the canvas image and allows you to drag and drop the image.  However, when you right-click and "Save image as," it doesn't come up with the dialog box to save image to file.

## Questions:
1. What aspect of your submission are you most proud of, and why?

I am most proud of the image stamp handling and the export canvas features. Those particular challenges were fun to figure out and I enjoyed getting a deeper understanding of HTML canvas API. 


2. What would you work on if you had more time? 

There is a bug in Chrome that doesn't allow the user to "Save image as" when the image is exported to a new window.  This feature does work on Mozilla.  

I would also like to explore storing the canvas state in Redux. I opted out of storing the state of the canvas in Redux because I felt that it didn't add any benefits with the app's current features.  

3. Of all the resources (blog posts, tutorials, videos, mentors etc.) you referenced, what was most helpful for you?

I found that [Mozilla's Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) on HTML canvas were helpful in understanding HTML canvas and its available features.  

[Eugeneware](http://eugeneware.com/software-development/converting-base64-datauri-strings-into-blobs-or-typed-array) is an excellent resource for working with the DataURI. The examples were great for understanding how to convert base64 image files into a blob for export.  

I have played with Redux, so I understood the principles behind the framework. The docs were great to reference when I got stuck.