import getData from './utils/getData.ts';
import puzzleOne from './puzzleOne.ts';
import puzzleTwo from './puzzleTwo.ts';

const readPermission = { name: 'read', path: './data/data.txt' } as const;
const permissionStatus = await Deno.permissions.request(readPermission);

if (permissionStatus.state === 'granted') {
  const data = getData();

  console.log(`Puzzle one: ${puzzleOne(data)}`);
  console.log(`Puzzle two: ${puzzleTwo(data)}`);
} else {
  console.error('Please allow read permissions.');
}
