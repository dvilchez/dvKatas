// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
    var adapter = new MemoryAdapter();
    adapter.initialize().done(function () {
        // console.log("Data adapter initialized");
        $('body').html(new HomeView(adapter, homeTpl, employeeLiTpl).render().el);
    });

    /* --------------------------------- Event Registration -------------------------------- */
    // $('.help-btn').on('click', function() {
    //     alert("Some help here...")
    // });
    //
    // document.addEventListener('deviceready', function () {
    //     if (navigator.notification) { // Override default HTML alert with native dialog
    //         window.alert = function (message) {
    //             navigator.notification.alert(
    //                 message,    // message
    //                 null,       // callback
    //                 "Workshop", // title
    //                 'OK'        // buttonName
    //             );
    //             console.log("sustituye windows alert");
    //         };
    //     }
    // }, false);

    FastClick.attach(document.body);

    /* ---------------------------------- Local Functions ---------------------------------- */


}());
