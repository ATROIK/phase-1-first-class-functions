/*function Monday() {
    console.log('Go for a 5 mile run');
    console.log('pump iron');
}
function Tuesday () {
    console.log('Go for a 5 mile run');
    console.log('swim 40 laps');
}

function Wednesday () {
    console.log('Go for a 5 mile run');
    console.log('Go for a 5 mile run');
}

function Thursday () {
    console.log('Go for a 5 mile run');
    console.log('pump iron');
}

function Friday () {
    console.log('Go for a 5 mile run');
    console.log('swim 40 laps');
}

function runFiveMiles() {
    console.log('Go for a 5 mile run');
}

function Monday() {
    runFiveMiles();
    liftWeights();
}

function excerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    excerciseRoutine(liftWeights);
}
function excerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}
Monday();*/

function receivesAFunction(callbackFunction) {
    callbackFunction();
}

function returnsANamedFunction() {
    return function namedFunction(){

    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}