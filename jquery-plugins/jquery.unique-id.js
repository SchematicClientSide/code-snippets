// Returns the ID of an element, creating and assigning one if necessary
;(function ($) {
	
	var idCounter = 0;
	
	$.fn.uniqueId = function () {
		var el = this[0] || this;
		if (! el.id) {
			el.id = "jqueryEl" + (idCounter++);
		}
		return el.id;
	};
	
})(jQuery);