"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './posts.module.css'
import Pagination from '@/components/(admin)/pagination/Pagination';
import Yasar1 from '../../../../../public/yasar-kemal.jpg'
import Yasar2 from '../../../../../public/yasar-kemal-2.jpg'
import Search from '@/components/(admin)/search/Search';

const PostPage = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const fetchedData = await res.json();
        setDatas(fetchedData);
      } catch (error) {
        // Handle errors here if needed
        console.error(error);
      }
    };

    getData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

 

    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder={"Search for a user..."} />
          <button className={styles.addButton}>Add New</button>
        </div>
        <div className={styles.table}>
  
          <table className={styles.table}>
            <thead>
              <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Content</td>
                <td>Action</td>
  
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  id ds8s4ad4a1d8
                </td>
                <td>
                  <span className={`${styles.role} ${styles.admin}`}>
                    Ustadır Arı
                  </span>
                </td>
                <td>
                lorem ipsum things
                </td>
                <td>
                  <div className={styles.buttons}>
  
                    <Link href="/">
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <Link href="/">
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </Link>
                  </div>
                </td>
  
              </tr>
              <tr>
                <td>
                  id 5s8dv4s8adfV
                </td>
                <td>
                  <span className={`${styles.role} ${styles.done}`}>
                    İnce Memed
                  </span>
                </td>
                <td className={styles.content}>
                  lorem ipsum thingslorem ipsum thingslorem ipsum thingslorem ipsum thingslorem ipsum thingslorem ipsum things
                  lorem ipsum thingslorem ipsum thingslorem ipsum thingslorem ipsum thingslorem ipsum things
                  lorem ipsum thingslorem ipsum thingslorem ipsum things
                </td>

                <td>
                  <div className={styles.buttons}>
  
                    <Link href="/">
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <Link href="/">
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </Link>
                  </div>
                </td>
              </tr>
  
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    );
};

export default PostPage;
