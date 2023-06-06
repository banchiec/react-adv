import { ProductCard } from '../components'
import '../styles/custom-styles.css'
import { products } from '../data/products'

const product = products[0]
const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<ProductCard
				key={product.id}
				product={product}
				className="bg-dark text-white"
				initialValues={{
					count: 4,
					maxCount: 10,
				}}
			>
				{(args) => (
					<>
						<ProductCard.Image
							className="custom-image"
							style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
						/>
						<ProductCard.Title className="text-bold" title="cafe" />
						<ProductCard.Buttons className="custom-buttons" />
						{/* <button onClick={reset}>reset</button> */}
						<code>{JSON.stringify(args, null, 3)}</code>
					</>
				)}
			</ProductCard>
		</div>
	)
}
export default ShoppingPage
