import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage(){
    return (
        <div>
            <section className="pt-6 md:pt-10 lg:py-32 pd-8 md:pb-12">
            <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
                {/*nextのlinkでxをリンクを指定*/}
                <Link href={siteConfig.links.x} className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm">
                Xをフォローする
                </Link>
                <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Post Writer</h1>
                <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">このアプリケーションはnext.jsのapprouterで作られたものです。</p>
                <div className="space-x-4">
                    {/* ログインのリンク,chadcnのbuttonVariantsをcn関数で持ってくる(chadcnのbuttonにsize:lgを当てるため) */}
                    <Link href={"/login"} 
                    className={cn(buttonVariants({size:"lg"}))}>
                        始める
                    </Link>
                    {/* githubのログイン target="_brank"で別タブでgithubを開くようにできる(セキュリティのためnoreferrerとする) */}
                    <Link href={siteConfig.links.github} 
                    className={cn(buttonVariants({size:"lg",variant:"outline"}))} 
                    target="_blank" 
                    rel="noreferrer">
                        GitHub
                    </Link>
                </div>
            </div>
            </section>
            <section id="feature"className="container py-8 md:py-12 lg:py-24 bg-slate-50">
              <div className="text-center space-y-6 max-w-[58rem] mx-auto">
                <h2 className="font-extrabold text-3xl md:text-6xl">サービスの特徴</h2>
                <p className="text-muted-foreground sm:text-lg sm:leading-7">このプロジェクトはモダンな技術スタックを使ったwebアプリケーションです。Next.jsのapp routerやコンテントレイヤーを通してブログ投稿をできます。</p>
              </div>
            </section>
            <section></section>
        </div>
    )
}