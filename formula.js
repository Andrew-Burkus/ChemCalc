(function() {
	window.Element = function(data) {
		this.name = data.name;
		this.molarMass = data.molarMass;
	};

	window.Formula = function(elements, numOfElements) {
		this.elements = elements;
		this.count = numOfElements;
	};

	window.Formula.prototype.enumElementsWith = function(lambda) {
		for(index in this.elements) {
			lambda(this.elements[index]);
		}
	};

	window.Formula.prototype.listElements = function() {
		for(index in this.elements) {
			var elem = this.elements[index];
			console.log('Element ' + index + ' is ' + 
				elem.name + ' with a molar-mass of ' + elem.molarMass);
		}
	};

	window.Formula.prototype.getTotalMolarMass = function() {
		var totalMass = 0;
		for(index in this.elements) {
			totalMass += this.elements[index].molarMass * this.count[index];
		}
		return totalMass;
	};

	window.Formula.prototype.percentCompositionOf = function(name) {
		var element = null;
		for(index in this.elements) {
			if(this.elements[index].name === name) {
				return this.elements[index] / this.getTotalMolarMass();
			}
		}
	};
})();