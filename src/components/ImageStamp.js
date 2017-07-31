import React from "react";

export default function ImageStamp(props) {
	const { action, image } = props;
	
	const handleImageSubmit = (e) => {
		e.preventDefault()

		let reader = new FileReader();
		let file = e.target.files[0]
		reader.readAsDataURL(file)

		reader.onloadend = () => {
			action(file, reader.result)
		}

		
	}
	return (
		<div>
			<input
			type="file"
			defaultValue={image}
			onChange={ (e) => {
				handleImageSubmit(e)
			}}
			/>
			<img className='image_stamp_preview' alt="stamp preview" src={image} />
		</div>
	)
}
