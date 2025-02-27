const Filter = ({ filter, onFilterSelect }) => {
	const btns = [
		{ id: 'all', label: 'All products' },
		{ id: 'completed', label: 'Completed' },
		{ id: 'big size', label: 'Big size' },
	]

	return (
		<div className='filter'>
			<div className='btns'>
				{btns.map(btn => (
					<button
						key={btn.id}
						className={`${filter === btn.id && 'active'}`}
						onClick={() => onFilterSelect(btn.id)}
					>
						{btn.label}
					</button>
				))}
			</div>
		</div>
	)
}

export default Filter
