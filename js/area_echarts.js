
$(function () {
map();
function map() {
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('map_1'));

var data = [
    {name: '深圳', value: 33000},
    {name: '上海', value: 31000},
    {name: '辽宁', value: 6000},
    {name: '广东', value: 3000},
    {name: '天津', value: 2000},
    {name: '山东', value: 1500},
    {name: '安徽', value: 1000},
    {name: '浙江', value: 536},
    {name: '山西', value: 500},
    {name: '云南', value: 500},
    {name: '河南', value: 500},
    {name: '吉林', value: 500},
    {name: '内蒙古', value: 500},
    {name: '广西', value: 500},
    {name: '福建', value: 500},
    {name: '重庆', value: 500},
    {name: '四川', value: 500},
    {name: '江西', value: 500},
    {name: '河北', value: 500},
    {name: '贵州', value: 500}
];

var geoCoordMap = {
    '山东':[120.33,36.07],
    '西藏':[91.11,29.97],
    '广西':[108.33,22.84],
    '广东':[113.23,23.16],
    '深圳':[113.23,23.16],
    '山西':[112.53,37.87],
    '云南':[102.73,25.04],
    '海南':[110.35,20.02],
    '辽宁':[123.38,41.8],
    '宁夏':[106.27,38.47],
    '江西':[115.89,28.68],
    '吉林':[126.57,43.87],
    '青海':[101.74,36.56],
    '内蒙古':[111.65,40.82],
    '四川':[104.06,30.67],
    '广西':[110.28,25.29],
    '陕西':[108.95,34.27],
    '重庆':[106.54,29.59],
    '贵州':[106.71,26.57],
    '上海':[121.48,31.231],
    '北京':[116.46,39.92],
    '新疆':[87.68,43.77],
    '浙江':[120.19,28.26],
    '甘肃':[103.73,36.03],
    '天津':[117.2,39.13],
    '河南':[113.65,34.76],
    '黑龙江':[126.63,45.75],
    '河北':[114.48,38.03],
    '湖南':[113,28.21],
    '安徽':[117.27,31.86],
    '湖北':[114.31,30.52],
    '江苏':[118.78,32.04],
    '福建':[119.28,26.08]
};
// var convertData = function () {
//     var resList = [];
//     axios.get("/api/statistics/ProvinceAndTimes")
//         .then(response => {
//             var data = response.data.data.integerStatistics;
//             console.log(data);
//             const dataKeys = Object.keys(data);
//             for (var i = 0; i < dataKeys.length; i++) {
//                 var geoCoord = geoCoordMap[dataKeys[i]];
//                 if (geoCoord) {
//                     resList.push({
//                         name: dataKeys[i],
//                         value: geoCoord.concat(data[dataKeys[i]])
//                     });
//                 }
//             }
//         })
//     console.log(resList);
//     return resList;
// };
var returnData = function () {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
}

option = {
   // backgroundColor: '#404a59',
  /***  title: {
        text: '实时行驶车辆',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },**/
    tooltip : {
        trigger: 'item',
		formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
    },
  
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,//禁止其放大缩小
        itemStyle: {
            normal: {
                areaColor: '#4c60ff',
                borderColor: '#002097'
            },
            emphasis: {
                areaColor: '#293fff'
            }
        }
    },
    series : [
        {
            name: '消费金额',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: returnData(),
            // data: convertData(),
            symbolSize: function (val) {
                var sizeCalced = val[2] / 50
                var sizeLimit = 50
                return sizeCalced > sizeLimit ? sizeLimit : sizeCalced;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffeb7b'
                }
            }
        }
    ]
};
		

        axios.get("/api/statistics/ProvinceAndTimes")
            .then(response => {
                var resList = [];
                var data = response.data.data.integerStatistics;
                console.log(data);
                const dataKeys = Object.keys(data);
                for (var i = 0; i < dataKeys.length; i++) {
                    var geoCoord = geoCoordMap[dataKeys[i]];
                    if (geoCoord) {
                        resList.push({
                            name: dataKeys[i],
                            value: geoCoord.concat(data[dataKeys[i]])
                        });
                    }
                }
                option.series.data = resList;
                console.log(option)
                myChart.setOption(option);
                window.addEventListener("resize",function(){
                    myChart.resize();
                });
            })
        // myChart.setOption(option);
        // window.addEventListener("resize",function(){
        //     myChart.resize();
        // });
    }

})

