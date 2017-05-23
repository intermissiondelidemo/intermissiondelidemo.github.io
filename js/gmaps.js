"use strict";
function initialize() {
  	var mapCanvas = document.getElementById('map');

    var mapOptions = {
      center: new google.maps.LatLng(43.4375, -83.9750),
      disableDefaultUI: true,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    }
    //Create map
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Create marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(43.4375, -83.9750),
      map: map,
      title: 'Intermission Deli',
      icon: 'images/map-marker.png'
 	});

 	//Create ribbon
    //var ribbon = new google.maps.Marker({
    //  position: new google.maps.LatLng(43.4375, -83.9650),
    //  map: map,
    //  icon: 'images/map-ribbon.png'
 	//});

    //Map marker info
    var contentString = '<div id="map-info">'+
     '<h2><a href="https://www.google.com/maps/place/Intermission+Deli/@43.4383388,-83.9994768,13.5z/data=!4m18!1m12!4m11!1m3!2m2!1d-83.9743505!2d43.4393083!1m6!1m2!1s0x8823c3ab32297cd5:0xc07e45538068c26a!2sintermission+deli!2m2!1d-83.9749657!2d43.4374679!3m4!1s0x8823c3ab32297cd5:0xc07e45538068c26a!8m2!3d43.4374679!4d-83.9749657">2128 Bay St - Saginaw, MI 48602</a></h2>'
    //  '<p style="text-align:left; margin:0;"><strong>Mozzarella</strong>, has the <strong>best food</strong> delivery service in town, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores, incidunt quidem natus. Ut dolorum deleniti reiciendis tenetur illum, beatae cum, harum laborum, nisi omnis nulla laboriosam, ipsam nemo consectetur..</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores, incidunt quidem natus. Ut dolorum deleniti reiciendis tenetur illum, beatae cum, harum laborum, nisi omnis nulla laboriosam, ipsam nemo consectetur..</p>'+
      '</div>';

    //Add info to marker 
	var infowindow = new google.maps.InfoWindow({
	  content: contentString
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

    //Keep map centered
    google.maps.event.addDomListener(window, 'resize', function() {
    	var center = map.getCenter();
    	google.maps.event.trigger(map, "resize");
    	map.setCenter(center); 
	});
  }
  google.maps.event.addDomListener(window, 'load', initialize);