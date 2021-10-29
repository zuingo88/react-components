import React from 'react';
import { useEffect, useState } from 'react';

//  CAHRT.JS
import {
  Bar,
  PolarArea
} from 'react-chartjs-2';

//  STYLE
import {
  ChartContainer,
  dataBar,
  optionsBar,
  dataPolar,
  rand,
  genDataDynamic,
  optionsDynamic
} from './Chart.style';

const Chart = () => {
  const [dataDynamic, setDataDynamic] = useState(genDataDynamic());

  useEffect(() => {
    const interval = setInterval(() => setDataDynamic(genDataDynamic()), 5000);

    return () => clearInterval(interval);
  }, []);
  // }

  // const Chart = () => {
  return (
    <div id='pageContainer' style={{ flexWrap: 'wrap' }}>
      <ChartContainer>

        <Bar className='chart' data={dataBar} options={optionsBar} />

        <PolarArea className='chart' data={dataPolar} />

        <Bar className='chart' data={dataDynamic} options={optionsDynamic} />
      </ChartContainer>
    </div>
  )
}

export default Chart
