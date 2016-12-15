/**
 * Created by qinhantao on 2016/10/26.
 *
 */
function main() {
    (function () {

        $('#sick').affix({
            offset: {
                top: $('header').height()
            }
        });
    }());
}
main();