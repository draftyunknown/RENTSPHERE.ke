import Link from 'next/link'
import { listProperties } from '../lib/store'

export default function Dashboard(){
  const props = listProperties()
  return (
    <div className="container">
      <header className="header">
        <div className="logo">RENTSPHERE</div>
        <nav><Link href="/upload"><a className="small">Add Property</a></Link></nav>
      </header>

      <main style={{marginTop:24}}>
        <h2>Your Properties</h2>
        <div className="grid">
          {props.map(p => (
            <div key={p.id} className="card">
              <img src={p.images?.[0]||'/demo/placeholder.jpg'} className="property-img"/>
              <h3>{p.title}</h3>
              <div style={{fontWeight:700}}>{p.forRent ? `KSh ${p.price.toLocaleString()} / month` : `KSh ${p.price.toLocaleString()}`}</div>
              <div className="small">{p.city}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
