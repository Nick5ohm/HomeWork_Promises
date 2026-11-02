import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((saving) => {
    // saving — это готовый объект класса GameSaving
    console.log('Успешно загружено:', saving);
  })
  .catch((error) => {
    // обработка ошибок
    console.error('Произошла ошибка при загрузке:', error);
  });