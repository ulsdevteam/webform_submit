
(function ($) {
    Drupal.behaviors.DisableInputEnter = {
        attach: function (context, settings) {
            $('input', context).once('disable-input-enter', function () {
                $(this).keypress(function (event) {
                    var x = 0;
                    var item = event.target.form;
                    if (event.keyCode === 13) {
                        for (x; x < event.target.form.length; x++) {
                            if (item[x].id === event.target.id) {
                                console.log("Found it");
                                event.target = item[x + 1];
                                document.getElementById(event.target.id).focus()
                                break;
                            }
                        }
                    }
                    return event.keyCode === 13 ? false : true;
                });
            });
        }
    }
})(jQuery);
 