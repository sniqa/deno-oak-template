# deno-oak-template

### Usage

#### Server
```js
  // Add a controller in jsonDispatch
  const dispatch = jsonDispatch({
	  test: async () => 'hello world',
  })
```
#### Client

```js
  const result = await fetch('http://localhost:8000/phl', {
    method: 'POST',
    headers: {
      "Content-Type", "application/json"
    },
    body: JSON.stringify({
        "test": {}
    }),
  })
  .then(res => res.json())
  .then(res => res)
  .catch(err => err)
  
  // result is
  //{
  //  "test": "hello world 1"
  //}
```
