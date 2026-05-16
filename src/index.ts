//problem 1
const floodFill = (
  img: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] => {
  const originalColor = img[sr]?.[sc];

  if (originalColor === undefined || originalColor === newColor) return img;

  function dfs(r: number, c: number): void {
    if (r < 0 || r >= img.length || c < 0 || c >= img[0]!.length) return;
    if (img[r]![c] !== originalColor) return;

    img[r]![c] = newColor;

    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  dfs(sr, sc);
  return img;
};

// problem 2

function trap(arr: number[]): number {
  const n = arr.length;
  if (n === 0) return 0;

  let left = 0,
    right = n - 1;
  let leftMax = 0,
    rightMax = 0;
  let water = 0;

  while (left < right) {
    const leftVal = arr[left]!;
    const rightVal = arr[right]!;

    if (leftVal <= rightVal) {
      if (leftVal >= leftMax) {
        leftMax = leftVal;
      } else {
        water += leftMax - leftVal;
      }
      left++;
    } else {
      if (rightVal >= rightMax) {
        rightMax = rightVal;
      } else {
        water += rightMax - rightVal;
      }
      right--;
    }
  }

  return water;
}
