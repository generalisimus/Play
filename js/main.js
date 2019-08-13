const position = 36;
const maxPress = 10;

let press = 0;
let firstPress = 0;

function round () {
	$('.target').removeClass('target');
	$('.miss').removeClass('miss');

	let divSelector = randomId();
	$(divSelector).addClass('target')
	$(divSelector).text(press + 1)

	if (press === 1) { firstPress = betTimes(); }
	if (press === maxPress) { endGame(); }
}

function endGame() {
	$('.grid-item').hide();

	let totalPress = betTimes() - firstPress;
	let totalSeconds = Number(totalPress / 1000).toPrecision(5);
	$('#time').text(totalSeconds);
	$('.message').removeClass("message_one");
}

function init() {
	round();

	$('.grid-item').click(handClick);
	$('#button-reload').click(function() {
		location.reload();
	});
}

function handClick(event) {
	let target = $(event.target)
	if (target.hasClass('target')) {
		press = press + 1;
		target.text('');
		round();
	}
	else { 
		$(event.target).addClass('miss'); 
	}
}


$(document).ready(init);