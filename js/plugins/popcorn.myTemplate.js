(function (Popcorn) {

"use strict";

	Popcorn.basePlugin( 'myTemplate' , function(options, base) {
	
	  //console.log('myTemplate(%o,%o)', options, base);
	  
		// global vars ~setup
		var popcorn, media, container, target;
		
		popcorn = this;
		//video = popcorn.media;

    // create div
    // text in container
    var container = document.createElement('div')
    container.innerHTML = options.text
    
    // create video!
    //video = document.createElement('video')
    //container.innerHTML = options.text
    
    target = document.getElementById(options.target);
    target.appendChild(container);

		return {
		  // start event
			start: function( event, options ) {
			  var foo = 'newString';
			  container.style.display = '';
			},
			// end event
			end: function( event, options ) {
			  container.style.display = 'none';
			},
			// delete this instance
			_teardown: function( options ) {      
			}
		};
	});
})( Popcorn );
