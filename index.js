const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.push("Broom");
    return copyOfCats;
}

function prependCat(name) {
    const newCopyOfCats = cats.slice();
    newCopyOfCats.unshift("Arnold");
    return newCopyOfCats;
}

function removeLastCat() {
    const newCatsArray = cats.slice();
    newCatsArray.pop();
    return newCatsArray;
}

function removeFirstCat() {
    const newNewCatsArray = cats.slice();
    newNewCatsArray.shift();
    return newNewCatsArray;
}