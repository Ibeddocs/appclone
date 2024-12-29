import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
        {/* left side */}
        <div >
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
                Remove The <br className='max-md:hidden'/> <span className='bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent'> Background</span> From <br className='max-md:hidden' />Images For Free.
            </h1>
                <p className='my-6 text-[16px] text-slate-700'>Hapus latar belakang gambar secara gratis dan ganti dengan latar belakang lain sesuai dengan pilihan Anda. <br className='max-sm:hidden' />Tambahkan beragam grafik atau elemen seperti stiker, teks, bentuk, atau pernak-pernik dekoratif lainnya <br className='max-sm:hidden'/> untuk meningkatkan kualitas tampilan foto Anda.</p>
          <div>
             <input type="file" name="" id="Upload1"  hidden/>
             <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-teal-600 to-teal-500 m-auto hover:scale-105 translate-all duration-700' htmlFor="Upload1">
                <img width={20} src={assets.upload_btn_icon} alt="" />
                <p className='text-white text-sm'>Upload you image</p>
             </label>
          </div>
        </div>
        {/* right side */}
        <div className='w-full max-w-md'>
            <img src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header