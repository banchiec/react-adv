export const ProductButtons = () => {
	const { increaseBy, counter } = useContext(ProductContext)
	return (
		<div className={styles.buttonsContainer}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<label className={styles.countLabel}> {counter} </label>
			<button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
				+
			</button>
		</div>
	)
}
