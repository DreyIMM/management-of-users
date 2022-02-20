class httpRequest{
    
    static get(url, params = {}){
        
        return httpRequest.request('GET', url, params)

    }

    static delete(url, params = {}){
        
        return httpRequest.request('DELETE', url, params)

    }

    static put(url, params = {}){
        
        return httpRequest.request('PUT', url, params)

    }

    static post(url, params = {}){
        
        return httpRequest.request('POST', url, params)

    }

    static request(method, url, params = {}){
        // new Promise é o callback  
        return new Promise((resolve,reject)=>{

            let ajax = new XMLHttpRequest();

            ajax.open(method.toUpperCase(), url);

            ajax.onerror = event =>{
                reject(e);
            }

            ajax.onload = event =>{
                let obj = {};
        
                try{

                    obj = JSON.parse(ajax.responseText);

                }catch(e){

                    console.error(e);
                    reject(e);
                }
    
                resolve(obj);     
            }    
            ajax.send();

        })        
    }
}