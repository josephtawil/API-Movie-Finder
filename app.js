$(document).ready(function () {

    $("#button").on("click", function (e) {
        e.preventDefault();
        // inputText = $("#text").val();
        var text = $("#text").val();
        var api_key = "f1b2399e";
        $.ajax(
            {
                type: "GET",
                url: `http://www.omdbapi.com/?t=${text}&apikey=${api_key}`,
                dataType: "json",
            }).then(function (response) {
                console.log(response);
                //we are getting the id of the h1 html and giving it text of the Title
                var movie = $("#movie").text(response.Title);
                var actors = $("#actors").text(response.Actors);
                var rating = $("#rating").text(response.Rated);
                var year = $("#year").text(response.Year);
                var years = response.Year;
                if (parseInt(years) < 2010) {
                    $("#year").text(`${years} - this is a classic`);
                }
                else {
                    $("#year").text(`${years} - this is a modern movie`);
                }
                var movies = response.Title;
                $("#list").append(`<li id="first">${movies}</li>`);
                $("#first").on("click", function () {
                    // var s = renderMovie();
                    $("#container").append(`<h1>${movies}</h1>`);
                });
                // function renderMovie(t) {
                //     $("#movie").text(response.Title);
                //     $("#actors").text(response.Actors);
                //     $("#rating").text(response.Rated);
                //     $("#year").text(response.Year);
                //     var year = response.Year;
                //     if (parseInt(year) < 2010) {
                //         $("#year").text(`${year} - this is a classic`);
                //     }
                //     else {
                //         $("#year").text(`${year} - this is a modern movie`);


                //     }
                // }

            });
    });
});