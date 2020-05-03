/*


function check_artist() {


    var artist_name_1 = document.getElementById("name_1").innerHTML;
    var artist_name_2 = document.getElementById("name_2").innerHTML;
    var artist_name_3 = document.getElementById("name_4").innerHTML;

    console.log(artist_name_1)


}
*/




//document.getElementById(div_name).onmouseover = function() {check_artist(artist_name)};



function change_places(id) {


    var top = Math.floor(Math.random() * 60);
    var left = Math.floor(Math.random() * 60);

    var left_edit = left + 30
    if (left_edit > 80) {
        left_edit = left_edit - 30
        return left_edit
    }


    document.getElementById(id).style.top = top + "%";
    document.getElementById(id).style.left = left_edit + "%";


}




function get_random_artwork(location_id, driver_id_name, driver_id, img_class, text_class, name, artist_id) {



        $.getJSON('mydata.json', function (jd) {
            //to test get data from:
            // 'https://raw.githubusercontent.com/joachimbovin/cas-co_project/master/mydata.json'

            const keys = Object.keys(jd);
            const randIndex = Math.floor(Math.random() * keys.length);
            const randKey = keys[randIndex];

            //get file type from json
            var file_type = jd[randKey][1];

            //get artist name from json
            var artist_name = jd[randKey][2];
            //console.log(artist_name);
            $(artist_id).append(artist_name);




            //if the file is an image do this
            if (file_type === "image") {

                var image = jd[randKey][0];

             //   var output = "<div class='brightness'> <a href='artworks/" + image + "' data-fancybox data-caption='test' id='move_me'>  <img class=" + img_class + " src='artworks/" + image + "'> </a> </div>";
               // $(location_id).append(output);

                   var output = "<div class='brightness'> <img class='" + img_class + " zoom' src='artworks/" + image + "' rel='artworks/" + image + "'> </div>";
                   $(location_id).append(output);

                //<p id=" + name + ">" + artist_name + "</p>



            }

            //if the file is a text do this
            if (file_type === "text") {

                var text = jd[randKey][0];
                var text_link = jd[randKey][3];

                var output = "<div class='brightness'> <a href=artworks/" + text_link + " class=" + text_class + " id=" + driver_id_name + " target='_blank'>" + text + "</a> </div>";
                $(location_id).append(output);
            }

            //if the file is sound do this
            if (file_type === "audio") {

                var sound = jd[randKey][0];


                var output =
                    "<audio controls> <source src=artworks/" + sound + " type='audio/mp3'> 'Your browser does not support the audio element'  </audio>";
                $(location_id).append(output);
            }

            //if the file is video do this
            if (file_type === "video") {

                var video = jd[randKey][0];


                var output =
                    "<div class='brightness'><video width='400' controls autoplay loop> <source src=artworks/" + video + " type='video/mp4'> 'Your browser does not support the video element'  </video></div>";
                $(location_id).append(output);
            }


            //success: callback

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


function count_clicks() {
    var count = 0;

    $('body').click(function () {
        count += 1;

        if (count === 3) {
            // come code
            location.reload();


        }
    });
};



$(document).ready(function() {

    change_places("mydiv")
    change_places("mydiv_2")
    change_places("mydiv_3")


    function my_callback() {
       // var x = document.getElementById("#name_1").innerHTML
       // console.log(x)
       // console.log("test")
    }



    get_random_artwork("#results", 'driver', "#driver", "img_1", "text_1", "name_1", "#artist_1");
    get_random_artwork("#results_2", 'driver_2', "#driver_2", "img_2", "text_1", "name_2", "#artist_2");
    get_random_artwork("#results_3", 'driver_3', "#driver_3", "img_3", "text_3", "name_3", "#artist_3");




// Make the DIV element draggable:
    dragElement(document.getElementById('mydiv'));
    dragElement(document.getElementById('mydiv_2'));
    dragElement(document.getElementById('mydiv_3'));

    count_clicks()

    /*
    document.getElementById("mydiv").onmouseover = function() {check_artist(name_1)};
    document.getElementById("mydiv_2").onmouseover = function() {check_artist(name_2)};
    document.getElementById("mydiv_3").onmouseover = function() {check_artist(name_3)};*/


function demo() {



/// display image in preview div on hover
    $(function(){
        $("img.zoom").mouseover(
            function(){
                console.log("triggered!");

                $(".preview").html( $("<img>").attr("src", $(this).attr("rel")) );

                $( "img" ).addClass("zoom");

                ///use wheelzoom library to ZOOM
                wheelzoom(document.querySelector("img.zoom"));

            }
        );
  /*      $("img.zoom").mouseout(
            function(){
                $(".preview").html( $("<img>").attr("src", "placeholder.png") );
            }
        );*/
    });

/// get all artists names and create a list

    var artist_1 = document.getElementById("artist_1").innerHTML.trim();
    var artist_2 = document.getElementById("artist_2").innerHTML.trim();
    var artist_3 = document.getElementById("artist_3").innerHTML.trim();

    var artists = [artist_1, artist_2, artist_3]
    console.log(artists);
    //x = $("#testing").val();
    console.log(artist_1, artist_2, artist_3)


    ////do mouseover for first image

    document.getElementById("results").addEventListener("mouseover", mouseOver);
    document.getElementById("results").addEventListener("mouseout", mouseOut);

    function mouseOver() {

        //document.getElementById("artist_1").style.display =  "block";

        console.log("mousover_1")
        console.log(artists[1], artists[2], artist_1);
        ///check if artist 1 is the same as artist 2 by checking the lists artists

        if (artists[1] == artist_1) {
            //console.log("test");
            console.log("1&1");

            document.getElementById("results_2").style["boxShadow"] = "0px 0px 0px 5px rgba(255,249,163,0.56)";
            //document.getElementById("artist_2").style.display =  "block";

            ///check if artist 1 is the same as artist 3
        }
        console.log(artists[2], artist_1);
        if (artists[2] == artist_1) {
            console.log("1&2");
            document.getElementById("results_3").style["boxShadow"] = "0px 0px 0px 5px rgba(255,249,163,0.56)";
            //document.getElementById("artist_3").style.display =  "block";

        }


    }


    function mouseOut() {
        document.getElementById("results_2").style["boxShadow"] = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("results_3").style["boxShadow"] = "0px 0px 0px 0px rgba(0,0,0,0)";
        //document.getElementById("artist_2").style.display =  "none";
        //document.getElementById("artist_3").style.display =  "none";
        //document.getElementById("artist_1").style.display =  "block";



    }

    ////do mouseover for second image

    document.getElementById("results_2").addEventListener("mouseover", mouseOver_2);
    document.getElementById("results_2").addEventListener("mouseout", mouseOut_2);



    function mouseOver_2() {

        console.log("mousover_2")
        if (artists[0] == artist_2) {
            console.log("test");

            document.getElementById("results").style["boxShadow"] = "0px 0px 0px 5px rgba(255,249,163,0.56)";


        }
        if (artists[2] == artist_2) {
            console.log("test");

            document.getElementById("results_3").style["boxShadow"] = "0px 0px 0px 5px rgba(255,249,163,0.56)";

        }
    }



    function mouseOut_2() {
        document.getElementById("results").style["boxShadow"] = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("results_3").style["boxShadow"] = "0px 0px 0px 0px rgba(0,0,0,0)";


    }

    ////do mouseover for third image

    document.getElementById("results_3").addEventListener("mouseover", mouseOver_3);
    document.getElementById("results_3").addEventListener("mouseout", mouseOut_3);


    function mouseOver_3() {



        console.log("mousover_3")
        if (artists[0] == artist_3) {
            console.log("test");

            document.getElementById("results").style["boxShadow"] = "0px 0px 0px 5px rgba(255,249,163,0.56)";


        }
        if (artists[1] == artist_3) {
            console.log("test");

            document.getElementById("results_2").style["boxShadow"] = "0px 0px 0px 5px rgba(255,249,163,0.56)";


        }
    }



    function mouseOut_3() {
        document.getElementById("results").style["boxShadow"] = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("results_2").style["boxShadow"] = "0px 0px 0px 0px rgba(0,0,0,0)";



    }

}

/// important: set a short timeout so that all images are loaded  before retrieving information!
    ///all function in the function settimeout are only called after this timeout

    setTimeout(demo, 500);







});






/*

if (artists[2] == artist_1 && artists[1] == artist_1) {
    console.log("1&2&3");
    document.getElementById("mydiv_3").style["boxShadow"] = "0px 0px 0px 15px rgba(255,249,163,0.56)";
    document.getElementById("mydiv_2").style["boxShadow"] = "0px 0px 0px 15px rgba(255,249,163,0.56)";

}
*/

