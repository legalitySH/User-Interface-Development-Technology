const form = document.getElementById('form');
form.addEventListener('submit', handleFormSubmit);
let flag = true;

function getFormValues(event) {
    event.preventDefault();
    const second_name = form.querySelector('[name="second_name"]').value,
        name = form.querySelector('[name="name"]').value,
        email = form.querySelector('[name="mail"]').value,
        telephone = form.querySelector('[name="telephone"]').value,
        town = form.querySelector('[name="town"]').value,
        isStudent = form.querySelector('[name="isStudent"]').checked,
        about = form.querySelector('[name="about"]').value;

    const courseRadioButtons = form.querySelectorAll('[name="course"]');
    let selectedCourse;

    courseRadioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            selectedCourse = radioButton.value;
        }
    });

    const course = selectedCourse;

    return {
        second_name,
        name,
        email,
        telephone,
        town,
        isStudent,
        course,
        about
    };
}

function handleFormSubmit(event) {
    const values = getFormValues(event);
    console.log(values);

    second_name_validation(values.second_name);
    name_validation(values.name);
    email_validation(values.email);
    telephone_validation(values.telephone);
    about_validation(values.about);
    madal(values.town , values.course , values.isStudent)
}

function second_name_validation(second_name) {
    if(second_name.length === 0)
    {
        let element = document.querySelector(".err_10");
        element.style.display = "block";
        flag = false;
        return;
    }
    else
    {
        let element = document.querySelector(".err_10");
        element.style.display = "none";
        flag = true;
    }

    if(second_name.length > 20)
    {
        let element = document.querySelector(".err_1");
        element.style.display = "block";
        flag = false;
        return;
    }
    else
    {
        let element = document.querySelector(".err_1");
        element.style.display = "none";
        flag = true;
    }


    if(!(/^[A-Za-zА-Яа-яЁё\s]+$/.test(second_name)))
    {
        let element = document.querySelector(".err_2");
        element.style.display = "block";
        flag = false;
        return;
    }
    else
    {
        let element = document.querySelector(".err_2");
        element.style.display = "none";
        flag = true;
    }

}

function name_validation(name) {
    if(name.length === 0)
    {
        let element = document.querySelector(".err_11");
        element.style.display = "block";
        flag = false;
        return;
    }
    else
    {
        let element = document.querySelector(".err_11");
        element.style.display = "none";
        flag = true;
    }

    if(name.length > 20)
    {
        let element = document.querySelector(".err_3");
        element.style.display = "block";
        flag = false;
        return;
    }
    else
    {
        let element = document.querySelector(".err_3");
        element.style.display = "none";
        flag = true;
    }


    if(!(/^[A-Za-zА-Яа-яЁё\s]+$/.test(name)))
    {
        let element = document.querySelector(".err_4");
        element.style.display = "block";
        flag = false;
        return;
    }
    else
    {
        let element = document.querySelector(".err_4");
        element.style.display = "none";
        flag = true;
    }
}

function email_validation(email){

    if(email.length === 0)
    {
        let element = document.querySelector(".err_12");
        element.style.display = "block";
        flag = false;
        return;
    }
    else
    {
        let element = document.querySelector(".err_12");
        element.style.display = "none";
        flag = true;
    }

    if(email.includes(' '))
    {
        let element = document.querySelector(".err_5");
        element.style.display = "block";
        flag = false;
        return;
    }
    else
    {
        let element = document.querySelector(".err_5");
        element.style.display = "none";
        flag = true;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

    const [username, domain] = email.split('@');
    const [domainName, domainExtension] = domain.split('.');

    if (!emailRegex.test(email) || domainExtension.length < 2 || domainExtension.length > 3 || domain < 2 || domain > 5) {
        let element = document.querySelector(".err_6");
        element.style.display = "block";
        flag = false;
        return;
    } else {
        let element = document.querySelector(".err_6");
        element.style.display = "none";
        flag = true;
    }


}

function telephone_validation(phone){
    if(phone.length === 0)
    {
        let element = document.querySelector(".err_13");
        element.style.display = "block";
        flag = false;
        return;
    }
    else {
        let element = document.querySelector(".err_13");
        element.style.display = "none";
        flag = true;
    }

        const phoneRegex = /^[0-9()+-]+$/;

        if (!phoneRegex.test(phone)) {
            let element = document.querySelector(".err_7");
            element.style.display = "block";
            flag = false;
            return;
        }
        else {
            let element = document.querySelector(".err_7");
            element.style.display = "none";
            flag = true;
        }

    const phoneRegex_2 = /^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;

    if (!phoneRegex_2.test(phone)) {
        let element = document.querySelector(".err_8");
        element.style.display = "block";
        flag = false;
        return;
    } else {
        let element = document.querySelector(".err_8");
        element.style.display = "none";
        flag = true;
    }

}

function about_validation(about){
    if(about.length === 0)
    {
        let element = document.querySelector(".err_15");
        element.style.display = "block";
        flag = false;
        return;
    }
    else {
        let element = document.querySelector(".err_15");
        element.style.display = "none";
        flag = true;
    }

    if(about.length > 250)
    {
        let element = document.querySelector(".err_9");
        element.style.display = "block";
        flag = false;
        return;
    }
    else {
        let element = document.querySelector(".err_9");
        element.style.display = "none";
        flag = true;
    }
}

function madal(town , course , isStudent)
{
    let result;
    if(flag == true)
    {
        result = true;
    }
    if((town != "Минск" || course != 3 || isStudent == false) && flag == true)
    {
        result = confirm("Вы уверены в своем ответе?");
    }

    if(result == true)
    {
        let element = document.querySelector(".success");
        element.style.display = "block";
        return;
    }
    if(result == false){
        alert("Измените данные формы");
    }

}
