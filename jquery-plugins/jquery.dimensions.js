/*!
 * jQuery Aggregate Dimensions
 * @author Lenny Burdette
 * @requires jQuery 1.4.2 or greater
 */
(function ($) {
	
	// Returns the tallest height of a collection of elements
	$.fn.tallest = function (outer, margins) {  
	    var fn = outer ? "height" : "outerHeight";  
	    return Math.max.apply(Math, $.map(this, function() {  
	        return $(this)[fn](margins);  
	    }));
	};  

	// Returns the widest width of a collection of elements
	$.fn.widest = function (outer, margins) {  
	    var fn = outer ? "width" : "outerWidth";  
	    return Math.max.apply(Math, $.map(this, function() {  
	        return $(this)[fn](margins);  
	    }));
	};
	
	// Returns the total width of a collection of elements
	$.fn.totalWidth = function (outer, margins) {
		var fn = outer ? "width" : "outerWidth",
			w = 0;
		$.each(this, function () {
			w += $(this)[fn](margins);
		});
		return w;
	};
	
	// Returns the total height of a collection of elements
	$.fn.totalHeight = function (outer, margins) {
		var fn = outer ? "height" : "outerHeight",
			h = 0;
		$.each(this, function () {
			h += $(this)[fn](margins);
		});
		return h;
	};
	
})(jQuery);