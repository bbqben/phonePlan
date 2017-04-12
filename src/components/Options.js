import React from 'react';

export default function Option(props) {
	return (
		<li>
			<i className={props.data.optionImg} aria-hidden="true"></i>
			<p>{props.data.optionTitle}</p>
			<p>{props.data.optionDescription}</p>
				

			{props.data.optionButtons.map((optionButton, i) => {


				if (props.data.optionTitle === "Data") {
					console.log(optionButton.optionButtonLabel);

					if (optionButton.optionButtonLabel === "No Data") {
						return (
							<div key={"option" + i}>
								<input type="radio" id={`${props.data.optionTitle}${i}`} name={props.data.optionTitle}/>
								<label htmlFor={`${props.data.optionTitle}${i}`} className={props.data.optionTitle}>No Data</label>
							</div>
						) 
					} else {
						return (
							<div key={"option" + i}>
								<input type="radio" id={`${props.data.optionTitle}${i}`} name={props.data.optionTitle}/>
								<label htmlFor={`${props.data.optionTitle}${i}`} className={props.data.optionTitle}>{optionButton.optionButtonLabel[props.currentLengthValue]}</label>
							</div>
						) 
					}

				} else {
					return (
						<div key={"option" + i}>
							<input type="radio" id={`${props.data.optionTitle}${i}`} name={props.data.optionTitle}/>
							<label htmlFor={`${props.data.optionTitle}${i}`} className={props.data.optionTitle}>{optionButton.optionButtonLabel}</label>
						</div>
					) 
				}


			})}

		</li>
	)
}