
import '../css/componentes.css'

export const saludar =  ( nombre ) =>{
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1'); //crea un elemento HTML especificado por su tagName
    h1.innerText = `Hola, ${ nombre }, cómo estás?`; //Establece o devuelve el contenido de texto del nodo especificado 

    document.body.append( h1 ); //ParentNode.append() inserta un conjunto de objetos de tipo Node u objetos de
                                //tipo DOMString después del último hijo de ParentNode
}