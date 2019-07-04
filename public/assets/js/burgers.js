$(function () {
    $("#submit").click(function (e) {
        e.preventDefault();
        let burger = {
            burgername: $("#newburger").val()
        };
        $.post("/api/Burger", burger, function (result) {
            console.log("here!");
            location.reload();
        });
    });

    $(".devour").click(function (e) {
        e.preventDefault();

        $.ajax({
            method: "PUT",
            url: "/api/Burger/" + $(this).attr("value"),
        }).then(function (result) {
            console.log(result);
            location.reload();
        });
    });
});