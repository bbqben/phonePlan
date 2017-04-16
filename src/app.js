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
	}


	componentDidMount() {
		this.updatePrices();
	}

	handleChange(e) {

		let dataType = e.target.dataset.type;
		let dataValue = e.target.dataset.value;

		if (dataType === "length") {
			this.setState({
				currentLengthValue: parseInt(dataValue)
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

	calculateTotal() {
		//Calculate length value
		
		//Calculate talk value
		//Calculate text value
		//Calculate data value
	}


	render() {
		console.log(data);
		return(
			<div>
				<div className="planOptions">
					<ul>
						{data.map((option,i) => {
							// console.log(option);
							return <Options data={option} currentLengthValue={this.state.currentLengthValue} key={option.optionTitle + i} state={this.state} handleChange={this.handleChange}/>
						})}
					</ul>
				</div>
				<Footer  state={this.state} calculateTotal={this.calculateTotal}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));