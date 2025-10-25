# API REST con Node.js y Firebase

## Descripcion

API REST para gestion de propiedades en venta desarrollado con Node.js y Express.

## Instalacion

1. Clonar el repositorio
2. Instalar dependencias:

```shell
npm install
```

3. Configurar variables de entorno

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

# 🏠 Documentación de la API de Propiedades en Miami

Esta API permite consultar, filtrar, crear, actualizar y eliminar propiedades inmobiliarias en la ciudad de Miami.

---

## 📍 Obtener todas las propiedades

**GET** `/api/propiedades`

**Descripción:** Devuelve la lista completa de propiedades disponibles.

**Respuesta ejemplo:**

```json
[
  {
    "id": 1,
    "titulo": "Apartamento en Brickell City Centre",
    "ubicacion": "68 SE 6th St, Miami, FL 33131",
    "precio": "$1,100,000",
    "area": 112,
    "habitaciones": 2,
    "baños": 2,
    "descripcion": "Moderno apartamento con acabados de lujo, cerca del centro financiero y tiendas exclusivas."
  },
  {
    "id": 2,
    "titulo": "Penthouse en Downtown Miami",
    "ubicacion": "Downtown, Miami, FL",
    "precio": "$2,300,000",
    "area": 180,
    "habitaciones": 3,
    "baños": 3,
    "descripcion": "Penthouse con terraza privada, vista panorámica y acabados de lujo."
  },
  {
    "id": 3,
    "titulo": "Apartamento en Aston Martin Residences",
    "ubicacion": "300 Biscayne Blvd Way, Miami, FL 33131",
    "precio": "$630,000",
    "area": 113,
    "habitaciones": 2,
    "baños": 3,
    "descripcion": "Residencia de lujo con vista al mar, diseño exclusivo y acceso a servicios premium."
  },
  {
    "id": 4,
    "titulo": "Loft en Wynwood",
    "ubicacion": "Wynwood, Miami, FL",
    "precio": "$780,000",
    "area": 130,
    "habitaciones": 1,
    "baños": 2,
    "descripcion": "Loft artístico con diseño industrial, ideal para creativos y emprendedores."
  },
  {
    "id": 5,
    "titulo": "Apartamento en Midtown Miami",
    "ubicacion": "3250 NE 1st Ave, Miami, FL 33137",
    "precio": "$720,000",
    "area": 105,
    "habitaciones": 2,
    "baños": 2,
    "descripcion": "Apartamento contemporáneo con acceso a tiendas, restaurantes y transporte público."
  }
]


  ### Obtener todos las propiedades

  - **GET** `/api/propiedades?rooms=numero-de-habitaciones`
  - **Descripcion:** Devuelve las propiedades cuyo numero de habitaciones sea las requeridas en la peticion/
  - **Parametros:**
   - `numero de habitaciones` (query, requerido): numero de habitaciones a buscar.
  - **Ejemplo de uso:** `/api/propiedades?rooms=2`
  - **Respuesta ejemplo:**

  ```json
[
    {
        "id": "wYGdb8PLs0aZkrqn5yvH",
        "titulo": "Apartamento en Brickell City Centre",
        "precio": "$1,100,001",
        "baños": 2,
        "habitaciones": 2,
        "descripcion": "Moderno apartamento con acabados de lujo, cerca del centro financiero y tiendas exclusivas.",
        "ubicacion": "68 SE 6th St, Miami, FL 33131",
        "area": "112"
    }
]
  