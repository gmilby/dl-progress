# Progress.js

Find out your progress on a page with JavaScript. Progress.js works out where you are on a page, as a percentage. Scroll to the top, you're at 0% progress. Scroll to the bottom, you're at 100%.

Use the progress value to execute code based on where your user is on a page.

Requires jQuery.

##Bookmarklet

Copy the following code into a bookmark to insert a progress counter on any page

```javascript
javascript:(function%20()%20{var%20s%20=%20document.createElement('script');s.setAttribute('src',%20'https://raw.github.com/rcknight/progress.js/master/src/js/bookmarklet.js');document.body.appendChild(s);}());
```