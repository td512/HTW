function checkForLibraryByTypeOf(caller, type){
    // checks for a library by the type of that library, for example with jQuery it should be a function
    // checkForLibraryByTypeOf(jQuery, "function") when loaded should return true.
    if (typeof caller == type){
        return true
    } else {
        return false
    }
}

function setWindowTitle(title){
    // Does what it says on the tin
    window.document.title = title
}

function fadeAudioOut(step, sequenceTime, callback){
    // Does what it says on the tin, accepts 3 params:
    // step: the step in which to lower the audio volume. 0.05 is a good idea.
    // sequenceTime: how long to tell setTimeout to wait
    // callback: accepts a method that will be executed when this completes
    if ($('#audio').is('audio')) {
        let audio = document.getElementById('audio')
        console.log(`Found Audio Element - Fading: Volume@${audio.volume}`)
        if (audio.volume > step) {
            audio.volume -= step
            setTimeout(function () {
                fadeAudioOut(step, sequenceTime, callback)
            }, sequenceTime)
        } else {
            audio.pause()
            callback()
        }
    } else {
        console.log("No Audio Element Found")
        callback()
    }
}

function insertOrReplaceAudio(audioFile){
    // Does what it says on the tin, accepts 1 param:
    // audioFile: The URL to the new audio file
    console.log("Replacing Audio")
    if ($('#audio').is('audio')) {
        $('#audio').remove()
    }
    $('body').append(`<audio autoplay="true" src="${audioFile}" id="audio">`)
    audio = document.getElementById('audio')
    audio.currentTime = 0
    audio.volume = 1
    audio.play()
}

function playNextStoryElement(storyElementId){
    // Queues up the next element of the story, then hooks playStoryElement
    // takes a single int as a parameter. This runs autonomously after being called element ID 0
    if (storyElementId <= storyElements.elements.length - 1) {
        elementData = storyElements.elements[storyElementId]
        console.log(`Loading Story Element '${elementData.name}'`)
        if (elementData.audio) {
            fadeAudioOut(0.05, 50, function () {
                insertOrReplaceAudio(elementData.audio)
            })
        }
        setWindowTitle(`${elementData.name}`)
        $.get(`${elementData.directory}/${elementData.fileName}`, function (data) {
            console.log(`Playing Story Element '${elementData.name}'`)
            playStoryElement(data, 0, elementData.typeDelay, elementData.loadDelay, elementData.lineByLine, function () {
                playNextStoryElement(storyElementId + 1)
            })
        })
    } else {
        app_ready = true
        term.clear()
        term.clear()
        term.writeln("Welcome to Core OS // _stuck? try 'help'")
        prompt(term)
    }

}

function playStoryElement(storyData, sequenceIndex, syncTime, initialLoadoutTime, lineByLine, callback){
    if (lineByLine){
        localStoryData = storyData.split(/\r\n|\n/)
        if (sequenceIndex == 0) {
            setTimeout(function(){
                term.clear()
                term.writeln(localStoryData[sequenceIndex])
                setTimeout(function(){ playStoryElement(storyData, sequenceIndex+1, syncTime, initialLoadoutTime, lineByLine, callback)}, syncTime)
            }, initialLoadoutTime)
        } else if (sequenceIndex < localStoryData.length - 1) {
            term.writeln(localStoryData[sequenceIndex])
            setTimeout(function(){ playStoryElement(storyData, sequenceIndex+1, syncTime, initialLoadoutTime, lineByLine, callback)}, syncTime)
        } else {
            callback()
        }
    } else {
        if (sequenceIndex == 0) {
            setTimeout(function(){
                term.clear()
                term.write(storyData[sequenceIndex])
                setTimeout(function(){ playStoryElement(storyData, sequenceIndex+1, syncTime, initialLoadoutTime, lineByLine, callback)}, syncTime)
            }, initialLoadoutTime)
        } else if (sequenceIndex < storyData.length - 1) {
            term.write(storyData[sequenceIndex])
            setTimeout(function(){ playStoryElement(storyData, sequenceIndex+1, syncTime, initialLoadoutTime, lineByLine, callback)}, syncTime)
        } else {
            callback()
        }
    }
}

function executeCommand(input){
    // executes a command stored in commandBuffer, this hooks storyElements.commands to find the correct function to
    // execute
    commandInput = input.split(" ")
    commandIndex = -1
    storyElements.commands.forEach(function(key, _index){
        if (key.name == commandInput[0]) {
            commandIndex = _index
        }
    })
    if (commandIndex == -1) {
        term.write("\r\n")
        if (input != "") term.writeln(`${commandInput[0]}: command not found`)
    } else {
        term.write("\r\n")
        let fn = window[storyElements.commands[commandIndex].executes]
        if (input.indexOf(" ") == -1 && typeof fn === "function"){
            fn()
        } else if (input.indexOf(" ") >= 0 && typeof fn === "function") {
            fn(commandInput.slice(1).join(""))
        }
    }
}

function helpDoc(input = null){
    // Prints a help document. Optionally accepts input to allow further documentation display
    switch(input){
        case "help":
            term.writeln("help: help [pattern ...]")
            term.writeln("Display information about builtin commands.")
            break
        case "poweroff":
            term.writeln("poweroff: poweroff")
            term.writeln("Power-off the machine")
            break
        default:
            term.writeln("CRASH, version SECURE5-release (x86_64-pc-SLIM)")
            term.writeln("These shell commands are defined internally.  Type `help' to see this list.")
            term.writeln("Type `help name' to find out more about the function `name'.")
            term.writeln("help poweroff")
    }
}

let runTerminal = async function() {
    // This is where the majority of the magic happens. This is what controls the terminal you see.
    // Accepts no arguments and generally keeps to itself.

    if (term._initialized) {
      return;
    }

    term._initialized = true;

    term.prompt = () => {
      term.write('\r\n$ ');
    };
	
    
    term.onData(e => {
      switch (e) {
        case '\r': // Enter
              executeCommand(commandBuffer.join(""))
              commandBuffer = []
        case '\u0003': // Ctrl+C
		  if (app_ready) {
			prompt(term)
		  }
          break;
        case '\u007F': // Backspace (DEL)
          // Do not delete the prompt
          if (term._core.buffer.x > 2 && app_ready) {
            term.write('\b \b')
            commandBuffer.pop()
          }
          break
        default: // Print all other characters for demo
		  if (app_ready) {
              term.write(e)
              commandBuffer.push(e)
		  }
          
      }
    });
  }

  function prompt(term) {
    term.write('\r\n$ ')
  }