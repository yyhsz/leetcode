/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
// 1. 构造二维数组
// 2. 填充二维数组的值为面积
// 3. 根据面积计算输出值（不要忘了前缀和数组的长度比原数组大一）
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const m = matrix.length; //line
  const n = matrix[0].length; //col
  this.preSum = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0)); // 此处 Array(m + 1).fill(0) 的 fill(0) 是不能省的，否则被创建的数组无法操作。
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      this.preSum[i][j] = this.preSum[i - 1][j] + this.preSum[i][j - 1] + matrix[i - 1][j - 1] - this.preSum[i - 1][j - 1]
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return this.preSum[row2 + 1][col2 + 1] - this.preSum[row1][col2 + 1] - this.preSum[row2 + 1][col1] + this.preSum[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

