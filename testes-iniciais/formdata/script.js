const form=document.querySelector('.newForm');

let values = (event)=>{
    event.preventDefault();

    const data = new FormData(event.target);

    const user= data.get('user');
    const mail= data.get('mail');
    const message= data.get('message');

    console.log(`Name: ${user}, email: ${mail}, message: ${message}`);
}; 

form.addEventListener('submit', values);
