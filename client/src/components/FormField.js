import React from 'react';


const FormField = (props) => {
	 const { 
		 name,
		 type='text',
		 label,
		 placeholder=''
	 } = props;


	 return (
		<div className="form-group">
			<label htmlFor={label}>{label}</label>
			{ type !== 'textarea' && <input
					type="text"
					className="form-control"
					value=""
					placeholder={placeholder}
					name={name}
				/>
			}
			{ type === 'textarea' && <textarea
						name={name}
						className="form-control"
						placeholder={placeholder}
					/>
			}
		</div>
	 );
}

export default FormField;