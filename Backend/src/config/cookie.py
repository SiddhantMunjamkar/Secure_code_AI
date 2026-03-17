AUTH_COOKIE_NAME = "access_token"

AUTH_COOKIE_OPTIONS = {
    "httponly": True,
    "secure": False,  # Set to True in production with HTTPS
    "samesite": "lax",
    "max_age": 7 * 24 * 60 * 60,  # 7 days in seconds (not milliseconds)
}
