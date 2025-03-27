import { useState } from "react";

const data = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "George",
  "Helen",
  "Ivy",
  "Jack",
  "Karen",
  "Liam",
  "Molly",
  "Nathan",
  "Oliver",
  "Paul",
  "Quincy",
  "Rachel",
  "Steve",
  "Tom",
  "Uma",
  "Victor",
  "Wendy",
  "Xander",
  "Yara",
  "Zack",
];

export const AlphabetFilter = () => {
  const [filteredData, setFilteredData] = useState(data);

  // Function to filter the data based on the clicked letter
  const handleFilter = (letter) => {
    const filtered = data.filter((name) => name.startsWith(letter));
    setFilteredData(filtered);
  };

  return (
    <div>
      {/* Render alphabet buttons */}
      <div
        style={{
          display: "flex",
          justifyContent:"center",
          gap: "8px",
          marginBottom: "20px",
          background:"none"
      
        }}
      >
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <button
            key={letter}
            onClick={() => handleFilter(letter)}
            style={{
              padding: "10px 15px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Render filtered results */}
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((name, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                margin: "5px 0",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#fafafa",
              }}
            >
              {name}
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default AlphabetFilter;
