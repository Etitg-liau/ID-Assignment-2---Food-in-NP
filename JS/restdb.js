
var resp;
function signin()
{
  var settings = 
  {
    "async": true,
    "crossDomain": true,
    "url": "https://sgfoodhour-959c.restdb.io/rest/member",
    "method": "GET",
    "headers": 
    {
      "content-type": "application/json",
      "x-apikey": "63e45ae9478852088da67ef5",
      "cache-control": "no-cache"
    }
  }
  $.ajax(settings).done(function (response) {
    resp = response;
  });
}
function signindata()
{
  var settings =
  {
    "async": true,
    "crossDomain": true,
    "url": "https://sgfoodhour-959c.restdb.io/rest/member",
    "method": "POST",
    "headers": 
    {
      "content-type": "application/json",
      "x-apikey": "63e45ae9478852088da67ef5",
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
  }

$.ajax(settings).done(function (response) {
  resp = response;
});
}