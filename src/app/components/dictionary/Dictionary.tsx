"use client"
import React, { KeyboardEvent, useEffect } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Input} from "@nextui-org/react";
import styles from './dictionary.module.css'
import Dictionar from '../../../../public/dictionary.png'
import Image from "next/image";
import { useState } from 'react';
import {DictionaryApiResponseType, DictionaryData} from '../../../types/types'
// https://sozluk.gov.tr/gts_id?id=alt%C4%B1n

const Dictionary = () => {
  const [data, setData] = useState<DictionaryData | null>(null);
  const [word, setWord] = useState("");
  const link ="https://sozluk.gov.tr";

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

        const firstItem = result[0];

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
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);


  return (
    <div className={styles.container}>
    <Card className="max-w-[400px]">
    <CardHeader className="flex gap-3">
     <Image className={styles.img} src={Dictionar} alt=""/>  
       <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-x-4">
       <div className="flex flex-col gap-x-4 ">
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
    <div className={styles.cardbody}>
   
    <CardBody>
    
    {data !== null ?(
      data.meanings.map((item,index)=>{
        <p className={styles.title}>Anlamlar</p>
        return(  <div className={styles.content}>      
          <p><span className={styles.index}>{index+1})</span> {item.meaning}</p>          
          {
            item.examples &&(
              item.examples.map((example)=>{
                return(
                  <>                                 
                  {
                    example.yazar && (
                      example.yazar.map((author)=>{
                        return( 
                          <p>
                            <span className={styles.bold}>örn: </span> "{example.ornek}"<span className={styles.bold}> -{author.tam_adi}</span>                        
                        </p> 
                        )
                      }) 
                    )
                  }           
                  <br></br>
                  </>
                )               
              })
            )
          }
          </div>                  
        )
      })      
    )  :(
      <>
      
      </>
    )    
    }
    <Divider/>
    <div className={styles.content}>  
          {data !== null ?(
      data.idioms?.map((item,index)=>{
        <p className={styles.title}>Atasözleri</p>
        return(  <>      
          <p><span className={styles.index}>{index+1})</span> {item.madde}</p>          
          </>                  
        )
      })      
    )  :(
      <>
      
      </>
    )          
    }
    </div>        
          </CardBody>      
    </div>
    <Divider/>

    <CardFooter className={styles.footer}>
      <Link
        isExternal       
        showAnchorIcon
        href={link}
      >
        Detay için ziyaret edin.
      </Link>
    </CardFooter>
  </Card>
  </div>
  )
}

export default Dictionary
