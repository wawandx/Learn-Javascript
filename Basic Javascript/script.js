var firstName = 'Wawan'; //declare var
console.log(firstName);

//alert(firstName); //alert example

/*var lastName = prompt('What is his last Name?'); //prompt example
console.log(firstName + ' ' + lastName);*/

/*
	MATH OPERATOR
*/
var now, ageWawan, ageFandu;
now = 2019;
ageWawan = 25;
ageFandu = 26;

console.log(now - ageWawan);
console.log(now * ageWawan);
console.log(now / ageWawan);

/*
	LOGICAL OPERATOR
*/
var olderThan = ageWawan > ageFandu;
console.log(olderThan);

/*
	TYPEOF OPERATOR
*/
console.log(typeof olderThan);
console.log(typeof ageWawan);
console.log(typeof firstName);
var x;
console.log(typeof x);

/*
	Example
*/
var massWawan,heightWawan,massRocky,heightRocky;
massWawan=78;
heightWawan=1.78;
massRocky=80;
heightRocky=1.75;

var BMIWawan = massWawan / (heightWawan * heightWawan);
var BMIRocky = massRocky / (heightRocky * heightRocky);

console.log(BMIWawan);
console.log(BMIRocky);

var wawanHigherBMI = BMIWawan > BMIRocky;
console.log('Is Wawan\'s BMI higher than Rocky\'s? ' + wawanHigherBMI);

/*
	IF Condition
*/
var massWawan,heightWawan,massRocky,heightRocky;
massWawan=78;
heightWawan=1.78;
massRocky=80;
heightRocky=1.75;

var BMIWawan = massWawan / (heightWawan * heightWawan);
var BMIRocky = massRocky / (heightRocky * heightRocky);

if(BMIWawan > BMIRocky) {
	console.log('Is Wawan\'s BMI higher than Rocky\'s');	
} else {
	console.log('Is Rocky\'s BMI higher than Wawan\'s');
}

/*
	Ternary operator
*/
var firstName = 'Wawan';
var age = 25;

age >= 18 ? console.log(firstName + ' is a man.') : console.log(firstName + ' is a boy.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*
	Switch statement
*/
var job = 'programmer';

switch (job) {
	case 'driver' :
		console.log(firstName + ' is a ' + job + ' in Grab');
		break;
	case 'programmer' :
		console.log(firstName + ' is a ' + job + ' in UNTAD');
		break;
	case 'teacher' :
		console.log(firstName + ' is a ' + job + ' in SMK');
		break;
	default:
		console.log(firstName + ' is a unknown job');	
}

/*
	falsy values
*/
	// falsy values : undefined, null, 0, '', NaN
/*
	truthy values
*/
	// truthy values : NOT falsy values

/*
	Example 2
*/
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'Wawan'));
console.log(whatDoYouDo('designer', 'Rocky'));
console.log(whatDoYouDo('retired', 'Fandu'));

/*
	Arrays
*/
// Initialize new array
var names = ['Wawan', 'Mike', 'Rocky'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Fandu';
names[names.length] = 'Dwi';
console.log(names);

// Different data types
var wawan = ['Rachmad', 'Kurniawan', 1994, 'programmer', false];

wawan.push('blue'); // add data to end of array
wawan.unshift('Mr.'); // add data in begining of array
console.log(wawan);

wawan.pop(); // delete data last array
wawan.pop(); 
wawan.shift(); // delete data begining array
console.log(wawan);

console.log(wawan.indexOf(23)); // indexOf = checking this value index number in array

var isDesigner = wawan.indexOf('designer') === -1 ? 'Wawan is NOT a designer' : 'Wawan IS a designer';
console.log(isDesigner);

/*
	Example 3
*/

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);

/* 
	Objects
*/

// Object literal
var wawan = {
    firstName: 'Rachmad',
    lastName: 'Kurniawan',
    birthYear: 1994,
    family: ['Anggi', 'Fandu', 'Rocky', 'Mike'],
    job: 'Programmer',
    isMarried: false
};

console.log(wawan.firstName); //example get object name
console.log(wawan['lastName']); //example get object name with array
var x = 'birthYear'; //example get object name initialize in variable
console.log(wawan[x]);

//Mutate object
wawan.job = 'designer';
wawan['isMarried'] = true;
console.log(wawan);

// new Object syntax
var anggi = new Object();
anggi.firstName = 'Riski';
anggi.birthYear = 2000;
anggi['lastName'] = 'Anggita';
console.log(anggi);

/*
	Object Method
*/
var wawan = {
    firstName: 'Rachmad',
    lastName: 'Kurniawan',
    birthYear: 1994,
    family: ['Anggi', 'Fandu', 'Rocky', 'Mike'],
    job: 'Programmer',
    isMarried: false,
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

wawan.calcAge();
console.log(wawan);

/*
	Example 4
*/

var wawan = {
    fullName: 'Rachmad Kurniawan',
    mass: 78,
    height: 1.78,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var anggi = {
    fullName: 'Riski Anggita',
    mass: 46,
    height: 1.7,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (wawan.calcBMI() > anggi.calcBMI()) {
    console.log(wawan.fullName + ' has a higher BMI of ' + wawan.bmi);
} else if (anggi.bmi > wawan.bmi) {
    console.log(anggi.fullName + ' has a higher BMI of ' + anggi.bmi);
} else {
    console.log('They have the same BMI');
}

/*
	Loops
*/

// for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}

/*
	EXAMPLE 5
*/
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}