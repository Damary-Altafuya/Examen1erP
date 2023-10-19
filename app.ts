export interface IRequest {
    id: number;
    URL: string;
    returnType: string;
    format: string;
    status: string;
    parameters: IParameter;
  }
  
  export interface IParameter {
    id: number;
    name: string;
    type: string;
    comment: string;
    requestId: number;
  }
  
  //Definir 3 elementos
  const arreglo: IRequest[] = [
    {
      id: 1,
      URL: "URL1",
      returnType: "Type1",
      format: "Format1",
      status: "Status1",
      parameters: {
        id: 2,
        name: "Parameter1",
        type: "Type1",
        comment: "Comment1",
        requestId: 1,
      },
    },
    {
      id: 2,
      URL: "URL2",
      returnType: "Type2",
      format: "Format2",
      status: "Status2",
      parameters: {
        id: 3,
        name: "Parameter2",
        type: "Type2",
        comment: "Comment2",
        requestId: 2,
      },
    },
    {
      id: 3,
      URL: "URL3",
      returnType: "Type3",
      format: "Format3",
      status: "Status3",
      parameters: {
        id: 4,
        name: "Parameter3",
        type: "Type3",
        comment: "Comment3",
        requestId: 3,
      },
    },
  ];
  
  // Crear la función para eliminar lógicamente un elemento por su ID
  function eliminarElemento(arr: IRequest[], id: number, callback: (elementoEliminado: IRequest) => void) {
    const elementoIndex = arr.findIndex((elem) => elem.id === id); 
    
    if (elementoIndex !== -1) {
      const elemento = arr[elementoIndex];
      elemento.status = "eliminado";
      callback(elemento);
    }
  }
  
  // Llamar a la función utilizando un callback para mostrar el elemento eliminado por consola
  eliminarElemento(arreglo, 2, (elementoEliminado) => {
    console.log("Elemento eliminado:", elementoEliminado);
  });