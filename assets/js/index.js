

const llamarDigimones = () => {

    return new Promise(( resolve , reject )=> {

        fetch("https://digimon-api.vercel.app/api/digimon")
            .then( (digimones)=> {
                if(!digimones.ok){
                    throw new Error("Error");
                }
                return digimones.json();
            })
            .then( ( data )=> {
                resolve(data);
            })
            .catch((error)=> {
                console.log(`El error es: ${error}`);
            })

    });
}

llamarDigimones()
    .then((digimones) => {
        digimones.map(( digimon ) => {
            console.log(digimon);
        });
    })
    .catch((error)=> {
        console.log(`El error está en : ${error}`);
    })