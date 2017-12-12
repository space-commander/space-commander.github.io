console.log("Copyright 2017 Johnny Stene, All Rights Reserved.");
console.log("Hint: /command.js");

var message;

function superHiddenFunction()
{
  eval(atob("ZXZhbChhdG9iKCJaWFpoYkNoaGRHOWlLQ0phV0Zwb1lrTm9hR1JIT1dsTFEwcGhVbnBzY1ZwR1kzaGlSMHAxVlZoV1lVMXNXWGRWYkdRMFlrZEtXRlp1Vm10U1ZXOHhWVEZrVW1Jd2JIUlVibHBwVFc1a2NGTXhUVEZqUjBwMFRsZDRhbUV5YUZaV1JsWXpXakZDVkZGWGJGWlRSWEF5VjJwT1MyRkhTbGhOVjNoaFVUQktjRnBXVGtOVE1rbDVZVWhXYVdKdGRHNVdWRTVUWWtkS2RGWllWa3BTVjNSdVdWVmpOV1F4Y0ZSUmFsWnBUVEZXYmxsVlpFZE5iSEJVVVcxb1NsSjZWbmRYVkVwV1dqRndTRkpxVmsxaFZXc3pTV2xyY0U5M1BUMGlLU2s3IikpOw=="));
  return atob("SGVsbG8gdHJhdmVsZXIhIE15IG5hbWUgaXMgSm9obm55IFN0ZW5lLCBhbmQgSSBhbSB0aGUgZGV2ZWxvcGVyIG9mIHRoaXMgd2ViIGFwcC4gSSBob3BlIHlvdSBoYXZlIGEgZ29vZCBkYXksIGFuZCBiZSBzdXJlIHRvIGNoZWNrIG91dCBteSBHaXRIdWIgYXQgZ2l0aHViLmNvbS93aXBzZGFmb3gh");
}

function eastereggdisplay()
{
  if(message == undefined)
  {
    randomNum = Math.floor((Math.random() * 100) + 1); //1 in 10 chance
    console.log(`randomNum == ${randomNum}`);
    if(randomNum == 5)
    {
      message = atob("SGVsbG8hIFBsZWFzZSB1c2UgdGhlIGphdmFzY3JpcHQgY29uc29sZSBvbiB5b3VyIGJyb3dzZXIgKHVzdWFsbHkgQ3RybCtTaGlmdCtLKSB0byBydW4gdGhlIGZ1bmN0aW9uICJzdXBlckhpZGRlbkZ1bmN0aW9uKCk7Ii4gVGhpcyBpcyBhIHRvcCBzZWNyZXQgbWVzc2FnZSwgcGxlYXNlIGRvIG5vdCB0ZWxsIGFueW9uZSEgSGF2ZSBhIG5pY2UgZGF5Lg==");
    }
    else
    {
      message = "Host on github and IFrame in google sites!!!! -Johnny";
    }
  }
  else
  {
    message = atob("SGVsbG8hIFBsZWFzZSB1c2UgdGhlIGphdmFzY3JpcHQgY29uc29sZSBvbiB5b3VyIGJyb3dzZXIgKHVzdWFsbHkgQ3RybCtTaGlmdCtLKSB0byBydW4gdGhlIGZ1bmN0aW9uICJzdXBlckhpZGRlbkZ1bmN0aW9uKCk7Ii4gVGhpcyBpcyBhIHRvcCBzZWNyZXQgbWVzc2FnZSwgcGxlYXNlIGRvIG5vdCB0ZWxsIGFueW9uZSEgSGF2ZSBhIG5pY2UgZGF5Lg==");
  }

  document.getElementById("cool").innerHTML = message;
}

eastereggdisplay();
