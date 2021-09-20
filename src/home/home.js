let dataset = document.getElementById("dataset");
let container = document.getElementById("container");

function drag(ev) {
    container.classList.add('drag')
}

function nodrag(ev) {
    container.classList.remove('drag')
}

;['dragenter', 'dragover'].forEach(ev => {
    container.addEventListener(ev, drag, false)
})

;['dragleave', 'drop'].forEach(ev => {
    container.addEventListener(ev, nodrag, false)
})

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
        return
    }
    else {
        console.log('[FILE FETCH]: Success');
        console.log('Redirecting...');
        window.location.replace("/src/vis/vis.html", "_blank");
    }
}


