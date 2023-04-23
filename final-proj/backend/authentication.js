const jwt = require("jsonwebtoken");
const User = require("../backend/model/schema");

const authentication = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if(!token) {
            return res
                .status(401)
                .json({ msg: "NO auth token, access denied"});
        }
        
        const verified = jwt.verify(token , "passwordKey");
        if(!verified) {
            return res
                .status(401)
                .json({ msg: "Token verification failed, authorization denided"});
        }

        const user = await User.findById(verified.id);
        if (!user) {
            return res
                .status(401)
                .json({ msg: "User not found, access denied" });
        }

        req.user = user;
        next();

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = authentication;
