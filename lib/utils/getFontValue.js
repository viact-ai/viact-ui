// @mui
function pxToRem(value) {
    return `${value / 16}rem`;
}
// ----------------------------------------------------------------------
// function useWidth() {
//   const theme = useTheme();
//   const keys = [...theme.breakpoints.keys].reverse();
//   return (
//     keys.reduce((output, key) => {
//       // eslint-disable-next-line react-hooks/rules-of-hooks
//       const matches = useResponsive('up', key);
//       return !output && matches ? key : output;
//     }, null) || 'xs'
//   );
// }

export { pxToRem };
//# sourceMappingURL=getFontValue.js.map
