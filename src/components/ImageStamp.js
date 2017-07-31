import React from "react";

export default function ImageStamp(props) {
	const { action, image, image_url } = props;
	
	const handleImageSubmit = (e) => {
		e.preventDefault()

		let reader = new FileReader();
		let file = e.target.files[0]
		reader.readAsDataURL(file)

		reader.onloadend = () => {
			action(file, image_url)
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
			<img className='image_stamp_preview' src={image_url} />
		</div>
	)
}
