"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 3] = "max";
        AudioLevel[AudioLevel["maxPower"] = 15] = "maxPower";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
})();
//# sourceMappingURL=enums.js.map