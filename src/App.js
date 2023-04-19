import './App.css';
import { ProductCollection } from './components/ProductCollection';
import { RenderCard } from './components/RenderCard';

function App() {
  return (
    <>
    <ProductCollection/>
    <div class="container">
      <div class="row g-4">
        
        <RenderCard/>  
        
      </div>
    </div>
  </>
  );
}

export default App;
