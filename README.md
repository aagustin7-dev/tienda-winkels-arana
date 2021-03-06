# Tienda Winkels - Ecommerce

En el siguiente documento cubrimos los siguientes temas

- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalacion)
- [Ejecución](#ejecucion)
- [Dependencias Agregadas](#dependencias-utilizadas)
- [Lineamientos de Git](#lineamientos-de-git)
- [Ejemplo de Compra](#gif-de-compra)
- [Información de Autor](#autor)


## Estructura del proyecto

Este proyecto es una _tienda online_ la cual simula un ecommerce con fines de adquirir diferentes productos. A su vez,
cuenta con un directorio único donde se alojan todos los componentes que componen la aplicación.

Dentro de la carpeta `/src` tenemos sub-carpetas agrupando distintos _dirs_ según tipo:

- **assets** agrupa todo lo relacionado a _css_ e _images_
- **components** contiene todos los _componentes_ que hacen posible el funcionamiento de la tienda online.


> Las dependencias/librerías instaladas se podrán visualizar dentro del archivo `package.json` del proyecto.

## Instalación

Para instalar cualquier dependencia o librería, se deberá correr el siguiente comando (posicionado sobre la carpeta raíz del proyecto)

```
npm
```

**IMPORTANTE: Durante toda la creación del proyecto, hemos utilizado npm**

## Ejecución

Para ejecutar el software y emular la aplicación de Winkels, primero tendremos que estar situados en la carpeta raíz del proyecto para luego
poder inicializar mediante la ejecución del comando `npm start`. Luego, se podrá apreciar en el navegador. 

## Dependencias Agregadas

La aplicación cuenta con el uso incorporado de las siguientes librerías:

- [Material UI](https://mui.com/) -> Con fines de darle estilos y colores a la tienda
- [React Router DOM](https://www.npmjs.com/package/react-router-dom) -> Con fines de poder realizar el ruteo necesario dentro de la aplicación
- [Firebase](https://console.firebase.google.com/) -> Con fines de emular una base de datos

## Lineamientos de Git

Para construir la tienda, esta aplicación utilizó la interacción con Github mediante sus comandos básicos para poder refrescar y actualizar
el código. Por otra parte, podríamos también habernos basado en el [Github Flow](https://guides.github.com/introduction/flow/) y usar `Squash and merge` para hacer el _merge_ de cada _pull request_.
(En caso de haber utilizado PRs para pushear el código y no tocar master hasta el final del proyecto, pero no fue necesario)

## Ejemplo de Compra en Winkels

![Alt Text](https://github.com/aagustin7-dev/tienda-winkels-arana/blob/master/winkels-agustin-arana.gif)

## Autor

Este proyecto fue realizado por Agustin Arana.



