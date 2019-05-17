export default
{
  "variables": [
    {
      "name": "$primary-font-color",
      "value": "#fff",
      "compiledValue": "#fff"
    },
    {
      "name": "$primary-card-background",
      "value": "#f30d36",
      "compiledValue": "#f30d36"
    },
    {
      "name": "$secondary-card-background",
      "value": "#c30d16",
      "compiledValue": "#c30d16"
    },
    {
      "name": "$tertiary-card-background",
      "value": "#a30000",
      "compiledValue": "#a30000"
    },
    {
      "name": "$list-font-family",
      "value": "\"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif",
      "compiledValue": "Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif"
    },
    {
      "name": "$list-font-size",
      "value": "1.1em",
      "compiledValue": "1.1em"
    },
    {
      "name": "$card-width-px",
      "value": "400px",
      "compiledValue": "400px"
    },
    {
      "name": "$card-height-px",
      "value": "200px",
      "compiledValue": "200px"
    },
    {
      "name": "$card-padding-px",
      "value": "20px",
      "compiledValue": "20px"
    },
    {
      "name": "$card-width-with-padding-px",
      "value": "calc( #{$card-width-px} + #{$card-padding-px} + #{$card-padding-px} )",
      "compiledValue": "calc( 400px + 20px + 20px)"
    },
    {
      "name": "$card-height-with-padding-px",
      "value": "calc( #{$card-height-px} + #{$card-padding-px} + #{$card-padding-px} )",
      "compiledValue": "calc( 200px + 20px + 20px)"
    },
    {
      "name": "$card-slide-distance-px",
      "value": "calc( #{$card-width-with-padding-px} + 100px)",
      "compiledValue": "calc( calc( 400px + 20px + 20px) + 100px)"
    },
    {
      "name": "$card-in-box-width-px",
      "value": "200px",
      "compiledValue": "200px"
    },
    {
      "name": "$card-in-box-height-px",
      "value": "100px",
      "compiledValue": "100px"
    },
    {
      "name": "$magic-number-left-offset-px",
      "value": "53px",
      "compiledValue": "53px"
    },
    {
      "name": "$scene-width",
      "value": "768px",
      "compiledValue": "768px"
    },
    {
      "name": "$scene-height",
      "value": "512px",
      "compiledValue": "512px"
    },
    {
      "name": "$box-length",
      "value": "300",
      "compiledValue": "300"
    },
    {
      "name": "$box-width",
      "value": "244",
      "compiledValue": "244"
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
      "compiledValue": "244px"
    },
    {
      "name": "$box-height-px",
      "value": "#{$box-height}px",
      "compiledValue": "100px"
    },
    {
      "name": "$box-length-halved-px",
      "value": "calc((#{$box-length} / 2) * 1px)",
      "compiledValue": "calc((300 / 2) * 1px)"
    },
    {
      "name": "$box-width-halved-px",
      "value": "calc((#{$box-width} / 2) * 1px)",
      "compiledValue": "calc((244 / 2) * 1px)"
    },
    {
      "name": "$box-distance-from-pivot-px",
      "value": "calc((#{$box-height} / 2) * 1px)",
      "compiledValue": "calc((100 / 2) * 1px)"
    },
    {
      "name": "$box-front-translate-px",
      "value": "#{$box-distance-from-pivot-px}",
      "compiledValue": "calc((100 / 2) * 1px)"
    },
    {
      "name": "$box-back-translate-px",
      "value": "calc(#{$box-length-px} - #{$box-distance-from-pivot-px})",
      "compiledValue": "calc(300px - calc((100 / 2) * 1px))"
    },
    {
      "name": "$box-right-translate-px",
      "value": "calc(#{$box-width-px} - #{$box-distance-from-pivot-px})",
      "compiledValue": "calc(244px - calc((100 / 2) * 1px))"
    }
  ]
}