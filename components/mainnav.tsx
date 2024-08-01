/*useStateを使うときはclientにする*/
"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import { ReactNode, useState } from "react";
import MobileNav from "./mobileNav";

//itemsの型を宣言する必要があるinterface->typeに置き換え可能(ここは調べないと違いがよくわからない)
type MainNavProps ={
    items?: NavItem[];
    children?:ReactNode
}
export default function MainNav({items}:MainNavProps) {
    
    {/*mobilenavを押したか押していないかを判定する状態管理*/}
    const [showMobileMenu,setShowMobileMenu] = useState<boolean>(false);

    return(
        /*ヘッダーのレイアウト*/
        <div className="flex items-center md:gap-10">
            <Link href={"/"} className="hidden md:flex items-center space-x-2">
            <span className="font-bold hidden sm:inline-block">Post Writer</span>
            </Link>
            <nav className="md:flex gap-6 hidden">
                {/*itemsをmapで受け取って表示する*/}
                {items?.map((item,index)=>(
                    <Link key={index} href={item.href} className="text-lg sm:text-sm font-medium hover:text-foreground/80">{item.title}</Link>
                ))}
            </nav>

            {/*スマホサイズ用のレイアウト*/}
            <button className="md:hidden flex items-center" onClick={()=>setShowMobileMenu(!showMobileMenu)}>
                <span>メニュー</span>
            </button>
            
            {/*&&で括ることでshowMobileMenuがtrueの時、MobileNavを表示する*/}
            {showMobileMenu && (<MobileNav></MobileNav>)}
        </div>
    )
}