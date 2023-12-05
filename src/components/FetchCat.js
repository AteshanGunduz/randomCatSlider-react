export async function fetchCat() {
  try {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=8&size=full&breed_id=beng&sub_id=demo-ca06d4"
    );
    const cat = await res.json();
    return cat;
  } catch (e) {}
}