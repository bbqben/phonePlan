import React from 'react';

export default function Option(props) {
	return (
		<li> 
			<i className={props.data.optionImg} aria-hidden="true"></i>
			<h3>{props.data.optionTitle}</h3>
			<p>{props.data.optionDescription}</p>
				

			{props.data.optionButtons.map((optionButton, i) => {
				//Goes through the array of button options for each category (plan length, talk, text, and data)
				let optionValue = optionButton.optionValue;
				if (Array.isArray(optionValue)) {
					//Checks if the current button has an array of prices (some buttons are fixed to a single amount i.e. No Talk) 
					//If the price is an array, then select the index item of the number associated with plan length in state
					optionValue = optionValue[props.state.currentLengthValue]
				}


				if (props.data.optionTitle === "Data") { // Checks optionTitle if it is Data 
					//This check is performed because the Data section has an array for both label and price which changes depending on the plan length
					if (optionButton.optionButtonLabel === "No Data") {
						//If it is the No Data button then return the following
						return (
							//This is done so that the last item 'No Data' will return
							<div key={"option" + i}>
								<input type="radio" id={`${props.data.optionTitle}${i}`} name={props.data.optionTitle} data-value={i} data-type={props.data.optionType} onChange={props.handleChange}/>
								<label htmlFor={`${props.data.optionTitle}${i}`} className={props.data.optionTitle}>No Data</label>
							</div>
						) 
					} else { //Else if the current category is Data, then provide the label and price referenced with respect to the state currentLengthValue
						return (
							<div key={"option" + i}>
								<input type="radio" id={`${props.data.optionTitle}${i}`} name={props.data.optionTitle} data-value={i} data-type={props.data.optionType} onChange={props.handleChange}/>
								<label htmlFor={`${props.data.optionTitle}${i}`} className={props.data.optionTitle}>{optionButton.optionButtonLabel[props.currentLengthValue]}</label>
							</div>
						) 
					}

				} else { // Else if the current category is not related to Data then just print out the button Label which is a string
					return (
						<div key={"option" + i}>
							<input type="radio" id={`${props.data.optionTitle}${i}`} name={props.data.optionTitle} data-value={i} data-type={props.data.optionType} onChange={props.handleChange}/>
							<label htmlFor={`${props.data.optionTitle}${i}`} className={props.data.optionTitle}>{optionButton.optionButtonLabel}</label>
						</div>
					) 
				}


			})}

		</li>
	)
}