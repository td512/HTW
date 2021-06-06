function loadjscssfile(filename){
    // Detects and inserts HTML elements into the page, allowing dynamic load of libraries
    // and styles.
    if (filename.split('.').pop()=="js"){ // if filename contains js
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filename.split('.').pop()=="css"){ //if filename contains css
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined") { //do I really need to explain this to you?
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}