import React from 'react'
import RoadConstructionOne from './RoadConstructionOne'
import RoadConstructionTwo from './RoadConstructionTwo'
import RoadConstructionThree from './RoadConstructionThree'
import RoadConstructionFour from './RoadConstructionFour'
import InfrastructureDevelopmentOne from './InfrastructureDevelopmentOne'
import InfrastructureDevelopmentTwo from './InfrastructureDevelopmentTwo'
import InfrastructureDevelopmentThree from './InfrastructureDevelopmentThree'
import LandSiteDevelopmentOne from './LandSiteDevelopmentOne'
import LandSiteDevelopmentTwo from './LandSiteDevelopmentTwo'
import LandSiteDevelopmentThree from './LandSiteDevelopmentThree'
import LandSiteDevelopmentFour from './LandSiteDevelopmentFour'
const Equipments = () => {
  return (
    <div>
      <RoadConstructionOne/>
      <RoadConstructionTwo/>
      <RoadConstructionThree/>
      {/* <RoadConstructionFour/> */}
        <InfrastructureDevelopmentOne/> 
        <InfrastructureDevelopmentTwo/>
        <InfrastructureDevelopmentThree/>
        <LandSiteDevelopmentOne/>
        <LandSiteDevelopmentTwo/>
        <LandSiteDevelopmentThree/>
        <LandSiteDevelopmentFour/>
    </div>
  )
}

export default Equipments
