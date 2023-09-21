  function openclick() {
            document.getElementById("form").style.display = "block";
        }


        function registerclick(){

            document.getElementById("lblname").innerHTML =document.getElementById("txtname").value;
            document.getElementById("lbldate").innerHTML = document.getElementById("txtdate").value;
            document.getElementById("lbldays").innerHTML =document.getElementById("txtdays").value;
            document.getElementById("lblpersons").innerHTML= document.getElementById("txtpersons").value;

            var Selectedroom ="";
            var roomcost=0;

            var deluxradio =document.getElementById("txtdelux");
            var suiteradio = document.getElementById("txtsuite");

            if(deluxradio.checked){
                selectedroom = deluxradio.value;
                roomcost= 2500;
            }
            if(suiteradio.checked){
                selectedroom = suiteradio.value;
                roomcost=4000;
            }


            var selectedamenities = "";
            var amenitiescost= 0;

            var accheckbox = document.getElementById("txtac");
            var lockercheckbox =document.getElementById("txtlocker");

            if(accheckbox.checked){
                selectedamenities += accheckbox.value + "<br>";
                amenitiescost = 1000;
                roomcost = roomcost + amenitiescost
            }
            if(lockercheckbox.checked){
                selectedamenities += lockercheckbox.value +"<br>";
                amenitiescost = 300;
                roomcost= roomcost + amenitiescost;
                
            }

           
            var personcharge = document.getElementById("txtpersons");
            var chargeday = document.getElementById("txtdays");
             
            if(personcharge>=2 ){
            roomcost = roomcost + ((personcharge-2)*1000);

            }else{
                roomcost = roomcost + ((1000)* 1);
            }

            

         





            document.getElementById("lblroom").innerHTML = selectedroom;
            document.getElementById("lblamenities").innerHTML = selectedamenities;
            document.getElementById("lbladvance").innerHTML = "&#8377;"+ document.getElementById("txtadvance").value;
            document.getElementById("lbltotal").innerHTML =   roomcost + + document.getElementById("txtadvance").value ;
            document.getElementById("lblremain").innerHTML = "&#8377;" + roomcost;
        }

