const buttons = () => ({

  ".button": {
    "--button-font-size": "16px",
    "--button-line-height": "var(--halfstep)",
    "--button-padX-default": "var(--md)",
    "--button-padX-sideWithIcon": "calc(1em * calc(var(--wholestep) / var(--xl-unitless)))",
    "--button-padY": "calc(var(--button-font-size) * calc(var(--halfstep) / var(--xl-unitless)))",
    "--button-gap": "var(--button-padX-sideWithIcon)",
    display: "inline-block",
    border: "1px solid rgba(0, 0, 0, 0)",
    borderRadius: "100em",
    position: "relative",
    textDecoration: "none",
    whiteSpace: "normal",
    wordBreak: "keep-all",
    overflow: "hidden",
    padding: `var(--button-padY) * calc(var(--halfstep) / var(--xl-unitless) 1em`,
    "line-height": "var(--button-line-height)"
  },
  "button-content": {
    display: "flex",
    "align-items": "center",
    gap: "var(--button-gap)",
    position: "relative",
  },
  "end-icon": {
    "padding-right": "var(--button-padX-sideWithIcon)"
  },
  "start-icon": {
    "padding-left": "var(--button-padX-sideWithIcon)"
  },
  "button-outline": {
    "display": "inline-block",
    "border": "1px solid var(--light__outline_lkv)",
    "border-radius": "100em",
    "position": "relative",
    "text-decoration": "none",
    "white-space": "normal",
    "word-break": "keep-all",
    "overflow": "hidden",
    "background-color": "rgba(0, 0, 0, 0)",
    "color": "var(--light__primary_lkv)"
  }
})

