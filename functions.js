



var seconds = 20;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds -= 1;
    el.innerText = "0:" + seconds;
}


function get_random_artwork(location_id, driver_id_name, driver_id, img_class, text_class, link_class, name, artist_id, my_key) {

//jd?
    $.getJSON('mydata.json', function (jd) {
            //to test get data from:
            // 'https://raw.githubusercontent.com/joachimbovin/cas-co_project/master/mydata.json'

            //how does this function work?
            //const keys = Object.keys(jd);
            //console.log(keys)
            //const randIndex = Math.floor(Math.random() * keys.length);
            //const randKey = keys[randIndex];

            const randKey = my_key;


            //get file type from json
            var file_type = jd[randKey][1];

            //get artist name from json
            var artist_name = jd[randKey][2];
            $(artist_id).append(artist_name);


            //if the file is an image do this
            if (file_type === "image") {

                var image = jd[randKey][0];

                var output = "<div class='brightness'> <img id= " + img_class + " src='artworks/" + image + "'>  </div>";
                $(location_id).append(output);
            }

            //if the file is a text do this
            if (file_type === "text") {

                var text = jd[randKey][0];
                var text_link = jd[randKey][3];

                var output = "<div class='brightness'>  <p class=" + text_link + " id=" + text_class + " id=" + driver_id_name + ">" + text + "</p> </div>";
                $(location_id).append(output);

            }

            //if the file is sound do this
            if (file_type === "audio") {

                var sound = jd[randKey][0];

                var output =
                    "<div id='mydiv_audioheader'> <audio controls> <source src=artworks/" + sound + " type='audio/mp3'> 'Your browser does not support the audio element'  </audio></div>";
                $(location_id).append(output);
            }

            //if the file is video do this
            if (file_type === "video") {

                var video = jd[randKey][0];

                var output =
                    "<div class='brightness'> <video width='400' loop autoplay muted> <source src=artworks/" + video + " type='video/mp4'> 'Your browser does not support the video element'  </video></div>";
                $(location_id).append(output);
            }

            //if the file is link do this
            if (file_type === "link") {

                var link = jd[randKey][0];

                var output =
                    "<div> <a id=" + link_class + " href='" + link + "'>" + link + "</a></div>";
                $(location_id).append(output);

            }



    });



}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id)) {            // + "header"
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;      // + "header"
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

function change_places(id) {


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //function that changes the css of the images to alter location

    var top = Math.floor(Math.random() * 80);
    console.log(top);
    var left = Math.floor(Math.random() * 80);
    console.log(left)

 /*   var left_edit = left + 30;
    if (left_edit > 80) {
        left_edit = left_edit - 30;
        return left_edit
    }*/



    document.getElementById(id).style.top = top + "%";
    document.getElementById(id).style.left = left + "%";


}

function check_for_click(div_id) {
    const delta = 6;
    var startX;
    var startY;

    document.getElementById(div_id).addEventListener('mousedown', function (event) {

        startX = event.pageX;
        console.log(startX)
        startY = event.pageY;
    });

    document.getElementById(div_id).addEventListener('mouseup', function (event) {
        const diffX = Math.abs(event.pageX - startX);
        const diffY = Math.abs(event.pageY - startY);

        if (diffX < delta && diffY < delta) {
            // Click!
            console.log("its a click-o!")
            ////////LIGHTBOX:

            //    document.getElementById("my_id").addEventListener("click", function() {
            //      document.getElementById("lightbox").className = "open";
            //    });


            function open_lightbox_image() {
                $('#img_1').click(function () {
                    var image_src = $(this).attr('src');
                    console.log(image_src)
                    $('#large_image').attr('src',image_src);
                    $( "#textbox" ).replaceWith( "<img id='large_image' src=" + image_src + ">" );


                })

                $('#img_2').click(function () {
                    //alert($(this).attr('src'));
                    var image_src = $(this).attr('src');
                    console.log(image_src)

                    $('#large_image').attr('src',image_src);
                    $( "#textbox" ).replaceWith( "<img id='large_image' src=" + image_src + ">" );


                })

                $('#img_3').click(function () {
                    //alert($(this).attr('src'));
                    var image_src = $(this).attr('src');
                    console.log(image_src)

                    $('#large_image').attr('src',image_src);
                    $( "#textbox" ).replaceWith( "<img id='large_image' src=" + image_src + ">" );


                })

                $('#img_4').click(function () {
                    //alert($(this).attr('src'));
                    var image_src = $(this).attr('src');
                    console.log(image_src)

                    $('#large_image').attr('src',image_src);
                    $( "#textbox" ).replaceWith( "<img id='large_image' src=" + image_src + ">" );


                })

                $('#img_5').click(function () {
                    //alert($(this).attr('src'));
                    var image_src = $(this).attr('src');
                    console.log(image_src)

                    $('#large_image').attr('src',image_src);
                    $( "#textbox" ).replaceWith( "<img id='large_image' src=" + image_src + ">" );


                })

                $('#img_6').click(function () {
                    //alert($(this).attr('src'));
                    var image_src = $(this).attr('src');
                    console.log(image_src)

                    $('#large_image').attr('src',image_src);
                    $( "#textbox" ).replaceWith( "<img id='large_image' src=" + image_src + ">" );


                })


                document.getElementById("lightbox").className = "open";
            }



            function open_light_link() {

                $('#link_1').click(function () {
                    //alert($(this).attr('src'));
                    var text = $(this).text();
                    // console.log(text)
                    var elem = document.getElementById('link_1');
                    var link = elem.className
                    //  console.log(link)

                    //$('#large_image').attr('src',image_src);

                    $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

                })

                $('#link_2').click(function () {
                    //alert($(this).attr('src'));
                    var text = $(this).text();
                    //console.log(text)
                    var elem = document.getElementById('link_2');
                    var link = elem.className
                    //console.log(link)

                    $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

                })

                $('#link_3').click(function () {
                    //alert($(this).attr('src'));
                    var text = $(this).text();
                    var elem = document.getElementById('link_3');
                    var link = elem.className

                    $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

                })

                $('#link_4').click(function () {
                    //alert($(this).attr('src'));
                    var text = $(this).text();
                    var elem = document.getElementById('link_4');
                    var link = elem.className

                    $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

                })



                $('#link_5').click(function () {
                    //alert($(this).attr('src'));
                    var text = $(this).text();
                    var elem = document.getElementById('link_5');
                    var link = elem.className

                    $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

                })

                $('#link_6').click(function () {
                    //alert($(this).attr('src'));
                    var text = $(this).text();
                    var elem = document.getElementById('link_6');
                    var link = elem.className

                    $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

                })


                document.getElementById("lightbox").className = "open";


            }



            function open_light_text() {

                               $('#text_1').click(function () {
                   //alert($(this).attr('src'));
                   var text = $(this).text();
                  // console.log(text)
                                   var elem = document.getElementById('text_1');
                      var link = elem.className
                                 //  console.log(link)

                   //$('#large_image').attr('src',image_src);

                   $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

               })

               $('#text_2').click(function () {
                   //alert($(this).attr('src'));
                   var text = $(this).text();
                   //console.log(text)
                   var elem = document.getElementById('text_2');
                   var link = elem.className
                   //console.log(link)

                   $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

               })

               $('#text_3').click(function () {
                   //alert($(this).attr('src'));
                   var text = $(this).text();
                   var elem = document.getElementById('text_3');
                   var link = elem.className

                   $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

               })

                $('#text_4').click(function () {
                    //alert($(this).attr('src'));
                    var text = $(this).text();
                    var elem = document.getElementById('text_4');
                    var link = elem.className

                    $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

                })



                $('#text_5').click(function () {
                    //alert($(this).attr('src'));
                    var text = $(this).text();
                    var elem = document.getElementById('text_5');
                    var link = elem.className

                    $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

                })

                $('#text_6').click(function () {
                    //alert($(this).attr('src'));
                    var text = $(this).text();
                    var elem = document.getElementById('text_6');
                    var link = elem.className

                    $( "#large_image" ).replaceWith( "<a id='textbox' href=artworks/" + link + "> Click here to open as PDF</a>" );

                })


                document.getElementById("lightbox").className = "open";


            }


            function check_type() {
                var node = event.target.nodeName
                //console.log(node)
                if (node == "IMG") {
                    open_lightbox_image()
                }
                if (node == "P") {
                    open_light_text()
                }
                if (node == "li") {
                    open_light_link()
                }
            }

            check_type()

            document.getElementById("close").addEventListener("click", function() {
                document.getElementById("lightbox").className = "";
            });

            document.getElementById("lightbox").addEventListener("click", function(e) {
                if (e.target.id == "lightbox") {
                    document.getElementById("lightbox").className = "";
                }
            });


        }
    });

}

function draw_lines_results_1(line1_id, line2_id, line3_id, line4_id, line5_id, start_id, target1, target2, target3, target4, target5) {
    //change this function so that it can be reused: variables are:
    // id of four lines eg. #line1, #line2,
    // id of results : 1x starting #results (where all the lines start from)
    // 4x target #results (where the lines should go)
    // 4x line name e.g. line1, line2, line3 ???

    line1 = $(line1_id);
    line2 = $(line2_id);
    line7 = $(line3_id);
    line8 = $(line4_id);
    line26 = $(line5_id);


    $(document).on('mousemove', function(e) {

        //line 1 & 2 start from this div
            var element_2 = $(start_id);
            var pos1 = element_2.offset()

            line1.attr('x1', pos1.left)
            line1.attr('y1', pos1.top)
            //return pos2// returns an object with x/y coordinates of the top-left corner of the

              line2.attr('x1', pos1.left)
              line2.attr('y1', pos1.top)

        line7.attr('x1', pos1.left)
        line7.attr('y1', pos1.top)

        line8.attr('x1', pos1.left)
        line8.attr('y1', pos1.top)

        line26.attr('x1', pos1.left)
        line26.attr('y1', pos1.top)



    });


        $(document).on('mousemove', function(e) {
            //goes to this div (line 1)

            var element_2 = $(target1);
            var pos2 = element_2.offset()

            line1.attr('x2', pos2.left)
            line1.attr('y2', pos2.top)
            //return pos2// returns an object with x/y coordinates of the top-left corner of the element
        });


    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_3 = $(target2);
        var pos3 = element_3.offset()

        line2.attr('x2', pos3.left)
        line2.attr('y2', pos3.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_7 = $(target3);
        var pos7 = element_7.offset()

        line7.attr('x2', pos7.left)
        line7.attr('y2', pos7.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_8 = $(target4);
        var pos8 = element_8.offset();

        line8.attr('x2', pos8.left);
        line8.attr('y2', pos8.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });


    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_26 = $(target5);
        var pos26 = element_26.offset();

        line26.attr('x2', pos26.left);
        line26.attr('y2', pos26.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });



    }

function draw_lines_results_2(line1_id, line2_id, line3_id, line4_id, line5_id, start_id, target1, target2, target3, target4, target5) {
    //change this function so that it can be reused: variables are:
    // id of four lines eg. #line1, #line2,
    // id of results : 1x starting #results (where all the lines start from)
    // 4x target #results (where the lines should go)

    line3 = $(line1_id);
    line4 = $(line2_id);
    line9 = $(line3_id);
    line10 = $(line4_id);
    line27 = $(line5_id);



    $(document).on('mousemove', function(e) {

        //line 1, 2, 3 & 4 start from this div
        var element_2 = $(start_id);
        var pos1 = element_2.offset()

        line3.attr('x1', pos1.left)
        line3.attr('y1', pos1.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the

        line4.attr('x1', pos1.left)
        line4.attr('y1', pos1.top)

        line9.attr('x1', pos1.left)
        line9.attr('y1', pos1.top)

        line10.attr('x1', pos1.left)
        line10.attr('y1', pos1.top)

        line27.attr('x1', pos1.left)
        line27.attr('y1', pos1.top)


    });


    $(document).on('mousemove', function(e) {
        //goes to this div (line 1)

        var element_2 = $(target1);
        var pos2 = element_2.offset()

        line3.attr('x2', pos2.left)
        line3.attr('y2', pos2.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });


    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_3 = $(target2);
        var pos3 = element_3.offset()

        line4.attr('x2', pos3.left)
        line4.attr('y2', pos3.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_7 = $(target3);
        var pos7 = element_7.offset()

        line9.attr('x2', pos7.left)
        line9.attr('y2', pos7.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_8 = $(target4);
        var pos8 = element_8.offset()

        line10.attr('x2', pos8.left)
        line10.attr('y2', pos8.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_8 = $(target5);
        var pos8 = element_8.offset()

        line27.attr('x2', pos8.left)
        line27.attr('y2', pos8.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });



}

function draw_lines_results_3(line1_id, line2_id, line3_id, line4_id, line5_id, start_id,  target1, target2, target3, target4, target5) {
    //change this function so that it can be reused: variables are:
    // id of four lines eg. #line1, #line2,
    // id of results : 1x starting #results (where all the lines start from)
    // 4x target #results (where the lines should go)

    line5 = $(line1_id);
    line6 = $(line2_id);
    line11 = $(line3_id);
    line12 = $(line4_id);
    line28 = $(line5_id);


    $(document).on('mousemove', function(e) {

        //line 1 & 2 start from this div
        var element_2 = $(start_id);
        var pos1 = element_2.offset()

        line5.attr('x1', pos1.left)
        line5.attr('y1', pos1.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the

        line6.attr('x1', pos1.left)
        line6.attr('y1', pos1.top)

        line11.attr('x1', pos1.left)
        line11.attr('y1', pos1.top)

        line12.attr('x1', pos1.left)
        line12.attr('y1', pos1.top)

        line28.attr('x1', pos1.left)
        line28.attr('y1', pos1.top)


    });


    $(document).on('mousemove', function(e) {
        //goes to this div (line 1)

        var element_2 = $(target1);
        var pos2 = element_2.offset()

        line5.attr('x2', pos2.left)
        line5.attr('y2', pos2.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });



    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_3 = $(target2);
        var pos3 = element_3.offset()

        line6.attr('x2', pos3.left)
        line6.attr('y2', pos3.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });


    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_7 = $(target3);
        var pos7 = element_7.offset()

        line11.attr('x2', pos7.left)
        line11.attr('y2', pos7.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_8 = $(target4);
        var pos8 = element_8.offset()

        line12.attr('x2', pos8.left)
        line12.attr('y2', pos8.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_8 = $(target5);
        var pos8 = element_8.offset()

        line28.attr('x2', pos8.left)
        line28.attr('y2', pos8.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });


}

function draw_lines_results_4(line1_id, line2_id, line3_id, line4_id,  line5_id, start_id, target1, target2, target3, target4, target5) {
    //change this function so that it can be reused: variables are:
    // id of four lines eg. #line1, #line2,
    // id of results : 1x starting #results (where all the lines start from)
    // 4x target #results (where the lines should go)

    line13 = $(line1_id);
    line14 = $(line2_id);
    line15 = $(line3_id);
    line16 = $(line4_id);
    line29 = $(line5_id);



    $(document).on('mousemove', function(e) {

        //line 1 & 2 start from this div
        var element_2 = $(start_id);
        var pos1 = element_2.offset()

        line13.attr('x1', pos1.left)
        line13.attr('y1', pos1.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the

        line14.attr('x1', pos1.left)
        line14.attr('y1', pos1.top)

        line15.attr('x1', pos1.left)
        line15.attr('y1', pos1.top)

        line16.attr('x1', pos1.left)
        line16.attr('y1', pos1.top)

        line29.attr('x1', pos1.left)
        line29.attr('y1', pos1.top)


    });


    $(document).on('mousemove', function(e) {
        //goes to this div (line 1)

        var element_2 = $(target1);
        var pos2 = element_2.offset()

        line13.attr('x2', pos2.left)
        line13.attr('y2', pos2.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });


    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_3 = $(target2);
        var pos3 = element_3.offset()

        line14.attr('x2', pos3.left)
        line14.attr('y2', pos3.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_7 = $(target3);
        var pos7 = element_7.offset()

        line15.attr('x2', pos7.left)
        line15.attr('y2', pos7.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_8 = $(target4);
        var pos8 = element_8.offset()

        line16.attr('x2', pos8.left)
        line16.attr('y2', pos8.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_8 = $(target5);
        var pos8 = element_8.offset()

        line29.attr('x2', pos8.left)
        line29.attr('y2', pos8.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

}

function draw_lines_results_5(line1_id, line2_id, line3_id, line4_id,  line5_id, start_id, target1, target2, target3, target4, target5) {
    //change this function so that it can be reused: variables are:
    // id of four lines eg. #line1, #line2,
    // id of results : 1x starting #results (where all the lines start from)
    // 4x target #results (where the lines should go)

    line17 = $(line1_id);
    line18 = $(line2_id);
    line19 = $(line3_id);
    line20 = $(line4_id);
    line30 = $(line5_id);


    $(document).on('mousemove', function(e) {

        //line 1 & 2 start from this div
        var element_2 = $(start_id);
        var pos1 = element_2.offset()

        line17.attr('x1', pos1.left)
        line17.attr('y1', pos1.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the

        line18.attr('x1', pos1.left)
        line18.attr('y1', pos1.top)

        line19.attr('x1', pos1.left)
        line19.attr('y1', pos1.top)

        line20.attr('x1', pos1.left)
        line20.attr('y1', pos1.top)

        line30.attr('x1', pos1.left)
        line30.attr('y1', pos1.top)

    });


    $(document).on('mousemove', function(e) {
        //goes to this div (line 1)

        var element_2 = $(target1);
        var pos2 = element_2.offset()

        line17.attr('x2', pos2.left)
        line17.attr('y2', pos2.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });


    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_3 = $(target2);
        var pos3 = element_3.offset()

        line18.attr('x2', pos3.left)
        line18.attr('y2', pos3.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_7 = $(target3);
        var pos7 = element_7.offset()

        line19.attr('x2', pos7.left)
        line19.attr('y2', pos7.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_8 = $(target4);
        var pos8 = element_8.offset()

        line20.attr('x2', pos8.left)
        line20.attr('y2', pos8.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_8 = $(target5);
        var pos8 = element_8.offset()

        line30.attr('x2', pos8.left)
        line30.attr('y2', pos8.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

}

function draw_lines_results_6(line1_id, line2_id, line3_id, line4_id,  line5_id, start_id, target1, target2, target3, target4, target5) {
    //change this function so that it can be reused: variables are:
    // id of four lines eg. #line1, #line2,
    // id of results : 1x starting #results (where all the lines start from)
    // 4x target #results (where the lines should go)

    line21 = $(line1_id);
    line22 = $(line2_id);
    line23 = $(line3_id);
    line24 = $(line4_id);
    line25 = $(line5_id);


    $(document).on('mousemove', function(e) {

        //line 1 & 2 start from this div
        var element_2 = $(start_id);
        var pos1 = element_2.offset()

        line21.attr('x1', pos1.left)
        line21.attr('y1', pos1.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the

        line22.attr('x1', pos1.left)
        line22.attr('y1', pos1.top)

        line23.attr('x1', pos1.left)
        line23.attr('y1', pos1.top)

        line24.attr('x1', pos1.left)
        line24.attr('y1', pos1.top)

        line25.attr('x1', pos1.left)
        line25.attr('y1', pos1.top)



    });


    $(document).on('mousemove', function(e) {
        //goes to this div (line 1)

        var element_2 = $(target1);
        var pos2 = element_2.offset()

        line21.attr('x2', pos2.left)
        line21.attr('y2', pos2.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });


    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_3 = $(target2);
        var pos3 = element_3.offset()

        line22.attr('x2', pos3.left)
        line22.attr('y2', pos3.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_7 = $(target3);
        var pos7 = element_7.offset()

        line23.attr('x2', pos7.left)
        line23.attr('y2', pos7.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_8 = $(target4);
        var pos8 = element_8.offset()

        line24.attr('x2', pos8.left)
        line24.attr('y2', pos8.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });

    $(document).on('mousemove', function(e) {

        //goes to this div (line2)
        var element_8 = $(target5);
        var pos8 = element_8.offset()

        line25.attr('x2', pos8.left)
        line25.attr('y2', pos8.top)
        //return pos2// returns an object with x/y coordinates of the top-left corner of the element
    });


}


function reload() {
    location.reload();
}

setTimeout("reload()", 20000);

$(document).ready(function() {



    //console.log(my_keys)

    //variatie in aantal werken 3-4-5-6 + geen dubbels

    ///step 1: random number between 3-6 = number of works displayed on website -> we use this as len of our list

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    var len_list = getRandomArbitrary(3,7)

    ///step 2: total number of files in json

    var total_files = 20

    /// step 3: Create list with random keys (file_1, file_2, ...)

    //this is the list for the keys eg file_1, file_2
    var my_keys = [];

    //this is the list to to store random numbers
    var random_number_list = []

    var random_num = getRandomArbitrary(1,total_files + 1);

    //set to false, if check_list is false (number is not in random_number_list) set to true
    var checking = false

    //create a list of random numbers between 1 & total number of files, and push to random numbers list
    //+ check if there are no doubles
    for (var z = 0; z < len_list; z++){
        while (checking == false) {
            random_num = getRandomArbitrary(1,total_files + 1);
            console.log(random_num)
            var check_list = random_number_list.includes(random_num);
            console.log(my_keys)
            console.log(check_list);
            if (check_list == false){
                checking = true;
                console.log(checking)
            }
    }
        console.log(z)
        random_number_list.push(random_num)
        var random_key = "file_" + random_num;
        my_keys.push(random_key);
        checking = false;
    }


    console.log(my_keys)

    //get random artwork from json


    //var myStringArray = ["Hello","World"];
    var arrayLength = my_keys.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(my_keys[i]);
        var num = i + 1
        console.log("text_" + num)
        get_random_artwork("#results_" + num, "driver_" + num, "#driver_" + num, "img_" + num , "text_" + num, "link_" + num, "name_" + num, "#artist_" + num, my_keys[i]);
    }


    // id of four lines eg. #line1, #line2,
    // id of results : 1x starting #results (where all the lines start from)
    // 4x target #results (where the lines should go) e.g. #results_2, #results_3

    //execute all the functions!

    //draw lines
    draw_lines_results_1("#line1", "#line2", "#line7", "#line8","#line26", "#results_1", "#results_2", "#results_3", "#results_4", "#results_5", "#results_6")
    draw_lines_results_2("#line3", "#line4", "#line9", "#line10","#line27", "#results_2", "#results_1", "#results_3", "#results_4", "#results_5", "#results_6")
    draw_lines_results_3("#line5", "#line6", "#line11", "#line12","#line28", "#results_3", "#results_1", "#results_2", "#results_4", "#results_5", "#results_6")
    draw_lines_results_4("#line13", "#line14", "#line15", "#line16","#line29", "#results_4", "#results_1", "#results_2", "#results_3", "#results_5", "#results_6")
    draw_lines_results_5("#line17", "#line18", "#line19", "#line20","#line30", "#results_5", "#results_1", "#results_2", "#results_3", "#results_4", "#results_6")
    draw_lines_results_6("#line21", "#line22", "#line23", "#line24", "#line25", "#results_6", "#results_1", "#results_2", "#results_3", "#results_4", "#results_5")

    //check for clicks
    check_for_click("mydiv")
    check_for_click("mydiv_2")
    check_for_click("mydiv_3")
    check_for_click("mydiv_4")
    check_for_click("mydiv_5")
    check_for_click("mydiv_6")


    //change places on reload
    change_places("mydiv")
    change_places("mydiv_2")
    change_places("mydiv_3")
    change_places("mydiv_4")
    change_places("mydiv_5")
    change_places("mydiv_6")



    //make the DIV element draggable:
    dragElement(document.getElementById('mydiv'));
    dragElement(document.getElementById('mydiv_2'));
    dragElement(document.getElementById('mydiv_3'));
    dragElement(document.getElementById('mydiv_4'));
    dragElement(document.getElementById('mydiv_5'));
    dragElement(document.getElementById('mydiv_6'));



    //reload page on body click
    $("body").click(function(event){
        // Check what has been clicked:
        var node = event.target.nodeName
        console.log(node)
        if (node == "BODY") {
            //if body is click: reload the page
            location.reload()
        }
    });


    $("body").click(function(event){
        // Check what has been clicked:
        var node = event.target.nodeName
        console.log(node)
        if (node == "svg") {
            //if body is click: reload the page  ???
            location.reload()
        }
    });


    function demo() {



/// get all artists names and create a list

    var artist_1 = document.getElementById("artist_1").innerHTML.trim();
    var artist_2 = document.getElementById("artist_2").innerHTML.trim();
    var artist_3 = document.getElementById("artist_3").innerHTML.trim();
    var artist_4 = document.getElementById("artist_4").innerHTML.trim();
    var artist_5 = document.getElementById("artist_5").innerHTML.trim();
    var artist_6 = document.getElementById("artist_6").innerHTML.trim();



        var artists = [artist_1, artist_2, artist_3, artist_4, artist_5, artist_6]
    //console.log(artists);
    //x = $("#testing").val();
    //console.log(artist_1, artist_2, artist_3, artist_4, artist_5, artist_6)


    ////do mouseover for first image

    document.getElementById("results_1").addEventListener("mouseover", mouseOver);
    document.getElementById("results_1").addEventListener("mouseout", mouseOut);

    function mouseOver() {

        //console.log("mousover_1")
        //console.log(artists[1], artists[2], artists[3], artists[4], artists[5], artist_1);

        ///check if artist 1 is the same as artist 2 by checking the lists artists

        if (artists[1] == artist_1) {

            document.getElementById("line1").style["visibility"] = "visible";

            ///check if artist 1 is the same as artist 3
        }
        console.log(artists[2], artist_1);
        if (artists[2] == artist_1) {
            document.getElementById("line2").style["visibility"] = "visible";
        }

        if (artists[3] == artist_1) {
            document.getElementById("line7").style["visibility"] = "visible";
        }

        if (artists[4] == artist_1) {
            document.getElementById("line8").style["visibility"] = "visible";
        }

        if (artists[5] == artist_1) {
            document.getElementById("line26").style["visibility"] = "visible";
        }
    }


    function mouseOut() {
        document.getElementById("line1").style["visibility"] = "hidden";
        document.getElementById("line2").style["visibility"] = "hidden";
        document.getElementById("line7").style["visibility"] = "hidden";
        document.getElementById("line8").style["visibility"] = "hidden";
        document.getElementById("line26").style["visibility"] = "hidden";


    }

    ////do mouseover for second image

    document.getElementById("results_2").addEventListener("mouseover", mouseOver_2);
    document.getElementById("results_2").addEventListener("mouseout", mouseOut_2);



    function mouseOver_2() {

        console.log("mousover_2")
        if (artists[0] == artist_2) {
            document.getElementById("line3").style["visibility"] = "visible";

        }
        if (artists[2] == artist_2) {
            document.getElementById("line4").style["visibility"] = "visible";

        }
        if (artists[3] == artist_2) {
            document.getElementById("line9").style["visibility"] = "visible";

        }
        if (artists[4] == artist_2) {
            document.getElementById("line10").style["visibility"] = "visible";
        }

        if (artists[5] == artist_2) {
            document.getElementById("line27").style["visibility"] = "visible";

        }
    }



    function mouseOut_2() {
        document.getElementById("line3").style["visibility"] = "hidden";
        document.getElementById("line4").style["visibility"] = "hidden";
        document.getElementById("line9").style["visibility"] = "hidden";
        document.getElementById("line10").style["visibility"] = "hidden";
        document.getElementById("line27").style["visibility"] = "hidden";

    }



    ////do mouseover for third image

    document.getElementById("results_3").addEventListener("mouseover", mouseOver_3);
    document.getElementById("results_3").addEventListener("mouseout", mouseOut_3);

    function mouseOver_3() {

        console.log("mousover_3")
        if (artists[0] == artist_3) {
            document.getElementById("line5").style["visibility"] = "visible";
        }
        if (artists[1] == artist_3) {
            document.getElementById("line6").style["visibility"] = "visible";
        }

        if (artists[3] == artist_3) {
            document.getElementById("line11").style["visibility"] = "visible";
        }
        if (artists[4] == artist_3) {
            document.getElementById("line12").style["visibility"] = "visible";
        }

        if (artists[5] == artist_3) {
            document.getElementById("line28").style["visibility"] = "visible";
        }
    }


    function mouseOut_3() {
        document.getElementById("line5").style["visibility"] = "hidden";
        document.getElementById("line6").style["visibility"] = "hidden";
        document.getElementById("line11").style["visibility"] = "hidden";
        document.getElementById("line12").style["visibility"] = "hidden";
        document.getElementById("line28").style["visibility"] = "hidden";

    }



    ////do mouseover for fourth image

    document.getElementById("results_4").addEventListener("mouseover", mouseOver_4);
    document.getElementById("results_4").addEventListener("mouseout", mouseOut_4);

    function mouseOver_4() {

        console.log("mousover_4")
        if (artists[0] == artist_4) {
            document.getElementById("line13").style["visibility"] = "visible";
        }
        if (artists[1] == artist_4) {
            document.getElementById("line14").style["visibility"] = "visible";
        }

        if (artists[2] == artist_4) {
            document.getElementById("line15").style["visibility"] = "visible";
        }
        if (artists[4] == artist_4) {
            document.getElementById("line16").style["visibility"] = "visible";
        }


        if (artists[5] == artist_4) {
            document.getElementById("line29").style["visibility"] = "visible";
        }
    }


    function mouseOut_4() {
        document.getElementById("line13").style["visibility"] = "hidden";
        document.getElementById("line14").style["visibility"] = "hidden";
        document.getElementById("line15").style["visibility"] = "hidden";
        document.getElementById("line16").style["visibility"] = "hidden";
        document.getElementById("line29").style["visibility"] = "hidden";

    }

        ////do mouseover for fifth image

        document.getElementById("results_5").addEventListener("mouseover", mouseOver_5);
        document.getElementById("results_5").addEventListener("mouseout", mouseOut_5);

        function mouseOver_5() {

            console.log("mousover_5")
            if (artists[0] == artist_5) {
                document.getElementById("line17").style["visibility"] = "visible";
            }
            if (artists[1] == artist_5) {
                document.getElementById("line18").style["visibility"] = "visible";
            }

            if (artists[2] == artist_5) {
                document.getElementById("line19").style["visibility"] = "visible";
            }
            if (artists[3] == artist_5) {
                document.getElementById("line20").style["visibility"] = "visible";
            }

            if (artists[5] == artist_5) {
                document.getElementById("line30").style["visibility"] = "visible";
            }
        }


        function mouseOut_5() {
            document.getElementById("line17").style["visibility"] = "hidden";
            document.getElementById("line18").style["visibility"] = "hidden";
            document.getElementById("line19").style["visibility"] = "hidden";
            document.getElementById("line20").style["visibility"] = "hidden";
            document.getElementById("line30").style["visibility"] = "hidden";

        }



    ////do mouseover for sixth image

    document.getElementById("results_6").addEventListener("mouseover", mouseOver_6);
    document.getElementById("results_6").addEventListener("mouseout", mouseOut_6);

    function mouseOver_6() {

        console.log("mousover_6")
        if (artists[0] == artist_6) {
            document.getElementById("line21").style["visibility"] = "visible";
        }
        if (artists[1] == artist_6) {
            document.getElementById("line22").style["visibility"] = "visible";
        }

        if (artists[2] == artist_6) {
            document.getElementById("line23").style["visibility"] = "visible";
        }
        if (artists[3] == artist_6) {
            document.getElementById("line24").style["visibility"] = "visible";
        }

        if (artists[4] == artist_6) {
            document.getElementById("line25").style["visibility"] = "visible";
        }
    }


    function mouseOut_6() {
        document.getElementById("line21").style["visibility"] = "hidden";
        document.getElementById("line22").style["visibility"] = "hidden";
        document.getElementById("line23").style["visibility"] = "hidden";
        document.getElementById("line24").style["visibility"] = "hidden";
        document.getElementById("line25").style["visibility"] = "hidden";

    }

}



    var cancel = setInterval(incrementSeconds, 1000);

/// important: set a short timeout so that all images are loaded  before retrieving information!
    ///all function in the function settimeout are only called after this timeout

    setTimeout(demo, 500);



});






