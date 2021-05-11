const id = document.querySelector('#id'),
    psword = document.querySelector('#pw'),
    loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id : id.value,
        psword : psword.value,
    };
    
    fetch('/login', {
        method : "POST",
        headers : {
            "Content-type" : "application/json",
        },
        body : JSON.stringify(req),
    }).then((res) => res.json()).then((res) => {
        if(res.success) {
            location.href="http://localhost:3000/Main";
        }
        else {
            alert(res.msg);
            location.reload();
        }
    });
}