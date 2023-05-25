export const consoleShow = (name: any, value: any) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`${name}`, "");
    // console.log(`${name}`, value);
  } else {
    return;
  }
};
