import React from 'react';
import ReactDOM from 'react-dom';
import Options from './components/Options';


const data = [
	{
		optionImg: 'fa fa-calendar',
		optionTitle: "Plan Length",
		optionDescription: "Select the length of your plan",
		optionButtons: [
			{
				optionPrice: 5,
				optionButtonLabel: "10-day",
				planLengthValue: 0
			},
			{
				optionPrice: 10,
				optionButtonLabel: "30-day",
				planLengthValue: 1
			},
			{
				optionPrice: 25,
				optionButtonLabel: "90-day",
				planLengthValue: 2
			}
		]
	},
	{
		optionImg: 'fa fa-user',
		optionTitle: "Unlimited Talk",
		optionDescription: "Are you a nationwide talker or do you only talk within your province?",
		optionButtons: [
			{
				optionButtonLabel: "Province Wide",
				optionValue: [10, 17, 51]
			},
			{
				optionButtonLabel: "Canada Wide",
				optionValue: [12, 22, 66]
			},
			{
				optionButtonLabel: "Canada Wide and U.S.",
				optionValue: [15, 27, 81]
			},
			{
				optionButtonLabel: "No Talk",
				optionValue: 0
			}
		]
	},
	{
		optionImg: 'fa fa-comments',
		optionTitle: "Unlimited Text",
		optionDescription: "Do you need text messaging on your plan?",
		optionButtons: [
			{
				optionButtonLabel: "Global",
				optionValue: [6, 15, 45]
			},
			{
				optionButtonLabel: "No Text",
				optionValue: 0
			}
		]
	},
	{
		optionImg: 'fa fa-cloud',
		optionTitle: "Data",
		optionDescription: "How much data do you need?",
		optionButtons: [
			{
				optionButtonLabel: ["150MB", "1GB", "3GB"],
				optionValue: [10, 20, 50]
			},
			{
				optionButtonLabel: ["500MB", "2GB", "6GB"],
				optionValue: [15, 28, 59]
			},
			{
				optionButtonLabel: ["1GB", "4GB", "12GB"],
				optionValue: [20, 48, 125]
			},
			{
				optionButtonLabel: "No Data",
				optionValue: 0
			}
		]
	}
]



class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentLengthValue: 1,
			currentTalkValue: 3,
			currentTextValue: 1,
			currentDataValue: 3,
			planCostValue: 10,
			planDiscountValue: 0,
			planTotalValue: 10
		}
	}


	componentDidMount() {

	}


	render() {
		return(
			<div>
				<div className="planOptions">
					<ul>
						{data.map((option,i) => {
							console.log(option);
							return <Options data={option} currentLengthValue={this.state.currentLengthValue} key={option.optionTitle + i}/>
						})}
					</ul>
				</div>
				<div className="planCalculations">
					<div className="planCost">
						<p>${this.state.planCostValue}</p>
						<p>Plan Costs</p>
					</div>
					<div className="planDiscount">
						<p>${this.state.planDiscountValue}</p>
						<p>Plan Discounts</p>
					</div>
					<div className="planTotal">
						<p>${this.state.planTotalValue}</p>
						<p>Total (+ tax)</p>
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));