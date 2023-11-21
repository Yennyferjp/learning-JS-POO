# learning-JS-POO

# Ejercicios de Programación Orientada a Objetos (POO) en JavaScript

Inicialmente, este repositorio contiene implementaciones de clases en JavaScript para practicar los conceptos de Programación Orientada a Objetos (POO).

## Contenido

### Clase Persona

- **Atributos:**
  - `_nombre`: Nombre de la persona.
  - `_apellido`: Apellido de la persona.
  - `_edad`: Edad de la persona.
  - `_idPersona`: Identificador único de la persona.

- **Métodos:**
  - `getters` y `setters` para acceder y modificar atributos.
  - `toString`: Método para obtener una representación en cadena de la instancia.

### Clase Empleado

- **Atributos Adicionales:**
  - `_sueldo`: Sueldo del empleado.
  - `_idEmpleado`: Identificador único del empleado.

- **Herencia:**
  - Hereda de la clase Persona.

- **Métodos Adicionales:**
  - `getters` y `setters` para el nuevo atributo.
  - `toString` para obtener la representación en cadena.

### Clase Cliente

- **Atributos Adicionales:**
  - `_fechaRegistro`: Fecha de registro del cliente.
  - `_idCliente`: Identificador único del cliente.

- **Herencia:**
  - Hereda de la clase Persona.

- **Métodos Adicionales:**
  - `getters` y `setters` para el nuevo atributo.
  - `toString` para obtener la representación en cadena.

## Ejecución de Pruebas

Se han incluido pruebas de creación de instancias para cada clase y llamadas a los métodos `toString` para verificar la correcta representación de las instancias.

## Objetivo

Este repositorio pretende proporcionar un conjunto básico de implementaciones en JavaScript para entender los conceptos fundamentales de la POO.

