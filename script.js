const lodingBtn = document.getElementsByClassName('btn');
var jokes = document.getElementById('jokes') ;


const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ccaa4dd712mshb5a81489b6c6bc8p1028b4jsnb9414f66402b',
		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	// const response =  fetch(url, options);
	var result ;
	
    function getJoke(){
        const response = fetch(url, options);
		response.then((value) =>{
			return value.json();
		}).then((value) =>{
			result = value[0].joke ;
			console.log(result);
        	jokes.innerHTML = result ;
		}).catch((error) =>{
			jokes.innerHTML = error ;
		})
		// const result = value[0].joke ;
	    // const result = await response.json();
	    
    }
	 
    getJoke() ;
    lodingBtn[0].addEventListener('click' , getJoke);
} catch (error) {
	console.error(error);
}