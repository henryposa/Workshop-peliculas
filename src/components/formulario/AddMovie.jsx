import React from 'react'
import { useDispatch } from "react-redux";
import { useForm } from '../hooks/useForm';
import {MovieNew} from '../actions/MovieAction'

export const AddMovie = () => {
    const dispatch = useDispatch();
    // posicion 0, variable global por fuera para poder mandar
    // a traves del dispatch
    let file = []
    const [values, handleInputChange, reset] = useForm({
      title: "",
      genre: "",
      sinopsis: "",
    });
  
    const { title, genre, sinopsis} = values;
  
    const handlePictureClick = () => {
      document.querySelector('#fileSelector').click()
    }
  
    const handleFileChange = (e) => {
      if (e.target.files[0]) {
        file = e.target.files[0]
        console.log(file)
      }
    }
    const handlNewMovie = (e) => {
      e.preventDefault();
      dispatch(MovieNew(values, file))
    };
  
    return (
      <div className="card container text-center">
        <h2>Agregar nueva pelicula</h2>
        <form className="card-body " onSubmit={handlNewMovie}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control mt-1"
              placeholder="Title"
              value={title}
              onChange={handleInputChange}
            />
          </div>
  
          <div className="form-group">
            <input
              type="text"
              name="genre"
              className="form-control mt-1"
              placeholder="Genre"
              value={genre}
              onChange={handleInputChange}
            />
          </div>
  
          <div className="form-group">
            <input
              type="text"
              name="sinopsis"
              className="form-control mt-1"
              placeholder="Sinopsis"
              value={sinopsis}
              onChange={handleInputChange}
            />
          </div>
  
          <input
            id="fileSelector"
            type="file"
            name="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <div>
            <input
              type="button"
              className="btn border-bottom shadow-sm"
              value="Picture"
              onClick={handlePictureClick}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Save
          </button>
        </form>
      </div>
    )
}
