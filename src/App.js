import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import "./App.css";




function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };



  const fetchData = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('url',searchTerm );
    
    const options = {
      method: 'POST',
      url: 'https://url-shortener-service.p.rapidapi.com/shorten',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '386309ccecmsh3152cea822ca657p174886jsn94602da94a23',
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
      },
      data: encodedParams,
    
    };

    try {
      const response = await axios.request(options);
      setSearchResults(response.data.result_url);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
   
   

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h2 className="text-4xl font-bold mb-4 text-center text-white">Enter Link Here</h2> {/* Main Site Title */}
      <div className="w-1/2 mb-4">
        <textarea
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Enter Your Text Here"
          className="w-full h-32 p-2 border rounded-md resize-none"
        ></textarea>
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4 sm:w-32 sm:mx-auto md:w-40 hover:bg-white-600" onClick={fetchData}>
  Submit
</button>
      <div className="w-1/2">
        <h2 className="text-xl font-semibold mb-2 text-white">Shortened Url:</h2>
        <textarea
          value={searchResults}
          placeholder="Output Appears Here"
          className="w-full h-96 p-2 border rounded-md resize-none"
        ></textarea>
      </div>
    </div>
  );
  
  
  
}

export default App;
