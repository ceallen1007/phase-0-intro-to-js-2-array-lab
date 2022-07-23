const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(string) {
    return cats.push("Ralph")
}

function destructivelyPrependCat(string){
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat(string){
    return cats.pop()
}

function destructivelyRemoveFirstCat(string){
    return cats.shift()
}

function appendCat(string){
    return [...cats, "Broom"]
}

function prependCat(string){
    return ["Arnold", ...cats]
}

function removeLastCat(string){
    return cats.slice(0, -1)
}

function removeFirstCat(string){
    return cats.slice(1)
}