let form = document.querySelector('form');

let inputs = document.querySelectorAll('input');

let main = document.querySelector('main');

let heading = document.querySelector('#heading');
heading.style.marginBottom = '16px';

form.addEventListener('submit', function (dtls) {
    dtls.preventDefault();
    for (let i = 0; i < inputs.length - 1; i++) {
        if (!inputs[i].value.trim()) {
            alert('Please fill all the detaileds!');
            return;
        }
    }
    heading.textContent = `You have just created`;
    heading.textContent += ` "${inputs[0].value}"`;

    let card = document.createElement('div');
    card.classList.add('card');
    
    let img = document.createElement('div');
    img.id = 'img';  
    let image = document.createElement('img');
    image.setAttribute('src', '');
    image.setAttribute('alt', 'image');
    
    
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    
    main.append(card);
    card.append(img, h1, h2, h3);
    img.append(image);

    h1.textContent = inputs[0].value;
    h2.textContent = inputs[1].value;
    h3.textContent = inputs[2].value;
    image.src = inputs[3].value;

    form.reset();

    // form.remove();
})