import React from 'react';
import { BarChart} from 'react-native-svg-charts'

function CustomBarChart({chartData,chartDimensions}) {
    return(
        <BarChart 
            data={chartData} 
            style={{
                borderRadius: 8,
                width: chartDimensions.width,
                height: chartDimensions.height
            }}
            svg={{
                fill: 'rgba(175,220,139,0.7)'
            }}
        />
    )
    
}

export default CustomBarChart;