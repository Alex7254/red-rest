// Map
function initMap() {
	// Options for map, How zoomed in it should be
	// And where the center of the map area should be
  let options = {
		zoom: 17,
		center: {lat: 36.929838, lng: -121.767974}
	}

	// Make a new map
	let map = new google.maps.Map(document.getElementById('map'), options);
	// Array of markers for map
	let markers = [
		{
			coords: {lat: 36.929838, lng: -121.767974},
			// Content inside box when clicking on marker
			content: '<h1>Marker 1</h1>'
		}
	];

	// Loop through the markers
	for(let i = 0; i < markers.length; i++) {
		addMarker(markers[i]);
	}

	// Add marker
	let addMarker = (props) => {
		let marker = new google.maps.Marker({ 
			position: props.coords,
			map: map
		});

		// Check if marker has content
		if(props.content) {
			let infoWindow = new google.maps.InfoWindow({
				content: props.content
			});

			marker.addListener('click', () => {
				infowWindow.open(map, marker);
			});
		}
	}
	
}