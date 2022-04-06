import { useEffect, useState } from 'react';
import Input from '../components/atoms/Input/Input';
import { fetchData } from '../utils';
import './Home.css';

type Chuck = {
  categories: string[],
  created_at: string,
  icon_url: string,
  value: string,
  updated_at: string,
  id: string,
  url: string
}
function Home() {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState<Chuck[]>([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (searchText.length > 2) {
      fetchData(`/jokes/search?query=${searchText}`).then(res=>{
        if (res.error) {
          alert(res.error.message)
        } else {
          setList(res.response.result)
          setTotal(res.response.total)
        }
      })
    }
  }, [searchText])
  return (
    <div className="Home">
      <header className="App-header">
        <Input 
          value={searchText} 
          type="string" 
          label='Inserisci almeno 3 caratteri' 
          placeholder='Inserisci almeno 3 caratteri' 
          onChangeText={setSearchText}
        />
        <div id="search-result-container">
          <label>Totale risultati: {total}</label>
          {list.map((chuck, index)=>{
            return (
              <blockquote key={`result-${chuck.id}`} className="joke-card">
                <span>{chuck.value}</span>
              </blockquote>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default Home;
