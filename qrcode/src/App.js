import Input from "./comp/Input";
import QRCode from "qrcode";
import "./App.css";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generator = () => {
    QRCode.toDataURL(url,{width:800, margin:1},
      (err, url) => {
      if (err) {
        console.error(err);
      } else {
        console.log(url);
        setQrCode(url);
      }
    });
  };

  return (
    <div className="App">
      <h1>Q.R. Code Generator</h1>
      <Input generate={generator} ug={url} ust={setUrl} />
      {qrCode && <>
      <img src={qrCode} />
      <a href = {qrCode} download ="qrcode.png">download</a>
      </>}
      <h2>Priyansh Jadon</h2>
    </div>
  );
}

export default App;
