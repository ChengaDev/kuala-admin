export const loadSummary = () => {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve([
                {
                    title: 'Skills',
                    data: '3'
                },
                {
                    title: 'Projects',
                    data: '0'
                },
                {
                    title: 'Recommendations',
                    data: '2'
                },
                {
                    title: 'Achievments',
                    data: '0'
                },
                {
                    title: 'Experience',
                    data: '1'
                },
                {
                    title: 'Education',
                    data: '2'
                }
            ]);
        }, 2000);
    });
    return promise;
};
