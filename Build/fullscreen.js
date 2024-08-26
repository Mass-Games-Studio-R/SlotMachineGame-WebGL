function toggleFullScreen() 
{
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}

//function getLocalStorageData() {
//    return {
//        id: localStorage.getItem("id"),
//        token: localStorage.getItem("token")
//    };
//}

function getLocalStorageData() {
    // Fetch the data from localStorage
    var id = localStorage.getItem("id");
    var token = localStorage.getItem("token");

    // Create a JSON object to store the data
    var data = {
        id: id,
        token: token
    };

    // Convert the JSON object to a string and return it
    return JSON.stringify(data);
}

function toggleFullScreenOnIOS() 
{
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
}

document.getElementById('yourButtonId').addEventListener('click', function() {
    toggleFullScreenOnIOS();
});