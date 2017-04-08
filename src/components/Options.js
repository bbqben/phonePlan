import React from 'react';

export default function Option(props) {
	return (
		<li>
			<i className={props.data.optionImg} aria-hidden="true"></i>
			<p>{props.data.optionTitle}</p>
			<p>{props.data.optionDescription}</p>
			{props.data.optionButtons.map((optionButton, i) => {
				return <div className={props.data.optionTitle} key={"option" + i}> {optionButton.optionButtonLabel}</div>
			})}
		</li>
	)
}