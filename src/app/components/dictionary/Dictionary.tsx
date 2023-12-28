"use client"
import React, { KeyboardEvent, ReactElement, ReactNode, useEffect } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Input} from "@nextui-org/react";
import styles from './dictionary.module.css'
import Dictionar from '../../../../public/dictionary.png'
import Image from "next/image";
import { useState } from 'react';
import { Event } from "@material-ui/icons";
import {DictionaryApiResponseType, DictionaryData,Meaning} from '../../../types/types'
// https://sozluk.gov.tr/gts_id?id=alt%C4%B1n



const Dictionary = () => {
  const [data, setData] = useState<DictionaryData | null>(null);
  const [word, setWord] = useState("");

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      const response  = await fetch(`https://sozluk.gov.tr/gts_id?id=${word}`);

      if (response.ok) {
        const result: DictionaryApiResponseType[] = await response.json();

        // Assuming the API returns an array, take the first item for simplicity
        const firstItem = result[0];

        // Transform the API response into the structure you want to use
        const transformedData: DictionaryData = {
          word: firstItem.madde,
          meanings: firstItem.anlamlarListe.map((meaning) => ({
            meaning: meaning.anlam,
            examples: meaning.orneklerListe || [],
          })),
          idioms: firstItem.atasozu,
        };

        setData(transformedData);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array means it will run only once when the component mounts

  useEffect(() => {
    console.log(data);
  }, [data]); // Log data whenever it changes

  


  return (
    <Card className="max-w-[400px]">
    <CardHeader className="flex gap-3">
     <Image className={styles.img} src={Dictionar} alt=""/>  
       <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-x-4">
       <div className="flex flex-col gap-x-4 ">
        {/* <p className="text-md">NextUI</p> */}
        {/* <p className="text-small text-default-500">nextui.org</p> */}
      </div>
      <div className={styles.input}>
      <Input type="text" label="Sözlük" placeholder="Kelime ara" 
      onValueChange={(prev)=>{
        setWord(prev)
      }}
      onKeyDown={handleKeyPress}
      size="lg" 
      />
      </div>
        
        </div>
      
    </CardHeader>
    <Divider/>
    {data &&(
      data.meanings.map((item)=>{
        
        return(
          
          <CardBody>
          <p>Anlamlar</p>
          
          {item.meaning}
          
          <Divider/>
          <p>Atasözleri</p>
          </CardBody>
        )
      })
    )    
    }
    
    <Divider/>
    <CardFooter>
      <Link
        isExternal
        showAnchorIcon
        href="https://github.com/nextui-org/nextui"
      >
        Visit source code on GitHub.
      </Link>
    </CardFooter>
  </Card>
  )
}

export default Dictionary