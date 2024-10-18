export default snackbar

snackbar = () => ({
  ".cell": {
    padding: "24px",
    backgroundColor: "var(--light__primary_lkv)",
  },

  ".badge": {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--xs)",
    borderRadius: "var(--sm)",
    flex: "none",
    flexShrink: 0,
    flexGrow: 0,
  },

  ".badge.material-symbols-outlined": {
    fontSize: "calc(1em * var(--halfstep))",
  },

  ".badge.lg": {
    fontSize: "calc(1em * var(--halfstep))",
  },

  ".snackbar": {
    padding: "var(--sm)",
    gap: "var(--sm)",
    display: "flex",
    alignItems: "center",
    backgroundColor: "var(--light__surfacecontainerlowest_lkv)",
    fontSize: "1em",
    borderRadius: "var(--sm)",
  },

  ".snackbar-content": {
    display: "grid",
    gridTemplateColumns: "max-content 1fr max-content",
    alignItems: "center",
    gap: "var(--sm)",
  },

  ".snackbar-grid": {
    display: "grid",
    "grid-auto-flow": "column",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "repeat(8, auto)",
    gap: "1em",
  }
})
