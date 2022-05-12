import * as React from 'react';
import * as _ from 'lodash';

function CoffeePriceByStore() {
  const key1 = 'coffee';
  const key2 = 'city';
  const key3 = 'volumeOz';
  const resultName = 'priceDollars';
  
  const data = [
    { coffee: 'cappuccino', city: 'Berkeley', volumeOz: 8, priceDollars: 4.5 },
    { coffee: 'pour over', city: 'Berkeley', volumeOz: 8, priceDollars: 4.5 },
    { coffee: 'espresso', city: 'Berkeley', volumeOz: 8, priceDollars: 4 },
    { coffee: 'latte', city: 'Berkeley', volumeOz: 8, priceDollars: 4 },
    { coffee: 'mocha', city: 'Berkeley', volumeOz: 8, priceDollars: 4.75 },
    { coffee: 'cappuccino', city: 'San Francisco', volumeOz: 6, priceDollars: 5 },
    { coffee: 'pour over', city: 'San Francisco', volumeOz: 8, priceDollars: 4.5 },
    { coffee: 'latte', city: 'San Francisco', volumeOz: 8, priceDollars: 5 },
    { coffee: 'latte', city: 'San Francisco', volumeOz: 12, priceDollars: 6 },
    { coffee: 'pour over', city: 'San Francisco', volumeOz: 10, priceDollars: 5.5 },
    { coffee: 'pour over', city: 'San Francisco', volumeOz: 12, priceDollars: 7 },
    { coffee: 'cappuccino', city: 'San Francisco', volumeOz: 8, priceDollars: 6 },
  ]

  const [resultState, setResultState] = React.useState(data[0][resultName])
  const [key1State, setKey1State] = React.useState(data[0][key1])
  const [key2State, setKey2State] = React.useState(data[0][key2])
  const [key3State, setKey3State] = React.useState(data[0][key3])

  const key1Values = _.uniq(data.map((row) => row[key1]))
  const key2Values = _.uniq(data.map((row) => row[key2]))
  const key3Values = _.uniq(data.map((row) => row[key3]))
  console.log(key3Values)

  const handleKey1Change = (e) => {
    setKey1State(e.target.value)
    const dataRow = _.find(data, (row) => {
      return row[key1] === e.target.value && row[key2] === key2State && row[key3] === key3State
    })
    const result = dataRow? dataRow[resultName] : null
    setResultState(result)
  }
  const handleKey2Change = (e) => {
    setKey2State(e.target.value)
    const dataRow = _.find(data, (row) => {
      return row[key2] === e.target.value && row[key1] === key1State && row[key3] === key3State
    })
    const result = dataRow? dataRow[resultName] : null
    setResultState(result)
  }
  const handleKey3Change = (e) => {
    const val = Number(e.target.value)
    setKey3State(val)
    const dataRow = _.find(data, (row) => {
      return row[key3] === val && row[key1] === key1State && row[key2] === key2State
    })
    const result = dataRow? dataRow[resultName] : null
    setResultState(result)
  }

  return (
    <span className="dynamicSentence">
        For coffee shops in  
        <select style={{margin: '5px'}} onChange={handleKey2Change}>
          {
            key2Values.map((val) => {
              return  <option key={val} value={val} selected={val === key2State}>{val}</option>
            })
          }
        </select>
       a
       <select style={{margin: '5px'}}  onChange={handleKey1Change}>
        {
          key1Values.map((val) => {
            return  <option selected={val === key1State} key={val} value={val}>{val}</option>
          })
        }
        </select> 
        measuring
        <select style={{margin: '5px'}}  onChange={handleKey3Change}>
        {
          key3Values.map((val) => {
            return  <option selected={val === key3State} key={val} value={val}>{val}</option>
          })
        }
        </select>oz
        will cost <span style={{fontWeight: 'bold'}} >{resultState || 'an unknown amount'}</span>.
    </span>
  );
}

export default CoffeePriceByStore;
