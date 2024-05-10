export default {
      methods: {
            calculateRunningTime(startDate, endDate) {
                  const startTime = startDate.getTime();
                  const endTime = endDate.getTime();
                  const timeDifference = endTime - startTime;

                  // Calculate years and remaining days
                  const oneYearInMilliseconds = 1000 * 60 * 60 * 24 * 365;
                  const years = Math.floor(timeDifference / oneYearInMilliseconds);
                  const remainingMilliseconds = timeDifference % oneYearInMilliseconds;
                  const days = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));

                  return {
                        years: years,
                        days: days
                  };
            }
      }
};
