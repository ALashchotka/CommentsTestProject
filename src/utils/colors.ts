const COLORS = ['#485DC8', '#3EBFC6', '#FFC207', '#FF3E3B', '#00C958', '#387EFF'];

export function stringToColor(str: string) {
  return str ? COLORS[str.split('').reduce((acc, item) => acc + item.charCodeAt(0), 0) % COLORS.length] : '#C4C4C4';
}
