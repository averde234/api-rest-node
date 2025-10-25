import { Router } from "express";
import {
  getAllPropiedades,
  getPropiedadesById,
  createPropiedades,
  deletePropiedades,
  updatePropiedades
} from "../controllers/propiedades.controller.js";

const router = Router();

router.get("/propiedades", getAllPropiedades);
router.get("/propiedades/:id", getPropiedadesById);
router.post("/propiedades", createPropiedades);
router.delete("/propiedades/:id", deletePropiedades);
router.patch("/propiedades/:id", updatePropiedades);

export default router;