import Link from 'next/link'
import { listProperties } from '../lib/store'

export default function Home(){
  const props = listProperties()
  return (
    <div>
      <header className="container header">
        <div className="logo"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff"/></svg> RENTSPHERE</div>
        <nav>
          <Link href="/login"><a className="small">Log in</a></Link>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div style={{flex:1}}>
            <h1 className="headline">Find Your Perfect Home. Fast.</h1>
            <p className="small">High-quality listings and secure demo payments — Mpesa & MasterCard (demo).</p>
            <div className="search" style={{marginTop:16}}>
              <input className="input" placeholder="Anywhere" />
              <select className="input" style={{maxWidth:120}}>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
              <input className="input" placeholder="Price Range" />
              <button className="btn">Search</button>
            </div>
          </div>
          <div style={{width:480}}>
            <div className="card" style={{height:300, display:'flex', alignItems:'center', justifyContent:'center'}}>
              <img src="/demo/hero.jpg" alt="hero" style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:8}}/>
            </div>
          </div>
        </section>

        <h2 style={{marginTop:32}}>Featured Properties</h2>
        <div className="grid">
          {props.map(p => (
            <div key={p.id} className="card">
              <img src={p.images?.[0]||'/demo/placeholder.jpg'} className="property-img"/>
              <h3 style={{marginTop:10}}>{p.title}</h3>
              <div style={{fontWeight:700}}>{p.forRent ? `KSh ${p.price.toLocaleString()} / month` : `KSh ${p.price.toLocaleString()}`}</div>
              <div className="small">{p.city}</div>
            </div>
          ))}
        </div>

      </main>

      <footer className="footer container">
        RENTSPHERE — Demo platform • About • Support • Terms • Privacy
      </footer>
    </div>
  )
}
