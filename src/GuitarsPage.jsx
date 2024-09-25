import { GuitarsIndex } from './GuitarsIndex';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { GuitarsNew } from './GuitarsNew';


export function GuitarsPage () { 
  const [ guitars, setGuitars] = useState([]);

  const guitarIndex = () => { 
    console.log('guitarIndex');
    axios.get('http://localhost:3000/guitars.json').then((response) => { 
      console.log(response.data);
      setGuitars(response.data);
    })
  }

  const guitarCreate = ( params, successCallback) => {
    console.log("guitarCreate", params);
    axios.post('http://localhost:3000/guitars.json', params).then((response) => {
      setGuitars([...guitars, response.data]);
      successCallback();
    });
  }

  useEffect( guitarIndex, [] );

  return (
    <main>
      <GuitarsIndex guitars={guitars}/>
      <GuitarsNew onCreate={guitarCreate}/>
    </main>
  );
}