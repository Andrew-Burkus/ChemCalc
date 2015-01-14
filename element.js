(function() {
	window.Element = function(data) {
		this.name = data.name;
		this.molarMass = data.molarMass;
		this.quantity = data.quantity;
	};

	window.Element.prototype.withQuantity = function(x) {
		return new window.Element({
			name: this.name,
			molarMass: this.molarMass,
			quantity: x
		});
	};
})();