import React, {PropTypes} from "react";

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

	let image_el;

	if (image !== "") {
		image_el = (
			<img alt="stamp preview" src={image} className="ImageStamp_image"/>
		)
	}
	return (
		<div>
			<label htmlFor="upload-image" className="ImageStamp__button">
				Upload Image
				<input
				type="file"
				id="upload-image"
				defaultValue={image}
				onChange={ (e) => {
					handleImageSubmit(e)
				}}
			/>
			</label>
			<div className="ImageStamp__div">
				{image_el}
			</div>
		</div>
	)
}

ImageStamp.propTypes = {
				image: PropTypes.string.isRequired,
				action: PropTypes.func.isRequired
};