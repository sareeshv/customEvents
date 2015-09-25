Usage of custom event and adding the event listener for the event
===========================================================================

In some cases we may have to add custom event and may need to listen for this event and can do some actions.

For example, check the below scenario.

Lets assume we have an iframe and we are getting the iframe src from an ajax call.
In this case the iframe window height will only be set correctly after getting the url for the iframe and set to the src.
So we can make use of custom event to trigger some actions after getting the actual height.

we can trigger a custom event after getting the iframe url as shown below.

```javascript
document.dispatchEvent(new Event("windowHeightReady"));
```

The above code will create an Event and will despatch the event and the corresponding listener will catch this.

```javascript
document.addEventListener('windowHeightReady', function(e) {
	SampleObject.WindowHeightReady.resolve();
}, false);
```

The above listener will gets invoked when we despatch the custom event. Here are resolving a promise ('WindowHeightReady').
We can make use of promise when listening to a custom event. Please refer the other sample for this.
https://github.com/sareeshv/promiseTest

Instead of this we can use any functions as shown below.

```javascript
var sampleFunction = myFunction(){
	console.log('My sample function to trigger on dispatching a custom event');
};
```

```javascript
document.addEventListener('windowHeightReady', sampleFunction);
```
