import axios from "axios";

const register = async (body) => {
    try {
        return await axios.post("http://localhost:4000/auth/register", body);
    } catch (error) {
        return error;
    }
};

const login = async (body) => {
    try {
        return await axios.post("http://localhost:4000/auth/login", body);
    } catch (error) {
        return error;
    }
};

const updateUser = async (token, id, body) => {
    try {
        return await axios.put(
            "http://localhost:4000/user/updateUser",
            { id, ...body },
            {
                headers: {
                    Authorization: token,
                },
            }
        );
    } catch (error) {
        return error;
    }
};

export { register, login, updateUser };
