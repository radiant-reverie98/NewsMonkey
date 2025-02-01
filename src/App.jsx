import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'


function App() {
  
  const [mode, setMode] = useState('primary');
  const toggleMode = ()=>{
    if(mode === 'primary'){
      let newMode = setMode()
      setMode('dark');
      document.body.style.backgroundColor = "black";
      //console.log(mode);
    }
    else{
      setMode('primary');

      document.body.style.backgroundColor = "white";
      //console.log(mode);
    }
    
    
    
  };
  {/*useEffect(()=>{
    console.log(mode)
  },[mode]);*/}
  
  
  

  return (
    <>
      <Navbar mode ={mode} toggleMode = {toggleMode} />
      <NewsBoard mode={mode}/>
    </>
  )
}

export default App
