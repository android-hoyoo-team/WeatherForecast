FusionCharts.ready(function(){
				var height = 300;
				var width = 500;
				var lineChart = new FusionCharts({
					"type":"msline",
					"renderAt":"chartContainer",
					"width": width,
					"height": height,
					"dataFormat": "json",
					"dataSource":{
					   "chart": {
						  "caption": "未来七天温度变化趋势(℃)",
						  "captionFontSize": "20",
						  "bgAlpha":"100",
						  "showValues":"1",
						  "paletteColors": "#F6E639,#92D4F7",
						  "bgcolor": "#5c8aa0",
						  //是否显示y轴刻度
						  "showYAxisValues":"0",
						  "showCanvasBorder": "0",
						  "usePlotGradientColor": "0",
						  "legendBorderAlpha": "0",
						  "legendShadow": "0",
						  "showAxisLines": "0",
						   "showYAxisLines": "0",
						  "showAlternateHGridColor": "0",
						  "divlineThickness": "2",
						  "divLineDashed": "0",
						  "divLineDashLen": "1",
						  "divLineGapLen": "1",
						  "yAxisMaxValue":"40",
						  "yAxisMinValue":"-10",
						  "numVDivLines":"7",
						  "divLineColor":"#5c8aa0",
						  "vdivLineColor":"#B2C7CF",
						  "showAlternateVGridColor":"0",
						  //画布背景
						  "canvasBgColor":"#5c8aa0",
						  "showLegend":"0",
						  "baseFontColor":"#FFFFFF",
						  "anchorRadius":"5",
						  "showToolTip":"1",
						  "numDivLines":"1"
					   },
					   "categories": [
						  {
								
							 "category": [
							 {},
								{
								   "label": "周日",
								},
								{
								   "label": "周一"
								},
								{
								   "label": "周二"
								},
								{
								   "label": "周三"
								},
								{
								   "label": "周四"
								},
								{
								   "label": "周五"
								},
								{
								   "label": "周六"
								},{}
								
							 ]
						  }
					   ],
					   "dataset": [
						  {
							 "seriesname": "Bakersfield Central",
							 "color":"#F6E639",
							 "valuePosition":"above",
						     "anchorBgColor":"#F6E639",
							 "valueFontColor":"#FF0000",
							 "data": [
								 {
								 "value": ""
								 },
								{
								   "value": ""
								},
								{
								   "value": "12"
								},
								{
								   "value": "16"
								},
								{
								   "value": "22"
								},
								{
								   "value": "19"
								},
								{
								   "value": "17"
								},
								{
								   "value": "21"
								},{
								"value": ""
								}
							 ]
						  },
						  {
							 "seriesname": "Los Angeles Topanga",
							 "color":"#92D4F7",
							 "valuePosition":"BELOW",
							 "anchorBgColor":"#92D4F7",
							 "data": [
								{
								   "value": ""
								},
								{
								   "value": "0"
								},
								{
								   "value": "-1"
								},
								{
								   "value": "3"
								},
								{
								   "value": "9"
								},
								{
								   "value": "1"
								},
								{
								   "value": "5"
								},
								{
								   "value": "7"
								},
								{
								   "value": ""
								},
							 ]
						  }
					   ]
					   
					}
				});
				lineChart.render();
			});