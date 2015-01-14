
	var avogrado = function() {
		return 6.02 * Math.pow(10, 23);
	};

	var toLiters = function(x) {
		return x * 3.79;
	};

	var toGalons = function(x) {
		return x / 3.79;
	};

	var toGrams = function(x) {
		return x * 454.0;
	};

	var toPounds = function(x) {
		return x / 454.0;
	};

	var molesToParticles = function(x) {
		return x * avogrado();
	};

	var particlesToMoles = function(x) {
		return x / avogrado();
	};
