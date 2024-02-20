// 差分数组：脑海中构造出两个数组的画面，每一项 后减前 得到当前项
// 如何由差分数组得到原数组：原数组前一项加差分数组当前项即可
const n = 10;
const arr = Array(n).fill(0).map((_, i) => i);

// 构造差分数组
const diff = Array(arr.length).fill(0);
diff[0] = arr[0];
for (let i = 1; i < diff.length; i++) {
  diff[i] = arr[i] - arr[i - 1];
}

// 由差分数组还原
const origin = Array(diff.length).fill(0);
origin[0] = diff[0];
for (let i = 1; i < diff.length; i++) {
  origin[i] = diff[i] + origin[i - 1];
}
// 对区间的操作转换成对差分数组的操作；[startIdx,endIdx,increment] 
const param = [4, 9, -2];
function inc(param) {
  const [startIdx, endIdx, increment] = param;
  diff[startIdx] += increment;
  if (endIdx + 1 < diff.length) {
    diff[endIdx + 1] -= increment
  }

}



