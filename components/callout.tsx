import { ReactNode } from "react"

export const Callout = ({children}:{children: React.ReactNode})=>{
    return(
        <div className="my-6 flex items-center rounded-md border border-1-4">
            <div>
                <div>{children}</div>
            </div>
        </div>
    )
}