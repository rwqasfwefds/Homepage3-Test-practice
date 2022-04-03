// $(function(){
//     $('.outer-menu-item').hover(function () {
//         $(this).find('.inner-menu').show();
//     }, function () {
//         $(this).find('.inner-menu').hide();
//     });

//     // 테이블 색상 변경
//     $('.lightblue').css('background-color', 'lightblue')
//     $('.lightgray').css('background-color', 'lightgray')
// });

function setCurUime() {
    let resId = 0;
    
    resId = setInterval(displayNow, 1000);

    function displayNow() {
        let now = new Date();

        let currentTime = now.toLocaleTimeString();
        document.querySelector('#current').innerHTML = currentTime;
    }

    return resId;

}
export default setCurUime
