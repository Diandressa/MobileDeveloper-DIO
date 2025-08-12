export enum ContentType {
  // Tipos comuns
  JSON = "application/json",
  TEXT = "text/plain",
  HTML = "text/html",
  XML = "application/xml",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",

  // Arquivos e mídia
  OCTET_STREAM = "application/octet-stream",
  PDF = "application/pdf",
  ZIP = "application/zip",
  GZIP = "application/gzip",

  // Imagens
  PNG = "image/png",
  JPEG = "image/jpeg",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  WEBP = "image/webp",
  ICO = "image/x-icon",

  // Áudio e vídeo
  MP3 = "audio/mpeg",
  OGG = "audio/ogg",
  WAV = "audio/wav",
  MP4 = "video/mp4",
  WEBM = "video/webm",

  // Outros
  CSV = "text/csv",
  NDJSON = "application/x-ndjson",
  JAVASCRIPT = "application/javascript",
  WASM = "application/wasm"
}
