#ChemCalc

Studying chemistry, why not make a JS based chemical calculator?
Somewhat working.

##Elements

A simple object represenation of an element.

###Constructor

```javascript
var Carbon = new Element({
	name: 'Carbon',
	molarMass: 12.01,
	quantity: 1
});

var Oxygen = new Element({
	name: 'Oxygen',
	molarMass: 16.0,
	quantity: 2 // Since Oxygen is a diatomic element, SCIENCE.
});
```
The constructor can be invoked without specifying a quantity.

```javascript
var Carbon = new Element({
	name: 'Carbon',
	molarMass: 12.01
});
```
This only poses an issue if the quantity is left empty within a Formula object.
In order to use an Element with a __null__ quantity in a formula, use the _withQuantity_ method.

```javascript
var Carbon3 = Carbon.withQuantity(3);
```
_withQuantity_ returns a copy of the Element, with the new quantity. There are no side-effects.

##Formulas

A formula is simply a list of Element objects. Order is a not factor.

###Constructor

```javascript
var CarbonDioxide = new Formula([Carbon, Oxygen.withQuantity(2)]);
var HydrochloricAcid = new Formula([
	new Element({
		name: 'Hydrogen',
		molarMass: 1.01
		}).withQuantity(1),
	new Element({
		name: 'Chlorine',
		molarMass: 35.45,
		quantity: 1
		})
]);
```

###Formula's other lovely Methods

####enumElementsWith
Takes a function to be used with all elements in a given Formula.

```javascript
var double = function(element) {
	element = element.withQuantity(element.quantity * 2);
};

HydrochloricAcid.enumElementsWith(double);
```
