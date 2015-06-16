FusionCharts.ready(function () {
			var csatGauge = new FusionCharts({
				"type": "angulargauge",
				"renderAt": "chart-container",
				"width": "100%",
				"height": "100%",
				"dataFormat": "json",
				"dataSource":{
					   "chart": {
						  "lowerLimit": "0",
						  "upperLimit": "500",
						  "theme": "fint"
					   },
					   "colorRange": {
						  "color": [
							 {
								"minValue": "0",
								"maxValue": "50",
								"code": "#01E401"
							 },
							 {
								"minValue": "50",
								"maxValue": "100",
								"code": "#FEFE00"
							 },
							 {
								"minValue": "100",
								"maxValue": "150",
								"code": "#FF7F00"
							 },
							 {
								"minValue": "150",
								"maxValue": "200",
								"code": "#FE0000"
							 },
							 {
								"minValue": "200",
								"maxValue": "300",
								"code": "#98004B"
							 },
							 {
								"minValue": "300",
								"maxValue": "500",
								"code": "#7E0123"
							 }
						  ]
					   },
					   "dials": {
						  "dial": [
							 {
								"value": "93"
							 }
						  ]
					   }
					}
			  });

			csatGauge.render();
		});