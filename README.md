# Proyecto de Gestión de Tareas con Django RF y Angular

Este proyecto es una aplicación web sobre tareas que permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) así como cambiar sus estados. La aplicación consume la API realizada en Django Rest Framework para el backend y Angular para el frontend.

## Características

- Creación, edición y eliminación de tareas.
- Cambio de estados de las tareas: "A realizar", "En progreso" o "Hecha o completada"
- Interfaz de usuario moderna y receptiva creada con Angular.
- API RESTful proporcionada por Django Rest Framework para la gestión de datos.

## Tecnologías Utilizadas

- **Backend:** Django, Django Rest Framework
- **Frontend:** Angular
- **Base de Datos:** SQLite
- **Lenguajes:** Python, TypeScript
- **Herramientas:** Angular CLI, Django CLI

## Instalación y Uso

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/Frank-Grijalba/TaskProject-DRF-Angular.git

   cd TaskProject-DRF-Angular.git
   ```

2. **Configura el Backend:**

Instala las dependencias del backend:

  ```bash
  cd backend
  pip install -r requirements.txt
  ```
Realiza migraciones y crea la base de datos:

  ```bash
  python manage.py makemigrations
  python manage.py migrate
  ```

Inicia el servidor del backend:

```bash
python manage.py runserver
```

3. **Configura el Frontend:**

Instala las dependencias del Frontend

```bash
  cd frontend
  npm install
```

Inicia el servidor del frontend:

```bash
  ng serve
```

4. **Explora**

Abre tu navegador y accede a http://localhost:4200 para ver la aplicación en acción.

# Author

👤 **Frank J. Grijalba H.**

- Twitter: [@FrankGrijalba](https://twitter.com/FrankGrijalba)
- Github: [@FRANK-GRIJALBA](https://github.com/FRANK-GRIJALBA)
- LinkedIn: [@FRANK-GRIJALBA](https://www.linkedin.com/in/frank-grijalba)
