import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"

export default function Home() {
  let name = 'park'
  return (
    <div>
      <h4 className="title">애플 Fresh</h4>
      <p className="title-sub">by dev { name }</p>
    </div>
  )
}

