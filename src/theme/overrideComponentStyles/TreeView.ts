export default function TreeView(theme: any) {
  return {
    MuiTreeView: {},
    MuiTreeItem: {
      styleOverrides: {
        label: { ...theme.typography.body2 },
        iconContainer: { width: 'auto' },
      },
    },
  }
}
