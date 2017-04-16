import React from 'react';

export default function Footer(props) {
	return (
		<div className="planCalculations">
			<div className="planCost">
				<p>${props.state.planCostValue}</p>
				<p>Plan Costs</p>
			</div>
			<div className="planDiscount">
				<p>${props.state.discountValue}</p>
				<p>Plan Discounts</p>
			</div>
			<div className="planTotal">
				<p>${props.state.totalValue}</p>
				<p>Total (+ tax)</p>
			</div>
		</div>
	)
}