
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export default function Home(){
  const [showIntro,setShowIntro]=useState(true)
  useEffect(()=>{ const t=setTimeout(()=>setShowIntro(false),8000); return ()=>clearTimeout(t)},[])
  if(showIntro) return (
    <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',background:'linear-gradient(180deg,#F7F5F2,#E8E3DA)'}}>
      <Head><title>Ojo Estratégico — Óptica Ojo de Dios</title></Head>
      <audio id="ambient" src="/ambient_vision_loop.mp3" autoPlay loop />
      <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{duration:1.2}} style={{textAlign:'center'}}>
        <img src="/logo.svg" alt="logo" style={{width:420,filter:'drop-shadow(0 6px 20px rgba(112,107,102,0.12))'}}/>
        <h1 style={{color:'#706B66'}}>OJO ESTRATÉGICO</h1>
        <p style={{color:'#A59E94'}}>Tu Visión, Nuestra Estrategia, Tu Éxito.</p>
        <div style={{marginTop:18,color:'#706B66'}}>
          <div>📋 Planifica con propósito.</div>
          <div>💬 Conecta con empatía.</div>
          <div>🌎 Crece con visión humana.</div>
        </div>
        <motion.button whileHover={{scale:1.02}} whileTap={{scale:0.98}} style={{marginTop:28,padding:'12px 20px',borderRadius:10,border:'none',background:'#D6C9B6',color:'#fff'}} onClick={()=>{window.location='/app'}}>
          Iniciar Estrategia
        </motion.button>
      </motion.div>
    </div>
  )
  else { if(typeof window!=='undefined') window.location='/app'; return null }
}
