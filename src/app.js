import React from 'react';
import ReactDOM from 'react-dom';
import Options from './components/Options';
import Footer from './components/Footer';

const data = [
	{
		optionImg: 'fa fa-calendar',
		optionType: "length",
		optionTitle: "Plan Length",
		optionDescription: "Select the length of your plan",
		optionButtons: [
			{
				optionValue: 5,
				optionButtonLabel: "10-day",
				planLengthValue: 0
			},
			{
				optionValue: 10,
				optionButtonLabel: "30-day",
				planLengthValue: 1
			},
			{
				optionValue: 25,
				optionButtonLabel: "90-day",
				planLengthValue: 2
			}
		]
	},
	{
		optionImg: 'fa fa-user',
		optionType: "talk",
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
		optionType: "text",
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
		optionType: "data",
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
			lengthPrice: 0,
			talkPrice: 0,
			textPrice: 0,
			dataPrice: 0,
			planCostValue: 10,
			discountValue: 0,
			totalValue: 10
		}
		this.handleChange = this.handleChange.bind(this);
		this.calculateTotal = this.calculateTotal.bind(this);
		this.updatePrices = this.updatePrices.bind(this);
		this.checkIfArray = this.checkIfArray.bind(this);
		this.calculatePlanCost = this.calculatePlanCost.bind(this);
		this.calculateDiscount = this.calculateDiscount.bind(this);
		this.calculateTotal = this.calculateTotal.bind(this);
	}


	componentDidMount() {

		let element = document.getElementById('Plan Length1'); //Selects the Plan Length button labelled '30-days'
		element.checked = true; //Upon initialization it presets the button to be selected by default

	}

	handleChange(e) {

		let dataType = e.target.dataset.type;
		let dataValue = e.target.dataset.value;

		if (dataType === "length") {

			this.resetForm("Unlimited Talk");
			this.resetForm("Unlimited Text");
			this.resetForm("Data");

			this.setState({
				currentLengthValue: parseInt(dataValue),
				currentTalkValue: 3,
				currentTextValue: 1,
				currentDataValue: 3,
				talkPrice: 0,
				textPrice: 0,
				dataPrice: 0
			}, () => {
				this.updatePrices();
			})
		} else if (dataType === "talk") {
			this.setState({
				currentTalkValue: parseInt(dataValue)
			}, () => {
				this.updatePrices();
			})
		} else if (dataType === "text") {
			this.setState({
				currentTextValue: parseInt(dataValue)
			}, () => {
				this.updatePrices();
			})
		} else if (dataType === "data") {
			this.setState({
				currentDataValue: parseInt(dataValue)
			}, () => {
				this.updatePrices();
			})
		}
		console.log(`I made a change to ${dataType} and changed it to ${dataValue}`)
	}

	resetForm(formName) {
		let elements = document.getElementsByName(formName);
		elements.forEach((element) => {
			element.checked = false;
		})
	}

	updatePrices() {
		let lengthPrice = data[0].optionButtons[this.state.currentLengthValue].optionValue;
		let talkPrice = data[1].optionButtons[this.state.currentTalkValue].optionValue;
		let textPrice = data[2].optionButtons[this.state.currentTextValue].optionValue;
		let dataPrice = data[3].optionButtons[this.state.currentDataValue].optionValue;


		lengthPrice = this.checkIfArray(lengthPrice);
		talkPrice = this.checkIfArray(talkPrice);
		textPrice = this.checkIfArray(textPrice);
		dataPrice = this.checkIfArray(dataPrice);

		console.log(`I just set the state of things`)
		this.setState({
			lengthPrice: lengthPrice,
			talkPrice: talkPrice,
			textPrice: textPrice,
			dataPrice: dataPrice
		}, () => {
			this.calculatePlanCost();
		})
	}

	checkIfArray(possiblyArray) {
		if (Array.isArray(possiblyArray)) {
			//If possiblyArray is an array then return correct value with respect to the plan length
			possiblyArray = possiblyArray[this.state.currentLengthValue];
			return possiblyArray;
		} else {
			return possiblyArray;
		}
	}

	calculatePrice() {
		//This will calculate plan cost, discount and then total
	}

	calculatePlanCost() {
		let lengthPrice = this.state.lengthPrice;
		let talkPrice = this.state.talkPrice;
		let textPrice = this.state.textPrice;
		let dataPrice = this.state.dataPrice;

		let planCostValue = lengthPrice + talkPrice + textPrice + dataPrice;

		this.setState({
			planCostValue: planCostValue
		}, () => {
			this.calculateDiscount();
		})
	}
	calculateDiscount() {
		let lengthValue = this.state.currentLengthValue;
		let talkValue = this.state.currentTalkValue;
		let textValue = this.state.currentTextValue;
		let dataValue = this.state.currentDataValue;
		let discountValue = 0;


		if (lengthValue === 0) {
			discountValue = 0;
		} else if (lengthValue === 1) { // If statement to detect if plan length is 30-day
			//Discounts given for 30-day plans are as follows:
			//Any 2 options is $5 off
			//All 3 options selected is $20 off

			if ((talkValue < 3) && (textValue === 0) && (dataValue < 3)) {
				//Checks if all 3 options are selected
				discountValue = 20;
			} else if ((talkValue < 3 && textValue === 0) || (talkValue < 3 && dataValue < 3) || (textValue === 0 && dataValue < 3)) {
				//Checks if at least 2 options are selected
				discountValue = 5;
			}

		} else if (lengthValue === 2) { //If statement to detect if plan length is 90-day
			//Discounts given for 90-day plans are as follows:
			//Any 2 options are $15 off
			//All 3 options selected is $60 off

			if ((talkValue < 3) && (textValue === 0) && (dataValue < 3)) {
				//Checks if all 3 options are selected
				discountValue = 60;
			} else if ((talkValue < 3 && textValue === 0) || (talkValue < 3 && dataValue < 3) || (textValue === 0 && dataValue < 3)) {
				//Checks if at least 2 options are selected
				discountValue = 15;
			}

		}
		this.setState({
			discountValue: discountValue
		}, () => {
			this.calculateTotal();
		})
	}
	calculateTotal() {
		let cost = this.state.planCostValue;
		let discount = this.state.discountValue;
		let total = cost - discount;

		this.setState({
			totalValue: total
		})
	}


	render() {
		return(
			<div>
				<div className="planOptions">
					<div className="planOptions__wrapper">
						<ul>
							{data.map((option,i) => {
								// console.log(option);
								return <Options data={option} currentLengthValue={this.state.currentLengthValue} key={option.optionTitle + i} state={this.state} handleChange={this.handleChange}/>
							})}
						</ul>
					</div>
				</div>
				<Footer  state={this.state} calculateTotal={this.calculateTotal}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));