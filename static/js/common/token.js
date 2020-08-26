var access_token =window.localStorage.getItem('access_token');
function token(url){
    if(!access_token){
        window.location.href=url;
        return false;
    }
};
