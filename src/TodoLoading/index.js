import React from "react";
import "./TodoLoading.css"

function TodoLoading() {
    return(
        <div className="LoadingTodo-Container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Estamos Cargando, espera un momento..</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
}
export {TodoLoading}