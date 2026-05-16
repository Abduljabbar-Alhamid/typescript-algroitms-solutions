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

// problem 3

function climbStairs(n: number): number {
  if (n <= 1) return 1;

  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1]! + dp[i - 2]!;
  }

  return dp[n]!;
}

//problem 4

function canJump(arr: number[]): boolean {
  let maxReach = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > maxReach) return false; // can't reach index i
    maxReach = Math.max(maxReach, i + arr[i]!);
    if (maxReach >= arr.length - 1) return true;
  }

  return true;
}

// problem 5

function rodCutting(price: number[], n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);

  for (let len = 1; len <= n; len++) {
    for (let cut = 1; cut <= len; cut++) {
      dp[len] = Math.max(dp[len]!, price[cut]! + dp[len - cut]!);
    }
  }

  return dp[n]!;
}
