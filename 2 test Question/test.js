var nameInput = document.getElementById('name','email','phone','pass','pass','gender','courses');
document.querySelector('form.pure-form').addEventListener('submit',function(e){
    e.preventDefault();
    console.log(nameInput.value);
});