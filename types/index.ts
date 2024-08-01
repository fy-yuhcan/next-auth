//型定義
export type SiteConfig ={
    name:string;
    description: string;
    url: string;
    ogImage: string;
    links:{
        x: string;
        github: string;
    }
}

//marketingConfigの型定義
export type NavItem ={
    title: string;
    href: string;
    disabled?:boolean;
}
//追加のプロパティを持たせるため
export type MarketingConfig ={
    mainNav:NavItem[];
}