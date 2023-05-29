import React, { useEffect, useState } from 'react'
//usestate used to track states
//useeffect is used to render API's after fetching or loading
const Activitys = () => {
  const [posts, setPosts] = useState([]);//usestate having initial value as null array
  const fetchData = () => {
    //fetch is used to fetch data from external source like url etc.
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()//after fetch data from url it return data as json format
      }).then((data) => {
        setPosts(data) //after that we have the data in json format we are ready to use and track the states also
      })
  }
  useEffect(() => {
    fetchData();//used to render data after loading
  }, []);
  return (
    <div className='flex-col my-10'>
      <h1 className='text-5xl font-bold text-gray-800 text-center my-10'>Nos <span className='text-blue-600'>Activités</span></h1>
      {
        posts.length > 0 && (
          //flex is used to organize data in horizontal way
          <div className='flex justify-center items-center '>
            {/* grid is used in flex to separate as blocks */ }
            <div className='grid ml:grid-cols-4 grid-cols-1 gap-5 '>
{
  posts.map((post)=>{})
}
            </div>
          </div>
        )
      }
    </div>

  );
};

export default Activitys