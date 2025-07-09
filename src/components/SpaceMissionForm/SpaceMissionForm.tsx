import { useState } from "react";
import Planet from "./Planet";


export const SpaceMissionForm = () => {
  const [fullName, setFullName] = useState("Fred Smith");
  const [planet, setPlanet] = useState("Mars");


//   enum Planet {
//     Mars = "Mars",
//     Venus = "Venus",
//     Jupiter = "Jupiter",
//     Saturn = "Saturn"
//   }



  return (
    <div>
      <input
        type="text"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />
      <select
        onChange={(event) => setPlanet(event.target.value)}
        value={planet}
      >
        <option value={Planet.MARS}>{Planet.MARS}</option>
        <option value={Planet.VENUS}>{Planet.VENUS}</option>
        <option value={Planet.JUPITER}>{Planet.JUPITER}</option>
        <option value={Planet.SATURN}>{Planet.SATURN}</option>
      </select>
      {fullName ? (
        <p>
          🧑‍🚀 Astronaut {fullName} is headed to {planet}!
        </p>
      ) : (
        <p>Please enter your name to begin your mission.</p>
      )}
    </div>
  );
};