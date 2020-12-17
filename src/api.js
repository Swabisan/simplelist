export const getStudies = async () =>
    await fetch('https://www.cxsurveys.com/devtest/getStudyData.php')
        .then(response => response.json())
