# Codebox OSS-Fuzz Integration

## Introducción

Este proyecto es desarrollado por el grupo número 8 de la materia de Desarrollo de Software Seguro, NRC 14943; aunque hubo una época en la que nos quiso cambiar de grupo :(. 
**Integrantes**
- Mathias Guevara
- Christopher Iza
- Shared Tinoco

Este proyecto se enfoca en la integración de Codebox con OSS-Fuzz para comprender el uso de la herramienta y para intentar encontrar vulnerabilidades dentro del sistema.

**¿Qué es Codebox?**

Codebox es un IDE modular y completo basado en la nube. Puede ejecutarse en cualquier máquina con un sistema operativo similar a Unix (Linux, Mac OS X). Es un componente de código abierto de codebox.io (Cloud IDE as a Service).

El IDE puede ejecutarse en tu escritorio (Linux o Mac), en tu servidor o en la nube. Puedes utilizar el servicio codebox.io para alojar y gestionar instancias de IDE.

Codebox está construido con tecnologías web: node.js, javascript, html y less. El IDE tiene una arquitectura muy modular y extensible, que permite construir tus propias características mediante complementos. Codebox es el primer IDE abierto y modular capaz de ejecutarse tanto en el escritorio como en la nube (con soporte sin conexión).

El proyecto es de código abierto bajo la licencia Apache 2.0. Un screencast del IDE está disponible en YouTube.

**¿Qué se probó?**

Dentro del código original del proyecto se realizaron pruebas para diferentes funciones dentro del sistema. Una de estas pruebas es la gestión de usuarios. En base a este archivo de pruebas se realizó el fuzz.

## Pasos para utilizar

1. **Clonar el repositorio de OSS-FUZZ** desde [este link](https://github.com/google/oss-fuzz).

2. **Crear una carpeta** llamada "codebox" dentro de la carpeta de "projects".

3. **Pegar los archivos** de este repositorio en la carpeta recién creada.

4. **Navegar a la carpeta creada**: 

    ```bash
    cd /projects/codebox
    ```

5. **Construir la imagen de Docker** para Codebox:

    ```bash
    py infra/helper.py build_image --pull codebox
    ```

    Este comando construye una imagen de Docker personalizada para Codebox, asegurándose de que todas las dependencias necesarias estén presentes. Esto crea, además, las imágenes necesarias para ejecutar oss-fuzz localmente.

6. **Construir los fuzzers**:

    ```bash
    py infra/helper.py build_fuzzers codebox
    ```

    Este comando compila los fuzzers para Codebox. Durante este proceso, se instalarán todas las dependencias del proyecto. Por este motivo, esto puede tomar algún tiempo.

7. **Ejecutar el fuzzer**:

    ```bash
    py infra/helper.py run_fuzzer codebox fuzz_workspace
    ```

    Este comando ejecuta el fuzzer contra Codebox utilizando el corpus en `fuzz_workspace`, buscando posibles vulnerabilidades o errores en el código.

Cabe recalcar que la construcción de esto se generará en la carpeta "build", y es ahí donde se pueden apreciar los archivos del código original, junto con los reportes de crash (en caso de que ocurra) y demás. En esta carpeta también se podrán apreciar los ejecutables de los fuzz, aunque en este caso se realizó solo 1.
