import './App.css';
import { useState } from 'react';
import { Text } from './Text.js';

function App() {
    const [showText, setshowText] = useState(false);

    return (
        <div className='App'>
            <button
                onClick={() => {
                    setshowText(!showText);
                }}
            >
                Generate Cat Fact 
            </button>

            {showText && <Text />}
        </div>
    );
}

export default App;
