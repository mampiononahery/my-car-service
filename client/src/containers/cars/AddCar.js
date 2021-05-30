import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { createCar } from '../../actions/cars';

const AddCar = (props) => {

	const { register, handleSubmit } = useForm();

	const dispatch = useDispatch();

	// history
	const history = useHistory();

	const onSubmit = (data) => {
		dispatch(createCar(data));
		history.push("/");
	}

	return (
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<label>Nom</label>
					<input className="form-control" {...register("name", { required: true })} />
				</div>
				<div className="form-group">
				<label>Description</label>
					<input className="form-control" {...register("description", { required: true })} />
				</div>
				<div className="form-group">
					<label>Prix</label>
					<input className="form-control" {...register("price", { required: true })} />
				</div>
				<div className="form-group">
					<label>Carburant</label>
					<input className="form-control" {...register("carburant", { required: true })} />
				</div>
				<div className="form-group">
					<label>Marque</label>
					<input className="form-control" {...register("mark", { required: true })} />
				</div>
				<div className="form-group">
					<label>image</label>
					<input className="form-control"  {...register("image")} />
				</div>
				<Button variant="outline-primary" type="submit">Ajouter </Button>
			</form >
	
	);
}

export default AddCar;