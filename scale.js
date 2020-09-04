const scale = (num, inMin, inMax) => {
  if (num < in_min) return 0;
  if (num > in_max) return 100;

  return (num - inMin) * 100 / (inMax - inMin);
}
