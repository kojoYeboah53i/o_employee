const onBoardEmployer = document.querySelector('button.confirm');

//add class to button
// onBoardEmployer.classList.add('visible-none');
//style
// onBoardEmployer.style.display = 'none';


const getEmployee = async () => {
    
    alert('attempting to on board employee')
    
    const api_url = 'https://freedom-green.herokuapp.com/api'
    
    const res = await fetch(`${api_url}/onBoardEmployer`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ 
            firstname: 'Daniel',
            lastname: 'Appiah',
            email : 'danielappiah@melcomghana.com',
            companyName : 'Melcom Group of Companies',
            
        })
    }).then(res => console.log(res.json()))
    
    
}
onBoardEmployer.addEventListener('click', getEmployee);