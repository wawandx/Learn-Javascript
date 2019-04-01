///////////////////////////////////////
// Lecture: Hoisting
/*
Hoisting atau apabila diterjemahkan kebahasa Indonesia berarti mengangkat,
adalah istilah yang tidak akan Anda temukan dalam prosa spesifikasi normatif
sebelum Spesifikasi Bahasa ECMAScript® 2015. Hoisting dimaksudkan sebagai 
cara berpikir umum tentang bagaimana konteks eksekusi (khususnya fase pembuatan
dan pelaksanaan) bekerja di JavaScript. Tapi, hoisting bisa menyebabkan kesalahpahaman.
Misalnya, hoisting mengajarkan bahwa deklarasi variabel dan fungsi secara fisik
dipindahkan ke bagian atas kode Anda, tapi bukan ini yang terjadi sama sekali. 
Apa yang terjadi adalah bahwa deklarasi variabel dan fungsi dimasukkan ke dalam 
memori selama fase kompilasi, namun tetap berada di tempat Anda mengetikkannya 
dalam pengkodean Anda. (developer.mozilla.org)
*/

// functions
calculateAge(1965);

//Hoisting run in function declaration
//Hoisting berjalan di function declaration
function calculateAge(year) {
    console.log(2016 - year);
}

//hoisting not run in function expression
//Hoisting tidak berjalan di function expression
// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

//hoisting run in variable but is undifined if we don't initialize variable in bottom console.log is error
//hoisting berjalan di variable tetapi bernilai undifined jika kita tidak mendeklarasikan variable di bawah console.log maka yang muncul malah error
console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo(); // value is 65 because is variabel object in foo function. // nilainya 65 karena variabel objectnya (age) berada di foo function.
console.log(age); //value is 23 because is global variabel object. same name but different variabel because it. // nilainya 23 karena global variabel object. sama nama variabel tetapi keduanya adalah variabel yang berbeda.



///////////////////////////////////////
// Lecture: Scoping
/*Analogi paling sederhana untuk menjelaskan scope adalah dengan membayangkan 
sebuah ember yang berisi kelereng (gundu, bagi yang kurang familiar dengan istilah 
kelereng). Kita bisa memasukkan kelereng-kelereng ini ke dalam tiap ember yang berbeda, 
dan suatu saat kita membutuhkan sebuah kelereng, kita tahu ke ember mana kita harus 
mencarinya.
Dalam analogi ini, variable adalah kelereng dan scope adalah embernya. Sebuah scope hanya
bisa mengakses variable yang dideklarasikan di dalam scope itu sendiri. Scope di 
JavaScript biasanya kita buat batasannya menggunakan simbol curly brackets ({}). 
(https://medium.com/@adhywiranata/bermain-scope-di-javascript-d954e07d05ae)
*/

// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}



// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

calculateAge(1994);

function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}

var wawan = {
    name: 'Wawan',
    yearOfBirth: 1994,
    calculateAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        
        /*function innerFunction() {
            console.log(this);
        }
        innerFunction();*/
    }
}

wawan.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1992
};


mike.calculateAge = wawan.calculateAge;
mike.calculateAge();