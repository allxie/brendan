import * as React from 'react';
import * as _ from 'lodash';

function FirearmsInDollars() {
  
  const data = [
    { date: 1825, country: 'US', currencyConversion:79919.5 },
    { date: 1826, country: 'US', currencyConversion:56257 },
    { date: 1827, country: 'US', currencyConversion:90551 },
    { date: 1828, country: 'US', currencyConversion:19870 },
    { date: 1829, country: 'US', currencyConversion:47870.5 },
    { date: 1830, country: 'US', currencyConversion:27421.5 },
    { date: 1831, country: 'US', currencyConversion:23741 },
    { date: 1832, country: 'US', currencyConversion:24899.5 },
    { date: 1833, country: 'US', currencyConversion:40229.5 },
    { date: 1834, country: 'US', currencyConversion:61875.5 },
    { date: 1835, country: 'US', currencyConversion:47237.5 },
    { date: 1836, country: 'US', currencyConversion:39032.5 },
    { date: 1837, country: 'US', currencyConversion:48798 },
    { date: 1838, country: 'US', currencyConversion:12567 },
    { date: 1840, country: 'US', currencyConversion:20159.5 },
    { date: 1841, country: 'US', currencyConversion:22256 },
    { date: 1842, country: 'US', currencyConversion:17437.5 },
    { date: 1843, country: 'US', currencyConversion:7328 },
    { date: 1844, country: 'US', currencyConversion:15103.5 },
    { date: 1845, country: 'US', currencyConversion:10315.5 },
    { date: 1846, country: 'US', currencyConversion:10845.5 },
    { date: 1847, country: 'US', currencyConversion: null },
    { date: 1848, country: 'US', currencyConversion:2449.5 },
    { date: 1849, country: 'US', currencyConversion:6364 },
    { date: 1850, country: 'US', currencyConversion:9035 },
    { date: 1851, country: 'US', currencyConversion:16411.5 },
    { date: 1852, country: 'US', currencyConversion:6875 },
    { date: 1853, country: 'US', currencyConversion:10712 },
    { date: 1854, country: 'US', currencyConversion:15654.5 },
    { date: 1855, country: 'US', currencyConversion:23892 },
    { date: 1856, country: 'US', currencyConversion: null },
    { date: 1858, country: 'US', currencyConversion:20703.5 },
    { date: 1859, country: 'US', currencyConversion:6059 },
    { date: 1860, country: 'US', currencyConversion:6059 },
    { date: 1861, country: 'US', currencyConversion:14282.5 },
    { date: 1862, country: 'US', currencyConversion:90895.5 },
    { date: 1864, country: 'US', currencyConversion:678256 },
    { date: 1865, country: 'US', currencyConversion:236171 },
    { date: 1866, country: 'US', currencyConversion:76951 },
    { date: 1867, country: 'US', currencyConversion:880594 },
    { date: 1868, country: 'US', currencyConversion:2789434 },
    { date: 1869, country: 'US', currencyConversion:1983886 },
    { date: 1870, country: 'US', currencyConversion:5015732 },
    { date: 1871, country: 'US', currencyConversion:13463916 },
    { date: 1872, country: 'US', currencyConversion:1037117 },
    { date: 1873, country: 'US', currencyConversion:1181869 },
    { date: 1874, country: 'US', currencyConversion:2340138 },
    { date: 1875, country: 'US', currencyConversion:5560369 },
    { date: 1876, country: 'US', currencyConversion:3699834 },
    { date: 1877, country: 'US', currencyConversion:14416 },
    { date: 1878, country: 'US', currencyConversion:2101781 },
    { date: 1879, country: 'US', currencyConversion:2180498 },
    { date: 1880, country: 'US', currencyConversion:2286091 },
    { date: 1881, country: 'US', currencyConversion:1173253 },
    { date: 1882, country: 'US', currencyConversion:907957 },
    { date: 1883, country: 'US', currencyConversion:1131206 },
    { date: 1884, country: 'US', currencyConversion:1283990 },
    { date: 1885, country: 'US', currencyConversion:1737871 },
    { date: 1886, country: 'US', currencyConversion:1849329 },
    { date: 1887, country: 'US', currencyConversion:1304615 },
    { date: 1888, country: 'US', currencyConversion:615370 },
    { date: 1889, country: 'US', currencyConversion:835208 },
    { date: 1890, country: 'US', currencyConversion:804037 },
    { date: 1891, country: 'US', currencyConversion:914293 },
    { date: 1892, country: 'US', currencyConversion:949577 },
    { date: 1893, country: 'US', currencyConversion:750669 },
    { date: 1894, country: 'US', currencyConversion:631853 },
    { date: 1896, country: 'US', currencyConversion:778685 },
    { date: 1897, country: 'US', currencyConversion:651169 },
    { date: 1898, country: 'US', currencyConversion:686811 },
    { date: 1899, country: 'US', currencyConversion:700605 },
    { date: 1900, country: 'US', currencyConversion:1411489 },
    { date: 1901, country: 'US', currencyConversion:981580 },
    { date: 1902, country: 'US', currencyConversion:1012574 },
    { date: 1903, country: 'US', currencyConversion:1059486 },
    { date: 1904, country: 'US', currencyConversion:1529512 },
    { date: 1905, country: 'US', currencyConversion:1408546 },
    { date: 1906, country: 'US', currencyConversion:2041142 },
    { date: 1907, country: 'US', currencyConversion:2778034 },
    { date: 1908, country: 'US', currencyConversion:2670940 },
    { date: 1909, country: 'US', currencyConversion:1683987 },
    { date: 1910, country: 'US', currencyConversion:2383095 },
    { date: 1911, country: 'US', currencyConversion:2916667 },
    { date: 1912, country: 'US', currencyConversion: null },
    { date: 1913, country: 'US', currencyConversion: null },
    { date: 1922, country: 'US', currencyConversion: null },
    { date: 1812, country: 'UK', currencyConversion:16481.271750022 },
    { date: 1814, country: 'UK', currencyConversion:202449.36466172 },
    { date: 1815, country: 'UK', currencyConversion:688925.38174915 },
    { date: 1816, country: 'UK', currencyConversion:744370.640626731 },
    { date: 1817, country: 'UK', currencyConversion:471029.352909 },
    { date: 1818, country: 'UK', currencyConversion:438112.26563175 },
    { date: 1819, country: 'UK', currencyConversion:36757.843603415 },
    { date: 1820, country: 'UK', currencyConversion:355310.44825 },
    { date: 1823, country: 'UK', currencyConversion:403177.540008 },
    { date: 1824, country: 'UK', currencyConversion:475742.95827895 },
    { date: 1825, country: 'UK', currencyConversion:668122.92199195 },
    { date: 1826, country: 'UK', currencyConversion:818781.6661598 },
    { date: 1827, country: 'UK', currencyConversion:449293.455915749 },
    { date: 1828, country: 'UK', currencyConversion:443736.34965405 },
    { date: 1829, country: 'UK', currencyConversion:406374.05399271 },
    { date: 1830, country: 'UK', currencyConversion:346531.98266746 },
    { date: 1831, country: 'UK', currencyConversion:1149269.66525 },
    { date: 1832, country: 'UK', currencyConversion:466987.602 },
    { date: 1833, country: 'UK', currencyConversion:560550.0680625 },
    { date: 1834, country: 'UK', currencyConversion:585487.334658926 },
    { date: 1835, country: 'UK', currencyConversion:751177.11542475 },
    { date: 1836, country: 'UK', currencyConversion:993140.4903253 },
    { date: 1837, country: 'UK', currencyConversion:863892.1400085 },
    { date: 1838, country: 'UK', currencyConversion:577111.110304431 },
    { date: 1839, country: 'UK', currencyConversion:517747.6504917 },
    { date: 1840, country: 'UK', currencyConversion:517538.520825 },
    { date: 1841, country: 'UK', currencyConversion:540593.290125 },
    { date: 1842, country: 'UK', currencyConversion:566747.3 },
    { date: 1843, country: 'UK', currencyConversion:430242.66545035 },
    { date: 1844, country: 'UK', currencyConversion:572986.13 },
    { date: 1845, country: 'UK', currencyConversion:852498.689875 },
    { date: 1846, country: 'UK', currencyConversion:745806.881628 },
    { date: 1847, country: 'UK', currencyConversion:696549.8020035 },
    { date: 1848, country: 'UK', currencyConversion:1571489.10885409 },
    { date: 1849, country: 'UK', currencyConversion:1487724.363625 },
    { date: 1850, country: 'UK', currencyConversion:937008.21396645 },
    { date: 1851, country: 'UK', currencyConversion:1145365.715 },
    { date: 1852, country: 'UK', currencyConversion:1034460.05 },
    { date: 1853, country: 'UK', currencyConversion:1290527.05 },
    { date: 1854, country: 'UK', currencyConversion:1138389.46 },
    { date: 1855, country: 'UK', currencyConversion:994133.915 },
    { date: 1856, country: 'UK', currencyConversion:1202937.725 },
    { date: 1857, country: 'UK', currencyConversion:2556751.545 },
    { date: 1858, country: 'UK', currencyConversion:1941032.7 },
    { date: 1859, country: 'UK', currencyConversion:774793.65 },
    { date: 1860, country: 'UK', currencyConversion:1380044.825 },
    { date: 1861, country: 'UK', currencyConversion:3034718.475 },
    { date: 1862, country: 'UK', currencyConversion:5431224.04 },
    { date: 1863, country: 'UK', currencyConversion:6579114.18500001 },
    { date: 1864, country: 'UK', currencyConversion:3390108.98 },
    { date: 1865, country: 'UK', currencyConversion:2863118.94 },
    { date: 1866, country: 'UK', currencyConversion:2220259.08 },
    { date: 1867, country: 'UK', currencyConversion:2938973.125 },
    { date: 1868, country: 'UK', currencyConversion:4509411.55 },
    { date: 1869, country: 'UK', currencyConversion:2271687.76 },
    { date: 1870, country: 'UK', currencyConversion:5231324.14 },
    { date: 1871, country: 'UK', currencyConversion:5078669.41 },
    { date: 1872, country: 'UK', currencyConversion:2540467.44 },
    { date: 1873, country: 'UK', currencyConversion:2751011.05 },
    { date: 1874, country: 'UK', currencyConversion:2164982.38 },
    { date: 1875, country: 'UK', currencyConversion:2775760.69 },
    { date: 1876, country: 'UK', currencyConversion:1512399.77 },
    { date: 1877, country: 'UK', currencyConversion:1261026.1 },
    { date: 1878, country: 'UK', currencyConversion:1333221.865 },
    { date: 1879, country: 'UK', currencyConversion:1320267.225 },
    { date: 1880, country: 'UK', currencyConversion:1591881.675 },
    { date: 1881, country: 'UK', currencyConversion:1737977.045 },
    { date: 1882, country: 'UK', currencyConversion:2035980.525 },
    { date: 1883, country: 'UK', currencyConversion:2094853.6 },
    { date: 1884, country: 'UK', currencyConversion:2004433.575 },
    { date: 1885, country: 'UK', currencyConversion:1769403.12 },
    { date: 1886, country: 'UK', currencyConversion:1288231.21 },
    { date: 1887, country: 'UK', currencyConversion:1329692.475 },
    { date: 1888, country: 'UK', currencyConversion:1004914.065 },
    { date: 1889, country: 'UK', currencyConversion:1219826.435 },
    { date: 1890, country: 'UK', currencyConversion:446820.87 },
    { date: 1891, country: 'UK', currencyConversion:323081.57 },
    { date: 1892, country: 'UK', currencyConversion:161729.07 },
    { date: 1893, country: 'UK', currencyConversion:115393.28 },
    { date: 1894, country: 'UK', currencyConversion:104228.16 },
    { date: 1895, country: 'UK', currencyConversion:33044.175 },
    { date: 1896, country: 'UK', currencyConversion:89017.145 },
    { date: 1897, country: 'UK', currencyConversion:78890.73795 },
    { date: 1898, country: 'UK', currencyConversion:39556 },
    { date: 1899, country: 'UK', currencyConversion:38509 },
    { date: 1900, country: 'UK', currencyConversion:652881 },
    { date: 1901, country: 'UK', currencyConversion:730543.936666667 },
    { date: 1902, country: 'UK', currencyConversion:598753.363333334 },
    { date: 1903, country: 'UK', currencyConversion:620824.26 },
    { date: 1904, country: 'UK', currencyConversion:746789.583333333 },
    { date: 1905, country: 'UK', currencyConversion:904033.66 },
    { date: 1906, country: 'UK', currencyConversion:832912.333333333 },
    { date: 1907, country: 'UK', currencyConversion:702106.58 },
    { date: 1908, country: 'UK', currencyConversion:668948.26 },
    { date: 1909, country: 'UK', currencyConversion:423481.21 },
    { date: 1910, country: 'UK', currencyConversion:562036.92 },
    { date: 1911, country: 'UK', currencyConversion:4568675.38 },
    { date: 1912, country: 'UK', currencyConversion:683147.366666667 },
    { date: 1913, country: 'UK', currencyConversion:788126.71 },
    { date: 1914, country: 'UK', currencyConversion:535501.53 },
    { date: 1920, country: 'UK', currencyConversion: null },
    { date: 1922, country: 'UK', currencyConversion: null }
  ]

  const [firearmsState, setFirearmsState] = React.useState(data[0].currencyConversion)
  const [countryState, setCountryState] = React.useState(data[0].country)
  const [dateState, setDateState] = React.useState(data[0].date)

  const dates = _.uniq(data.map((row) => row.date))
  const countries = _.uniq(data.map((row) => row.country))

  const handleDateChange = (e) => {
    const date = Number(e.target.value)
    setDateState(date)
    const dataRow = _.find(data, (row) => {
      return row.date === date && row.country === countryState
    })

    setFirearmsState(dataRow.currencyConversion)
  }
  const handleCountryChange = (e) => {
    setCountryState(e.target.value)
    const dataRow = _.find(data, (row) => {
      return row.country === e.target.value && row.date === dateState
    })
    setFirearmsState(dataRow.currencyConversion)
  }

  return (
    <span className="dynamicSentence">
        In the year 
        <select style={{margin: '5px'}} onChange={handleDateChange}>
          {
            dates.map((year) => {
              return  <option key={year} value={year} selected={year === dateState}>{year}</option>
            })
          }
        </select>
       the country
       <select style={{margin: '5px'}}  onChange={handleCountryChange}>
        {
          countries.map((location) => {
            return  <option selected={location === countryState} key={location} value={location}>{location}</option>
          })
        }
        </select> 
        exported <span style={{fontWeight: 'bold'}} >{firearmsState || 'an unknown amount of'}</span> firearms.
    </span>
  );
}

export default FirearmsInDollars;
