

function get_random_artwork(location_id, driver_id_name, driver_id, img_class, text_class) {

    /*$("#driver").click(function(event){*/
    $.getJSON('mydata.json', function(jd) {
        /*alert(jd.file_1[0]);*/

        const keys = Object.keys(jd);
        const randIndex = Math.floor(Math.random() * keys.length);
        const randKey = keys[randIndex];
        var file_type = jd[randKey][1];
        if (file_type === "image") {

            var image = jd[randKey][0];

/*<div id='mydiv'> </div>  <div id='mydivheader'>Click here to move</div>  ... */

           /* var output = " <img class=" + img_class +" alt='*' src='artworks/" + image + "' id =" + driver_id_name + ">";
            $(location_id).append(output); */




            var output = "<div class='brightness'> <a href='artworks/" + image + "' data-fancybox data-caption='test' id='move_me'>  <img class=" + img_class + " src='artworks/" + image + "'/> </a> </div>";
            $(location_id).append(output);



        }

        if (file_type === "text") {

            var text = jd[randKey][0];

            /*
                        var output = "<p class=" + text_class + " id=" + driver_id_name + ">" +  text + "</p>";
                        $(location_id).append(output);
                    } */

            var container =
                "<div style='display: none;' id='hidden-content'> <p>" + text + "</p></div>"
                $(location_id).append(container);


            var output =
                "<a data-fancybox class=" + text_class + " data-src='#hidden-content' href='javascript:;'>" + text + "</a>";
            $(location_id).append(output);
        }



        $('body').keyup(function(e){

            if(e.keyCode == 32){
                // user has pressed space
                location.reload();
            }
        });

            /*
        $(driver_id).dblclick(function() {
            location.reload();
        });*/

            /*

        $('body').click(function() {
            location.reload();
        });*/


    });


}


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


$(document).ready(function() {


    get_random_artwork("#results", 'driver', "#driver", "img_1", "text_1");

    get_random_artwork("#results_2", 'driver_2', "#driver_2", "img_2", "text_1");

    get_random_artwork("#results_3", 'driver_3', "#driver_3", "img_3", "text_3");

// Make the DIV element draggable:
    dragElement(document.getElementById('mydiv'));
    dragElement(document.getElementById('mydiv_2'));
    dragElement(document.getElementById('mydiv_3'));




});




