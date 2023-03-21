(() => {

    enum AudioLevel {
        min = 1,
        medium,
        max,
        maxPower = 15,
    }

    let currentAudio:AudioLevel = AudioLevel.max;
    console.log(currentAudio);
    
})()