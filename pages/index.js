import Home from "../layout/Home";
import AppBar from "../components/AppBar";

export default function Index() {
  return (
    <Home>
      <div style={{width: "100%", height: "20px"}}>
        <header className="container">
          <AppBar></AppBar>
        </header>
        
      </div>
    </Home>
  )
}
