import React from "react";

export default function ImageStamp(props) {
	const { action, image_file, image_preview } = props;
	
	const handleImageSubmit = (e) => {
		e.preventDefault()

		let reader = new FileReader();
		let file = e.target.files[0]

		reader.onloadend = () => {
			action(file, reader.result)
		}

		reader.readAsDataURL(file)
	}





	
	return (
		<div>
			<input
			type="file"
			defaultValue={image_file}
			onChange={ (e) => {
				handleImageSubmit(e)
			}}
			/>
			<img className='image_stamp_preview' src={image_preview} />
		</div>
	)
}
