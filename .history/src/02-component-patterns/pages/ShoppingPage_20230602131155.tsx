import { ProductCard } from '../components'
import '../styles/custom-styles.css'
import { products } from '../data/products'
// import { useShoppingCart } from '../hooks/useShoppingCart'

const product = products[0]
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
			<ProductCard key={product.id} product={product} className="bg-dark text-white">
				<ProductCard.Image className="custom-image" />
				<ProductCard.Title title="cafe" />
				<ProductCard.Buttons />
			</ProductCard>
		</div>
	)
}
export default ShoppingPage
