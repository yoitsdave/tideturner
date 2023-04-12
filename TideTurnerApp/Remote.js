import { getUsernamePassword, setAccessToken, getAccessToken, deleteAccessToken } from "./KeyStore";
import queryString from 'query-string'; // import the queryString class

import showAlert from "./components/Alert";

// NOTE: THIS IS TERRIBLE TERRIBLE TERRIBLE SECURITY PRACTICE! IDGAF!!!
const CLIENT_ID="qrZApfV8Ergh0qSyDxNzup3aGaa7d7LCSTH2NfE5";
const CLIENT_SECRET="secret";
const BASE_URL="http://localhost:8000/"


const requestAccessToken = async () => {
    const [username, password] = await getUsernamePassword();

    const url = BASE_URL + "auth/token/";
    const data = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "grant_type": "password",
        "username": username,
        "password": password,
    }
    
    try {
        
        const rawResponse = await fetch(url, {
            method: "POST",
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: queryString.stringify(data)
        });
        
        const content = await rawResponse.json();

        if ("error" in content) {
            return false;
        } else{
            setAccessToken(content["access_token"]);
            return true;
        }
    } catch (e) {
        showAlert(e);
    }


}

const createNewUser = async (username, password) => {
    const url = BASE_URL + "api/users/new_user/";
    const data = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "grant_type": "password",
        "username": username,
        "password": password,
    }
    
    try {
        
        const rawResponse = await fetch(url, {
            method: "POST",
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: queryString.stringify(data)
        });
        
        const content = await rawResponse.json();

        if ("error" in content) {
            return false;
        } else{
            return true;
        }
    } catch (e) {
        alert(e);
    }

}

export { requestAccessToken, createNewUser };