import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RiskTable from "./Table";

function RiskIndex() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRisks() {
      const response = await fetch("http://localhost:5100/api/risks");
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    }

    fetchRisks();
  }, []);

  if (isLoading) return null;

  return (
    <>
      <h1>Riesgos</h1>
      <p>
        <Link to="/">Crear Nuevo</Link>
      </p>

      <RiskTable data={data} />
    </>
  );
}

export default RiskIndex;
