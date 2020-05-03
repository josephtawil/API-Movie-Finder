$(document).ready(function () {

    $("#button").on("click", function (e) {
        e.preventDefault();
        inputText = $("#text").val();
        var api_key = "f1b2399e";
        $.ajax(
            {
                type: "GET",
                url: `http://www.omdbapi.com/?t=${inputText}&apikey=${api_key}`,
                dataType: "json",
            }).then(function (response) {
                console.log(response);
                //we are getting the id of the h1 html and giving it text of the Title
                $("#movie").text(response.Title);
                $("#actors").text(response.Actors);
                $("#rating").text(response.Rated);
                $("#year").text(response.Year);
                var year = response.Year;
                if (parseInt(year) < 2010) {
                    $("#year").text(`${year} - this is a classic`);
                }
                else {
                    $("#year").text(`${year} - this is a modern movie`);
                }
            });
    });
    function movieType() {
    }

});