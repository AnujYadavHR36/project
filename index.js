document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const subject=document.getElementById('subject').value;
    const complaintmessage=document.getElementById('complaint').value;

    const responsemessage=document.getElementById('responsemessage');
    responsemessage.textContent= `ThankYou,${name}.Your complaint has been submittted successfully !`;
responsemessage.style.color='green';
document.getElementById('form').reset();  
}
);
console.log(responsemessage);