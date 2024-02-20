/*
 * @lc app=leetcode.cn id=609 lang=javascript
 *
 * [609] 在系统中查找重复文件
 */

// @lc code=start
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const map = {}
  const res = []
  for (let i = 0; i < paths.length; i++) {
    const [path, ...files] = paths[i].split(' ');
    for (let j = 0; j < files.length; j++) {
      const file = files[j];
      const i = file.indexOf('(');
      const content = file.slice(i, file.length - 1);
      const fileName = file.slice(0, i);
      const absFileName = `${path}/${fileName}`;
      if (map[content]) {
        map[content].push(absFileName)
      } else {
        map[content] = [absFileName]
      }
    }
  }
  Object.keys(map).forEach(key => {
    if (map[key].length > 1) {
      res.push(map[key]);
    }
  })
  return res;
};
// @lc code=end

