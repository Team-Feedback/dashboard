// SELECT ALL CHARTS
let valueBoxes = document.querySelectorAll('.widget-value-box');

let allValueBoxes = [...valueBoxes];

// REUSABLE RESIZE OBSERVER
var ro = new ResizeObserver(entries => {
    for (let entry of entries) {
        const crWidth = entry.borderBoxSize[0].inlineSize;
        const crHeight = entry.borderBoxSize[0].blockSize;
        const widgetHeader = entry.target.children[0];
        const widgetBody = entry.target.children[1];
        const valueBox = widgetBody.children[0];

        let valueBoxYP = crWidth * .12;
        let size = Math.min(crWidth, crHeight);
        let scale = (crHeight - widgetHeader.clientHeight) / 188;

        valueBox.style.fontSize = `${scale}em`;

        // valueBox.style.paddingTop = `${valueBoxYP}px`;
        // valueBox.style.paddingBottom = `${valueBoxYP}px`;

        // console.log('MAX', valueBox)
        // console.log('WIDTH', crWidth)
        // console.log('HEIGHT', crHeight)

        //Update sizes
    }
});

allValueBoxes.forEach(e => {
    ro.observe(e);
});

