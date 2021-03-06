import * as React from 'react';
import * as charts from 'react-chartjs-2';
import '../chart.css'



export default class CostChart extends React.Component<any,{}>{
    data : {};
        constructor(props : any){
            super(props)
            this.data = {
              labels: [{}, 'Falcon 9', 'Falcon Heavy', 'Big Falcon Heavy'],
              datasets: [
                {
                  label: 'Cost Per Launch (USD)',
                  backgroundColor: 'rgba(255,99,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                  hoverBorderColor: 'rgba(255,99,132,1)',
                  data: [6700000, 50000000, 90000000, 7000000]
              }
              ]
            };
          }
          render(){
            return(
                <div className="chart">
                    <h4>Cost</h4>
                <charts.Line data={this.data} width={50} height={25}  options={{maintainAspectRatio: false}} />
                </div>
            );
    };
}


