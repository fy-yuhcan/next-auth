import MainNav from "@/components/mainnav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function marketingLayout({children}:{children:React.ReactNode}){
    return(
        <div>
            <header className="container z-40 bg-background">
                <div className="h-20 py-6 flex items-center justify-between">
                    <MainNav></MainNav>
                    <nav>
                        <Link href={"/login"} className={cn(buttonVariants({variant: "secondary",size:"sm"}),"px-4")}>ログイン</Link>
                    </nav>
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}