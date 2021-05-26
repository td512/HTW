function loadjscssfile(filename, filetype){
    if (filetype=="js"){ // if filename contains js
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename contains css
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined") { //do I really need to explain this to you?
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}