/*!
 * jQuery Aggregate Dimensions
 * @author Lenny Burdette
 * @requires jQuery 1.4.2 or greater
 */
(function ($) {
	
	// Returns the tallest height of a collection of elements
	$.fn.tallest = function (outer, margins) {  
	    return Math.max.apply(Math, $.map(this, function() {  
	        return outer ? $(this[i]).outerHeight(margins) : $(this[i]).height();  
	    }));
	};  

	// Returns the widest width of a collection of elements
	$.fn.widest = function (outer, margins) {  
	    var fn = outer ? "width" : "outerWidth";  
	    return Math.max.apply(Math, $.map(this, function() {  
	        return outer ? $(this[i]).outerWidth(margins) : $(this[i]).width();   
	    }));
	};
	
	// Returns the total width of a collection of elements
	$.fn.totalWidth = function (outer, margins) {
		var w = 0;
		$.each(this, function () {
			w += outer ? $(this[i]).outerWidth(margins) : $(this[i]).width();
		});
		return w;
	};
	
	// Returns the total height of a collection of elements
	$.fn.totalHeight = function (outer, margins) {
		var h = 0;
		$.each(this, function () {
			h += outer ? $(this[i]).outerHeight(margins) : $(this[i]).height();
		});
		return h;
	};
	
})(jQuery);