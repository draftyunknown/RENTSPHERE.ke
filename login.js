import Link from 'next/link'
export default function Login(){
  return (
    <div className="container">
      <header className="header">
        <div className="logo">RENTSPHERE</div>
      </header>
      <main style={{maxWidth:640, margin:'40px auto'}}>
        <div className="card">
          <h2>Log in or sign up</h2>
          <p className="small">This demo uses a mock login. Enter any email to continue.</p>
          <form onSubmit={(e)=>{ e.preventDefault(); window.location.href='/dashboard' }}>
            <div className="form-row">
              <input className="input" placeholder="Your email" />
            </div>
            <button className="btn" type="submit">Continue</button>
          </form>
          <p style={{marginTop:12}}>Or test as landlord: <Link href="/dashboard"><a>Continue to dashboard</a></Link></p>
        </div>
      </main>
    </div>
  )
}
