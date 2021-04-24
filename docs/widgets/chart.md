# Chart

A generic component for displaying JSON data in a chart. Currently, only a line chart is supported.

## Configuration

An external source is defined in the URL field. It must return a valid JSON document.

The chart configuration uses object paths, see also [lodash get](https://lodash.com/docs/#get). 

Example:

```
{
  "result": {
    "entries": [
      {
        month: "January",
        visitors: { count: 12 }
      },
      {
        month: "February",
        visitors: { count: 47 }
      }
    ]
  }
}
```

- JSON path to the data array: `result.entries`
- JSON path for the key (x-axis): `month`
- JSON path for the value (y-axis): `visitors.count`
