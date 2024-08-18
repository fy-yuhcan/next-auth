import { allPosts } from "@/.contentlayer/generated"

export default function BlogPage(){
    const posts = allPosts
    console.log(posts);
  return (
    <div>
    <div>
        <div>
            <h1>
                Blog
            </h1>
            <p>
                contentlayerとmdxで書いています
            </p>
        </div>
    </div>
    </div>
  )
}
