console.log("Initialising Script Support...")
console.log("Loading jQuery")
loadjscssfile("https://code.jquery.com/jquery-3.6.0.min.js")
console.log("Looking for jQuery in the browser...")
setTimeout(function(){
    if (checkForLibraryByTypeOf(jQuery, "function")){
        console.log("Found jQuery!")
    } else {
        console.log("Couldn't find jQuery, resetting timer...")
    }
}, 1000)