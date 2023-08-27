import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const apiKey = "733b98bb3f76431c8df1bb90d5a7f079";

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=apple&from=2023-08-26&to=2023-08-26&sortBy=popularity&apiKey=${apiKey}`)
      .then(response => {
        setData(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

//   useEffect(() => {
//     const filtered = data.filter(item =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredData(filtered);
//   }, [searchQuery, data]);

  return (
    <div>
      <h1>API Data</h1>
      {/* <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      /> */}
      <ul>
        {data.map((item, index)=> (
            <>
            {console.log(item)}
          <li key={index}>{item.title}</li>
        </>
        ))}
      </ul>
    </div>
  );
}

export default Post;
