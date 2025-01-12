
import Banner from "./Components/Banner";
import Blog from "./Components/Blog";
import Gallery from "./Components/Gallery";
import Menu from "./Components/Menu";
import Open from "./Components/Open";
import Reserve from "./Components/Reserve";
import Sea from "./Components/Sea";
import Specialty from "./Components/Specialty";
import Us from "./Components/Us";
import Video from "./Components/Video";


export default function Home() {
  return (
   <div>
    <Banner/>
    <Reserve/>
    <Us/>
    <Video/>
    <Menu/>
    <Sea/>
    <Specialty/>
    <Gallery/>
    <Blog/>
    <Open/>
   </div>
  );
}
