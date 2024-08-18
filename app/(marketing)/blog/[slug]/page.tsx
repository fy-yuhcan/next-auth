import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";

async function getPostFromSlug(slug:string) {
    const post = allPosts.find((post)=>post.slugAsParams === slug)
    return post
}

export default async function Postpage({params}:{params: {slug: string}}) {
    const slug = params.slug;
     const post = await getPostFromSlug(slug)
     if(!post){notFound()}

     console.log(post)

    return(
        <div>{slug}</div>
    )
}