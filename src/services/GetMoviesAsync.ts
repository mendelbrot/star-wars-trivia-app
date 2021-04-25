const BASE_URL: string = process.env['REACT_NATIVE_SWAPI_BASE_URL'] as string;

async function GetMoviesAsync() {
  try {
    let response = await fetch(BASE_URL + '/films');
    let json = await response.json();
    console.log(json)
    // return json.movies;
  } catch (error) {
    console.error(error);
  }
};

export default GetMoviesAsync;