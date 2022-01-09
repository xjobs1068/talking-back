$(document).ready(function () {
    $("#data").keyup(function () {
        $("#out").text($("#data").val());
    });

    $("#data2").keyup(function () {
        $("#out2").text($("#data2").val());
    });

});

function downImg() {
    html2canvas($("#tmpImgDiv")[0]).then(function (canvas) {
        var myImage = canvas.toDataURL();
        downloadURI(myImage, "zzal.png")
    });
}

function downloadURI(uri, name) {
    var link = document.createElement("a")
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
}