import Wellcome from "../components/HomeSections/Wellcome";
import Info from "../components/HomeSections/Info";
import IntroFebethGames from "../components/HomeSections/IntroFebethGames";
import FebethActiveGame from "../components/HomeSections/FebethActiveGame";
import Availability from "../components/HomeSections/Availability";


function index() {
  return (
    <div>
      <Wellcome />
      <Info />
      <IntroFebethGames />
      <FebethActiveGame />
      <Availability />
    </div>
  );
}

export default index;
