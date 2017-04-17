
document.querySelector('.btn-search').addEventListener('click', function () {
    var x = document.getElementById('mySearch').value;
    // console.log(x);

    if (x !== '') {
        // window.location.replace("https://www.google.com.tw/?q=" + x);    
        window.location.assign("https://www.google.com.tw/?q=" + x);
    }
})