import { useState } from "react";

export default function NotForm() {
  const [baslik, setBaslik] = useState("");
  const [hata,setHata]=useState()
  const [aciklama, setaciklama] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const not = { baslik, aciklama };
    
    const response=await fetch('/api/notlar',{
        method:'POST',
        body:JSON.stringify(not),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const json=await response.json()
    console.log(json)
    if(!response.ok){
        setHata(json.hata)
    }
    if(response.ok){
        setHata(null)
        setBaslik('')
        setaciklama('')
        console.log('yeni bir not eklendi',json)
    }

  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>yeni bir not ekleyiniz!!</h3>
      <div className="create-group">
        <div>
          <label>Not Başlık:</label>
          <input
            type="text"
            value={baslik}
            onChange={(e) => setBaslik(e.target.value)}
          />
        </div>
        <div>
          <label>Not Açıklama:</label>
          <input
            type="text"
            value={aciklama}
            onChange={(e) => setaciklama(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Ekle</button>
      {hata && <div className="error">{hata}</div>}
    </form>
  );
}
