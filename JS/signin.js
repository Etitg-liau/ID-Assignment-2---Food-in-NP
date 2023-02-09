signin();
var loginlist;
var statuss = $(".status");
function getsignin(){
    if (resp !== undefined) {
        loginlist = resp;
    }
    else {
        setTimeout(getsignin, 100);
    }
}
getsignin();
$(".signinbut").click(() =>{
    $(".animation").show();
    var signedin = false;
    var finalhtml = "";
    var username = $("#usname").val();
    var password = $("#pwd").val();
    for (let i = 0; i < loginlist.length; i++) {
        if (loginlist[i].username == username) {
            console.log("Correct username");
            if (loginlist[i].password == password) {
                finalhtml += "<p>Correct password, successful login.</p>";
                signedin = true;
                break;
            }
            else {
                finalhtml += "<p>Correct username, incorrect password</p>";
                break;
            }
        }
    }
    if (signedin) {
        finalhtml += "<p>Signed in</p>";
    }
    else {
        finalhtml += "<p>Not signed in</p>";
    }
    statuss.html(finalhtml);
    function hideanim(){
        $(".animation").hide();
    }
    setTimeout(hideanim, 2000);
})
$(".animation").hide();
