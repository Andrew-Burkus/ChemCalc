(function() {
	var H2OMolarMass = 18.02;

	var Hydrate = function(elements, waterPercentage) {
		this.formula = new Formula(elements);
		this.percentH2O = waterPercentage;
	};

	Hydrate.prototype.molRatio = function() {
		var molsH2O = (100.0 * this.percentH2O) / H2OMolarMass;
		var molsFormula = 100.0 - (100.0 * this.percentH2O) / this.formula.getTotalMolarMass();

		return molsH2O / molsFormula;
	};

	window.Hydrate = Hydrate;
})();