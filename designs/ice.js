/**
 * -----------------------------------------------------------------------------
 * @package     smartVISU
 * @author      Martin Gleiß
 * @copyright   2012
 * @license     GPL [http://www.gnu.de]
 * -----------------------------------------------------------------------------
 */

Highcharts.theme = {
	colors: ["#5595c6", "#416f92", "#2e4f68"],
	chart: {
		backgroundColor: null,
		plotBackgroundColor: null,
		plotShadow: false,
		plotBorderWidth: 0,
		style: {
			fontFamily: 'Dosis, sans-serif'
		}
	},
	title: {
		text: null,
		style: {
			color: '#000'
		}
	},
	subtitle: {
		style: {
			color: '#666'
		}
	},
	xAxis: {
		gridLineWidth: 1,
		gridLineColor: 'rgba(255, 255, 255, .1)',
		lineWidth: 2,
		lineColor: '#333',
		tickWidth: 2,
		tickColor: '#333',
		labels: {
			style: {
				color: '#666', fontSize: '14px'
			}
		},
		title: {
			align: 'high',
			style: {
				color: '#999', fontSize: '13px'
			}
		}
	},
	yAxis: {
		gridLineWidth: 1,
		gridLineColor: 'rgba(255, 255, 255, .1)',
		lineWidth: 2,
		lineColor: '#333',
		tickWidth: 1,
		tickColor: '#333',
		minTickInterval: 1,
		labels: {
			style: {
				color: '#666', fontSize: '14px'
			}
		},
		title: {
			style: {
				color: '#999', fontSize: '13px'
			}
		}
	},
	legend: {
		align: 'right',
		verticalAlign: 'top',
		floating: true,
		borderWidth: 0,
		itemStyle: {
			color: '#666'
		},
		itemHoverStyle: {
			color: '#333'
		},
		itemHiddenStyle: {
			color: '#ccc'
		}
	},
	labels: {
		style: {
			color: '#aaa'
		}
	},
	tooltip: {
		backgroundColor: {
			linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			stops: [
				[0, 'rgba(240, 240, 240, .8)'],
				[1, 'rgba(200, 200, 200, .8)']
			]
		},
		borderWidth: 0,
		style: {
			color: '#000'
		}
	},


	plotOptions: {
		series: {
			shadow: true,
			marker: {
				enabled: false
			},
			animation: {
				duration: 1500
			}
		},
		line: {
			dataLabels: {
				color: '#aaa'
			}
		},
		pie: {
			borderColor: null,
			borderWidth: 2
		},
		candlestick: {
			lineColor: 'white'
		}
	},

	// scroll charts
	rangeSelector: {
		buttonTheme: {
			fill: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
			stroke: '#000000',
			style: {
				color: '#CCC',
				fontWeight: 'bold'
			},
			states: {
				hover: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.4, '#BBB'],
							[0.6, '#888']
						]
					},
					stroke: '#000000',
					style: {
						color: 'white'
					}
				},
				select: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.1, '#000'],
							[0.3, '#333']
						]
					},
					stroke: '#000000',
					style: {
						color: 'yellow'
					}
				}
			}
		},
		inputStyle: {
			backgroundColor: '#333',
			color: 'silver'
		},
		labelStyle: {
			color: 'silver'
		}
	},

	global: {
		canvasToolsURL: 'vendor/plot.highcharts/modules/canvas-tools.js',
		useUTC: false
	},

	credits: {
		enabled: false
	}
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
