dataset.onchange = (ev) => {
    try {
        validateInputFile(ev)
    }
    catch (err) {
        console.error(err)
    }
};

function validateInputFile (ev) {
    let inputFile = ev.target.files[0];
    
    if (!(inputFile.type === 'text/csv')) {
        alert('Error: Invalid File Type');
        throw '[FILE FETCH]: Fail';
    }
    else {
        storeInputBlobAsFile(inputFile, inputFile.name);
        console.log('[FILE FETCH]: Success');
        console.log('Redirecting...');
        window.location.replace("/src/visualiser/visualiser.html");
    }
}

function storeInputBlobAsFile(csvFile, fileName) {
    csvFile.lastModifiedDate = new Date();
    csvFile.name = fileName;
    return csvFile;
}

