function checkForLibraryByTypeOf(caller, type){
    // checks for a library by the type of that library, for example with jQuery it should be a function
    // checkForLibraryByTypeOf(jQuery, "function") when loaded should return true.
    if (typeof caller == type){
        return
    } else {
        return false
    }
}