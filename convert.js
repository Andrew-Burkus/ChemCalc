var avogrado = function() {
	return 6.02 * Math.pow(10, 23);
};

var gallonsToLiters = function(x) {
	return x * 3.79;
};

var litersToGalons = function(x) {
	return x / 3.79;
};

var mlToLiters = function(x) {
	return x / 1000.0;
};

var litersTomL = function(x) {
	return x * 1000.0;
};

var poundsToGrams = function(x) {
	return x * 454.0;
};

var gramsToPounds = function(x) {
	return x / 454.0;
};

var molesToParticles = function(x) {
	return x * avogrado();
};

var particlesToMoles = function(x) {
	return x / avogrado();
};

var molesToLiters = function(x) {
	return x * 22.4;
};

var litersToMoles = function(x) {
	return x / 22.4;
};