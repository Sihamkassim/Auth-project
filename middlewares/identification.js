const jwt = require("jsonwebtoken");

exports.identifier = (req, res, next) => {
  let token;

  // ✅ 1. Get token based on client type
  if (req.headers.client === "not-browser") {
    token = req.headers.authorization;
  } else {
    token = req.cookies["Authorization"];
  }

  // ✅ 2. Check if token exists
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Unauthorized: No token provided",
    });
  }

  try {
    // ✅ 3. Extract actual token part (remove "Bearer ")
    const userToken = token.split(" ")[1]; // not token.split('')[1]

    // ✅ 4. Verify token
    const jwtVerified = jwt.verify(userToken, process.env.TOKEN_SECRET);

    // ✅ 5. Attach verified user info to req
    if (jwtVerified) {
      req.user = jwtVerified;
      next();
    } else {
      throw new Error("Token verification failed");
    }
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or expired token",
    });
  }
};
