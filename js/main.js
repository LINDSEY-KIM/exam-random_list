(function(){

    function initAudio () {
        var audio, dir, ext, mylist;
        dir = "audio/";
        ext = ".mp3";

        audio = new Audio();
        audio.src = dir+"song1"+ext;
        audio.play();

        mylist = document.getElementById('mylist');
        mylist.addEventListener("change", changeTrack);

        function changeTrack(event) {
            audio.src = dir+event.target.value+ext;
            audio.play();
        }
    }
    window.addEventListener('load' , initAudio);

})();