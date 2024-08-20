import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { buttonVariants } from "./ui/button";

export default function UserAuthForm() {
    return (
        <div className="grid gap-2">
            <form className="grid gap-1">
                <div>
                    <div>
                        <Label htmlFor="email">メールアドレス</Label>
                        <Input id="email" placeholder="name@example.com" type="email"/>
                    </div>
                    <button className={cn(buttonVariants())}>メールアドレスでログイン</button>
                </div>
            </form>
        </div>
    )
}