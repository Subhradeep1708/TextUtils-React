import "./App.css";
import Naav from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Alert from "./components/Alert";
// import { Route } from "react-router";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {

    // DARK MODE CONTROL DONE FROM HERE
    const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
    const [mode2, setMode2] = useState('light'); //whether dark mode is enabled or not

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode enabled", "success")
            document.title = 'TextUtils - Dark Mode'
        } else {
            setMode('light')
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode enabled", "success")
        }
    }
    const toggleMode2 = () => {
        if (mode2 === 'light') {
            setMode2('red')
            document.body.style.backgroundColor = 'red';
            showAlert("Red mode enabled", "success")
        } else {
            setMode2('light')
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode enabled", "success")
        }
    }

    return (
        <>
            <Naav title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} />{/* This navbar can be reusable*/}
            <Alert alert={alert} />
            <TextForm heading="Enter your text below to Analyze" mode={mode} mode2={mode2} showAlert={showAlert} />
            {/* <About /> */}

        </>
    );
}

export default App;
