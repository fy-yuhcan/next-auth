import { allPosts } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx-component";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getPostFromSlug(slug:string) {
    const post = allPosts.find((post)=>post.slugAsParams === slug)
    return post
}

//paramsのオブジェクトにslugというキーが含まれる文字列型、メタデータを返すことを型定義している
export async function generateMetadata({params}:{params: {slug: string}}):Promise<Metadata> {
    const page = await getPostFromSlug(params.slug)

    if (!page){
        return {}
    }

    return {
        title: page.title,
        description: page.description,
        openGraph:{
            title: page.title,
            description: page.description,
        }
        
    }
}

export default async function Postpage({params}:{params: {slug: string}}) {
    const slug = params.slug;
     const post = await getPostFromSlug(slug)
     if(!post){notFound()}

     console.log(post)

    return(
        <article className="container max-w-4xl py-6 lg:py-10">
            <div>
                {post.date && (<time>Published on {format(post.date,"yyyy/MM/dd")}</time>)}
                <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">{post.title}</h1>
            </div>
            {post.image && (<Image src={post.image} alt="Blog Image" width={720} height={452} className="my-8 border rounded-md bg-muted"/>)}
            <Mdx code={post.body.code}/>
            <hr className="mt-12"/>
            <div>
                <Link href={"/blog"} className={cn(buttonVariants({variant: "ghost"}))}>全ての記事を見る</Link>
            </div>
        </article>
    )
}