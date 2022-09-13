console.log('client side java script is loaded ')



const locationForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



locationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const location = search.value;
    //console.log(location)
    messageOne.textContent = 'Loading';
    messageTwo.textContent = '';

    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            //console.log(data.error);
            messageOne.textContent = data.error;
      
        }else{
            messageOne.textContent = 'Location: ' +data.location ;
            messageTwo.textContent =  'latitude: ' + data.latitude +
             ', longitude: ' + data.longitude;
            console.log(data.location);
            console.log(data.longitude);
            console.log(data.latitude);

        }
    })
})

})
