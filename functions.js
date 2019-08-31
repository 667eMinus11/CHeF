var script = document.createElement('script');
script.src = 'data/airports_and_locations.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var script = document.createElement('script');
script.src = 'data/cars.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var script = document.createElement('script');
script.src = 'data/hotels.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var script = document.createElement('script');
script.src = 'data/airlines.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function getbackround(){
    var a=Math.floor(Math.random() * 15)+ 1;

    document.body.style.backgroundImage = "url('Pictures/backround"+a+".jpg')";

    
}

function showCars() {
    
    var newUrl = ["cars.html"];
            window.location.replace(newUrl);
}
function showHotels() {
    
    var newUrl = ["hotels.html"];
    window.location.replace(newUrl);
}
function showFlights() {
   
    var newUrl = ["flights.html"];
    window.location.replace(newUrl);
}

function showSignin(){
    var newUrl = ["signin.html"];
    window.location.replace(newUrl);
}

function showSignup(){
    var newUrl = ["signup.html"];
    window.location.replace(newUrl);
}
function get_citys(country_id,city_id){
    var a=false;
    var select = document.getElementById(city_id);
    empty_select(city_id);
    var country = document.getElementById(country_id).value;
    if(country!=" ")
    for(var i in locations_data)
    {
        if(country==locations_data[i].country){
            var option = document.createElement("option");
            option.text=locations_data[i].municipality;
            select.add(option);
            a=true;
        }
        else if(a){
            return;
        }
    }

}
function empty_select(id){
    var select = document.getElementById(id);
    while (select.options.length) {
        select.remove(0);
    }
}
function get_countries(id){
    select = document.getElementById(id);
    var i;
for(i in locations_data){
   if(i>0)
   {
     
    if((locations_data[i].country!=locations_data[i-1].country)){
        var option = document.createElement("option");
        option.text=locations_data[i].country;
        select.add(option);

    }
}
else{
    /*var option = document.createElement("optgroup");
        option.text=locations_data[i].country;
        select.add(optgroup);*/
    var option = document.createElement("option");
    option.text=locations_data[i].country;
    select.add(option);

}
}

}
function ShowSearchResults_cars(){
    var country = document.getElementById("countries_select").value;
    var city = document.getElementById("city_select").value;
    var date = document.getElementById("pick_up_date").value;
    var time_for =1 * document.getElementById("time_for").value;
    var car_type = document.getElementById("car_type").value;

    var results =[];

    for(i in cars_data){
        if((cars_data[i].Country==country)){
        if(cars_data[i].City==city){
            if(Number(cars_data[i].Avilable_for)>time_for){
                if(cars_data[i].Model==car_type){
            results.push(cars_data[i]);
        }
    }
}
    }
    }
    var results_html="";
    results_html+=" <span id=\"close\" class=\"close\">&times;</span><h1 >Search results:</h1>"
    for(i in results){
        results_html+="<div class=\"search_reasult\" ><h2 class=\"reasult_name\">"+
        "-----"+
        "</h2><div class =\"reasult_content\"><div id=\"details\" class=\"spaced_verticly\"><div><p class=\"detail_h\">Model:</p><p class=\"detail\">"+
        results[i].Model+"</p></div><div><p class=\"detail_h\">Location:</p><p class=\"detail\">"+
        results[i].Country+
        ","+results[i].City+
        "</p></div><div><p class=\"detail_h\">Price per day:</p><p class=\"detail\">"+results[i].Price_per_day+"$</p></div> </div><img class=\"reasult_thumbnail\" src=\"Pictures/Cars/"+
        car_type+
        "/"+
        String(Math.floor((Math.random() * 5) + 1))+
         ".jpg\" /><div><div><p class=\"detail_h\">Pickup Date:</p><p class=\"detail\">"+
         String(date)+
         "</p></div><div><p class=\"detail_h\">Available For:</p><p class=\"detail\">"+
         results[i].Avilable_for+
         "</p></div><div></div></div></div></div>"
    }

    var modal = document.getElementById("modal");
    document.getElementById("modal-content").innerHTML=results_html;
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
      }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    
}
function ShowSearchResults_hotels(){
    var country = document.getElementById("countries_select").value;
    var city = document.getElementById("city_select").value;
    var date = document.getElementById("date").value;
    var min=1 * document.getElementById("min").value;
    var max=1 * document.getElementById("max").value;

    var results =[];

    for(i in hotels_data){
        if((hotels_data[i].Country==country)){
        if(hotels_data[i].City==city){
             if((hotels_data[i].Price_per_night>=min)&&(hotels_data[i].Price_per_night<=max)){
            results.push(hotels_data[i]);
        }
}
    }
    }
    var results_html="";
    results_html+=" <span id=\"close\" class=\"close\">&times;</span><h1 >Search results:</h1>"
    for(i in results){
        results_html+="<div class=\"search_reasult\" ><h2 class=\"reasult_name\">"+
        "-----"+
        "</h2><div class =\"reasult_content\"><div id=\"details\" class=\"spaced_verticly\"><div><p class=\"detail_h\">Name:</p><p class=\"detail\">"+
        results[i].Name+"</p></div><div><p class=\"detail_h\">Location:</p><p class=\"detail\">"+
        results[i].Country+
        ","+results[i].City+
        "</p></div><div><p class=\"detail_h\">Price per night:</p><p class=\"detail\">"+results[i].Price_per_night+"$</p></div> </div><img class=\"reasult_thumbnail\" src=\"Pictures/hotels/"+
        String(Math.floor((Math.random() * 10) + 1))+
         ".jpg\" /><div><div><p class=\"detail_h\">Date:</p><p class=\"detail\">"+
         String(date)+
         "</p></div><div><p class=\"detail_h\">stars:</p><p class=\"detail\">"+
         getstars(results[i].Stars)+
         "</p></div><div></div></div></div></div>"
    }

    var modal = document.getElementById("modal");
    document.getElementById("modal-content").innerHTML=results_html;
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
      }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    
}
function getstars(num){
    var a="<p class=\"stars\">";
    for(var i=0;i<num;i++)
    {
        a+="&starf; ";
    }
    a+="</p>";
    return a;
}

