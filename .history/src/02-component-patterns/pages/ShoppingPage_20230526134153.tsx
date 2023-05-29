import ProductCard from '../components/ProductCard'

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
			<ProductCard product={product} />
		</div>
	)
}
export default ShoppingPage
