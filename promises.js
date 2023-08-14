const getUser => username => {
    const API_URL = 'https://api.github.com/users/${username'};
    return fetch(API_URL).then((value:Response ) => value.json());


}

getUser( username: 'openai').then((val) => console.log(val));


const getUser = async username => {

    const API_URL = 'https://api.github.com/users/${username'};
    const response = await fetch(API_URL);
    const data response.json();
    return data;



}

getUser( username: 'openai').then((val) => console.log(val));



const getGithubUSer = username => {

    return new Promise(executor: (resolve, reject) => {
      fetch(input: 'https://api.github.com/users/${username}').then((response: Response) => response.json()).
          then(data => {
            if(data.message === "Not Found"){
                reject(reason: 'User Not Found');

            }
            else{
                resolve(data);
            }

          }).catch(err => reject(err));
          })

}
getGithubUSer(username: 'johndoe').then(val) => console.log(val)).catch((err) => console.log('error', err));