function ShowSearchResults_flights(){
    var dep_country = document.getElementById("countries_select_Dep").value;
    var dep_city = document.getElementById("city_select_Dep").value;
    var arv_country = document.getElementById("countries_select_Arv").value;
    var arv_city = document.getElementById("city_select_Arv").value;
    var date = document.getElementById("date").value;

    var results =[];

    for(i in airlines_data){
        if((airlines_data[i].Country==dep_country)){
            results.push(airlines_data[i]);
        }
}
if(results.length==0){
    results.push(airlines_data[Math.floor((Math.random() * airlines_data.length))]);
    results.push(airlines_data[Math.floor((Math.random() * airlines_data.length))]);  
    results.push(airlines_data[Math.floor((Math.random() * airlines_data.length))]);      
    results.push(airlines_data[Math.floor((Math.random() * airlines_data.length))]);   
    results.push(airlines_data[Math.floor((Math.random() * airlines_data.length))]);
}

    var results_html="";
    
    results_html+=" <span id=\"close\" class=\"close\">&times;</span><h1 >Search results:</h1>";
    for(i in results){
        results_html+="<div class=\"search_reasult\" ><h2 class=\"reasult_name\">"+
        "-----"+
        "</h2><div class =\"reasult_content\"><div id=\"details\" class=\"spaced_verticly\"><div><p class=\"detail_h\">Airline:</p><p class=\"detail\">"+
        results[i].Name+"</p></div><div><p class=\"detail_h\">Departure:</p><p class=\"detail\">"+
        dep_country+
        ","+dep_city+
        "</p></div><div><p class=\"detail_h\">Arrival:</p><p class=\"detail\">"+arv_country+","+arv_city+"</p></div> </div><img class=\"reasult_thumbnail\" src=\"Pictures/flights/"+
        String(Math.floor((Math.random() * 10) + 1))+
         ".jpg\" /><div><div><p class=\"detail_h\"> Date:</p><p class=\"detail\">"+
         String(date)+
         "</p></div><div><p class=\"detail_h\">Price:</p><p class=\"detail\">"+
         String(Math.floor((Math.random() * 1500) + 200))+"$"+
         "</p></div><div></div></div></div></div>"
    }

    var modal = document.getElementById("modal");
    document.getElementById("modal-content").innerHTML=results_html;
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
      }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    
}