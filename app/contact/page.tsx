'use client'
import { useState } from 'react'

export default function ContactPage(){
  const [status, setStatus] = useState<string| null>(null)
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const res = await fetch('/api/contact', { method:'POST', body: form })
    if (res.ok) setStatus('Thanks! We will be in touch shortly.')
    else setStatus('Something went wrong. Please try again.')
    e.currentTarget.reset()
  }
  return (
    <main className="section">
      <div className="container" style={{maxWidth:720}}>
        <h1>Contact</h1>
        <form onSubmit={onSubmit} className="card">
          <label>Name<br/><input required name="name" style={{width:'100%', padding:'.6rem', borderRadius:8, border:'1px solid #ddd'}}/></label><br/>
          <label>Email<br/><input required type="email" name="email" style={{width:'100%', padding:'.6rem', borderRadius:8, border:'1px solid #ddd'}}/></label><br/>
          <label>Company<br/><input name="company" style={{width:'100%', padding:'.6rem', borderRadius:8, border:'1px solid #ddd'}}/></label><br/>
          <label>Message<br/><textarea required name="message" rows={5} style={{width:'100%', padding:'.6rem', borderRadius:8, border:'1px solid #ddd'}}/></label><br/>
          <button className="btn" type="submit">Send</button>
          {status && <div className="small" style={{marginTop:'.6rem'}}>{status}</div>}
        </form>
      </div>
    </main>
  )
}
