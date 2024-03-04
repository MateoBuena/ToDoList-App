import { useState } from "react";

export const FormComponent = ({ agregarTarea }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = e => {
        setInputValue(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        agregarTarea(inputValue);
    }

    return (
        <form className="Form" onSubmit={onSubmit}>
            <input
                className="Form_Input"
                type='text'
                placeholder="Nueva tarea"
                name="tarea"
                value={inputValue}
                onChange={onInputChange}
            />
            <button type="submit" className="Form_Input_Submit">agregar</button>
        </form>
    )
}
