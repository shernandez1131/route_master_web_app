import { loginUser } from "~/services/requests/login"

export const useAuthStore = defineStore('auth', () => {
    const user = ref({})
    async function login(email, password) {
        const data = await loginUser(email, password)
        if(data.error) throw data.error
        console.log(data)
        user.value = data
        return true
    }

    function validateForm(state){
        const errors = [];
        if (!state.email) errors.push({ path: "email", message: "Required" });
        else {
          const emailRegex = new RegExp(
            "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
          );
          if (!emailRegex.test(state.email))
            errors.push({ path: "email", message: "Correo invalido" });
        }
        if (!state.password) errors.push({ path: "password", message: "Required" });
        return errors;
    };
    return { user, login, validateForm }
})