const scale = (num, inMin, inMax, outMin, outMax) => {
  if (num < in_min) return 0;
  if (num > in_max) return 100;

  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
