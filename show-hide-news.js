function showNews() {
    document.getElementsByClassName('news-page').style.display="block";
    document.getElementById('show-news').style.display="none";
    document.getElementById('hide-news').style.display="block";
}

function hideNews() {
    document.getElementsByClassName('news-page').style.display="none";
    document.getElementById('show-news').style.display="block";
    document.getElementById('hide-news').style.display="none";
}