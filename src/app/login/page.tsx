import React from 'react'
import styles from './page.module.css'
import { Input } from '@nextui-org/react'

const LoginPage = () => {
  const num = Math.random();
  console.log(num);
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.input}>
            <Input placeholder='Kullanıcı adı'/>
        </div>
        <div className={styles.input}>

        <Input placeholder='Şifre'
        type='text'
        variant='flat'
        radius='lg'/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage