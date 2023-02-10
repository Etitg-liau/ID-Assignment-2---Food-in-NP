var resp;
function signin()
{
  var settings = 
  {
    "async": true,
    "crossDomain": true,
    "url": "https://sgfoodhour-32f0.restdb.io/rest/member",
    "method": "GET",
    "headers": 
    {
      "content-type": "application/json",
      "x-apikey": "63e6495d478852088da6802f",
      "cache-control": "no-cache"
    }
  }
  $.ajax(settings).done(function (response) {
    resp = response;
  });
}
function signindata(jsondata)
{
  var settings =
  {
    "async": true,
    "crossDomain": true,
    "url": "https://sgfoodhour-32f0.restdb.io/rest/member",
    "method": "POST",
    "headers": 
    {
      "content-type": "application/json",
      "x-apikey": "63e6495d478852088da6802f",
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
  }

$.ajax(settings).done(function (response) {
  resp = response;
});
}