import Middle_Homepage from '../../components/Homepage Components/Middle/Middle_Homepage'
import HeroBanner from '../../components/Homepage Components/Hero Banner/HeroBanner'
import Program_List from '../../components/Homepage Components/Programs_list/Program_List'
import On_The_Horizon from '../../components/Homepage Components/On_The_Horizon/On_The_Horizon'
import What_Our_Learners_Say from '../../components/Homepage Components/What_Our_Learners_Say/What_Our_Learners_Say'
import Trusted_by_Industry_and_Academia from '../../components/Homepage Components/Trusted by Industry_and_Academia/Trusted_by_Industry_and_Academia'
const Homepage = () => {
  return (
    <div>
      <HeroBanner />
      <Middle_Homepage />
      <Program_List />
      <On_The_Horizon />
      <What_Our_Learners_Say/>
      <Trusted_by_Industry_and_Academia/>
    </div>
  )
}

export default Homepage