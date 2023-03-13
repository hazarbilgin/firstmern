import React from "react";
import { useEffect, useState } from "react";
import Notdetay from "../Components/Notdetay";
import NotForm from "../Components/NotForm";
export default function Home() {
  const [notlar, setNotlar] = useState();
  useEffect(() => {
    const fetchNotlar = async () => {
      const response = await fetch('/api/notlar');
      const json = await response.json();
      if (response.ok) {
        setNotlar(json);
      }
    };
    fetchNotlar();
  }, []);

  return (
    <div className="home">
      <div className="not-form">
        <NotForm/>
      </div>
      <div className="notlar">
        {notlar && notlar.map((not) =>(
          <Notdetay key={not._id} not={not}/>
        ))} 
      </div>
    </div>
  );
}
