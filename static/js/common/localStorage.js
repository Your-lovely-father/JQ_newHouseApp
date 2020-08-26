function localStorageSet(key, value) {
   window.localStorage.setItem(key,JSON.stringify(value))
}
function localStorageGet(key){
    return JSON.parse(window.localStorage.getItem(key)||'[]')
}
function localStorageDel(key) {
    if(key){
        window.localStorage.removeItem(key)
    }else{
        window.localStorage.clear()
    }

}
