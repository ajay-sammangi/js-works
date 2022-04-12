// let get_accesstoken=JSON.parse(localStorage.getItem("access-token"));
// console.log(get_accesstoken);
var access_token=localStorage.getItem("access-token");
if(access_token==null){
    window.location.href="/projectM-loginpage.html";
}
function signout(){
    window.location.href = "/projectM-loginpage.html";
    localStorage.clear();

}
