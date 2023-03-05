fetch('https://fakerapi.it/api/v1/addresses?_quantity=5')
    .then(response =>response.json())
    .then(finalData => {
        if (finalData.code === 200){
            const ul = document.querySelector('ul');
            
            finalData.data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.street;
                ul.appendChild(li);
            })
        }
    })
    
