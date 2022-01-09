/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(name) {
    console.log(name)
}
printName('ahmad');

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(yob){
    let age = 2022 - yob
    console.log(`You are ${age} years old.`)
}
printAge(1998);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language){
    if (language === "en"){
        console.log(`Hello ${name}`)
    } else if (language === "es"){
        console.log(`Holla ${name}`)
    } else if (language === "fr"){
        console.log(`Bonjour ${name}`)
    } else if (language === "tr"){
        console.log(`Merhaba ${name}`)
    }
    else{
        console.log("please choose a valid language (en, es, fr, tr)")
    }
}
printHello('esteban', 'es');
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2){
    if (num1 > num2){
        console.log(`${num1} is larger than ${num2}`)
    } else if (num2 > num1){
        console.log(`${num2} is larger than ${num1}`)
    } else {
        console.log("num1 and num2 are equal")
    }

}
printMax(16, 29);