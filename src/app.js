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
				optionButtonPrice: 5,
				optionButtonLabel: "10-day"
			},
			{
				optionButtonPrice: 10,
				optionButtonLabel: "30-day"
			},
			{
				optionButtonPrice: 25,
				optionButtonLabel: "90-day"
			}
		]
	},
	{
		optionImg: 'fa fa-user',
		optionTitle: "Unlimited Talk",
		optionDescription: "Are you a nationwide talker or do you only talk within your province?",
		optionButtons: [
			{
				optionButtonPrice: 17,
				optionButtonLabel: "Provice-Wide"
			},
			{
				optionButtonPrice: 22,
				optionButtonLabel: "Canada-Wide"
			},
			{
				optionButtonPrice: 27,
				optionButtonLabel: "Canada-Wide and U.S"
			},
			{
				optionButtonPrice: 0,
				optionButtonLabel: "No Talk"
			}
		]
	},
	{
		optionImg: 'fa fa-comments',
		optionTitle: "Unlimited Text",
		optionDescription: "Do you need text messaging on your plan?",
		optionButtons: [
			{
				optionButtonPrice: 15,
				optionButtonLabel: "Global"
			},
			{
				optionButtonPrice: 0,
				optionButtonLabel: "No Text"
			}
		]
	},
	{
		optionImg: 'fa fa-cloud',
		optionTitle: "Data",
		optionDescription: "How much data do you need?",
		optionButtons: [
			{
				optionButtonPrice: 20,
				optionButtonLabel: "1GB/30 Days"
			},
			{
				optionButtonPrice: 28,
				optionButtonLabel: "2GB/30 Days"
			},
			{
				optionButtonPrice: 48,
				optionButtonLabel: "4GB/30 Days"
			},
			{
				optionButtonPrice: 0,
				optionButtonLabel: "No Data"
			}
		]
	}
]



class App extends React.Component {
	constructor() {
		super();
		this.state = {

		}
	}


	componentDidMount() {

	}


	render() {
		return(
			<div>
				<ul>
					{data.map((option,i) => {
						console.log(option);
						return <Options data={option} key={option.optionTitle + i}/>
					})}
				</ul>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));