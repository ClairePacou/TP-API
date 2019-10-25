$.ajax({
  url: "api.openweathermap.org/data/2.5/weather?q=london",
  data: {
  },
  success: function( result ) {
    $( "#weather-temp" ).html( "<strong>" + result.main.temp + "</strong> degrees" );
  }
});
$("button").click(function(){
                        $.ajax({url: "api.openweathermap.org/data/2.5/weather?q=london", success: function(result){
                          $("#oui").html(result);
                        }});
                });