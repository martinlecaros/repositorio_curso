// catch clause
let input = '...';

try {
  JSON.parse(input);
} 
catch {
  console.log(`Invalid JSON given with ${input}`);
}

