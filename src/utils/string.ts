
const mimeTypes = {
  'text/plain': ['.txt'],
  'text/html': ['.html'],
  'text/css': ['.css'],
  'application/javascript;': ['.js'],
  'application/json': ['.json'],
  'image/vnd.microsoft.icon': ['.ico'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/gif': ['.gif'],
  'application/pdf': ['.pdf'],
  'font/woff2': ['.worf2'],
  'font/woff': ['.worf'],
  'font/ttf': ['.ttf'],
  'application/octet-stream': ['.mp4', '.avi'],
}

/**
 * 获取所有静态文件的后缀
 * @returns 
 */
export function getStaticFileExts() {
  const exts = Object.values(mimeTypes).flat();
  return ['.gz'].concat(exts);
}

/**
 * 获取文件 content-type 类型
 * @param filename 
 * @returns 
 */
export function getMimeType(ext: string) {
  ext = ext.toLowerCase();
  let type: string = null;
  for (const key in mimeTypes) {
    if (mimeTypes[key].includes(ext)) {
      type = key;
      break;
    }
  }
  return type;
}
