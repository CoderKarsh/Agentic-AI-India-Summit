import "./App.css";
import Home from "./pages/Home.jsx";

function App() {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/09b30ba1-0da3-4167-af4a-2c2b8efe817c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:5',message:'App component rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  return (
    <>
      <Home />
    </>
  );
}

export default App;
