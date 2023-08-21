const baseUrl = 'httttp://rickamdmorty.com/api/'
const character = baseUrl + 'character/'
 
export function GetMorty () {
  return fetch(character + '2').then(response => response.json())
}