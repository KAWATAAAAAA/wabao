
function todoAjax(url,data,async,type,scallback,fcallback) {
    $.ajax({
        url,
        data,
        type,
        async,
        dataType: 'json',
        contentType: 'application/json;utf-8',
        success(data) {
            scallback(data);
        },
        error(err) {
            fcallback(err);
        }

    })
}
