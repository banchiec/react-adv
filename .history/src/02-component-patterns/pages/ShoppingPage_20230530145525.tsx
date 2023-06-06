import { ProductButtons, ProductCard, ProductTitle, ProductImage } from '../components'
import '../styles/custom-styles.css'

const product = {
	id: '1',
	title: 'coffe Mug - Card',
	img: './coffee-mug.png',
}

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
			<ProductCard product={product}>
				<ProductCard.Image />
				<ProductCard.Title title="cafe" />
				<ProductCard.Buttons />
			</ProductCard>
			<ProductCard product={product} className="bg-dark">
				<ProductImage className="custom-image" />
				<ProductTitle className="text-white text-bold" />
				<ProductButtons />
			</ProductCard>
		</div>
	)
}
export default ShoppingPage
