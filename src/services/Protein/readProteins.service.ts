

export async function readProteinsService(){
    try {
        const request = await fetch('https://api.tech.redventures.com.br/proteins',{
            method:'GET',
            headers:{
                "x-api-key": "ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf"

            }
        })
        const response = await request.json()

        return response
        
        
    } catch (error) {
        console.log(error)
    }
    
}