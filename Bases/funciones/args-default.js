"use strict";
(() => {
    const fullName = (fristName, lastName, upper = false) => {
        if (upper) {
            return `${fristName} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${fristName} ${lastName || '----'}`;
        }
    };
    const name = fullName('Adrian', 'Olvera', true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map