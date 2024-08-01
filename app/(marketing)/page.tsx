import Link from "next/link";

export default function IndexPage(){
    return (
        <div>
            <section className="pt-6 md:pt-10 lg:py-32 pd-8 md:pb-12">
            <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
                {/*nextのlinkでxをリンクを指定*/}
                <Link href={"/"}>
                Xをフォローする
                </Link>
                <h1>Post Writer</h1>
                <p>このアプリケーションはnext.jsのapprouterで作られたものです。</p>
            </div>
            </section>
            <section></section>
            <section></section>
        </div>
    )
}