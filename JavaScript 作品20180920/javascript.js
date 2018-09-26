var countdown = function(due) {
	var now = new Date();

	var rest = due.getTime() - now.getTime();
	var sec = Math.floor(rest / 1000) % 60;
	var min = Math.floor(rest / 1000 / 60) % 60;
	var hours = Math.floor(rest / 1000 / 60 / 60) % 24;
	var days = Math.floor(rest / 1000 / 60 / 60 / 24);
	var count = [days, hours, min, sec];

	return count;
}

var goal = new Date(2019,1,14);

var recalc = function(){
var counter = countdown(goal);
document.getElementById('day').textContent = counter[0];
document.getElementById('hour').textContent = counter[1];
document.getElementById('min').textContent = counter[2];
document.getElementById('sec').textContent = counter[3];
refresh();
}

var refresh = function(){
	setTimeout(recalc,1000);
}
recalc();

document.getElementById('form').onsubmit = function(){
	var username = document.getElementById('form').username.value;

	if (Cookies.get('answered') === 'yes') {
		window.alert('You are already sign up before. Please log in.');
		return false;
	}else{
		window.alert("Thank you for Sign Up!!!" + " " + username);
		Cookies.set('answered', 'yes', {expires: 365});
	};
};

