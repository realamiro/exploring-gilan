export const textSlicer = (text) => {
  if(typeof text !== 'string') return;
  return text.slice(0, 252) + '...' ;
}
