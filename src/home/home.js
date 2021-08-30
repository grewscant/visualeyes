dataset.onchange = function(ev) {
    
    ev.preventDefault();

    var file = this.files[0];

    if(file.type.indexOf('.csv') !== 0) {
        console.log('[FILE FETCH]: Fail');
        if(!(alert('Error: Invalid File Type'))) {
            window.location.reload();
        }
    }
    else {
        //Add what to do with the input file
    }
}


