





var sf = function(){
			$.get( "http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e", function( weather_data ) {
			$( "#container" ).append( "Today's Temp: "+ weather_data.main.temp +"<br>");
			$( "#container" ).append( "Today's High: " + weather_data.main.temp_max +"<br>");
			$( "#container" ).append( "Today's Low: " + weather_data.main.temp_min +"<br>");
			$( "#container" ).append( "Today's Weather description: " + weather_data.weather[0].description +"<br>");
			$( "#container" ).append( "Today's Sunrise time: " +  new Date(weather_data.sys.sunrise * 1000) +"<br>");
			$( "#container" ).append( "Today's Sunset time: " +  new Date(weather_data.sys.sunset * 1000) +"<br>");
			alert( "Load was performed." );
			});

			$.get( "http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e", function( weather_data ) {
				console.log((weather_data));
			});
		}
sf();