// ไฟล์ main.jsx เป็นจุดเริ่มต้นของแอปพลิเคชัน React
// ทำหน้าที่ดึง Component หลัก (App) มาแสดงผลบนหน้าเว็บ (ในไฟล์ index.html)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // นำเข้าไฟล์ CSS เพื่อให้สไตล์ทำงาน
import App from './App.jsx' // นำเข้า Component หลักของเว็บไซต์

// สั่งให้ React วาด (render) หน้าตาของ App ลงในตำแหน่งที่มี id เป็น 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
