export default
{
  "variables": [
    {
      "name": "$box-length",
      "value": "300",
      "compiledValue": "300"
    },
    {
      "name": "$box-width",
      "value": "200",
      "compiledValue": "200"
    },
    {
      "name": "$box-height",
      "value": "100",
      "compiledValue": "100"
    },
    {
      "name": "$box-length-px",
      "value": "#{$box-length}px",
      "compiledValue": "300px"
    },
    {
      "name": "$box-width-px",
      "value": "#{$box-width}px",
      "compiledValue": "200px"
    },
    {
      "name": "$box-height-px",
      "value": "#{$box-height}px",
      "compiledValue": "100px"
    },
    {
      "name": "$box-length-halved-px",
      "value": "calc( ( #{$box-length} / 2 ) * 1px )",
      "compiledValue": "calc( ( 300 / 2 ) * 1px)"
    },
    {
      "name": "$box-width-halved-px",
      "value": "calc( ( #{$box-width} / 2 ) * 1px )",
      "compiledValue": "calc( ( 200 / 2 ) * 1px)"
    },
    {
      "name": "$box-distance-from-pivot-px",
      "value": "calc( ( #{$box-height} / 2) * 1px )",
      "compiledValue": "calc( ( 100 / 2) * 1px)"
    },
    {
      "name": "$box-front-translate-px",
      "value": "#{$box-distance-from-pivot-px}",
      "compiledValue": "calc( ( 100 / 2) * 1px)"
    },
    {
      "name": "$box-back-translate-px",
      "value": "calc( #{$box-distance-from-pivot-px} + #{$box-width-px} )",
      "compiledValue": "calc( calc( ( 100 / 2) * 1px) + 200px)"
    },
    {
      "name": "$box-right-translate-px",
      "value": "calc( #{$box-distance-from-pivot-px} + #{$box-height-px} )",
      "compiledValue": "calc( calc( ( 100 / 2) * 1px) + 100px)"
    }
  ]
}