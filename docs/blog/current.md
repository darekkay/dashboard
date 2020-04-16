# 2020-xx-xx (1.2.x)

## Request caching

While the Coingecko API is very generous (100 requests/min with no registration), this project shouldn't abuse it. An obvious optimization is caching external requests on the server side.

I am using [axios](https://github.com/axios/axios), a popular HTTP client library, so it wasn't surprising to find multiple caching modules:

- [axios-extensions](https://github.com/kuitos/axios-extensions)
- [axios-cache-adapter](https://github.com/RasCarlito/axios-cache-adapter)
- [cachios](https://github.com/AlbinoDrought/cachios)

While evaluating I've created a list of requirements:

- Cache TTL (time to live) must be configurable per request (because of different update cycles per widget type).
- Parametrized caching (i.e., `/moo?v=1` and `/moo?v=2` should be cached separately).
- In-memory cache is sufficient for now, but using a scalable alternative should be technically possible.
- Store only relevant data instead of the whole axios response.
- Logging (to verify the functionality and debugging).
- TypeScript support.

No library fulfills all requirements, but `cachios` comes close. It doesn't provide logging, but it's possible to use axios interceptors to log the actual requests being sent. If the interceptor doesn't fire, the response is coming from the cache. Cachios also doesn't come with TypeScript support, but creating a custom definition file (at least for my use cases) wasn't difficult.

So here we are: now the API will only be called once per currency/cryptocurrency pair every 15 minutes.

In the future I might add client-side caching (i.e. caching _internal_ API requests), too, but for now it's not necessary.
