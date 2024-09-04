import { buttonVariants } from "@/components/ui/button";
import UserAuthForm from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Register() {
  return(
    <div className="container grid flex-col h-screen">
        <Link href={"/login"} className={cn(buttonVariants({ variant: "ghost" }), "absolute left-4 md:left-8 md:top-8")} >ログイン</Link>
        <div className="h-full bg-muted lg:black hidden" />
        <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
            <div className="text-center space-y-2">
                <h1 className="text-2xl font-extrabold tracking-tight">アカウントを作成</h1>
                <p className="text-sm text-muted-foreground">メールアドレスを入力してアカウントを作成できます。</p>
            </div>

            <UserAuthForm />

              <p className="text-muted-foreground px-8 text-center text-sm">
                  続けてクリックすれば
                  <Link href={"/terms"} className="underline underline-offset-1">利用規約</Link>
                  と
                  <Link href={"/privacy"} className="underline underline-offset-1">プライバシーポリシー</Link>
                  に同意したことになります。
            </p>
        </div>
    </div>
  );
}