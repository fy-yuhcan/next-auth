"use client"
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { buttonVariants } from "./ui/button";
import { Icon } from "./icon";
import {signIn} from "next-auth/react"
import { useState } from "react";



export default function UserAuthForm() {
    const [isGithubLoading,setIsGithubLoading] = useState<Boolean>(false)
    return (
        <div className="grid gap-2">
            <form>
                <div className="grid gap-1">
                    <div>
                        <Label htmlFor="email">メールアドレス</Label>
                        <Input id="email" placeholder="name@example.com" type="email"/>
                    </div>
                    <button className={cn(buttonVariants(),"w-full")}>メールアドレスでログイン</button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs ">
                    <span className="text-muted-foreground px-2 bg-background">または</span>
                </div>
            </div>

            <button className={cn(buttonVariants({ variant: "outline" }))} onClick={() => {
                setIsGithubLoading(true)
                signIn("github")
            }}>{ isGithubLoading? (<Icon.spinner className="animate-spin"/>):(<Icon.github />)}GitHub</button>
        </div>
    )
}