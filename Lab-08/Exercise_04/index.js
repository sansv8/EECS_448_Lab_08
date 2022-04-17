//Update the border and background of paragraph
function updateParagraph()
{
    //Firstly, get the paragraph
    let paragrpah = window.document.querySelector('p');

    //Next, set get all the inputs from each textbox
    let inputs = window.document.querySelectorAll('input');

    //Next, create the new border color
    let borderColor = "#" + inputs[0].value + inputs[1].value + inputs[2].value;

    //Next, get the width of the border
    let width = inputs[3].value;

    //Next, get the background color
    let backgroundColor = "#" + inputs[4].value + inputs[5].value + inputs[6].value;

    //Next, set the border-color, border-width, and background color of paragraph
    paragrpah.style.borderColor = borderColor;
    paragrpah.style.borderWidth = width;
    paragrpah.style.backgroundColor = backgroundColor;
    
}