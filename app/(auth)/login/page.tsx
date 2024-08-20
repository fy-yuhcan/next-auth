import Link from "next/link";

export default function Login() {
  return(
    <div>
        <div>
            <div>
                <h1 className="text-2xl font-extrabold tracking-tight">welcomeback</h1>
                <p className="text-sm text-muted-foreground">メールアドレスを入力してログインできます。</p>
            </div>

            {/*<UserAuthForm />*/}

            <p>
                <Link href={"/register"} ></Link>
            </p>
        </div>
    </div>
  );
}
