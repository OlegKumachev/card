import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './component/card'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card image="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?w=1380&t=st=1713530951~exp=1713531551~hmac=b377a8f235fbc0c40adcc7fd792c43ae5a60b41dd1ed827f7a35c038310e8535">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary">Go somewhere</button>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary">Go somewhere</button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
