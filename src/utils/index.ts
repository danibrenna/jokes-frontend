const BASE_PATH = process.env.REACT_APP_API_URL;
export const fetchData = async (relativePath: string):Promise<{success:boolean, error: Error | null, response: any}> => {
  let response;
  let res;
  try {
    response = await fetch(`${BASE_PATH}${relativePath}`);
  } catch (error) {
    let err;
    if (error instanceof Error) {
      err = error;
    } else {
      err = new Error('Unknown Error')
    }
    return {success: false, error: err, response: null}
  }
  res = await response.json();
  return {success: true, error: null, response: res}
  
}