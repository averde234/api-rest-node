import * as Model from "../models/propiedades.js";


// obtener todas las propiedades y filtrar por habitaciones 

export const getAllPropiedades = async  (req, res) => {
    const { rooms } = req.query;

    const propiedades = await  Model.getAllPropiedades();

  if (rooms) {
    const roomsFilter = propiedades.filter(item => 
      item.habitaciones === Number(rooms)
    );

    if (roomsFilter.length === 0) {
      return res.status(404).json({
        mensaje: `No se encontraron propiedades con ${rooms} habitaciones.`
      });
    }

    res.json(roomsFilter);
  } else {
    res.json(propiedades);
  }
};


// Obtener propiedad por ID

export const getPropiedadesById = async (req, res) => {
  const id = req.params.id;

  const homesid = await Model.getPropiedadesById(id);

  if (!homesid) {
    return res.status(404).json({ error: "No existe la propiedad" });
  }

  res.json(homesid);
};


//Metodo POST para crear propiedad
export const createPropiedades  = async (req, res) => {
    const  { titulo, ubicacion, precio, area, habitaciones, baños, descripcion } = req.body
    
    const propiedades = await Model.createPropiedades({titulo, ubicacion, precio, area, habitaciones, baños, descripcion});
    res.send(propiedades);

    res.status(201).json(propiedades);
};


// Borrar propiedad

export const deletePropiedades = async (req, res) => {
  const { id } = req.params;
  console.log("ID recibido para eliminar:", id);

  const deleted = await Model.deletePropiedad(id);

  if (!deleted) {
    return res.status(404).json({ error: "Propiedad no encontrada" });
  }

  res.status(204).json({mensaje: "propiedad"});
};


//Actualizar propiedad

export const updatePropiedades = async (req, res) => {
  const { id } = req.params;

  const data = {};
  if (req.body.descripcion !== undefined) data.descripcion = req.body.descripcion;
  if (req.body.area !== undefined) data.area = req.body.area;
  if (req.body.ubicacion !== undefined) data.ubicacion = req.body.ubicacion;
  if (req.body.precio !== undefined) data.precio = req.body.precio;
  if (req.body.titulo !== undefined) data.titulo = req.body.titulo;
  if (req.body.baños !== undefined) data.baños = req.body.baños;
  if (req.body.habitaciones !== undefined) data.habitaciones = req.body.habitaciones;

  if (Object.keys(data).length === 0) {
    return res.status(422).json({
      error: "descripcion, area, ubicacion, precio, titulo, baños y habitaciones son requeridos"
    });
  }

  const updated = await Model.updatePropiedad(id, data);

  if (!updated) {
    return res.status(404).json({ error: "Propiedad no encontrada" });
  }

  res.json(updated);
};
