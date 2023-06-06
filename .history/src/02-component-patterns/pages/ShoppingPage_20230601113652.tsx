import { useState } from 'react'
import { ProductButtons, ProductCard, ProductTitle, ProductImage } from '../components'
import '../styles/custom-styles.css'
import { Product } from '../interfaces/interfaces'

const product1 = {
	id: '1',
	title: 'Coffe Mug - Card',
	img: './coffee-mug.png',
}
const product2 = {
	id: '2',
	title: 'Coffe Mug - Meme',
	img: './coffee-mug2.png',
}
const products = [product1, product2]

interface ProductInCart extends Product {
	count: number
}

const ShoppingPage = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

	const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
		console.log('onProductCountChange', count, product)
	}
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			></div>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} className="bg-dark text-white" onChange={(event) => onProductCountChange(event)}>
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title title="cafe" />
					<ProductCard.Buttons />
				</ProductCard>
			))}
			<div className="shopping-cart">
				<ProductCard product={product2} className="bg-dark text-white" style={{ width: '100px' }}>
					<ProductCard.Image className="custom-image" />
					<ProductCard.Buttons />
				</ProductCard>
			</div>
			<div>
				<code>{JSON.stringify(shoppingCart, null, 5)}</code>
			</div>
		</div>
	)
}
export default ShoppingPage
