

const obtenerDigimones = async() => {

    try{
        const response = await fetch("https://digimon-api.vercel.app/api/digimon");
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(`El error es: ${error}`);
    }
}

obtenerDigimones()
    .then((digimones) => {
        digimones.map(( digimon ) => {
            console.log(digimon);
        })
    })
    .catch((error)=> {
        console.log(error);
    })