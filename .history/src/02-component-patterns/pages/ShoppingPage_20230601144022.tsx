import { ProductCard } from '../components'
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart'

const ShoppingPage = () => {
	const { shoppingCart, onProductCountChange } = useShoppingCart()
	// const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

	// const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
	// 	setShoppingCart((oldShoppingCart) => {
	// 		const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }
	// 		if (Math.max(productInCart.count + count, 0) > 0) {
	// 			productInCart.count += count
	// 			return {
	// 				...oldShoppingCart,
	// 				[product.id]: productInCart,
	// 			}
	// 		}

	// 		//delete product
	// 		const { [product.id]: toDelete, ...rest } = oldShoppingCart
	// 		return { ...rest }
	// 		// if (count === 0) {
	// 		// 	const { [product.id]: toDelete, ...rest } = oldShoppingCart
	// 		// 	return rest
	// 		// }
	// 		// return {
	// 		// 	...oldShoppingCart,
	// 		// 	[product.id]: { ...product, count },
	// 		// }
	// 	})
	// }
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
				<ProductCard
					key={product.id}
					product={product}
					className="bg-dark text-white"
					onChange={onProductCountChange}
					value={shoppingCart[product.id]?.count || 0}
				>
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title title="cafe" />
					<ProductCard.Buttons />
				</ProductCard>
			))}
			<div className="shopping-cart">
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						key={key}
						product={product}
						className="bg-dark text-white"
						style={{ width: '100px' }}
						onChange={(event) => onProductCountChange(event)}
						value={product.count}
					>
						<ProductCard.Image className="custom-image" />
						<ProductCard.Buttons />
					</ProductCard>
				))}
			</div>
			{/* <div>
				<code>{JSON.stringify(shoppingCart, null, 5)}</code>
			</div> */}
		</div>
	)
}
export default ShoppingPage
