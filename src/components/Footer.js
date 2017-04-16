import React from 'react';

export default function Footer(props) {
	return (
		<div className="planCalculations">
			<div className="planCost">
				<p><span className='dollar'>$</span><span className='digits'>{props.state.planCostValue}</span></p>
				<p>Plan Costs</p>
			</div>
			<div className="operator">
				-
			</div>
			<div className="planDiscount">
				<p><span className='dollar'>$</span><span className='digits'>{props.state.discountValue}</span></p>
				<p>Discounts</p>
			</div>
			<div className="operator">
				=
			</div>
			<div className="planTotal">
				<p><span className='dollar'>$</span><span className='digits'>{props.state.totalValue}</span></p>
				<p>Total (+ tax)</p>
			</div>
		</div>
	)
}