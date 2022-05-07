$(document).ready(function () {
    // get ISSSE edition year
    const year = getyear();
    $("title").append(" "+year);
    $("#series-link-"+year).addClass("active");
    // fill page with info about the edition
    $.getJSON('../assets/db/issse/'+year+'.json', fillinfo);
    $.getJSON('https://raw.githubusercontent.com/giuliasellitto7/sesa-website/main/assets/db/issse/2021.json', fillinfo);
});


function fillinfo(jsoninfo) {
    // get all the information and fill the spaces
    // there is a html element with the right style
    // it has to be cloned and filled with info
    $("#about-issse").append(jsoninfo.intro);
}


function getyear() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('year')) {
        return urlParams.get('year');
    }
    else { // last edition
        return "2021";
    }
}


/* function (jdata) {
    console.log(jdata);
    var str1 = '<div class="col-lg-3 col-md-4 col-sm-6" data-aos="zoom-out" data-aos-delay="700">';
    var str2 = '<div class="research-box d-flex align-items-center"><h3>';
    var str3 = '</h3></div></div>';
    jdata.forEach(function (item, index, array) {
        $('#topics').append($(str1 + str2 + item["name"][pagelang] + str3));
    })
} */