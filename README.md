# learning-JS-POO

# Ejercicios de Programación Orientada a Objetos (POO) en JavaScript

El código inicialmente, proporciona implementaciones de tres clases en JavaScript para practicar Programación Orientada a Objetos (POO): Persona, Empleado, y Cliente. Cada clase tiene atributos específicos, métodos de acceso (getters y setters) y un método toString para obtener una representación en cadena de la instancia. La clase Empleado y Cliente heredan de la clase base Persona. Se han realizado pruebas de creación de instancias y llamadas a los métodos toString para verificar la representación de las instancias. El objetivo es familiarizarse con los conceptos fundamentales de la POO en JavaScript. Un resumen para un archivo README en un repositorio de ejercicios de POO.

# Sistema de Gestión de Productos y Órdenes

Este proyecto implementa un sistema simple de manejo de productos y órdenes en JavaScript, utilizando conceptos de programación orientada a objetos (POO).

## Clase `Producto`

- **Atributos Estáticos:**
  - Se utiliza un atributo estático `contadorProducto` para asignar identificadores únicos a los productos.

- **Constructor:**
  - Cada instancia de `Producto` tiene un identificador único (`idProducto`), nombre (`_nombre`), y precio (`_precio`).

- **Métodos Getters y Setters:**
  - Se implementan métodos `get` y `set` para acceder y modificar los atributos de la clase de manera controlada.

- **Método `toString`:**
  - Se define un método `toString` que devuelve una representación en cadena del producto.

## Clase `Orden`

- **Atributos Estáticos:**
  - Se utiliza un atributo estático `contadorOrdenes` para asignar identificadores únicos a las órdenes.

- **Atributo Constante:**
  - Se define una constante `MAX_PRODUCTOS` para limitar la cantidad máxima de productos por orden.

- **Constructor:**
  - Cada instancia de `Orden` tiene un identificador único (`_idOrden`), una lista de productos (`_productos`), y un contador de productos agregados (`_contadorProductosAgregados`).

- **Método Getter:**
  - Se implementa un método `get` para acceder al identificador de la orden.

- **Método `agregarProducto`:**
  - Añade un producto a la orden si no se ha alcanzado el límite de productos.

- **Método `calcularTotal`:**
  - Calcula el total de ventas sumando los precios de los productos en la orden.

- **Método `mostrarOrden`:**
  - Muestra la información de la orden, incluyendo el identificador, el total y la lista de productos.

## Pruebas

- Se crean instancias de la clase `Producto` (`producto1`, `producto2`, `producto3`).
- Se crean instancias de la clase `Orden` (`orden1`, `orden2`) y se agregan productos a cada orden.
- Se muestra la información de cada orden.
