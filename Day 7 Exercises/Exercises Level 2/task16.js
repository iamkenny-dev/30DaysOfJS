// Write a function which generates a randomMacAddress

var mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
	  return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
});
console.log(mac);

function genMAC(){
	    var hexDigits = "0123456789ABCDEF";
	    var macAddress = "";
	    for (var i = 0; i < 6; i++) {
		            macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
		            macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
		            if (i != 5) macAddress += ":";
		        }

	    console.log(macAddress);
}
genMAC();
