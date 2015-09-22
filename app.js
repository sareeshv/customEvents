/**
 * Created by sareesh on 9/21/15.
 */
(function(){

	//var SampleObject = {
	//	WindowHeightReady : $.Deferred()
	//};

	/**
	 * sample function
	 */
	var sampleFunction = function() {
		console.log('My sample function to trigger on dispatching a custom event');
	};

	//Used timeout to show the behaviour
	setTimeout(function () {
		document.dispatchEvent(new Event("windowHeightReady"));
	}, 5000);




	//document.addEventListener('windowHeightReady', function(e) {
	//	SampleObject.WindowHeightReady.resolve();
	//}, false);

	document.addEventListener('windowHeightReady', sampleFunction);

})();