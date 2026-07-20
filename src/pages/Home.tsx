import { useState } from 'react'
import axios from 'axios'

export default function Home(){
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = async (e:any)=>{
    e.preventDefault()
    try{
      await axios.post('http://localhost:4000/api/contact', form)
      setSent(true)
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto py-24 px-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">We Don't Just Implement AI. We Redefine It.</h1>
              <p className="text-lg text-slate-300 mb-6">Every solution born from, optimized by, and continuously improved by artificial intelligence. 40–60% efficiency gains. 4–8 week deployment. No overhead.</p>
              <div className="space-x-3">
                <a href="#contact" className="inline-block bg-indigo-600 py-2 px-4 rounded">Start Your AI Journey</a>
                <a href="#services" className="inline-block border border-slate-600 py-2 px-4 rounded">Explore Services</a>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-slate-900/50 p-6 rounded">
                <div className="text-sm text-slate-400">Limited Onboarding Slots</div>
                <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>
                <p className="text-sm text-slate-300 mb-4">Join 200+ companies that have already deployed AI with Infusyx. Your discovery sprint is free.</p>
                <a href="#contact" className="block bg-indigo-600 py-2 text-center rounded">Book Free Discovery Sprint</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-6">AI Solutions for Every Layer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded">
            <h3 className="font-semibold mb-2">AI Consultancy</h3>
            <p className="text-sm text-slate-400">Strategic AI roadmaps tailored to your business objectives — from proof-of-concept to full enterprise deployment.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded">
            <h3 className="font-semibold mb-2">Machine Learning Dev</h3>
            <p className="text-sm text-slate-400">Custom ML models trained on your data: classification, prediction, NLP, computer vision, and recommendations.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded">
            <h3 className="font-semibold mb-2">Intelligent Lead Management</h3>
            <p className="text-sm text-slate-400">Capture, score, nurture, and convert leads automatically. Our AI qualifies prospects 24/7.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900/40 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Let's Build Something Intelligent</h2>
          <p className="text-sm text-slate-300 mb-6">Tell us about your business and goals. Our team will respond within 24 hours.</p>

          {sent ? (
            <div className="p-4 bg-green-600 rounded text-white">Thanks — we'll be in touch.</div>
          ) : (
            <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Full name" className="p-3 rounded bg-slate-800" />
              <input required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Work email" className="p-3 rounded bg-slate-800" />
              <input value={form.company} onChange={e=>setForm({...form, company:e.target.value})} placeholder="Company" className="p-3 rounded bg-slate-800 md:col-span-2" />
              <textarea required value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="What are you looking to automate?" className="p-3 rounded bg-slate-800 md:col-span-2 h-32" />
              <button type="submit" className="bg-indigo-600 py-3 px-5 rounded md:col-span-2">Send Message — It's Free</button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
