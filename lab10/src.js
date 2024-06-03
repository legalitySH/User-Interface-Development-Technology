// Default thimble size  176 x 64
document.addEventListener("DOMContentLoaded", function() {
    const thimble = document.querySelector('.thimble');
    const thimbleWidth = getComputedStyle(thimble).width;

    document.documentElement.style.setProperty('--thimble-width', thimbleWidth);
});

const form = document.querySelector('form');

const heightInput = form.elements['height'];
const widthInput = form.elements['width'];
const diameterInput = form.elements['diameter'];

form.addEventListener('change' , FormChangeHandle);
const thimbles = document.querySelectorAll(".thimble");
const balls = document.querySelectorAll('.ball');



const btnUpdate = document.getElementById('btn-update');
btnUpdate.addEventListener('click' , () =>
{
    heightInput.value = 164;
    widthInput.value = 176;
    diameterInput.value = 64;
    document.querySelector('[name = "result"]').value = 0;

    thimbles.forEach((element) =>{
        element.style.width = widthInput.value + 'px';
        element.style.height = widthInput.value + 'px';
        element.style.diameter = widthInput.value + 'px';
    })

})




function FormChangeHandle(event)
{
    switch (event.target.name)
    {
        case 'width':
        {
            thimbles.forEach((element) => {
                console.log(widthInput.value);
                element.style.width = widthInput.value + "px";
                let height = getComputedStyle(document.querySelector('.thimble')).height;

                heightInput.value = height.replace('px' , '');

            });
            break;
        }
        case 'height':
        {
            console.log(heightInput.value);
            thimbles.forEach((element) => {
                element.style.height = heightInput.value + "px";
                let widthValue = getComputedStyle(document.querySelector('.thimble')).width;
                widthInput.value = widthValue.replace('px' , '');

            });
            break;
        }

        case 'diameter':
        {
            if(parseInt(diameterInput.value) < 0.6 * parseInt(widthInput.value))
            {
                balls.forEach((element) =>{
                    element.style.width = diameterInput.value + 'px';
                })
            }
            else
            {
                diameterInput.value = parseInt(diameterInput.value) - 1;
            }

        }
    }
}

thimbles.forEach((element)=>{
    element.addEventListener('click' , firstClickHandle);
});

function firstClickHandle(event)
{
    thimbles.forEach((element) =>
    {
        element.classList.add('upDownAnimationClass');

        setTimeout(function (){
           element.classList.remove('upDownAnimationClass');

        }, 3000);
    });

    thimbles.forEach((element)=>{
        element.removeEventListener('click' , firstClickHandle);
    })

    setTimeout(() => { startGame();} , 3000);

}


function startGame(){

    thimbles.forEach((element) => element.addEventListener('click' , choiceHandle));
}

function choiceHandle(event) {
    balls.forEach((element) => {
        element.style.display = 'none';
    });
    const random = Math.floor(Math.random() * 3) + 1;

    switch (random) {
        case 1:
            document.querySelector('.first').style.display = 'block';
            break;
        case 2:
            document.querySelector('.second').style.display = 'block';
            break;
        case 3:
            document.querySelector('.third').style.display = 'block';
            break;
    }
    const element = event.target;
    element.classList.add('upDownAnimationClass');

    setTimeout(() => {
        element.classList.remove('upDownAnimationClass');
    }, 3100);

        const neighborElement = element.nextElementSibling;
        console.log(neighborElement);
        if (neighborElement.style.display === 'block') {
            const resultField = document.querySelector('[name = "result"]');
            const resultValue = parseInt(resultField.value) + 3;
            resultField.value = resultValue.toString();

            const resultText = document.getElementById('resultText');

            resultText.innerText = '';
            resultText.innerText = 'Верно';
        }
        else {
            const resultField = document.querySelector('[name = "result"]');
            const resultValue = parseInt(resultField.value) - 1;
            resultField.value = resultValue.toString();

            const resultText = document.getElementById('resultText');

            const randomTextVal = Math.round(Math.random() * 3 % 3 + 1);

            resultText.innerText = '';
            resultText.innerText = 'Проиграл';
            }
        }


}


