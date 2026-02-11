# Gallery for AnyMetrics App

[App Repository](https://github.com/hudishkin/AnyMetrics)

### Example

```json
[
  {
    "name": "Cryptocurrency",
    "tags": "crypto,coins,eth,bitcoin",
    "metrics": [
      {
        "id": "6dr1649a-e9fd-49a2-94e5-eaf5c646dd5a",
        "title": "Bitcoin",
        "measure": "Price, USD",
        "type": "json",
        "request": {
          "url": "https://rest.coincap.io/v3/assets/bitcoin",
          "headers": {},
          "method": "GET"
        },
        "formatter": {
          "fraction": 3,
          "format": "currency"
        },
        "rules": {
          "type": "none",
          "parseRules": "bitcoin.usd"
        },
        "website": "https://coingecko.com/",
        "author": "CoinGecko"
      }
    ]
  }
]
```