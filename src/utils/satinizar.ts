export const satinizar = (html: string) => {
  const wrapperText = document.createElement('div');
  wrapperText.innerHTML = html;
  return wrapperText.textContent;
};
