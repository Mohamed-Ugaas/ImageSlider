import React from 'react'
import {createRoot} from 'react-dom/client'
const root = document.getElementById("root")
import Header from './component/Header'
import ImageSlider from './component/ImageSlider'
import "./style.css"

createRoot(root).render(
 <div>
  <Header />
  <ImageSlider />
 </div>
)
