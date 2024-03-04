import { useState } from "react";
import { FormComponent } from "./components/FormComponent";

const Task = ({ nombre }) => {
    return (
        <div className="Objeto">
            <input
                type="checkbox"
                onClick={onClick}
                className="Check"
            />
            <p className="Tarea">{nombre}</p>
        </div>
    )
}

const onClick = e => {
    if(e.target.checked){
        console.log(e.target.nextElementSibling.style.textDecorationLine='line-through');
    }else{e.target.nextElementSibling.style.textDecorationLine='none'}
    console.log(e.target.checked);
}

export const ToDoList = () => {

    let lista = [];

    const [arreglo, setArreglo] = useState(lista);

    const agregarTarea = val => {
        const valor = val.trim();
        if (valor < 1) return
        const envio = {
            id: arreglo.length + 1,
            tarea: valor
        }

        setArreglo([...arreglo, envio]);
    }

    return (
        <>
            <div className="Flex-Header">
                <h1 className="title">ToDo List</h1>
                <FormComponent agregarTarea={agregarTarea}></FormComponent>
            </div>
            <section className="Flex-Section">
                {//ACORDARSE DE NO ABRIR LLAVES EN EL MAP A LA HORA DE HACER LA FUNCION FLECHA
                }
                {arreglo.map(TAREA => <Task key={TAREA.id} nombre={TAREA.tarea}></Task>)}
            </section>
        </>
    )
}
