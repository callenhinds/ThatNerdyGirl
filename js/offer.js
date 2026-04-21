// Objects established
var business = {
	name: 'Offer',
	workRate: 20,
	discount: 15,
	offerPrice: function() {
		var offerRate = this.workRate * ((100 - this.discount) / 100);
		return offerRate;
	}
};


//Standard rate and special rate function	
var businessName, workRate, specialRate;
businessName = document.getElementById('businessName');
workRate = document.getElementById('workRate');
specialRate = document.getElementById('specialRate');

businessName.textContent = business.name;
workRate.textContent = '$' + business.workRate.toFixed(2);
specialRate.textContent = '$' + business.offerPrice();

//Expiry message

var expiryMsg;
var today;
var elEnds;

function offerExpires(today) {
	var weekFromToday, day, date, month, year, dayNames, monthNames;
	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	day = dayNames[weekFromToday.getDay()];
	date = weekFromtoday.getDate();
	month = monthNames [weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();
	//Message for Expiry
	expiryMsg = 'Offer expires on ';
	expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year +')';
	return expiryMsg;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);
