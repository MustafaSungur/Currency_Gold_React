function request() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("https://finans.truncgil.com/v2/today.json");
    const result = await response.json();
    if (response.ok) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

export const get = () => request();
