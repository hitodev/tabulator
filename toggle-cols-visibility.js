/*************************************
 * Find columns with specific option
 * to build an automatic swhitch to toggle hidden columns visibility
 * Apply to callback table on renderComplete
 * toggle-cols-visibility.js
 */
function getColByVisibleOption(visible) {
    return columnDefinition.filter(
        function(columnDefinition){ return columnDefinition.visible == visible }
    );
}
var columnsVisibleFalse = getColByVisibleOption(false);
//console.log(columnsVisibleFalse);
var switchCols = document.getElementById('switchCols');
switchCols.addEventListener('change', function () {
    //loop array columnsVisibleFalse to toggle columns with option visible:false
    for (var item in columnsVisibleFalse) {
        //console.log(columnsVisibleFalse[item]['visible'])
        table.toggleColumn(columnsVisibleFalse[item]['field']);
    }
});
