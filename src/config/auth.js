const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.adminSignIn = functions.https.onCall(async (data, context) => {
  const { username, password } = data;

  // Check if username and password match the expected values
  if (username === "admin" && password === "admin") {
    // Grant access to the admin panel
    return { accessGranted: true };
  } else {
    // Deny access
    throw new functions.https.HttpsError(
      "permission-denied",
      "Access denied. Invalid credentials."
    );
  }
});
