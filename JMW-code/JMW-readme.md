## Instructions:

To get this drawing app running, run `npm install` in the directory.  Once it has downloaded all the dependencies, run `npm start` to spin up the local server. That's all it really takes to get this app up and running.

## Notes:

- I used the BEM CSS naming convention and altered it to correspond with the component. I also used CSS variables, which available in newer browsers.
- "Save image as" works on Mozilla.  However, in Chrome, when you select "Save image as," it doesn't come up with the dialog box to save image to file

## Questions:
1. What aspect of your submission are you most proud of, and why?

I am most proud of the image stamp handling and the export canvas features. I don't have a lot of experience working with HTML canvas and those particular problems were really fun to figure out. They also gave me deeper understanding of the Browser API.


2. What would you work on if you had more time? 

There is a bug in Chrome that doesn't allow the user to "Save image as" when the image is exported to a new window.  This feature does work on Mozilla.  Another aspect I would like to explore more is handling the canvas in Redux.  I opted out of storing the state of the canvas because I felt that it didn't add any benefits with the app's current feature set.  I would also like to explore how to manage state better in the app.  There were a couple implementations that I used that are not best practice: i.e. managing `save_canvas` in Canvas.js.

3. Of all the resources (blog posts, tutorials, videos, mentors etc.) you referenced, what was most helpful for you?

I found that [Mozilla's Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) on HTML canvas were helpful with understanding HTML canvas and all the features available.  I also found [Eugeneware](http://eugeneware.com/software-development/converting-base64-datauri-strings-into-blobs-or-typed-array) to be an excellent resource for working with the DataURI.  I had never done that before and the examples were great for understanding how to convert base64 image files into a blob for export.  I have played with Redux, so I understood the principles behind framework.  However, the docs were great to reference when I got stuck.