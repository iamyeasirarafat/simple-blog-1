// user name password 
const userName = 'demo@email.com';
const pass = 'demo';

// account validation......
document.getElementById('sign-in').addEventListener('click', function(){
    const email = document.getElementById('email');
    const password = document.getElementById('password')
    if (email.value == userName && password.value == pass ) {
        const postSection = document.getElementById('post-section');
        postSection.classList.remove('d-none');
    }else{
        const wrong = document.getElementById('wrong');
        wrong.classList.remove('d-none');
        const postSection = document.getElementById('post-section');
        postSection.classList.add('d-none');
    }
})

// posting function 


 document.getElementById('post').addEventListener('click', function(){
    const heading = document.getElementById('heading');
    const slogan = document.getElementById('Slogan');
    const text = document.getElementById('textarea');
    const h2    = heading.value;
    
    const h4    = slogan.value;
    const p    = text.value;
     const div = document.createElement('div');
    
   div.classList.add('col-md-4');
      
//    div.appendChild(h2);
//      div.appendChild(h4);
//      div.appendChild(p); 
    
    div.innerHTML = `
    <h2>${h2}</h2>
    <h4>${h4}</h4>
    <p>${p}</p>
    `
     const blogParent = document.getElementById('blog-parent');
    blogParent.appendChild(div);
    heading.value = '';
    slogan.value = '';
    text.value = '';
 })