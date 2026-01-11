import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// #region agent log
fetch('http://127.0.0.1:7242/ingest/09b30ba1-0da3-4167-af4a-2c2b8efe817c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:8',message:'main.jsx executed',data:{hasRoot:!!document.getElementById('root')},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
// #endregion
const rootElement = document.getElementById('root');
// #region agent log
fetch('http://127.0.0.1:7242/ingest/09b30ba1-0da3-4167-af4a-2c2b8efe817c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:12',message:'root element check',data:{rootElement:rootElement?rootElement.id:'null'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
// #endregion
if (!rootElement) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/09b30ba1-0da3-4167-af4a-2c2b8efe817c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:16',message:'ERROR: root element not found',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  throw new Error('Root element not found');
}
// #region agent log
fetch('http://127.0.0.1:7242/ingest/09b30ba1-0da3-4167-af4a-2c2b8efe817c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:22',message:'creating React root',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
// #endregion
try {
  const root = createRoot(rootElement);
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/09b30ba1-0da3-4167-af4a-2c2b8efe817c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:26',message:'React root created, starting render',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/09b30ba1-0da3-4167-af4a-2c2b8efe817c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:33',message:'render called successfully',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
} catch (error) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/09b30ba1-0da3-4167-af4a-2c2b8efe817c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:36',message:'ERROR in main.jsx render',data:{error:error.message,stack:error.stack},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
  throw error;
}
