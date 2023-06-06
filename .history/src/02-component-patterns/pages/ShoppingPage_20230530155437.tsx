import { ProductButtons, ProductCard, ProductTitle, ProductImage } from '../components'
import '../styles/custom-styles.css'

const product = {
	id: '1',
	title: 'Coffe Mug - Card',
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
			<ProductCard product={product} className="bg-dark">
				<ProductCard.Image className="custom-image" />
				<ProductCard.Title title="cafe" />
				<ProductCard.Buttons />
			</ProductCard>
			<ProductCard product={product} className="bg-dark text-white">
				<ProductImage className="custom-image" />
				<ProductTitle className="text-white text-bold" />
				<ProductButtons className="custom-buttons" />
			</ProductCard>
			<ProductCard
				product={product}
				style={{
					backgroundColor: '#70d1f8',
				}}
			>
				<ProductImage />
				<ProductTitle />
				<ProductButtons />
			</ProductCard>
		</div>
	)
}
export default ShoppingPage
