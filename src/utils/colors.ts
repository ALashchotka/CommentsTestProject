const COLORS = ['#A0C4FF', '#B9FBC0', '#FFE156', '#FF677D', '#F5B4A2', '#C3B5E8'];

export function stringToColor(str: string) {
  return str ? COLORS[str.split('').reduce((acc, item) => acc + item.charCodeAt(0), 0) % COLORS.length] : '#C4C4C4';
}
