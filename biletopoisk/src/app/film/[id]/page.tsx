export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div className=" bg-white rounded-lg">
        <section className="flex w-100 w-full bg-white rounded-lg p-6">
          <img className="w-96 rounded-lg" src="" alt="постер" />
          <div className="flex flex-col flex-1">
            <h1 className="text-3xl mb-2">
              Властелин колец: Братство кольца
            </h1>
            <p className="mb-4">
              <span className="font-bold">Жанр:</span> Фэнтези
            </p>
            <p className="mb-4">
              <span className="font-bold">Год выпуска:</span> 2001
            </p>
            <p className="mb-4">
              <span className="font-bold">Рейтинг:</span> 8
            </p>
            <p className="mb-4">
              <span className="font-bold">Режиссер:</span> Питер Джексон
            </p>
            <p className="mt-4">
              <span className="font-bold block mb-4">Описание:</span>
              Сказания о Средиземье — это хроника Великой войны за Кольцо,
              длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал
              неограниченную власть, но был обязан служить злу. Тихая деревня,
              где живут хоббиты. Придя на 111-й день рождения к своему старому
              другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор
              о кольце, которое Бильбо нашел много лет назад. Это кольцо
              принадлежало когда-то темному властителю Средиземья Саурону, и оно
              дает большую власть своему обладателю. Теперь Саурон хочет вернуть
              себе власть над Средиземьем. Бильбо отдает Кольцо племяннику
              Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.
            </p>
          </div>
          <div className="ml-auto flex items-start">
            <button>-</button>
            <p> 0 </p>
            <button>+</button>
          </div>
        </section>
      </div>
      <ul className="flex flex-col gap-6">
        <li className="flex gap-6 bg-white rounded-lg p-6">
          <img src="" alt="" />
          <div className="flex flex-col">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold">Роман</h3>
              <div>
                Оценка: <span className="font-bold">8</span>
              </div>
            </div>
            <p>
              По счастью мне довелось посмотреть фильм раньше, чем прочесть
              книгу. Это было около четырех лет назад, но тот момент я вспоминаю
              и по сей день. До него я не был фанатом Джона Толкина, как
              впрочем, и всего фентези в целом, однако стоило мне посмотреть
              первые десять минут фильма и оставшиеся пролетели на одном
              дыхании. Я словно погрузился в необычайный мир, где добро борется
              со злом, где зеленые рощи перемежаются с поросшими мхом статуями и
              древними развалинами, в мир, где пробираясь лесною тропой можно
              встретить остроухих неувядающих эльфов или мерзких орков – кому
              как повезет...
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
