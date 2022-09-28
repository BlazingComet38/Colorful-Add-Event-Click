
function colorValueGenerator() {
    let randomNumber = Math.floor(Math.random() * 256) + 1;
    return randomNumber;
    };

    //Probably coded horribly wrong
    function compileColorValue() {
        let backGroundColor = `rgb(${colorValueGenerator()}, ${colorValueGenerator()}, ${colorValueGenerator()})`;
        return backGroundColor;
        //must ultimately return an acceptable string value of rgb(randomNumber1, randomNumber2, randomNumber3),
        //which can be plugged into body.style.backgroundColor
    }





    const body = document.body;
body.addEventListener('click', () => {
    body.style.backgroundColor = compileColorValue();
});
