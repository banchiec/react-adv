import { ProductButtons, ProductCard, ProductTitle, ProductImage } from '../components'
import '../styles/custom-styles.css'

const product1 = {
	id: '1',
	title: 'Coffe Mug - Card',
	img: './coffee-mug.png',
}
const product2 = {
	id: '1',
	title: 'Coffe Mug - Meme',
	img: './coffee-mug2.png',
}
const products = [product1, product2]

const ShoppingPage = () => {
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
				<ProductCard product={product} className="bg-dark">
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title title="cafe" />
					<ProductCard.Buttons />
				</ProductCard>
			))}
			{/* <ProductCard product={product1} className="bg-dark">
				<ProductCard.Image className="custom-image" />
				<ProductCard.Title title="cafe" />
				<ProductCard.Buttons />
			</ProductCard> */}

			{/* <ProductCard product={product2} className="bg-dark text-white">
				<ProductImage className="custom-image" />
				<ProductTitle className="text-white text-bold" />
				<ProductButtons className="custom-buttons" />
			</ProductCard> */}
			<div className="shopping-cart">
				<ProductCard product={product2} className="bg-dark" style={{ width: '100px' }}>
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>
			</div>
		</div>
	)
}
export default ShoppingPage
