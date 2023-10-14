import shoe4 from "../Assets/images/shoe4.svg"
import shoe5 from "../Assets/images/shoe5.svg"
import shoe6 from "../Assets/images/shoe6.svg"
import shoe7 from "../Assets/images/shoe7.svg"

import truckicon from "../Assets/icons/truck-fast.svg"
import support from "../Assets/icons/support.svg"
import shield from "../Assets/icons/shield-tick.svg"

import customerImg1 from "../Assets/images/customer1.jpeg"
import customerImg2 from "../Assets/images/customer2.svg"

import {FaFacebookF} from "react-icons/fa6"
import {FaTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa6"


export const NavLinks = [
    {href : "#home" , label : "Home"},
    {href : "#aboutus" , label : "About Us"},
    {href : "#products" , label : "Products"},
    {href : "#contactus" , label : "Contact Us"},
]

export const heroData = [
    {number: "1K+",label: "Brands"},
    {number: "500+",label: "Shops"},
    {number: "250K+",label: "Customers"}
]

export const products = [
    {img:shoe4,rating:4.5,label:"Nike Air Jordan-01",price:"$200.20"},
    {img:shoe5,rating:4.2,label:"Nike Air Jordan-10",price:"$250.20"},
    {img:shoe6,rating:4.0,label:"Nike Air Jordan-20",price:"$280.20"},
    {img:shoe7,rating:4.5,label:"Nike Air Jordan-30",price:"$300.20"},
]

export const services = [
    {icon:truckicon,label:"Free Shipping",desc:"Enjoy seamless shopping with our complimentary shipping service."},
    {icon:shield,label:"Secure Payment",desc:"Experience worry-free transactions with our secure payment options."},
    {icon:support,label:"Love to help you",desc:"Our dedicated team is here to assist you every step of the way."}
]

export const customers = [
    {img:customerImg1,rating:4.5,label:"Johnson Martin",desc:"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"},
    {img:customerImg2,rating:4.4,label:"Lessa",desc:"The product not only met but exceeded my expectations. I'll definitely be a returning customer!"}
]

export const footerData = [
    {
       heading:"Products",
       footerLinks:[
        {link:"Air Force 1",href:"/"},
        {link:"Air Max 1",href:"/"},
        {link:"Air Jordan 1",href:"/"},
        {link:"Air Force 2",href:"/"},
        {link:"Nike Waffle Racer",href:"/"},
        {link:"Nike Cortez",href:"/"}
       ]
    },
    {
        heading:"Help",
        footerLinks:[
         {link:"About Us",href:"/"},
         {link:"FAQs",href:"/"},
         {link:"How it works",href:"/"},
         {link:"Privacy policy",href:"/"},
         {link:"Payment policy",href:"/"}
        ]
     },
     {
        heading:"Get in touch",
        footerLinks:[
            {link:"customer@nike.com",id:1},
            {link:"+9876554432",id:2}
        ]  
     }
]


export const footerSocialLinks = [
    {link :FaFacebookF,alt:"facebook"},
    {link :FaTwitter,alt:"twitter"},
    {link :FaInstagram,alt:"instagram"}
]