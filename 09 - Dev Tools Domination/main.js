const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

    // Regular
    console.log('Hello');

    // Interpolated
    console.log('Hello, I am a %s string!', 'simple')

    // Styled
    console.log('%c I am great text', 'font-size: 24px; background: red; text-shadow: 3px 3px 0 blue');

    // warning!
    console.warn('OH NO!');

    // Error :|
    console.error('ERROR!');

    // Info
    console.info('Just do it!')

    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.dir(p);
    console.clear();

    // Grouping together
    dogs.forEach((dog) => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/JaneEllison')
      .then((data) => data.json())
      .then((data) => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);
