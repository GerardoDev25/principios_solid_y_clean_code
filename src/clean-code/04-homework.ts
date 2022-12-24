(() => {
  function isRedFruit(fruit: string): boolean {
    const frutsNames = ['manzana', 'cereza', 'ciruela'];
    return frutsNames.includes(fruit);
  }

  type frutColor = 'red' | 'yellow' | 'purple';
  function getFruitsByColor(color: frutColor): string[] {
    const frutsColors = {
      red: ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas'],
    };

    if (frutsColors[color]) return frutsColors[color];

    throw Error('the color must be: red, yellow, purple');
  }

  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps(): string {
    if (!isFirstStepWorking) return 'First step broken.';
    if (!isSecondStepWorking) return 'Second step broken.';
    if (!isThirdStepWorking) return 'Third step broken.';
    if (!isFourthStepWorking) return 'Fourth step broken.';

    return 'Working properly!';
  }

  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' });
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' });

  console.log({ redFruits: getFruitsByColor('red') });
  console.log({ yellowFruits: getFruitsByColor('yellow') });
  console.log({ purpleFruits: getFruitsByColor('purple') });

  console.log({ workingSteps: workingSteps() });
})();
