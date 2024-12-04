const url = 'http://localhost:8080/form-details'

const postToForm = async (data) => {

    try {
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }
    
    catch(e) {
        console.log('There was an error: ', e)
    }
}

const getFormDetails = async (id) => {

    try {

        if (id) {            
            const response = await fetch(`${url}/${id}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
    
            if (!response) {
                return ''
            }
    
            const data = await response.json();
            return data.username; 
        }

        return ''
    }

    catch(e) {
        console.log('There was an error: ', e)
    }

}

export { postToForm, getFormDetails }
