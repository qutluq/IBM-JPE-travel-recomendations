const teamMembersDiv = document.getElementById("about-team")
const defaultAvatar = "assets/img/maxim-berg-qqbXgiOAWyE-unsplash.jpg"

const submitForm = (event) => {
    event.preventDefault();
    console.log("Form submitted")

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const condition = document.getElementById('condition').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Condition:', condition);
    console.log('Message:', message);    
    
}