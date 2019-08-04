
$(function () {
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate: '<div class="title">#title#</div>',
        labels: {
            previous: 'Previous',
            next: 'Next Step',
            finish: 'Submit',
            current: ''
        },
        onStepChanging: function (event, currentIndex, newIndex) {

            /*To add new one just copy the id from html and get the value of it*/
            var cleanNum = $('#formCleanNum').val();
            var duration = $('#formDuration').val();
            var extrFeature = $('#formExtra').val();
            var matrial = $('input[name=options]:checked').val();
            var cardType = $('input[name=radio1]:checked').val();
            
          
            $('#cleanrNum-val').text(cleanNum);
            $('#duration-val').text(duration);
            $('#extra-val').text(extrFeature);
            $('#material-val').text(matrial);
            $('#cardType-val').text(cardType);

       

            return true;
        }
    })
    // var langText=$(".getLang").text();

    // if(langText==="EN"){
       
    //     $("section,footer,span,li,.display-4").addClass("fontForArab");
    //     $(".chnageToArab").addClass("dirForArab");

    //     $("#form-total").steps({
    //         headerTag: "h2",
    //         bodyTag: "section",
    //         transitionEffect: "fade",
    //         enableAllSteps: true,
    //         autoFocus: true,
    //         transitionEffectSpeed: 500,
    //         titleTemplate: '<div class="title">#title#</div>',
    //         labels: {
    //             previous: 'للخلف',
    //             next: 'التالي',
    //             finish: 'تاكيد',
    //             current: ''
    //         },
    //         onStepChanging: function (event, currentIndex, newIndex) {
                
    //              /*To add new one just copy the id from html and get the value of it*/
    //             var cleanNum = $('#formCleanNum').val();
    //             var duration = $('#formDuration').val();
    //             var extrFeature = $('#formExtra').val();
    //             var matrial = $('input[name=options]:checked').val();
    //             var cardType = $('input[name=radio1]:checked').val();
    
    //             $('#cleanrNum-val').text(cleanNum);
    //             $('#duration-val').text(duration);
    //             $('#extra-val').text(extrFeature);
    //             $('#material-val').text(matrial);
    //             $('#cardType-val').text(cardType);
    
    
    //             return true;
    //         }
    //     });
        
    //     $("[data-localize]").localize("lang", { language: "ar" });
    //     $(".actions ul li a").addClass("fontForArab");

    // }else{
    // ;

    //     // $("section,footer,span,li,.display-4,.actions ul li").removeClass("fontForArab");
    //     // $("section").removeClass("dirForArab");
    // }

   
  

   


    /**Get the staff names***/
    var res = "";
    
    function countCehck1() {

        $(".staffs:checked").each(function () {
            if ($(this).is(':checked')) {
                res += $(this).prop('value') + " ";
            }
        });

        $('#staffName-val').text(res);
        res = " ";

    }
    // print checkbox value
    $("input[type=checkbox]").on("click", countCehck1);

    

     /**Date and time functions*/

    $('#datetimepicker12').datetimepicker({
        inline: true,
        sideBySide: true,

        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-chevron-up",
            down: "fa fa-chevron-down",
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-screenshot',
            clear: 'fa fa-trash',
            close: 'fa fa-remove'

        }

    });
    $('#datetimepicker3').datetimepicker({
        inline: true,
        sideBySide: true,

        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-chevron-up",
            down: "fa fa-chevron-down",
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-screenshot',
            clear: 'fa fa-trash',
            close: 'fa fa-remove'

        }

    });

    $('#datetimepicker12').on('dp.change', function (event) {
        var formatted_date = event.date.format('MM/DD/YYYY h:mm a');
        $('#my_hidden_input').val(formatted_date);
        $('#startDatetime-val').text($('#my_hidden_input').val());


    });
    $('#datetimepicker3').on('dp.change', function (event) {
        var formatted_date = event.date.format('MM/DD/YYYY h:mm a');
        $('#my_hidden_input2').val(formatted_date);
        $('#endDatetime-val').text($('#my_hidden_input2').val());
       


    });



    /**Map functions*/
    mapboxgl.accessToken = 'pk.eyJ1IjoibXJhYm9kIiwiYSI6ImNqeHFpYTQzODAxNm4zY213czloYWRhaG8ifQ.5NDxNTmAkfoSsQ-zGUlLJg';
    var coordinates = document.getElementById('coordinates');
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [54.366669, 24.466667],
        zoom: 5
    });

    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        placeholder: 'Search for your place'
    });

    // Add the geocoder to the map
    map.addControl(geocoder);


    map.on('load', function () {
       
        geocoder.on('result', function (ev) {
            //geometry.coordinates

            $("#homeAdress-val").text(ev.result.text)

            //use this if want lat and long
            console.log("Location coordinates :", ev.result.center);

            //use this want full name with country,etc
             console.log("Location name :", ev.result.place_name);

        });

        
    });

    geocoder.on('error', function (e) {
        console.log('Error is', e.error);
    });
 

    
    // $("[data-localize]").localize("lang", { language: "en" });
   
   
});
