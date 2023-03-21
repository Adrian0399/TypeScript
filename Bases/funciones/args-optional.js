"use strict";
(() => {
    const fullName = (fristName, lastName) => {
        return `${fristName} ${lastName || '----'}`;
    };
    const name = fullName('Adrian');
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map