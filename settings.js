// WARNING: THIS FILE SHOULD NOT BE TOUCHED. IT CONTAINS MAPPINGS FOR STORY ELEMENTS
// WARNING: TOUCHING THIS FILE /WILL/ RESULT IN THINGS HAPPENING IN THE WRONG ORDER
// WARNING: OR NOT AT ALL.
// app_ready is deliberately not following convention to differentiate between critical and non-critical elements of the
// game
// commandBuffer is used for buffering the commands
// storyElements contains data about the game, including story chapters and valid terminal commands

app_ready = false
commandBuffer = []
storyElements = {
    "elements": [
        {
            "name": "Boot Animation",
            "fileName": "Boot.txt",
            "directory": "Text",
            "audio":"Audio/MalwareInjection.mp3",
            "loadDelay": 5000,
            "typeDelay": 50,
            "lineByLine": true
        },
        {
            "name": "Introduction - Bit",
            "fileName": "IntroSpeech.txt",
            "directory": "Text",
            "loadDelay": 4000,
            "typeDelay": 100,
            "lineByLine": false
        },
        {
            "name": "The Story So Far",
            "fileName": "BaseStory.txt",
            "directory": "Text",
            "loadDelay": 2500,
            "typeDelay": 70,
            "lineByLine": false
        },
        {
            "name": "GRID Shutdown",
            "fileName": "GRIDLockdown.txt",
            "directory": "Text",
            "loadDelay": 10000,
            "typeDelay": 70,
            "lineByLine": true
        },
        {
            "name": "The End",
            "fileName": "Ending.txt",
            "directory": "Text",
            "audio": "Audio/EndingAM.wav",
            "loadDelay": 16000,
            "typeDelay": 85,
            "lineByLine": false
        }
    ],
    "commands": [
        {
            "name": "poweroff",
            "executes": "powerDownSystem"
        },
        {
            "name": "help",
            "executes": "helpDoc"
        }
    ]
}