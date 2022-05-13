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
    $("#issse-edition-number-span").append(jsoninfo.edition);
    $('#issse-edition-year-span').append(jsoninfo.year);
    $('#issse-date-span').append(formatdate(jsoninfo.startdate, jsoninfo.enddate));
    $('#issse-venue-span').append(jsoninfo.venue);
    $("#issse-about-paragraph").append(jsoninfo.intro);
    
}


function getyear() {
    const editions = ["2003", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2016", "2017", "2019", "2021"];
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('year')) {
        var y = urlParams.get('year');
        if (editions.includes(y)) {
            return y;
        }
    }
    // default page: about last edition
    return editions[editions.length - 1];
}


function formatdate(startdate, enddate) {
    /* 
 "startdate": {
        "day":6,
        "month":7
    },
    "enddate": {
        "day":15,
        "month":7
    },
    */
   return "date";
}
