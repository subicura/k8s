const goBack = (router, defaultUrl) => {
  if (typeof window !== "undefined" && window.__HAS_HISTORY_STATE) {
    router.go(-1);
  } else {
    location.href = defaultUrl || "/";
  }
};

export { goBack };
