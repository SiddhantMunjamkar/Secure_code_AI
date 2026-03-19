from authlib.integrations.starlette_client import OAuth
from src.config.setting import settings


oauth = OAuth()

oauth.register(
    name="github",
    client_id=settings.GITHUB_CLIENT_ID,
    client_secret=settings.GITHUB_CLIENT_SECRET,
    server_metadata_url="https://github.com/.well-known/oauth-authorization-server",
    client_kwargs={"scope": "user user:email repo"},
)
