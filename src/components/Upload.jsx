// author : abde dylan p 

import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className='pb-16'>
        {/* title */}
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-extralight bg-gradient-to-r from-slate-900 to-slate-400 bg-clip-text text-transparent py-6 md:py-10'>Hapus Gambar Latar Belakang</h1>
         <div className='text-center mb-24'>
             <input type="file" name="" id="Upload2"  hidden/>
             <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-teal-600 to-teal-500 m-auto hover:scale-105 translate-all duration-700' htmlFor="Upload2">
                <img width={20} src={assets.upload_btn_icon} alt="" />
                <p className='text-white text-sm'>Upload you image</p>
             </label>
          </div>

    </div>
  )
}

export default Upload