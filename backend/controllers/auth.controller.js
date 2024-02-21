export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, gender } = req.body;
    } catch (error) {

    }
};

export const login = (req, res) => {
    res.send("loginUser")
    console.log("loginUser");
};

export const logout = (req, res) => {
    console.log("logoutUser");
};

