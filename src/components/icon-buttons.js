const iconButtons = () => ({
  ".cell": {
    padding: "24px",
    backgroundColor: "var(--light__primary_lkv)",
  },

  ".icon-button": {
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--xs)",
    borderRadius: "100em",
    cursor: "pointer",
    fontSize: "calc(1em * var(--quarterstep))", // borrowed from heading
    border: "1px solid transparent",
  },

  ".icon-button.outlined": {
    border: "1px solid var(--light__outlinevariant_lkv)",
    backgroundColor: "transparent",
  },

  ".icon-button.text": {
    border: "1px solid transparent",
    backgroundColor: "transparent",
  },

  ".icon-button.xs": {
    fontSize: "calc(1em / var(--halfstep))",
  },

  ".icon-button.sm": {
    fontSize: "1em",
  },

  ".icon-button.lg": {
    fontSize: "calc(1em * var(--halfstep))",
  },

  ".icon-button.xl": {
    fontSize: "calc(1em * var(--wholestep))",
  },
});

export default iconButtons;
