const jwt = require("jsonwebtoken");

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

        //since token was made out of the documanet id
        req.user = verified.id;
        next();

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = authentication;