# Dashboard - Improgress
## Gestión de Empleados

Este proyecto es una aplicación web desarrollada en **React** que permite gestionar y visualizar información sobre empleados, rendimiento y usuarios de la empresa. La aplicación incluye dashboards de rendimiento y tablas de empleados.

---

## 📂 Estructura del Proyecto
```bash
├─ assets/ # Imágenes y recursos estáticos
├─ components/ # Componentes reutilizables
│ ├─ employees/ # Componentes relacionados con empleados
│ ├─ navbar/ # Navbar y sidebar
│ └─ rendimiento/ # Dashboard de rendimiento
├─ pages/ # Páginas principales de la aplicación
│ ├─ Ajustes.jsx # Página de ajustes del usuario
│ ├─ Ayuda.jsx # Página de ayuda
│ ├─ Employees.jsx # Página de lista de empleados
│ ├─ Rendimiento.jsx # Página principal del dashboard de rendimiento
│ ├─ Revision.jsx # Página de revisión de información
│ └─ Usuarios.jsx # Página de gestión de usuarios
├─ styles/ # Archivos CSS
├─ App.jsx # Componente raíz
└─ main.jsx # Punto de entrada
```


---

## 🚀 Rutas de la Aplicación

La navegación se maneja con **React Router**, y las principales rutas disponibles son:

| Ruta                  | Componente/Página         | Descripción                                      |
|-----------------------|--------------------------|------------------------------------------------|
| `/`                   | `Rendimiento.jsx`        | Página principal del dashboard de rendimiento |
| `/ajustes`            | `Ajustes.jsx`            | Página de ajustes del usuario                 |
| `/ayuda`              | `Ayuda.jsx`              | Página de ayuda                               |
| `/employees`          | `Employees.jsx`          | Lista y gestión de empleados                  |
| `/revision`           | `Revision.jsx`           | Página de revisión de información             |
| `/usuarios`           | `Usuarios.jsx`           | Gestión de usuarios                           |

---

## 🛠 Tecnologías

- **React 18**  
- **React Router DOM**  
- **Recharts** para gráficos  
- **CSS puro y modular**  
- **React Icons** para iconografía  

---

## 📦 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/usuario/nombre-proyecto.git
```
2. Instalar dependencias
```bash
cd nombre-proyecto
npm install 
npm install react-router-dom react-icons recharts
```
3. Ejecutar la aplicación en modo desarrollo
```bash
npm run dev
```
4. Visualizar aplicación en http://localhost:5173

##📄 Licencia

Este proyecto está bajo la licencia MIT.
