import Header from './Components/Header'
import Button from './Components/Button'
import RockClass from "./rock_classification.json"


function App() {
    return (
    <div className="App">
      <Header title='Rock y Quiz'/>
      
      {RockClass.rockclass.map((rock, i) => (
<p>{rock.rock_name}</p>
      ))}
            <div style={{ display: "flex", justifyContent:"flex-end", width: "100%"}}>
                <Button color='Red' text='Submit' />
            </div>
    </div>
  );
}

export default App;
