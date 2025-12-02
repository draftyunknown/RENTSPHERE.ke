import { useState } from 'react'
import { addProperty } from '../lib/store'

export default function Upload(){
  const [form, setForm] = useState({ title:'', city:'Nairobi', price:'', forRent:true })
  const [saved, setSaved] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const p = {
      title: form.title || 'Untitled',
      city: form.city,
      price: Number(form.price) || 0,
      forRent: form.forRent,
      images: ['/demo/placeholder.jpg']
    }
    const created = addProperty(p)
    setSaved(created)
    // simple redirect to dashboard
    setTimeout(()=> window.location.href = '/dashboard', 800)
  }

  return (
    <div className="container">
      <header className="header">
        <div className="logo">RENTSPHERE</div>
      </header>

      <main style={{maxWidth:720, margin:'24px auto'}}>
        <div className="card">
          <h2>List a Property</h2>
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <input className="input" placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
            </div>
            <div className="form-row">
              <input className="input" placeholder="City" value={form.city} onChange={e=>setForm({...form,city:e.target.value})}/>
              <input className="input" placeholder="Price (KES)" value={form.price} onChange={e=>setForm({...form,price:e.target.value})}/>
            </div>
            <div style={{marginBottom:12}}>
              <label style={{marginRight:12}}><input type="checkbox" checked={form.forRent} onChange={e=>setForm({...form,forRent:e.target.checked})}/> For Rent</label>
            </div>
            <div className="form-row">
              <button className="btn" type="submit">Save Listing (Demo)</button>
            </div>
          </form>
          {saved && <div style={{marginTop:12}}>Saved demo listing: {saved.title}</div>}
        </div>
      </main>
    </div>
  )
}
