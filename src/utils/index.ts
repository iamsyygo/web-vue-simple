import { readdirSync } from 'fs';
/**
 * 获取目录下所有的子目录
 * @param {string} dir
 * @return
 */
export function getChildrenDirs(dir: string) {
  const ds = readdirSync(dir);
  console.log(ds, 'ds');
}
