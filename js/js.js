
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_31();
echarts_32();
echarts_33();
echarts_5();
echarts_6();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        // var myChart = echarts.init(document.getElementById('echart1'));

    var option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: [],  // LABEL DATA!!!!!!!!!!!!!
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
                // rotate:50,
                show: false,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
        type: 'bar',
        data: [], // ACTUAL DATA!!!!!!!!!!!!!
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
		
	]
};
      
axios.get("/api/statistics/PunishedPartyAndMoney")
    .then(response => {
        var myChart = echarts.init(document.getElementById('echart1'));
        var data = response.data.data.doubleStatistics;
        var dataKeys = Object.keys(data);
        for (var i = 1; i < 8; ++i) {
            option.series[0].data.push(data[dataKeys[i]])
            option.xAxis[0].data.push(dataKeys[i])
        }
        // console.log(option);
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    })
        // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
        // window.addEventListener("resize",function(){
        //     myChart.resize();
        // });
}
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        var option = {
    //  backgroundColor: '#00265f',
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow'}
        },
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '4%',
        containLabel: true
        },
        xAxis: [{
            type: 'category',
                data: [],
            axisLine: {
                show: true,
            lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },
            
            axisTick: {
                show: false,
            },
            axisLabel:  {
                    interval: 0,
                // rotate:50,
                    show: false,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
            //formatter: '{value} %'
                show:true,
                textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [
            {
        
            type: 'bar',
            data: [],
            barWidth:'35%', //柱子宽度
        // barGap: 1, //柱子之间间距
            itemStyle: {
                normal: {
                    color:'#27d08a',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        }
            
        ]
        };

        axios.get("/api/statistics/PunishedPartyAndTimes")
            .then(response => {
                var data = response.data.data.integerStatistics;
                var dataKeys = Object.keys(data);
                for (var i = 0; i < 7; ++i) {
                    option.series[0].data.push(data[dataKeys[i]])
                    option.xAxis[0].data.push(dataKeys[i])
                }
                // console.log(option);
                myChart.setOption(option);
                window.addEventListener("resize",function(){
                    myChart.resize();
                });
            })
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

      var option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '2%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: [],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: false,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
	]
};

axios.get("/api/statistics/PunisherNameAndTimes")
    .then(response => {
        var data = response.data.data.integerStatistics;
        var dataKeys = Object.keys(data);
        for (var i = 2; i < 9; ++i) {
            option.series[0].data.push(data[dataKeys[i]])
            option.xAxis[0].data.push(dataKeys[i])
        }
        // console.log(option);
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    })
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

    var option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
		    legend: {
    top:'0%',
        data:['处罚金额'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: [] // AXIS LABELS !!!!!!!!!!!!!!!!!!

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '处罚金额',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				// color: '#0184d5',
                color: '#00d887',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				// color: '#0184d5',
                color: '#00d887',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [] // ACTUAL DATA !!!!!!!!!!!!!!

    }, 
// {
//         name: 'IOS',
//         type: 'line',
//         smooth: true,
//         symbol: 'circle',
//         symbolSize: 5,
//         showSymbol: false,
//         lineStyle: {
			
//             normal: {
// 				color: '#00d887',
//                 width: 2
//             }
//         },
//         areaStyle: {
//             normal: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                     offset: 0,
//                     color: 'rgba(0, 216, 135, 0.4)'
//                 }, {
//                     offset: 0.8,
//                     color: 'rgba(0, 216, 135, 0.1)'
//                 }], false),
//                 shadowColor: 'rgba(0, 0, 0, 0.1)',
//             }
//         },
// 			itemStyle: {
// 			normal: {
// 				color: '#00d887',
// 				borderColor: 'rgba(221, 220, 107, .1)',
// 				borderWidth: 12
// 			}
// 		},
//         data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]

    // }, 
	
		 ]

};

axios.get("/api/statistics/YearAndAverageMoney")
    .then(response => {
        var data = response.data.data.doubleStatistics;
        var dataKeys = Object.keys(data);
        for (var i = 1; i < dataKeys.length; ++i) {
            option.series[0].data.push(data[dataKeys[i]])
            option.xAxis[0].data.push(dataKeys[i])
        }
        // console.log(option);
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    })
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		//shadowBlur: 40,
		//shadowColor: 'rgba(40, 40, 40, 1)',
	}
};
var placeHolderStyle = {
	normal: {
		color: 'rgba(255,255,255,.05)',
		label: {show: false,},
		labelLine: {show: false}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
var option = {
	color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
	tooltip: {
		show: true,
		formatter: "{a} : {c} "
	},
	legend: {
		itemWidth: 10,
        itemHeight: 10,
		itemGap: 12,
		bottom: '3%',
		
		data: [],
		textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
	},
	
	series: [
		{
		name: '浙江',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['59%', '70%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 80,
			name: '01'
		}, {
			value: 20,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '上海',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['49%', '60%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 70,
			name: '02'
		}, {
			value: 30,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '广东',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['39%', '50%'],
		itemStyle: dataStyle,
		data: [{
			value: 65,
			name: '03'
		}, {
			value: 35,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '北京',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 60,
			name: '04'
		}, {
			value: 40,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '深圳',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['20%', '30%'],
		itemStyle: dataStyle,
		data: [{
			value: 50,
			name: '05'
		}, {
			value: 50,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, ]
};

axios.get("/api/statistics/PunishDateAndTimes")
    .then(response => {
        var data = response.data.data.integerStatistics;
        var dataKeys = Object.keys(data);
        var max = -1;
        for (var i = 0; i < 5; ++i) {
            max = data[dataKeys[i]] > max ? data[dataKeys[i]] : max;
            option.series[i].name = dataKeys[i];
            option.series[i].clockWise = true;
            option.series[i].data[0].value = data[dataKeys[i]];
            option.series[i].data[1].value = max - data[dataKeys[i]];
            option.legend.data.push(dataKeys[i]);
        }
        // console.log(option);
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    })
      
        // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
        // window.addEventListener("resize",function(){
        //     myChart.resize();
        // });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1')); 
option = {
   
// 	    title: [{
//         text: '年龄分布',
//         left: 'center',
//         textStyle: {
//             color: '#fff',
// 			fontSize:'16'
//         }

//     }],
//     tooltip: {
//         trigger: 'item',
//         formatter: "{a} <br/>{b}: {c} ({d}%)",
// position:function(p){   //其中p为当前鼠标的位置
//             return [p[0] + 10, p[1] - 10];
//         }
//     },
//     legend: {
        
// top:'70%',
//        itemWidth: 10,
//         itemHeight: 10,
//         data:['0岁以下','20-29岁','30-39岁','40-49岁','50岁以上'],
//                 textStyle: {
//             color: 'rgba(255,255,255,.5)',
// 			fontSize:'12',
//         }
//     },
//     series: [
//         {
//         	name:'年龄分布',
//             type:'pie',
// 			center: ['50%', '42%'],
//             radius: ['40%', '60%'],
//                   color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
//             label: {show:false},
// 			labelLine: {show:false},
//             data:[
//                 {value:1, name:'0岁以下'},
//                 {value:4, name:'20-29岁'},
//                 {value:2, name:'30-39岁'},
//                 {value:2, name:'40-49岁'},
//                 {value:1, name:'50岁以上'},
//             ]
//         }
//     ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
var option = {
   
	    title: [{
        text: '处罚类型构成',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['企业','个人'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'类型构成',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#065aab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:79075, name:'企业'},
                {value:3846, name:'个人'}
            ]
        }
    ]
};

// axios.get("/api/bankpunishment/statistics")
// .then(response => {
//     var data = response.data.data.punishmentTypeStastics;
//     console.log(data);
//     option.series[0].data[0].value = data["企业"];
//     option.series[0].data[1].value = data["个人"];
//     // console.log(option);
//     myChart.setOption(option);
//     window.addEventListener("resize",function(){
//         myChart.resize();
//     });
// })
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
option = {
// 	    title: [{
//         text: '兴趣分布',
//         left: 'center',
//         textStyle: {
//             color: '#fff',
// 			fontSize:'16'
//         }

//     }],
//     tooltip: {
//         trigger: 'item',
//         formatter: "{a} <br/>{b}: {c} ({d}%)",
// position:function(p){   //其中p为当前鼠标的位置
//             return [p[0] + 10, p[1] - 10];
//         }
//     },
//     legend: {
//     top:'70%',
//        itemWidth: 10,
//         itemHeight: 10,
//         data:['汽车','旅游','财经','教育','软件','其他'],
//                 textStyle: {
//             color: 'rgba(255,255,255,.5)',
// 			fontSize:'12',
//         }
//     },
//     series: [
//         {
//         	name:'兴趣分布',
//             type:'pie',
// 			center: ['50%', '42%'],
//             radius: ['40%', '60%'],
//                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
//             label: {show:false},
// 			labelLine: {show:false},
//             data:[
//                 {value:2, name:'汽车'},
//                 {value:3, name:'旅游'},
//                 {value:1, name:'财经'},
//                 {value:4, name:'教育'},
//                 {value:8, name:'软件'},
//                 {value:1, name:'其他'},
//             ]
//         }
//     ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
				
	
})



		
		
		


		









