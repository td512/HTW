console.log("Initialising Script Support...")
console.log("Loading jQuery")
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
loadjscssfile("https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css")
loadjscssfile("./base_style.css")
loadjscssfile("https://code.jquery.com/jquery-3.6.0.min.js")
loadjscssfile("https://cdn.jsdelivr.net/npm/xterm@4.12.0/lib/xterm.min.js")
loadjscssfile("https://cdn.jsdelivr.net/npm/xterm@4.12.0/css/xterm.css")
console.log("Looking for jQuery in the browser...")
