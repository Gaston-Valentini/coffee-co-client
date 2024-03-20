// Función que actualiza el estado de usuario y los errores para un formulario.
const handleInput = (e, user, setUser, setErrors) => {
    // Valida el campo de contraseña.
    const validatePassword = (password) => {
        if (!password) return "Password is required";
        if (password.length < 8) return "Password must be at least 8 characters long";
        if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
        if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
        if (!/\d/.test(password)) return "Password must contain at least one number";
        return "";
    };

    // Actualiza el estado de usuario con el atributo name con el value del elemento que ejecuta el evento.
    const { name, value } = e.target;
    setUser((prevState) => ({
        ...prevState,
        [name]: value,
    }));

    // Teniendo en cuenta el name del elemento, valida el value y en caso de haber un error actualiza el mensaje de error con el valor correspondiente a ese name.
    let errorMessage = "";
    switch (name) {
        case "name":
            errorMessage = value.trim() ? "" : "Name is required";
            break;
        case "surname":
            errorMessage = value.trim() ? "" : "Surname is required";
            break;
        case "email":
            const emailRegex = /\S+@\S+\.\S+/;
            errorMessage = value.trim() && emailRegex.test(value) ? "" : "Invalid email address";
            break;
        case "password":
            errorMessage = validatePassword(value);
            break;
        case "confirm":
            errorMessage = value === user.password ? "" : "Passwords do not match";
            break;
        case "phone":
            errorMessage = value.trim() ? "" : "Phone number is required";
            break;
        default:
            break;
    }

    // Actualiza el estado de errores (será una cadena vacía si no hay errores).
    setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage,
    }));
};

export { handleInput };
