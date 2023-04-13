import { getUsernamePassword, setAccessToken, getAccessToken, deleteAccessToken } from "./KeyStore";
import queryString from 'query-string'; // import the queryString class

import showAlert from "./components/Alert";
import { l } from "i18n-js";

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
        showAlert(e);
        return false;
    }

}

const getMachineSettingOptions = async () => {
    await requestAccessToken();
    const url = BASE_URL + "api/machines/";

    try {
        const rawResponse = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + await getAccessToken()
            }
        });
        
        const content = await rawResponse.json();

        if ("error" in content) {
            return null;
        } else{
            var i = 0;
            const output = content.results.map ( (result) => {
                return {
                    "label": result.machine_name + " (" + result.setting_name + ")",
                    "value": result.id,
                    "key": i++
                }});
            console.log(output);
            return output;
        }

    } catch (e) {
        showAlert(e);
        return false;
    }
};

const getFilterOptions = async () => {
    await requestAccessToken();
    const url = BASE_URL + "api/filters/";

    try {
        const rawResponse = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + await getAccessToken()
            }
        });
        
        const content = await rawResponse.json();

        if ("error" in content) {
            return null;
        } else{
            var i = 10000;
            const output = content.results.map ( (result) => {
                console.log(result)

                return {
                    "label": result.filter_name,
                    "value": result.id,
                    "key": i++
                }});
            console.log(output);
            return output;
        }

    } catch (e) {
        showAlert(e);
        return false;
    }

};


const createMachineSetting = async (name, setting, capacity, duration) => {
    await requestAccessToken();

    const url = BASE_URL + "api/machines/";
    const data = {
        "machine_name": name,
        "setting_name": setting,
        "water_capacity": capacity,
        "duration": duration,
    }
    
    try {
        
        const rawResponse = await fetch(url, {
            method: "POST",
            headers: {
                'Authorization': "Bearer " + await getAccessToken(),
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body: queryString.stringify(data)
        });
        
        const content = await rawResponse.json();

        if ("error" in content) {
            return false;
        } else{
            return true;
        }
    } catch (e) {
        showAlert(e);
        return false;
    }
}

const createRun = async (washingMachineSetting, filter) => {
    await requestAccessToken();

    const url = BASE_URL + "api/runs/";
    const data = {
        "setting": washingMachineSetting,
        "filter": filter,
    }
    
    try {
        
        const rawResponse = await fetch(url, {
            method: "POST",
            headers: {
                'Authorization': "Bearer " + await getAccessToken(),
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body: queryString.stringify(data)
        });
        
        const content = await rawResponse.json();

        if ("error" in content) {
            return false;
        } else{
            return true;
        }
    } catch (e) {
        showAlert(e);
        return false;
    }
}

const getRuns = async () => {
    await requestAccessToken();
    const url = BASE_URL + "api/runs/";

    try {
        const rawResponse = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + await getAccessToken()
            }
        });
        
        const content = await rawResponse.json();

        if ("error" in content) {
            return null;
        } else{
            const output = content.results.map ( (result) => {
                return [result.owner, result.setting, result.filter];
            });

            return output;
        }

    } catch (e) {
        showAlert(e);
        return false;
    }

}

const getFilterName = async (id) => {
    await requestAccessToken();
    const url = BASE_URL + "api/filters/" + id;

    try {
        const rawResponse = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + await getAccessToken()
            }
        });
        
        const content = await rawResponse.json();

        if ("error" in content) {
            return null;
        } else{
            return content.filter_name;
        }

    } catch (e) {
        showAlert(e);
        return false;
    }
}

const getUserName = async (id) => {
    await requestAccessToken();
    const url = BASE_URL + "api/users/" + id;

    try {
        const rawResponse = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + await getAccessToken()
            }
        });
        
        const content = await rawResponse.json();

        if ("error" in content) {
            return null;
        } else{
            return content.username;
        }

    } catch (e) {
        showAlert(e);
        return false;
    }
}

const getMachineSettingGallons = async (id) => {
    await requestAccessToken();
    const url = BASE_URL + "api/machines/" + id;

    try {
        const rawResponse = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + await getAccessToken()
            }
        });
        
        const content = await rawResponse.json();

        if ("error" in content) {
            return null;
        } else{
            return content.water_capacity;
        }

    } catch (e) {
        showAlert(e);
        return false;
    }
}


export { getMachineSettingGallons, getFilterName, getUserName, requestAccessToken, createNewUser, getFilterOptions, getMachineSettingOptions, createMachineSetting, createRun, getRuns };