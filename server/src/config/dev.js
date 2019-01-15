module.exports = {
  "secret":"AfricaSofia",
  "permissionLevels": {
    "NORMAL_USER": 4,
    "PAID_USER": 2,
    "ADMIN": 1
  },
  "options": {
    "issuer":  "LigaSport",
    "subject":  "informaticalvarez1@gmail.com",
    "audience":  "http://localhost:9000",
    "expiresIn":  "1h",
    "algorithm":  "RS256"
  }
}
