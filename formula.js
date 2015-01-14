(function() {
	window.Formula = function(elements) {
		this.elements = elements;
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
			totalMass += this.elements[index].molarMass * this.elements[index].quantity;
		}
		return totalMass;
	};

	window.Formula.prototype.percentCompositionOf = function(name) {
		for(index in this.elements) {
			if(this.elements[index].name === name) {
				return this.elements[index].molarMass / this.getTotalMolarMass();
			}
		}
	};

	window.Formula.prototype.densityOfVolumeAtStp = function(volume) {
		return litersToMoles(volume) * this.getTotalMolarMass();
	};
})();