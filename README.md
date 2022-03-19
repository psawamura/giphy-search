# giphy-search
This app allows you to search for .gifs using GIPHY api (https://developers.giphy.com/docs/api#quick-start-guide). The search will output 10 gifs.

## How to use this repo
- Install dependencies with `npm i`
- In order for the GIPHY search to work you must have a `.env` file containing your own API key

```
REACT_APP_GIPHY_API_KEY=${YOUR API KEY HERE}
```

## Building and running with Docker
```
docker build -t psawamura/docker-react-dev -f Dockerfile.dev .
docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app psawamura/docker-react-dev

```
