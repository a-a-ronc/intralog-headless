
"use client";
import { useState } from 'react';

export default function ContactPage(){
  const [status, setStatus] = useState<string | null>(null)
  
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    // Capture the element now — React nulls currentTarget after the await
    const formEl = e.currentTarget
    setStatus('Sending...')
    const form = new FormData(formEl)
    const res = await fetch('/api/contact', { method:'POST', body: form })
    if (res.ok) {
      setStatus('Thanks! We will be in touch shortly.')
      formEl.reset()
      // GA4 conversion event (no-op until the GA4 tag is configured)
      ;(window as any).gtag?.('event', 'generate_lead', { form: 'contact' })
    } else {
      setStatus('Something went wrong. Please try again.')
    }
  }
  
  return (
    <main className="section">
      <div className="container" style={{maxWidth:720}}>
        <h1>Contact</h1>
        <form onSubmit={onSubmit} className="card">
          <label htmlFor="name">Name<br/><input required id="name" name="name" style={{width:'100%', padding:'.6rem', borderRadius:8, border:'1px solid #ddd'}}/></label><br/>
          <label htmlFor="email">Email<br/><input required type="email" id="email" name="email" style={{width:'100%', padding:'.6rem', borderRadius:8, border:'1px solid #ddd'}}/></label><br/>
          <label htmlFor="company">Company<br/><input id="company" name="company" style={{width:'100%', padding:'.6rem', borderRadius:8, border:'1px solid #ddd'}}/></label><br/>
          <label htmlFor="message">Message<br/><textarea required id="message" name="message" rows={5} style={{width:'100%', padding:'.6rem', borderRadius:8, border:'1px solid #ddd'}}/></label><br/>
          <button className="btn" type="submit">Send</button>
          {status && <div className="small" style={{marginTop:'.6rem'}}>{status}</div>}
        </form>
      </div>
    </main>
  )
}
