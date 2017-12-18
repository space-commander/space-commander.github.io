var complete;

function hash(thingy)
{
	thing = new ArrayBuffer(thingy.length());
	thing = thingy;
	var hash = crypto.subtle.digest("SHA-512", thing);
	return hash;
}

function easterEgg1(text)
{
	complete = text;
	if(hash(text) == "7e8d5beb64358fff0f9dfc64ea4c54ad21b6fae3cffee24da5e7d93f6d4da4d3ac8963a0c3b91c97066b7982f0ab386503e5402e356b0dc7e988092178ddc7c7")
	{
		console.log("Picked lock 1/2.");
		console.log("Hint: Author");
	}
}

function easterEgg2(text)
{
	if(!hash(complete) == "7e8d5beb64358fff0f9dfc64ea4c54ad21b6fae3cffee24da5e7d93f6d4da4d3ac8963a0c3b91c97066b7982f0ab386503e5402e356b0dc7e988092178ddc7c7") return;
	if(hash(text) == "baf7e7ad0ee64b5f24d23c54533023c3a6fe44daa1a3274176569adcf9c40eddbaa617b69b56ed5ae96a35ca8826895fc30faf66d86b4803738dc33f046214d5")
	{
		console.log("Picked lock 2/2.");
		console.log(btoa("aHR0cHM6Ly9naXRodWIuY29tL3dpcHNkYWZveA=="));
	}
}
