function groceryitems(){


    // Creating an XHR Object
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
  
      if(this.readyState==4&&this.status==200){
          var get = JSON.parse(this.responseText);
        //   console.log(get);
          var print = get.grocerylist;
        //   console.log(print);
        
        var table = document.getElementById("data");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(01);
        var cell3= row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5= row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell11 = row.insertCell();
        var cell12 = row.insertCell(1);
  
        var con = "";
        var sub = "";
        var i= "";
        var j = "";
       
        for (i in print) {
          con += "<h2>" +print[i].head+ "</h2>";
        for (j in print[i].item) {
            sub += print[i].item[j] + "<br>";
          }
        }
        cell1.innerHTML = con; 
        cell2.innerHTML = sub;
        
      }     
    }   
  xhttp.open("GET", "grocery.json", true);
  xhttp.send();
  }
  