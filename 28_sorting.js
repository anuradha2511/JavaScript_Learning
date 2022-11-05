

const arrayNumbers = ["Anil", "Shantanu", "Nutan", "Suyog", "DD", "Pradnya"];
arrayNumbers.sort();
console.log(arrayNumbers);

const arrayOfNumbers = [22, 360, 50, 100, 600, 77, 455];
arrayOfNumbers.sort((first, second) => {
return (first > second ? 1 : -1) // sorting in ascending order (sorting in descending order return (first> second ? -1 : 1) )
} );
console.log(arrayOfNumbers);