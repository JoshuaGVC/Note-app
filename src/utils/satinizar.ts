export const satinizar = (html: string): string => {
  const wrapperText = document.createElement('div');
  wrapperText.innerHTML = html;
  return wrapperText.textContent as string;
};
