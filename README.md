# Router Main

package of react-router-dom

## Example
```
const routes: PathApp[] = [
    {
        label: 'Home',
        path: '/',
        // funcion que regresa un elemento
        Element: Home
    },
    {
        label: 'Contact',
        path: '/contacto',
        // funcion que regresa un elemento
        Element: Contact
    }
]


<RouterApp paths={routes}>


    // devuelve el componente segun el path
    <RoutesApp />

</RouterApp>

```
