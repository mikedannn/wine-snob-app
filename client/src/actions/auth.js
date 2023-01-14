const baseUrl = 'http://localhost:4000'

export const createAccount = async (details, handleCurrentUser) => {
    const resp = await fetch(baseUrl + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify(details), 
        withCredentials: true
    })
    const data = await resp.json();
    handleCurrentUser(data);
}

export const login = async (details, handleCurrentUser) => {
    const resp = await fetch(baseUrl + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        }, 
        body: JSON.stringify(details), 
        withCredentials: true
    })
    const data = await resp.json();
    handleCurrentUser(data);

}

export const getCurrentUser = async (handleCurrentUser) => {
    const resp = await fetch(baseUrl + '/current-user', {
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        }, 
        withCredentials: true 
    })
    const data = await resp.json();

    handleCurrentUser(data);

}

export const logout = async (e, logOutCurrentUser) => {
    e.preventDefault();

    await fetch(baseUrl + '/logout', {
        method: 'DELETE',
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        }, 
        withCredentials: true
    })
    logOutCurrentUser();
}

