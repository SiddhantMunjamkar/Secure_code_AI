from authlib.integrations.starlette_client import OAuth


oauth = OAuth()

oauth.register(
    name="github",
    client_id="YOUR_GITHUB_CLIENT_ID",
    client_secret="YOUR_GITHUB_CLIENT_SECRET",
    server_metadata_url="https://github.com/.well-known/oauth-authorization-server",
    client_kwargs={"scope": "user user:email"},
)
