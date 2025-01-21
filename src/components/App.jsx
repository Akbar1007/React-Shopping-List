import Filter from './Filter'
import Heading from './Heading'
import ShoppingAddForm from './ShoppingAddForm'
import ShoppingList from './ShoppingList'

function App() {
	const data = [
		{ id: 1, size: 14, title: 'Buy bananas' },
		{ id: 2, size: 10, title: 'Buy apples' },
		{ id: 3, size: 5, title: 'Buy milk' },
	]
	return (
		<div className='app'>
			<div className='wrapper'>
				<div className='card'>
					<Heading />
					<ShoppingAddForm />
					<ShoppingList data={data} />
					<Filter />
				</div>
				<img src='/public/earth.svg' alt='earth' />
			</div>
		</div>
	)
}

export default App
