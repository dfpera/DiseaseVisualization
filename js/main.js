AmCharts.ready(function() {
    // create AmMap object
    var map = new AmCharts.AmMap();
    // set path to images
    map.pathToImages = "js/ammap/images/";

    /* create data provider object
     map property is usually the same as the name of the map file.

     getAreasFromMap indicates that amMap should read all the areas available
     in the map data and treat them as they are included in your data provider.
     in case you don't set it to true, all the areas except listed in data
     provider will be treated as unlisted.
    */
    var dataProvider = {
        map: "worldLow"
    }; 
    // pass data provider to the map object
    map.dataProvider = dataProvider;

    /* create areas settings
     * autoZoom set to true means that the map will zoom-in when clicked on the area
     * selectedColor indicates color of the clicked area.
     */
    map.zoomOnDoubleClick = false;
    map.dragMap = false;
    map.areasSettings = {
        autoZoom: false,
        selectedColor: "#CC0000"
    };
    map.zoomControl = {
        panControlEnabled: false,
        zoomControlEnabled: false
    };

    // write the map to container div
    map.write("fullMap");
    
    /* ===== PAGE INITIALIZATION ===== */
    $('#titleScreen #title').fadeIn(2000).delay(200).animate({top:'20%'}, 600);
    $('#timeline').delay(2100).toggle('slide', {direction:'right'}, 1500);

    
    /* ===== NAVIGATION ===== */
    // Initializes the map and content for the first disease while hiding
    // the title screen to unveil the map
    // @param object DiseaseObject <disease>[0] 
    function hideTitle(disease) {
        map.dataProvider = disease.dataProvider;
        curDisease = disease.h3;
        $('#mapTitle2').html(disease.h2);
        $('#contentBar h3').html(disease.h3);
        $('#date').html(disease.date);
        $('#deaths').html(disease.deaths);
        $('#description').html(disease.description);
        $('#deathTollBar').css('height', ((1 - disease.deathBar) * 87.5) + '%');
        $('#deathToll').animate({'background-color':'#D12716'},2000);
        map.validateData();
        $('#titleScreen').toggle('blind', 2000);
        $('#titleScreen #title').fadeOut(1500);
        $('#timeline').fadeOut(1000);
    }
    
    // Animates and changes the content in the sidebar when changing between disease stories.
    // @param object DiseaseObject
    function changeContent(disease) {
        $("#contentBar").toggle('slide',{direction:'right'},500);
        $("#navigation").toggle('slide',{direction:'right'},500);
        $("#blueBackground").toggle('slide',{direction:'right'},500);
        map.dataProvider = disease.dataProvider;
        $('#contentBar h3').html(disease.h3);
        $('#date').html(disease.date);
        $('#deaths').html(disease.deaths);
        $('#description').html(disease.description);
        $('#deathTollBar').animate({height:((1 - disease.deathBar) * 87.5) + '%'},2000);
        if (counter == 0) {
            $('#deathToll').animate({'background-color':'#D12716'},2000);
        } else {
            $('#deathToll').animate({'background-color':'#F8A10A'},2000);
        }
        map.validateData();
        $("#contentBar").toggle('slide',{direction:'right'},500);
        $("#navigation").toggle('slide',{direction:'right'},500);
        $("#blueBackground").toggle('slide',{direction:'right'},500);
    }
    
    // Changes between diseases regardless of where in a disease's story the user is.
    // @param object DiseaseStory
    function changeDisease(disease) {
        $("#contentBar").toggle('slide',{direction:'right'},500);
        $("#navigation").toggle('slide',{direction:'right'},500);
        $("#blueBackground").toggle('slide',{direction:'right'},500);
        map.dataProvider = disease.dataProvider;
        counter = 0;
        curDisease = disease.h3;
        $('#forward').fadeIn();
        $('#mapTitle2').html(disease.h2);
        $('#contentBar h3').html(disease.h3);
        $('#date').html(disease.date);
        $('#deaths').html(disease.deaths);
        $('#description').html(disease.description);
        $('#deathTollBar').animate({height:((1 - disease.deathBar) * 87.5) + '%'},2000);
        $('#deathToll').animate({'background-color':'#D12716'},2000);
        map.validateData();
        $("#contentBar").toggle('slide',{direction:'right'},500);
        $("#navigation").toggle('slide',{direction:'right'},500);
        $("#blueBackground").toggle('slide',{direction:'right'},500);
    }
    
    // Events for selecting a disease from the main large timeline
    $('#timeline #blackDeath').click(function() {
        hideTitle(blackDeath[0]);
    });
    $('#timeline #influenza').click(function() {
        hideTitle(influenza[0]);
    });
    $('#timeline #typhus').click(function() {
        hideTitle(typhus[0]);
    });
    $('#timeline #measles').click(function() {
        hideTitle(measles[0]);
    });
    $('#timeline #smallPox').click(function() {
        hideTitle(smallPox[0]);
    });
    $('#timeline #cholera').click(function() {
        hideTitle(cholera[0]);
    });
    $('#timeline #sars').click(function() {
        hideTitle(sars[0]);
    });
    $('#timeline #hivAIDS').click(function() {
        hideTitle(hivAIDS[0]);
    });
    
    // Events for selecting a disease from the shortcut mini-timeline
    $('#timelineSmall #blackDeath').click(function() {
        changeDisease(blackDeath[0]);
    });
    $('#timelineSmall #influenza').click(function() {
        changeDisease(influenza[0]);
    });
    $('#timelineSmall #typhus').click(function() {
        changeDisease(typhus[0]);
    });
    $('#timelineSmall #measles').click(function() {
        changeDisease(measles[0]);
    });
    $('#timelineSmall #smallPox').click(function() {
        changeDisease(smallPox[0]);
    });
    $('#timelineSmall #cholera').click(function() {
        changeDisease(cholera[0]);
    });
    $('#timelineSmall #sars').click(function() {
        changeDisease(sars[0]);
    });
    $('#timelineSmall #hivAIDS').click(function() {
        changeDisease(hivAIDS[0]);
    });
    
    // BACK BUTTON
    // Event for navigating backwards through the stories of a disease
    $('#back').click(function() {
        if (counter == 0) {
            $('#titleScreen').toggle('blind', 2000);
            $('#titleScreen #title').delay(500).fadeIn(2500);
            $('#timeline').delay(1000).fadeIn(1000);
        } else {
            switch (curDisease) {
                case "BLACK DEATH":
                    if (counter == blackDeath.length - 1) {
                        $('#forward').fadeIn();
                    }
                    changeContent(blackDeath[--counter]);
                    break;
                case "INFLUENZA":
                    if (counter == influenza.length - 1) {
                        $('#forward').fadeIn();
                    }
                    changeContent(influenza[--counter]);
                    break;
                case "TYPHUS":
                    if (counter == typhus.length - 1) {
                        $('#forward').fadeIn();
                    }
                    changeContent(typhus[--counter]);
                    break;
                case "MEASLES":
                    if (counter == measles.length - 1) {
                        $('#forward').fadeIn();
                    }
                    changeContent(measles[--counter]);
                    break;
                case "SMALL POX":
                    if (counter == smallPox.length - 1) {
                        $('#forward').fadeIn();
                    }
                    changeContent(smallPox[--counter]);
                    break;
                case "CHOLERA":
                    if (counter == cholera.length - 1) {
                        $('#forward').fadeIn();
                    }
                    changeContent(cholera[--counter]);
                    break;
                case "SARS":
                    if (counter == sars.length - 1) {
                        $('#forward').fadeIn();
                    }
                    changeContent(sars[--counter]);
                    break;
                case "HIV / AIDS":
                    if (counter == hivAIDS.length - 1) {
                        $('#forward').fadeIn();
                    }
                    changeContent(hivAIDS[--counter]);
                    break;
            }
        }
    });
    
    // FORWARD BUTTON
    // Event for navigating forward through the stories of a disease
    $('#forward').click(function() {
        switch (curDisease) {
            case "BLACK DEATH":
                if (counter < blackDeath.length - 2) {
                    changeContent(blackDeath[++counter]);
                } else {
                    $('#forward').fadeOut();
                    changeContent(blackDeath[++counter]);
                }
                break;
            case "INFLUENZA":
                if (counter < influenza.length - 2) {
                    changeContent(influenza[++counter]);
                } else {
                    $('#forward').fadeOut();
                    changeContent(influenza[++counter]);
                }
                break;
            case "TYPHUS":
                if (counter < typhus.length - 2) {
                    changeContent(typhus[++counter]);
                } else {
                    $('#forward').fadeOut();
                    changeContent(typhus[++counter]);
                }
                break;
            case "MEASLES":
                if (counter < measles.length - 2) {
                    changeContent(measles[++counter]);
                } else {
                    $('#forward').fadeOut();
                    changeContent(measles[++counter]);
                }
                break;
            case "SMALL POX":
                if (counter < smallPox.length - 2) {
                    changeContent(smallPox[++counter]);
                } else {
                    $('#forward').fadeOut();
                    changeContent(smallPox[++counter]);
                }
                break;
            case "CHOLERA":
                if (counter < cholera.length - 2) {
                    changeContent(cholera[++counter]);
                } else {
                    $('#forward').fadeOut();
                    changeContent(cholera[++counter]);
                }
                break;
            case "SARS":
                if (counter < sars.length - 2) {
                    changeContent(sars[++counter]);
                } else {
                    $('#forward').fadeOut();
                    changeContent(sars[++counter]);
                }
                break;
            case "HIV / AIDS":
                if (counter < hivAIDS.length - 2) {
                    changeContent(hivAIDS[++counter]);
                } else {
                    $('#forward').fadeOut();
                    changeContent(hivAIDS[++counter]);
                }
                break;
        }
    });
});