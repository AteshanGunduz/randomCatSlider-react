import { useState, useEffect } from "react";
import Slider from "./Slider"
import { fetchCat } from "./FetchCat";
import { v4 as uuidv4 } from 'uuid'

const App = () => {
const [cat, setCat] = useState([]);
const [catUrls, setcatUrls] = useState([])
const [index, setIndex] = useState(0);

useEffect(() => {
  const data = async () => {
    const href = await fetchCat();
    setCat(href);
  };
  data();
}, []);

console.log(cat);

useEffect(() => {
  const urlArr = cat.map((cat) => {
    return { url: cat.url, id: uuidv4() };
  });
  setcatUrls(urlArr);
}, [cat]);

console.log(catUrls);


const handleLeftButton = () => {
  setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : catUrls.length - 1));
};

const handleRightButton = () => {
  setIndex((prevIndex) => (prevIndex < catUrls.length - 1 ? prevIndex + 1 : 0));
};


  return (
    <div>
      <div className="container">
         <Slider imageUrl={catUrls.length > 0 ? catUrls[index].url : ''} clickLeft={handleLeftButton} clickRight={handleRightButton}/>
      </div>
    </div>

  )
}
export default App