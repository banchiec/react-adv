import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as ProductTitleProps } from '../components/ProductTitle'

export interface Product {
	id: string
	title: string
	img?: string
}

export interface ProductContextProps {
	counter: number
	increaseBy: (value: number) => void
	product: Product
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element
	Title: (Props: ProductTitleProps) => JSX.Element
	Image: (Props: { img?: string; className?: string }) => JSX.Element
	Buttons: (Props: { className?: string }) => JSX.Element
}
