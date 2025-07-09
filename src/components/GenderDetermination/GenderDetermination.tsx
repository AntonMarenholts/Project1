import { useState } from "react";

interface GenderData {
  name: string;
  gender: "male" | "female" | null;
  probability: number;
  country: string;
  remaining_credits: number;
}

export default function GenderDetermination() {
  const [name, setName] = useState<string>("");
  const [genderData, setGenderData] = useState<GenderData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchGender() {
    if (!name.trim()) {
      setError("Please enter a name.");
      setGenderData(null);
      return;
    }

    setLoading(true);
    setError(null);
    setGenderData(null);

    try {
      const response = await fetch(
        `https://api.genderapi.io/api/?name=${name}`
      );
      if (!response.ok) {
        throw new Error(`Error network: ${response.status}`);
      }
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setGenderData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>Determining gender by name</h2>
      <input
        type="text"
        placeholder="Enter you name...."
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      <button onClick={fetchGender} disabled={loading}>
        {loading ? "Load..." : "Define"}
      </button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {genderData && (
        <div>
          <h3>Results:</h3>
          
            <li>
              <strong>Name:</strong> {genderData.name}
            </li>
            <li>
              <strong>Gender:</strong> {genderData.gender}
            </li>
            <li>
              <strong>Country:</strong> {genderData.country}
            </li>
            <li>
              <strong>Probability:</strong> {genderData.probability}%
            </li>
            <li>
              <strong>Remaining requests:</strong>{" "}
              {genderData.remaining_credits}
            </li>
          
        </div>
      )}
    </div>
  );
}
