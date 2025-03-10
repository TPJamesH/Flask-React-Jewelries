import login from '../api/login';

export default function useLogin(){
    async function submitUser(e, reloadUsersFunc, showNotification) {
        const email = e.email.value;
        const pass = e.password.value;
        const user = { email, pass };
        let response = await login(user);
        if (response.status == 200) {
            reloadUsersFunc();
        }
        else {
            showNotification(errorClass(response.status));

        }
    }
    
    return {
        // userFormRef,
        submitUser
    }
}

function errorClass(response) {
    var message = "";

    switch (response) {
        case 401:
            message = "The password is incorrect, "
            break;

        case 404:
            message = "The email does not exist, "
            break;

        default:
            message = "An unexpected error occured (empty input/network error), "
    }
    return message + "please try again"

}
