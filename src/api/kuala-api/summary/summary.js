export const loadSummary = () => {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                skills: 3,
                projects: 0,
                recommendations: 2,
                achievments: 0,
                experience: 1,
                education: 2
            });
        }, 2000);
    });
    return promise;
};
