export interface Crumbs {
    Text: string;
    OnClick?(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void; // Change to anchor element
    Href?:string
}

export interface PageBreadCrumbsProps {
    Links: Array<Crumbs>;
    Active: string;
    IsActive?:boolean
    OnClick?: (text: string) => void
    
}