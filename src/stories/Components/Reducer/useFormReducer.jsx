const defaultState = {
  e: "",
  comp: 0,
  sub: 0,
  own: {
    n: "",
    pho: "",
    em: "",
  },
  l: {
    st: "",
    sui: "",
    ci: "",
    cou: "",
    post: "",
  },
};

const reducer = (state, action) => {
  if (action.type === "INFO") {
    return { info: action.payload };
  }
  return { defaultState };
};

export default reducer;
