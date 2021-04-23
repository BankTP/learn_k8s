import logo from './logo.svg';
import './App.css';
import { useEffect, useState ,useCallback} from 'react'
import axios from 'axios'
import config from './config'

function App() {

  const [number, setNumber] = useState('')

  useEffect(() => {
    const randNumber = () => {
      axios.get(config.backend_url+'/random_number').then(res=>{
        setNumber(res.data.num)
      })
    }
    const interval = setInterval(randNumber, 1000)

    randNumber()

    return () => {
      clearInterval(interval)
    }
  }, [])

  const save = useCallback(()=>{
      axios.post(config.backend_url+'/save_number',{
        num: number
      }).then(res=>{
        alert("saved")
      })
  },[number])

  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{fontSize:40}}>
        {number}
        <div onClick={save}>Save</div>
      </div>
    </div>
  );
}

export default App;
