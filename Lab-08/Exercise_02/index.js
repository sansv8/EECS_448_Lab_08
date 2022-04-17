//Goes to the next image
function nextImage()
{
    //Get the src of the image
    let src = window.document.querySelector('img').getAttribute('src');

    //Next, get the number of the image
    let imgNum = parseInt(src.charAt(3));

    //Next, increment the imgNum
    imgNum = imgNum + 1;

    //If imgNum is 6
    if(imgNum == 6)
    {
        //Set imgNum to be 1
        imgNum = 1;
    }

    //Next, create a new src
    let newSrc = 'img' + imgNum.toString() + '.jpg';

    //Set the src of image to be newSrc
    window.document.querySelector('img').setAttribute('src', newSrc);
}

//Goes the previous image
function previousImage()
{
    //Get the src of the image
    let src = window.document.querySelector('img').getAttribute('src');

    //Next, get the number of the image
    let imgNum = parseInt(src.charAt(3));

    //Next, decrement the imgNum
    imgNum = imgNum - 1;

    //If imgNum is 6
    if(imgNum == 0)
    {
        //Set imgNum to be 1
        imgNum = 5;
    }

    //Next, create a new src
    let newSrc = 'img' + imgNum.toString() + '.jpg';

    //Set the src of image to be newSrc
    window.document.querySelector('img').setAttribute('src', newSrc);
}