import { allPosts } from "@/.contentlayer/generated"
import Image from "next/image";

export default function BlogPage(){
    const posts = allPosts
    console.log(posts);
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
    <div>
        <div className="space-y-4">
            <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
                Blog
            </h1>
            <p className="text-muted-foreground text-xl">
                contentlayerとmdxで書いています
            </p>
        </div>
    </div>
    <hr className="my-8"/>
    {posts.map((post,index)=>(
        <article key={index}>
            {post.image && <Image src={post.image} width={800} height={452} alt="Blog Image"/>}
            <h2 className="text-2xl font-extrabold">{post.title}</h2>
            <p className="text-muted-foreground">{post.description}</p>
        </article>
    ))}
    </div>
  )
}
