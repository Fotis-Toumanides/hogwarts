import HousesList from "../components/HousesList";
import ShowHouse from "../components/ShowHouse";
import React, { useEffect, useState } from 'react'
import './index.css'


function App() {
  const [houses, setHouses] = useState([])
  const [searchHouse, setSearchHouse] = useState('')
  const [showContent, setShowContent] = useState()

  useEffect(() => {
    fetch('https://hogwarts-z7pb-6d6pgfgps-fotis-toumanidis-projects.vercel.app/')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setHouses(data)

      })
  }, [])

  function handleSearch(e) {
    let lowName
    if (e.keyCode === 13) {
      houses.map((house) => {
        lowName = house.name
        if (lowName.toLowerCase().match(searchHouse)) {
          setShowContent(house)
        }
      })
    }
  }
  return (
    <>
      {showContent && <ShowHouse house={showContent} />}
      <section className="h-screen my-8 flex flex-row gap-8">
        <div className="flex items-center mt-4 p-4 gap-2">
          <label className="text-md m-3">Search for a house</label>
          <input type="text" onChange={e => setSearchHouse(e.target.value)} value={searchHouse} onKeyDown={handleSearch} />
        </div>
        <HousesList houses={houses} />
      </section>
    </>
  );
}

export default App;
