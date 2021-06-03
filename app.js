console.log("Initialising Script Support...")
console.log("Loading Shared Functions")
loadjscssfile("./functions.js")
console.log("Loading System Settings")
loadjscssfile("./settings.js")
setTimeout(function(){
	if (checkForLibraryByTypeOf(Terminal, "function")){
		term = new Terminal({
			cursorBlink: true
		})
		fitAddon = new FitAddon.FitAddon()
		term.loadAddon(fitAddon)
		term.open(document.getElementById('terminal'))
		fitAddon.fit()
		console.log("Ready!")
		setWindowTitle("Loaded | Please Wait")
		$('.loading').parent().removeClass('alert-primary').addClass('alert-success').html("<p class='loading'>Loaded! <span id='userConsent'>Ready?</span></p>")
		$('#userConsent').on('click', function (){
			$('#userConsent').off('click')
			setTimeout(function(){
				$('.loading').parent().fadeOut("slow")
				setTimeout(function(){
					playNextStoryElement(0)
				})
			}, 450)

			runTerminal()
		})

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
loadjscssfile("https://cdn.jsdelivr.net/npm/xterm-addon-fit@0.5.0/lib/xterm-addon-fit.min.js")
console.log("Loading Typed.JS")
loadjscssfile("https://cdn.jsdelivr.net/npm/typed.js@2.0.12/lib/typed.min.js")
