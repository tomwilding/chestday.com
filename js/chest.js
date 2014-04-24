setChest = function (title, header, footer, img) {
	document.title = title;
	$('#chest-header').html(header);
	setImage(img);
	$('#chest-footer').html(footer);
}

setImage = function(img) {
	$('#chest-img').attr('src', img);
}

$(document).ready(function() {
	date = new Date();

	for(var i = 0; i < days.length; i++) {
		var day = days[i];
		if(day.isToday(date)) {
			setDay(day);
			break;
		}
	}
});

setDay = function(day) {
	setChest(
		day.title,
		randomElement(day.headers),
		randomElement(day.footers),
		randomImage(day.imagePrefix, 1, day.numImages)
	);

	if(isDefined(day.tracks)) {
		addPeakinTrackPlayer(day.tracks);
	}

	if(isDefined(day.special)) {
		day.special();
	}
}

addPeakinTrackPlayer = function(tracks) {
	// Attach peakinTrackPlayer to window ( skip button uses this global reference :/ )
	window.peakinTrackPlayer = new PeakinTrackPlayer('peakin-track-container', tracks);
}

// Just so people can change it to chest day in the console to listen to the tuuunes :)
chestDay = function() {
	for(var i = 0; i < days.length; i++) {
		if(days[i].title == "Chest Day") {
			setDay(days[i]);
		}
	}
}
