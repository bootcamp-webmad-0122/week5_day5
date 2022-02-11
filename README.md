# week5_day4

> Express | File upload
>
> Express | CDN file upload



## Main points: file upload (CDN)

- Los formularios con controles de tipo `file` requeren el atributo `enctype="multipart/form-data"` para procesar el envío de archivos.

- La dependencia `multer` crea en el objeto `request` la propiedad `file` donde guarda los detalles de la subida tras actuar como middleware.

- Las propiedades del objeto `req.file` son:

  * fieldname
  * originalname
  * encoding
  * mimetype
  * size
  * destination
  * filename
  * path
  * buffer

- Las dependencias `cloudinary`, `multer-storage-cloudinary` y `multer` pueden combinarse para conectar Express al CDN Cloudinary.
