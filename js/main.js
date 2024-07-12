onerror = handleErr;
var txt = "";
function handleErr(msg, url, l) {
    txt = "There was an error on this page.\n\n";
    txt += "Error: " + msg + "\n"
    txt += "URL: " + url + "\n"
    txt += "Line: " + l + "\n\n"
    txt += "Click OK to continue.\n\n"
    alert(txt)
    return true
}

function startHover() {
    document.getElementById("play-72726f5a-206f-4348-5232-206163636964").style.display = "flex";
    document.getElementById("link-72726f5a-206f-4348-5232-206163636964").style.display = "flex";
}

function endHover() {
    document.getElementById("play-72726f5a-206f-4348-5232-206163636964").style.display = "none";
}

function startHover454341465220564545414c204f462046() {
    document.getElementById("play-45434146-5220-5645-4541-4c204f462046").style.display = "flex";
    document.getElementById("link-45434146-5220-5645-4541-4c204f462046").style.display = "flex";
}

function endHover454341465220564545414c204f462046() {
    document.getElementById("play-45434146-5220-5645-4541-4c204f462046").style.display = "none";
}

function qrCodeClosehttpsplayhcrcominviteidqxN5Vr() {
    document.getElementById('qr-code-https%3A%2F%2Fplayhcr.com%2Finvite%3Fid%3DqxN5Vr').style.display = "none"
}

function qrCodeClose() {
    document.getElementById('qr-code-content').style.display = "none"
}

function qrCodeOpen() {
    document.getElementById('qr-code-content').style.display = "flex"
}

function qrCodeOpenhttpsplayhcrcominviteidqxN5Vr() {
    document.getElementById('qr-code-https%3A%2F%2Fplayhcr.com%2Finvite%3Fid%3DqxN5Vr').style.display = "block"
}

function qrCodeCloseOnhover() {
    document.getElementById('qr-code-content-top-close-button').style.backgroundColor = "red"
}

function qrCodeCloseOnhoverEnd() {
    document.getElementById('qr-code-content-top-close-button').style.backgroundColor = "#00000033"
}

function loadingComplete() {
    let loadComplete =
        document.getElementById('loading')
    loadComplete.style.backgroundColor = "#00000000";
    document.getElementById('text-loading').style.color = "#00000000";

    setTimeout(() => {
        document.getElementById('loading').style.display = "none"
    }, 600);
}

const completeLoad =
    document.body
completeLoad.addEventListener('load', () => loadingComplete)