import React from 'react'
import {RiSurgicalMaskLine} from 'react-icons/ri'
import {IoMdBicycle} from 'react-icons/io'
import BarChart from '../components/charts/BarChart'
import LineChart from '../components/charts/LineChart'
import { useState } from 'react'
import {UserData} from '../data/data'

const Home = ({chartData}) => {
  
  const [userData, setUserData] = useState({
    labels:UserData.map((data)=>data.year),
    datasets:[{
      label:"AQI",
      data:UserData.map((data)=>data.aqi)
    }]
  })

  const [aqi, setAqi] = useState(129)

  return (
    <div className='w-100% bg-slate-100'>
      <div className='p-10'>
          <h1 className='font-bold text-4xl mb-2'>Air quality near Vellore, Tamil Nadu</h1>
          <p className='mb-8 text-1.5xl'>Air quality index (AQI) and PM2.5 air pollution near Vellore, Tamil Nadu</p>
          
          <div className='flex gap-6 w-full'>
          
            <div className='flex flex-col'>
              
              <div className='p-5 w-80 h-80 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 drop-shadow-md mb-6'>    
                <div className='mt-30'>
                  <h2>Air Quality Map</h2>
                  <span>Vellore</span><br></br>
                  <button className='bg-green-500 text-white p-2 rounded-md'>View Map</button>
                </div>     
              </div>

              <div className='bg-white mb-6 w-80 rounded-md'>
                <div className='bg-blue-200 p-2 rounded-md'>
                  <h3 className='font-semibold text-blue-400'>Weather</h3>
                  <p>What is the current weather near Vellore, Tamil Nadu?</p>
                </div>
                <div className='flex flex-wrap leading-loose p-2'>
                  <span className='mr-24 w-10'>Weather</span><span>Clear Sky</span>
                  <div className='bg-slate-100 w-3/4 h-0.5'></div>
                  <span className='mr-24 w-10'>Temperature</span><span>19 C</span>
                  <div className='bg-slate-100 w-3/4 h-0.5'></div>
                  <span className='mr-24 w-10'>Humidity</span><span>74%</span>
                  <div className='bg-slate-100 w-3/4 h-0.5'></div>
                  <span className='mr-24 w-10'>Wind</span><span>3.9 km/hr</span>
                  <div className='bg-slate-100 w-3/4 h-0.5'></div>
                  <span className='mr-24 w-10 mb-5'>Pressure</span><span>1017 mbar</span>                 
                </div>             
              </div>

              <div className='bg-white w-80 p-6 mb-6'>
                <div>
                  <h2 className='text-blue-300'>LIVE AQI CITY RANKING</h2>
                  <p>Real-time India city ranking</p>
                  <div>
                    <div className='flex justify-between font-bold'>
                     <div>#</div><div>city</div><div>AQI</div>
                    </div>
                  <div className='flex justify-between'>
                    <div>1</div><div>Patna</div><div className='bg-red-800 px-1 rounded-md'>346</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>2</div><div>Noida</div><div className='bg-red-800 px-1 rounded-md'>320</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>3</div><div>Mangalore</div><div className='bg-red-600 px-1 rounded-md'>298</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>4</div><div>Bangalore</div><div className='bg-red-600 px-1 rounded-md'>276</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>5</div><div>Kanpur</div><div className='bg-red-600 px-1 rounded-md'>269</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>6</div><div>Lucknow</div><div className='bg-red-600 px-1 rounded-md'>224</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>7</div><div>Mumbai</div><div className='bg-red-600 px-1 rounded-md'>208</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>8</div><div>Kolkata</div><div className='bg-red-600 px-1 rounded-md'>201</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>9</div><div>Bhopal</div><div className='bg-red-400 px-1 rounded-md'>189</div>
                  </div>
                  <div className='flex justify-between'>
                    <div>10</div><div>Indore</div><div className='bg-red-400 px-1 rounded-md'>178</div>
                  </div>
                </div>
              </div>
             </div> 

             <div className='bg-white p-6'>
              <h2>Comparative exposure with Vellore</h2>
              <div>
                   <LineChart chartData={userData}/> 
              </div>
             </div>

            </div>

          <div className='flex flex-col'>
              
              <div className='w-full rounded-md bg-white drop-shadow-xl mb-6'>
                <div className='bg-orange-300 h-32 rounded-md'>
                    <div className='p-5 flex'>
                      <div className='p-4 bg-orange-500 mr-5 text-white'>
                          <p>AQI</p><p className='text-3xl'>{aqi}</p>
                      </div>
                      <div className='text-orange-800 font-bold text-3xl'>Unhealthy For Sensitive Groups</div>
                    </div>        
                </div>
                <div className='p-4'>
                <p>What is the current air quality near Vellore, Tamil Nadu?</p>
                <table className='border-2 border-slate-600'>
                   <tr className='border-b-2 border-slate-400'>
                      <th className='p-2 border-r-2'>Air pollution level</th>
                      <th className='p-2 border-r-2'>Air quality index</th>
                      <th className='p-2'>Main pollutant</th>
                   </tr>
                   <tr>
                      <td className='p-2 border-r-2'>Unhealthy for Sensitive Groups</td>
                      <td className='p-2 border-r-2'>129 US AQI</td>
                      <td className='p-2'>PM2.5</td>
                   </tr>
                </table>
                </div>
                <div className='p-4'>
                  <span className='mr-36 text-slate-500'>Pollutants</span>
                  <span className='text-slate-500'>Concentration</span>
                  <div className='flex'>
                      <p>PM2.5</p>
                      <div className='w-60 bg-orange-300 h-2 mt-2 ml-36 rounded-md'>
                          <div className='w-40 bg-orange-700 h-2 rounded-md'></div>
                      </div>
                  </div>
                  <div className='flex'>
                      <p className='mr-2'>O3</p>
                      <div className='w-60 bg-green-300 h-2 mt-2 ml-40 rounded-md'>
                          <div className='w-40 bg-green-700 h-2 rounded-md'></div>
                      </div>
                  </div>
                </div> 
                <div className='mt-4 p-4'>
                  <p className='text-blue-400 mb-2'>Health recommendations</p>
                  <p className='mb-4'>How to protect from air pollution in Vellore</p>
                  <div className='flex flex-wrap'>
                    <div className='flex w-80'>
                      <div><RiSurgicalMaskLine size={32}/></div>
                      <div className='ml-4 mr-8'>Sensitive groups should wear a mask outdoors</div>
                    </div>
                    <div className='flex w-80'>
                      <div><RiSurgicalMaskLine size={32}/></div>
                      <div className='ml-4'>Sensitive groups should wear a mask outdoors</div>
                    </div>
                    <div className='flex w-80'>
                      <div><RiSurgicalMaskLine size={32}/></div>
                      <div className='ml-4 mr-8'>Sensitive groups should wear a mask outdoors</div>
                    </div>
                    <div className='flex w-80'>
                      <div><IoMdBicycle size={32}/></div>
                      <div className='ml-4'>Sensitive groups should wear a mask outdoors</div>
                    </div>
                  </div>
                </div>   
              </div>

              <div className='bg-white w-full p-6 rounded-md drop-shadow-xl'>
                  <h2>Historical</h2>
                  <p>Historic air quality graph: Vellore, Tamil Nadu</p>   
                  <div className='w-full'>
                    <BarChart chartData={userData}/>
                  </div>         
              </div>
          
          </div>        
        </div>
          
      </div>
    </div>
  )
}

export default Home