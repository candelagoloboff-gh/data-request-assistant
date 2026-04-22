# material-hu

material-hu es el repositorio para compartir código entre los proyectos web de Humand.

### Requisitos

- Node.js: 24.11.1
- npm: 11.6.2

### Instrucciones

Ante de pushear al repo, es necesario correr `npm run tsc` para compilar los cambios.

## HuGo

HuGo es el Design System de Humand.

Links útiles:

[Foundations](https://www.figma.com/design/JZaQqFSAyJBX6RC1aBVKTp/Foundations)

[Components](https://www.figma.com/design/mLRasWttlTuAWuE0MeBeWD/Components)

### Demo

Una live demo hecha con [Storybook](https://storybook.js.org/) puede encontrarse en https://hugo.humand.co/. La demo se actualiza automáticamente con cada push a la branch `main`. No es necesario hacer un build de storybook a mano.

Puedes correr el Storybook localmente con `npm run start-storybook`.

### Traducciones (i18n)

Las traducciones de material-hu viven en el paquete centralizado `hu-translations`, dentro del archivo `material_hu_only.json`.

**Para agregar o modificar una traducción:**

1. Agregar la key en `hu-translations/locale/es/material_hu_only.json` (español es el source of truth)
2. En el componente, usar `useTranslation('material_hu_only')` y `t('seccion.key')`
3. **No** hardcodear strings ni usar `addResources()` dentro de este repo

**Si se agrega un nuevo idioma:**

Además de agregarlo en `hu-translations`, hay que registrarlo en `.storybook/i18n.ts`:
1. Agregar el import del nuevo locale
2. Agregar la entrada en `SUPPORTED_LOCALES`
3. Agregar la entrada en `resources` del `i18next.init()`

#### TinyMCE

Estamos exportando TinyMCE desde este repo para poder usarlo localmente y que no se descargue cada vez que corre. En la versión 7 de TinyMCE se [modificó la licencia](https://github.com/tinymce/tinymce/issues/9453) haciendolo incompatible con Humand. Es por eso que no podemos actualizar el package `@tinymce/tinymce-react` a su versión 5. La versión 4 de `@tinymce/tinymce-react` todavía usa TinyMCE 6.
