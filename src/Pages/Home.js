import React from 'react';

export default function Home({ fieldGuide, addObservation }) {
		return (
		<div>
			<h2>Home</h2>;
			{fieldGuide.map(observation => (
				<div className="border shadow p-4 m-4">
					{/* build table based on observation data props/components */}
				</div>
			))}
		</div>	
		)
}