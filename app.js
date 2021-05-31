console.log("Initialising Script Support...")
console.log("Loading Shared Functions")
loadjscssfile("./functions.js")
setTimeout(function(){
	if (checkForLibraryByTypeOf(Terminal, "function")){
		term = new Terminal()
		term.open(document.getElementById('terminal'))
		runFakeTerminal()
	}
}, 1500)

setTimeout(function(){
	if (checkForLibraryByTypeOf($, "function")){
		loadjscssfile("https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js")
		loadjscssfile("https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js")
	}
}, 1500)
console.log("Loading Bootstrap CSS")
loadjscssfile("https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css")
console.log("Loading Base Style")
loadjscssfile("./base_style.css")
console.log("Loading jQuery")
loadjscssfile("https://code.jquery.com/jquery-3.6.0.min.js")
console.log("Loading Xterm.JS")
loadjscssfile("https://cdn.jsdelivr.net/npm/xterm@4.12.0/lib/xterm.min.js")
console.log("Loading Xterm.JS CSS")
loadjscssfile("https://cdn.jsdelivr.net/npm/xterm@4.12.0/css/xterm.css")
