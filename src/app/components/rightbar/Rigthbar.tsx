import React from 'react'
import styles from './rightbar.module.css'
import Link from 'next/link'
import Home from '../../../../public/home.png'
import Bookmark from '../../../../public/bookmark.png'
import Image from 'next/image'
const list =[
    {id:1,name:"Ana sayfa",url:"/",icon:{Home}},
    {id:2,name:"Kaydedilenler",url:"/bookmark",icon:{Bookmark}},
    {id:3,name:"About Me",url:"/about"},
    {id:4,name:"About Me",url:"/about"},
    {id:5,name:"About Me",url:"/about"},
    {id:6,name:"About Me",url:"/about"},
]
const Rigthbar = () => {
  return (
    <div className={styles.container}>
        {
            list.map((item)=>{
                return(
                    <div className={styles.listItem}>
                        <Link href={item.url}>
                           
                        {item.name}
                        </Link>
                    </div>
                )                
            })
        }   
    </div>
  )
}

export default Rigthbar
