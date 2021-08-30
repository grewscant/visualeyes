dfd.read_csv("https://raw.githubusercontent.com/vincentarelbundock/Rdatasets/master/csv/datasets/airquality.csv")
    .then(df => {
        df.plot(document.getElementById('scatterchart')).scatter({ x: 'Day', y: 'Temp'})
    }).catch(e => {
        console.log(e);
    })