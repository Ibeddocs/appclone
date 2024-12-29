import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'
import remove_bg_icon from './remove_bg_icon.svg'
import upload_btn_icon from './upload_btn_icon.svg'
import upload_icon from './upload_icon.svg'
import download_icon from './download_icon.svg'
import image_w_bg from './image_w_bg.png'
import image_wo_bg from './image_wo_bg.png'
import facebook_icon from './facebook_icon.svg'
import instagram from './instagram.svg'
import whatsapp from './whatsapp.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import credit_icon from './credit_icon.png'

export const assets = {
    logo,
    logo_icon,
    arrow_icon,
    header_img,
    remove_bg_icon,
    upload_icon,
    download_icon,
    image_w_bg,
    image_wo_bg,
    facebook_icon,
    whatsapp,
    instagram,
    upload_btn_icon,
    credit_icon
}

export const testimonialsData = [
    {
        id: 1,
        text: "Kami terkesan dengan AI dan menilainya sebagai pilihan terbaik di pasar.",
        author: "Richard Nelson",
        image: profile_img_1,
        jobTitle:'Web Developer'
    },
    {
        id: 2,
        text: "Kami terkesan dengan kemampuannya memperhitungkan gambar bulu rambut yang mengganggu tanpa membuat gambar terlihat bergerigi dan amatir.",
        author: "Donald Jackman",
        image: profile_img_2,
        jobTitle:'CEO'
    },
];

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]